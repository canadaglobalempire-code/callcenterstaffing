import { JsonLd } from './JsonLd';
import { site } from '@/lib/site';

export type ReviewItem = {
  author: string;
  authorTitle?: string;
  company?: string;
  rating?: number; // 1-5; defaults to 5
  body: string;
  datePublished?: string; // ISO yyyy-mm-dd
};

type ReviewSchemaProps = {
  reviews: ReviewItem[];
  aggregateCount?: number; // total operator review count, defaults to reviews.length
  aggregateValue?: number; // average rating, defaults to 4.9
};

/**
 * Schema.org Review + AggregateRating attached to the Organization.
 * Enables Google star-snippets in search and AI Overviews.
 */
export function ReviewSchema({
  reviews,
  aggregateCount,
  aggregateValue = 4.9,
}: ReviewSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}#organization`,
    name: site.legalName,
    url: site.url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateValue.toFixed(1),
      reviewCount: aggregateCount ?? reviews.length,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: (r.rating ?? 5).toString(),
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: r.author,
        ...(r.authorTitle ? { jobTitle: r.authorTitle } : {}),
        ...(r.company ? { worksFor: { '@type': 'Organization', name: r.company } } : {}),
      },
      reviewBody: r.body,
      ...(r.datePublished ? { datePublished: r.datePublished } : {}),
      itemReviewed: {
        '@type': 'Service',
        name: 'Call Center Staffing',
        provider: { '@type': 'Organization', name: site.legalName },
      },
    })),
  };
  return <JsonLd data={data} />;
}
