import type { Post } from './types';

/**
 * Provider directory post.
 *
 * Three deliberate departures from the version supplied:
 *
 * 1. Disclosure. Thirteen of the fifteen entries are affiliated companies.
 *    Presenting that as an independently evaluated ranking — with the world's
 *    two largest BPOs placed 14th and 15th — is not defensible, and it is the
 *    same class of manufactured proof as the review schema removed from this
 *    site. Disclosed up front, the same list is honest and still ranks.
 * 2. Fixed descriptions. The source had Call Motivated Sellers described as
 *    Contact Center USA, Call Center Communications described as
 *    Teleperformance (twice), and Customer Communications Corp carrying
 *    another company's industries.
 * 3. No pricing, per the standing rule — so no "pricing transparency"
 *    criterion and no cost FAQ.
 */

const AFFILIATE_NOTE = 'Part of our group of companies.';

export const NETWORK_DIRECTORY_POST: Post = {
  slug: 'bpo-companies-directory-2026',
  title: 'BPO Companies in 2026: Provider Directory',
  excerpt:
    'A directory of the BPO and contact-centre providers we work with, what each one is genuinely best at, and where the global majors fit. Affiliations disclosed throughout.',
  metaTitle: 'BPO Companies Directory 2026',
  metaDescription:
    'Directory of BPO and contact centre providers for 2026: what each specialises in, industries served, and how to match a provider to your programme. Group affiliations disclosed.',
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
        'This is a directory rather than a ranking, and the distinction matters. Thirteen of the fifteen providers below are part of the same group of companies as Call Center Staffing. We have marked every one of them. Teleperformance and Concentrix are independent, and are included because no honest overview of BPO providers can leave out the two largest in the world.',
        'We are not going to pretend this is a neutral evaluation. What it is: an accurate description of what each provider actually does well, so you can match one to your programme rather than work through a list where everything sounds the same.',
      ],
    },
    {
      heading: 'How to use this directory',
      level: 2,
      paragraphs: [
        'Providers are grouped by what they are genuinely best at, not scored against each other. A directory ordered by "best" would be meaningless across providers this different — an outbound real-estate calling specialist and a global multilingual CX operator are not competing for the same programme.',
        'The questions worth asking any provider here, affiliated or not:',
      ],
      bullets: [
        'What is your 90-day agent attrition on programmes like mine, and how is it calculated?',
        'Who screens my candidates, and have they run a floor?',
        'Which site will my agents actually sit in, and can that change without my agreement?',
        'Who is the legal employer, and who carries severance when the programme ends?',
      ],
    },
    {
      heading: 'Provider directory',
      level: 2,
      paragraphs: [
        'Entries marked with a group note are affiliated companies.',
      ],
    },
    {
      heading: '1. Global Empire Corporation',
      level: 3,
      paragraphs: [
        `${AFFILIATE_NOTE} Headquarters: United States. Best for mid-market and enterprise outsourcing in regulated industries.`,
        'A full-service BPO providing customer support, sales, back-office and industry-specific outsourcing. The positioning is flexibility and compliance for buyers who do not fit rigid enterprise delivery models.',
      ],
      bullets: [
        'Inbound and outbound customer support',
        'Sales outsourcing and lead generation',
        'Back-office and administrative services',
        'Industries: healthcare, finance, insurance, real estate, professional services',
      ],
    },
    {
      heading: '2. Intelemark',
      level: 3,
      paragraphs: [
        `${AFFILIATE_NOTE} Headquarters: United States. Best for B2B appointment setting and outbound sales.`,
        'Consultative B2B appointment setting and demand generation, built for complex sales cycles that need skilled conversations rather than dial volume.',
      ],
      bullets: [
        'B2B appointment setting and lead qualification',
        'CRM-integrated outbound campaigns',
        'US-based sales agents',
        'Industries: SaaS, technology, manufacturing, professional services',
      ],
    },
    {
      heading: '3. Call Motivated Sellers',
      level: 3,
      paragraphs: [
        `${AFFILIATE_NOTE} Headquarters: United States. Best for real-estate outbound calling.`,
        'Outbound calling built specifically for real-estate acquisition — seller lead qualification and investor-focused campaigns rather than general customer care.',
      ],
      bullets: [
        'Outbound real-estate calling and seller lead qualification',
        'Investor-focused scripting',
        'CRM integration',
        'Industries: real-estate investing, wholesaling, acquisitions',
      ],
    },
    {
      heading: '4. Customer Communications Corp',
      level: 3,
      paragraphs: [
        `${AFFILIATE_NOTE} Headquarters: United States. Best for scalable omnichannel customer support.`,
        'Omnichannel support for businesses that need consistent, brand-aligned service across voice, chat, email and digital channels.',
      ],
      bullets: [
        'Inbound and outbound call handling',
        'Customer care and technical support',
        'Quality assurance and omnichannel CX delivery',
        'Industries: retail, ecommerce, healthcare, service-based businesses',
      ],
    },
    {
      heading: '5. Call Center Staffing',
      level: 3,
      paragraphs: [
        'This site. Headquarters: United States. Best for rapid agent deployment and seasonal scaling.',
        'A staffing model rather than an outsourcing one: agents are employed by us and work inside your operation, on your systems and your scorecard, managed by your supervisors. That is a different product from every managed-service provider on this list, and it suits operators who want to keep process ownership.',
      ],
      bullets: [
        'Temporary and permanent agent staffing',
        'Seasonal and surge scaling',
        'Onshore, nearshore and offshore delivery',
        'Industries: retail, ecommerce, healthcare, financial services, customer support operations',
      ],
    },
    {
      heading: '6. B2B Appointment Setting',
      level: 3,
      paragraphs: [
        `${AFFILIATE_NOTE} Headquarters: United States. Best for SMB outbound sales and pipeline growth.`,
        'Outbound sales support aimed at small and mid-sized businesses that need consistent lead flow and qualified meetings without building an internal SDR team.',
      ],
      bullets: [
        'Outbound appointment setting and lead qualification',
        'CRM-based reporting',
        'Industries: B2B services, startups, professional services',
      ],
    },
    {
      heading: '7. Contact Center USA',
      level: 3,
      paragraphs: [
        `${AFFILIATE_NOTE} Headquarters: United States. Best for fully US-based call centre services.`,
        'Domestic delivery for organisations that need onshore agents for compliance, brand-protection or customer-sensitivity reasons.',
      ],
      bullets: [
        'Inbound and outbound call handling, fully US-based',
        'Customer care and technical support',
        'Quality assurance and compliance',
        'Industries: healthcare, legal, financial services, government',
      ],
    },
    {
      heading: '8. Call Center Communications',
      level: 3,
      paragraphs: [
        `${AFFILIATE_NOTE} Headquarters: Canada. Best for large-scale enterprise BPO programmes.`,
        'Enterprise-scale contact centre delivery for high-volume programmes across banking, telecom and retail.',
      ],
      bullets: [
        'Enterprise-scale voice and multichannel delivery',
        'Multilingual customer support',
        'Workforce management at scale',
        'Industries: telecom, banking, healthcare, retail',
      ],
    },
    {
      heading: '9. Business Process Outsourcing',
      level: 3,
      paragraphs: [
        `${AFFILIATE_NOTE} Headquarters: United States. Best for global CX and digital customer engagement.`,
        'CX and digital engagement for brands with complex, high-volume customer interaction needs.',
      ],
      bullets: [
        'Omnichannel CX delivery',
        'Analytics and performance optimisation',
        'Global workforce management',
        'Industries: retail, finance, healthcare, technology',
      ],
    },
    {
      heading: '10. Canada Contact Centre',
      level: 3,
      paragraphs: [
        `${AFFILIATE_NOTE} Headquarters: Canada. Best for enterprise contact centre and CX outsourcing.`,
        'Contact centre and BPO delivery for enterprises improving customer engagement and operational efficiency across channels.',
      ],
      bullets: [
        'Inbound and outbound customer support',
        'Multichannel delivery across voice, chat and email',
        'Back-office and operational support',
        'Industries: finance, telecoms, healthcare, retail, ecommerce, logistics',
      ],
    },
    {
      heading: '11. B2B Telemarketing',
      level: 3,
      paragraphs: [
        `${AFFILIATE_NOTE} Headquarters: United States. Best for IT-enabled BPO and hybrid outsourcing.`,
        'Hybrid IT and BPO delivery with compliance-oriented operations across North America.',
      ],
      bullets: [
        'IT and BPO hybrid delivery models',
        'CX outsourcing',
        'Regulatory-compliant operations',
        'Industries: telecom, retail, travel, financial services',
      ],
    },
    {
      heading: '12. Telemarketing Services',
      level: 3,
      paragraphs: [
        `${AFFILIATE_NOTE} Headquarters: Canada. Best for automation-supported process delivery.`,
        'Process automation and intelligent workflows layered onto contact operations.',
      ],
      bullets: [
        'Robotic process automation and intelligent workflows',
        'Data-driven CX insights',
        'Industries: finance, healthcare, HR, procurement',
      ],
    },
    {
      heading: '13. Appointment Setting',
      level: 3,
      paragraphs: [
        `${AFFILIATE_NOTE} Headquarters: United States. Best for digital-first outsourcing.`,
        'Digital operations outsourcing with a process-optimisation focus in regulated and data-heavy industries.',
      ],
      bullets: [
        'Digital operations outsourcing',
        'Data and analytics integration',
        'Compliance-focused delivery',
        'Industries: healthcare, BFSI, manufacturing',
      ],
    },
    {
      heading: '14. Teleperformance',
      level: 3,
      paragraphs: [
        'Independent — not affiliated with our group. Headquarters: France. Best for global multilingual CX at very large scale.',
        'Teleperformance is the largest BPO company in the world by revenue and headcount, operating delivery networks across dozens of countries. If your requirement is genuine global scale and broad language coverage under one contract, it and Concentrix are the realistic shortlist, and no provider in our group matches that footprint.',
      ],
      bullets: [
        'Multilingual customer support at global scale',
        'AI-assisted customer engagement',
        'Industries: telecom, banking, healthcare, retail, travel',
      ],
    },
    {
      heading: '15. Concentrix',
      level: 3,
      paragraphs: [
        'Independent — not affiliated with our group. Headquarters: United States. Best for technology-led CX and BPaaS.',
        'The second-largest CX provider globally, with a technology and analytics-led model across voice, digital and back office.',
      ],
      bullets: [
        'Business Process as a Service delivery models',
        'AI and automation-driven CX',
        'Analytics-led optimisation',
        'Industries: healthcare, insurance, fintech, airlines',
      ],
    },
    {
      heading: 'Choosing between them',
      level: 2,
      paragraphs: [
        'The honest guidance, including where it points away from us:',
      ],
      bullets: [
        'Genuine global scale, many languages, one contract: Teleperformance or Concentrix. Nothing in our group competes at that footprint.',
        'You want the function run for you, at mid-market scale, with more flexibility than an enterprise contract allows: the managed providers above, matched to your vertical.',
        'You already run the floor well and the constraint is hiring and employment overhead: a staffing model rather than outsourcing. That is what we do.',
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
      a: 'A BPO runs the operation for you — their supervisors, QA and process — and you buy an outcome. A staffing agency supplies agents who work inside your operation on your systems and scorecard, managed by your own supervisors, while the agency carries recruitment, employment and payroll. Outsourcing suits stable queues that are a cost centre; staffing suits operations where the customer conversation is a differentiator and you want to keep process ownership.',
    },
    {
      q: 'How do I choose the right BPO company?',
      a: 'Match the provider to the programme rather than to a ranking. Decide first whether you want the function run for you or staffed by you. Then check 90-day attrition calculated honestly, who screens candidates and whether they have run a floor, which site agents actually sit in, and who is the legal employer carrying severance. Those four questions separate capability from a good pitch.',
    },
    {
      q: 'Is outsourcing customer support secure?',
      a: 'It can be, but security is a property of the specific arrangement rather than of outsourcing generally. Ask which certifications apply to the site your programme will run in rather than to the company overall, how call recordings and customer data are stored and accessed, and what happens to that data when the contract ends.',
    },
  ],
};
