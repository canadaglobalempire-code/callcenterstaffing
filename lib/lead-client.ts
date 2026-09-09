'use client';

import { getAttribution } from '@/lib/attribution';

type Primitive = string | number | boolean | undefined;

type SubmitLeadArgs = {
  source: 'HeroQuoteForm' | 'StaffingPlanForm' | 'NewsletterForm';
  subject: string;
  renderedAt: number;
  companyWebsite?: string;
  fields: Record<string, Primitive>;
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

  // SplitForms' public form identifier is protected by its domain allowlist.
  // Only this browser request carries the visitor's genuine site Origin.
  const delivery = await fetch('https://splitforms.com/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(json.payload),
  });
  const result = (await delivery.json()) as LeadResponse;
  if (!delivery.ok || result.success !== true) {
    throw new Error(result.message || 'Submission failed. Please try again.');
  }

  return { success: true };
}
