import type { MetadataRoute } from 'next';
import { REGIONS } from '@/lib/content/regions';
import { LOCATIONS } from '@/lib/content/locations';
import { ROLES } from '@/lib/content/roles';
import { SOLUTIONS } from '@/lib/content/solutions';
import { SERVICES } from '@/lib/content/services';
import { INDUSTRIES } from '@/lib/content/industries';
import { POSTS } from '@/lib/content/posts';
import { INSIGHTS } from '@/lib/content/insights';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date('2026-07-06');
  return [
    { url: site.url, lastModified: siteLastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/about`, lastModified: siteLastModified, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${site.url}/why-us`, lastModified: siteLastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${site.url}/how-we-work`, lastModified: siteLastModified, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${site.url}/case-studies`, lastModified: siteLastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${site.url}/small-business`, lastModified: siteLastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${site.url}/outsourcing`, lastModified: siteLastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${site.url}/remote-call-center-staffing`, lastModified: siteLastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${site.url}/faq`, lastModified: siteLastModified, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: siteLastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${site.url}/privacy`, lastModified: siteLastModified, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${site.url}/terms`, lastModified: siteLastModified, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${site.url}/services`, lastModified: siteLastModified, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${site.url}/industries`, lastModified: siteLastModified, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${site.url}/solutions`, lastModified: siteLastModified, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${site.url}/roles`, lastModified: siteLastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${site.url}/locations`, lastModified: siteLastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...REGIONS.map((r) => ({
      url: `${site.url}/locations/${r.slug}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...LOCATIONS.map((l) => ({
      url: `${site.url}/locations/${l.slug}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    { url: `${site.url}/resources`, lastModified: siteLastModified, changeFrequency: 'weekly' as const, priority: 0.75 },
    ...ROLES.map((r) => ({
      url: `${site.url}/roles/${r.slug}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...SOLUTIONS.map((s) => ({
      url: `${site.url}/solutions/${s.slug}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    ...SERVICES.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...INDUSTRIES.map((i) => ({
      url: `${site.url}/industries/${i.slug}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${site.url}/tools`, lastModified: siteLastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    {
      url: `${site.url}/tools/staffing-calculator`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    { url: `${site.url}/blog`, lastModified: siteLastModified, changeFrequency: 'weekly' as const, priority: 0.75 },
    ...POSTS.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt ?? p.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${site.url}/insights`, lastModified: siteLastModified, changeFrequency: 'weekly' as const, priority: 0.75 },
    ...INSIGHTS.map((i) => ({
      url: `${site.url}/insights/${i.slug}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ];
}
