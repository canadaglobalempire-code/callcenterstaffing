import { site } from '@/lib/site';

const DEFAULT_SOCIAL_IMAGE = '/images/agents-team-row.jpg';

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

export function socialImages(alt: string, image = DEFAULT_SOCIAL_IMAGE) {
  return {
    openGraph: [{ url: image, alt }],
    twitter: [image],
  };
}
