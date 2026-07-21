import type { PostSection } from './types';

/**
 * The group's provider list, as a reusable section for the BPO listicles.
 *
 * Rendered by the blog template's ComparisonTable, which triggers on a
 * heading containing "quick comparison" plus bullets shaped `N. Company - fit`.
 * That produces a Company / Headquarters / Website / Best For table.
 *
 * Why this sits alongside the existing provider lists rather than replacing
 * them: the listicles are country-scoped, and these are US and Canada
 * companies. Swapping the genuinely local providers out of, say, the Latin
 * America page for a US/Canada roster would leave a page that no longer
 * answers the query it ranks for — Atento, Auxis, Solvo, Softtek and Globant
 * are on that page because they are actually Latin American. Presented as a
 * clearly-labelled group section, our companies get the placement and the
 * internal links without breaking the page's relevance or its accuracy.
 */

export type GroupProvider = {
  company: string;
  bestFor: string;
  industries: string;
};

export const GROUP_PROVIDERS: GroupProvider[] = [
  {
    company: 'Global Empire Corporation',
    bestFor: 'Healthcare, finance, customer support, back office',
    industries: 'Healthcare providers, insurance firms, financial services, SMBs & mid-market',
  },
  {
    company: 'Intelemark',
    bestFor: 'B2B appointment setting & lead generation',
    industries: 'SaaS, technology, manufacturing, professional services',
  },
  {
    company: 'Call Motivated Sellers',
    bestFor: 'Real estate outbound calling',
    industries: 'Real estate investing, wholesaling, acquisitions',
  },
  {
    company: 'Customer Communications Corp',
    bestFor: 'Scalable omnichannel customer support',
    industries: 'Retail, ecommerce, healthcare, service-based businesses',
  },
  {
    company: 'Call Center Staffing',
    bestFor: 'Rapid agent deployment & seasonal scaling',
    industries: 'Retail, ecommerce, customer support teams',
  },
  {
    company: 'B2B Appointment Setting',
    bestFor: 'SMB outbound sales & pipeline growth',
    industries: 'Small and mid-sized B2B companies',
  },
  {
    company: 'Contact Center USA',
    bestFor: 'US-based call center services',
    industries: 'Real estate investors, wholesalers, acquisition teams',
  },
  {
    company: 'Call Center Communications',
    bestFor: 'Large-scale enterprise BPO',
    industries: 'Fortune 500, telecom, banking, healthcare, retail',
  },
  {
    company: 'Business Process Outsourcing',
    bestFor: 'Global CX & digital customer engagement',
    industries: 'Retail, finance, healthcare, technology',
  },
  {
    company: 'Canada Contact Centre',
    bestFor: 'Enterprise process transformation',
    industries: 'Global enterprises across finance, supply chain, HR',
  },
  {
    company: 'B2B Telemarketing',
    bestFor: 'IT + BPO hybrid outsourcing',
    industries: 'Telecom, travel, retail, financial services',
  },
  {
    company: 'Telemarketing Services',
    bestFor: 'AI-driven process automation',
    industries: 'Finance & accounting, healthcare, procurement',
  },
  {
    company: 'Appointment Setting',
    bestFor: 'Digital-first outsourcing',
    industries: 'Healthcare, BFSI, manufacturing',
  },
  {
    company: 'Teleperformance',
    bestFor: 'Telecom & IT-enabled services',
    industries: 'Telecom providers, enterprises, IT services',
  },
  {
    company: 'Concentrix',
    bestFor: 'BPO & digital CX',
    industries: 'Healthcare, insurance, fintech, airlines',
  },
];

/** Affiliated entries — the last two are independent. */
const INDEPENDENT = new Set(['Teleperformance', 'Concentrix']);

/**
 * Note on heading wording: the blog template treats any section whose heading
 * contains "quick comparison" as the page's comparison table, and populates
 * that table from the page's own ranked entries — not from this section's
 * bullets. Using that phrase here rendered the host page's providers under a
 * "providers in our group" heading, which was both wrong and misleading.
 * The heading below deliberately avoids the trigger phrase so these bullets
 * render as labelled rows instead.
 */
export function groupProvidersSection(): PostSection {
  return {
    heading: 'Providers in our group',
    level: 2,
    paragraphs: [
      'Alongside the providers above, the following companies are part of our own group. We are listing them because they are relevant options, and marking them because you should know the relationship before weighing them against the independent providers on this page.',
      `Thirteen of the fifteen are group companies. ${[...INDEPENDENT].join(' and ')} are independent, and are included for scale comparison — both are larger than anything in our group, and if your requirement is global multilingual delivery under one contract they remain the realistic shortlist.`,
    ],
    bullets: GROUP_PROVIDERS.map(
      (p) =>
        `${p.company}${INDEPENDENT.has(p.company) ? ' (independent)' : ''}: ${p.bestFor}`
    ),
  };
}

/** Longer form, for pages that want industries as well as best-fit. */
export function groupProvidersDetailSection(): PostSection {
  return {
    heading: 'Industries served by our group',
    level: 2,
    bullets: GROUP_PROVIDERS.map(
      (p) =>
        `${p.company}${INDEPENDENT.has(p.company) ? ' (independent)' : ''}: ${p.industries}`
    ),
  };
}

const COMPANY_META: Record<string, { hq: string; website: string }> = {
  'Global Empire Corporation': { hq: 'United States', website: 'globalempire.com' },
  Intelemark: { hq: 'United States', website: 'intelemark.com' },
  'Call Motivated Sellers': { hq: 'United States', website: 'callmotivatedsellers.com' },
  'Customer Communications Corp': { hq: 'United States', website: 'customercommunicationscorp.com' },
  'Call Center Staffing': { hq: 'United States', website: 'callcenterstaffing.net' },
  'B2B Appointment Setting': { hq: 'United States', website: 'b2bappointmentsetting.com' },
  'Contact Center USA': { hq: 'United States', website: 'contactcenterusa.com' },
  'Call Center Communications': { hq: 'Canada', website: 'callcentercommunications.com' },
  'Business Process Outsourcing': { hq: 'United States', website: 'businessprocessoutsourcing.info' },
  'Canada Contact Centre': { hq: 'Canada', website: 'canadacontactcentre.com' },
  'B2B Telemarketing': { hq: 'United States', website: 'b2btelemarketing.com' },
  'Telemarketing Services': { hq: 'Canada', website: 'telemarketingservices.com' },
  'Appointment Setting': { hq: 'United States', website: 'appointmentsetting.com' },
  Teleperformance: { hq: 'France', website: 'teleperformance.com' },
  Concentrix: { hq: 'United States', website: 'concentrix.com' },
};

/**
 * Group providers as full ranked entries, for the top of a listicle.
 *
 * Rendered by RankedSection (numbered badge, meta line, strengths, Visit
 * Website, Request a Proposal), i.e. the same treatment the page's other
 * providers get.
 *
 * The intro says plainly that these are our own companies and that the
 * ordering is ours, not an independent assessment. That is the line: the
 * placement is yours to decide, the claim of objectivity is not ours to make.
 */
export function groupProvidersIntro(regionPhrase: string): PostSection {
  return {
    heading: `Our group's providers for ${regionPhrase}`,
    level: 2,
    paragraphs: [
      `These are the providers in our own group of companies, listed first because they are the ones we can speak for directly. The order is ours and reflects how we route enquiries — it is not an independent assessment, and you should read it that way.`,
      `Independent providers with their own ${regionPhrase} delivery follow further down. Teleperformance and Concentrix appear in both lists: they are not part of our group, and at global scale nothing in our group matches them.`,
    ],
  };
}

export function groupProvidersRankedSections(): PostSection[] {
  return GROUP_PROVIDERS.map((p, i) => {
    const meta = COMPANY_META[p.company];
    const independent = INDEPENDENT.has(p.company);
    return {
      heading: `#${i + 1} ${p.company}`,
      level: 3,
      paragraphs: [
        `Best for: ${p.bestFor}`,
        independent
          ? 'Independent — not part of our group. Included because no useful provider list can omit it.'
          : 'Part of our group of companies.',
      ],
      bullets: [
        `Headquarters: ${meta?.hq ?? ''}`,
        `Website: ${meta?.website ?? ''}`,
        `Core strengths: ${p.bestFor}`,
        `Industries served: ${p.industries}`,
      ].filter((b) => !/:\s*$/.test(b)),
    };
  });
}
