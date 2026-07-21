import type { Post } from './types';

/**
 * Second batch of hand-written posts. Covers the Bing queries the first batch
 * left uncovered (occupancy/AI-handoff metrics, Colombia, service levels) plus
 * the compliance verticals, which are the narrowest and highest-intent terms
 * available to this site.
 *
 * Literal entries, varying structure and length. No pricing, no invented
 * clients or metrics.
 */

export const OPERATIONS_POSTS: Post[] = [
  {
    slug: 'occupancy-shrinkage-headcount',
    title: 'Occupancy, Shrinkage and How Many Agents You Actually Need',
    excerpt:
      'Most understaffed contact centres are not short of applicants. They are running a headcount model that ignores shrinkage, then treating the shortfall as a recruiting failure.',
    metaTitle: 'Occupancy, Shrinkage and Contact Centre Headcount',
    metaDescription:
      'How occupancy and shrinkage determine call centre headcount: what each metric actually measures, the occupancy band that predicts attrition, and why most staffing models under-hire.',
    publishedAt: '2026-07-21',
    author: 'Call Center Staffing',
    category: 'Process',
    readingMinutes: 8,
    heroImage: '/images/cc-agent-monitor.jpg',
    primaryKeyword: 'call center occupancy and shrinkage',
    relatedPostSlugs: [
      'agent-ramp-and-nesting',
      'how-to-reduce-call-center-turnover',
      'call-center-no-show-rate',
    ],
    sections: [
      {
        paragraphs: [
          'When a floor is chronically short, the diagnosis is almost always "we cannot hire fast enough." Sometimes that is true. More often the headcount model itself was wrong from the start, and recruiting is being asked to close a gap that arithmetic created.',
          'Two numbers cause most of it: occupancy and shrinkage. They are widely reported and widely misunderstood.',
        ],
      },
      {
        heading: 'What each one actually measures',
        level: 2,
        bullets: [
          'Occupancy — of the time an agent is logged in and available, what share is spent handling contacts. It excludes breaks, training and meetings. It answers: how hard are the people who are on the phone working?',
          'Shrinkage — of the total paid hours you buy, what share is not available for handling contacts. Holidays, sickness, breaks, training, coaching, meetings, system downtime. It answers: how much of what I pay for actually reaches the queue?',
        ],
        paragraphs: [
          'The distinction matters because they fail in opposite directions. High occupancy looks like efficiency and is usually a warning. Underestimated shrinkage looks like nothing at all until the floor is short every single week.',
        ],
      },
      {
        heading: 'The occupancy band nobody wants to hear',
        level: 2,
        paragraphs: [
          'Sustained occupancy above roughly 85 to 90 percent is not efficiency. It is a queue with no recovery time in it, and it converts directly into attrition — usually with a lag of two to three months, which is exactly long enough for nobody to connect the two.',
          'What happens operationally is that agents lose the seconds between contacts. Those seconds are where notes get written, where a difficult call gets shaken off, where an agent asks a colleague a question. Remove them and quality degrades first, then people leave. Then occupancy rises further on the remaining agents, which is the loop that turns a staffing gap into a staffing crisis.',
          'Below about 70 percent sustained, you are carrying more heads than the volume needs — which is a cost problem rather than an operational one, and a much easier problem to have.',
        ],
      },
      {
        heading: 'Shrinkage is where headcount models break',
        level: 2,
        paragraphs: [
          'Ask an operator what shrinkage they plan for and the answer is often a single number carried over from a previous year. Real shrinkage moves seasonally, differs by site and by tenure, and is systematically underestimated because the small components are easy to forget.',
          'A realistic build looks less like one number and more like a stack:',
        ],
        bullets: [
          'Planned leave and public holidays — varies significantly by country, which is why an offshore or nearshore site cannot inherit your domestic assumption.',
          'Sickness and unplanned absence — higher in the first 90 days than at tenure, which matters enormously during a ramp.',
          'Breaks and legally required rest periods.',
          'Training, coaching, calibration and team meetings — the components most often left out entirely.',
          'System downtime and shift handover friction.',
        ],
      },
      {
        paragraphs: [
          'The practical consequence: if your model assumes shrinkage in the low twenties and reality is in the mid thirties, you are structurally short by more than a tenth of your floor before a single person resigns. No recruiting function can out-hire a modelling error.',
        ],
      },
      {
        heading: 'The number that ties it together',
        level: 2,
        paragraphs: [
          'Required headcount is not contacts divided by capacity. It is the staffing an Erlang calculation gives you for your service-level target, divided by (1 minus shrinkage), plus a buffer for attrition during the period.',
          'Two things follow from that, and both are routinely missed. First, service level is a choice with a price — moving from answering most contacts quickly to answering nearly all of them quickly costs disproportionately more headcount, because the last few percent are the expensive ones. Second, attrition has to be in the model as a rate, not as an event. A floor with meaningful annual attrition is hiring continuously just to stand still, and a hiring plan that only funds growth will always be behind.',
        ],
      },
      {
        paragraphs: [
          'Our /tools/staffing-calculator runs this arithmetic against your own volume and shrinkage assumptions rather than generic ones. If the diagnosis is that your cohorts keep landing under-sized rather than that the model is wrong, /insights/call-center-understaffed covers the calendar side of the problem.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is a good occupancy rate for a call center?',
        a: 'Broadly 70 to 85 percent for sustained voice work. Above roughly 85 to 90 percent sustained, you are removing the recovery time between contacts, which degrades quality first and then drives attrition — usually with a two to three month lag that makes the cause hard to see. Below about 70 percent you are carrying more headcount than the volume requires.',
      },
      {
        q: 'What shrinkage should I plan for?',
        a: 'Build it rather than inherit a single number. Stack planned leave and public holidays, sickness and unplanned absence, breaks and rest periods, training and coaching and meetings, and system downtime. It varies by country, season and tenure — new-hire absence runs higher than tenured — so an offshore or nearshore site cannot use your domestic assumption.',
      },
      {
        q: 'Why is my call center always understaffed even though we keep hiring?',
        a: 'Usually one of two things. Either shrinkage is underestimated, so the model was short before anyone resigned, or attrition is treated as an event rather than a continuous rate, so the hiring plan funds growth but not replacement. A floor with meaningful annual attrition is hiring every month just to stand still.',
      },
      {
        q: 'How does service level affect headcount?',
        a: 'Disproportionately. Moving from answering most contacts quickly to answering nearly all of them quickly costs far more than the percentage difference suggests, because the last few points of service level require staffing for peaks that are rare. Service level is a commercial choice with a headcount price, not a technical setting.',
      },
    ],
  },
  {
    slug: 'ai-and-human-agent-handoff',
    title: 'AI Deflection and the Human Handoff: What It Does to Staffing',
    excerpt:
      'Automation removes the easy contacts first. The queue that reaches your agents afterwards is shorter, harder and less forgiving — and staffing it the way you staffed the old one is how deflection programmes go wrong.',
    metaTitle: 'AI Deflection and Human Handoff in Contact Centres',
    metaDescription:
      'What AI deflection does to contact centre staffing: why average handle time rises after automation, how handoff quality determines customer outcomes, and how to hire for the harder queue that remains.',
    publishedAt: '2026-07-21',
    author: 'Call Center Staffing',
    category: 'Process',
    readingMinutes: 8,
    heroImage: '/images/cc-agent-laptop.jpg',
    primaryKeyword: 'AI handoff contact center staffing',
    relatedPostSlugs: [
      'occupancy-shrinkage-headcount',
      'agent-ramp-and-nesting',
      'how-to-reduce-call-center-turnover',
    ],
    sections: [
      {
        paragraphs: [
          'Most contact centres now deflect some share of contacts to automation, and most business cases for it are built on volume: fewer contacts reaching agents, therefore fewer agents. The volume part usually delivers. The headcount saving frequently does not, and the reason is consistent enough to plan around.',
        ],
      },
      {
        heading: 'Automation takes the easy contacts',
        level: 2,
        paragraphs: [
          'Deflection works best on exactly the contacts that were cheapest to handle: order status, balance checks, password resets, opening hours. Bounded questions with deterministic answers.',
          'What remains is the residue — ambiguous, emotional, multi-issue, or genuinely novel. So the queue reaching your agents is smaller and substantially harder, and every per-contact metric you had baselined moves:',
        ],
        bullets: [
          'Average handle time rises, often sharply. This is expected and is routinely misread as a performance problem.',
          'First-contact resolution falls, because the contacts that resolve in one touch were the ones automated away.',
          'Emotional load per contact rises. Customers arriving at a human after a failed bot attempt start further into frustration than customers who reached a human directly.',
          'Agent tenure requirements rise. The residual queue is a poor fit for the entry-level profile that handled the old blended queue.',
        ],
      },
      {
        paragraphs: [
          'Operators who hold their old AHT target after deflection put pressure on exactly the wrong behaviour, and the visible result is quality collapse followed by attrition.',
        ],
      },
      {
        heading: 'The handoff is where value is won or lost',
        level: 2,
        paragraphs: [
          'The single largest controllable factor in a deflection programme is what the agent receives at the moment of transfer.',
          'A cold handoff — where the customer repeats everything they just told the bot — produces a worse outcome than no automation at all, because the customer has now spent effort twice. It is also the most common implementation, because passing context is harder than passing the call.',
        ],
        bullets: [
          'Pass the full transcript and the intent the system inferred, visible before the agent speaks.',
          'Pass what the automation already attempted and failed to do. An agent repeating a step the bot just tried is the fastest way to lose a customer.',
          'Pass a sentiment or escalation flag if you have one, so the agent can adjust their opening rather than discovering the mood mid-sentence.',
          'Measure handoff quality as its own metric. If you only measure deflection rate, you optimise for containment — which means the system will fight to avoid transferring, and customers will pay for that.',
        ],
      },
      {
        heading: 'What this changes about hiring',
        level: 2,
        paragraphs: [
          'If the residual queue is harder, the screen has to change with it. Screening for the queue you used to have produces agents who ramp and then stall.',
        ],
        bullets: [
          'Weight judgement and ambiguity tolerance above speed. The old proxy of fast, clean handling on simple contacts no longer predicts performance.',
          'Test recovery explicitly — give candidates a scenario where the customer is already annoyed before the conversation starts, because that is now the normal opening state.',
          'Screen for comfort working alongside tooling: reading a transcript quickly, trusting or overriding a suggested response, knowing when the system is wrong.',
          'Expect and fund longer ramp. A harder queue takes longer to become competent in, and compressing nesting to the old timeline is how post-deflection cohorts fail.',
        ],
      },
      {
        paragraphs: [
          'A note on the headcount question, since it is usually what the business case turns on: deflection does reduce headcount, but generally less than the deflection rate implies, and the agents remaining need to be better. Programmes that model the saving as a straight percentage of contact volume are the ones that end up rebuilding a quality problem twelve months later.',
          'Our /roles/qa-analysts and /roles/trainers pages cover the leadership side of this, which is where post-deflection floors are usually thinnest.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does AI deflection reduce call center headcount?',
        a: 'Yes, but usually by less than the deflection rate suggests. Automation removes the simplest contacts, so what remains is a shorter but substantially harder queue with higher handle time and lower first-contact resolution. Modelling the saving as a straight percentage of contact volume consistently overstates it.',
      },
      {
        q: 'Why did our handle time go up after implementing a chatbot?',
        a: 'Because the contacts the bot handles are the ones that used to be quick. Order status and password resets were pulling your average down; once they are automated, the remaining queue is ambiguous, emotional and multi-issue. Rising handle time after deflection is expected, and holding the old target puts pressure on exactly the wrong behaviour.',
      },
      {
        q: 'What makes a good AI-to-human handoff?',
        a: 'The agent should receive the full transcript, the inferred intent, what the automation already attempted and failed, and a sentiment flag if available — all before they speak. A cold handoff where the customer repeats themselves produces a worse outcome than having no automation at all, because the customer has now spent the effort twice.',
      },
      {
        q: 'Should I hire different agents for a post-automation queue?',
        a: 'Yes. Weight judgement and ambiguity tolerance over raw speed, test recovery with scenarios where the customer is already frustrated at the opening, and screen for comfort working alongside tooling. Also fund a longer ramp — a harder queue takes longer to become competent in.',
      },
    ],
  },
  {
    slug: 'agent-ramp-and-nesting',
    title: 'Ramp and Nesting: Why New Agents Fail in Week Three',
    excerpt:
      'Most early attrition is not a hiring mistake. It is a nesting design problem — and it shows up on a predictable schedule that almost nobody staffs for.',
    metaTitle: 'Call Centre Agent Ramp and Nesting',
    metaDescription:
      'Why new contact centre agents fail around week three, how nesting should be structured, and the support ratios and metrics that determine whether a cohort survives to day 90.',
    publishedAt: '2026-07-21',
    author: 'Call Center Staffing',
    category: 'Process',
    readingMinutes: 7,
    heroImage: '/images/cc-agent-focus.jpg',
    primaryKeyword: 'call center agent ramp and nesting',
    relatedPostSlugs: [
      'how-to-reduce-call-center-turnover',
      'occupancy-shrinkage-headcount',
      'call-center-no-show-rate',
    ],
    sections: [
      {
        paragraphs: [
          'There is a shape to new-agent attrition that repeats across almost every contact centre. Classroom training goes fine. The first days on live contacts go fine. Then somewhere around week three, a chunk of the cohort disengages, and some of them leave.',
          'It is consistent enough to be structural rather than coincidental, and the cause is usually nesting design rather than the people you hired.',
        ],
      },
      {
        heading: 'What happens in week three',
        level: 2,
        paragraphs: [
          'Weeks one and two are protected. Expectations are low, support is close, and the agent is allowed to be new. Around week three the scaffolding comes down: support ratios normalise, targets switch on, and the agent is measured like everyone else.',
          'The problem is that competence has not caught up with the withdrawal of support. The agent is now handling contacts they cannot yet handle well, being measured on it, and — critically — has just lost the person they used to ask. What looks like a motivation problem is usually a support-cliff problem.',
        ],
      },
      {
        heading: 'Nesting that works',
        level: 2,
        paragraphs: [
          'Nesting is the bridge between classroom and floor. Done properly it is a staged withdrawal of support rather than a switch.',
        ],
        bullets: [
          'Taper support ratios rather than dropping them. Very close support in the first days, easing over several weeks — not full support then none.',
          'Stage the contact types. Start on the narrowest, most deterministic queue and widen as competence builds. Throwing the full contact mix at a new agent in week one guarantees early failure experiences.',
          'Delay quality targets, not quality feedback. Coach from day one; do not score against the full scorecard until the agent has had a fair chance to reach it.',
          'Keep the trainer involved past graduation. The handover from trainer to team leader is where most cohorts lose continuity, because the person who knows the agent stops being responsible for them.',
          'Protect the week-three window deliberately. If you know that is when the cliff is, staff for it — that is the week to add coaching capacity, not remove it.',
        ],
      },
      {
        heading: 'The metrics that predict who survives',
        level: 2,
        paragraphs: [
          'Day-90 retention is the outcome, but it is a lagging indicator. Earlier signals are more useful:',
        ],
        bullets: [
          'Week-two to week-four quality trajectory — direction matters far more than level. An agent improving from a low base is a better bet than one flat at an acceptable score.',
          'Question frequency. Agents who stop asking questions in week three are usually disengaging, not becoming competent. This is the most useful early warning available and it costs nothing to observe.',
          'Adherence in weeks three to four, which tends to slip before someone resigns.',
          'Cohort variance. If half a cohort is thriving and half is struggling, the problem is the screen. If the whole cohort dips at the same point, the problem is the nesting design.',
        ],
      },
      {
        paragraphs: [
          'That last distinction is the most useful diagnostic in this whole area. Cohort-wide dips are a process problem and no amount of better hiring will fix them.',
        ],
      },
      {
        paragraphs: [
          'Our /roles/trainers page covers what we screen for in the people who run this, and /blog/how-to-reduce-call-center-turnover covers the wider attrition picture beyond the first 90 days.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why do new call center agents quit in the first month?',
        a: 'Most often because support is withdrawn faster than competence develops. Weeks one and two are protected; around week three support ratios normalise and targets switch on, so the agent is handling contacts they cannot yet handle well, being measured on it, and has lost the person they used to ask. It presents as a motivation problem and is usually a support-cliff problem.',
      },
      {
        q: 'How long should call center nesting last?',
        a: 'Long enough to taper rather than switch. The specific duration depends on contact complexity, but the principle is a staged withdrawal of support across several weeks with contact types widening as competence builds — not full support followed by none. Compressing nesting is the most common cause of avoidable early attrition.',
      },
      {
        q: 'What is the earliest sign a new agent is going to leave?',
        a: 'Question frequency dropping in week three. Agents who stop asking questions are usually disengaging rather than becoming competent, and it is visible well before adherence or quality move. It costs nothing to observe and is the most useful early warning available.',
      },
      {
        q: 'Is early attrition a hiring problem or a training problem?',
        a: 'Cohort variance tells you. If half a cohort thrives and half struggles, the screen is letting through wrong-fit candidates. If the whole cohort dips at the same point, it is the nesting design — and no amount of better hiring will fix a process problem.',
      },
    ],
  },
  {
    slug: 'hipaa-call-center-staffing',
    title: 'HIPAA Call Center Staffing: Screening for Healthcare Queues',
    excerpt:
      'HIPAA training is the easy part and almost every vendor has it. What separates programmes that pass an audit from ones that do not is screening, access design and what happens when an agent leaves.',
    metaTitle: 'HIPAA Call Center Staffing',
    metaDescription:
      'Staffing HIPAA-covered contact centre queues: what a BAA actually obligates, screening beyond the training certificate, minimum-necessary access design, and offshore considerations for PHI.',
    publishedAt: '2026-07-21',
    author: 'Call Center Staffing',
    category: 'Compliance',
    readingMinutes: 8,
    heroImage: '/images/case-study-healthcare.jpg',
    primaryKeyword: 'HIPAA call center staffing',
    relatedPostSlugs: [
      'how-to-vet-nearshore-customer-service-partners',
      'eor-vs-staffing-agency-latin-america',
      'healthcare-call-center-outsourcing',
    ],
    sections: [
      {
        paragraphs: [
          'Every staffing vendor serving healthcare will tell you their agents are HIPAA trained. It is true and it is nearly meaningless as a differentiator — the training is a short module and everyone runs it.',
          'What actually determines whether a programme survives an audit or a breach investigation is elsewhere: who the business associate is, how access is scoped, and what happens on the day an agent leaves.',
          'This is a practical overview rather than legal advice; your compliance counsel owns the final call.',
        ],
      },
      {
        heading: 'Start with who the business associate is',
        level: 2,
        paragraphs: [
          'If agents will touch protected health information, someone in the chain is a business associate and needs a signed BAA. That sounds procedural and is the question that most often gets answered vaguely.',
        ],
        bullets: [
          'Which specific legal entity signs the BAA? Ask for the entity name, not a description of the group.',
          'If delivery is subcontracted or offshore, is there a downstream BAA with that entity too? Chains break at the link nobody asked about.',
          'What are the breach notification timelines and who notifies whom? Assume you will need this under time pressure, not at leisure.',
          'Under a staffing model where agents sit inside your systems, the analysis differs from a managed service where the vendor processes PHI in their own environment. Both can be compliant; they are not the same arrangement and should not be papered the same way.',
        ],
      },
      {
        heading: 'Screening beyond the certificate',
        level: 2,
        paragraphs: [
          'The training certificate tells you an agent watched a module. It does not tell you they will behave correctly at 4pm on a busy Friday when a caller sounds distressed and asks for information about a family member.',
        ],
        bullets: [
          'Scenario-test the disclosure boundary. A caller who is plausibly a spouse, asking for results, with a convincing reason. The right answer is uncomfortable to give, which is exactly why it needs testing before hire rather than after.',
          'Background checks appropriate to PHI access, run before start date rather than during nesting. Compliance-at-offer rather than compliance-at-submission produces late rescissions that no recruiting plan can backfill.',
          'Test the escalation instinct specifically: does the candidate know when to stop and ask, rather than improvise? Improvisation is the failure mode that causes disclosures.',
          'For remote agents, screen the working environment as well as the person — private space, no shared screens, no household members in earshot.',
        ],
      },
      {
        heading: 'Minimum necessary is a design decision',
        level: 2,
        paragraphs: [
          'The minimum-necessary principle is usually treated as a policy statement. It is really a system design constraint, and it is the control that most reduces breach severity.',
        ],
        bullets: [
          'Scope access by queue and by role, not by department. An agent handling appointment scheduling does not need clinical notes.',
          'Mask what is not needed for the task — full records visible by default is the most common avoidable finding.',
          'Log access at the record level so an investigation can answer who saw what, when. If you cannot answer that quickly, you cannot scope a breach.',
          'Handle call recordings deliberately: recordings of PHI conversations are PHI. Retention, access and disposal need to be specified, not inherited from your general recording policy.',
        ],
      },
      {
        heading: 'Offboarding is where staffing models are tested',
        level: 2,
        paragraphs: [
          'Contact centre attrition means people leave constantly, and each departure is an access-revocation event. This is the operational detail that separates vendors more reliably than any certification.',
        ],
        bullets: [
          'How quickly is access revoked on separation, and is it the same on a resignation as on a same-day termination?',
          'Who initiates it — your team or the staffing partner? Ambiguity here means it happens late or not at all.',
          'What happens to any locally stored material for remote agents?',
          'Is there an audit trail proving revocation occurred? "We remove access promptly" is not evidence.',
        ],
      },
      {
        paragraphs: [
          'Ask a prospective partner to walk through their last same-day termination on a HIPAA programme, step by step with timings. The vendors who have a real process answer immediately. It is the fastest filter available.',
        ],
      },
      {
        heading: 'Offshore and PHI',
        level: 2,
        paragraphs: [
          'HIPAA does not prohibit offshore handling of PHI. Many covered entities prohibit it by policy anyway, and some state law and payer contracts restrict it independently of HIPAA — so the binding constraint is often not the statute.',
          'Where offshore is permitted, the practical questions are enforceability of the downstream BAA in that jurisdiction, whether PHI is stored or merely displayed, and whether your own downstream contracts allow it. Confirm the contractual position before designing the delivery model, because unwinding it afterwards is expensive.',
        ],
      },
      {
        paragraphs: [
          'Our /industries/healthcare page covers the queue types we staff, and /solutions/compliance-licensed covers the wider regulated picture including NMLS and state insurance licensing.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What makes a call center HIPAA compliant?',
        a: 'Not the training certificate, which everyone has. A signed BAA with the specific legal entity handling PHI, minimum-necessary access scoped by queue and role rather than department, record-level access logging, deliberate handling of call recordings as PHI, and a provable access-revocation process on agent separation.',
      },
      {
        q: 'Can HIPAA call center work be done offshore?',
        a: 'HIPAA itself does not prohibit it, but many covered entities prohibit it by policy, and some state law and payer contracts restrict it independently. Where permitted, the practical questions are whether the downstream BAA is enforceable in that jurisdiction, whether PHI is stored or only displayed, and whether your own downstream contracts allow it. Confirm the contractual position before designing delivery.',
      },
      {
        q: 'How do you screen agents for HIPAA-covered queues?',
        a: 'Scenario-test the disclosure boundary with a caller who is plausibly a family member asking for information — the correct answer is uncomfortable to give, which is why it needs testing before hire. Run background checks before start date rather than during nesting, test whether the candidate escalates rather than improvises, and for remote agents screen the working environment for privacy.',
      },
      {
        q: 'What should I ask a staffing vendor about HIPAA?',
        a: 'Ask them to walk through their most recent same-day termination on a HIPAA programme, step by step with timings — who revoked access, how fast, and what audit trail exists. Vendors with a real process answer immediately. It is a faster and more revealing filter than any certification question.',
      },
    ],
  },
  {
    slug: 'nearshore-staffing-colombia',
    title: 'Nearshore Staffing in Colombia: What US Buyers Should Know',
    excerpt:
      'Colombia has become the second default for US nearshore support after Mexico. The talent case is genuine; the employment structure is where buyers get caught out.',
    metaTitle: 'Nearshore Staffing in Colombia',
    metaDescription:
      'Hiring bilingual contact centre agents in Colombia: how Bogota, Medellin, Barranquilla and Cali differ, the statutory employment obligations US buyers underestimate, and when Colombia beats Mexico.',
    publishedAt: '2026-07-21',
    author: 'Call Center Staffing',
    category: 'Comparison',
    readingMinutes: 7,
    heroImage: '/images/cc-agent-blue.jpg',
    primaryKeyword: 'nearshore staffing Colombia',
    relatedPostSlugs: [
      'hiring-bilingual-agents-mexico',
      'eor-vs-staffing-agency-latin-america',
      'how-to-vet-nearshore-customer-service-partners',
    ],
    sections: [
      {
        paragraphs: [
          'Colombia has moved from an alternative to a default in US nearshore staffing, and the reasons are real rather than promotional: a large young workforce, sustained government investment in English-language education, US Eastern time-zone alignment, and a contact-centre industry mature enough to have a genuine supervisory bench rather than only frontline agents.',
          'That last point is underrated. Plenty of markets can supply agents; markets that can supply experienced team leaders and QA analysts are rarer, and leadership is usually what actually constrains a ramp.',
        ],
      },
      {
        heading: 'The cities are not interchangeable',
        level: 2,
        bullets: [
          'Bogota — the largest pool by a distance, the deepest bilingual supply, and the most competition for it. The default for programmes above roughly a hundred seats simply because the volume exists.',
          'Medellin — strong technology sector and a well-established outsourcing industry. Frequently the best balance of English quality against competition, and popular for technical support.',
          'Barranquilla and the Caribbean coast — a growing industry with lower competition than the two majors, useful when Bogota and Medellin are saturated for your profile.',
          'Cali — smaller contact-centre presence, viable for modest programmes, thinner for specialised or senior roles.',
        ],
        paragraphs: [
          'English proficiency varies more between cities than most vendor material admits, and within cities it varies by neighbourhood and school background. Treat any blanket claim about "Colombian English" with suspicion and insist on recorded samples, as covered in /blog/how-to-vet-nearshore-customer-service-partners.',
        ],
      },
      {
        heading: 'Where buyers get caught out: employment obligations',
        level: 2,
        paragraphs: [
          'Colombian labour law is meaningfully more employee-protective than US law, and the obligations are statutory rather than negotiable. US buyers modelling on a US cost structure consistently understate the fully loaded position.',
        ],
        bullets: [
          'Prima de servicios — a statutory bonus paid twice yearly, in addition to salary.',
          'Cesantías — severance that accrues annually, plus interest on the accrued amount.',
          'Mandatory contributions to health, pension and occupational risk.',
          'Transport allowance for employees below a salary threshold.',
          'Termination protections that make dismissal more procedural and more expensive than US at-will employment.',
        ],
      },
      {
        paragraphs: [
          'None of this makes Colombia a bad choice. It does mean the arithmetic differs from a US mental model, and it makes the employment structure question — your own entity, an employer of record, or a staffing partner — consequential rather than administrative. That comparison is in /blog/eor-vs-staffing-agency-latin-america.',
          'The most expensive mistake in the market is engaging agents as independent contractors when the relationship has the characteristics of employment. Misclassification liability generally follows the company receiving the work.',
        ],
      },
      {
        heading: 'Colombia or Mexico?',
        level: 2,
        bullets: [
          'Time zone — Mexico spans US Central and Pacific comfortably; Colombia aligns to US Eastern and is a poor fit for Pacific-heavy volume.',
          'Spanish variety — Mexican Spanish is closer to what most US Hispanic customers expect. Colombian Spanish is widely considered clear and neutral, and is well received, but the familiarity edge sits with Mexico for US-facing work.',
          'Bilingual depth — both are strong. Mexico has an advantage in border cities where fluency is native rather than learned.',
          'Management travel — Mexico is a short flight from most US hubs; Colombia is a longer trip, which matters more than expected for programmes needing regular on-site presence.',
          'Market saturation — Bogota and Medellin are competitive for experienced bilingual agents, and vendors sometimes present availability that reflects the market rather than their actual bench.',
        ],
        paragraphs: [
          'Where Colombia tends to win outright: US Eastern-hours programmes, technical support out of Medellin, and cases where Mexican bilingual supply is already saturated by your competitors in the same city.',
        ],
      },
      {
        paragraphs: [
          'Our /locations/colombia page covers delivery detail, and /services/nearshore-call-center-staffing explains how the staffing model works in-country. We staff both Colombia and Mexico, so treat the comparison above as informed rather than disinterested — but the time-zone and Spanish-variety points hold regardless of who you work with.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Colombia good for bilingual call center staffing?',
        a: 'Yes, and it has become the second default after Mexico for US nearshore work. It offers a large young workforce, sustained investment in English education, US Eastern alignment, and a mature enough industry to supply experienced supervisors and QA analysts rather than only frontline agents — which is usually what constrains a ramp.',
      },
      {
        q: 'Which Colombian city is best for contact centre agents?',
        a: 'Bogota has the largest and deepest bilingual pool and suits programmes above roughly a hundred seats. Medellin offers the best balance of English quality against competition and is strong for technical support. Barranquilla and the Caribbean coast have lower competition and are useful when the majors are saturated. Cali is viable for smaller programmes.',
      },
      {
        q: 'What employment costs apply when hiring in Colombia?',
        a: 'Statutory obligations include the prima de servicios paid twice yearly, cesantías severance accruing annually with interest, mandatory health, pension and occupational risk contributions, and a transport allowance below a salary threshold. Termination is more procedural than US at-will employment. These are statutory rather than negotiable, so a US cost model will understate the fully loaded position.',
      },
      {
        q: 'Should I choose Colombia or Mexico for nearshore support?',
        a: 'Mexico for US Central and Pacific hours, for Spanish variety closest to US Hispanic customer expectations, and where regular management travel matters. Colombia for US Eastern-hours programmes, technical support out of Medellin, and where Mexican bilingual supply in your target city is already saturated. Both have strong bilingual depth.',
      },
    ],
  },
];
