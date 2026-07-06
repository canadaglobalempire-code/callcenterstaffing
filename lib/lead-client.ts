'use client';

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
  const res = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      source,
      subject,
      page,
      renderedAt,
      companyWebsite,
      fields: Object.fromEntries(
        Object.entries(fields).filter(([, value]) => value !== undefined && value !== ''),
      ),
    }),
  });

  const json = (await res.json()) as LeadResponse;
  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Submission failed. Please try again.');
  }

  return { success: true };
}
