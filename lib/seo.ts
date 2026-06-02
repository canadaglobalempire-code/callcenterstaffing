import { site } from '@/lib/site';

const HREFLANG_LOCALES = [
  'en-US',
  'en-GB',
  'en-CA',
  'en-AU',
  'en-IE',
  'en-NZ',
  'en-ZA',
  'en-IN',
  'en-AE',
  'en-SG',
  'en-PH',
  'x-default',
] as const;

export function alternatesFor(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const url = normalized === '/' ? site.url : `${site.url}${normalized}`;
  return {
    canonical: url,
    languages: Object.fromEntries(HREFLANG_LOCALES.map((l) => [l, url])),
  };
}
