import { JsonLd } from './JsonLd';
import { site } from '@/lib/site';

export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}#organization`,
    name: site.legalName,
    legalName: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: `${site.url}/logo/logo.png`,
    image: `${site.url}/logo/logo.png`,
    description: site.description,
    foundingDate: site.founded,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: `${site.url}/#staffing-plan`,
      areaServed: ['US', 'CA', 'MX', 'PH', 'CO'],
      availableLanguage: ['English', 'Spanish', 'Tagalog', 'Portuguese'],
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Mexico' },
      { '@type': 'Country', name: 'Philippines' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Country', name: 'Guatemala' },
      { '@type': 'Country', name: 'Honduras' },
      { '@type': 'Country', name: 'El Salvador' },
      { '@type': 'Country', name: 'Dominican Republic' },
      { '@type': 'Country', name: 'Jamaica' },
      { '@type': 'Country', name: 'Costa Rica' },
      { '@type': 'Country', name: 'Panama' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'South Africa' },
    ],
    knowsAbout: [
      'Call center staffing',
      'BPO recruitment',
      'Contact center hiring',
      'CX outsourcing',
      'Workforce management',
      'Bilingual agent recruitment',
      'Nearshore call center recruiting',
      'Offshore contact center recruiting',
      'Onshore call center recruiting',
      'QA analyst recruiting',
      'Call center operations leadership recruiting',
    ],
  };
  return <JsonLd data={data} />;
}
