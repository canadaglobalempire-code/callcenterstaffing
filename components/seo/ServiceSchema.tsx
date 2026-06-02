import { JsonLd } from './JsonLd';
import { site } from '@/lib/site';

type ServiceProps = {
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: string | string[];
  url?: string;
};

export function ServiceSchema({
  name,
  description,
  serviceType,
  areaServed,
  url,
}: ServiceProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    areaServed,
    url: url ?? site.url,
    provider: {
      '@type': 'Organization',
      name: site.legalName,
      url: site.url,
    },
  };
  return <JsonLd data={data} />;
}
