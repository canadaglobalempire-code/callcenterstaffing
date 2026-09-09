import type { Location } from './types';

/**
 * Buyer-market location pages.
 *
 * The entries in `locations.ts` cover *supply* markets — the countries where we
 * recruit agents. These cover *demand* markets: the countries where the
 * companies that hire those agents are headquartered. Search intent is
 * different ("call centre staffing agency UK", not "staffing in the UK"), so
 * the copy leads with the buyer's decision — onshore vs nearshore vs offshore
 * *from their vantage point* — rather than with a talent pitch.
 *
 * `region` is expressed relative to the buyer in that market, not to a US
 * buyer: for a London operations director, UK-based agents are onshore.
 */
export const BUYER_MARKET_LOCATIONS: Location[] = [
  {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    region: 'onshore',
    flagEmoji: '🇬🇧',
    heroImage: '/images/cc-team-meeting.jpg',
    metaTitle: 'UK Call Centre Staffing Agency | Contact Centre Recruitment',
    metaDescription:
      'Contact centre staffing for UK businesses — UK-based agents plus nearshore and offshore teams on GMT hours. Agents on our payroll, first slate in about 72 hours.',
    hero: {
      eyebrow: 'United Kingdom · Onshore, nearshore & offshore',
      headline: 'Contact centre staffing for UK operations — without the agency retainer.',
      subhead:
        'We place trained advisors into UK contact centres, and into the nearshore and offshore sites that cover UK hours. Manchester to Cape Town to Manila, on one payroll, billed only for hours worked.',
    },
    whyHere: [
      {
        title: 'The UK cost problem is a location problem',
        body: 'National Living Wage rises and employer NIC changes have pushed UK loaded agent costs up faster than contact centre budgets. Most UK operations directors do not need to leave the UK entirely — they need to move the right 40% of the queue. We staff the split rather than selling you one location.',
      },
      {
        title: 'South Africa is the UK’s real nearshore',
        body: 'Cape Town and Johannesburg run on GMT+2 — two hours ahead of London, so a full UK working day is covered without night shifts. Neutral accents, strong cultural affinity with UK customers, and a mature CX sector. For UK buyers this is what Mexico is to US buyers.',
      },
      {
        title: 'UK-based where the regulator requires it',
        body: 'FCA-regulated queues, vulnerable-customer handling, and public-sector work where data residency is contractual — these stay in the UK. We recruit advisors in Glasgow, Leeds, Cardiff and Belfast for exactly these queues, and put the general CX volume elsewhere.',
      },
      {
        title: 'Advisors on our payroll, not your headcount',
        body: 'No permanent recruitment fee, no notice-period exposure, no redundancy risk on a seasonal ramp. We employ the advisor; you direct the work and pay for hours worked. Swap anyone who is not performing at no cost.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~1.3M UK contact-centre workers',
      avgEnglishProficiency: 'C2 (native)',
      avgTenure: '~2.1 years (industry-weighted)',
      timeZones: ['GMT', 'BST'],
      languages: ['English (native)', 'Welsh', 'Polish', 'Urdu', 'Punjabi'],
    },
    cities: [
      { name: 'Glasgow', note: 'Deepest UK contact-centre labour pool, strong tenure' },
      { name: 'Manchester', note: 'Scale capacity, financial services and utilities depth' },
      { name: 'Leeds', note: 'Banking and insurance corridor, licensed-adjacent work' },
      { name: 'Cardiff', note: 'Cost-efficient vs. the South East, public-sector experience' },
      { name: 'Belfast', note: 'Lower attrition, strong written-English and back-office bench' },
      { name: 'Sheffield', note: 'Emerging hub, competitive loaded cost' },
    ],
    rolesAvailable: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'operations-managers',
    ],
    faqs: [
      {
        q: 'Are you a UK recruitment agency or an outsourcer?',
        a: 'Neither exactly. We are a staffing partner: we recruit, employ and payroll the advisor, then place them into your operation, your tooling and your brand. You keep the process, the QA standard and the customer relationship. An outsourcer takes the whole channel; a recruitment agency hands you a CV and an invoice. We sit between the two.',
      },
      {
        q: 'Which locations actually cover UK business hours?',
        a: 'South Africa (GMT+2) covers a full UK day with no night shift and is our most-requested UK nearshore. Poland and Ireland cover it natively for multilingual European queues. The Philippines covers UK hours on a day shift, which is a genuine advantage over covering US hours. India covers UK mornings comfortably. We map this against your interval forecast before recommending anything.',
      },
      {
        q: 'How do you handle UK employment law and IR35?',
        a: 'Advisors we place in the UK are employed by us on a contract of employment, not engaged as contractors, so IR35 does not apply to the placement in the way it would for a personal service company. We carry the employment liability, the payroll, and the statutory obligations. Your legal team should still review the arrangement against your own contracting policy.',
      },
      {
        q: 'Can you staff FCA-regulated or vulnerable-customer queues?',
        a: 'Yes, and we recommend keeping these UK-based. We screen for prior regulated-environment experience, Consumer Duty awareness and vulnerable-customer handling, and we can align to your own competency framework at shortlist. We do not provide the regulatory permissions — you remain the regulated firm.',
      },
      {
        q: 'What does a UK ramp actually cost compared with nearshore?',
        a: 'UK loaded advisor cost typically runs roughly two to three times South Africa for comparable quality on general CX queues, with the gap widening at volume. That said, the right comparison is not per-hour — it is cost per resolved contact. A cheaper agent with lower first-contact resolution can cost more. We benchmark both in the written plan.',
      },
    ],
  },
  {
    slug: 'canada',
    name: 'Canada',
    region: 'onshore',
    flagEmoji: '🇨🇦',
    heroImage: '/images/cc-team-collab.jpg',
    metaTitle: 'Canadian Call Center Staffing | Bilingual French-English Agents',
    metaDescription:
      'Call center staffing across Canada — Toronto, Montreal, Vancouver and the Maritimes. French-English bilingual agents on your time zone, on our payroll.',
    hero: {
      eyebrow: 'Canada · Onshore',
      headline: 'The only market where French-English bilingual is the default, not a premium.',
      subhead:
        'We staff Canadian contact centres and the US programs that need genuine Quebec-French capability — Montreal, Toronto, Moncton and Vancouver, on our payroll.',
    },
    whyHere: [
      {
        title: 'Quebec French, not European French',
        body: 'Canadian customers hear the difference immediately, and so do regulators reviewing service-in-French obligations. Montreal, Quebec City and northern New Brunswick produce advisors who are natively bilingual — not French-trained. For any brand operating in Quebec this is the entire ball game.',
      },
      {
        title: 'Bilingual compliance obligations',
        body: 'Federally regulated businesses and companies operating in Quebec face service-in-French requirements that cannot be satisfied by a translation layer. We recruit against those obligations specifically, including advisors comfortable handling regulated and complaint-stage conversations in French.',
      },
      {
        title: 'US time-zone alignment with onshore posture',
        body: 'Canada spans ET through PT, so a Toronto or Vancouver cohort covers US business hours natively. For US brands that need a non-US cost base but cannot go offshore for brand or data reasons, Canada is the shortest move available.',
      },
      {
        title: 'The Maritimes cost advantage',
        body: 'Moncton, Halifax and Saint John run materially below Toronto and Vancouver on loaded cost, with lower attrition and a long contact-centre history. New Brunswick in particular is officially bilingual, which makes it the most cost-efficient French-English pool in the country.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~260,000 contact-centre workers',
      avgEnglishProficiency: 'C2 (native)',
      avgTenure: '~2.3 years (industry-weighted)',
      timeZones: ['ET', 'CT', 'MT', 'PT', 'AT'],
      languages: ['English (native)', 'French (native)', 'Punjabi', 'Mandarin', 'Spanish'],
    },
    cities: [
      { name: 'Montreal, QC', note: 'Quebec-French depth, bilingual regulated work' },
      { name: 'Toronto, ON', note: 'Enterprise scale, financial services, senior ops bench' },
      { name: 'Moncton, NB', note: 'Officially bilingual, lowest loaded cost, strong tenure' },
      { name: 'Halifax, NS', note: 'Atlantic-time coverage, cost-efficient, low attrition' },
      { name: 'Vancouver, BC', note: 'PT coverage, tech-fluent advisors, APAC-hours overlap' },
      { name: 'Winnipeg, MB', note: 'Central-time efficiency, deep frontline pool' },
    ],
    rolesAvailable: [
      'bilingual-agents',
      'inbound-customer-service',
      'outbound-sales-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
    ],
    faqs: [
      {
        q: 'Is Canadian French really different enough to matter?',
        a: 'Yes, for customer-facing work. Vocabulary, idiom and register differ enough that Quebec customers reliably identify European-French speakers as foreign, which undermines exactly the trust you are staffing for. For internal or written work the gap matters less. We screen French capability with a native Quebec reviewer and send you the recording.',
      },
      {
        q: 'How does Canada compare with nearshore Mexico on cost?',
        a: 'Canada runs well above Mexico or Colombia on loaded cost — it is an onshore-tier market, not a nearshore one. Buyers choose it for bilingual French, for data-residency posture, or because a US-adjacent brand voice is non-negotiable. If cost is the primary driver and French is not required, nearshore Latin America is the better call and we will say so.',
      },
      {
        q: 'Can you place advisors for Quebec service-in-French obligations?',
        a: 'We can staff natively bilingual advisors capable of handling French-language service to the standard those obligations contemplate. What we do not do is provide a legal opinion on your compliance position — your counsel owns that assessment. We can align our screening rubric to whatever standard they set.',
      },
      {
        q: 'How fast can you ramp in Canada?',
        a: 'First shortlist in about 72 hours. For 10–25 seats we typically place within 3–4 weeks. Bilingual French cohorts run slightly longer — the pool is smaller and we will not lower the language bar to hit a date. We would rather tell you week three than send you a B2 speaker.',
      },
      {
        q: 'Do you handle Canadian payroll and employment standards?',
        a: 'Yes. We employ and payroll the advisor, including provincial employment-standards obligations, statutory deductions and vacation entitlement. You direct the day-to-day work. Employment standards differ by province, and our placements are structured against the province the advisor actually works in.',
      },
    ],
  },
  {
    slug: 'ireland',
    name: 'Ireland',
    region: 'onshore',
    flagEmoji: '🇮🇪',
    heroImage: '/images/cc-team-huddle.jpg',
    metaTitle: 'Ireland Contact Centre Staffing | Multilingual EMEA Support',
    metaDescription:
      'Contact centre staffing in Ireland — Dublin, Cork, Limerick and Galway. Multilingual EMEA support agents across European languages, on our payroll.',
    hero: {
      eyebrow: 'Ireland · Onshore & EMEA hub',
      headline: 'The one place you can staff eight European languages from one floor.',
      subhead:
        'Two decades of shared-services investment made Dublin the multilingual support capital of Europe. We recruit into that pool — French, German, Spanish, Italian, Dutch and Nordic CX, all on CET-adjacent hours.',
    },
    whyHere: [
      {
        title: 'Genuine multilingual density',
        body: 'Dublin holds a resident population of native French, German, Spanish, Italian, Dutch, Polish and Nordic speakers who moved for shared-services work and stayed. Consolidating eight language queues onto one floor with one QA standard is possible here in a way it is not almost anywhere else.',
      },
      {
        title: 'EMEA coverage from an English-speaking base',
        body: 'Your management layer, tooling, documentation and escalation path stay in English while the customer-facing layer runs in-language. For US and UK companies expanding into Europe this removes the hardest part of the build.',
      },
      {
        title: 'EU data residency without leaving English',
        body: 'Post-Brexit, an EU-based support footprint solves a set of GDPR and data-residency questions that a UK site no longer does. Ireland is the default answer for English-language companies that need to stay inside the EU.',
      },
      {
        title: 'Regional cost relief outside Dublin',
        body: 'Cork, Limerick, Galway and Waterford run below Dublin on loaded cost with lower attrition, and the multilingual pool now extends to all four. Dublin is not automatically the right Irish city.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~40,000 contact-centre & shared-services workers',
      avgEnglishProficiency: 'C2 (native) · C1–C2 in second language',
      avgTenure: '~2.0 years (industry-weighted)',
      timeZones: ['GMT', 'IST', 'CET (overlap)'],
      languages: [
        'English (native)',
        'French',
        'German',
        'Spanish',
        'Italian',
        'Dutch',
        'Polish',
        'Nordic languages',
      ],
    },
    cities: [
      { name: 'Dublin', note: 'Deepest multilingual pool, EMEA shared-services cluster' },
      { name: 'Cork', note: 'Strong tech and pharma CX, below Dublin on cost' },
      { name: 'Limerick', note: 'Growing multilingual bench, lower attrition' },
      { name: 'Galway', note: 'Medtech and SaaS support experience' },
      { name: 'Waterford', note: 'Emerging hub, most cost-efficient of the four' },
    ],
    rolesAvailable: [
      'bilingual-agents',
      'inbound-customer-service',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'operations-managers',
    ],
    faqs: [
      {
        q: 'How many languages can realistically run from one Irish site?',
        a: 'Six to eight is routine for an established program. Beyond that, the constraint is rarely the language pool — it is scheduling. Low-volume languages produce fractional FTE requirements that are hard to roster, so we usually recommend blending those into multi-language advisors rather than staffing them separately.',
      },
      {
        q: 'Is Ireland cost-competitive with Poland or Portugal for multilingual work?',
        a: 'No — Ireland runs above both on loaded cost. Poland and Portugal are the value plays for multilingual EMEA support. Ireland wins when you need native-English management depth on the same floor, EU data residency, or an existing Irish entity. If pure cost-per-language is the driver, we will point you to Kraków or Lisbon.',
      },
      {
        q: 'Do you recruit native speakers or fluent second-language speakers?',
        a: 'Both, and the distinction matters by queue. Sales, retention and complaint handling we staff with native or near-native speakers. Tier-1 transactional support runs well with strong C1 speakers. We tell you which tier we screened to for every shortlisted candidate.',
      },
      {
        q: 'Can you support a GDPR-driven EU footprint requirement?',
        a: 'We can staff advisors working from Ireland, inside the EU, which addresses the personnel-location element of that requirement. The broader compliance position — processing agreements, transfer mechanisms, your own controller obligations — sits with your legal and privacy teams. We work to whatever constraints they set.',
      },
    ],
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    region: 'offshore',
    flagEmoji: '🇸🇬',
    heroImage: '/images/cc-team-desk.jpg',
    metaTitle: 'Singapore Call Centre Staffing | APAC Customer Support',
    metaDescription:
      'Contact centre staffing for Singapore and APAC — regional support teams across English, Mandarin, Malay and Bahasa. Agents on our payroll, first slate in 72 hours.',
    hero: {
      eyebrow: 'Singapore · APAC hub',
      headline: 'Run APAC support from Singapore — staff it from wherever the math works.',
      subhead:
        'Singapore is where the regional decision gets made and the senior layer sits. We staff that layer locally, and build the volume tier across Malaysia, the Philippines and Vietnam on the same time zone.',
    },
    whyHere: [
      {
        title: 'A regional HQ market, not a volume market',
        body: 'Singapore has one of the highest loaded agent costs in Asia and a labour pool measured in tens of thousands, not hundreds. It is the right place for regional CX leadership, escalation, enterprise account management and Mandarin-English commercial roles — and the wrong place for a 200-seat tier-1 floor.',
      },
      {
        title: 'The languages APAC actually needs',
        body: 'English, Mandarin, Malay, Bahasa Indonesia, Cantonese, Tamil and Thai cover the overwhelming majority of Southeast Asian customer contact. Singapore’s workforce carries the first four natively, which makes it a genuine multilingual screening base for the region.',
      },
      {
        title: 'One time zone, eight markets',
        body: 'SGT (UTC+8) covers Malaysia, Indonesia, Hong Kong, the Philippines, Vietnam, Thailand and most of Australia within a single working day. A support organisation designed around SGT does not need follow-the-sun handoffs to serve APAC.',
      },
      {
        title: 'Employment-pass reality, handled',
        body: 'Frontline CX roles rarely clear Employment Pass or S Pass thresholds, which is precisely why so many Singapore programs stall. We staff the roles that do clear locally and place the rest across the region rather than pretending the constraint is not there.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~25,000 contact-centre workers (regional roles)',
      avgEnglishProficiency: 'C1–C2',
      avgTenure: '~2.2 years (industry-weighted)',
      timeZones: ['SGT (UTC+8)'],
      languages: ['English', 'Mandarin', 'Malay', 'Tamil', 'Cantonese', 'Bahasa Indonesia'],
    },
    cities: [
      { name: 'Central Business District', note: 'Regional CX leadership and enterprise accounts' },
      { name: 'one-north', note: 'Tech and SaaS support, product-fluent advisors' },
      { name: 'Changi Business Park', note: 'Banking and financial services operations' },
      { name: 'Jurong', note: 'Most cost-efficient local capacity' },
      { name: 'Johor Bahru (MY)', note: 'Cross-border volume tier on the same time zone' },
    ],
    rolesAvailable: [
      'inbound-customer-service',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'operations-managers',
      'trainers',
    ],
    faqs: [
      {
        q: 'Can you staff a large tier-1 floor in Singapore?',
        a: 'Honestly, no — and we would push back if you asked. The local pool and cost base do not support a large frontline floor. What works is a Singapore leadership and escalation layer over a volume tier in Malaysia, the Philippines or Vietnam, all inside UTC+8. We will build that structure; we will not sell you 150 Singapore seats.',
      },
      {
        q: 'How do work-pass requirements affect who you can place?',
        a: 'They constrain which roles are viable locally. Senior CX, team lead, WFM and enterprise account roles more often meet pass thresholds; frontline agent roles typically do not, so those are staffed from citizens and permanent residents or placed regionally. We plan around this at the shortlist stage rather than discovering it at offer.',
      },
      {
        q: 'What is the best Mandarin-English staffing base for APAC?',
        a: 'Singapore for commercial and escalation roles where written and spoken Mandarin both need to be strong. Malaysia for the same skills at a materially lower cost. Mainland China for volume, with the data-transfer questions that carries. Most regional programs we staff end up splitting across Singapore and Malaysia.',
      },
      {
        q: 'Do you cover Hong Kong and Japan from the same program?',
        a: 'Hong Kong sits in the same time zone and we staff Cantonese-English roles into APAC programs regularly. Japan is a separate build — the language bar and service-expectation norms are high enough that it needs dedicated Japanese-native staffing rather than a regional blend.',
      },
    ],
  },
  {
    slug: 'united-arab-emirates',
    name: 'United Arab Emirates',
    region: 'offshore',
    flagEmoji: '🇦🇪',
    heroImage: '/images/cc-diverse-team.jpg',
    metaTitle: 'UAE Call Centre Staffing | Dubai & Abu Dhabi Contact Centres',
    metaDescription:
      'Contact centre staffing in the UAE — Dubai and Abu Dhabi. Arabic-English bilingual agents plus Hindi, Urdu and Tagalog coverage, on our payroll.',
    hero: {
      eyebrow: 'United Arab Emirates · Regional hub',
      headline: 'Arabic-English contact centre staffing, built for how the Gulf actually buys.',
      subhead:
        'Dubai and Abu Dhabi hold the deepest Arabic-English bilingual CX pool in the region, plus native Hindi, Urdu, Tagalog and Malayalam for the resident population your customers actually reflect.',
    },
    whyHere: [
      {
        title: 'Arabic-English bilingual at real depth',
        body: 'Gulf customers switch between Arabic and English mid-conversation and expect the advisor to follow. The UAE labour market produces that naturally — Levantine and Gulf Arabic alongside business English — in a way that no offshore substitute reliably matches.',
      },
      {
        title: 'The resident languages are the customer languages',
        body: 'Hindi, Urdu, Tagalog, Malayalam and Bengali are spoken by a very large share of UAE residents. Staffing them is not an accommodation, it is the core requirement — and the local labour pool covers all five natively.',
      },
      {
        title: 'GST hours that reach three continents',
        body: 'UTC+4 overlaps the European working day, all of South Asia, and the early Asian afternoon. For any business running EMEA and South Asia together, the UAE covers both from one roster.',
      },
      {
        title: 'Free-zone structures we already work inside',
        body: 'Dubai Internet City, DMCC and the Abu Dhabi free zones each carry different employment and visa mechanics. We staff inside structures our clients already hold, rather than requiring you to stand up a new entity to hire five advisors.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~35,000 contact-centre workers',
      avgEnglishProficiency: 'B2–C1',
      avgTenure: '~2.0 years (industry-weighted)',
      timeZones: ['GST (UTC+4)'],
      languages: ['Arabic', 'English', 'Hindi', 'Urdu', 'Tagalog', 'Malayalam', 'French'],
    },
    cities: [
      { name: 'Dubai', note: 'Deepest multilingual pool, retail, travel and fintech CX' },
      { name: 'Abu Dhabi', note: 'Government, energy and banking, higher Arabic-native share' },
      { name: 'Sharjah', note: 'Most cost-efficient capacity, strong South Asian language bench' },
      { name: 'Dubai Internet City', note: 'Tech and SaaS support, free-zone employment structures' },
      { name: 'Ras Al Khaimah', note: 'Emerging low-cost capacity for back-office work' },
    ],
    rolesAvailable: [
      'bilingual-agents',
      'inbound-customer-service',
      'outbound-sales-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'operations-managers',
    ],
    faqs: [
      {
        q: 'Can you staff Gulf Arabic specifically, not just Modern Standard?',
        a: 'Yes, and the distinction matters. Customer conversations happen in dialect — Gulf, Levantine or Egyptian — while written communication leans on Modern Standard. We screen for the dialect your customer base actually speaks and tell you which one each shortlisted advisor brings.',
      },
      {
        q: 'Is Egypt a cheaper alternative for Arabic support?',
        a: 'Considerably, and for many Arabic queues it is the better answer. Cairo has a much larger and lower-cost Arabic-English pool. The UAE wins when you need Gulf dialect specifically, an on-the-ground presence for enterprise or government accounts, or advisors who understand the local market first-hand. We staff both and will tell you which fits.',
      },
      {
        q: 'How do visa and sponsorship requirements work for placements?',
        a: 'Most UAE contact-centre staff are expatriate residents requiring employment visas tied to a sponsoring entity. We place advisors who already hold valid residency where possible, which removes the sponsorship lead time. Where new sponsorship is needed, that timeline is driven by the free zone or mainland authority involved, not by us — we will be explicit about it up front.',
      },
      {
        q: 'What ramp timeline should we expect?',
        a: 'First shortlist in about 72 hours. For advisors already resident with transferable visas, 3–5 weeks to live. Where new sponsorship is required, add the authority’s processing time. We plan cohorts around visa status so the first wave is never gated on paperwork.',
      },
    ],
  },
];
