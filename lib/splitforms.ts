const ACCESS_KEY = 'adc9e2eab8bc439ca7fc3c932a1d73c2';
const ENDPOINT = 'https://splitforms.com/api/submit';

type Primitive = string | number | boolean | null | undefined;

export async function submitToSplitforms(
  data: Record<string, Primitive>,
  subject: string,
): Promise<{ success: true } & Record<string, unknown>> {
  const fd = new FormData();
  fd.set('access_key', ACCESS_KEY);
  fd.set('subject', subject);
  for (const [k, v] of Object.entries(data)) {
    if (v === undefined || v === null || v === '') continue;
    fd.set(k, String(v));
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    body: fd,
    headers: { Accept: 'application/json' },
  });
  const json = (await res.json()) as { success?: boolean; message?: string } & Record<string, unknown>;
  if (!json.success) {
    throw new Error(json.message || 'Submission failed. Please try again.');
  }
  return json as { success: true } & Record<string, unknown>;
}
