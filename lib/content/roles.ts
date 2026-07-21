import type { Role } from './types';

export const ROLES: Role[] = [
  {
    slug: 'bilingual-agents',
    name: 'Bilingual Call Center Agents',
    shortName: 'Bilingual Agents',
    metaTitle: 'Bilingual & Spanish Speaking Call Center Agents — Staffing',
    metaDescription:
      'Hire Spanish speaking call center agents and bilingual talent across onshore, nearshore and offshore. Fluency scored to level — recordings shipped with every shortlist.',
    hero: {
      eyebrow: 'Roles we staff',
      headline: 'Spanish speaking call center agents who actually move the needle on CSAT.',
      subhead:
        'We screen for true conversational fluency — not memorized phrases — across Spanish, Portuguese, French, Tagalog, Mandarin and more. Every shortlist ships with a recorded sample in both languages.',
    },
    whatTheyDo: `Bilingual call center agents — and Spanish speaking agents in particular — handle inbound, outbound and back-office workflows in two or more languages, often switching mid-call without losing tone or accuracy. They are the difference between a Spanish-speaking customer being routed once and being routed three times — and they are the single biggest CSAT lever available to most contact centers serving multilingual markets.

We place Spanish speaking call center agents and broader bilingual talent who can do the actual work: handle nuance, idiom, regulatory disclosures and tone-matching across both languages. Our screening goes beyond a self-reported language rating to recorded voice samples reviewed by native-speaker QA leads, scored to CEFR level (B2/C1) before any candidate reaches your shortlist.`,
    skillsScreenedFor: [
      'True conversational fluency in two or more languages (B2–C2 CEFR)',
      'Accent neutrality and tone-matching across both languages',
      'Live de-escalation under pressure',
      'Clean call control — not just script adherence',
      'Compliance disclosures spoken correctly in both languages',
      'Active listening and paraphrase accuracy',
      'CRM and case-management speed',
      'Cultural fluency, not just linguistic translation',
    ],
    languagesSupported: [
      'Spanish (LATAM, Castilian)',
      'Portuguese (Brazilian, European)',
      'French (Canadian, European)',
      'Mandarin · Cantonese',
      'Tagalog · Cebuano',
      'German · Italian · Dutch (limited)',
      'Arabic · Hindi · Vietnamese (limited)',
    ],
    placementTimeline: '5–10 business days for first qualified shortlist',
    industriesUsing: [
      'Healthcare',
      'Financial Services',
      'eCommerce & Retail',
      'Telecom & Media',
      'Insurance',
      'Travel & Hospitality',
    ],
    faqs: [
      {
        q: 'How do you verify language fluency?',
        a: 'Recorded voice samples in both languages, reviewed by a native-speaker QA lead, plus Versant or equivalent assessment. We send the audio with every shortlisted candidate.',
      },
      {
        q: 'Can you place agents fluent in three or more languages?',
        a: 'Yes — typically out of Manila, Mexico City and select European-leaning offshore markets. Pipelines are smaller; expect 10–15 day shortlists.',
      },
      {
        q: 'Do you handle licensed bilingual roles (insurance, financial)?',
        a: 'Yes. We have active pipelines of NMLS-licensed and state insurance-licensed bilingual agents in Guadalajara, Mexico City and onshore US markets.',
      },
    ],
  },
  {
    slug: 'inbound-customer-service',
    name: 'Inbound Customer Service Agents',
    shortName: 'Inbound CS',
    metaTitle: 'Inbound Customer Service Agent Staffing',
    metaDescription:
      'Recruit inbound customer-service agents at scale across regions. Screened for empathy, AHT discipline and first-call resolution.',
    hero: {
      eyebrow: 'Roles we staff',
      headline: 'Inbound CS agents who hit AHT without sandbagging quality.',
      subhead:
        'We screen for the trait operators actually pay for: agents who can resolve on first call without trading off CSAT.',
    },
    whatTheyDo: `Inbound CS agents are the front door of your customer experience. They take calls, chats and emails — diagnose, resolve, and route — usually under aggressive AHT and FCR targets, with quality scoring graded by your QA team or your client’s.

Most recruiters screen for typing speed and a clean voice. We screen for the harder thing: agents who can hit AHT without padding hold time, hit FCR without false-closing, and hit CSAT without reading from a script. The difference shows up in week-four QA scores and 90-day retention — not in week-one ramp metrics.`,
    skillsScreenedFor: [
      'Active listening and paraphrase accuracy',
      'Empathy under volume — not performative scripted empathy',
      'AHT discipline without sandbagging',
      'First-call resolution patterns',
      'CRM and knowledge-base navigation speed',
      'De-escalation and tone-recovery',
      'Compliance disclosures and call control',
      'Multi-channel context-switching (voice + chat + email)',
    ],
    placementTimeline: '3–7 business days for first qualified shortlist',
    industriesUsing: [
      'Healthcare',
      'eCommerce & Retail',
      'Telecom & Media',
      'Travel & Hospitality',
      'Financial Services',
      'Insurance',
    ],
    faqs: [
      {
        q: 'How do you screen for FCR vs. AHT trade-off?',
        a: 'A scenario-based assessment with a deliberately ambiguous customer issue. We measure both resolution depth and total handle time, not just one or the other.',
      },
      {
        q: 'What is your no-show rate at start date?',
        a: 'Across the last 12 months, our average is 3.2% — we run a 72-hour pre-start touchpoint and offer a replacement guarantee inside the first 30 days.',
      },
      {
        q: 'Can you staff multi-channel (voice + chat + email)?',
        a: 'Yes — that is the default. We screen typing speed and written tone alongside voice in every assessment.',
      },
      {
        q: 'Do you handle high-attrition Q4 ramps?',
        a: 'Yes. We pre-build a bench in August/September for clients with predictable Q4 surges, and run weekly cohort waves of 25–50.',
      },
    ],
  },
  {
    slug: 'outbound-sales-agents',
    name: 'Outbound Sales Agents',
    shortName: 'Outbound Sales',
    metaTitle: 'Appointment Setting & Outbound Agent Staffing',
    metaDescription:
      'Hire B2B appointment setters and outbound sales agents screened for discovery, objection handling, conversion discipline, TCPA and CRM speed.',
    hero: {
      eyebrow: 'Roles we staff',
      headline: 'Appointment setters and outbound agents who move numbers.',
      subhead:
        'We screen for the only thing outbound floors actually care about: agents who hit conversion without burning the list.',
    },
    whatTheyDo: `Outbound sales agents work the dialer or the queue, run discovery, handle objections and close — usually under aggressive daily contact and conversion targets, with quality monitored by your QA team or your client's compliance lead.

Most recruiters screen for "energy" and a clean voice. We screen for the harder thing: B2B appointment setters and outbound agents who can run discovery, book a qualified meeting, hit conversion without false-yeses, and survive 90 days on the dialer without burning out. Tenure on outbound floors is the cleanest signal of recruiting quality there is — and it is what we benchmark every cohort against.`,
    skillsScreenedFor: [
      'Tonality and energy modulation across a 6-hour shift',
      'Objection-handling without scripting',
      'Discovery question discipline',
      'TCPA / Reg E / DNC compliance literacy where applicable',
      'CRM and dialer speed',
      'Coachability — week-1 to week-4 ramp curve',
      'Resilience and recovery between calls',
    ],
    placementTimeline: '3–7 business days for first qualified shortlist',
    industriesUsing: [
      'Financial Services',
      'Telecom & Media',
      'Insurance',
      'eCommerce & Retail',
      'Healthcare',
    ],
    faqs: [
      {
        q: 'Do you place licensed outbound agents?',
        a: 'Yes. NMLS, state-insurance and FINRA-licensed outbound pipelines are an active part of our bench — most often for financial services and insurance clients.',
      },
      {
        q: 'How do you screen for objection handling?',
        a: 'A live role-play with a senior account manager playing a realistic objection-heavy prospect. We score recovery, not just first-pass closing.',
      },
      {
        q: 'Can you staff B2B as well as B2C outbound?',
        a: 'Yes — B2B outbound has its own pipeline. We screen for higher discovery skill, longer cycle resilience, and CRM hygiene.',
      },
      {
        q: 'Do you staff B2B appointment setters?',
        a: 'Yes. We recruit appointment setters for prospecting, qualification and calendar booking, then screen them on a live discovery role-play. The scorecard covers question quality, objection recovery, qualification discipline, CRM notes and whether the booked meeting matches your acceptance criteria.',
      },
    ],
  },
  {
    slug: 'team-leads-supervisors',
    name: 'Team Leads & Supervisors',
    shortName: 'Team Leads',
    metaTitle: 'Call Center Team Lead and Supervisor Recruiting',
    metaDescription:
      'Recruit team leads and supervisors who run a floor. Screened for shrinkage discipline, coaching skill, and adherence — not just tenure.',
    hero: {
      eyebrow: 'Roles we staff',
      headline: 'Call center team leads and supervisors who actually run the floor.',
      subhead:
        'Team leads and supervisors who can coach, manage shrinkage and hit adherence — promoted or hired, screened the same way.',
    },
    whatTheyDo: `Team leads and supervisors are the layer between agents and operations. They run shift coaching, calibration, side-by-sides, escalation handling, attendance and adherence tracking — usually for spans of 12–18 agents — and own the day-to-day shrinkage number.

Most staffing firms place team leads as a tenure exercise: longest-tenured agent gets the next chevron. We screen for the harder skill: leads who can move a coaching point in a 5-minute side-by-side, run a calibration without losing the room, and hit adherence without burning their team out.`,
    skillsScreenedFor: [
      'Coaching cadence and feedback specificity',
      'Calibration discipline against published QA scorecards',
      'Shrinkage and adherence measurement literacy',
      'Escalation handling and de-escalation under load',
      'Attendance / RTW conversation skill',
      'Span-of-control management (12–18 agents typical)',
      'Cross-functional comms with WFM and QA',
    ],
    placementTimeline: '5–10 business days for first qualified shortlist',
    industriesUsing: [
      'Healthcare',
      'Financial Services',
      'eCommerce & Retail',
      'Telecom & Media',
      'Insurance',
    ],
    faqs: [
      {
        q: 'Do you promote internally or hire externally?',
        a: 'Both. We can run a structured internal-promotion screen against the same bar we use for external hires — many clients use us as a calibration tool for their own promotion pipeline.',
      },
      {
        q: 'How do you screen for coaching skill?',
        a: 'A recorded coaching demo against a real QA score-card. Reviewed by a senior account manager who has run a contact-center floor.',
      },
    ],
  },
  {
    slug: 'qa-analysts',
    name: 'QA Analysts',
    shortName: 'QA Analysts',
    metaTitle: 'Call Center QA Analyst Recruiting',
    metaDescription:
      'Recruit QA analysts with calibrated scoring discipline. Screened for inter-rater agreement, root-cause analysis, and coaching follow-through.',
    hero: {
      eyebrow: 'Roles we staff',
      headline: 'Call center QA analysts who score consistently — not creatively.',
      subhead:
        'Calibrated scoring, clean root-cause analysis, and coaching follow-through. We screen QA the way operators actually use it.',
    },
    whatTheyDo: `QA analysts pull, score and calibrate calls (and chats and emails), surface trends back to ops and training, and own the inter-rater agreement number. The good ones move CSAT and FCR through coaching loops; the wrong ones generate reports nobody reads.

We screen for the calibration math first: agents pulled into our QA assessment score the same set of recorded calls, and we measure inter-rater agreement against a published key. Below 80%, we don't shortlist.`,
    skillsScreenedFor: [
      'Calibrated scoring against a published rubric (≥80% IRA)',
      'Root-cause analysis vs. surface symptoms',
      'Trend-spotting across cohort and channel',
      'Coaching feedback writing — specific, actionable, kind',
      'Compliance and disclosure literacy where applicable',
    ],
    placementTimeline: '5–10 business days for first qualified shortlist',
    industriesUsing: ['Healthcare', 'Financial Services', 'Insurance', 'Telecom & Media'],
    faqs: [
      {
        q: 'How do you measure calibration during screening?',
        a: 'Candidates score 8 recorded calls against a rubric we share. We measure inter-rater agreement vs. the published key — anything below 80% is an automatic decline.',
      },
      {
        q: 'Can you staff regulated QA (HIPAA / PCI / collections)?',
        a: 'Yes. Compliance-cleared QA pipelines are an active bench — most often for healthcare and financial services clients.',
      },
    ],
  },
  {
    slug: 'workforce-management',
    name: 'Workforce Management',
    shortName: 'WFM',
    metaTitle: 'Workforce Management Analyst & Manager Recruiting',
    metaDescription:
      'Recruit WFM analysts, real-time analysts and WFM managers. Screened for forecast accuracy, intraday discipline, and Erlang fluency.',
    hero: {
      eyebrow: 'Roles we staff',
      headline:
        'Call center workforce management analysts who protect the SLA — not just the spreadsheet.',
      subhead:
        'Forecast accuracy, intraday discipline and Erlang fluency. WFM hires whose models actually match the floor.',
    },
    whatTheyDo: `WFM analysts and managers own the math behind every staffed seat — forecast, schedule, intraday, real-time. The job is to make sure the right number of agents are on the right channel at the right minute, against an accurate volume and AHT projection. Done well, it is invisible. Done poorly, it shows up as a missed SLA at 2 pm Tuesday.

We screen for forecast-vs-actual track records, intraday decisioning under pressure, and the actual math (Erlang C, shrinkage modeling, multi-channel blending) — not just tool fluency on a specific WFM platform.`,
    skillsScreenedFor: [
      'Forecast accuracy against historical actuals',
      'Erlang C / multi-channel blending math',
      'Intraday decisioning under live SLA pressure',
      'Shrinkage modeling and unplanned-event response',
      'Tool fluency: Verint, NICE IEX, Calabrio, Genesys, Aspect',
      'Stakeholder comms with ops, training, and finance',
    ],
    placementTimeline: '7–14 business days for first qualified shortlist',
    industriesUsing: [
      'Telecom & Media',
      'Financial Services',
      'Healthcare',
      'eCommerce & Retail',
      'Insurance',
    ],
    faqs: [
      {
        q: 'Do you place WFM managers as well as analysts?',
        a: 'Yes — full WFM stack from real-time analyst through manager and director. Senior leadership runs a longer timeline (3–4 weeks).',
      },
      {
        q: 'Are your WFM hires tool-specific or platform-agnostic?',
        a: 'Both. We carry active pipelines on Verint, NICE IEX, Calabrio, Genesys and Aspect — and a separate platform-agnostic bench for clients building or migrating tools.',
      },
    ],
  },
  {
    slug: 'trainers',
    name: 'Trainers & QA Coaches',
    shortName: 'Trainers',
    metaTitle: 'Call Center Trainer & QA Coach Recruiting',
    metaDescription:
      'Recruit trainers and QA coaches who shorten ramp and lift week-4 quality scores. Screened for delivery, retention design, and coaching transfer.',
    hero: {
      eyebrow: 'Roles we staff',
      headline: 'Call center trainers who shorten ramp — not just fill seats in a classroom.',
      subhead:
        'Onboarding delivery, retention design and coaching transfer. Trainers whose week-4 quality scores actually beat the average.',
    },
    whatTheyDo: `Trainers and QA coaches own new-hire onboarding, nesting, refresher training and ongoing upskilling. The good ones move week-4 QA and FCR scores measurably above class average; the wrong ones turn training into seat-warming.

We screen for delivery skill (recorded teach-back), retention design (how they break and recombine content for adult learners), and coaching transfer (do graduates of their classes outperform). Tenure in training is not the signal — graduate cohort performance is.`,
    skillsScreenedFor: [
      'Live training delivery — energy, pacing, retention',
      'Adult-learning design (chunking, retrieval, spaced practice)',
      'Coaching transfer to nesting and floor',
      'New-hire ramp curve management',
      'Compliance and disclosure-heavy content delivery',
    ],
    placementTimeline: '5–10 business days for first qualified shortlist',
    industriesUsing: ['Healthcare', 'Financial Services', 'Insurance', 'Telecom & Media'],
    faqs: [
      {
        q: 'How do you measure trainer effectiveness in screening?',
        a: 'A recorded teach-back of a 10-minute training segment, scored by a senior account manager against an adult-learning rubric. Plus reference checks specifically on graduate-cohort QA scores.',
      },
      {
        q: 'Can you place bilingual trainers?',
        a: 'Yes — Spanish-fluent trainers are an active bench, most often deployed in Mexico City and Guadalajara nearshore builds.',
      },
    ],
  },
  {
    slug: 'operations-managers',
    name: 'Operations Managers',
    shortName: 'Ops Managers',
    metaTitle: 'Call Center Operations Manager Recruiting',
    metaDescription:
      'Recruit ops managers who run a floor on the numbers. Screened for P&L literacy, leadership cadence, and span-of-control discipline.',
    hero: {
      eyebrow: 'Roles we staff',
      headline: 'Call center operations managers who run the floor on the numbers.',
      subhead:
        'P&L literacy, leadership cadence, and span-of-control discipline. Operations managers who can stand up a floor or turn one around.',
    },
    whatTheyDo: `Operations managers own the floor: a span of 4–8 supervisors and 60–150 agents, against a published SLA, a CSAT/QA bar, a budget, and a P&L. The role is half people-leadership, half spreadsheet — and the wrong hire shows up as missed SLAs and rotating supervisors within a quarter.

We screen for the math (do they read a daily ops dashboard fluently), the leadership cadence (do they run effective tier-1 / tier-2 huddles), and the turnaround track record. Senior ops hires get a longer screening cycle and reference checks specifically on retention and SLA outcomes.`,
    skillsScreenedFor: [
      'Daily ops dashboard fluency — SLA, AHT, CSAT, shrinkage, attrition',
      'Leadership cadence (tier-1 huddles, tier-2 reviews, monthly business reviews)',
      'Span-of-control management (4–8 direct reports typical)',
      'P&L and budget literacy',
      'SLA turnaround and floor-stabilization experience',
      'Cross-functional comms with WFM, QA, training, client',
    ],
    placementTimeline: '14–21 business days for first qualified shortlist',
    industriesUsing: [
      'Healthcare',
      'Financial Services',
      'Telecom & Media',
      'eCommerce & Retail',
      'Insurance',
      'Travel & Hospitality',
    ],
    faqs: [
      {
        q: 'Do you place site directors and senior leadership?',
        a: 'Yes — site director, VP of operations and SVP roles. Senior leadership runs a 3–6 week timeline with a deeper reference and assessment process.',
      },
      {
        q: 'How do you screen for SLA turnaround experience?',
        a: 'Reference checks specifically on prior-role SLA and attrition trajectories — we ask for the numbers, not the narrative.',
      },
    ],
  },
];

export function getRole(slug: string): Role | undefined {
  return ROLES.find((r) => r.slug === slug);
}
