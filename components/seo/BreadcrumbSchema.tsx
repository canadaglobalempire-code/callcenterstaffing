import { JsonLd } from './JsonLd';
import { site } from '@/lib/site';

type Crumb = { label: string; href: string };

export function BreadcrumbSchema({ items }: { items: Crumb[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: c.label,
      item: c.href.startsWith('http') ? c.href : `${site.url}${c.href}`,
    })),
  };
  return <JsonLd data={data} />;
}
