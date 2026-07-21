import type { Insight } from './types';

export const INSIGHTS: Insight[] = [
  {
    slug: 'call-center-understaffed',
    title:
      "Your Call Center Is Understaffed — Here's How to Catch Up Without Wrecking Quality",
    symptom:
      'Your call center is chronically understaffed — every cohort lands smaller than planned, and your team is paying for it on the floor.',
    excerpt:
      'When the floor is short, every instinct says "post more jobs." That instinct is wrong. Understaffed call centers almost always have a calendar problem, not a sourcing problem — and posting more jobs makes it worse.',
    metaTitle:
      'Call Center Understaffed? The Calendar Fix That Works',
    metaDescription:
      'Your call center is understaffed and the floor is paying for it. The fix is not more job postings — it is forecast-aligned planning, a warm bench, and cohort waves. Here is the playbook.',
    primaryKeyword: 'call center understaffed',
    heroImage: '/images/cc-agent-night.jpg',
    diagnostics: [
      'SLA was missed in three of the last four weeks, and the misses are clustered in your peak intervals.',
      'Cohort size is shrinking class-over-class — you planned 20 starts, you got 14, then 11.',
      'Weekly hire vs attrition has been net negative for thirty days or more.',
      'Your operations team is running recruiting on nights and weekends because in-house recruiting is behind.',
      'The training calendar has been pushed back two or more times in the last sixty days.',
      'Supervisors are back on the phones, and tenured agents are working unplanned overtime.',
    ],
    sections: [
      {
        paragraphs: [
          "If you searched for \"call center understaffed,\" you already know the symptoms. SLA is slipping in your peak intervals. Supervisors are taking calls. The training class that was supposed to put twenty new agents on the floor on Monday actually put eleven there. And your in-house recruiting team is being asked, again, why the funnel is behind.",
          "The instinct in this moment is almost always wrong. The instinct says: post more jobs, run more ads, source harder. In our experience running staffing for hundreds of contact centers, that instinct is what keeps operators stuck — because understaffed call centers almost always have a calendar problem, not a sourcing problem, and posting more jobs makes the calendar worse.",
        ],
      },
      {
        heading: 'The "calendar problem" reframe',
        level: 2,
        paragraphs: [
          "Most operators describe being understaffed as \"we need to hire 60 agents.\" What they actually mean is \"by the time my training class on the 15th is full, I need 60 hot, screened, voice-checked, drug-cleared, background-cleared, offer-accepted, start-date-confirmed candidates ready to walk in the door.\" Those two requests look similar on a job rec. They are very different problems.",
          "The first request optimises for the top of the funnel. The second optimises for the date. If the recruiting plan is not built backwards from the training calendar — including buffers for pre-employment fall-off, ghosted offers, and last-minute drops — every cohort will show up under-sized. Which is exactly what is happening to you right now.",
          "Reframing it as a calendar problem changes what you do next. You stop asking \"how do we source more?\" and start asking \"what date does the seat need to be filled, and what has to be true on the dates leading up to it?\" That single shift is the single most reliable way to catch a chronically understaffed call center back up.",
        ],
      },
      {
        heading: 'Why posting more jobs makes it worse',
        level: 2,
        paragraphs: [
          "When an operation is behind plan, the easiest move politically is to widen the funnel. Post more roles. Buy more ads. Lower the bar on the screen so more candidates make it through. We see this every quarter, and it almost always lengthens the recovery rather than shortening it.",
          "The reason is simple: when the bar drops on the recruiting screen, attrition rises in nesting and at day 60. The cohort you rushed onto the floor in March shows up as a 30 percent attrition spike in May, which forces another rushed cohort in June, which produces another spike in August. Operators stuck in this loop describe it as \"we have not been fully staffed in fourteen months.\" The loop is the symptom.",
          "Catching up sustainably requires the opposite move. Hold the bar steady, fix the calendar, and accept that the first cohort post-fix may still be small — but the second one will be on plan, and the third will be on plan with a warm bench. That is the pattern we see every time.",
        ],
      },
      {
        heading: 'The two-week diagnostic',
        level: 2,
        paragraphs: [
          "Before you change anything, run a two-week diagnostic. The point is to figure out where in the calendar the funnel is actually breaking — because the fix is different depending on the answer.",
          'Track these five numbers, by week, for the last sixty days:',
        ],
        bullets: [
          "Applications received vs applications passing the phone screen — this tells you whether the top of funnel is the issue or the screen is too tight.",
          "Phone-screen passes vs offers extended — this tells you whether interview drop-off is the bottleneck.",
          "Offers extended vs offers accepted — this is your ghost rate. Above 25 percent is a comp or speed-of-process problem.",
          "Offers accepted vs class start show-rate — this is your no-show rate. Above 15 percent means the gap between offer and start is too long.",
          "Class start vs day-30 retention — this is your wrong-fit rate. Above 25 percent means the screen is letting through people who should not be there.",
        ],
      },
      {
        paragraphs: [
          "Whichever number is worst tells you which fix to start with. Operators who skip the diagnostic and just \"source more\" are usually fixing the wrong stage, which is why they stay understaffed.",
        ],
      },
      {
        heading: 'Fix #1: Forecast-aligned planning',
        level: 2,
        paragraphs: [
          "The single highest-leverage move is to rebuild your hiring plan as a date-driven document, not a headcount-driven one. Three numbers should be agreed and signed off by operations, training and recruiting on the same page:",
        ],
        bullets: [
          "The class start date and class size each cohort needs to absorb (training capacity is a hard ceiling — over-hiring just to be safe overloads trainers and damages the cohort you have already paid to recruit).",
          "The expected pre-employment fall-off rate (drug, background, ghosted offers) — typically 15 to 25 percent for frontline US roles. Hire your offer count against this, not your seat count.",
          "The 30, 60 and 90-day attrition assumption baked into the workforce plan, so the account manager knows how much over-pipeline buffer the operation actually needs.",
        ],
      },
      {
        paragraphs: [
          "When those three numbers exist on a shared document, the recruiting plan stops being a guess. The team can work backwards from class-start: written offers must land by date X, final-round interviews by date X-7, first-round screens by date X-14. Now \"behind\" is a number, not a feeling — and you can see it three weeks in advance instead of three days late. Our /how-we-work walkthrough shows the exact template our team uses on every engagement.",
        ],
      },
      {
        heading: 'Fix #2: Build a two-week warm bench',
        level: 2,
        paragraphs: [
          "A warm bench is the single most underused tool in contact-center recruiting. It means: at any given moment, you have three to five fully-screened, voice-checked, offer-ready candidates who have not yet been started — sitting in your pipeline as the buffer for cohort shrinkage.",
          "When a class loses three people to no-shows on Monday morning, you are not scrambling. You are calling three people from the bench and starting them with the cohort. The class lands on plan, the trainer gets the size she was promised, and the floor sees full coverage three weeks later instead of empty seats.",
          "Every operator we talk to who is consistently fully-staffed runs a warm bench. Every operator who is chronically understaffed does not. The math is straightforward: a 5-person warm bench costs almost nothing to maintain (the recruiting work is already done), and it is the difference between a 92 percent and 100 percent class-fill rate.",
        ],
      },
      {
        heading: 'Fix #3: Move from monthly to weekly cohort cadence',
        level: 2,
        paragraphs: [
          "If you are running monthly classes and you are behind, switching to a weekly or bi-weekly cadence is almost always the right move during the catch-up phase. Smaller, more frequent classes do three things: they let trainers calibrate cohort over cohort, they smooth the demand on the recruiting funnel, and they give you a feedback loop on screening quality every week instead of every month.",
          "The transition is real work — you need a trainer cohort that can run two parallel streams for the first month — but operators we work with who make this switch typically catch up to plan inside two months, then return to a monthly cadence once the bench is rebuilt.",
        ],
      },
      {
        heading: 'When to call in a specialist',
        level: 2,
        paragraphs: [
          "There is a clear inflection point where in-house recruiting alone cannot dig out. If your team is spending more than half its week on top-of-funnel sourcing instead of screening and pipeline management, if the funnel has been net-negative for thirty days, or if you are now running cohorts in two regions in parallel — the math has tipped. A specialist partner with a trained-agent database, a calibrated voice-screen, and a track record placing into your role will fill faster and at higher quality than rebuilding the funnel from scratch.",
          "That is the work we do. Our /solutions/scaling-existing-call-center engagement is built specifically for operators who need to catch up without dropping the QA bar — cohort waves, frozen screening criteria, weekly calibration. If you want a senior account manager to draft a written plan against your forecast, /services/call-center-recruitment walks through what you would receive.",
        ],
      },
    ],
    fixes: [
      {
        title: 'Map open requisitions to dates, not headcount',
        body: 'Rewrite every open req as a date-driven need: "20 trained agents on the floor by July 15." Work backwards from there. Most chronically understaffed operations are still managing headcount instead of calendars.',
      },
      {
        title: 'Pre-build a 2-week warm bench',
        body: 'Keep three to five fully-screened, voice-checked, offer-ready candidates in pipeline as a buffer at all times. The recruiting work is already done. This single move is the difference between 92 and 100 percent class-fill.',
      },
      {
        title: 'Move from monthly to weekly cohort cadence',
        body: 'During the catch-up phase, run smaller weekly or bi-weekly cohorts instead of one big monthly class. You will smooth the funnel, calibrate trainers faster, and get screening feedback every week instead of every month.',
      },
      {
        title: 'Add a 72-hour pre-start health check',
        body: 'Three days before class-start, every accepted candidate gets a short call from the account manager — confirm shift, confirm address, confirm laptop pickup. No-show rate drops by half. This single call has more impact than any retention bonus.',
      },
      {
        title: 'Track no-show rate as a leading indicator',
        body: 'Most operators only see the cohort-shrinkage problem when the class actually starts. Tracking weekly no-show rate at the offer-accept stage gives you three weeks of warning instead of three days.',
      },
    ],
    faqs: [
      {
        q: 'Our call center has been understaffed for months. How long does it actually take to catch up?',
        a: 'For most operators we work with, two cohorts. The first cohort post-diagnostic typically lands at 90 to 95 percent of plan because the warm bench has not been built yet. The second cohort lands at 100 percent. By the third class, you are running on plan with a maintained bench. The trap to avoid is treating the first cohort as proof that the fix is not working — it is the second cohort that confirms it.',
      },
      {
        q: 'Should we lower the screening bar temporarily to catch up faster?',
        a: 'No. We see this every quarter and it almost always lengthens the recovery rather than shortening it. When the bar drops on the screen, attrition spikes in nesting and at day 60, which forces another rushed cohort, which produces another spike. Operators stuck in this loop describe it as "we have not been fully staffed in fourteen months." Hold the bar. Fix the calendar.',
      },
      {
        q: 'Do we need an external staffing partner, or can we fix this in-house?',
        a: 'You can usually fix it in-house if your funnel diagnostic is healthy at the top — applications coming in, screen pass rate above 25 percent, ghost rate below 20 percent. If any of those are broken, or if your in-house team is spending more than half its week on top-of-funnel sourcing instead of screening, an external partner with a pre-screened database is faster. The math we use: if your in-house cost-per-ramped-and-retained-agent is above $4,000, a specialist is almost certainly cheaper.',
      },
    ],
    relatedSlugs: ['cant-find-call-center-agents', 'sla-slipping'],
  },

  {
    slug: 'cant-find-call-center-agents',
    title: "Can't Find Call Center Agents? The Sourcing Pool Isn't the Problem.",
    symptom:
      'Your job postings get applicants — but few make it past phone screen, and almost none stay through nesting.',
    excerpt:
      'When operators say "we cannot find call center agents," they almost always mean "the people we are finding do not stay." That is not a sourcing problem. That is a screen problem. Here is how to fix it.',
    metaTitle:
      "Can't Find Call Center Agents? Fix Your Screen",
    metaDescription:
      'Job postings get applicants but few pass the phone screen and fewer stay through nesting. The pool is not the problem — the screen is. Here is how specialist recruiters fix it.',
    primaryKeyword: "can't find call center agents",
    heroImage: '/images/cc-agent-smile.jpg',
    diagnostics: [
      'Phone-screen pass rate is below 20 percent — most candidates do not survive the first conversation.',
      'Hire-to-nest-survival rate is below 60 percent — agents are washing out before they take a live call.',
      '90-day attrition is above 25 percent and climbing class-over-class.',
      'Recruiters keep telling operations "the pool has changed" — and operations is starting to believe them.',
      'Offer ghost rate is creeping up despite no change in compensation.',
      'Sourcing platform results are getting worse even though spend on those platforms is going up.',
    ],
    sections: [
      {
        paragraphs: [
          'Operators tell us "we cannot find call center agents" roughly once a week. We have learned to ask one follow-up question before saying anything else: "How many people apply, and how many pass the phone screen?"',
          "The answer almost always reveals the actual problem. Applications are usually fine — sometimes higher than they were two years ago. The breakdown is downstream: most candidates do not survive the phone screen, the few who do drop off in offer stage, and the cohort that finally makes it to nesting attrits at 30 to 40 percent before they ever touch a live queue. That is not a sourcing problem. That is a screen problem dressed up as a sourcing problem.",
        ],
      },
      {
        heading: 'The "sourcing pool" myth',
        level: 2,
        paragraphs: [
          'There is a story you will hear in almost every operations meeting right now: the labour market has changed, the agents are not out there, the gig economy is eating the pool, the new generation will not work phones. Some of that is true at the margins. None of it is the reason your funnel is broken.',
          "We staff 14 countries and we run live engagements every week. The pool is not the problem. The pool is bigger than it was five years ago in most of our regions. What has changed is that the people in the pool are harder to evaluate with a 1990s phone screen — and most call center recruiting funnels are still using a 1990s phone screen.",
          'When operators say "the pool has changed," what they almost always mean is "our funnel stopped working." The fix is not to mourn the pool. The fix is to rebuild the screen.',
        ],
      },
      {
        heading: "Why generalist firms can't fix this",
        level: 2,
        paragraphs: [
          'A general staffing firm will respond to the "we cannot find agents" complaint by widening the funnel — more job boards, broader sourcing parameters, lower keyword bar on resume parsing. Volume goes up at the top, conversion stays flat, and three months later the operator is running another search.',
          "Specialist call-center recruiters do the opposite. We narrow the funnel by sharpening the screen, because we know the QA scorecard, we know the call types, and we know what tenure looks like in the role. The result is a smaller shortlist, but with higher conversion at every downstream stage. Operators routinely tell us they receive fewer candidates from us and place more of them — because the candidates are right.",
          "If your current staffing partner cannot tell you what your specific QA scorecard rewards and how their screen reflects it, they are running a generalist screen against a specialist role. That is the structural problem.",
        ],
      },
      {
        heading: 'What recruiting against a QA scorecard looks like',
        level: 2,
        paragraphs: [
          "The single highest-leverage move in fixing a broken screen is to align the screen with the QA scorecard your floor actually uses. Most recruiters interview for resume keywords, availability, and a fuzzy notion of \"customer-service mindset.\" QA teams score against empathy, problem identification, ownership, voice and tone, and call control. Those are very different rubrics.",
          "When the recruiting screen and the QA scorecard agree on what \"good\" looks like, the predictive validity of the screen jumps dramatically — agents who pass the screen pass QA, agents who pass QA stay on the floor, and the funnel starts working again.",
        ],
        bullets: [
          'Pull the actual QA scorecard your floor uses. Read it with your recruiting team, line by line.',
          'Identify the three to five behaviours QA scores most heavily. These become the screening criteria.',
          'Rewrite the phone-screen guide so every question maps to one of those behaviours, not to a resume bullet.',
          'Score every candidate on the same rubric, with the same weighting QA uses on a live call.',
          "If your QA team and your recruiting team have never met, they should. They are screening for the same job — they should be using the same definition.",
        ],
      },
      {
        heading: 'Voice samples and scenario tests',
        level: 2,
        paragraphs: [
          "Resumes do not predict who can hold a courteous, clear conversation under mild pressure. Voice samples and scenario tests do — and they are the cheapest screening tool you have.",
          "A two-minute recorded voice sample, captured during the screen, eliminates more bad hires than any other single intervention. It tells you tone, clarity, energy, and basic call-handling instinct. It costs nothing. And almost no in-house funnel uses one.",
          "A short scenario test — \"a customer calls in upset that their order has not arrived, walk me through the first thirty seconds\" — tells you problem identification, ownership, and empathy in 60 seconds. Score it against the QA rubric. The candidates who score above 4 out of 5 typically pass nesting at 80+ percent. The ones below 3 usually wash out before day 30.",
        ],
      },
      {
        heading: 'Fix the screen, not the volume',
        level: 2,
        paragraphs: [
          "The temptation when you cannot find call center agents is to spend more on top-of-funnel ads. In our experience this is almost always the wrong move. More volume against a broken screen produces more bad hires faster — which raises attrition, which empties the floor again, which raises the pressure to lower the bar further.",
          "The right move is the opposite. Tighten the screen. Add the voice sample. Add the scenario. Score against QA. Watch your conversion rates per stage, not your top-of-funnel volume. Operators who make this shift typically see phone-screen pass rate climb from 18 percent to 35 percent inside two cohorts — because the screen is now selecting for behaviours that survive the floor instead of resume keywords that do not.",
          "The way we do this every day is documented in /services/call-center-recruitment, and the underlying philosophy is in /how-we-work.",
        ],
      },
      {
        heading: 'Why retainer firms drop the bar in week 4',
        level: 2,
        paragraphs: [
          "One pattern worth naming: retainer-based generalist recruiting firms have a structural incentive to lower the bar around week 4 of an engagement. The fee has been paid. The hours are sunk. The path of least resistance is to push more candidates through and call the engagement complete.",
          "We have seen this pattern enough that we built our model around it. We charge per agent, not per retainer, so our incentive aligns with yours: the agent has to make it onto the floor and through guarantee for us to be paid in full. That is the model in /why-us if you want the longer read.",
        ],
      },
    ],
    fixes: [
      {
        title: 'Replace "phone screen" with structured behavioural interview',
        body: 'Throw out the resume-walk script. Build a 15-minute behavioural interview scored against the same rubric your QA team uses. Same questions, same scoring, every candidate. Predictive validity jumps overnight.',
      },
      {
        title: 'Add a recorded voice sample to every shortlist',
        body: 'Two minutes, recorded during the screen. Voice quality, tone, clarity, energy. The single cheapest screening tool you have. Almost no in-house funnel uses one. Operators who add it cut nesting wash-out by half.',
      },
      {
        title: 'Score against your QA scorecard, not generic CX rubric',
        body: 'Pull the actual scorecard your QA team uses on the floor. Identify the three to five behaviours scored most heavily. Rewrite every screening question to map to one of them. Stop screening for resume keywords.',
      },
      {
        title: 'Track no-show rate weekly',
        body: 'Most operators only see the no-show problem when the class starts. Tracking weekly no-show rate at the offer-accept stage gives you three weeks of warning. If the rate is above 15 percent, your offer-to-start window is too long.',
      },
      {
        title: 'Pre-screen for tenure-intent',
        body: 'Add two questions to every screen: "What is the longest job you have held in the last five years?" and "What would make you stay in this role for two years?" Candidates who cannot answer either typically attrit before day 60.',
      },
    ],
    faqs: [
      {
        q: 'Has the call center labour pool actually shrunk, or is it just our funnel?',
        a: "In most regions we recruit in, the pool is the same size or larger than it was five years ago. What has changed is that the candidates in the pool are harder to evaluate with a generic phone screen. When operators say they cannot find call center agents, the breakdown is almost always at the screen and offer stages, not at applications. Pull your last 60 days of funnel data — applications received, screen pass, offer accept, day-30 retention — and the bottleneck will be obvious. Almost always it is the screen.",
      },
      {
        q: 'Should we just raise pay to attract better candidates?',
        a: "Sometimes, but only after the screen is fixed. We have watched operators raise pay 12 percent, see no improvement in the funnel, and conclude the labour market is broken. The market is not broken. The screen is letting through people who would have washed out at any pay level. Fix the screen first. If pay still needs to move after that, the case will be obvious — and it will pay back, because better-screened agents stay long enough to amortise the higher comp.",
      },
      {
        q: 'How do specialist recruiters source differently from in-house teams?',
        a: 'The honest answer is that the sourcing channels are not radically different — job boards, referrals, trained-agent databases, partner networks. The difference is in the screen. We have a calibrated voice-screen, a behavioural-interview rubric tied to the QA scorecard for the role, and a database of candidates who have already been screened against that rubric. So our shortlist is smaller, but conversion at every downstream stage is higher. Operators tell us they receive fewer candidates from us and place more of them.',
      },
    ],
    relatedSlugs: ['call-center-understaffed', 'sla-slipping'],
  },

  {
    slug: 'sla-slipping',
    title: "SLAs Slipping? It's a Recruiting Problem Disguised as an Operations Problem.",
    symptom:
      "Service levels are missed. Coaching isn't moving the number. WFM has the right model. Operations is doing the work.",
    excerpt:
      "When SLA slips and coaching cannot move the number, the problem is almost never on the floor. It is upstream — in the cohorts that did not survive nesting, the WFM ramp curve that does not match reality, and the screen that is letting through wrong-fit hires.",
    metaTitle:
      'SLA Slipping in Your Call Center? Look Upstream',
    metaDescription:
      'SLAs are missed. Coaching is not moving the number. WFM has the right model. The problem is recruiting, not operations. Here is how specialist recruiters change the math.',
    primaryKeyword: 'SLA slipping call center',
    heroImage: '/images/cc-team-meeting.jpg',
    diagnostics: [
      'Service level is missed in your peak intervals, even when total daily SL hits target.',
      'AHT is trending up class-over-class — newer cohorts are slower than older ones.',
      'Occupancy is running higher than the WFM-modelled target.',
      'Recent cohort QA scores are trending below 85 — and below the prior cohort.',
      '90-day attrition is above 25 percent, and you can name the cohorts driving it.',
      'Supervisors are back on the phones during peak — coaching time is being eaten by call-handling.',
    ],
    sections: [
      {
        paragraphs: [
          "When SLA slips, the first conversation in every operations meeting is about operations. Are we coaching enough? Is the schedule right? Is WFM ramping correctly? Is the queue logic doing what we think? Those are the right questions to ask. They are usually not where the answer is.",
          "Across the operators we work with, the pattern is almost universal: chronic SLA misses are recruiting problems disguised as operations problems. The cohort that was supposed to put 18 fully-ramped agents on the floor in week 6 actually delivered 11. The WFM model assumed 6-week ramp; the actual ramp is 9. The screen passed three agents who never should have made it past phone screen, and they are now driving 40 percent of your AHT inflation. None of those show up on the operations dashboard. All of them show up as missed SLA.",
        ],
      },
      {
        heading: "Why SLA misses look like ops problems but aren't",
        level: 2,
        paragraphs: [
          "An SLA miss is the most visible symptom in a contact center. It shows up on the daily report, the weekly executive read, the client SLR. So the natural reaction is to look at the most visible levers — coaching, scheduling, queue logic — and pull harder.",
          "The problem is that those levers have small coefficients in the SL equation when the upstream cohort math is broken. You can coach a wrong-fit agent for six months and not move their AHT meaningfully. You can schedule perfectly against a WFM model that assumes 90 percent nest-survival when the actual rate is 65, and you will be short on the floor every week. You can run perfect queue logic and still miss SL because the agent count is wrong.",
          "The math is unforgiving. The visible levers cannot fix invisible upstream breakage. Which is why most chronic SLA misses are eventually traced back to a recruiting and ramp problem that no one was tracking.",
        ],
      },
      {
        heading: 'The three most common upstream causes',
        level: 2,
        paragraphs: [
          "Across hundreds of post-mortems on SL-failing operations, the same three upstream causes show up over and over. None of them are operations problems. All of them produce SL misses on the operations dashboard.",
        ],
        bullets: [
          "Cohort shrinkage between class-start and nest-completion. The class that started at 20 ended at 13. WFM modelled for 18. You are 5 short on the floor every week and no one is naming it.",
          "Wrong-fit hires that pass the screen but never reach floor performance. They drag AHT, occupancy and CSAT — and the coaching investment to fix them never pays back.",
          "WFM ramp curves that do not match the actual nest-survival pattern. The model assumes a 6-week ramp to 95 percent. Reality is a 9-week ramp to 80 percent. The schedule is structurally short by 12 to 18 percent.",
        ],
      },
      {
        heading: 'Fix #1: Cohort-size accuracy at start, not at end of training',
        level: 2,
        paragraphs: [
          'Most operations teams measure cohort size at training start. The number that actually matters is cohort size at nest-completion — six to eight weeks later, when those agents are on the floor handling live volume.',
          "If you only measure at start, you have no early warning when nesting is breaking down. By the time the missing agents show up as a staffing gap on the schedule, you are eight weeks too late to recruit a replacement cohort. By the time SL drops, you are twelve weeks late.",
          "The fix: track cohort attrition weekly during training and nesting, with a dashboard that compares each cohort to the WFM assumption. If a cohort is tracking 10 percent below the assumption at week 3, you have time to start a recovery cohort. If you only see it at week 8, you do not.",
        ],
      },
      {
        heading: 'Fix #2: Nesting-survival rate (the lever no one tracks)',
        level: 2,
        paragraphs: [
          "Of every metric we look at across operators, nest-survival rate is the most predictive of long-term SL performance, and the least-tracked. It is the percentage of agents who graduate training and are still on the floor 30 days post-nest.",
          'Best-in-class operations run 85 to 90 percent nest-survival. Operators with chronic SLA problems are usually running 60 to 70 — and they almost never know the number, because no one is tracking it as a stand-alone metric.',
          "The fix is structural. Add nest-survival to the weekly ops review. Track it by cohort, by source channel, by team-lead. Patterns appear inside two months: candidates from board X are graduating fine but failing at day 45; cohort 7 had a different mentor than cohort 6 and the survival gap is 14 points; the screening change in March is now showing up as an attrition drop in May. None of that is visible without the metric.",
        ],
      },
      {
        heading: 'Fix #3: 30-day attrition flag',
        level: 2,
        paragraphs: [
          "Day-30 attrition is a leading indicator of every SL problem you will have in the next six months. It tells you whether the screen is working, whether the ramp is working, and whether the team-lead bench is working. It is the single number we ask operators for first when they describe slipping SLAs.",
          "If day-30 attrition is above 15 percent, your screen is letting through wrong-fit hires faster than the floor can absorb them. Above 25 percent, the floor is structurally short and SL cannot recover until the upstream funnel is fixed.",
          "The fix is to flag day-30 attrition in the weekly ops review with the same prominence as SL itself. They are the same number, separated by 90 days. /blog/how-to-reduce-call-center-turnover walks the playbook in detail.",
        ],
      },
      {
        heading: 'Fix #4: Ramp accuracy in WFM',
        level: 2,
        paragraphs: [
          "Most WFM models use a ramp assumption that was set when the model was first stood up — and never revisited against actual cohort data. The result: schedules built against a 6-week ramp when reality is 9 weeks. Operations is structurally short on the floor every week and no one is naming it.",
          'The fix is to recalibrate the ramp curve every quarter against actual nest-survival data. If the last three cohorts ramped to 75 percent productivity by week 8 instead of 90 percent by week 6, the WFM model needs to reflect that — and the recruiting plan needs to compensate by sizing classes 15 to 20 percent larger to hit the same floor count.',
        ],
      },
      {
        heading: 'How a specialist recruiter changes the math',
        level: 2,
        paragraphs: [
          "When the upstream causes above are fixed, SL almost always recovers without any change to coaching, scheduling, or queue logic. The math works out: cohorts hit nest at 88 percent instead of 65, day-30 attrition drops from 28 to 14, the WFM model matches reality, and the floor is staffed against the actual demand curve for the first time in a year.",
          "A specialist staffing partner accelerates this because we see the upstream metrics every week and we calibrate the screen against your actual nest-survival data. /solutions/scaling-existing-call-center is built around exactly this loop. /services/call-center-recruitment walks through the full engagement model.",
          "If your supervisors are back on the phones, your SLA isn't the problem — your screen is. Fix the upstream and the SL number takes care of itself.",
        ],
      },
    ],
    fixes: [
      {
        title: 'Track cohort completion to nest, not class start',
        body: 'Stop reporting cohort size at training start. Report it at nest-completion six to eight weeks later. The gap between the two is your real attrition number — and the early warning your WFM team needs.',
      },
      {
        title: 'Add 30-day attrition flag to weekly ops review',
        body: 'Day-30 attrition is the leading indicator of every SL problem in the next six months. Above 15 percent and the screen is broken. Above 25 percent and the floor cannot recover until upstream is fixed. Track it weekly.',
      },
      {
        title: 'Recalibrate WFM ramp curve to actual nest-survival data',
        body: 'Most WFM models still use the ramp assumption from when they were first set up. Pull the last three cohorts. Compare actual ramp-to-productivity to modelled ramp. If reality is 8 weeks and the model says 6, the schedule is structurally short.',
      },
      {
        title: 'Move QA calibration from monthly to bi-weekly during ramp',
        body: 'Monthly QA calibration during ramp is too slow to catch drift. By the time the gap shows, the cohort is already breaking. Bi-weekly calibration during weeks 4 to 12 catches it inside one cohort instead of three.',
      },
      {
        title: 'Audit the screen, not the schedule',
        body: 'When SL slips, the first audit should be the recruiting screen, not the schedule. Pull the last 30 days of phone-screen scores. If pass rate is above 35 percent or below 15, the screen is broken. Fix that before touching WFM.',
      },
    ],
    faqs: [
      {
        q: 'Our coaching investment is high but SL is still slipping. What are we missing?',
        a: "Almost certainly an upstream issue. Coaching has a small coefficient in the SL equation when the cohort math is broken — you can coach a wrong-fit agent for six months and not move their AHT meaningfully. The first place to look is your nest-survival rate. If it is below 80 percent, the floor is structurally short regardless of how well the agents you keep are performing. Fix the upstream funnel first; the coaching investment will then start showing up in the numbers.",
      },
      {
        q: 'How quickly does fixing the recruiting funnel actually move SL?',
        a: 'Two cohorts, in our experience. The first post-fix cohort takes six to eight weeks to graduate and another four to ramp, so SL impact lands roughly three months after the screen is recalibrated. The second cohort confirms the trend. Operators who try to read the SL number on a four-week horizon usually conclude the fix is not working — it is the second cohort that proves it.',
      },
      {
        q: 'Is this really a recruiting problem if our WFM model is well-built?',
        a: 'Yes — because well-built WFM models still rely on assumptions about ramp speed, nest-survival, and attrition that are rarely revisited. The model can be mathematically perfect against the wrong inputs. We have audited operations with excellent WFM where the ramp assumption was three years old and 18 percent off reality. The model was right; the inputs were wrong; SL slipped every quarter. The fix lives in recruiting and training, not in WFM.',
      },
    ],
    relatedSlugs: ['call-center-understaffed', 'cant-find-call-center-agents'],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}
