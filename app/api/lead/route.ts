import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { site } from '@/lib/site';
import { isValidE164 } from '@/lib/phone';

// SplitForms access keys are public form identifiers, not API secrets. Keep the
// environment override so the form can be switched without a code deploy.
const ACCESS_KEY =
  process.env.SPLITFORMS_ACCESS_KEY ?? 'adc9e2eab8bc439ca7fc3c932a1d73c2';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 8;
const MIN_SUBMIT_TIME_MS = 1500;
const MAX_SUBMIT_AGE_MS = 24 * 60 * 60 * 1000;

// Notification email subject for every lead form, set here so a client cannot
// change it. SplitForms uses a field named exactly `subject` verbatim.
const LEAD_SUBJECT = 'Call Center Staffing – Website Inquiry';

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

// Phone arrives as dial code + national digits from components/forms/PhoneField,
// e.g. "+14035551234": a plus, then 7-15 digits (E.164 maximum) starting with a
// dial code from the country list (lib/phone), so "+9992025550123" is rejected.
const e164Phone = z.string().refine(isValidE164);

// Every lead field is required, matching the client-side schemas in
// components/forms.
const heroFieldsSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(180),
  company: z.string().min(2).max(160),
  website: z.string().trim().min(1).max(220),
  phone: e164Phone,
  agentCount: z.enum(['1-9', '10-49', '50-199', '200-499', '500+']),
  region: z.enum(['onshore-us', 'nearshore-latam', 'offshore-asia', 'multi-region', 'open']),
  'g-recaptcha-response': z.string().min(10).max(3000),
});

const staffingFieldsSchema = z.object({
  name: z.string().min(2).max(120),
  company: z.string().min(2).max(160),
  website: z.string().trim().min(1).max(220),
  email: z.string().email().max(180),
  phone: e164Phone,
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
  // The form's "Anything we should know?" notes, posted as `message`.
  message: z.string().trim().min(2).max(800),
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
  return (
    req.headers.get('cf-connecting-ip')?.trim() ||
    req.headers.get('x-real-ip')?.trim() ||
    forwarded ||
    null
  );
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
  // No client IP (no proxy header): do not put every visitor in one shared
  // 'unknown' bucket, where 8 leads in 10 minutes would block everyone else.
  // SplitForms still rate-limits the browser's own request by its real IP.
  if (!key) return false;
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

// Attribution is compacted before it reaches the notification email:
// - landing_page keeps the path only. Its query string repeats the utm_* values
//   sent separately and, on ad clicks, carries a 100-character gclid/msclkid/
//   fbclid token. SplitForms' content filter judges a form with no message
//   field by its LONGEST text value, and that token reads as gibberish, so
//   every Google/Microsoft/Meta ad lead from the quote form was quarantined
//   as spam with a success reply and no email.
// - click_id names the ad network instead of the opaque token (useless in an
//   email, and the same gibberish signal).
// - referrer keeps the host ("google.com"), not a full URL with a path/query.
const CLICK_ID_PARAMS: Record<string, string> = {
  gclid: 'Google Ads (gclid)',
  gbraid: 'Google Ads (gbraid)',
  wbraid: 'Google Ads (wbraid)',
  msclkid: 'Microsoft Ads (msclkid)',
  fbclid: 'Meta (fbclid)',
  ttclid: 'TikTok (ttclid)',
};

function compactAttribution(attribution: Attribution): Record<string, string> {
  const out: Partial<Record<keyof Attribution, string>> = { ...attribution };
  const [path, query = ''] = (attribution.landingPath ?? '').split('?');
  if (attribution.landingPath) out.landingPath = path || '/';
  if (attribution.clickId) {
    const params = new URLSearchParams(query);
    const network = Object.keys(CLICK_ID_PARAMS).find((k) => params.get(k) === attribution.clickId);
    out.clickId = network ? CLICK_ID_PARAMS[network] : 'yes';
  }
  if (attribution.referrer) {
    try {
      out.referrer = new URL(attribution.referrer).hostname.replace(/^www\./, '');
    } catch {
      out.referrer = attribution.referrer.split(/[/?#]/)[0];
    }
  }
  const result: Record<string, string> = {};
  for (const [key, label] of Object.entries(ATTRIBUTION_LABELS)) {
    const value = out[key as keyof Attribution];
    if (value) result[label] = value;
  }
  return result;
}

function prepareSplitformsPayload(
  accessKey: string,
  fields: Record<string, Primitive>,
  subject: string,
  source: string,
  page?: string,
  attribution?: Attribution,
) {
  // Insertion order is the order the notification email lists the fields:
  // the lead's own answers first, then where the lead came from.
  const fd = new FormData();
  fd.set('access_key', accessKey);
  fd.set('subject', subject);

  for (const [key, value] of Object.entries(fields)) {
    if (value === '') continue;
    fd.set(key, String(value));
  }

  fd.set('source', source);
  if (page) fd.set('page', page);
  if (attribution) {
    for (const [label, value] of Object.entries(compactAttribution(attribution))) {
      fd.set(label, value);
    }
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
      parsed.data.source === 'NewsletterForm' ? parsed.data.subject : LEAD_SUBJECT,
      parsed.data.source,
      parsed.data.page,
      parsed.data.attribution,
    ),
  });
}
