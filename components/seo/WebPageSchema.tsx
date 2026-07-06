import { JsonLd } from './JsonLd';
import { site } from '@/lib/site';

type WebPageSchemaProps = {
  path: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage';
};

export function WebPageSchema({
  path,
  name,
  description,
  type = 'WebPage',
}: WebPageSchemaProps) {
  const url = `${site.url}${path}`;
  const data = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${site.url}#website`,
      name: site.name,
      url: site.url,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${site.url}#organization`,
      name: site.legalName,
      url: site.url,
    },
    inLanguage: 'en',
  };

  return <JsonLd data={data} />;
}
