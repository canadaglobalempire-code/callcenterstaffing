export type FAQItem = { q: string; a: string };

export type Location = {
  slug: string;
  name: string;
  region: 'onshore' | 'nearshore' | 'offshore';
  flagEmoji: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
  };
  whyHere: { title: string; body: string }[];
  talentSnapshot: {
    talentPoolSize: string;
    avgEnglishProficiency: string;
    avgTenure: string;
    timeZones: string[];
    languages: string[];
  };
  cities: { name: string; note: string }[];
  rolesAvailable: string[];
  staffingSince?: string;
  faqs: FAQItem[];
};

export type Role = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; headline: string; subhead: string };
  whatTheyDo: string;
  skillsScreenedFor: string[];
  languagesSupported?: string[];
  placementTimeline: string;
  industriesUsing: string[];
  faqs: FAQItem[];
};

export type Solution = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroImage?: string;
  hero: { eyebrow: string; headline: string; subhead: string };
  problem: string;
  ourApproach: string;
  approachSteps?: { title: string; body: string }[];
  outcomes: { metric: string; description: string }[];
  caseStudy?: {
    company: string;
    challenge: string;
    result: string;
  };
  rolesIncluded: string[];
  faqs: FAQItem[];
};

export type Service = {
  slug: string;
  name: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  heroImage?: string;
  hero: { eyebrow: string; headline: string; subhead: string };
  intro: string;
  whatIsIt: string;
  whoItsFor: { title: string; body: string }[];
  ourApproach: string;
  approachSteps: { title: string; body: string }[];
  whyChooseUs: { title: string; body: string }[];
  outcomes: { metric: string; description: string }[];
  relatedRoles: string[];
  relatedLocations: string[];
  faqs: FAQItem[];
};

export type PostSection = {
  heading?: string;
  level?: 2 | 3;
  paragraphs?: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string; // YYYY-MM-DD
  updatedAt?: string;
  author: string;
  category: 'Process' | 'Industry' | 'Pricing' | 'Hiring' | 'Compliance' | 'Case Study' | 'Comparison';
  readingMinutes: number;
  heroImage?: string;
  sections: PostSection[];
  faqs?: FAQItem[];
  primaryKeyword: string;
  relatedPostSlugs?: string[];
};

export type Industry = {
  slug: string;
  name: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  heroImage?: string;
  hero: { eyebrow: string; headline: string; subhead: string };
  intro: string;
  industryChallenges: { title: string; body: string }[];
  staffingApproach: string;
  rolesCommonlyStaffed: string[];
  complianceConsiderations?: string[];
  regulatoryFrameworks?: string[];
  caseHighlight?: { company: string; challenge: string; result: string };
  outcomes?: { metric: string; description: string }[];
  faqs: FAQItem[];
};

export type InsightSection = {
  heading?: string;
  level?: 2 | 3;
  paragraphs?: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  symptom: string; // 1-sentence problem statement, the H1 hook
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  heroImage?: string;
  sections: InsightSection[];
  diagnostics: string[]; // "if you're seeing X, this applies to you" — checkbox-style list, 4-6 items
  fixes: { title: string; body: string }[]; // 4-6 specific fixes (operational, not generic)
  faqs?: FAQItem[];
  relatedSlugs?: string[];
};
