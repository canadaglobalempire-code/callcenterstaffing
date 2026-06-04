import type { MetadataRoute } from 'next';
import { REGIONS } from '@/lib/content/regions';
import { ROLES } from '@/lib/content/roles';
import { SOLUTIONS } from '@/lib/content/solutions';
import { SERVICES } from '@/lib/content/services';
import { INDUSTRIES } from '@/lib/content/industries';
import { POSTS } from '@/lib/content/posts';
import { INSIGHTS } from '@/lib/content/insights';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${site.url}/why-us`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${site.url}/how-we-work`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${site.url}/case-studies`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${site.url}/small-business`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${site.url}/outsourcing`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${site.url}/remote-call-center-staffing`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${site.url}/faq`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${site.url}/services`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${site.url}/industries`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${site.url}/solutions`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${site.url}/roles`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${site.url}/locations`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...REGIONS.map((r) => ({
      url: `${site.url}/locations/${r.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${site.url}/resources`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.75 },
    ...ROLES.map((r) => ({
      url: `${site.url}/roles/${r.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...SOLUTIONS.map((s) => ({
      url: `${site.url}/solutions/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    ...SERVICES.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...INDUSTRIES.map((i) => ({
      url: `${site.url}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${site.url}/tools`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    {
      url: `${site.url}/tools/staffing-calculator`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.75 },
    ...POSTS.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt ?? p.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${site.url}/insights`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.75 },
    ...INSIGHTS.map((i) => ({
      url: `${site.url}/insights/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ];
}
