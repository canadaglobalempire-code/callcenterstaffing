import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { site } from '@/lib/site';

const ENDPOINT = 'https://splitforms.com/api/submit';
// SplitForms access keys are public form identifiers, not API secrets. Keep the
// environment override so the form can be switched without a code deploy.
const ACCESS_KEY =
  process.env.SPLITFORMS_ACCESS_KEY ?? 'adc9e2eab8bc439ca7fc3c932a1d73c2';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 8;
const MIN_SUBMIT_TIME_MS = 1500;
const MAX_SUBMIT_AGE_MS = 24 * 60 * 60 * 1000;

type RateBucket = {
  count: number;
  resetAt: number;
};

type RateGlobal = typeof globalThis & {
  __leadRateLimit?: Map<string, RateBucket>;
};

type Primitive = string | number | boolean;

const sourceSchema = z.enum(['HeroQuoteForm', 'StaffingPlanForm', 'NewsletterForm']);

const baseSchema = z.object({
  source: sourceSchema,
  subject: z.string().min(1).max(180),
  page: z.string().max(200).optional(),
  renderedAt: z.number().finite(),
  companyWebsite: z.string().max(0).optional(),
  fields: z.record(z.union([z.string(), z.number(), z.boolean()])),
});

const heroFieldsSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(180),
  company: z.string().min(2).max(160),
  website: z.string().max(220).optional(),
  phone: z
    .string()
    .min(7)
    .max(40)
    .regex(/^[\d+\-().\s]+$/),
  agentCount: z.enum(['1-9', '10-49', '50-199', '200-499', '500+']),
  region: z.enum(['onshore-us', 'nearshore-latam', 'offshore-asia', 'multi-region', 'open']),
  'g-recaptcha-response': z.string().min(10).max(3000),
});

const staffingFieldsSchema = z.object({
  name: z.string().min(2).max(120),
  company: z.string().min(2).max(160),
  website: z.string().max(220).optional(),
  email: z.string().email().max(180),
  phone: z
    .string()
    .min(7)
    .max(40)
    .regex(/^[\d+\-().\s]+$/),
  roleType: z.enum([
    'inbound-cs',
    'outbound-sales',
    'bilingual',
    'team-leads',
    'qa-wfm',
    'multiple',
  ]),
  agentCount: z.enum(['1-9', '10-49', '50-199', '200-499', '500+']),
  location: z.enum(['onshore-us', 'nearshore-latam', 'offshore-asia', 'multi-region', 'open']),
  notes: z.string().max(800).optional(),
  'g-recaptcha-response': z.string().min(10).max(3000),
});

const newsletterFieldsSchema = z.object({
  email: z.string().email().max(180),
});

const fieldSchemas = {
  HeroQuoteForm: heroFieldsSchema,
  StaffingPlanForm: staffingFieldsSchema,
  NewsletterForm: newsletterFieldsSchema,
} as const;

function getRateMap() {
  const g = globalThis as RateGlobal;
  if (!g.__leadRateLimit) {
    g.__leadRateLimit = new Map();
  }
  return g.__leadRateLimit;
}

function getClientKey(req: NextRequest) {
  const forwarded = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwarded || req.headers.get('x-real-ip') || 'unknown';
}

function isAllowedOrigin(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (!origin) return true;

  const host = req.headers.get('host');
  const allowedOrigins = new Set([
    site.url,
    host ? `http://${host}` : '',
    host ? `https://${host}` : '',
  ]);

  return allowedOrigins.has(origin);
}

function isRateLimited(req: NextRequest) {
  const key = getClientKey(req);
  const now = Date.now();
  const rateMap = getRateMap();
  const bucket = rateMap.get(key);

  if (!bucket || bucket.resetAt <= now) {
    rateMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX;
}

function validateSubmitTiming(renderedAt: number) {
  const age = Date.now() - renderedAt;
  return age >= MIN_SUBMIT_TIME_MS && age <= MAX_SUBMIT_AGE_MS;
}

function json(
  body: { success: boolean; message?: string },
  init?: { status?: number },
) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}

async function forwardToSplitforms(
  accessKey: string,
  fields: Record<string, Primitive>,
  subject: string,
  source: string,
  page?: string,
) {
  const fd = new FormData();
  fd.set('access_key', accessKey);
  fd.set('subject', subject);
  fd.set('source', source);
  if (page) fd.set('page', page);

  for (const [key, value] of Object.entries(fields)) {
    if (value === '') continue;
    fd.set(key, String(value));
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    body: fd,
    headers: { Accept: 'application/json' },
  });

  const json = (await res.json()) as {
    success?: boolean;
    message?: string;
  } & Record<string, unknown>;

  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Submission failed. Please try again.');
  }

  return json;
}

export async function POST(req: NextRequest) {
  if (!ACCESS_KEY) {
    console.error('SPLITFORMS_ACCESS_KEY is not configured.');
    return json(
      { success: false, message: 'Submission is temporarily unavailable. Please try again later.' },
      { status: 500 },
    );
  }

  if (!isAllowedOrigin(req)) {
    return json(
      { success: false, message: 'Submission origin could not be verified.' },
      { status: 403 },
    );
  }

  if (isRateLimited(req)) {
    return json(
      { success: false, message: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json(
      { success: false, message: 'Invalid request body.' },
      { status: 400 },
    );
  }

  const parsed = baseSchema.safeParse(body);
  if (!parsed.success) {
    return json(
      { success: false, message: 'Please check the form and try again.' },
      { status: 400 },
    );
  }

  if (parsed.data.companyWebsite || !validateSubmitTiming(parsed.data.renderedAt)) {
    return json(
      { success: false, message: 'Submission could not be verified.' },
      { status: 400 },
    );
  }

  const fieldsSchema = fieldSchemas[parsed.data.source];
  const fields = fieldsSchema.safeParse(parsed.data.fields);
  if (!fields.success) {
    return json(
      { success: false, message: 'Please check the form and try again.' },
      { status: 400 },
    );
  }

  try {
    await forwardToSplitforms(
      ACCESS_KEY,
      fields.data,
      parsed.data.subject,
      parsed.data.source,
      parsed.data.page,
    );
    return json({ success: true });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Submission failed. Please try again.';
    return json({ success: false, message }, { status: 502 });
  }
}
