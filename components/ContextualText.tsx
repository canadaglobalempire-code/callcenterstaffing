import Link from 'next/link';
import { citeSources } from '@/lib/cite-sources';

// Existing phrases point to detailed, relevant reading without changing their text.
const destinations: Record<string, string> = {
  'colombia': '/blog/nearshore-staffing-colombia',
  'multilingual support': '/blog/multilingual-support-staffing-beyond-spanish',
  'customer service best practices': '/blog/customer-service-best-practices',
  'uk': '/blog/contact-centre-outsourcing-uk',
  'uk outsourcing': '/blog/contact-centre-outsourcing-uk',
  'warehouse': '/industries/warehouse',
  'san antonio': '/locations/san-antonio-tx',
};
const pattern = /\b(Colombia|multilingual support|customer service best practices|UK outsourcing|UK|warehouse|San Antonio)\b/gi;

export function ContextualText({ text, cited }: { text: string; cited?: Set<string> }) {
  return text.split(pattern).map((part, index) => {
    const href = destinations[part.toLowerCase()];
    return href ? <Link key={index} href={href} style={{ color: 'inherit', textDecoration: 'inherit' }}>{part}</Link> : cited ? citeSources(part, cited) : part;
  });
}
