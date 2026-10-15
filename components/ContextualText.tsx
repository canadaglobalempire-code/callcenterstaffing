import Link from 'next/link';
import { citeSources } from '@/lib/cite-sources';

// Existing phrases point to detailed, relevant reading without changing their text.
const destinations: Record<string, string> = {
  // Region pages name their country-level pages inside body paragraphs.
  // Longer phrases must stay ahead of the shorter "colombia" entry so the
  // country page wins where the full phrase is used.
  'call center staffing in the united states': '/locations/united-states',
  'call center staffing in mexico': '/locations/mexico',
  'call center staffing in colombia': '/locations/colombia',
  'call center staffing in south africa': '/locations/south-africa',
  'call center staffing in the philippines': '/locations/philippines',
  'call center staffing in canada': '/locations/canada',
  'call center staffing in guatemala': '/locations/guatemala',
  'call center staffing in costa rica': '/locations/costa-rica',
  'call center staffing in jamaica': '/locations/jamaica',
  'call center staffing in the dominican republic': '/locations/dominican-republic',
  'call center staffing in the united kingdom': '/locations/united-kingdom',
  'call center staffing in ireland': '/locations/ireland',
  'call center staffing in poland': '/locations/poland',
  'call center staffing in kenya': '/locations/kenya',
  'call center staffing in egypt': '/locations/egypt',
  'call center staffing in india': '/locations/india',
  'call center staffing in singapore': '/locations/singapore',
  'call center staffing in vietnam': '/locations/vietnam',
  'call center staffing in the united arab emirates': '/locations/united-arab-emirates',
  // Country pages link back up to their region page.
  'call center staffing across north america': '/locations/north-america',
  'call center staffing across south america': '/locations/south-america',
  'call center staffing across central america': '/locations/central-america',
  'call center staffing across the caribbean': '/locations/caribbean',
  'call center staffing across europe': '/locations/europe',
  'call center staffing across africa': '/locations/africa',
  'call center staffing across asia': '/locations/asia',
  'call center staffing across the middle east': '/locations/middle-east',
  'bilingual call center staffing': '/services/bilingual-call-center-staffing',
  'top 15 bpo companies in the usa': '/blog/top-15-bpo-companies-in-usa',
  'top 15 bpo companies in the uk': '/blog/top-15-bpo-companies-in-uk',
  'texas': '/blog/bpo-companies-in-texas',
  'bpo companies': '/blog/bpo-companies-directory',
  'colombia': '/blog/nearshore-staffing-colombia',
  'multilingual support': '/blog/multilingual-support-staffing-beyond-spanish',
  'customer service best practices': '/blog/customer-service-best-practices',
  'uk': '/blog/contact-centre-outsourcing-uk',
  'uk outsourcing': '/blog/contact-centre-outsourcing-uk',
  'warehouse': '/industries/warehouse',
  'san antonio': '/locations/san-antonio-tx',
};
// Built from the keys, longest first, so a full phrase always wins over a
// shorter key it contains ("call center staffing in Colombia" over "Colombia").
const pattern = new RegExp(
  `\\b(${Object.keys(destinations).sort((a, b) => b.length - a.length).join('|')})\\b`,
  'gi',
);

export function ContextualText({ text, cited }: { text: string; cited?: Set<string> }) {
  return text.split(pattern).map((part, index) => {
    const href = destinations[part.toLowerCase()];
    return href ? <Link key={index} href={href} style={{ color: 'inherit', textDecoration: 'inherit' }}>{part}</Link> : cited ? citeSources(part, cited) : part;
  });
}
