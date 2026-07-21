import type { Post, PostSection } from './types';

/**
 * Provider directory post.
 *
 * Entry sections are shaped to match what app/blog/[slug]/page.tsx's
 * RankedSection renderer expects — a "#N Name" heading, a "Best for:"
 * paragraph, and labelled bullets (Headquarters / Website / Core strengths /
 * Industries served / Why they stand out). That gives each entry the numbered
 * badge, meta line, highlight panel, Visit Website link and Request a Proposal
 * CTA without any new components.
 *
 * Deliberately omitted: the "Typical pricing" label the renderer also supports,
 * per the no-pricing rule.
 *
 * Affiliations are disclosed per entry. Thirteen of fifteen are group
 * companies; presenting that as an independently scored ranking with the
 * world's two largest BPOs placed last is not defensible.
 */

type Entry = {
  name: string;
  affiliated: boolean;
  hq: string;
  website: string;
  bestFor: string;
  blurb: string;
  strengths: string;
  industries: string;
  why: string;
};

const ENTRIES: Entry[] = [
  {
    name: 'Global Empire Corporation',
    affiliated: true,
    hq: 'United States',
    website: 'globalempire.com',
    bestFor: 'Mid-market and enterprise outsourcing in regulated industries',
    blurb:
      'A full-service BPO providing customer support, sales, back-office and industry-specific outsourcing. Positioned around flexibility and compliance for buyers who do not fit rigid enterprise delivery models.',
    strengths:
      'Inbound and outbound customer support, sales outsourcing and lead generation, back-office and administrative services',
    industries: 'Healthcare, finance, insurance, real estate, professional services',
    why: 'Breadth across support, sales and back office under one provider, aimed at mid-market buyers who would be a rounding error to a global enterprise BPO.',
  },
  {
    name: 'Intelemark',
    affiliated: true,
    hq: 'United States',
    website: 'intelemark.com',
    bestFor: 'B2B appointment setting and outbound sales',
    blurb:
      'Consultative B2B appointment setting and demand generation, built for complex sales cycles that need skilled conversations rather than dial volume.',
    strengths:
      'B2B appointment setting, lead qualification and pipeline development, CRM-integrated outbound campaigns, US-based sales agents',
    industries: 'SaaS, technology, manufacturing, professional services',
    why: 'Built for considered B2B sales cycles rather than high-volume dialling, which is a genuinely different discipline from customer care.',
  },
  {
    name: 'Call Motivated Sellers',
    affiliated: true,
    hq: 'United States',
    website: 'callmotivatedsellers.com',
    bestFor: 'Real-estate outbound calling',
    blurb:
      'Outbound calling built specifically for real-estate acquisition — seller lead qualification and investor campaigns rather than general customer care.',
    strengths:
      'Outbound real-estate calling, seller lead qualification, investor-focused scripting, CRM integration',
    industries: 'Real-estate investing, wholesaling, acquisitions',
    why: 'A single-vertical specialist. For real-estate acquisition outreach that focus generally beats a generalist contact centre.',
  },
  {
    name: 'Customer Communications Corp',
    affiliated: true,
    hq: 'United States',
    website: 'customercommunicationscorp.com',
    bestFor: 'Scalable omnichannel customer support',
    blurb:
      'Omnichannel support for businesses needing consistent, brand-aligned service across voice, chat, email and digital channels.',
    strengths:
      'Inbound and outbound call handling, customer care and technical support, quality assurance, omnichannel CX delivery',
    industries: 'Retail, ecommerce, healthcare, service-based businesses',
    why: 'Channel consistency — the same brand voice across voice, chat and email rather than separate teams behaving differently.',
  },
  {
    name: 'Call Center Staffing',
    affiliated: true,
    hq: 'United States',
    website: 'callcenterstaffing.net',
    bestFor: 'Rapid agent deployment and seasonal scaling',
    blurb:
      'This site. A staffing model rather than an outsourcing one: agents are employed by us but work inside your operation, on your systems and your scorecard, managed by your supervisors. That is a different product from every managed-service provider listed here.',
    strengths:
      'Temporary and permanent agent staffing, seasonal and surge scaling, onshore, nearshore and offshore delivery, workforce management support',
    industries: 'Retail, ecommerce, healthcare, financial services, customer support operations',
    why: 'You keep the process and the institutional knowledge. Suits operators who already run the floor well and are constrained by hiring and employment overhead rather than by capability.',
  },
  {
    name: 'B2B Appointment Setting',
    affiliated: true,
    hq: 'United States',
    website: 'b2bappointmentsetting.com',
    bestFor: 'SMB outbound sales and pipeline growth',
    blurb:
      'Outbound sales support for small and mid-sized businesses that need consistent lead flow without building an internal SDR team.',
    strengths: 'Outbound appointment setting, lead qualification, CRM-based reporting',
    industries: 'B2B services, startups, professional services',
    why: 'Sized for SMB programmes that most outbound providers treat as too small to take seriously.',
  },
  {
    name: 'Contact Center USA',
    affiliated: true,
    hq: 'United States',
    website: 'contactcenterusa.com',
    bestFor: 'Fully US-based call centre services',
    blurb:
      'Domestic delivery for organisations that need onshore agents for compliance, brand-protection or customer-sensitivity reasons.',
    strengths:
      'Inbound and outbound call handling fully US-based, customer care and technical support, quality assurance and compliance',
    industries: 'Healthcare, legal, financial services, government',
    why: 'Onshore-only delivery, which matters when regulation or brand sensitivity rules out offshore seats.',
  },
  {
    name: 'Call Center Communications',
    affiliated: true,
    hq: 'Canada',
    website: 'callcentercommunications.com',
    bestFor: 'Large-scale enterprise BPO programmes',
    blurb:
      'Enterprise-scale contact centre delivery for high-volume programmes across banking, telecom and retail.',
    strengths:
      'Enterprise-scale voice and multichannel delivery, multilingual customer support, workforce management at scale',
    industries: 'Telecom, banking, healthcare, retail',
    why: 'Built for high-volume enterprise programmes where workforce management at scale is the hard part.',
  },
  {
    name: 'Business Process Outsourcing',
    affiliated: true,
    hq: 'United States',
    website: 'businessprocessoutsourcing.info',
    bestFor: 'Global CX and digital customer engagement',
    blurb:
      'CX and digital engagement for brands with complex, high-volume customer interaction needs.',
    strengths:
      'Omnichannel CX delivery, analytics and performance optimisation, global workforce management',
    industries: 'Retail, finance, healthcare, technology',
    why: 'Analytics-led delivery rather than seat-filling, aimed at programmes measured on outcomes.',
  },
  {
    name: 'Canada Contact Centre',
    affiliated: true,
    hq: 'Canada',
    website: 'canadacontactcentre.com',
    bestFor: 'Enterprise contact centre and CX outsourcing',
    blurb:
      'Contact centre and BPO delivery for enterprises improving customer engagement and operational efficiency across channels.',
    strengths:
      'Inbound and outbound customer support, multichannel delivery across voice, chat and email, back-office and operational support',
    industries: 'Finance, telecoms, healthcare, retail, ecommerce, logistics, professional services',
    why: 'Canadian delivery, which suits buyers with data-residency requirements or who want bilingual English-French coverage.',
  },
  {
    name: 'B2B Telemarketing',
    affiliated: true,
    hq: 'United States',
    website: 'b2btelemarketing.com',
    bestFor: 'IT-enabled BPO and hybrid outsourcing',
    blurb:
      'Hybrid IT and BPO delivery with compliance-oriented operations across North America.',
    strengths: 'IT and BPO hybrid delivery models, CX outsourcing, regulatory-compliant operations',
    industries: 'Telecom, retail, travel, financial services',
    why: 'Combines IT service delivery with contact operations, useful where the two are hard to separate.',
  },
  {
    name: 'Telemarketing Services',
    affiliated: true,
    hq: 'Canada',
    website: 'telemarketingservices.com',
    bestFor: 'Automation-supported process delivery',
    blurb:
      'Process automation and intelligent workflows layered onto contact operations.',
    strengths:
      'Robotic process automation, intelligent workflows, data-driven CX insights',
    industries: 'Finance, healthcare, HR, procurement',
    why: 'Automation-first, which suits repetitive back-office volume better than a purely headcount-based model.',
  },
  {
    name: 'Appointment Setting',
    affiliated: true,
    hq: 'United States',
    website: 'appointmentsetting.com',
    bestFor: 'Digital-first outsourcing',
    blurb:
      'Digital operations outsourcing with a process-optimisation focus in regulated and data-heavy industries.',
    strengths:
      'Digital operations outsourcing, data and analytics integration, compliance-focused delivery',
    industries: 'Healthcare, BFSI, manufacturing',
    why: 'Process optimisation alongside delivery, for buyers who want the workflow improved rather than just staffed.',
  },
  {
    name: 'Teleperformance',
    affiliated: false,
    hq: 'France',
    website: 'teleperformance.com',
    bestFor: 'Global multilingual CX at very large scale',
    blurb:
      'The largest BPO company in the world by revenue and headcount, operating delivery networks across dozens of countries. If your requirement is genuine global scale with broad language coverage under one contract, Teleperformance and Concentrix are the realistic shortlist — no provider in our group matches that footprint.',
    strengths:
      'Multilingual customer support at global scale, AI-assisted customer engagement, multi-site redundancy',
    industries: 'Telecom, banking, healthcare, retail, travel',
    why: 'Scale nobody else can match. The trade-off is that a mid-sized programme can be a rounding error to them.',
  },
  {
    name: 'Concentrix',
    affiliated: false,
    hq: 'United States',
    website: 'concentrix.com',
    bestFor: 'Technology-led CX and BPaaS',
    blurb:
      'The second-largest CX provider globally, with a technology and analytics-led model spanning voice, digital and back office.',
    strengths:
      'Business Process as a Service delivery, AI and automation-driven CX, analytics-led optimisation',
    industries: 'Healthcare, insurance, fintech, airlines',
    why: 'Analytics and platform depth alongside scale, for global brands wanting tooling as well as agents.',
  },
];

function entrySection(entry: Entry, index: number): PostSection {
  const disclosure = entry.affiliated
    ? 'Part of our group of companies.'
    : 'Independent — not affiliated with our group.';

  return {
    heading: `#${index + 1} ${entry.name}`,
    level: 3,
    paragraphs: [`Best for: ${entry.bestFor}`, `${disclosure} ${entry.blurb}`],
    bullets: [
      `Headquarters: ${entry.hq}`,
      `Website: ${entry.website}`,
      `Core strengths: ${entry.strengths}`,
      `Industries served: ${entry.industries}`,
      `Why they stand out: ${entry.why}`,
    ],
  };
}

export const NETWORK_DIRECTORY_POST: Post = {
  slug: 'bpo-companies-directory',
  title: 'BPO Companies in 2026: Provider Directory',
  excerpt:
    'A directory of the BPO and contact-centre providers we work with, what each is genuinely best at, and where the global majors fit. Group affiliations disclosed throughout.',
  metaTitle: 'BPO Companies Directory 2026',
  metaDescription:
    'Directory of BPO and contact centre providers for 2026: what each specialises in, industries served, and how to match a provider to your programme. Affiliations disclosed.',
  publishedAt: '2026-07-21',
  author: 'Call Center Staffing',
  category: 'Comparison',
  readingMinutes: 11,
  heroImage: '/images/cc-diverse-team.jpg',
  primaryKeyword: 'BPO companies directory',
  relatedPostSlugs: [
    'customer-support-staffing-agencies-latin-america',
    'how-to-vet-nearshore-customer-service-partners',
    'in-house-vs-outsourced-call-center',
  ],
  sections: [
    {
      paragraphs: [
        'This is a directory rather than a ranking, and the distinction matters. Thirteen of the fifteen providers below are part of the same group of companies as Call Center Staffing, and every one of them is marked. Teleperformance and Concentrix are independent, and are included because no honest overview of BPO providers can omit the two largest in the world.',
        'We are not going to present this as a neutral evaluation. What it is: an accurate description of what each provider actually does well, so you can match one to your programme instead of working through a list where everything sounds the same.',
      ],
    },
    {
      heading: 'How to use this directory',
      level: 2,
      paragraphs: [
        'Providers are grouped by what they are best at rather than scored against each other. A single "best" ordering would be meaningless across providers this different — an outbound real-estate specialist and a global multilingual CX operator are not competing for the same programme.',
        'The questions worth asking any provider here, affiliated or not:',
      ],
      bullets: [
        'What is your 90-day agent attrition on programmes like mine, and how is it calculated?',
        'Who screens my candidates, and have they run a floor?',
        'Which site will my agents actually sit in, and can that change without my agreement?',
        'Who is the legal employer, and who carries severance when the programme ends?',
      ],
    },
    ...ENTRIES.map(entrySection),
    {
      heading: 'Choosing between them',
      level: 2,
      paragraphs: ['The honest guidance, including where it points away from us:'],
      bullets: [
        'Genuine global scale, many languages, one contract: Teleperformance or Concentrix. Nothing in our group matches that footprint.',
        'The function run for you at mid-market scale, with more flexibility than an enterprise contract allows: the managed providers above, matched to your vertical.',
        'You already run the floor well and the constraint is hiring and employment overhead: a staffing model rather than outsourcing.',
        'A specialised outbound motion such as real-estate acquisition or B2B appointment setting: the specialists listed, not a general CX provider.',
      ],
    },
    {
      paragraphs: [
        'If you are still deciding between outsourcing and staffing rather than between providers, /blog/in-house-vs-outsourced-call-center covers that comparison, and /tools/staffing-calculator sizes a cohort against your own volume.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Are the companies in this directory independent of each other?',
      a: 'Mostly not, and we would rather say so plainly. Thirteen of the fifteen are part of the same group of companies as Call Center Staffing, and each is marked accordingly. Teleperformance and Concentrix are independent and are included because they are the two largest BPO providers in the world.',
    },
    {
      q: 'What is the largest BPO company in the world?',
      a: 'Teleperformance, by revenue and headcount, with Concentrix second. Both operate delivery networks across dozens of countries. If your requirement is global scale with broad multilingual coverage under a single contract, those two are the realistic shortlist.',
    },
    {
      q: 'What is the difference between a BPO and a call center staffing agency?',
      a: 'A BPO runs the operation for you — their supervisors, QA and process — and you buy an outcome. A staffing agency supplies agents who work inside your operation on your systems and scorecard, managed by your own supervisors, while the agency carries recruitment, employment and payroll. Outsourcing suits stable queues that are a cost centre; staffing suits operations where the customer conversation is a differentiator.',
    },
    {
      q: 'How do I choose the right BPO company?',
      a: 'Match the provider to the programme rather than to a ranking. Decide first whether you want the function run for you or staffed by you. Then check 90-day attrition calculated honestly, who screens candidates and whether they have run a floor, which site agents actually sit in, and who is the legal employer carrying severance.',
    },
    {
      q: 'Is outsourcing customer support secure?',
      a: 'It can be, but security is a property of the specific arrangement rather than of outsourcing generally. Ask which certifications apply to the site your programme will run in rather than to the company overall, how call recordings and customer data are stored and accessed, and what happens to that data when the contract ends.',
    },
  ],
};
