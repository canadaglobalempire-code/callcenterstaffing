import type { Industry } from './types';

export const INDUSTRIES: Industry[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    primaryKeyword: 'healthcare call center staffing',
    metaTitle: 'Healthcare Call Center Staffing',
    metaDescription:
      'HIPAA-cleared healthcare call center staffing for member services, prior auth & patient access. License-verified agents on our payroll, live in ~72 hours. Get a quote.',
    hero: {
      eyebrow: 'Industries · Healthcare',
      headline: 'HIPAA-Cleared Agents for Healthcare Member Services, Prior Auth & Patient Access',
      subhead:
        'Member services, provider intake, prior auth, claims and Rx refill — staffed by recruiters who have placed for payers, providers and PBMs since 2003.',
    },
    intro: `Need HIPAA-compliant agents for member services, provider intake, prior authorization, claims or Rx refill lines? Call Center Staffing recruits, screens and places trained healthcare contact-center agents who stay on our payroll while you pay only for hours worked. Every shortlisted agent arrives with HIPAA training current within twelve months, a clean OIG/SAM exclusion check, and a recorded PHI-verification role-play scored by a senior healthcare recruiter. We plan cohorts against real healthcare windows — open enrollment, Medicare AEP and CMS audit prep — and can deploy in as little as ~72 hours with a 90-day attrition guarantee.`,
    industryChallenges: [
      {
        title: 'HIPAA training currency',
        body: 'Agents who completed HIPAA training two years ago at a prior employer cannot legally take PHI calls until refreshed. Most staffing firms place to a "HIPAA-trained" requisition without verifying date, scope or attestation — which surfaces as a compliance gap on day one.',
      },
      {
        title: 'EMR & payer-system fluency',
        body: 'Agents have to navigate Epic, Cerner, Availity, Change Healthcare and payer portals while holding a member on the line. Without screened keyboard fluency and ICD-10/CPT recognition, AHT spikes and FCR drops within the first two weeks of go-live.',
      },
      {
        title: 'Clinical vocabulary on the line',
        body: 'Member calls about formulary tier exceptions, prior auth denials, EOB confusion and Rx coverage move fast. Agents who memorize scripts but cannot pronounce common drug names, conditions or CPT codes lose member trust within 60 seconds of call open.',
      },
      {
        title: 'License & exclusion verification',
        body: 'OIG/SAM exclusion checks, state nursing license verification (for clinical triage), and NPDB queries all have lead times. Cohorts that miss these by even three business days slip the entire training calendar and the open-enrollment ramp.',
      },
    ],
    staffingApproach: `We staff healthcare contact centers differently from generic CX recruiting in four concrete ways. First, every shortlisted candidate has a HIPAA training certificate dated within twelve months — and we verify the issuing platform, not just a self-attestation. Second, we run a recorded PHI verification role-play scored by a senior account manager who has run a payer member-services floor; the audio is shared with your QA team before the candidate hits your interview loop. Third, we time the cohort calendar against your real ramp window — Medicare AEP, OEP, formulary refresh, audit prep — not against an abstract recruiting funnel. Fourth, we run pre-shortlist OIG/SAM exclusion checks and NPDB queries for clinical roles so there are no surprises at offer. For provider-facing work we screen for ICD-10, CPT and EMR keyboard fluency on a timed test; for payer member services we screen for formulary, EOB and benefit-design literacy. Bilingual member services in Spanish and Mandarin run from Mexico and onshore California pipelines. We do not deliver HIPAA training itself — that stays with your compliance team — but we coordinate the calendar and verify completion before the cohort goes live.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'trainers',
    ],
    complianceConsiderations: [
      'HIPAA-cleared agents with annual refresher verified at shortlist',
      'OIG/SAM exclusion checks pre-shortlist for every PHI-touching role',
      'NPDB queries for clinical triage and licensed nursing roles',
      'CMS marketing-compliance refresher for Medicare AEP cohorts',
      'EMR keyboard fluency tested (Epic, Cerner, NextGen, Availity)',
      'Recorded PHI-verification role-play scored by senior healthcare recruiter',
    ],
    regulatoryFrameworks: [
      'HIPAA',
      'HITECH',
      'CMS marketing rules',
      'OIG/SAM exclusion',
      '42 CFR Part 2 (BH)',
    ],
    caseHighlight: {
      company: 'MedNorth Health',
      challenge:
        'A regional Medicare Advantage plan needed 120 bilingual member-services agents live for AEP, with all HIPAA refreshers and CMS marketing compliance complete by October 1. Their prior vendor had missed the AEP window two years running.',
      result:
        'First cohort live August 14, full 120 seats live September 22, zero CMS marketing violations through AEP, and 92% cohort completion through the season — vs. 71% the prior year.',
    },
    outcomes: [
      { metric: '100%', description: 'HIPAA training currency verified at shortlist' },
      { metric: 'Less than 21 days', description: 'Average shortlist for HIPAA-cleared cohorts' },
      { metric: '+18 pts', description: '90-day retention vs. generalist staffing baseline' },
    ],
    faqs: [
      {
        q: 'How fast can you stand up a HIPAA-cleared cohort?',
        a: 'For 10–25 seats we typically place in 14–21 days. Larger cohorts run in waves — the first wave inside the same window, subsequent waves on a 2-week cadence aligned to your training calendar. Open-enrollment cohorts of 50–150 seats benefit from 60+ days of pre-build.',
      },
      {
        q: 'Do you handle the HIPAA training itself?',
        a: 'No — we recruit talent and verify they meet baseline. Regulator-specific training stays with your compliance team or your training partner. We coordinate the calendar so refreshers complete before the cohort takes a live PHI call, and we share completion attestations with your audit lead.',
      },
      {
        q: 'Can you place clinical triage agents — RN, LPN?',
        a: 'Yes. We have an active pipeline of state-licensed RNs and LPNs working remote triage roles, primarily in compact-license states. Every placement includes verified state-license currency, NPDB query, and OIG/SAM exclusion check at shortlist.',
      },
      {
        q: 'How do you handle Medicare AEP surge cohorts?',
        a: 'AEP work starts in July or August at the latest. We pre-build a bench of CMS-marketing-trained agents through summer, run cohort waves of 25–50 in September, and demobilize cleanly at end of January. Top performers are offered redeployment to OEP or year-round member services.',
      },
      {
        q: 'Onshore vs. nearshore for healthcare — what do you recommend?',
        a: 'Onshore for clinical triage and PHI-heavy work. Nearshore (Mexico) for bilingual Spanish member services where CT/ET overlap matters. We rarely recommend offshore for direct member contact in healthcare, though offshore back-office for claims data entry and provider directory maintenance works well.',
      },
      {
        q: 'Are your healthcare call center agents HIPAA compliant?',
        a: 'Yes. Every shortlisted agent has documented HIPAA training current within the last twelve months (we verify the issuing platform, not a self-attestation), a clean OIG/SAM exclusion check, and a recorded PHI-verification role-play scored by a senior healthcare recruiter before they reach your interview loop.',
      },
      {
        q: 'Do the healthcare agents work on your payroll or ours?',
        a: "Agents stay on Call Center Staffing's payroll, so you carry no HR, benefits or training burden. You pay only for hours worked, on a month-to-month basis, and can swap any agent for free if the fit isn't right — backed by our 90-day attrition guarantee.",
      },
      {
        q: 'How quickly can you deploy healthcare call center agents?',
        a: 'For 10-25 HIPAA-cleared seats we typically place in 14-21 days, and small backfills can go live in as little as ~72 hours. Open-enrollment and Medicare AEP cohorts of 50-150 seats run in waves and benefit from 60+ days of pre-build aligned to your training calendar.',
      },
    ],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    primaryKeyword: 'financial services call center staffing',
    metaTitle: 'Financial Services Call Center Staffing | NMLS, FCRA',
    metaDescription:
      'Financial services call center staffing for banks, lenders & fintechs. NMLS-verified, FCRA & Reg E-trained agents on our payroll. Get a shortlist in 72 hours.',
    hero: {
      eyebrow: 'Industries · Financial Services',
      headline: 'Staff Your Financial Services Contact Center With Verified, Compliant Agents',
      subhead:
        'Mortgage origination, deposits, collections, KYC and dispute resolution — staffed by recruiters who carry an active NMLS-licensed pipeline and screen against the regulator, not just your scorecard.',
    },
    intro: `Hiring agents for a regulated financial services contact center means a lapsed NMLS license, a missed Mini-Miranda, or a blown Reg E timer can each turn into a CFPB exposure. We supply NMLS-verified loan officers, FCRA-trained collectors, and KYC/BSA analysts for banks, credit unions, lenders, fintechs, and processors worldwide — every agent on our payroll, billed only for hours worked, and verified against the regulator before they reach your shortlist. You skip the HR, licensing, and training burden; we cover the 90-day attrition guarantee and swap any agent free. Tell us your state footprint and we will return a shortlist with NMLS status, state endorsements, and CRD records confirmed.`,
    industryChallenges: [
      {
        title: 'NMLS license currency at shortlist',
        body: 'A loan officer with a lapsed or restricted NMLS endorsement cannot legally originate. Most staffing firms verify license at offer — too late. We pull NMLS Consumer Access on every shortlisted candidate and confirm state endorsements match your origination footprint before submission.',
      },
      {
        title: 'FCRA-correct dispute handling',
        body: 'Collections agents who skip a Mini-Miranda or mishandle a verbal cease-and-desist create direct CFPB exposure. Screening for FCRA literacy on a recorded role-play is the only reliable way to filter out the 30–40% of resumes that read fine but fail the call.',
      },
      {
        title: 'Reg E timing on debit disputes',
        body: 'Provisional credit windows on Reg E debit disputes are unforgiving — 10 business days to investigate, 45 if extended with provisional credit. Agents have to track the timer correctly while documenting every customer touch. Process literacy is screened, not assumed.',
      },
      {
        title: 'KYC + GLBA on every call',
        body: 'KYC verification, OFAC checks and GLBA-aligned data handling happen on every call. Agents who shortcut authentication to improve AHT create both regulatory and fraud exposure. We screen for authentication discipline before keyboard speed.',
      },
    ],
    staffingApproach: `We staff financial services contact centers against the regulator, not just your QA scorecard. Every NMLS-licensed candidate is verified on Consumer Access at shortlist — license number, state endorsements, sponsorship status, and any disciplinary history. Collections candidates complete a recorded FCRA role-play scored against your compliance team's published rubric, not a generic CX checklist. KYC and authentication discipline is screened on a timed scenario where the candidate has to refuse a partial match and route correctly. For mortgage origination we cross-check the candidate's prior origination volume against their state endorsements; for deposits and disputes we screen for Reg E timer literacy and provisional credit handling. Bilingual Spanish work runs out of Mexico for nearshore CT/ET coverage. Every cohort completes a regulator-specific refresher — FCRA, Reg E, Reg Z, GLBA, TCPA, BSA — coordinated with your compliance team before taking a live call. We carry zero compliance violations across active financial services engagements over the last 24 months — a benchmark we report against on every monthly business review.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
    ],
    complianceConsiderations: [
      'NMLS license currency verified at shortlist via Consumer Access',
      'State endorsement match-check against your origination footprint',
      'FCRA recorded role-play scored against your published compliance rubric',
      'Reg E timer literacy screened on a timed dispute scenario',
      'OFAC/SDN screening discipline tested pre-shortlist',
      'GLBA and BSA refresher delivered by your compliance team before go-live',
    ],
    regulatoryFrameworks: ['NMLS', 'Reg E', 'FCRA', 'Reg Z', 'GLBA', 'TCPA', 'BSA / OFAC'],
    caseHighlight: {
      company: 'Cardinal Lending',
      challenge:
        'A regional non-bank mortgage lender needed 45 NMLS-licensed loan officers across 12 states for a refi-boom ramp, with state endorsements live in under 30 days. Prior vendor had placed 14 candidates whose endorsements did not match the origination footprint — three months wasted.',
      result:
        'First cohort of 18 LOs live in 24 days with all state endorsements verified at shortlist; full 45 live in 41 days; zero post-placement endorsement gaps and 84% still in seat at month 12.',
    },
    outcomes: [
      { metric: '0', description: 'Compliance violations across active engagements (24 months)' },
      {
        metric: '100%',
        description: 'NMLS verification at shortlist — no failed-licensure starts',
      },
      {
        metric: 'Less than 21 days',
        description: 'Average shortlist for licensed financial services roles',
      },
    ],
    faqs: [
      {
        q: 'Which licenses can you actively recruit for?',
        a: 'NMLS for consumer lending and mortgage, state-insurance for cross-sell, FINRA Series 6/7 in select markets, and HIPAA/PCI clearance for processors. Tell us your state footprint and we will tell you our pipeline depth and realistic shortlist timing.',
      },
      {
        q: 'How do you handle multi-state NMLS endorsements?',
        a: 'Every NMLS candidate is screened against your origination footprint at shortlist — we cross-check state endorsements on Consumer Access and flag any gap before submission. For new-state endorsements we coordinate with your licensing team on UST/state-specific testing timelines.',
      },
      {
        q: 'Can you staff collections agents who hold up under CFPB scrutiny?',
        a: 'Yes. Every collections candidate completes a recorded FCRA and Reg F role-play scored against your published rubric. We share the audio with your compliance team before the candidate hits your interview loop.',
      },
      {
        q: 'Do you place KYC and BSA analysts?',
        a: 'Yes. KYC analysts, sanctions screening reviewers and BSA case investigators are placed primarily onshore and from our Manila offshore pipeline. Every candidate is screened for sanctions screening tooling experience and case documentation discipline.',
      },
      {
        q: 'Do the financial services agents work on your payroll or ours?',
        a: 'Every agent stays on our payroll. You pay only for hours worked, with no HR, benefits, licensing-maintenance, or training overhead — and you can swap any agent free, backed by our 90-day attrition guarantee.',
      },
      {
        q: 'How fast can you staff a regulated banking or lending contact center?',
        a: 'We return a verified shortlist in about 72 hours and average under 21 days to a live, NMLS-verified cohort. We pull NMLS Consumer Access and confirm state endorsements against your origination footprint before any candidate is submitted.',
      },
      {
        q: 'Can you supply bilingual Spanish agents for financial services?',
        a: 'Yes. Bilingual Spanish member services and collections run primarily out of our Mexico nearshore delivery for CT/ET overlap, with onshore US available for PII-heavy lending and KYC/BSA work staffed from our Manila pipeline.',
      },
    ],
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    primaryKeyword: 'insurance call center staffing',
    metaTitle: 'Insurance Call Center Staffing | Licensed P&C, Life, FNOL',
    metaDescription:
      'Insurance call center staffing for licensed P&C, life and health agents plus FNOL claims intake. State license verified at shortlist. Get a staffing quote.',
    hero: {
      eyebrow: 'Industries · Insurance',
      headline: 'Staff Your Insurance Contact Center With Licensed Agents and FNOL Reps',
      subhead:
        'State-licensed life, health and P&C agents, FNOL intake and claims dispatch — staffed by recruiters who carry an active multi-state licensed pipeline and verify currency at shortlist.',
    },
    intro: `Call Center Staffing places state-licensed insurance agents, FNOL claims-intake reps, claims dispatchers and member-services staff on our payroll, so carriers, MGAs, brokers and insurtechs add capacity without the licensing and HR burden. Every shortlisted agent's state license currency and line-of-authority (life, health, P&C) are verified before you interview, and outbound candidates are screened for TCPA discipline on a recorded scenario. You pay only for hours worked, swap any agent free, and ramp multi-state licensed cohorts in roughly 25 days. Onshore for licensed and complex-claims work, nearshore Spanish-bilingual for P&C and FNOL, offshore for non-licensed back-office.`,
    industryChallenges: [
      {
        title: 'Multi-state license currency',
        body: 'A licensed agent appointed in 8 states with one lapsed appointment cannot service that state — and you only find out when the call comes in. We verify NIPR/state DOI status for every appointment on every shortlisted candidate, not just the home state.',
      },
      {
        title: 'Line-of-authority match',
        body: 'A health-licensed agent cannot quote auto. A P&C agent cannot bind term life. Generalist staffing firms place to a "licensed agent" requisition without checking line-of-authority against your product mix — a 20% miss-fit rate is common.',
      },
      {
        title: 'FNOL empathy under stress',
        body: 'First-notice-of-loss callers are frequently distressed — auto accident, hospitalization, property damage. FNOL agents have to capture a complete claim while de-escalating in real time. Empathy and process discipline are screened together on a recorded scenario.',
      },
      {
        title: 'TCPA on every outbound dial',
        body: 'TCPA exposure on outbound insurance dialing is the single biggest staffing-related liability. Agents who shortcut consent verification or skip DNC checks create direct settlement exposure. Outbound candidates are screened for TCPA discipline before dial-rate.',
      },
    ],
    staffingApproach: `We staff insurance contact centers with line-of-authority detail captured at the candidate level — every licensed agent in our pipeline has their NPN, line-of-authority, state appointments and CE status verified on submission. For multi-state work we cross-check appointments against your product footprint at shortlist; if a candidate is missing a state we flag it with realistic timing for new appointment. FNOL intake candidates complete a recorded distress-scenario role-play scored by a senior account manager who has run a P&C FNOL floor; the audio includes a simulated auto accident with an upset caller and we score for empathy, claim-number discipline and photo-collection prompting. Outbound licensed agents complete a TCPA-discipline screen on a timed scenario including consent verification, DNC check and call-recording disclosure. Bilingual Spanish FNOL and member services run from Mexico — particularly Guadalajara — for CT/ET coverage on auto and homeowner lines. Cohort timing is planned against your renewal cycle and CAT-event readiness, not against a generic recruiting funnel. Every cohort completes a TCPA, state DOI and product-specific refresher before going live.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'operations-managers',
    ],
    complianceConsiderations: [
      'State license currency and NPN verified via NIPR at shortlist',
      'Line-of-authority cross-check against your product footprint',
      'TCPA discipline screened on recorded outbound scenario',
      'FNOL empathy + process scenario scored by senior P&C recruiter',
      'CE hours current and tracked through engagement',
      'State DOI marketing compliance refresher before go-live',
    ],
    regulatoryFrameworks: [
      'State insurance licensing (life, health, P&C)',
      'TCPA',
      'FNOL standards',
      'NAIC market conduct',
    ],
    caseHighlight: {
      company: 'Beacon Insurance',
      challenge:
        'A multi-state P&C MGA needed 60 P&C-licensed agents across 22 states for a renewal-cycle ramp, with FNOL coverage in English and Spanish. Prior vendor had placed agents whose state appointments did not match the product footprint, leading to compliance escalations and a CAT-event coverage gap during hurricane season.',
      result:
        'First cohort of 24 P&C agents live in 23 days with full state-appointment match verified; full 60 live in 38 days; bilingual Spanish FNOL bench live in Guadalajara before hurricane season open. Zero state DOI complaints through the renewal cycle.',
    },
    outcomes: [
      { metric: '100%', description: 'License + line-of-authority verified at shortlist' },
      { metric: 'Less than 25 days', description: 'Average ramp for licensed multi-state cohorts' },
      { metric: '+22 pts', description: '90-day retention vs. prior recruiting model' },
    ],
    faqs: [
      {
        q: 'Can you staff agents licensed in all 50 states?',
        a: 'Yes — though realistic timing for full multi-state appointment varies by line of authority. P&C and life are deepest in our pipeline; health and Medicare follow. We will share state-by-state pipeline depth and realistic shortlist timing as part of the written quote.',
      },
      {
        q: 'How do you handle FNOL surge during CAT events?',
        a: 'CAT-event surge requires pre-built bench. We run quarterly bench refresh of FNOL-trained agents in Mexico and onshore Texas, available for 72-hour stand-up. Surge cohorts can ramp to 40–80 seats inside two weeks of CAT declaration if we have an active CAT-readiness retainer.',
      },
      {
        q: 'Do you place underwriting support and adjuster roles?',
        a: 'Yes. Underwriting assistants, adjuster support, claims dispatchers and policy admin are placed alongside agent roles. Adjuster support is primarily onshore; policy administration runs from our Manila offshore pipeline with strong volume and quality.',
      },
      {
        q: 'How do you screen for TCPA discipline on outbound?',
        a: 'Every outbound licensed candidate completes a recorded TCPA scenario — consent verification, DNC check, call-recording disclosure and prior-express-written-consent confirmation. Audio is shared with your compliance team before the candidate hits your loop.',
      },
      {
        q: 'How much does insurance call center staffing cost?',
        a: 'You pay a single blended hourly rate per agent for hours worked only — no recruiting fees, no benefits administration, no severance. Rates vary by line of authority and delivery location (onshore licensed agents cost more than offshore policy-admin staff). Engagements are month-to-month, and we share a written rate card per role in your quote.',
      },
      {
        q: 'Are your insurance agents your employees or ours?',
        a: 'Every agent stays on our payroll. We handle hiring, licensing verification, training, benefits and HR compliance, so you get production capacity without adding headcount or carrying the licensing and CE-tracking burden. You direct the work; we own the employment.',
      },
      {
        q: 'How quickly can you staff licensed insurance agents?',
        a: 'Licensed multi-state cohorts average under 25 days to ramp, and we keep a quarterly FNOL bench refresh for 72-hour CAT-event stand-up. A first cohort is typically live in two to three weeks with full state-appointment and line-of-authority match verified at shortlist.',
      },
      {
        q: 'When should we start hiring call center agents for open enrollment?',
        a: 'Start workforce planning in late spring and licensed-agent recruiting by July or August. State appointments, background checks, product training and nesting make open enrollment less forgiving than a normal seasonal ramp. Waiting until September usually forces smaller classes, shorter nesting or overtime on the existing team.',
      },
    ],
  },
  {
    slug: 'ecommerce-retail',
    name: 'eCommerce & Retail',
    primaryKeyword: 'ecommerce customer service outsourcing',
    metaTitle: 'eCommerce Customer Service Outsourcing',
    metaDescription:
      'eCommerce customer service outsourcing done as staffing: trained agents on our payroll, pay per hour, Q4 surge bench pre-built. Get a free plan in 1 day.',
    hero: {
      eyebrow: 'Industries · eCommerce & Retail',
      headline: 'Ecommerce & retail customer service agents, staffed on our payroll',
      subhead:
        'Order management, returns, refunds, loyalty and PCI-cleared payments — staffed by recruiters who pre-build the Q4 bench in July and demobilize cleanly in February.',
    },
    intro: `Looking for ecommerce customer service outsourcing without handing your brand voice to a black-box call center? We staff trained order-management, returns, refunds, loyalty and PCI-cleared payment agents who work your queues, your tools and your tone — but stay on our payroll, so there is no HR, training or attrition burden on you. You pay only for hours worked, scale up for Black Friday and Cyber Monday peaks we start sourcing in July, and swap any agent free if the fit is off. Onshore, nearshore (Mexico) and offshore (Philippines) delivery, deployed in roughly 72 hours and month-to-month.`,
    industryChallenges: [
      {
        title: 'Q4 surge starts in July',
        body: 'Brands that wait until October to staff Q4 lose the war. Pipeline build for November-December peak has to start in July at the latest. The candidates available in October are the candidates every other brand also rejected in July.',
      },
      {
        title: 'PCI on payment troubleshooting',
        body: 'Agents touching cardholder data — even just helping with a failed checkout — fall under PCI scope. Cardholder data exposure on a screen-share or saved chat is a reportable incident. Screening for PCI awareness and call-control discipline is required for payment-touching roles.',
      },
      {
        title: 'CSAT under returns volume',
        body: 'Post-holiday returns surge is when CSAT drops hardest. Agents have to process refunds, handle stockout substitutions and de-escalate angry-package-arrived-late calls in volume. Screening for de-escalation under volume — not just baseline empathy — is the difference between a 78 and an 86 CSAT.',
      },
      {
        title: 'Multi-channel context-switching',
        body: 'Modern retail CX is voice + chat + email + social DMs in the same shift. Agents who can hold conversational tone across channels and pivot mid-shift without quality drop are screened on a multi-channel scenario, not assumed.',
      },
    ],
    staffingApproach: `We staff eCommerce contact centers against the retail calendar, not against an abstract job rec. For Q4 work we begin pipeline build in July — sourcing, screening and warm-keeping seasonal candidates so the surge cohort lands fully-vetted on day one of training. For payment-touching roles every candidate has documented PCI awareness training and completes a recorded call-control scenario where they have to refuse to repeat a card number aloud. CSAT-driving soft skills are screened on a recorded customer-recovery scenario — the candidate handles a simulated late-package complaint and we score for tone, ownership language and resolution discipline. Multi-channel agents complete a chat + voice context-switch scenario. For brands serving California we screen for CCPA awareness and verified-deletion-request handling. Bilingual Spanish for US-LATAM brands runs from Mexico; English-only volume runs from Mexico and the Philippines depending on the wage profile. Demobilization is planned from week one — top performers are retained on permanent roster for next season; the rest get a planned off-ramp with clear coaching, not a surprise termination.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'trainers',
    ],
    complianceConsiderations: [
      'PCI awareness training documented for any payment-touching role',
      'Call-control scenario verifying agents will not repeat card numbers aloud',
      'CCPA-aware screening for California-consumer-facing roles',
      'Verified deletion-request handling tested for CCPA-scope brands',
      'Recorded de-escalation scenario scored against your brand voice',
      'Social-channel conduct guidelines briefed pre-go-live',
    ],
    regulatoryFrameworks: ['PCI DSS', 'CCPA', 'FTC consumer protection'],
    caseHighlight: {
      company: 'Northwind Outdoors',
      challenge:
        'A DTC outdoor-apparel brand needed 80 seasonal CX agents live by November 1 for Black Friday through end-of-year, with PCI-cleared coverage on payment troubleshooting and bilingual Spanish coverage for their growing LATAM channel. Prior partner had ramped late and CSAT dropped to 71 through December.',
      result:
        'Pipeline build started July 14; first cohort of 30 live October 18; full 80 live November 1 with bilingual Spanish bench in Guadalajara. Q4 CSAT held at 87 through December and 84 through January returns surge.',
    },
    outcomes: [
      { metric: '+9 pts', description: 'Q4 CSAT vs. prior staffing model (avg.)' },
      { metric: '92%', description: 'Of seasonal cohort completes the contract' },
      { metric: '+18%', description: 'Re-engagement rate for top performers next season' },
    ],
    faqs: [
      {
        q: 'How early should we engage you for Q4?',
        a: 'July at the latest. The strongest pipelines come from 90+ days of pre-build before October ramp. We have run Q4 cohorts in 60 days, but candidate quality and cohort completion both drop materially when we start later.',
      },
      {
        q: 'Can you staff PCI-cleared agents for payment troubleshooting?',
        a: 'Yes. We carry an active pipeline of PCI-aware agents in the US, Mexico and the Philippines. Every payment-touching candidate has documented PCI awareness training and passes a call-control scenario at shortlist.',
      },
      {
        q: 'How do you handle returns surge in January?',
        a: 'Returns surge is planned alongside the Q4 ramp — same cohort, longer tail. We size the December cohort to handle peak voice + the January returns wave, then demobilize cleanly in February with a top-performer retention offer.',
      },
      {
        q: 'Do you cover chat, email and social alongside voice?',
        a: 'Yes — most of our retail CX placements are multi-channel. Candidates are screened on a chat + voice context-switch scenario and we share their writing samples with your team before submission.',
      },
      {
        q: 'What does ecommerce customer service outsourcing cost with a staffing model?',
        a: 'You pay only for hours worked at a per-hour rate — no recruiting fees, no training overhead, no benefits administration, because agents stay on our payroll. Most ecommerce and retail brands run month-to-month and scale hours up for Q4 peak and back down in February, so you are not carrying off-season headcount you do not need.',
      },
      {
        q: 'How quickly can you staff seasonal ecommerce support agents for Black Friday and Q4?',
        a: 'We start sourcing peak cohorts in July and can deploy a vetted, brand-trained team in roughly 72 hours once a plan is signed. Brands that engage by mid-summer land fully-screened cohorts on day one of training; later starts are possible but candidate quality and cohort completion drop the closer you get to October.',
      },
      {
        q: 'Are your agents PCI-compliant for payment and checkout troubleshooting?',
        a: 'Yes. Every payment-touching agent has documented PCI awareness training and passes a recorded call-control scenario at shortlist where they must refuse to repeat a card number aloud. For brands serving California consumers we also screen for CCPA awareness and verified deletion-request handling.',
      },
    ],
  },
  {
    slug: 'telecom-media',
    name: 'Telecom & Media',
    primaryKeyword: 'telecom call center staffing',
    metaTitle: 'Telecom Call Center Staffing | Tier 1/2 & CPNI',
    metaDescription:
      'Hire tier 1/2 telecom support, billing, retention and CPNI-trained sales agents. Bilingual Spanish bench, TCPA discipline, deploy in ~72 hours. Get agents.',
    hero: {
      eyebrow: 'Industries · Telecom & Media',
      headline: 'Hire Telecom & Media Call Center Agents — Tier 1, Tier 2 & CPNI Sales',
      subhead:
        'Tier 1 troubleshooting, tier 2 escalations, billing, retention, CPNI-aware sales and field-dispatch coordination — staffed by recruiters with deep MSO and MVNO history.',
    },
    intro: `Need trained telecom support agents without the hiring and compliance burden? Call Center Staffing supplies tier 1 and tier 2 tech support, billing, retention and CPNI-trained sales agents to MSOs, MVNOs, fiber, satellite and streaming providers — staffed by recruiters with deep telecom history. Agents are screened on real modem-diagnostic and CPNI authentication scenarios before they reach your floor, stay on our payroll, and you pay only for hours worked. Bilingual Spanish technical support runs from Guadalajara and Tijuana with live US time-zone overlap, and every CPNI- or TCPA-touching cohort is trained before going live.`,
    industryChallenges: [
      {
        title: 'Modem & provisioning system fluency',
        body: 'Tier 1 agents who memorize a script but cannot read a SNR reading or interpret a DOCSIS uncertified state inflate AHT and miss the resolution. Screening for actual modem-diagnostic literacy on a timed scenario filters out the 40% of tier 1 resumes that look qualified but cannot do the work.',
      },
      {
        title: 'CPNI on every account change',
        body: 'CPNI mishandling — disclosing call detail or account info to an unauthenticated caller — is a direct FCC enforcement risk. Agents who shortcut authentication to lower AHT create both regulatory and security exposure. Authentication discipline is screened, not assumed.',
      },
      {
        title: 'Retention without TCPA exposure',
        body: 'Outbound retention dialing on customers in cancel-flow is high-value but TCPA-exposed. Consent verification, DNC scrubbing and call-recording disclosure have to be muscle memory, not a checkbox. Recorded TCPA scenario at screen filters out the dial-and-pray candidates.',
      },
      {
        title: 'Sales-vs-service line discipline',
        body: 'Service agents who try to sell turn calls into AHT problems; sales agents who get stuck in service drag down conversion. Cohort design has to keep these populations separate, with QA scoring discipline on cross-line attempts.',
      },
    ],
    staffingApproach: `We staff telecom contact centers with the recognition that tier 1, tier 2, billing, retention and CPNI sales are five different recruiting profiles — not one. Tier 1 candidates are screened on a timed modem-diagnostic scenario where they have to interpret SNR, signal levels and a DOCSIS state before recommending a fix. Tier 2 candidates are screened on an escalation scenario including a Layer 3 routing issue and a bonded-channel diagnostic. CPNI-touching candidates complete a recorded authentication scenario where the caller fails partial verification and the agent has to refuse and route correctly. Outbound retention candidates complete a TCPA-discipline scenario before they hit your floor. For bilingual Spanish technical support — high demand from US MSOs and MVNOs — we recruit from Mexico, primarily Guadalajara and Tijuana, where the technical-vocabulary depth in Spanish is meaningfully better than from offshore. Field-dispatch coordinators are placed onshore for shift-overlap reasons. Every cohort completes a CPNI refresher and a TCPA refresher before going live.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
    ],
    complianceConsiderations: [
      'CPNI training documented for every account-touching agent',
      'Recorded authentication scenario verifying refusal under partial match',
      'TCPA discipline screen for every outbound retention candidate',
      'DNC scrubbing process literacy tested pre-shortlist',
      'Call-recording disclosure muscle memory verified on recorded scenario',
      'Tier 1 modem-diagnostic scenario before tier 1 placement',
    ],
    regulatoryFrameworks: [
      'TCPA',
      'CPNI (47 CFR 64.2001)',
      'FCC enforcement',
      'State PUC tariff rules',
    ],
    caseHighlight: {
      company: 'Coastline Connect',
      challenge:
        'A regional fiber MSO needed 140 tier 1 and 25 tier 2 agents across English and Spanish to support a market-expansion launch, with CPNI training current and full TCPA discipline on outbound retention. Prior staffing partner had two CPNI-related FCC complaints in the prior year.',
      result:
        'First tier 1 cohort of 40 live in 28 days, bilingual Spanish bench live in Guadalajara month two, full 165 live by day 75. Zero CPNI complaints in the first 12 months of engagement; tier 1 AHT dropped 14% vs. prior staffing baseline through diagnostic-literate screening.',
    },
    outcomes: [
      { metric: '0', description: 'CPNI-related complaints across active engagements' },
      { metric: '-14%', description: 'Tier 1 AHT vs. prior staffing baseline (avg.)' },
      { metric: '+24%', description: 'Retention save-rate on outbound TCPA-disciplined cohorts' },
    ],
    faqs: [
      {
        q: 'Can you staff bilingual Spanish technical support?',
        a: 'Yes. Mexico — primarily Guadalajara and Tijuana — has meaningfully better technical-vocabulary depth in Spanish than offshore. We staff tier 1 and tier 2 bilingual Spanish from those markets with full CT/PT overlap.',
      },
      {
        q: 'How do you screen for CPNI discipline?',
        a: 'Every account-touching candidate completes a recorded authentication scenario where the simulated caller fails partial verification. We score for refusal discipline, correct routing, and call-control. Audio is shared with your compliance team before submission.',
      },
      {
        q: 'Do you handle field-dispatch and provisioning roles?',
        a: 'Yes. Field-dispatch coordinators and provisioning specialists are placed primarily onshore for shift-overlap and OSS/BSS access reasons. We screen for tooling experience by name — not just generic "provisioning" on the resume.',
      },
      {
        q: 'Can you ramp a retention cohort with TCPA discipline guaranteed?',
        a: 'Yes. Every outbound retention candidate completes a recorded TCPA scenario at screen, and every cohort gets a TCPA refresher before going live. We coordinate the consent-database and DNC-scrub workflow with your compliance team during onboarding.',
      },
      {
        q: 'How fast can you deploy telecom call center agents?',
        a: 'We typically place screened tier 1 telecom agents on your floor in about 72 hours, and ramp larger cohorts in stages — our Coastline Connect engagement had 40 tier 1 agents live in 28 days and a full 165-seat bilingual ramp live by day 75.',
      },
      {
        q: 'Do telecom agents stay on your payroll or ours?',
        a: 'Agents stay on our payroll. You carry no hiring, HR, training or termination burden — you pay only for hours worked, on a month-to-month basis, and can swap any agent free under our 90-day attrition guarantee.',
      },
      {
        q: 'Can you staff onshore, nearshore and offshore telecom support?',
        a: 'Yes. We staff tier 1 from the Philippines and Mexico, tier 2 and CPNI sales onshore, and bilingual Spanish technical support from Guadalajara and Tijuana with live US time-zone overlap — so buyers in the US, UK, Canada and Australia can match delivery to cost and language needs.',
      },
    ],
  },
  {
    slug: 'travel-hospitality',
    name: 'Travel & Hospitality',
    primaryKeyword: 'travel call center staffing',
    metaTitle: 'Travel Call Center Staffing',
    metaDescription:
      'Travel & hospitality call center staffing: GDS-trained, 24/7 multilingual agents for OTAs, airlines, hotels and cruise. Live in ~72 hours. Book a staffing call.',
    hero: {
      eyebrow: 'Industries · Travel & Hospitality',
      headline: 'Travel & Hospitality Call Center Staffing for 24/7 Multilingual Support',
      subhead:
        'OTAs, airlines, hotels, cruise and tour — staffed for GDS fluency, irrops handling and 24/7 multi-language coverage with Manila and Mexico anchoring the night-side.',
    },
    intro: `Travel call center staffing means recruiting, screening and placing trained customer-service agents and supervisors for OTAs, airlines, hotels, cruise lines and tour operators — agents who stay on our payroll while you pay only for hours worked. The work is 24/7 and multilingual by default, and dominated by irregular operations: cancellations, rebookings, weather waivers and overbooking, where agent calm and PNR accuracy decide the outcome. We screen GDS fluency (Sabre, Amadeus, Galileo) and irrops handling on timed, recorded scenarios — never assumed from a resume — and anchor night-side English in Manila with bilingual Spanish daytime from Mexico. With our 90-day attrition guarantee, free agent swaps and ~72-hour deploy, you scale travel CX up for peak season and down across shoulder months without carrying the hiring risk.`,
    industryChallenges: [
      {
        title: 'Irrops empathy + process discipline',
        body: 'A weather cancellation surge brings 4x baseline volume of distressed customers, all needing rebooking inside narrow recovery windows. Agents have to hold empathy while running fast, accurate PNR work. Generic CX screening misses both halves; irrops scenario testing is required.',
      },
      {
        title: 'GDS and PNR fluency',
        body: 'A PNR-handling miss — wrong fare class, missing OSI, mishandled SSR — cascades into downstream service failures and refund-dispute exposure. Screening for GDS keyboard fluency on a timed scenario is the only reliable filter.',
      },
      {
        title: '24/7 staffing without quality drop',
        body: 'Night-shift CX is where retention and quality both fall hardest. Manila anchors the night-side for English with strong tenure; Mexico for bilingual. Cohort design and shift-differential planning are part of the staffing engagement, not an afterthought.',
      },
      {
        title: 'Loyalty-program literacy',
        body: 'High-value loyalty members expect agents who understand status tier benefits, mileage-redemption rules and elite recovery. Agents without loyalty-program literacy turn a redeemable miles question into a 12-minute call. Screening for loyalty fluency is a separate vector from baseline CX skill.',
      },
    ],
    staffingApproach: `We staff travel contact centers with explicit awareness that the work runs 24/7 across three or four shifts and three or four languages, and that night-shift quality is where most travel CX programs erode. Manila is our primary night-side English anchor — strong tenure, deep hospitality cultural fluency, GDS-trained candidate pool. Mexico anchors bilingual English-Spanish daytime coverage with CT overlap on US travelers. Onshore US handles complex escalations, high-value loyalty members and complex refunds. Every GDS-touching candidate completes a timed PNR-handling scenario in the platform you use — Sabre, Amadeus or Galileo — and we share the screen recording with your training lead. Irrops handling is screened on a recorded weather-cancellation scenario where the candidate has to rebook a denied-boarding family of four with a tight connection; we score for empathy, PNR accuracy and recovery-credit application. For brands serving Europe we add a GDPR awareness screen and verified-DSAR-handling scenario. Cohort calendars align to your peak — summer leisure, winter holiday, spring break — and demobilize cleanly across shoulder seasons with top-performer retention.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'operations-managers',
    ],
    complianceConsiderations: [
      'GDPR awareness for European-traveler-facing roles',
      'Verified DSAR-handling scenario for GDPR-scope brands',
      'DOT consumer protection (refund timing, denied boarding) refresher',
      'PCI awareness for payment-touching booking and refund roles',
      'GDS keyboard-fluency scenario in your platform (Sabre/Amadeus/Galileo)',
      'Loyalty-program-tier and elite-recovery literacy verified at shortlist',
    ],
    regulatoryFrameworks: [
      'DOT consumer protection',
      'GDPR (EU travelers)',
      'PCI DSS (bookings/refunds)',
    ],
    caseHighlight: {
      company: 'Wayfinder Travel',
      challenge:
        'A mid-tier OTA needed 220 multi-language agents across English, Spanish and Portuguese with 24/7 coverage and irrops handling. Prior partner had run night-shift quality at 12 points below daytime, and a single weather event had generated 4,000 refund-related social complaints.',
      result:
        'First cohort of 60 night-side English live in Manila within 35 days; bilingual Spanish daytime live in Guadalajara week six; full 220 live by day 90. Night-shift CSAT closed to within 2 points of daytime; irrops weather event in month four cleared in 36 hours with zero social escalation surge.',
    },
    outcomes: [
      { metric: '24/7', description: 'Live coverage across three language pairs' },
      { metric: '+11 pts', description: 'Night-shift CSAT vs. prior staffing model' },
      { metric: 'Less than 36 hrs', description: 'Avg. irrops weather-event clear time' },
    ],
    faqs: [
      {
        q: 'Where do you anchor 24/7 English coverage?',
        a: 'Manila for night-side English — strongest tenure, deepest hospitality and GDS-trained candidate pool offshore. Mexico for bilingual English-Spanish daytime. Onshore US handles complex escalations and high-value loyalty members.',
      },
      {
        q: 'Can you screen for GDS / PNR-handling skill directly?',
        a: 'Yes. Every GDS-touching candidate completes a timed PNR scenario in your platform — Sabre, Amadeus or Galileo. We share the screen recording with your training lead so the cohort lands at training closer to fully-trained baseline.',
      },
      {
        q: 'How do you handle CAT-event surge — weather cancellations?',
        a: 'CAT-event surge requires a pre-built bench and a 72-hour stand-up agreement. We carry seasonal bench refresh against your historical event volume, and we hold cohort owners on retainer for declared events. Surge-up to 50–100 incremental seats inside two weeks is realistic on retainer.',
      },
      {
        q: 'Do you cover GDPR for European traveler-facing work?',
        a: 'Yes. Every European-facing candidate completes a GDPR awareness screen and a verified-DSAR-handling scenario. We coordinate refresher delivery with your privacy team before the cohort goes live.',
      },
      {
        q: 'What does travel call center staffing cost?',
        a: 'You pay per hour worked, month-to-month — no recruiting fees, no training overhead and no HR burden, because agents stay on our payroll while working your queues. That makes it straightforward to scale travel CX up for summer or holiday peak and back down across shoulder seasons without carrying full-time headcount year round.',
      },
      {
        q: 'How fast can you stand up a travel customer service team?',
        a: 'We deploy trained, GDS-screened agents in about 72 hours from a bench refreshed against your historical peak and irrops volume. A full multi-language program (night-side English plus bilingual daytime) typically reaches first cohort live within roughly 35 days and full scale by day 90, as in our Wayfinder Travel engagement.',
      },
      {
        q: 'Can you screen agents for GDS and PNR handling before they reach my floor?',
        a: 'Yes. Every GDS-touching candidate completes a timed PNR-handling scenario in your platform — Sabre, Amadeus or Galileo — plus a recorded irrops scenario (rebooking a denied-boarding family on a tight connection) scored for empathy, PNR accuracy and recovery-credit application. We share the recordings with your training lead, and any agent who underperforms can be swapped free.',
      },
    ],
  },
  {
    slug: 'saas',
    name: 'SaaS & Tech',
    primaryKeyword: 'saas customer support outsourcing',
    metaTitle: 'SaaS Customer Support Outsourcing',
    metaDescription:
      'Staff SaaS tier 1/2 technical support, CS ops and onboarding with product-screened agents. SOC 2 & GDPR-aware, deploy in ~72 hrs. Get matched agents.',
    hero: {
      eyebrow: 'Industries · SaaS & Tech',
      headline: 'SaaS & Tech Customer Support Agents, Screened for Product Depth',
      subhead:
        'Tier 1 and tier 2 technical support, onboarding, customer success ops and trust-and-safety — screened for actual product literacy, API fluency and SOC 2 / GDPR awareness.',
    },
    intro: `Hire SaaS customer support agents who actually resolve tickets instead of just closing them. We recruit and place tier 1 and tier 2 technical support, customer success operations, onboarding specialists and trust-and-safety reviewers for B2B and B2C software companies worldwide — screened for real product literacy, API fluency and SOC 2 / GDPR awareness. Agents stay on our payroll, you pay only for hours worked, swap anyone free, and your first product-screened cohort can be live in roughly 72 hours. Since 2003 we've trained 100,000+ agents, with onshore, nearshore and offshore delivery matched to your stack and channel mix.`,
    industryChallenges: [
      {
        title: 'Product depth on day one',
        body: 'A SaaS tier 1 agent who cannot navigate the product faster than the customer is a net negative — they close tickets without resolution, customers escalate, and your CSM team picks up the slack. Screening for product-platform literacy at shortlist filters out 50% of generically-qualified resumes.',
      },
      {
        title: 'API and log-reading fluency',
        body: 'Modern SaaS support requires reading webhook payloads, checking API status codes, interpreting authentication errors and reproducing issues in a sandbox. Tier 2 candidates without screened debugging fluency become permanent escalations, not actual resolution staff.',
      },
      {
        title: 'SOC 2 access discipline',
        body: 'Agents with production system access fall under SOC 2 control scope — access provisioning, deprovisioning timing, audit logging discipline. Cohort onboarding has to coordinate with your security and IT teams from day one of training, not after go-live.',
      },
      {
        title: 'Async + sync channel mix',
        body: 'SaaS support runs heavily on email, in-app chat, community forum and ticket — with selective voice. Agents have to write in your brand voice, hold conversational tone in long async threads, and pivot to voice for escalations. Writing samples are screened, not assumed from a resume.',
      },
    ],
    staffingApproach: `We staff SaaS support with the recognition that ticket-closure is not resolution and that product depth is the staffing-quality lever that matters most. Tier 1 candidates are screened on a timed product-platform scenario in your sandbox — we ask the candidate to find a specific setting, reproduce a common issue and document the resolution. We grade the recording for time, accuracy and documentation quality. Tier 2 candidates complete a debugging scenario including webhook payload inspection, OAuth flow analysis and rate-limit math. Trust-and-safety candidates are screened on policy-application scenarios in your moderation guidelines, with explicit attention to edge-case judgment. Writing samples from prior support roles are reviewed for tone-match against your brand voice. SOC 2-aware engagements include access-provisioning coordination, audit-logging discipline briefing, and offboarding timing built into the SOW. For European-customer-facing roles we add GDPR awareness and DSAR-handling screening. Tier 1 and trust-and-safety run primarily from the Philippines for English coverage and from Mexico for bilingual Spanish/Portuguese. Tier 2 and onboarding specialists run primarily onshore and from Guadalajara for the technical-vocabulary depth.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'trainers',
      'operations-managers',
    ],
    complianceConsiderations: [
      'SOC 2 access provisioning coordinated with your security team from day one',
      'GDPR awareness and DSAR-handling for European-customer-facing roles',
      'Production-system access audit-logging discipline briefed pre-go-live',
      'Sandbox product-platform scenario completed at shortlist',
      'Writing samples reviewed for brand-voice match',
      'API/log-reading scenario for tier 2 placements',
    ],
    regulatoryFrameworks: ['SOC 2', 'GDPR', 'CCPA', 'ISO 27001 (where applicable)'],
    caseHighlight: {
      company: 'Atlas DevTools',
      challenge:
        'A developer-tools SaaS needed 35 tier 1 and 12 tier 2 support engineers to clear a 14-day backlog of API-integration tickets. Prior staffing partner had ramped 22 tier 1 agents who could not navigate the product, leaving CSMs covering tickets nights and weekends.',
      result:
        'First cohort of 18 product-screened tier 1 live in Manila within 26 days; tier 2 cohort of 12 live onshore week five. 14-day backlog cleared in 11 days post-go-live; CSM-covered ticket volume dropped 78% by month three.',
    },
    outcomes: [
      { metric: '+34%', description: 'Tier 1 first-contact resolution vs. baseline' },
      { metric: '-78%', description: 'CSM-covered escalation volume after ramp (avg.)' },
      {
        metric: 'Less than 30 days',
        description: 'Average ramp from plan sign to first cohort live',
      },
    ],
    faqs: [
      {
        q: 'How do you screen for actual product depth?',
        a: 'Every tier 1 candidate completes a timed scenario in your sandbox — find a specific setting, reproduce a common issue, document the resolution. We share the screen recording with your support lead before the candidate hits your interview loop. The screen filters out roughly 50% of generically-qualified resumes.',
      },
      {
        q: 'Can you place tier 2 / escalation engineers?',
        a: 'Yes. Tier 2 candidates are screened on a debugging scenario in your stack — webhook payload inspection, OAuth troubleshooting, rate-limit math. We staff tier 2 primarily onshore and from Guadalajara for the technical-vocabulary depth.',
      },
      {
        q: 'How do you handle SOC 2 access provisioning?',
        a: 'Access provisioning, audit-logging discipline and offboarding timing are coordinated with your security team from day one of training — not after go-live. We document the access scope per cohort and align deprovisioning to your SOC 2 control owners.',
      },
      {
        q: 'Do you staff trust-and-safety reviewers?',
        a: 'Yes. Trust-and-safety candidates are screened on policy-application scenarios using your moderation guidelines. Language-matched recruiting from Philippines and Mexico, plus onshore for English-only escalation review.',
      },
      {
        q: 'Should I outsource SaaS customer support or hire in-house?',
        a: "You don't have to choose. We place trained tier 1/2, CS ops and onboarding agents who work as an extension of your team but stay on our payroll — so you skip the HR, recruiting and training burden, pay only for hours worked, and can scale up or down month-to-month. Most SaaS teams use us to clear backlog or cover growth without committing to permanent headcount.",
      },
      {
        q: 'How quickly can you staff a SaaS support team?',
        a: 'A first product-screened cohort can be live in roughly 72 hours for standard tier 1, and within about 30 days for a full multi-tier ramp. In one developer-tools engagement, 18 product-screened tier 1 agents went live in 26 days and cleared a 14-day ticket backlog in 11 days post-go-live.',
      },
      {
        q: 'Are your SaaS support agents SOC 2 and GDPR aware?',
        a: 'Yes. Any agent with production system access is briefed on SOC 2 access provisioning, audit-logging discipline and offboarding timing, coordinated with your security team from day one of training. European-customer-facing roles add GDPR awareness and DSAR-handling screening.',
      },
    ],
  },
  {
    slug: 'utilities',
    name: 'Utilities & Energy',
    primaryKeyword: 'utilities call center staffing',
    metaTitle: 'Utilities Call Center Staffing',
    metaDescription:
      'Utilities call center staffing for billing, outage, disconnection & assistance programs. PUC-aware, LIHEAP-trained agents on our payroll. Get a staffing plan.',
    hero: {
      eyebrow: 'Industries · Utilities & Energy',
      headline: 'Staff Your Utility Contact Center With PUC-Trained Agents',
      subhead:
        'Billing, outage reporting, disconnection-and-arrears handling, assistance programs and storm-surge response — staffed by recruiters who know state PUC rules and LIHEAP intake protocols.',
    },
    intro: `Utilities call center staffing puts trained billing, outage and assistance-program agents into your contact center without the hiring and PUC-training burden falling on your team. We recruit, screen and place agents on our payroll for electric, gas, water and competitive energy providers — and you pay only for hours worked, swap any agent free, and keep a 72-hour storm-surge bench on retainer. Every cohort is screened against state PUC tariff scenarios and briefed on LIHEAP and weatherization eligibility before live volume, so an arrears or disconnection call never becomes a complaint to the commission. Bilingual Spanish coverage for assistance intake is built in, not bolted on.`,
    industryChallenges: [
      {
        title: 'State PUC tariff complexity',
        body: "Tariff rules vary materially by state — disconnection notice timing, deferred-payment plan terms, medical-hardship hold provisions. Agents trained for one state's tariff cannot cover another without explicit refresher. Generic utility-CX recruiting misses this and creates PUC complaint exposure.",
      },
      {
        title: 'Storm-surge stand-up',
        body: 'Hurricane landfall, ice storm or PSPS event creates 8–15x baseline volume inside 24 hours. Storm response without pre-built bench means SLA collapse and political pressure from state legislators. Bench refresh and 72-hour stand-up retainer are the only reliable model.',
      },
      {
        title: 'Arrears + assistance program literacy',
        body: 'A correctly-handled arrears call surfaces LIHEAP, weatherization, hardship and deferred-payment options the customer qualifies for. Agents who default to disconnection without exhausting assistance options create both regulatory and reputational exposure.',
      },
      {
        title: 'Bilingual Spanish for assistance intake',
        body: 'A meaningful share of assistance-program intake volume is Spanish-language. Agents who require translation handoff for assistance intake miss eligibility windows and frustrate customers who are already in financial distress. Bilingual coverage is a fairness issue, not just a CX one.',
      },
    ],
    staffingApproach: `We staff utility contact centers with explicit attention to state PUC tariff rules, assistance-program eligibility logic and storm-surge readiness. Every billing and disconnection candidate is screened on a state-tariff-specific scenario — the candidate handles a simulated arrears call and we score for assistance-program prompting, deferred-payment-plan accuracy and disconnection-notice timing. Bilingual Spanish candidates for assistance-program intake are recruited primarily from Guadalajara and Mexico City for the cultural fluency on financial-hardship conversations. Storm-surge readiness is built on retainer — quarterly bench refresh of utility-trained agents available for 72-hour stand-up against your historical event volume and PSPS calendar (where applicable). Outage-reporting agents are screened on map-tool fluency and dispatch-coordination process; field-coordinator support is placed onshore for shift-overlap with line crews. Every cohort completes state-PUC-specific tariff training, LIHEAP and weatherization-program eligibility briefing, and a storm-protocol orientation before going live. We do not deliver the tariff training itself — that stays with your compliance and regulatory team — but we coordinate the calendar and verify completion before live volume.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'operations-managers',
    ],
    complianceConsiderations: [
      'State PUC tariff training verified pre-live for every cohort',
      'LIHEAP and weatherization eligibility briefing before live volume',
      'Disconnection-notice timing scenario scored at shortlist',
      'Deferred-payment-plan calculation accuracy tested',
      'Medical-hardship hold provisions trained per state',
      'Storm-protocol and PSPS-calendar orientation pre-go-live',
    ],
    regulatoryFrameworks: [
      'State PUC tariff rules',
      'LIHEAP / WAP intake standards',
      'PSPS protocols (CA)',
      'Cold-weather rule (multiple states)',
    ],
    caseHighlight: {
      company: 'Heartland Power',
      challenge:
        'A multi-state IOU needed 95 agents across billing, outage and assistance with bilingual Spanish coverage on assistance intake, plus a 72-hour storm-surge bench for hurricane season. Prior partner had two PUC complaint escalations on disconnection-process errors and missed first-day SLA on a tropical-storm event.',
      result:
        'First cohort of 35 live in 27 days with verified state-tariff training; bilingual Spanish assistance bench live in Guadalajara week six; 72-hour storm-surge retainer activated for tropical storm in month four with full SLA hold. Zero PUC complaints in first 12 months of engagement.',
    },
    outcomes: [
      { metric: '0', description: 'PUC complaints across active engagements (12 months)' },
      { metric: 'Less than 72 hrs', description: 'Storm-surge stand-up time on retainer' },
      { metric: '+19%', description: 'Assistance-program enrollment vs. baseline' },
    ],
    faqs: [
      {
        q: 'How do you handle storm-surge stand-up?',
        a: 'Quarterly bench refresh of utility-trained agents on retainer against your historical event volume and PSPS calendar where applicable. 72-hour stand-up agreement on declared events; surge-up to 80–150 incremental seats inside two weeks is realistic on retainer with named cohort owners standing by.',
      },
      {
        q: 'Do you screen for state-specific PUC tariff knowledge?',
        a: 'Every billing and disconnection candidate is screened on a state-tariff-specific scenario at shortlist. We share the recording with your regulatory affairs lead before the candidate hits your interview loop. Pre-live tariff refresher is coordinated with your compliance team.',
      },
      {
        q: 'Can you staff bilingual Spanish for assistance-program intake?',
        a: 'Yes. Guadalajara and Mexico City are our primary pipelines for assistance-intake bilingual Spanish — strong cultural fluency on financial-hardship conversations and live CT/ET overlap. We screen specifically for assistance-program-prompting muscle memory.',
      },
      {
        q: 'Do you place outage-dispatch and field-coordinator roles?',
        a: 'Yes. Outage-dispatch and field-coordinator support are placed primarily onshore for shift-overlap with line crews and OMS access reasons. We screen for map-tool fluency, dispatch-coordination process and storm-protocol literacy.',
      },
      {
        q: 'How fast can you staff a utility call center?',
        a: 'A first cohort typically goes live in about 72 hours for surge work and within three to four weeks for fully tariff-trained billing and disconnection agents. The Heartland Power engagement had 35 agents live in 27 days with verified state-tariff training, and storm-surge seats stand up inside 72 hours on a pre-built retainer bench.',
      },
      {
        q: 'Are the utility agents on your payroll or ours?',
        a: 'Agents stay on our payroll. You direct the work and pay only for hours worked — no hiring, benefits, severance or HR overhead. You can swap any agent free, and our 90-day attrition guarantee means replacements are covered if someone leaves early.',
      },
      {
        q: 'Can you scale utility staffing for storm season and PSPS events?',
        a: 'Yes. We keep a quarterly-refreshed bench of utility-trained agents on retainer sized to your historical event volume and PSPS calendar. Declared events trigger a 72-hour stand-up, and surging 80 to 150 incremental seats within two weeks is realistic with named cohort owners standing by.',
      },
    ],
  },
  {
    slug: 'logistics',
    name: 'Logistics & Transportation',
    primaryKeyword: 'logistics call center staffing',
    metaTitle: 'Logistics Call Center Staffing',
    metaDescription:
      'Logistics call center staffing for track-and-trace, ETA, claims and dispatch. TMS-fluent agents on our payroll, peak-season bench, deployed in ~72 hours. Get a quote.',
    hero: {
      eyebrow: 'Industries · Logistics & Transportation',
      headline: 'Logistics call center staffing for track-and-trace, ETA and claims',
      subhead:
        'Track-and-trace, ETA management, exceptions, claims intake and dispatch support — staffed by recruiters who screen for real TMS fluency and peak-season cohort discipline.',
    },
    intro: `Logistics call center staffing puts trained, TMS-fluent agents on your floor for track-and-trace, ETA management, exception handling, claims intake and dispatch support — without the HR, recruiting or training burden landing on your team. We recruit and screen for real platform fluency (MercuryGate, Oracle TMS, McLeod, BluJay) and parcel-API experience, then place agents who stay on our payroll while you pay only for hours worked. Peak-season planning is where logistics CX wins or loses, so we pre-build bench against your historical Q4 surge — not an abstract recruiting funnel — and can deploy in as little as 72 hours. Onshore, nearshore (Monterrey, Guadalajara) and offshore (Manila) delivery, with bilingual Spanish coverage for cross-border freight.`,
    industryChallenges: [
      {
        title: 'TMS and tracking-event fluency',
        body: 'A track-and-trace agent who cannot interpret a "shipment exception — address correction needed" status code creates a 4-call escalation chain. Screening for TMS-platform fluency by name — not generic "tracking experience" — filters out 35% of resumes that read fine but fail the work.',
      },
      {
        title: 'ETA accuracy under operational variability',
        body: 'Customers call when ETAs slip — and inaccurate ETA recovery generates social escalation faster than the original delay. Agents have to read the TMS, the dispatch board and the lane history together to give a defensible new ETA. Process literacy is screened, not assumed.',
      },
      {
        title: 'Q4 parcel surge — bench depth',
        body: 'Q4 parcel surge runs 3–5x baseline for last-mile networks, with concentrated peak in the two weeks before each major holiday. Brands that wait until October to staff Q4 lose the war. Pipeline build for November-December peak has to start in July.',
      },
      {
        title: 'Claims intake discipline',
        body: 'Lost-shipment and damage claims have process timelines and documentation requirements that vary by carrier and contract. Agents who skip a documentation step at intake create denied-claim exposure and customer disputes. Claims intake is its own screened skill, not a CX adjacent.',
      },
    ],
    staffingApproach: `We staff logistics contact centers with the recognition that track-and-trace, ETA management, claims and dispatch support are four different recruiting profiles — not one. Track-and-trace candidates are screened on a TMS-platform fluency scenario in your stack — interpret a tracking event sequence, identify the correct exception type, document the resolution path. ETA-management candidates complete a recovery scenario where they have to give a defensible new ETA based on TMS, dispatch board and lane history. Claims intake candidates complete a documentation-discipline scenario aligned to your carrier-specific requirements. Dispatch-support candidates are screened for shift-pattern fit and operations-team communication. Q4 parcel surge cohorts begin pipeline build in July, run cohort waves of 25–50 in September-October, and demobilize cleanly in February with top-performer retention. Bilingual Spanish for cross-border freight (US-Mexico) is recruited from Monterrey and Guadalajara — strong logistics-vertical depth and CT overlap. English peak coverage scales out of Manila and Mexico depending on the wage profile and language mix needed.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'operations-managers',
    ],
    complianceConsiderations: [
      'TMS-platform fluency screened by name in your stack',
      'Carrier-contract-specific claims documentation discipline tested',
      'ETA-recovery scenario scored on accuracy and tone',
      'Hazmat-aware screening for hazmat-shipment-touching roles',
      'DOT consumer-protection refresher for parcel and household-goods volume',
      'Cross-border freight terminology and customs-coordination literacy',
    ],
    regulatoryFrameworks: [
      'DOT consumer protection',
      'FMCSA (where applicable)',
      'Carrier liability standards (Carmack)',
      'Customs / cross-border documentation',
    ],
    caseHighlight: {
      company: 'Continental Freight',
      challenge:
        'A regional last-mile network needed 110 seasonal agents across English and bilingual Spanish for Q4 parcel surge, with TMS fluency on McLeod and dispatch-support coverage on overnight shift. Prior partner had ramped late and exception-resolution time inflated 3x through November.',
      result:
        'Pipeline build started July 21; first cohort of 35 live October 14; full 110 live November 4 with bilingual Spanish bench in Monterrey and overnight dispatch coverage in Manila. Q4 exception-resolution time held at 1.4x baseline (vs. 3x prior year); January claims-intake backlog cleared in 9 days post-peak.',
    },
    outcomes: [
      {
        metric: 'Less than 30 days',
        description: 'Average ramp from plan sign to first cohort live',
      },
      { metric: '-58%', description: 'Q4 exception-resolution time vs. prior staffing baseline' },
      { metric: '92%', description: 'Of seasonal cohort completes the contract' },
    ],
    faqs: [
      {
        q: 'How do you screen for TMS-platform fluency?',
        a: 'By platform name in your stack — MercuryGate, Oracle TMS, McLeod, BluJay, parcel-carrier-specific APIs. Every track-and-trace candidate completes a timed scenario in the platform you use; we share the screen recording with your operations lead before the candidate hits your loop.',
      },
      {
        q: 'When should we engage you for Q4 parcel surge?',
        a: 'July at the latest. Pipeline build for November-December peak starts in July; we run cohort waves of 25–50 through September-October. Brands that engage in October land cohorts late and burn cohort completion through November.',
      },
      {
        q: 'Can you staff bilingual Spanish for cross-border freight?',
        a: 'Yes. Monterrey and Guadalajara have meaningful logistics-vertical depth in Spanish — strong customs-coordination terminology, cross-border documentation literacy and CT overlap with US dispatch teams.',
      },
      {
        q: 'Do you place dispatch and operations support roles?',
        a: 'Yes. Dispatch-support coordinators and operations-team support are placed primarily onshore and from Manila for overnight coverage. We screen for shift-pattern fit, TMS fluency and operations-team communication discipline.',
      },
      {
        q: 'How quickly can you staff a logistics call center?',
        a: 'For standard track-and-trace and dispatch-support roles we can deploy trained agents in as little as 72 hours, with the first cohort typically live within 30 days of plan sign-off. For Q4 parcel surge we start pipeline build in July and run cohort waves of 25-50 through September and October so peak coverage is live and ramped before volume hits.',
      },
      {
        q: 'Do the logistics agents work for us or for you?',
        a: 'The agents stay on our payroll — we handle recruiting, screening, HR and the employment burden, and you pay only for hours worked. You direct the work day to day; we cover attrition with a 90-day guarantee and let you swap any agent free if a fit is wrong. Engagements are month-to-month, so you scale up for peak and back down without long-term commitments.',
      },
      {
        q: 'Can you provide bilingual Spanish agents for cross-border freight?',
        a: 'Yes. We recruit bilingual Spanish track-and-trace and dispatch-support agents from Monterrey and Guadalajara, where there is genuine logistics-vertical depth — customs-coordination terminology, cross-border documentation literacy and US-time-zone overlap with your dispatch teams.',
      },
    ],
  },
  {
    slug: 'government-public',
    name: 'Government & Public Sector',
    primaryKeyword: 'government call center staffing',
    metaTitle: 'Government Call Center Staffing',
    metaDescription:
      'Government call center staffing for citizen services, benefits intake, DMV & 311. US-based, ADA 508-aware, clearable, LEP-covered agents. Deploy in ~72 hrs.',
    hero: {
      eyebrow: 'Industries · Government & Public Sector',
      headline: 'Government & Public Sector Call Center Staffing',
      subhead:
        'Citizen services, benefits intake, DMV, 311, program enrollment and unemployment — staffed by recruiters who understand ADA Section 508, FedRAMP-aware tooling and security-clearable talent.',
    },
    intro: `Government call center staffing supplies recruited, trained citizen-service agents and supervisors for federal, state, county and municipal programs — and the prime contractors who run them. We staff benefits intake (SNAP, Medicaid, unemployment), DMV, 311 and program-enrollment surges with US-based, security-clearable talent where the contract vehicle demands it, plus LEP language coverage across 10+ languages and ADA Section 508 protocol fluency. Agents stay on our payroll, you pay only for hours worked, and we plan cohorts against your fiscal-year and open-enrollment calendar — not a generic recruiting funnel.`,
    industryChallenges: [
      {
        title: 'US-citizen / clearable talent depth',
        body: 'Many federal contract vehicles require US-citizen or work-authorized staff, and certain programs require active or clearable security clearances (Public Trust, Secret). Generalist staffing firms cannot screen for clearance-eligibility against a program profile; specialized recruiting maintains that pipeline.',
      },
      {
        title: 'ADA Section 508 + LEP coverage',
        body: 'Citizen-service lines have to support TTY/VRS, accessible web fallback escalations, and Limited English Proficiency (LEP) coverage across 10+ languages depending on the jurisdiction. Cohort design has to include language-mix planning and accessibility-fluency training.',
      },
      {
        title: 'Program eligibility complexity',
        body: "SNAP, Medicaid, unemployment, child-care subsidy and energy-assistance programs each have detailed eligibility logic that varies by jurisdiction and changes mid-fiscal-year. Agents who memorize and don't actually understand eligibility logic create reapplication churn and citizen frustration.",
      },
      {
        title: 'Citizen-service tone under pressure',
        body: 'Citizens calling government lines are frequently in crisis — benefit lapse, eviction risk, unemployment claim denial. Agents have to hold a citizen-service tone through caller distress, language barriers and process complexity. Empathy under pressure is screened on a recorded scenario.',
      },
    ],
    staffingApproach: `We staff government contact centers with explicit attention to contract vehicle requirements, US-citizen and clearable talent depth, language access, and ADA Section 508 accessibility. For federal work we screen for US-citizen / work-authorized status, clearance-eligibility (Public Trust, Secret) against the program profile, and FedRAMP-tooling experience. For state and county work we focus on LEP language coverage — Spanish, Mandarin, Vietnamese, Tagalog, Russian, Arabic, Haitian Creole and others depending on the jurisdiction\'s LEP profile. Every benefits-intake candidate is screened on a program-specific eligibility scenario in your eligibility system; we score for accuracy, citizen tone, and reapplication-prevention discipline. ADA Section 508 fluency includes TTY/VRS protocol, accessible-format request handling and escalation pathways for accessibility concerns. Citizen-service tone under crisis is screened on a recorded scenario where the caller is in active hardship — eviction risk, benefit lapse — and we score for empathy, process discipline and trauma-informed communication. All federally-restricted work is delivered onshore from US-based recruiters and US-citizen-staffed cohorts.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'trainers',
      'operations-managers',
    ],
    complianceConsiderations: [
      'US-citizen / work-authorization status verified per contract vehicle',
      'Clearance-eligibility (Public Trust, Secret) screened against program profile',
      'ADA Section 508 protocol literacy (TTY/VRS, accessible escalations) verified',
      'LEP language coverage planned against jurisdiction language-access profile',
      'FedRAMP-tooling experience documented for federal program work',
      'Program-specific eligibility scenario scored at shortlist',
    ],
    regulatoryFrameworks: [
      'ADA Section 508',
      'Title VI / LEP language access',
      'FedRAMP (federal contracts)',
      'Privacy Act / state equivalents',
    ],
    caseHighlight: {
      company: 'Pacific State Services',
      challenge:
        'A state human-services prime contractor needed 180 benefits-intake agents covering SNAP, Medicaid and unemployment with LEP coverage in 7 languages and full ADA Section 508 protocol fluency for a fiscal-year program ramp. Prior staffing had missed LEP coverage on Vietnamese and Tagalog, generating Title VI complaint exposure.',
      result:
        "Cohort plan delivered with full 7-language LEP coverage; first cohort of 60 live in 31 days; full 180 live by day 78. Title VI complaints dropped to zero in the engagement's first fiscal year; reapplication-due-to-error rate fell 41% vs. prior baseline.",
    },
    outcomes: [
      { metric: '0', description: 'Title VI complaints across active state engagements' },
      { metric: '7+', description: 'Languages typically covered per state engagement (LEP)' },
      {
        metric: 'Less than 35 days',
        description: 'Average ramp from plan sign to first cohort live',
      },
    ],
    faqs: [
      {
        q: 'Can you staff US-citizen, clearable talent for federal contracts?',
        a: 'Yes. We carry an active onshore pipeline of US-citizen and work-authorized candidates, and we screen for clearance-eligibility (Public Trust, Secret) against the program profile at shortlist. For active-clearance roles, we coordinate with your security officer on the timing of clearance reciprocity.',
      },
      {
        q: 'How do you handle LEP language access across many languages?',
        a: "We plan language coverage against the jurisdiction's LEP profile — Spanish, Mandarin, Vietnamese, Tagalog, Russian, Arabic, Haitian Creole and others depending on the state or county. Cohort design balances language-fluent agents with on-call interpreter integration where direct fluency is impractical.",
      },
      {
        q: 'Do you screen for ADA Section 508 protocol literacy?',
        a: 'Yes. Every citizen-service candidate is screened for TTY/VRS protocol, accessible-format request handling and accessibility-escalation pathways. Refresher training is coordinated with your accessibility lead pre-go-live.',
      },
      {
        q: 'Can you ramp for open-enrollment or program-launch surge?',
        a: 'Yes. Health-marketplace open enrollment, tax-season filer support and unemployment-program launches all benefit from 60+ days of pre-build. We run cohort waves aligned to the program calendar with planned demobilization for the off-season.',
      },
      {
        q: 'How fast can you staff a government or citizen-services call center?',
        a: 'For routine citizen-service and benefits-intake roles we can deploy screened agents in as little as ~72 hours. For larger fiscal-year or open-enrollment ramps we plan cohort waves against your program calendar — a recent state engagement put 60 benefits-intake agents live in 31 days and 180 by day 78.',
      },
      {
        q: 'Are your government call center agents US-based and security-clearable?',
        a: 'Yes. All federally-restricted work is delivered onshore from US-citizen or work-authorized cohorts, and we screen for clearance-eligibility (Public Trust, Secret) against your program profile at shortlist. State, county and municipal work can be staffed more flexibly while still meeting language-access requirements.',
      },
      {
        q: 'What does government call center staffing cost?',
        a: "You pay only for hours worked — agents stay on our payroll, so there's no HR, benefits or training burden on your side. Engagements are month-to-month, you can swap any agent free, and we back placements with a 90-day attrition guarantee.",
      },
    ],
  },
  {
    slug: 'education',
    name: 'Education',
    primaryKeyword: 'education call center staffing',
    metaTitle: 'Education Call Center Staffing | Enrollment & Aid',
    metaDescription:
      'Education call center staffing for admissions, enrollment, financial aid & student services. FERPA-cleared agents, cycle-ready bench, live in ~72 hrs. Get a quote.',
    hero: {
      eyebrow: 'Industries · Education',
      headline: 'Education call center staffing for enrollment, financial aid and student services',
      subhead:
        'Admissions, enrollment, financial aid, registrar and student services — staffed by recruiters who understand FERPA, enrollment-cycle peaks and parent-vs-student call routing.',
    },
    intro: `Education call center staffing supplies trained, FERPA-disciplined agents for admissions, enrollment counseling, financial aid intake, registrar support and student services — on our payroll, billed only for hours worked. We staff colleges, universities, K-12 systems, online learning platforms and OPM partners worldwide, pre-building bench against your enrollment calendar so you have coverage for decision-deadline and FAFSA peaks instead of scrambling mid-cycle. Every student-record-touching agent ships with documented FERPA training and a recorded refusal-scenario screen, and you can swap any agent free with a 90-day attrition guarantee. Bilingual Spanish enrollment counselors are available for institutions serving Hispanic-majority student populations.`,
    industryChallenges: [
      {
        title: 'FERPA + parent call routing',
        body: 'A parent calling about an adult student\'s grades, billing or enrollment cannot legally receive that information without a documented FERPA release on file. Agents who default to "helpful" without checking the release create direct FERPA exposure. Authentication and routing discipline are screened, not assumed.',
      },
      {
        title: 'Financial aid logic depth',
        body: 'Financial aid calls — SAP appeals, verification holds, dependency overrides, Pell-eligibility questions — require real understanding of federal and institutional aid logic. Agents who memorize talking points without understanding the underlying logic generate escalation chains and parent frustration.',
      },
      {
        title: 'Enrollment-cycle peak surge',
        body: 'Enrollment volume runs 5–8x baseline in the two weeks before decision deadlines and again at registration open. Institutions that wait until the cycle to staff lose qualified inquiries to slower response times. Pipeline build has to lead the cycle by 60 days minimum.',
      },
      {
        title: 'Multi-channel + multi-stakeholder',
        body: 'Education CX runs across voice + chat + email + SMS + parent-portal — with calls coming from prospective students, current students, parents, alumni and high-school counselors. Agents have to context-switch across channels and stakeholders without quality drop. Multi-channel scenario screening is required.',
      },
    ],
    staffingApproach: `We staff education contact centers with explicit attention to FERPA discipline, enrollment-cycle calendars and stakeholder-mix complexity. Every student-record-touching candidate completes a recorded FERPA scenario where a parent or third party requests information without a release on file; we score for refusal discipline, correct routing and tone. Financial aid candidates are screened on aid-logic scenarios — SAP appeals, verification holds, dependency overrides — with accuracy and citizen-tone both scored. Enrollment-counseling candidates complete a multi-stakeholder scenario including a prospective student, a parent, and a high-school counselor with conflicting questions. Cohort calendars align to your enrollment cycle — decision deadlines, FAFSA windows, registration peak — with pipeline build leading the cycle by 60 days minimum. For institutions serving Hispanic-majority student populations, bilingual Spanish coverage runs from Mexico (Guadalajara primarily) for cultural fluency on family-financial-decision conversations. Multi-channel agents complete a chat + voice + email context-switch scenario. Every cohort completes FERPA, Title IX awareness and institutional-policy refresher coordinated with your registrar and Dean of Students teams before going live.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'trainers',
    ],
    complianceConsiderations: [
      'FERPA training documented for every student-record-touching agent',
      'Recorded FERPA-refusal scenario scored at shortlist',
      'Financial aid logic accuracy tested on aid-scenario screen',
      'Title IX awareness briefing pre-go-live',
      'Parent-vs-student authentication discipline verified',
      'Institutional-policy refresher coordinated with registrar pre-live',
    ],
    regulatoryFrameworks: [
      'FERPA',
      'Title IX awareness',
      'Higher Education Act (incentive comp)',
      'GLBA (financial aid)',
    ],
    caseHighlight: {
      company: 'Summit State University',
      challenge:
        'A regional public university needed 65 enrollment-counseling and financial-aid agents live for the spring-decision-deadline window with bilingual Spanish coverage for their growing Hispanic-student population. Prior staffing had missed FERPA refusal discipline and generated three Office of the Registrar escalations in one cycle.',
      result:
        'First cohort of 25 live in 26 days with verified FERPA training and recorded refusal-scenario screen passed; full 65 live by day 52; bilingual Spanish bench live in Guadalajara week six. Registrar escalations dropped to zero through the cycle; deposit-conversion rate on inbound inquiry rose 14%.',
    },
    outcomes: [
      { metric: '+14%', description: 'Deposit-conversion rate on inbound inquiry vs. baseline' },
      { metric: '0', description: 'FERPA-related escalations across active engagements' },
      {
        metric: 'Less than 30 days',
        description: 'Average ramp for cycle-aligned enrollment cohorts',
      },
    ],
    faqs: [
      {
        q: 'How do you screen for FERPA discipline?',
        a: 'Every student-record-touching candidate completes a recorded scenario where a parent or third party requests information without a release on file. We score for refusal discipline, correct routing and tone. Audio is shared with your registrar before the candidate hits your interview loop.',
      },
      {
        q: 'When should we engage you for the spring decision-deadline window?',
        a: 'Pipeline build for spring decision peak should start by mid-January at the latest. We run cohort waves through February-March for live coverage by April 1 deadlines. Late engagement means missed inquiry conversion and parent-call wait-time complaints.',
      },
      {
        q: 'Can you staff bilingual Spanish for Hispanic-majority institutions?',
        a: 'Yes. Guadalajara is our primary pipeline for education bilingual Spanish — strong cultural fluency on family-financial-decision conversations, live CT overlap with US institutions, and a deep candidate pool for enrollment counseling.',
      },
      {
        q: 'Do you place financial aid specialists with real aid-logic depth?',
        a: 'Yes. Financial aid candidates are screened on aid-logic scenarios — SAP appeals, verification holds, dependency overrides, Pell-eligibility — with accuracy scored against your published aid-policy rubric. We do not place agents who only memorize talking points.',
      },
      {
        q: 'Do your education call center agents understand FERPA?',
        a: 'Yes. Every student-record-touching candidate completes a recorded scenario where a parent or third party requests information with no release on file, scored for refusal discipline, correct routing and tone before they reach your interview loop. Agents stay on our payroll, so FERPA training and currency are our responsibility, not yours.',
      },
      {
        q: 'How fast can you staff for an enrollment or FAFSA surge?',
        a: 'We pre-build bench against your enrollment calendar and can deploy cycle-aligned cohorts in about 72 hours once a plan is approved, with first waves typically live in under 30 days. For spring decision-deadline peaks, start the pipeline by mid-January; for fall, lead the August registration crunch by 60 days.',
      },
      {
        q: 'Can you provide bilingual Spanish enrollment and financial aid agents?',
        a: 'Yes. We staff bilingual Spanish enrollment counselors and financial aid agents for institutions serving Hispanic-majority student populations, sourced primarily from Guadalajara for cultural fluency on family-financial-decision conversations and live overlap with US time zones.',
      },
    ],
  },
  {
    slug: 'tech-support',
    name: 'Tech Support & Helpdesk',
    primaryKeyword: 'tech support staffing',
    metaTitle: 'Tech Support Staffing — Tier 1/2/3',
    metaDescription:
      'Hire vetted tier 1/2/3 tech support agents on our payroll. Zendesk, ServiceNow, Salesforce-fluent. 24/7 follow-the-sun coverage. Deploy in ~72 hours.',
    heroImage: '/images/cc-agent-laptop.jpg',
    hero: {
      eyebrow: 'Industries · Tech Support & Helpdesk',
      headline: 'Tech Support & Helpdesk Staffing for Tier 1, 2 and 3 Teams',
      subhead:
        'We screen for the technical depth that actually closes a ticket and the customer tone that keeps a frustrated user calm. Same candidate, both halves verified — not a tradeoff your team has to live with.',
    },
    intro: `Need tech support agents who can actually close a ticket without burning out your engineers? We recruit and staff tier 1 helpdesk agents, tier 2 troubleshooters and tier 3 escalation specialists who navigate Zendesk, ServiceNow, Salesforce Service Cloud, Jira and Freshdesk while keeping a frustrated customer calm. Every agent stays on our payroll and is screened on a recorded troubleshooting scenario in your stack, so you skip the HR and training burden and pay only for hours worked. With follow-the-sun cohorts onshore, nearshore and offshore, you get true 24/7 coverage deployed in about 72 hours — no quality cliff at midnight.`,
    industryChallenges: [
      {
        title: 'Technical depth vs. tone fluency',
        body: 'The candidate who can read a stack trace usually cannot calm a panicked user; the candidate with great tone usually cannot reproduce the bug. Most staffing firms screen for one and hope for the other. We screen for both on the same recorded scenario — candidate troubleshoots a real ticket while the simulated caller escalates emotionally — and we share the audio.',
      },
      {
        title: 'Tier escalation discipline',
        body: 'Tier 1 floors that escalate too aggressively crush tier 2 capacity; tier 1 floors that hold tickets they cannot resolve crush CSAT and FCR. The discipline is teachable, but only if you screen against escalation criteria at shortlist — not after the floor is full and the backlog is bleeding.',
      },
      {
        title: 'Ticket-quality drift at scale',
        body: 'Documentation quality, tag accuracy and field-completion discipline drift the moment a cohort hits volume. Without a 60-day calibration cycle and a QA scoring rubric tied to ticket fields — not just call audio — drift compounds and downstream reporting becomes useless.',
      },
      {
        title: 'After-hours coverage continuity',
        body: 'Night-shift and weekend coverage is where most tech-support programs erode. Manila and Mexico anchor the off-hours but only if cohort design accounts for shift-differential, supervisor-coverage parity and escalation-path integrity at 2 AM local. Otherwise the customer who pages on a Saturday gets a routing loop.',
      },
    ],
    staffingApproach: `We staff tech-support contact centers against a scored technical assessment, not a resume keyword scan. Every shortlisted candidate completes a recorded troubleshooting scenario in your stack — a sample ticket with logs, a reproduction step, a documented resolution and a tone score from a senior account manager who has run a tier 2 floor. We ship that recording to your support lead before the candidate hits your interview loop, so the cohort that lands at training is closer to fully-vetted than to fully-unknown. Tier calibration matters: we recruit tier 1, tier 2 and tier 3 against three different rubrics, not one. Tier 1 is screened on ticket-system fluency, basic API literacy and tone under pressure. Tier 2 adds debugging — webhook payloads, OAuth flows, log parsing, integration-side troubleshooting. Tier 3 adds production-system access discipline, customer-engineering judgment and the ability to draft an internal post-mortem. Ticket-quality drift is monitored on a 60-day calibration cycle: we sample tickets weekly through ramp, score against your published rubric, and recalibrate before the cohort is in steady state. After-hours coverage is built across Manila for English night-side, Mexico for bilingual Spanish, and onshore for tier 3 escalations and SOC 2-scoped production access.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'trainers',
      'operations-managers',
    ],
    complianceConsiderations: [
      'SOC 2 awareness for handling customer data and production-system access',
      'PCI for payment-touch tier 2 troubleshooting',
      'GDPR/CCPA verified deletion-request literacy on consumer-data products',
      'NDA-grade IP confidentiality for hardware and pre-release software work',
      'Endpoint security discipline for remote tier 2 and tier 3 cohorts',
      'Production-tooling access provisioning coordinated with your security team',
    ],
    regulatoryFrameworks: ['SOC 2', 'GDPR', 'CCPA', 'PCI DSS'],
    caseHighlight: {
      company: 'Vertex SaaS',
      challenge:
        'A B2B SaaS platform launching a major product expansion needed to scale tier 2 from 25 to 90 seats inside a quarter, with 24/7 coverage and a tier 3 escalation bench across three time zones. Prior partner had ramped 18 tier 2 agents who could not navigate the integration layer, and the engineering team was covering nights.',
      result:
        'First wave of 22 tier 2 agents live in 24 days — every candidate technically pre-screened on the integration stack; full 90 seats live by day 78 across Manila, Guadalajara and onshore. Tier 2 FCR lifted 14 points post-screening upgrade; ticket-handoff drift held under 8% after the 60-day calibration cycle.',
    },
    outcomes: [
      { metric: '+14 pts', description: 'FCR lift on tier 2 queues post-screening upgrade' },
      {
        metric: 'Less than 8%',
        description: 'Ticket-handoff drift after 60-day calibration cycle',
      },
      { metric: '24/7', description: 'Coverage models we staff across 14 countries' },
    ],
    faqs: [
      {
        q: 'How do you handle training on our specific tech stack — Zendesk, ServiceNow, Salesforce?',
        a: 'We do not deliver product-specific training itself; that stays with your enablement team. What we do is screen for prior platform exposure at shortlist and prioritize candidates with documented hands-on time in your specific tooling. For Zendesk, ServiceNow, Salesforce Service Cloud, Jira and Freshdesk we have an active pipeline tagged by platform and tier. We share platform-experience detail on every shortlist.',
      },
      {
        q: 'How do you screen for multi-tier handoff discipline?',
        a: 'Every tier 1 candidate completes a recorded scenario where the issue should escalate but the simulated user is pushing for an immediate fix. We score for correct escalation criteria, internal-note quality and warm-handoff tone. Tier 2 candidates are scored on the inverse — when to keep a ticket they could escalate but should not.',
      },
      {
        q: 'Can you staff true 24/7 without a quality cliff at night?',
        a: 'Yes. Manila anchors English night-side with strong tenure and helpdesk-trained pipeline; Mexico anchors bilingual Spanish night and weekend; onshore covers tier 3 and SOC 2-scoped escalations with on-call coverage for production incidents. Cohort design includes shift-differential, supervisor-coverage parity and 2-AM escalation-path validation before go-live.',
      },
      {
        q: 'How do you handle hardware vs software product specialization?',
        a: 'Different rubrics. Hardware product support — consumer electronics, smart home, IoT, peripherals — screens for physical-troubleshooting steps, RMA discipline and shipping-claim fluency. Software product support screens for log-reading, reproduction-step documentation and integration troubleshooting. We tag the pipeline by both product type and prior employer to match your product profile.',
      },
      {
        q: 'What language mix do you support for global tech support?',
        a: 'English from Manila and onshore; Spanish from Mexico (Guadalajara, Mexico City, Tijuana); Portuguese from Mexico City and select Manila pools; French and German on a project-by-project basis from European near-shore partners. We will share realistic pipeline depth and shortlist timing per language as part of the written quote.',
      },
      {
        q: 'How much does it cost to staff tech support agents?',
        a: 'You pay only for hours worked — no recruiting fees, no per-agent HR overhead, and no training cost on our side. Agents stay on our payroll on month-to-month terms, so you scale tier 1, tier 2 or tier 3 up or down without severance exposure. We send a written quote with realistic pipeline depth and shortlist timing per tier and language.',
      },
      {
        q: 'How fast can you deploy tech support agents?',
        a: 'Most engagements deploy in about 72 hours for shortlisted tier 1 and tier 2 candidates, with full cohorts ramping over a few weeks. In our Vertex SaaS engagement, 22 pre-screened tier 2 agents were live in 24 days and 90 seats across three time zones by day 78.',
      },
      {
        q: 'What happens if a tech support agent is not a fit?',
        a: 'Swap any agent free, with no questions and no penalty, and our 90-day attrition guarantee means a replacement is recruited and screened at our cost. Because every candidate is vetted on a recorded troubleshooting scenario in your stack before training, swaps are rare — but the safety net is built in.',
      },
    ],
  },
  {
    slug: 'warehouse',
    name: 'Warehouse, Fulfillment & Logistics CX',
    primaryKeyword: 'fulfillment customer service staffing',
    metaTitle: 'Fulfillment Customer Service Staffing',
    metaDescription:
      'Fulfillment & 3PL customer service staffing for returns, delivery exceptions and Q4 surge. WMS/TMS-fluent agents on our payroll. Get a free staffing plan.',
    heroImage: '/images/cc-team-row-2.jpg',
    hero: {
      eyebrow: 'Industries · Warehouse & Fulfillment',
      headline: 'Fulfillment & warehouse customer service staffing, built for the seasonal curve',
      subhead:
        'High-volume, time-sensitive fulfillment CX — carrier ETA escalations, missed deliveries, returns processing and B2B order-status calls — staffed against the seasonal curve, not a flat headcount plan. Q4 bench pre-built in July; demobilized cleanly in February.',
    },
    intro: `Fulfillment customer service staffing is how ecommerce operators, 3PL warehouse partners and B2B distributors put WMS/TMS-fluent agents on returns, delivery-exception and order-status queues without carrying the hiring, training or seasonal-bench risk themselves. The work is high-volume and time-sensitive — carrier ETA escalations, missed deliveries, RMA processing and B2B pallet inquiries — and the agent profile is distinct from generic ecommerce CX: it rewards carrier-system literacy and the ability to read a tracking trace, not just brand-tone polish. Every agent stays on our payroll, you pay only for hours worked, and we plan the Q4-to-January surge against your real volume curve — benching in July, demobilizing cleanly in February. Swap any agent free, with a 90-day attrition guarantee, and deploy in roughly 72 hours.`,
    industryChallenges: [
      {
        title: 'Q4 surge volume',
        body: 'Black Friday through end-of-year fulfillment volume runs 4–6x baseline for most operators, with January returns adding a second peak before the curve normalizes. Operators that wait until October to staff Q4 lose. Pipeline build for November-December peak has to start in July, with planned demobilization to retain top performers for next season.',
      },
      {
        title: 'Carrier-exception literacy',
        body: 'A FedEx delayed-package call, a UPS lost-in-transit claim, a DHL international ETA shift and a USPS service-disruption notice all read differently. Agents who cannot interpret a carrier scan-history or escalate a lost-package claim correctly inflate AHT and frustrate customers who already know the package is late. Carrier-system literacy is screened on a timed scenario.',
      },
      {
        title: 'Returns-process accuracy under volume',
        body: 'Post-holiday returns surge is where process drift hits hardest. RMA generation, restocking-fee logic, refund-method selection (original payment vs store credit) and inventory disposition are all decisions an agent makes per call. Errors compound — wrong refund method generates a chargeback; wrong RMA blocks the warehouse receipt. Process literacy is screened, not assumed.',
      },
      {
        title: 'B2B vs B2C tone-switching',
        body: 'Mid-market 3PL operators frequently run a single queue handling both a Shopify-store consumer asking where their hoodie is and a B2B buyer asking why their pallet shipment of 600 SKUs missed the dock window. The tone, vocabulary and resolution authority required are different. Agents who cannot pivot drag down both sides of the queue.',
      },
    ],
    staffingApproach: `We staff warehouse and fulfillment CX against the seasonal curve and the platform stack, not a generic CX rubric. Every shortlisted candidate is screened for WMS/TMS exposure on a timed carrier-exception scenario — the candidate reads a real tracking trace and walks the simulated customer through what happened, with carrier-claim escalation and follow-up commitments scored against your published rubric. Dispatch-coordination skill is tested separately on a multi-channel scenario where the agent has to update the customer, ping the warehouse on Slack or Teams and update the ticket field set without dropping the call. Q4 surge readiness is built on a July-start pipeline build: we source, screen and warm-keep seasonal candidates through summer, run cohort waves of 25–60 agents from October through November, and demobilize cleanly between February 1 and February 15 with a top-performer retention offer for next season's bench. Returns-surge cohorts are sized into the Q4 plan, not bolted on in January. B2B-capable agents are recruited and tagged separately — we test for tone pivot on a recorded scenario with both a B2C consumer call and a B2B buyer escalation back-to-back. Mexico (Guadalajara, Mexico City) anchors bilingual Spanish for US-LATAM brands; Manila anchors English-only volume on cost-sensitive engagements; onshore covers complex carrier escalations and high-value B2B accounts.`,
    rolesCommonlyStaffed: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'trainers',
    ],
    complianceConsiderations: [
      'PCI awareness for payment-related claim and refund handling',
      'CCPA awareness for California-consumer data on returns and disputes',
      'OSHA-aware briefing for warehouse-floor coordination and dispatch roles',
      'Carrier-system access provisioning coordinated with your IT team',
      'Return-fraud-pattern recognition trained for high-volume returns cohorts',
    ],
    regulatoryFrameworks: ['PCI DSS', 'CCPA'],
    caseHighlight: {
      company: 'Sun & Stripe Retail',
      challenge:
        'A multi-brand DTC retailer running fulfillment through three 3PL partners needed a 110-agent Q4 surge bench across order management, returns and carrier-exception handling, with bilingual Spanish for their LATAM channel. Prior partner had ramped late, missed Black Friday SLA on order-status response, and demobilized chaotically in late February with no retention offer.',
      result:
        'Pipeline build started July 14; first surge cohort of 38 live October 18; full 110 live November 1 across Mexico (bilingual Spanish) and onshore (B2B tier). Q4 SLA held through Cyber Week with no carrier-escalation backlog; cohort demobilized cleanly February 15 with 22% of agents retained on a permanent roster for next-season bench.',
    },
    outcomes: [
      { metric: '4-6×', description: 'Q4 volume vs. baseline that we plan and bench against' },
      { metric: '110', description: 'Largest single-season surge cohort placed (warehouse CX)' },
      { metric: '22%', description: 'Avg. surge agents retained for next-season bench' },
    ],
    faqs: [
      {
        q: 'When should we engage you for Q4 fulfillment surge?',
        a: 'July at the latest. Pipeline build for November-December peak starts then; the candidates available in October are the candidates other brands also rejected in July. We will run Q4 in 60 days if we have to, but candidate quality and cohort completion both drop materially when we start later than July.',
      },
      {
        q: 'How do you screen for carrier-exception literacy?',
        a: 'Every candidate completes a timed scenario where they read a real FedEx, UPS, DHL or USPS tracking trace and walk a simulated customer through what happened. We score for accurate scan-history interpretation, correct escalation pathing (lost-package claim, ETA-update commitment, refund vs reship decision) and follow-up discipline. Audio is shared with your operations lead before the candidate hits your loop.',
      },
      {
        q: 'Can you handle the January returns surge alongside Q4?',
        a: 'Yes — and we plan it as a single cohort, not two. December cohort is sized to absorb Q4 voice plus the January returns wave; we hold the cohort through end of January and demobilize cleanly between February 1 and February 15 with a top-performer retention offer for the next-season bench.',
      },
      {
        q: 'How much WMS/TMS training do you expect from us?',
        a: 'We do not deliver platform-specific training; that stays with your operations and enablement team. What we do is screen for prior WMS exposure (Manhattan, NetSuite, Shopify Fulfillment, ShipStation) and prior TMS exposure (the major carrier portals) at shortlist, and prioritize candidates with documented hands-on time in your stack. Most cohorts are productive on your specific WMS within 7–10 days of training when we hit the screening bar.',
      },
      {
        q: 'Do you staff B2B and B2C agents differently?',
        a: 'Yes. We tag B2B-capable agents separately in our pipeline and test for tone-pivot on a recorded scenario with a B2C consumer call and a B2B buyer escalation back-to-back. Pure-B2C cohorts run cheaper and faster from Mexico and Manila; B2B-capable agents are placed at a smaller premium and we recommend a single combined queue only when the volume mix justifies the investment in tone-pivot screening.',
      },
      {
        q: 'What is fulfillment customer service staffing, and how is it different from a BPO?',
        a: 'It is the recruiting and placement of WMS/TMS-fluent agents for returns, delivery-exception and order-status queues — for businesses that own the inventory and the customer relationship. We are a staffing partner, not a BPO: agents work your processes and your tools, but stay on our payroll, and you pay only for hours worked. You keep control of the floor without the hiring and training burden.',
      },
      {
        q: 'Do you staff for both ecommerce returns and B2B distribution order status?',
        a: 'Yes. We tag B2B-capable agents separately and test for tone-pivot on a recorded scenario that runs a B2C consumer call and a B2B buyer escalation back-to-back. Pure-B2C cohorts run faster and cheaper from Mexico and Manila; B2B-capable agents are placed at a small premium for mixed queues.',
      },
      {
        q: 'How fast can you stand up a fulfillment CX cohort, and what does it cost?',
        a: 'We deploy screened agents in roughly 72 hours for steady-state needs, and we bench Q4 surge cohorts starting in July for an October-November ramp. You pay per hour worked, month-to-month — no long-term lock-in — and any agent can be swapped free, backed by a 90-day attrition guarantee.',
      },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
