import { JsonLd } from './JsonLd';
import { site } from '@/lib/site';

type BlogPostingProps = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  keywords?: string;
  articleSection?: string;
};

export function BlogPostingSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  author,
  image,
  keywords,
  articleSection,
}: BlogPostingProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: author ?? site.legalName,
      url: site.url,
    },
    publisher: {
      '@type': 'Organization',
      name: site.legalName,
      url: site.url,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/logo/logo.png`,
      },
    },
    ...(image
      ? {
          image: {
            '@type': 'ImageObject',
            url: image.startsWith('http') ? image : `${site.url}${image}`,
          },
        }
      : {}),
    ...(keywords ? { keywords } : {}),
    ...(articleSection ? { articleSection } : {}),
  };
  return <JsonLd data={data} />;
}
