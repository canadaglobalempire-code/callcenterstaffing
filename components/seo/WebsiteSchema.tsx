import { JsonLd } from './JsonLd';
import { site } from '@/lib/site';

export function WebsiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      '@id': `${site.url}#organization`,
      name: site.legalName,
      url: site.url,
    },
  };
  return <JsonLd data={data} />;
}
