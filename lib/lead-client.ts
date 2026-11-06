'use client';

import { getAttribution } from '@/lib/attribution';

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

  const json = (await res.json()) as LeadResponse;
  if (!res.ok || !json.ready || !json.payload?.access_key) {
    throw new Error(json.message || 'Submission failed. Please try again.');
  }

  // Hidden field injected by https://splitforms.com/embed.js; lets SplitForms
  // drop the saved partial once this lead is delivered.
  const sid = (form?.elements.namedItem('sf_sid') as HTMLInputElement | null)?.value ?? '';
  const sfSid = /^[a-zA-Z0-9_-]{1,128}$/.test(sid) ? sid : '';

  // SplitForms' public form identifier is protected by its domain allowlist.
  // Only this browser request carries the visitor's genuine site Origin.
  const delivery = await fetch('https://splitforms.com/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(sfSid ? { ...json.payload, sf_sid: sfSid } : json.payload),
  });
  const result = (await delivery.json()) as LeadResponse;
  if (!delivery.ok || result.success !== true) {
    throw new Error(result.message || 'Submission failed. Please try again.');
  }

  // Tracking is optional: a blocked script must never undo a delivered lead.
  try {
    if (form) (window as Window & { splitforms?: { done?: (f: HTMLFormElement) => void } }).splitforms?.done?.(form);
  } catch {
    /* The lead has already been delivered. */
  }

  return { success: true };
}
