'use client';

import { getAttribution } from '@/lib/attribution';

/** Notification email subject for every lead form (app/api/lead enforces it too). */
export const LEAD_SUBJECT = 'Call Center Staffing – Website Inquiry';

/** "Thanks, John!" from a full name; "Thanks!" when there is none. */
export function thanksName(fullName?: string): string {
  const first = (fullName ?? '').trim().split(/\s+/)[0];
  return first ? `Thanks, ${first}!` : 'Thanks!';
}

/** Scroll to (and focus) the first field, in page order, whose name is listed. */
export function focusFirstInvalid(form: HTMLFormElement | null, names: string[]) {
  if (!form) return;
  const el =
    Array.from(form.querySelectorAll<HTMLElement>('[name]')).find((f) =>
      names.includes(f.getAttribute('name') ?? ''),
    ) ?? (names.length === 0 ? form.querySelector<HTMLElement>('[data-captcha]') : null);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) {
    el.focus({ preventScroll: true });
  }
}

const DELIVERY_FAILED =
  'Your inquiry could not be sent. Please try again, or email or call us directly.';

type Primitive = string | number | boolean | undefined;

type SubmitLeadArgs = {
  source: 'HeroQuoteForm' | 'StaffingPlanForm' | 'NewsletterForm';
  subject: string;
  renderedAt: number;
  companyWebsite?: string;
  fields: Record<string, Primitive>;
  // The submitted <form>, so the splitforms embed.js session (sf_sid) closes.
  form?: HTMLFormElement | null;
};

type LeadResponse = {
  success?: boolean;
  ready?: boolean;
  payload?: Record<string, string>;
  message?: string;
};

export async function submitLead({
  source,
  subject,
  renderedAt,
  companyWebsite = '',
  fields,
  form,
}: SubmitLeadArgs): Promise<{ success: true }> {
  const page = typeof window !== 'undefined' ? window.location.pathname : '';
  const attribution = getAttribution();
  const res = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      source,
      subject,
      page,
      renderedAt,
      companyWebsite,
      attribution,
      fields: Object.fromEntries(
        Object.entries(fields).filter(([, value]) => value !== undefined && value !== ''),
      ),
    }),
  });

  const json = (await res.json().catch(() => ({}))) as LeadResponse;
  if (!res.ok || !json.ready || !json.payload?.access_key) {
    throw new Error(json.message || 'Submission failed. Please try again.');
  }

  // Hidden field injected by https://splitforms.com/embed.js; lets SplitForms
  // drop the saved partial once this lead is delivered.
  const sid = (form?.elements.namedItem('sf_sid') as HTMLInputElement | null)?.value ?? '';
  const sfSid = /^[a-zA-Z0-9_-]{1,128}$/.test(sid) ? sid : '';

  // SplitForms' public form identifier is protected by its domain allowlist.
  // Only this browser request carries the visitor's genuine site Origin.
  // Only an explicit {success: true} from SplitForms counts as delivered. A
  // network error (offline, splitforms.com blocked by an extension), a non-JSON
  // reply or {success: false} is shown to the visitor instead of a fake thank-you.
  let delivery: Response;
  try {
    delivery = await fetch('https://splitforms.com/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(sfSid ? { ...json.payload, sf_sid: sfSid } : json.payload),
    });
  } catch {
    throw new Error(DELIVERY_FAILED);
  }
  const result = (await delivery.json().catch(() => ({}))) as LeadResponse;
  if (!delivery.ok || result.success !== true) {
    console.error('SplitForms rejected the lead', delivery.status, result);
    throw new Error(result.message || DELIVERY_FAILED);
  }

  // Tracking is optional: a blocked script must never undo a delivered lead.
  try {
    if (form) (window as Window & { splitforms?: { done?: (f: HTMLFormElement) => void } }).splitforms?.done?.(form);
  } catch {
    /* The lead has already been delivered. */
  }

  return { success: true };
}
