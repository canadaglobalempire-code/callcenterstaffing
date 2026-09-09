import type { LocationDetail } from './types';

/**
 * Depth layer for location pages, keyed by LOCATIONS slug.
 *
 * NOTE ON COST BANDS: `costBenchmark.rows` are indicative market ranges for
 * loaded cost to the client, not quotes and not our rate card. They exist
 * because "call center cost in X" is the highest-intent query this page type
 * can win. Replace them with real pricing before this is treated as published
 * commercial guidance.
 */
export const LOCATION_DETAIL: Record<string, LocationDetail> = {
  jamaica: {
    intro:
      'Jamaica occupies a specific and defensible slot in nearshore staffing: it is the closest market to the US East Coast where English is the first language rather than a screened-for skill. That distinction decides more programs than cost does. On a US consumer voice queue, the failure mode is almost never that the agent lacked product knowledge — it is that the customer spent the first thirty seconds working out the accent and never recovered their patience. Jamaica removes that failure mode structurally, because advisors grew up speaking English, watching US television and talking to relatives in Brooklyn and Fort Lauderdale.',
    introSecondary:
      'What you give up is the lowest possible hourly rate. Jamaica sits above the Philippines and above most of Latin America, and it does not offer a bilingual Spanish pipeline at any real depth. It earns its premium on queues where accent resistance is a measurable CSAT risk, where Eastern-time alignment matters more than headcount, and where a two-hour flight from Miami makes site visits and QA calibration something you actually do rather than something you plan. We staff Kingston, Montego Bay and Portmore, and we will tell you plainly when a different market fits your queue better.',
    costBenchmark: {
      summary:
        'Indicative loaded cost to you — the all-in hourly figure including wage, statutory employer contributions, payroll and our margin. Jamaica prices between Latin America and US onshore, which is exactly what you would expect from a native-English market on Eastern time.',
      rows: [
        { role: 'Inbound customer service', band: '$11–15 / hr', note: 'Tier-1 voice, chat and email' },
        { role: 'Outbound sales / retention', band: '$12–17 / hr', note: 'Commission structures quoted separately' },
        { role: 'Technical support (tier 2)', band: '$14–19 / hr', note: 'Product-certified, longer ramp' },
        { role: 'Team lead / supervisor', band: '$16–22 / hr', note: 'Typically one per 12–15 advisors' },
        { role: 'QA analyst', band: '$15–20 / hr', note: 'Calibrated to your scorecard' },
      ],
      disclaimer:
        'Bands are indicative market ranges, not a quote. Actual pricing depends on role mix, volume, shift pattern, tenure requirement and contract length. We benchmark against your forecast and put real numbers in the written plan.',
    },
    hiringProcess: [
      {
        title: 'Source from the CX career market, not the general labour pool',
        body: 'Montego Bay and Kingston have twenty years of contact-centre history, which means there is a genuine population of advisors on their third or fourth CX role rather than their first job. We recruit into that population deliberately — prior-tenure candidates cost slightly more and churn dramatically less, which is the trade that decides total program cost.',
      },
      {
        title: 'Screen for register, not accent removal',
        body: 'We do not train Jamaican advisors to sound American, because it does not work and customers hear the effort. We screen for clarity, pace and register — the ability to slow down, enunciate and adjust to a frustrated caller. Every shortlisted advisor arrives with a recorded voice sample so you judge against your own brand bar rather than our description of it.',
      },
      {
        title: 'Verify the home-working setup before offer',
        body: 'A large share of Jamaican CX now runs hybrid or remote. We check connectivity, power backup and a genuinely quiet workspace before we shortlist, not after a bad first week. For weather-sensitive programs we bias toward advisors within reach of a site with generator backup.',
      },
      {
        title: 'Ramp in cohorts of 25, not in one wave',
        body: 'Cohort hiring protects the quality bar. Filling 60 seats in a single wave in a market this size means reaching further down the candidate pool than you would like. We run waves so the screen stays constant and week-four attrition does not spike.',
      },
    ],
    compliance: [
      {
        title: 'Data protection under the Jamaican Data Protection Act',
        body: 'Jamaica has a modern data-protection regime with obligations that broadly parallel GDPR in structure — registration, data-subject rights and breach notification. For US clients this mostly matters as evidence of a mature legal environment rather than as a constraint you have to solve.',
      },
      {
        title: 'PCI-DSS handling',
        body: 'Payment-handling queues are routine here and established sites operate to PCI requirements including clean-desk enforcement and call-recording pause. We screen for prior PCI-environment experience and can align to your specific attestation requirements.',
      },
      {
        title: 'HIPAA-adjacent work',
        body: 'We staff healthcare queues in Jamaica with HIPAA-trained advisors, and confirm Business Associate Agreement coverage with your legal team before start date. Where PHI handling is the core of the queue rather than incidental to it, we will usually recommend US onshore instead.',
      },
      {
        title: 'Hurricane-season continuity',
        body: 'A genuine planning input, not a footnote. We recommend splitting weather-exposed programs across Jamaica and a mainland nearshore market so a single storm never takes the whole queue offline, and we will raise this before you sign rather than after a June forecast.',
      },
    ],
    comparison: {
      alternativeName: 'the Philippines',
      summary:
        'The comparison that decides most Jamaica programs. The Philippines wins on cost and scale by a wide margin. Jamaica wins on time zone, native English and proximity. Neither is the right answer for every queue, and any partner who tells you otherwise is selling seats they already have.',
      rows: [
        { factor: 'Loaded hourly cost', here: 'Higher — a real premium', alternative: 'Lowest in mainstream delivery' },
        { factor: 'English', here: 'First language, native', alternative: 'Near-native, screened' },
        { factor: 'US Eastern alignment', here: 'Within an hour, no night shift', alternative: 'Night shift required' },
        { factor: 'Scale ceiling', here: 'Hundreds of seats', alternative: 'Effectively unlimited' },
        { factor: 'Site visits', here: 'Two hours from Miami', alternative: 'Long-haul, 20+ hours' },
        { factor: 'Bilingual Spanish', here: 'Not viable', alternative: 'Limited' },
      ],
    },
    bodyImages: [
      { src: '/images/cc-agent-call.jpg', alt: 'Call center advisor on a customer call in Jamaica' },
      { src: '/images/cc-team-huddle.jpg', alt: 'Jamaican contact centre team briefing before shift' },
    ],
    relatedServices: [
      'nearshore-call-center-staffing',
      'customer-service-staffing',
      'contact-center-staffing',
      'after-hours-customer-support-staffing',
    ],
  },

  'united-kingdom': {
    intro:
      'UK contact centre staffing has become a location problem disguised as a budget problem. National Living Wage increases and employer National Insurance changes have pushed loaded advisor costs up faster than service budgets have moved, and the reflex response — offshore everything — reliably damages the queues that were holding the operation together. The useful question is not whether to leave the UK. It is which forty percent of your contact volume genuinely needs a UK-based advisor, and where the rest should sit so that it still answers on GMT.',
    introSecondary:
      'We staff both halves of that answer. UK advisors in Glasgow, Manchester, Leeds, Cardiff and Belfast for FCA-regulated queues, vulnerable-customer handling, complaint escalation and public-sector work where data residency is contractual. And nearshore and offshore advisors — South Africa on GMT+2, Poland and Ireland for multilingual European coverage, the Philippines and India on a comfortable day shift for UK hours — for the volume behind them. Advisors sit on our payroll rather than your headcount, so a seasonal ramp never becomes a redundancy conversation.',
    costBenchmark: {
      summary:
        'Indicative loaded cost to you — wage, employer National Insurance, pension auto-enrolment, holiday accrual, payroll and our margin. The UK column is what makes the nearshore comparison worth running rather than assuming.',
      rows: [
        { role: 'Inbound customer advisor', band: '£16–22 / hr', note: 'Tier-1 voice, chat and email' },
        { role: 'Outbound / retention advisor', band: '£18–25 / hr', note: 'Excludes commission structures' },
        { role: 'Regulated / complaints advisor', band: '£21–28 / hr', note: 'Consumer Duty and vulnerable-customer trained' },
        { role: 'Team leader', band: '£24–32 / hr', note: 'Typically one per 10–14 advisors' },
        { role: 'QA analyst', band: '£22–29 / hr', note: 'Calibrated to your scorecard' },
        { role: 'WFM analyst', band: '£25–34 / hr', note: 'Forecasting and real-time management' },
      ],
      disclaimer:
        'Bands are indicative market ranges, not a quote, and they move with National Living Wage and NIC changes. Actual pricing depends on region, role mix, volume, shift pattern and contract length. Comparable South Africa delivery typically runs at roughly a third to a half of the UK figure for general CX work.',
    },
    hiringProcess: [
      {
        title: 'Recruit against the region, not "the UK"',
        body: 'Glasgow, Belfast and Cardiff run materially below the South East on loaded cost with deeper contact-centre labour pools and better tenure. Recruiting a general CX cohort in London is close to the most expensive way to solve the problem. We start from where the labour actually is and only pay for a location when the role genuinely requires it.',
      },
      {
        title: 'Screen to your competency framework, not ours',
        body: 'Most UK operations already run a defined competency model — often mapped to Consumer Duty outcomes or an internal quality scorecard. We align our screening rubric to yours at the outset so the shortlist is graded against the same bar your existing advisors are, rather than against a generic call-handling assessment.',
      },
      {
        title: 'Test vulnerable-customer handling explicitly',
        body: 'For regulated and complaints queues we run a recorded scenario covering a vulnerable-customer disclosure, and grade the response on identification, adjustment and escalation. It is the single highest-value screen in UK staffing and it is routinely skipped because it takes longer than a competency interview.',
      },
      {
        title: 'Employ, do not supply contractors',
        body: 'Advisors are employed by us on a contract of employment, so we carry the employment liability, payroll, pension auto-enrolment and statutory obligations. This is also why IR35 does not bite the way it would on a personal-service-company engagement — though your contracting policy should still review the arrangement.',
      },
      {
        title: 'Split the queue before you ramp',
        body: 'Before placing anyone we map your interval forecast against which contacts genuinely need a UK advisor. Most operations discover the regulated and escalation share is smaller than assumed, which is what makes the blended model work financially rather than just theoretically.',
      },
    ],
    compliance: [
      {
        title: 'UK GDPR and data residency',
        body: 'Post-Brexit, UK and EU data flows run on an adequacy decision that is periodically reviewed. Where your contracts or your public-sector customer require UK-only processing, we keep those advisors UK-based. Where they do not, South Africa and other locations are workable with the right processing agreements — a question for your privacy team, and we staff to whatever they conclude.',
      },
      {
        title: 'FCA-regulated queues and Consumer Duty',
        body: 'We screen for prior regulated-environment experience and Consumer Duty awareness, and can grade against your own competency framework. We do not hold regulatory permissions — you remain the regulated firm and retain supervisory responsibility for the advisors placed into your operation.',
      },
      {
        title: 'Employment law, IR35 and the Agency Workers Regulations',
        body: 'Advisors are employed rather than engaged as contractors, and we carry the resulting statutory obligations. Where the Agency Workers Regulations apply, equal-treatment rights after the qualifying period are handled as part of the placement rather than left as a surprise at week thirteen.',
      },
      {
        title: 'PCI-DSS and payment handling',
        body: 'Standard across UK sites we staff, including clean-desk enforcement and recording-pause on card capture. We screen for prior PCI-environment experience where the queue takes payments.',
      },
    ],
    comparison: {
      alternativeName: 'South Africa',
      summary:
        'For UK buyers, South Africa is what Mexico is to US buyers — the nearshore that actually works. Cape Town and Johannesburg sit on GMT+2, so a full UK working day is covered with no night shift, with neutral accents and genuine cultural affinity. Here is the honest trade.',
      rows: [
        { factor: 'Loaded hourly cost', here: 'Highest of the two', alternative: 'Roughly a third to a half' },
        { factor: 'Time-zone fit', here: 'Native GMT', alternative: 'GMT+2, full UK day, no nights' },
        { factor: 'Accent and affinity', here: 'Native UK, regional variety', alternative: 'Neutral, strong UK affinity' },
        { factor: 'FCA-regulated queues', here: 'The defensible choice', alternative: 'Case-by-case, needs review' },
        { factor: 'Data residency', here: 'UK-only satisfied', alternative: 'Needs processing agreements' },
        { factor: 'Vulnerable-customer work', here: 'Recommended', alternative: 'Higher risk, screen hard' },
      ],
    },
    bodyImages: [
      { src: '/images/cc-management.jpg', alt: 'UK contact centre operations manager reviewing performance data' },
      { src: '/images/internet-office-planning-meeting.jpg', alt: 'UK contact centre planning session on queue coverage' },
    ],
    relatedServices: [
      'contact-center-staffing',
      'customer-service-outsourcing',
      'outsourced-call-center-staffing',
      'offshore-call-center-staffing',
    ],
  },
};

export function getLocationDetail(slug: string): LocationDetail | undefined {
  return LOCATION_DETAIL[slug];
}
