import type { Post } from './types';

/**
 * Hand-written posts targeting queries that appear in Bing Webmaster data and
 * that no existing page answers. Literal entries, not BPO_CONTENT template
 * fills — structure and length vary by post on purpose.
 *
 * No published rates, no invented clients or metrics.
 */

export const NEARSHORE_POSTS: Post[] = [
  {
    slug: 'hiring-bilingual-agents-mexico',
    title: 'Hiring Bilingual Agents in Mexico: Screening for Real Fluency',
    excerpt:
      'Almost every provider says their Mexican agents are B2 or C1. Very few can tell you who assessed that, against what rubric, or what happens to fluency under pressure. Here is how to test it before you commit a programme.',
    metaTitle: 'Hiring Bilingual Agents in Mexico',
    metaDescription:
      'How to screen bilingual call center agents in Mexico: CEFR levels and their limits, how Guadalajara, Monterrey and Tijuana differ, and the tests that work.',
    publishedAt: '2026-07-21',
    author: 'Call Center Staffing',
    category: 'Hiring',
    readingMinutes: 8,
    heroImage: '/images/agent-female-office.jpg',
    primaryKeyword: 'bilingual customer support Mexico',
    relatedPostSlugs: [
      'how-to-vet-nearshore-customer-service-partners',
      'customer-support-staffing-agencies-latin-america',
      'nearshore-vs-offshore-high-volume-support',
    ],
    sections: [
      {
        paragraphs: [
          'Mexico is the default answer for US companies that need bilingual support, and mostly for good reasons: time-zone overlap with every US zone, a large genuinely bilingual workforce, and cultural familiarity that shortens ramp. The failure mode is not the country. It is that fluency is the least rigorously tested thing in most hiring processes, and the gap only shows up in production.',
          'Every provider will tell you their agents are B2 or C1. The question worth asking is who decided that.',
        ],
      },
      {
        heading: 'What CEFR levels do and do not tell you',
        level: 2,
        paragraphs: [
          'The CEFR scale is useful shorthand and a poor predictor on its own. B2 describes someone who can handle most situations and produce clear detailed text. C1 describes fluency that is spontaneous and near-effortless. Neither describes what happens when a customer is angry, talks over the agent, uses regional idiom, or asks something outside the training material.',
          'That gap matters because interview conditions systematically flatter candidates. A structured interview is a cooperative conversation with a patient listener. A support call at minute fourteen with an escalating customer is not. Agents who present as C1 in a screen and struggle at week three are common enough to be predictable.',
        ],
        bullets: [
          'Ask who scored the level: a native-speaker QA lead against a written rubric, or a recruiter making a judgement call?',
          'Ask when it was scored. Fluency assessed once at hire tells you nothing about the agent in month six.',
          'Ask for a recording where the candidate was interrupted or challenged, not a clean scripted sample.',
          'Ask for a rejected candidate and the reason. That reveals the actual bar, which no description of the bar will.',
        ],
      },
      {
        heading: 'Mexico is not one labour market',
        level: 2,
        paragraphs: [
          'Buyers often evaluate "Mexico" as a single pool. The major delivery cities differ enough that the mismatch between programme and city is a real and avoidable cost.',
        ],
        bullets: [
          'Guadalajara — deep technology sector, which means stronger technical-support candidates and more competition for them. Agents here have often supported software products before.',
          'Monterrey — industrial and corporate base, closest culturally to US business norms, strong for B2B and account-management style work.',
          'Mexico City — by far the largest pool and the widest range of experience levels. Best for volume, but the variance in candidate quality is correspondingly wide, so screening discipline matters most here.',
          'Tijuana and the border cities — this is where fluency is native rather than learned. Many agents grew up crossing the border or lived in the US. For programmes where Spanish and English both need to be genuinely idiomatic, this is a different quality of candidate.',
        ],
      },
      {
        paragraphs: [
          'The border-city point is the one most vendor pitches leave out unless you ask. A scored B2 speaker in a non-border metro and a bilingual native from Tijuana can carry the same label and perform very differently on a nuanced call.',
        ],
      },
      {
        heading: 'The screen that actually predicts performance',
        level: 2,
        paragraphs: [
          'The pattern that correlates best with 90-day retention and quality scores, in our experience running these programmes:',
        ],
        bullets: [
          'Two recorded samples per candidate, one scripted and one unscripted, in both languages. The delta between them is more informative than either alone.',
          'A deliberate interruption in the unscripted sample. You are testing recovery, not vocabulary.',
          'Scoring by a native speaker against a written rubric, calibrated to your specific lexicon. A healthcare rubric and a fintech rubric are not interchangeable.',
          'Code-switching under load: can they move between languages mid-call without losing tone or accuracy? Many bilingual agents can operate in either language but degrade when switching.',
          'A written component if your programme has chat or email. Spoken and written fluency diverge more than people expect.',
        ],
      },
      {
        heading: 'What breaks after hire',
        level: 2,
        paragraphs: [
          'Two things account for most bilingual-programme attrition, and neither is fluency.',
          'The first is queue design. Bilingual agents routed into whichever language is busiest, all day, burn out faster than agents with a stable primary language and secondary overflow. The skill is real but the cognitive load of constant switching is underestimated.',
          'The second is pay parity relative to the local market rather than to your other sites. Bilingual agents in Mexico are competing for roles across a market that knows their skill is scarce. Programmes that treat bilingual capability as a nice-to-have rather than a premium skill lose people to the ones that do not.',
        ],
      },
      {
        paragraphs: [
          'Our /locations/mexico page covers the delivery detail by city, and /services/bilingual-call-center-staffing explains how the screen runs. If you are comparing Mexico against offshore delivery for a high-volume queue, /blog/nearshore-vs-offshore-high-volume-support is the more useful starting point.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What CEFR level do bilingual call center agents in Mexico need?',
        a: 'B2 is workable for straightforward support and C1 for complex, regulated or escalation-heavy queues, but the level matters less than who assessed it and how. Ask whether a native-speaker QA lead scored against a written rubric, ask for an unscripted sample where the candidate was interrupted, and ask to hear a rejected candidate with the reason.',
      },
      {
        q: 'Which Mexican city is best for bilingual call center agents?',
        a: 'It depends on the programme. Guadalajara has the strongest technical-support candidates because of its technology sector. Monterrey suits B2B and corporate-style work. Mexico City offers the largest pool and the widest quality variance, so screening discipline matters most. Tijuana and the border cities offer native rather than learned bilingual fluency, which is the right choice when both languages need to be genuinely idiomatic.',
      },
      {
        q: 'Why do bilingual agents leave even when fluency is good?',
        a: 'Usually queue design and pay positioning rather than language. Agents routed into whichever language is busiest all day carry a cognitive load that is routinely underestimated and burn out faster than agents with a stable primary language. And bilingual capability is a scarce skill in the local market, so programmes that do not price it as a premium lose people to the ones that do.',
      },
      {
        q: 'Is Mexico better than the Philippines for bilingual support?',
        a: 'For Spanish and English, yes in almost all cases — the Philippines has excellent English but very limited Spanish capacity. For English-only high-volume support the comparison is genuinely open and turns on time-zone needs, complexity and cost tolerance.',
      },
    ],
  },
  {
    slug: 'nearshore-vs-offshore-high-volume-support',
    title: 'Nearshore vs Offshore for High-Volume Support: How to Decide',
    excerpt:
      'The choice is usually framed as cost versus quality. That framing is wrong and leads people to the wrong answer. The real variables are complexity, interval coverage and how much management attention you have to spend.',
    metaTitle: 'Nearshore vs Offshore for High-Volume Support',
    metaDescription:
      'When offshore suits high-volume contact centre work and when nearshore wins: complexity thresholds, interval coverage, management overhead, and hybrid splits.',
    publishedAt: '2026-07-21',
    author: 'Call Center Staffing',
    category: 'Comparison',
    readingMinutes: 8,
    heroImage: '/images/agents-row.jpg',
    primaryKeyword: 'offshore contact centers high volume support',
    relatedPostSlugs: [
      'hiring-bilingual-agents-mexico',
      'how-to-vet-nearshore-customer-service-partners',
      'in-house-vs-outsourced-call-center',
    ],
    sections: [
      {
        paragraphs: [
          'Nearshore versus offshore is usually presented as a trade between cost and quality. That framing is misleading in both directions: offshore delivery is not inherently lower quality, and nearshore is not automatically better for anything except time zones.',
          'The variables that actually decide it are complexity, interval coverage and management overhead. Cost follows from those rather than driving them.',
        ],
      },
      {
        heading: 'Complexity is the first threshold',
        level: 2,
        paragraphs: [
          'The single best predictor of whether a queue will work offshore is how much context an agent needs that is not written down.',
          'Queues where the process is documented, the outcomes are bounded, and a correct answer exists — order status, password resets, tier-one triage, back-office processing — transfer offshore extremely well, and the maturity of the Philippine and Indian contact-centre industries means you are hiring into a deep, experienced labour pool.',
          'Queues where the agent has to infer intent, exercise judgement, or carry brand voice through an unscripted conversation are harder to move. Not impossible — but the training investment rises and the ramp is longer, and operators who model offshore savings without modelling that extra ramp are usually disappointed.',
        ],
      },
      {
        heading: 'Interval coverage, not headline hours',
        level: 2,
        paragraphs: [
          'Offshore delivery from Asia sits roughly twelve hours from US Eastern, which is the whole argument for it on 24/7 programmes: your overnight is their daytime, so you staff nights without paying graveyard premiums or fighting domestic attrition on the shift nobody wants.',
          'That advantage inverts for daytime-peaked volume. If your arrival pattern concentrates between 9am and 6pm Eastern, offshore agents are working their night to cover your day, and you inherit the same night-shift attrition problem you were trying to avoid — just in a different country.',
          'Nearshore Latin America overlaps US business hours natively, which is why it dominates daytime-peaked bilingual work. The corollary is that it is a poor fit for genuine overnight coverage.',
        ],
        bullets: [
          'Daytime-peaked, US hours: nearshore is the natural fit.',
          'Genuine 24/7 or overnight-heavy: offshore covers nights without a night shift.',
          'Follow-the-sun across both: the hybrid split below.',
          'Spanish-language volume of any size: nearshore, effectively by default.',
        ],
      },
      {
        heading: 'Management overhead is the cost nobody models',
        level: 2,
        paragraphs: [
          'A twelve-hour offset means your supervisors and the delivery team overlap for a narrow window, or not at all. Every calibration session, escalation, process change and QA dispute has to fit inside it or run asynchronously.',
          'For a stable, documented queue that is a minor tax. For a programme where the process changes weekly, it is a significant one — and it is paid in your senior people time, which is why it rarely appears in the cost comparison that justified the move.',
          'Nearshore removes most of that friction. Your ops lead can hold a real-time call with the floor at 2pm without anyone working antisocial hours, which sounds trivial and is not.',
        ],
      },
      {
        heading: 'What most large operations actually do',
        level: 2,
        paragraphs: [
          'The pattern we see repeatedly at volume is a split rather than a choice:',
        ],
        bullets: [
          'Offshore for high-volume, well-documented, overnight and back-office work — the tasks where scale and cost efficiency matter most and context requirements are lowest.',
          'Nearshore for bilingual, daytime-peaked, and escalation or retention queues where judgement and real-time collaboration matter.',
          'Onshore for regulated, licensed or brand-critical conversations where jurisdiction or sensitivity rules out the alternatives.',
        ],
      },
      {
        paragraphs: [
          'Splitting is not hedging. Different queues genuinely have different requirements, and forcing them into one delivery model to simplify the vendor relationship is usually a false economy.',
          'A caveat worth stating: we staff across all three, so we have no incentive to push you toward one. The failure we see most is operators moving a complex, brand-critical queue offshore purely on cost modelling, discovering the ramp and management overhead a quarter later, and moving it back — having lost the process knowledge in the round trip.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is offshore support lower quality than nearshore?',
        a: 'Not inherently. The Philippine and Indian contact centre industries are mature and deep, and for documented, bounded queues offshore delivery performs extremely well. Quality problems usually trace to putting the wrong kind of work offshore — queues needing undocumented context, judgement or brand voice — rather than to the location.',
      },
      {
        q: 'When is offshore the right choice for high-volume support?',
        a: 'When the process is documented, outcomes are bounded, and a correct answer exists — order status, password resets, tier-one triage, back-office processing. Offshore is also the strongest option for genuine overnight and 24/7 coverage, because your night is their day and you avoid staffing a domestic graveyard shift.',
      },
      {
        q: 'What is the real cost difference between nearshore and offshore?',
        a: 'Offshore is generally the lower-cost option and nearshore sits between it and onshore, but the gap narrows once you account for longer ramp on complex work and the management overhead of a twelve-hour offset. Because it depends on complexity, language mix, interval pattern and seat count, we scope and quote per programme rather than publish rates.',
      },
      {
        q: 'Can I use nearshore and offshore together?',
        a: 'Yes, and most operations above a few hundred seats end up doing exactly that — offshore for high-volume documented and overnight work, nearshore for bilingual, daytime-peaked and escalation queues, onshore for regulated or brand-critical conversations. Different queues have genuinely different requirements.',
      },
    ],
  },
  {
    slug: 'multilingual-support-staffing-beyond-spanish',
    title: 'Multilingual Support Staffing: Hiring Beyond Spanish',
    excerpt:
      'Most "multilingual" support programmes are really English plus Spanish. Once you need Portuguese, French, German or Arabic, the sourcing problem changes shape entirely — and the usual nearshore answer stops applying.',
    metaTitle: 'Multilingual Support Staffing Beyond Spanish',
    metaDescription:
      'Staffing multilingual support beyond English and Spanish: where Portuguese, French, German, Arabic and Asian-language capacity sits, and how to queue it.',
    publishedAt: '2026-07-21',
    author: 'Call Center Staffing',
    category: 'Hiring',
    readingMinutes: 7,
    heroImage: '/images/cc-diverse-team.jpg',
    primaryKeyword: 'multilingual customer service staffing',
    relatedPostSlugs: [
      'hiring-bilingual-agents-mexico',
      'nearshore-vs-offshore-high-volume-support',
      'how-to-vet-nearshore-customer-service-partners',
    ],
    sections: [
      {
        paragraphs: [
          'In North American contact centres, "bilingual" almost always means English and Spanish, and "multilingual" usually means the same thing with ambition. The moment a programme genuinely needs a third or fourth language, the sourcing problem changes shape — and the nearshore Latin America answer that solves Spanish stops being relevant.',
        ],
      },
      {
        heading: 'Where the capacity actually is',
        level: 2,
        bullets: [
          'Portuguese — Brazil, overwhelmingly. It is the only large nearshore source of native Brazilian Portuguese, which matters because European and Brazilian Portuguese are not interchangeable to a customer. A Brazil footprint also covers Spanish and English in one site.',
          'French — Morocco, Tunisia and Mauritius for European French; Canada (Quebec and New Brunswick) for North American French. The distinction is not cosmetic: Quebec French and Parisian French differ enough that customers notice, and Canadian programmes often have regulatory reasons to source domestically.',
          'German, Dutch, Nordic languages — Eastern Europe (Poland, Czechia, Romania) and Portugal, which has built a genuine multilingual hub. These are scarce and expensive everywhere; there is no cheap answer.',
          'Arabic — Egypt and the Gulf. Dialect matters more than in most languages: Egyptian, Levantine and Gulf Arabic are not freely substitutable for customer-facing work.',
          'Mandarin, Cantonese, Japanese, Korean — Malaysia and Singapore for regional hubs; in-market otherwise. Japanese and Korean are the hardest to source at any volume outside their home markets.',
          'Tagalog and Southeast Asian languages — the Philippines and Malaysia.',
        ],
      },
      {
        heading: 'The structural problem with rare languages',
        level: 2,
        paragraphs: [
          'A language that represents two percent of your volume cannot be staffed the way the other ninety-eight percent is. One or two agents covering a language is not a staffing plan — it is a single point of failure with holidays, sickness and attrition attached.',
          'The arithmetic is unforgiving. To cover one language across business hours with any resilience you need roughly three to four agents minimum, regardless of how little volume there is. Below that, one resignation takes the language offline.',
        ],
        bullets: [
          'Pool rare languages into a multilingual hub site rather than scattering single speakers across delivery centres.',
          'Cross-train rare-language agents on an English queue so they are productive between calls rather than idle — this is what makes low-volume languages economically viable at all.',
          'Consider asynchronous channels for the rarest languages. Email and chat tolerate a coverage gap that voice does not.',
          'Set explicit, different SLAs by language. Promising the same answer speed on a language you have three agents for is a commitment you will miss.',
        ],
      },
      {
        heading: 'Testing fluency you do not speak',
        level: 2,
        paragraphs: [
          'The practical difficulty with multilingual hiring is that your team usually cannot assess the languages you are hiring for. That is exactly the condition where inflated self-reported fluency survives into production.',
        ],
        bullets: [
          'Insist that a native speaker scores the recording, and ask who they are and what rubric they used.',
          'Ask for dialect specificity, not just language. "Arabic" and "Portuguese" on a CV are not sufficient detail.',
          'Have a customer-facing employee or trusted native speaker on your side spot-check a sample of hires independently. If nobody on your side can, you are trusting the provider entirely.',
          'Test written as well as spoken for any language handling chat or email. The two diverge sharply.',
        ],
      },
      {
        paragraphs: [
          'Our /roles/bilingual-agents page covers the screening process, and /locations covers where each language pool sits. For programmes that are genuinely English-plus-Spanish rather than multilingual, /blog/hiring-bilingual-agents-mexico is the more directly relevant guide.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where can I hire Portuguese-speaking support agents?',
        a: 'Brazil is the practical answer for native Brazilian Portuguese, and it is the only large nearshore source. Brazilian and European Portuguese are noticeably different to customers, so specify which you need. A Brazil site typically covers Portuguese, Spanish and English together.',
      },
      {
        q: 'How many agents do I need to cover a low-volume language?',
        a: 'Roughly three to four minimum to cover business hours with any resilience, almost regardless of volume. One or two agents is a single point of failure — holidays, sickness or one resignation takes the language offline. Below that threshold, consider asynchronous channels or pooling the language into a multilingual hub.',
      },
      {
        q: 'How do I test fluency in a language nobody on my team speaks?',
        a: 'Require that a native speaker scores recorded samples, and ask who they are and what rubric they used. Ask for dialect specificity rather than just the language. Where possible have a trusted native speaker on your side spot-check a sample of hires independently — if nobody on your side can assess it, you are trusting the provider completely.',
      },
      {
        q: 'Is European or Latin American Spanish better for US support?',
        a: 'Latin American Spanish, in almost all cases, and specifically Mexican or neutral Latin American for US Hispanic customers. European Spanish is noticeably different in vocabulary and intonation and reads as foreign to most US Spanish speakers.',
      },
    ],
  },
  {
    slug: 'contact-centre-outsourcing-uk',
    title: 'Contact Centre Outsourcing in the UK: Staffing vs Managed Service',
    excerpt:
      'UK buyers comparing contact centre providers are usually shown one model: a managed service that runs the operation for you. There is a second option, and for operations that already run a good floor it is often the better one.',
    metaTitle: 'Contact Centre Outsourcing in the UK',
    metaDescription:
      'UK contact centre outsourcing vs a staffing model: who manages the agents, GDPR and data residency, offshore and nearshore options, and which model fits.',
    publishedAt: '2026-07-21',
    author: 'Call Center Staffing',
    category: 'Comparison',
    readingMinutes: 7,
    heroImage: '/images/cc-agent-monitor.jpg',
    primaryKeyword: 'UK contact centre outsourcing',
    relatedPostSlugs: [
      'nearshore-vs-offshore-high-volume-support',
      'customer-support-staffing-agencies-latin-america',
      'in-house-vs-outsourced-call-center',
    ],
    sections: [
      {
        paragraphs: [
          'Search for contact centre outsourcing in the UK and the results are dominated by established domestic providers offering a managed service: their supervisors, their quality framework, their floor. That is a legitimate model and for plenty of operations it is the right one.',
          'It is not the only model, and UK buyers are shown it disproportionately. A staffing arrangement — agents employed by someone else but working inside your operation, on your systems and your quality framework, managed by your team leaders — solves a different problem. Which one fits depends on whether your constraint is capability or capacity.',
        ],
      },
      {
        heading: 'The distinction in practice',
        level: 2,
        bullets: [
          'Managed service: the provider runs it. You buy an outcome and manage a commercial relationship. Suits operations that do not have, and do not want to build, contact centre capability.',
          'Staffing: you run it, someone else employs the people. You keep the process, the quality framework and the institutional knowledge. Suits operations that already run a good floor and are constrained by recruitment and employment overhead.',
        ],
        paragraphs: [
          'The test is simple: when an agent does not know what to do, whose supervisor do they ask? Everything else follows from that.',
        ],
      },
      {
        heading: 'What is specific to UK buyers',
        level: 2,
        bullets: [
          'UK GDPR and data residency. Where personal data is processed and stored, and under what transfer mechanism, is a first-order question rather than a compliance footnote — particularly for offshore delivery. Ask about the specific site, not the company.',
          'FCA-regulated work. If your queue touches regulated financial services, agent competence, call recording, complaints handling and record-keeping requirements shape what can be delegated and where it can sit.',
          'Ofcom rules on abandoned and silent calls for any outbound programme. These are enforced, and a provider that cannot describe how they stay inside the thresholds is a risk.',
          'Employment structure. IR35, agency worker regulations and TUPE all bear on how contact centre staff can be engaged. TUPE in particular catches buyers out when a managed service ends and staff transfer implications surface late.',
        ],
      },
      {
        heading: 'Delivery options for UK operations',
        level: 2,
        bullets: [
          'UK onshore — accent familiarity, straightforward data residency, and the natural choice for regulated or brand-sensitive queues. The most expensive option and the tightest labour market.',
          'Nearshore Europe — Poland, Portugal, Romania and Ireland. Strong for multilingual European coverage and closer to UK time than most alternatives.',
          'South Africa — increasingly the default UK offshore choice. Time zone is within two hours of the UK, accent is well received by British customers, and the industry has been built substantially around UK clients.',
          'Philippines and India — the largest and most cost-efficient pools, best suited to documented high-volume and overnight work rather than complex or brand-critical conversations.',
        ],
        paragraphs: [
          'South Africa deserves particular attention for UK buyers. The combination of near-identical working hours and an accent that UK customers respond well to solves the two problems that usually push British operations back onshore.',
        ],
      },
      {
        heading: 'Which model fits',
        level: 2,
        bullets: [
          'Your process changes frequently: staffing. Every change through a managed-service layer has to be renegotiated and re-trained.',
          'Customer conversations are part of the product: staffing. Delegating them tends to erode the thing that made them good.',
          'You lack team leaders and do not want to build that capability: managed service. Staffing fails badly without supervisory capacity on your side.',
          'The queue is a documented, stable cost centre: managed service will usually run it more efficiently than you will.',
        ],
      },
      {
        paragraphs: [
          'We operate the staffing model, so read the above as informed rather than neutral. The recommendation we most often give against our own interest: if you do not have team leaders with capacity to manage additional agents, a managed service is the right call, and staffing will disappoint you.',
          'Our /locations/europe and /locations/south-africa pages cover the delivery detail, and /tools/staffing-calculator sizes a cohort against your own volume.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the difference between contact centre outsourcing and staffing in the UK?',
        a: 'Outsourcing means a provider runs the operation with their own supervisors, quality framework and process, and you buy an outcome. Staffing means agents work inside your operation on your systems and your quality framework, managed by your team leaders, while the agency carries recruitment, employment and payroll. The practical test is whose supervisor an agent asks when they do not know what to do.',
      },
      {
        q: 'Where do UK companies usually offshore contact centre work?',
        a: 'South Africa has become the common choice, because it sits within about two hours of UK time and its accent is well received by British customers, with an industry built substantially around UK clients. The Philippines and India remain the largest and most cost-efficient pools and suit documented high-volume or overnight work. Nearshore Europe — Poland, Portugal, Romania, Ireland — is used for multilingual European coverage.',
      },
      {
        q: 'How does UK GDPR affect offshore contact centre delivery?',
        a: 'Where personal data is processed and stored, and under what transfer mechanism, becomes a primary design question rather than a compliance detail. Ask about the specific delivery site rather than the company as a whole, and confirm how call recordings and customer data are stored, who can access them, and what happens to that data when the contract ends.',
      },
      {
        q: 'Does TUPE apply to outsourced contact centre staff?',
        a: 'It can, and it catches buyers out most often at the end of a managed-service contract when staff transfer implications surface late. It is worth taking advice on TUPE exposure before signing rather than before exiting, because the exit terms are much harder to negotiate once the relationship is established.',
      },
    ],
  },
];
