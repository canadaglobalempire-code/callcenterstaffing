import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { site } from '@/lib/site';

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

// First-touch attribution captured client-side. Every field is optional and
// length-capped: it is untrusted visitor input (a referrer or utm_* value is
// attacker-controllable), so it is validated like any other form field and
// only ever forwarded as a string into the notification.
const attributionSchema = z
  .object({
    landingPath: z.string().max(300),
    referrer: z.string().max(300),
    utmSource: z.string().max(300),
    utmMedium: z.string().max(300),
    utmCampaign: z.string().max(300),
    utmTerm: z.string().max(300),
    utmContent: z.string().max(300),
    clickId: z.string().max(300),
    landedAt: z.string().max(300),
  })
  .partial();

const baseSchema = z.object({
  source: sourceSchema,
  subject: z.string().min(1).max(180),
  page: z.string().max(200).optional(),
  renderedAt: z.number().finite(),
  companyWebsite: z.string().max(0).optional(),
  attribution: attributionSchema.optional(),
  fields: z.record(z.union([z.string(), z.number(), z.boolean()])),
});

type Attribution = z.infer<typeof attributionSchema>;

// Labels the notification email shows. Keys mirror attributionSchema.
const ATTRIBUTION_LABELS: Record<keyof Attribution, string> = {
  landingPath: 'landing_page',
  referrer: 'referrer',
  utmSource: 'utm_source',
  utmMedium: 'utm_medium',
  utmCampaign: 'utm_campaign',
  utmTerm: 'utm_term',
  utmContent: 'utm_content',
  clickId: 'click_id',
  landedAt: 'landed_at',
};

// Every lead field is required (the staffing form's notes excepted), matching
// the client-side schemas in components/forms.
const heroFieldsSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(180),
  company: z.string().min(2).max(160),
  website: z.string().trim().min(1).max(220),
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
  website: z.string().trim().min(1).max(220),
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
  body: { success?: false; ready?: true; payload?: Record<string, string>; message?: string },
  init?: { status?: number },
) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}

function prepareSplitformsPayload(
  accessKey: string,
  fields: Record<string, Primitive>,
  subject: string,
  source: string,
  page?: string,
  attribution?: Attribution,
) {
  const fd = new FormData();
  fd.set('access_key', accessKey);
  fd.set('subject', subject);
  fd.set('source', source);
  if (page) fd.set('page', page);

  if (attribution) {
    for (const [key, label] of Object.entries(ATTRIBUTION_LABELS)) {
      const value = attribution[key as keyof Attribution];
      if (value) fd.set(label, value);
    }
  }

  for (const [key, value] of Object.entries(fields)) {
    if (value === '') continue;
    fd.set(key, String(value));
  }

  return Object.fromEntries(fd.entries()) as Record<string, string>;
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

  // Keep validation, timing, honeypot and rate checks here. The browser sends
  // the checked payload so SplitForms sees its real allowed-domain Origin.
  // "ready" is deliberately not delivery success.
  return json({
    ready: true,
    payload: prepareSplitformsPayload(
      ACCESS_KEY,
      fields.data,
      parsed.data.subject,
      parsed.data.source,
      parsed.data.page,
      parsed.data.attribution,
    ),
  });
}
