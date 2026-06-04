import { site } from '@/lib/site';

export function alternatesFor(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const url = normalized === '/' ? site.url : `${site.url}${normalized}`;
  return {
    canonical: url,
    languages: {
      'x-default': url,
    },
  };
}
