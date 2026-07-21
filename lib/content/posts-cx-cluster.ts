import type { Post } from './types';

/**
 * Phase 3 spokes. These support /services/customer-service-outsourcing, which
 * is the hub for the largest cluster in the plan. Each targets terms the hub
 * does not, and links back into it.
 *
 * The cost post deliberately covers cost *drivers* rather than rates —
 * "outsource customer service cost" is a real term (CPC $52.16) and can be
 * answered honestly without publishing a rate card.
 */

export const CX_CLUSTER_POSTS: Post[] = [
  {
    slug: 'top-customer-service-outsourcing-companies',
    title: 'Top Customer Service Outsourcing Companies: How to Actually Evaluate Them',
    excerpt:
      'Most rankings of customer service outsourcing companies are sorted by who paid to be on them. Here is what to check instead — and the four questions that separate real capability from a good pitch.',
    metaTitle: 'Top Customer Service Outsourcing Companies',
    metaDescription:
      'How to evaluate the top customer service outsourcing companies: what published rankings actually measure, the four questions that reveal capability, and how UK and US provider markets differ.',
    publishedAt: '2026-07-21',
    author: 'Call Center Staffing',
    category: 'Comparison',
    readingMinutes: 8,
    heroImage: '/images/cc-discussion.jpg',
    primaryKeyword: 'top customer service outsourcing companies',
    relatedPostSlugs: [
      'customer-service-outsourcing-cost',
      'in-house-vs-outsourced-call-center',
      'how-to-vet-nearshore-customer-service-partners',
    ],
    sections: [
      {
        paragraphs: [
          'Search for the best customer support outsourcing companies and you will find a dozen ranked lists. It is worth knowing how they are built before you use one: directory sites rank largely by review volume and paid placement, and provider blogs rank themselves first. Neither measures whether a company can run your programme.',
          'This is not another ranking. It is what to check, because in this market the right provider for a 30-seat regulated healthcare queue and the right provider for a 500-seat retail surge are rarely the same company.',
        ],
      },
      {
        heading: 'The tiers, and who each actually serves',
        level: 2,
        bullets: [
          'Global enterprise CX — Teleperformance, Concentrix, Foundever, TTEC, Alorica. Genuine multi-country scale and broad language coverage. The trade-off is that a mid-sized programme can be a rounding error to them, with correspondingly little senior attention.',
          'Mid-market specialists — smaller providers, often vertical-focused. Usually more flexible on contract length and minimum seat count, and you get named people rather than an account structure.',
          'Nearshore and offshore specialists — built around a specific delivery geography. Strong where their market is strong, thin outside it.',
          'Staffing agencies — supply agents into your operation rather than running it. A different product entirely, and the one most buyers are never shown.',
        ],
      },
      {
        heading: 'The four questions',
        level: 2,
        paragraphs: [
          'These reliably change the conversation, because they are hard to answer with marketing language.',
        ],
        bullets: [
          'What is your 90-day agent attrition on programmes like mine, and how is it calculated? A provider quoting annualised attrition when you asked for 90-day is telling you something. Ninety-day is where early churn hides.',
          'Who screens my candidates, and have they ever run a floor? There is a real difference between a recruiter filling a requisition and someone who has carried an SLA.',
          'Show me a candidate you rejected and tell me why. Anyone can supply their best sample. The rejects reveal where the bar actually sits.',
          'Which site will my agents sit in, and can that change without my written agreement? Sub-delivery to a cheaper market mid-contract is common and rarely volunteered.',
        ],
      },
      {
        heading: 'What the rankings never measure',
        level: 2,
        bullets: [
          'Exit terms. What happens to your process documentation, call recordings and institutional knowledge if you bring the function in-house in eighteen months? This determines how much of your operation you are lending out.',
          'Supervisor supply, not agent supply. Almost any market can produce agents. Markets that can produce experienced team leaders and QA analysts are rarer, and leadership is what actually constrains a ramp.',
          'Whether their quality framework survives contact with yours. A provider with a mature QA scorecard is an asset until it conflicts with the one your business is measured on.',
          'How they behave when a cohort underperforms. Ask what happened the last time one did, specifically. Vendors with a real process answer immediately.',
        ],
      },
      {
        heading: 'UK and US markets are not the same shortlist',
        level: 2,
        paragraphs: [
          'Buyers searching for customer service outsourcing companies in the UK get a materially different set from US buyers, and the difference is not just geography.',
          'The UK market is dominated by entrenched domestic providers with strong local delivery, and UK buyers weight data residency and FCA considerations far more heavily. South Africa has become the common UK offshore choice — within about two hours of UK time, with an accent British customers respond well to. US buyers default to nearshore Latin America for the same time-zone reasons.',
          'A provider strong in one market is not automatically credible in the other, and "global" in a sales deck often means one large site plus partnerships.',
        ],
      },
      {
        paragraphs: [
          'We staff floors rather than run them, so we are not a neutral party in the staffing-versus-outsourcing part of this. The evaluation questions above apply either way — they do not change based on which model you pick.',
          'Our /services/customer-service-outsourcing page covers when each model fits, and /blog/customer-service-outsourcing-cost covers what actually drives the number you get quoted.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Who are the top customer service outsourcing companies?',
        a: 'At global scale, Teleperformance and Concentrix are the two largest, followed by Foundever, TTEC and Alorica. But "top" depends entirely on programme shape — the right provider for a 30-seat regulated healthcare queue is rarely the right one for a 500-seat retail surge. Published rankings mostly measure review volume and paid placement rather than fit.',
      },
      {
        q: 'How do I choose a customer support outsourcing company?',
        a: 'Ask four things: 90-day agent attrition and how it is calculated, who screens candidates and whether they have run a floor, to see a candidate they rejected and why, and which site your agents will actually sit in and whether that can change without your agreement. Then check the exit terms before you sign, not before you leave.',
      },
      {
        q: 'Are customer service outsourcing companies in the UK different from US ones?',
        a: 'Yes, materially. The UK market is dominated by entrenched domestic providers, and UK buyers weight data residency and FCA considerations more heavily. South Africa is the common UK offshore choice for time zone and accent reasons, where US buyers default to nearshore Latin America. A provider strong in one market is not automatically credible in the other.',
      },
      {
        q: 'What should I ask about before signing an outsourcing contract?',
        a: 'Exit terms, specifically. What happens to your process documentation, call recordings and institutional knowledge if you bring the function back in-house. Over a contract a meaningful amount of how your operation works ends up living with the provider, and rebuilding it is the cost that never appears in the comparison.',
      },
    ],
  },
  {
    slug: 'customer-service-outsourcing-cost',
    title: 'What Drives the Cost of Outsourcing Customer Service',
    excerpt:
      'Two providers quoting the same hourly rate can cost wildly different amounts over a year. The rate is the least useful number in the comparison — here is what actually moves it.',
    metaTitle: 'Customer Service Outsourcing Cost Drivers',
    metaDescription:
      'What determines outsourced customer service cost: the seven variables that move a quote, why hourly rate is a poor comparison, and the metric that compares providers fairly.',
    publishedAt: '2026-07-21',
    author: 'Call Center Staffing',
    category: 'Comparison',
    readingMinutes: 7,
    heroImage: '/images/cc-team-plan.jpg',
    primaryKeyword: 'outsource customer service cost',
    relatedPostSlugs: [
      'top-customer-service-outsourcing-companies',
      'occupancy-shrinkage-headcount',
      'in-house-vs-outsourced-call-center',
    ],
    sections: [
      {
        paragraphs: [
          'We do not publish rates, and this post is not going to give you a number. That is deliberate, and it is also the honest answer: anyone quoting a rate before understanding your channel mix, complexity and interval pattern is quoting a different programme from yours.',
          'What is useful is knowing what moves the number, so you can read a quote properly and compare two of them fairly.',
        ],
      },
      {
        heading: 'The seven variables that actually move a quote',
        level: 2,
        bullets: [
          'Delivery geography — the largest single factor. Onshore, nearshore and offshore differ substantially, and within each, specific markets vary more than buyers expect.',
          'Language and fluency level. Bilingual capability is a scarce skill priced accordingly, and native-level fluency costs more than a scored B2. Rare language pairs cost more again because the pool is small.',
          'Complexity and required tenure. A queue needing product judgement needs a different agent profile from one following a decision tree, and the ramp is longer.',
          'Interval pattern. Daytime-peaked volume is cheaper to staff than volume requiring overnight or weekend coverage, which carries shift premiums or a different delivery geography entirely.',
          'Seat count. Below a threshold, per-head economics get worse for both sides — the senior time required to run a programme does not scale down proportionally.',
          'Compliance requirements. HIPAA, PCI, NMLS or state licensing narrow the candidate pool and lengthen screening, and licensing in particular can add weeks per agent.',
          'Contract length and flexibility. Month-to-month flexibility is worth something and is priced as such. So is the right to scale down without penalty.',
        ],
      },
      {
        heading: 'Why hourly rate is a poor comparison',
        level: 2,
        paragraphs: [
          'Two providers quoting the same hourly rate can produce very different annual costs, because rate says nothing about how many of the agents you pay to recruit and train are still on the floor at day 90.',
          'The honest comparison metric is cost per ramped-and-retained agent: the fully loaded cost of getting an agent screened, hired, trained, nested and still working at day 90, divided by the number who actually made it.',
          'A worked example in relative terms, since the ratio is what matters:',
        ],
        bullets: [
          'Provider A: one unit of recruiting cost per offer, two units of training, 35 percent 90-day attrition. Three units spent per offer, 65 of 100 retained, true cost per retained agent ≈ 4.6 units.',
          'Provider B: two units of recruiting cost per offer, two units of training, 12 percent attrition from a tighter screen. Four units spent per offer, 88 retained, true cost ≈ 4.5 units.',
        ],
      },
      {
        paragraphs: [
          'Provider B looks a third more expensive on the headline and costs marginally less in reality. That inversion is common enough that comparing on rate alone is close to guessing.',
        ],
      },
      {
        heading: 'The costs that do not appear on the invoice',
        level: 2,
        bullets: [
          'Management overhead. A twelve-hour time offset means calibration, escalation and process changes have to fit a narrow window. That is paid in your senior people time.',
          'Process knowledge transfer. Over a contract, a meaningful amount of how your operation works accumulates with the provider. Rebuilding it if you bring the function back is real and rarely modelled.',
          'Change friction. Every process update has to be renegotiated and re-trained through a vendor layer. For fast-moving products this is the cost that bites first.',
          'Empty seat cost. Time-to-fill is a cost, not a schedule item. Every day a seat is unfilled is lost contribution margin, which is why a cheaper provider with slower ramp can be more expensive.',
        ],
      },
      {
        heading: 'How to reduce customer service costs without a race to the bottom',
        level: 2,
        bullets: [
          'Segment the queue. Move documented, bounded contacts to the cheapest suitable delivery model and keep complex or brand-critical work closer. Forcing one model on everything is where money is lost.',
          'Fix attrition before renegotiating rate. A floor with high 90-day churn is paying to recruit and train the same seat repeatedly, which dwarfs any rate concession.',
          'Check occupancy. Sustained occupancy above roughly 85 to 90 percent converts into attrition on a two to three month lag — an apparent efficiency that costs more than it saves.',
          'Model service level explicitly. Answering nearly all contacts quickly costs disproportionately more than answering most of them quickly. It is a commercial choice with a headcount price.',
        ],
      },
      {
        paragraphs: [
          'Our /tools/staffing-calculator sizes a cohort against your own volume, and /blog/occupancy-shrinkage-headcount covers the arithmetic behind the headcount number itself. For the model comparison, /services/customer-service-outsourcing sets out when outsourcing beats staffing and when it does not.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does it cost to outsource customer service?',
        a: 'It depends on delivery geography, language and fluency level, complexity, interval pattern, seat count, compliance requirements and contract flexibility — which is why we scope and quote per programme rather than publish a rate card. Any provider quoting a rate before understanding those variables is quoting a different programme from yours.',
      },
      {
        q: 'What is the best way to compare outsourcing quotes?',
        a: 'Cost per ramped-and-retained agent rather than hourly rate: the fully loaded cost of getting an agent hired, trained, nested and still working at day 90, divided by how many made it. A provider with a higher headline rate and much lower 90-day attrition frequently costs less overall, and rate alone cannot show you that.',
      },
      {
        q: 'How can I reduce customer service costs?',
        a: 'Segment the queue so documented contacts go to the cheapest suitable model and complex work stays closer. Fix 90-day attrition before renegotiating rate, because re-recruiting the same seat repeatedly dwarfs any rate concession. Check occupancy is not sustained above 85 to 90 percent, and treat service level as a commercial choice with a headcount price.',
      },
      {
        q: 'Why do two providers quote such different prices for the same programme?',
        a: 'Usually because they are pricing different things — different delivery sites, different agent tenure assumptions, different shares of supervisor and QA time included, or different attrition assumptions baked into the replacement model. Ask specifically what is included beyond the agent hour.',
      },
    ],
  },
  {
    slug: 'customer-service-best-practices',
    title: 'Customer Service Best Practices That Survive Contact With a Real Queue',
    excerpt:
      'Most customer service best-practice lists are written for a queue with no volume pressure. These are the ones that hold when the floor is short and the SLA is slipping.',
    metaTitle: 'Customer Service Best Practices',
    metaDescription:
      'Customer service best practices for contact centre operators: the rules and guidelines that hold under volume pressure, what to measure, and where standard advice breaks down.',
    publishedAt: '2026-07-21',
    author: 'Call Center Staffing',
    category: 'Process',
    readingMinutes: 7,
    heroImage: '/images/agents-working.jpg',
    primaryKeyword: 'customer service best practices',
    relatedPostSlugs: [
      'occupancy-shrinkage-headcount',
      'agent-ramp-and-nesting',
      'ai-and-human-agent-handoff',
    ],
    sections: [
      {
        paragraphs: [
          'Most customer service best practices are written as if the queue were calm. Listen actively, show empathy, own the resolution — all true, all useless as guidance at 4pm on a Friday when the floor is three agents short and the SLA has been red since Tuesday.',
          'These are the customer care best practices that survive volume pressure, which is the only condition that matters.',
        ],
      },
      {
        heading: 'The rules that hold under pressure',
        level: 2,
        bullets: [
          'Set the expectation before you need it. Telling a customer at the start of a call roughly how long something will take costs eight seconds and prevents most escalations. Agents skip it when they are behind, which is exactly when it matters most.',
          'Never make a customer repeat their problem. Repetition is the single strongest predictor of a complaint escalating, and it is a systems and handoff design failure rather than an agent one.',
          'Resolve, or own the next step with a name and a time. "Someone will get back to you" is where trust is lost. "I am raising this with our billing team and you will hear from us by Thursday" is a different conversation.',
          'Say what you can do before what you cannot. Same information, materially different outcome. This is trainable in an afternoon and rarely trained.',
          'Let agents deviate from the script where judgement is required. Rigid script adherence under pressure produces technically compliant calls that fail the customer, and it is the fastest way to lose good agents.',
        ],
      },
      {
        heading: 'Customer service guidelines that need a caveat',
        level: 2,
        paragraphs: [
          'Some standard advice is right in principle and wrong in application.',
        ],
        bullets: [
          '"The customer is always right" — abandoned by most serious operations, and rightly. It leaves agents unsupported against abuse and produces inconsistent outcomes. Clear policy plus discretion within it works better than a slogan.',
          '"Reduce average handle time" — a poor target on its own. AHT falls when agents cut corners, and the cost reappears as repeat contacts. Pair it with first-contact resolution or do not target it.',
          '"Follow the script" — appropriate for compliance disclosures, counterproductive for everything else. Distinguish between the two explicitly or agents will apply the wrong one.',
          '"Always upsell" — measurable damage to CSAT when applied to a customer who contacted you with a problem. Gate it on sentiment, not on call type.',
        ],
      },
      {
        heading: 'What to measure',
        level: 2,
        bullets: [
          'First-contact resolution alongside AHT, never AHT alone. The pair is informative; either alone is gameable.',
          'Repeat-contact rate within seven days. This catches the false-closes that FCR reporting misses.',
          'Occupancy. Sustained above roughly 85 to 90 percent, quality degrades and attrition follows on a two to three month lag.',
          'Quality-score trajectory for new agents in weeks two to four. Direction predicts day-90 retention better than level does.',
          'Escalation rate by agent and by queue. A queue-level spike is a process problem; an agent-level one is a coaching problem. Treating them the same way fixes neither.',
        ],
      },
      {
        heading: 'The practice most operations skip',
        level: 2,
        paragraphs: [
          'Calibration. Not agent coaching — QA calibration, where the people scoring calls score the same call independently and then reconcile the differences.',
          'Without it, quality scores measure which QA analyst listened rather than how the agent performed. Agents work this out within weeks, and the entire quality framework stops driving behaviour. Monthly calibration with documented reconciliation is unglamorous and is the difference between a scorecard that changes performance and one that generates reports.',
        ],
      },
      {
        paragraphs: [
          'Our /roles/qa-analysts page covers what we screen for in the people running calibration, and /blog/agent-ramp-and-nesting covers the first 90 days where most of these practices are established or lost.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What are the most important customer service best practices?',
        a: 'Set expectations at the start of the interaction, never make a customer repeat their problem, resolve or own the next step with a named person and a time, say what you can do before what you cannot, and allow agents judgement outside compliance scripting. These are the ones that hold when the floor is short, which is when practices are actually tested.',
      },
      {
        q: 'Is "the customer is always right" still a good rule?',
        a: 'No, and most serious operations have abandoned it. It leaves agents unsupported against abusive contacts and produces inconsistent outcomes because it gives no actual guidance. Clear policy with defined discretion inside it works better than a slogan.',
      },
      {
        q: 'What customer service metrics should I track?',
        a: 'First-contact resolution alongside average handle time — never AHT alone, since it falls when agents cut corners and the cost reappears as repeat contacts. Add repeat-contact rate within seven days, occupancy, new-agent quality trajectory in weeks two to four, and escalation rate split by agent and by queue.',
      },
      {
        q: 'What is QA calibration and why does it matter?',
        a: 'Calibration is where the people scoring calls independently score the same call and then reconcile their differences. Without it, quality scores measure which analyst listened rather than how the agent performed. Agents notice within weeks, and the scorecard stops changing behaviour — it becomes a reporting exercise.',
      },
    ],
  },
];
