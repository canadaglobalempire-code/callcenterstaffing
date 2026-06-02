import type { Solution } from './types';

export const SOLUTIONS: Solution[] = [
  {
    slug: 'scaling-existing-call-center',
    name: 'Scaling an Existing Call Center',
    metaTitle: 'Scale Call Center Staffing — Ramp Agents Fast, Backfill Attrition',
    metaDescription:
      'Ramp call center agents fast, backfill attrition and protect SLAs. We embed with your ops team to scale call center operations at the cadence your forecast demands.',
    heroImage: '/images/cc-agent-pro.jpg',
    hero: {
      eyebrow: 'Solutions',
      headline:
        'Scale call center operations and ramp agents fast — without burning your ops team.',
      subhead:
        'We run continuous, embedded recruiting against your forecast, your AHT and your QA scorecard. Backfill attrition, scale seat count, ramp call center agents fast — you get the seats; we run the engine.',
    },
    problem: `Most contact-center operators do not have a hiring problem in the abstract — they have a calendar problem. Attrition is predictable. Forecast surges are predictable. The seats that need to be filled in week 7 of Q3 are predictable. What is not predictable is whether your in-house TA team or last-quarter’s recruiting vendor will hit the calendar without dropping quality.

Operators end up running recruiting twice: once with a vendor, and once again themselves at 9 pm to make up the gap. SLAs slip. Quality scores erode in week 4 of every cohort. The numbers go red, and the only honest cause is that the seats were never full to begin with.`,
    ourApproach: `We embed a senior account manager with your operations and WFM teams, run weekly cohort planning against your real forecast — not a job spec — and source against the actual quality bar your QA team will grade against. Every cohort gets a 72-hour pre-start health check, a 30-day attrition flag, and a 90-day cohort score-card. Your TA team stays in the loop on every step.`,
    approachSteps: [
      {
        title: 'Forecast-aligned planning',
        body: 'We meet weekly with WFM to map open requisitions against the forecast — not against a static job rec.',
      },
      {
        title: 'Quality-bar sourcing',
        body: 'Sourcing against your QA scorecard, not generic CX criteria. Every shortlist is screened to your bar.',
      },
      {
        title: 'Cohort-level deployment',
        body: 'We move candidates in waves of 10–50, aligned to your training calendar, with named cohort owners on our side.',
      },
      {
        title: '90-day retention support',
        body: 'Weekly cohort score-cards, 30-day attrition flagging, and replacement guarantees inside ramp.',
      },
    ],
    outcomes: [
      { metric: '< 30 days', description: 'Average ramp from plan to first cohort live' },
      { metric: '+18%', description: '90-day retention vs. prior recruiting model (avg.)' },
      { metric: '3.2%', description: 'No-show rate at start date' },
    ],
    caseStudy: {
      company: 'NorthStar Health',
      challenge:
        'A 600-seat onshore floor running 28% annualized attrition; in-house TA was placing ~12 agents/week against a need of 22.',
      result:
        'Embedded for 14 months; weekly placements rose to 26/week, 90-day retention improved 22 points, and SLAs returned to green inside the first quarter.',
    },
    rolesIncluded: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
    ],
    faqs: [
      {
        q: 'Do you replace our TA team?',
        a: 'No. We work alongside your in-house TA team and your ops/WFM leads. Most engagements have us owning frontline volume while TA owns leadership and exempt roles.',
      },
      {
        q: 'What if a cohort underperforms?',
        a: 'We have a written replacement guarantee inside the first 30 days. If quality scores fall outside your QA bar, we re-source and re-place at no charge.',
      },
      {
        q: 'Can you scale across multiple sites at once?',
        a: 'Yes. Our largest active engagement runs continuous recruiting across four sites in three countries with a single embedded program lead.',
      },
    ],
  },
  {
    slug: 'launching-new-call-center',
    name: 'Launching a New Call Center',
    metaTitle: 'New Call Center Launch Staffing — Greenfield Recruiting at Scale',
    metaDescription:
      'Greenfield call center builds across onshore, nearshore and offshore. From first 25 to first 250 — recruited on the calendar your launch demands.',
    heroImage: '/images/call-center-team.jpg',
    hero: {
      eyebrow: 'Solutions',
      headline: 'Greenfield call centers, recruited on a launch calendar.',
      subhead:
        'When the lease is signed, the IT punchlist is open and you are 90 days from go-live, you do not need a generalist staffing firm.',
    },
    problem: `Standing up a new call center is a project-management problem disguised as a recruiting problem. Lease, build-out, IT, telco, badging, training and recruiting all run on the same critical path — and recruiting is almost always the variable that slips.

Most staffing firms come to a launch with the same playbook they use to backfill seats at a mature site, only louder. That playbook breaks at greenfield. There is no employer brand yet, no referral pipeline, no QA team to grade candidates. The firm that wins the launch is the one that has already built the bench in that market, before the lease was even signed.`,
    ourApproach: `We co-plan the launch with your ops, IT and program-management teams from week one. We pre-build a candidate bench in the market 30–60 days before badging is even possible, run cohort-aligned classes with named owners, and report against the launch critical-path — not against an abstract recruiting funnel. The first cohort lands inside ramp; the last cohort lands at full quality.`,
    approachSteps: [
      {
        title: 'Pre-launch market build',
        body: 'We spool up a candidate bench in the target market 30–60 days before badging begins — well before your competitors notice.',
      },
      {
        title: 'Cohort-aligned classes',
        body: 'Recruiting waves are sized and scheduled to your training calendar. Every class has a named owner on our side.',
      },
      {
        title: 'Critical-path reporting',
        body: 'We report against your launch milestones — not against a recruiting funnel. The status doc is shared.',
      },
      {
        title: 'Quality bar from cohort one',
        body: 'No “build the muscle in cohort 3.” Cohort 1 is graded to the same QA bar as cohort 12.',
      },
    ],
    outcomes: [
      { metric: '60 days', description: 'Average from contract sign to first 25 seats live' },
      { metric: '94%', description: 'Average cohort completion through ramp' },
      { metric: '40%', description: 'Of placements come from our pre-built market bench' },
    ],
    caseStudy: {
      company: 'Beacon Outsourcing',
      challenge:
        'A new 250-seat BPO build in Guadalajara with a 90-day launch calendar and three concurrent client ramps.',
      result:
        'First cohort live at day 38, full 250 seats live at day 84, all three client SLAs in green by week 12.',
    },
    rolesIncluded: [
      'inbound-customer-service',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'trainers',
      'operations-managers',
    ],
    faqs: [
      {
        q: 'How early should we engage you on a launch?',
        a: 'Ideally at lease signing. The bench-building work pays back most when we have 60+ days before badging. We have run launches in 30 days, but 60–90 is the sweet spot.',
      },
      {
        q: 'Can you place leadership and exempt roles too?',
        a: 'Yes. Most launches need an ops manager, a WFM lead and a training lead before the first agent class — we recruit those alongside the frontline.',
      },
      {
        q: 'Do you cover both captive and BPO launches?',
        a: 'Both. Roughly 60% of our launch work is captive (in-house) builds; 40% is BPO floors.',
      },
    ],
  },
  {
    slug: 'seasonal-surge',
    name: 'Seasonal & Surge Staffing',
    metaTitle: 'Seasonal Call Center Staffing & Temp Agency — Q4, Tax Season',
    metaDescription:
      'Seasonal call center staffing and temporary call center agents for Q4, open enrollment, tax season, holiday peaks. Pre-built bench, ramp on schedule, demobilize cleanly.',
    heroImage: '/images/agents-row.jpg',
    hero: {
      eyebrow: 'Solutions',
      headline: 'Seasonal & holiday call center staffing — built ahead of the surge.',
      subhead:
        'Q4, open enrollment, tax season, holiday peaks and product launches. We are the call center temp agency that pre-builds your bench in the off-season — so you ramp on schedule, hit SLA, and demobilize cleanly.',
    },
    problem: `Seasonal contact-center work is a calendar problem disguised as a recruiting problem. Q4 retail volume, October–December open enrollment, January–April tax season, and product-launch windows all arrive on the same dates every year — yet most staffing partners react to the surge instead of recruiting against it.

The result: classes start late, ramp into go-live, quality scores never recover, and SLAs miss in the highest-stakes weeks of the year. The teams who win surge are the ones who start their pipeline in July for November. As a specialist call center temp agency placing temporary call center agents at scale, we run the off-season pipeline that turns Q4 from a fire drill into a calendar.`,
    ourApproach: `We pre-build a market bench in the off-season — sourcing, screening, and warm-keeping qualified candidates — so the surge cohort lands fully-vetted on day one. Every cohort is sized to your training calendar with a named owner on our side, and we report against your seasonal critical-path, not against an abstract recruiting funnel. Demobilization is planned from week one, with redeployment options for top performers.`,
    approachSteps: [
      {
        title: 'Off-season pipeline build',
        body: 'We start sourcing 60–90 days before your peak — bench is screened, recorded, and warm-kept until cohort start.',
      },
      {
        title: 'Cohort-aligned classes',
        body: 'Wave-based training calendars with named cohort owners on both sides; quality scored from cohort one.',
      },
      {
        title: 'Live-volume reporting',
        body: 'Real-time cohort attrition and QA tracking through peak; we flag risk before SLA misses.',
      },
      {
        title: 'Clean demobilization',
        body: 'Redeployment paths for top performers; planned off-ramp for the rest. No surprise terminations.',
      },
    ],
    outcomes: [
      { metric: '< 25 days', description: 'Average ramp from cohort kickoff to first qualified call' },
      { metric: '92%', description: 'Of placements complete the seasonal contract' },
      { metric: '+18%', description: 'Re-engagement rate for top performers next season' },
    ],
    rolesIncluded: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
    ],
    faqs: [
      {
        q: 'How early should we engage for Q4 retail surge?',
        a: 'July or August at the latest. The strongest pipelines come from 90+ days of pre-build before October ramp.',
      },
      {
        q: 'Can you handle multi-client BPO surges in parallel?',
        a: 'Yes — most large surges run 3–5 client cohorts in parallel; we run a dedicated cohort owner per client.',
      },
      {
        q: 'What happens to seasonal hires after peak?',
        a: 'We offer redeployment to other clients, conversion to permanent if you want to keep them, or planned demobilization with off-ramp coaching.',
      },
    ],
  },
  {
    slug: 'bpo-staffing',
    name: 'BPO & Outsourcer Staffing',
    metaTitle: 'BPO & Outsourcer Call Center Staffing — Multi-Client Floor Recruiting',
    metaDescription:
      'Headcount for outsourcers running multi-client floors with strict quality standards. Per-client cohort owners, calibrated quality, and pipeline that holds.',
    heroImage: '/images/internet-call-center-agent-working.jpg',
    hero: {
      eyebrow: 'Solutions',
      headline: 'BPO recruiting tuned to multi-client floors and tight SLAs.',
      subhead:
        'Headcount for outsourcers running multiple clients on the same floor — calibrated quality bars, dedicated cohort owners, and a bench that holds across simultaneous ramps.',
    },
    problem: `BPO recruiting is harder than captive recruiting in three ways: every client has a different quality bar, ramps overlap (so the talent pool gets thin fast), and a missed SLA on one client's account creates spillover risk on every other account on the floor.

Generalist staffing firms can't see the dependency math. They place to a single requisition, hit the seat number, and miss the cohort-mix problem. The outsourcers who scale are the ones whose staffing partner runs against the floor's blended scorecard, not just the open req.`,
    ourApproach: `We embed with your client-services and ops teams to map each client's quality bar, language mix, and ramp schedule onto a single sourcing plan. Every cohort has a dedicated owner per client account. Pipeline is built across all live ramps simultaneously, with calibration sessions held weekly so the QA bars stay aligned client-to-client. We report against your blended floor SLA, not just per-client requisitions.`,
    approachSteps: [
      {
        title: 'Floor-level sourcing plan',
        body: 'A single plan that maps every client ramp on your floor — language mix, license requirements, quality bar, and timing.',
      },
      {
        title: 'Per-client cohort owners',
        body: 'Each client account on the floor gets a named recruiter who calibrates with that client\'s QA team weekly.',
      },
      {
        title: 'Cross-client calibration',
        body: 'Weekly calibration sessions so QA bars stay aligned and a strong agent gets routed to the right client account.',
      },
      {
        title: 'Blended SLA reporting',
        body: 'We report against your floor SLA, not just per-client funnels. Risk is flagged at the floor level.',
      },
    ],
    outcomes: [
      { metric: '+24%', description: 'Floor SLA achievement rate vs. prior staffing model' },
      { metric: '4 sites', description: 'Largest active engagement — across three countries' },
      { metric: '< 14 days', description: 'Avg. cohort start from new-client SOW signature' },
    ],
    rolesIncluded: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'operations-managers',
    ],
    faqs: [
      {
        q: 'Do you replace our internal TA team?',
        a: 'No. We typically own frontline volume across all clients while your TA team owns leadership and exempt roles.',
      },
      {
        q: 'How do you handle conflicting client quality bars?',
        a: 'We screen against the highest published bar on the floor, then route placements to the client whose bar they best match.',
      },
      {
        q: 'Can you support multi-country BPO operations?',
        a: 'Yes — our largest active engagement runs four sites across three countries with a single embedded program lead.',
      },
    ],
  },
  {
    slug: 'direct-to-employer',
    name: 'Direct-to-Employer Staffing',
    metaTitle: 'Direct-to-Employer Call Center Staffing — In-House Hire Recruiting',
    metaDescription:
      'Permanent hires placed directly into in-house contact centers, not vendor floors. Senior-recruiter screening, real cohort fit, and 90-day attrition guarantees.',
    heroImage: '/images/agents-working.jpg',
    hero: {
      eyebrow: 'Solutions',
      headline: 'Permanent hires for your in-house team — not a vendor floor.',
      subhead:
        'Direct hires placed into your contact center, on your badge, against your quality bar. Senior-recruiter screening, real cohort fit, and a 90-day attrition guarantee on every assignment.',
    },
    problem: `Captive contact centers want what BPOs can't always give them: agents who join the company, not the floor. The hiring problem is different — longer tenure expectations, internal mobility paths, employer brand to protect, and a benefits package that has to land cleanly.

Most staffing firms apply BPO recruiting playbooks to captive hiring and get burned: agents leave at 6 months for the next gig, employer brand takes a hit, and HR ends up doing the work twice. Captive hiring needs a different screen and a different conversation.`,
    ourApproach: `We screen for tenure intent first, skill second. Every shortlisted candidate is interviewed about career trajectory, role progression, and what they want from an employer — not just their resume. We coordinate offer, background, drug screen and badging through your in-house process, never around it. Every placement comes with a 90-day attrition guarantee written into the SOW.`,
    approachSteps: [
      {
        title: 'Tenure-first screening',
        body: 'We screen for career intent and role progression — not just skill. Tenure-pattern matching against your existing team.',
      },
      {
        title: 'Employer-brand alignment',
        body: 'Recruiter messaging aligned to your employer brand and benefits package. Candidates show up wanting your job specifically.',
      },
      {
        title: 'Internal-mobility framing',
        body: 'We frame each assignment against your internal-mobility paths — agents see a 2-year arc, not a 6-month gig.',
      },
      {
        title: '90-day guarantee',
        body: 'Written into every SOW — if an assignment leaves in the first 90 days, we replace them at no charge.',
      },
    ],
    outcomes: [
      { metric: '+22 pts', description: '90-day retention vs. prior recruiting model' },
      { metric: '3.2%', description: 'No-show rate at start date' },
      { metric: '76%', description: 'Of placements still in role at 12 months' },
    ],
    rolesIncluded: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'bilingual-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'trainers',
      'operations-managers',
    ],
    faqs: [
      {
        q: 'Do you place leadership and exempt roles?',
        a: 'Yes. Senior leadership runs a 3–6 week timeline with a deeper assessment and reference process.',
      },
      {
        q: 'How do you protect our employer brand during sourcing?',
        a: 'Every recruiter message is reviewed and approved by your HR team before outreach. We don\'t use generic templates.',
      },
      {
        q: 'What if an assignment leaves before 90 days?',
        a: 'We replace at no charge. The replacement guarantee is written into every SOW.',
      },
    ],
  },
  {
    slug: 'compliance-licensed',
    name: 'Compliance & Licensed Roles',
    metaTitle: 'Licensed Call Center Agents Staffing — NMLS, HIPAA, PCI, SOC 2',
    metaDescription:
      'Licensed call center agents staffing — NMLS licensed agents staffing, state-insurance, HIPAA and PCI-cleared. License verified at submission. Active pipelines for healthcare, finance, insurance.',
    heroImage: '/images/office-phone.jpg',
    hero: {
      eyebrow: 'Solutions',
      headline: 'Licensed call center agents — screened to your regulator, not just your scorecard.',
      subhead:
        'NMLS licensed agents staffing, state-insurance, HIPAA-cleared, PCI-cleared and SOC 2-aware agents. Active pipelines for healthcare, financial services and insurance — license verified at submission, never at offer.',
    },
    problem: `Regulated contact-center work has a recruiting problem that generic staffing firms don't see: license currency, background check timing, training-hour minimums, and disclosure-handling competence are all real constraints — and missing any of them means the assignment can't legally take calls on day one. Licensed call center agents staffing is a different discipline — and NMLS licensed agents staffing in particular is its own pipeline that has to be warm-kept year-round, not built reactively.

Most generalist firms place to a "licensed agent" requisition and hope the candidate's license is current and unrestricted. The teams that win regulated work have a staffing partner who verifies license status, NPDB, and disclosure literacy before the candidate hits the shortlist.`,
    ourApproach: `We carry active, current pipelines of NMLS-licensed, state-insurance-licensed, HIPAA-cleared, and PCI-cleared agents in the markets you operate in. Every shortlisted candidate has a verified, current license on the date of submission. Disclosure-handling is screened in a recorded role-play scored by a senior account manager who has run a regulated floor. Every cohort completes a tailored compliance refresher before going live.`,
    approachSteps: [
      {
        title: 'License-verified pipeline',
        body: 'Active, current pipelines of NMLS, state-insurance, HIPAA and PCI-cleared agents — verified at submission.',
      },
      {
        title: 'Disclosure-handling screen',
        body: 'Recorded compliance role-play scored against your regulator\'s standard, not a generic CX rubric.',
      },
      {
        title: 'Background + NPDB',
        body: 'Pre-shortlist background checks and NPDB queries for licensed roles — no surprises at offer stage.',
      },
      {
        title: 'Tailored compliance refresher',
        body: 'Every cohort completes a regulator-specific refresher before going live — HIPAA, PCI, FCRA, Reg E, TCPA.',
      },
    ],
    outcomes: [
      { metric: '100%', description: 'License verification at shortlist — no failed-licensure starts' },
      { metric: '< 21 days', description: 'Average shortlist for licensed role pipelines' },
      { metric: '0', description: 'Compliance violations across active engagements (last 24 months)' },
    ],
    rolesIncluded: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'bilingual-agents',
      'qa-analysts',
      'team-leads-supervisors',
    ],
    faqs: [
      {
        q: 'Which licenses can you actively recruit for?',
        a: 'NMLS (consumer lending), state-insurance (life, health, P&C), FINRA Series 6/7 in select markets, HIPAA-cleared, PCI-cleared. Tell us your regulator and we\'ll tell you our pipeline depth.',
      },
      {
        q: 'How fast can you stand up a HIPAA-cleared cohort?',
        a: 'For 10–25 seats, typically 14–21 days. Larger cohorts (50+) run in waves with the first wave inside the same window.',
      },
      {
        q: 'Do you handle the regulator-specific training itself?',
        a: 'No — we recruit the talent and verify they meet baseline. Regulator-specific training is delivered by your team or your training partner. We coordinate the calendar.',
      },
    ],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
