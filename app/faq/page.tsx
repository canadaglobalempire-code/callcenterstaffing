import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { FAQSection } from '@/components/sections/FAQSection';
import { StaffingPlanCTA } from '@/components/sections/StaffingPlanCTA';
import { CTABand } from '@/components/sections/CTABand';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Call Center Staffing FAQ — Process, Cost, Compliance',
  description:
    'Common questions about call center staffing — process, pricing, screening, timelines, compliance. Get a written quote in one business day.',
  alternates: alternatesFor('/faq'),
  openGraph: {
    title: 'Call Center Staffing FAQ — Process, Cost, Compliance',
    description:
      'Answers on what call center staffing is, how to outsource a call center, screening, pricing ranges, compliance and engagement models.',
    url: `${site.url}/faq`,
    images: [
      {
        url: '/images/cc-team-meeting.jpg',
        width: 1200,
        height: 630,
        alt: 'Call Center Staffing FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Center Staffing FAQ — Process, Cost, Compliance',
    description:
      'Answers on what call center staffing is, screening, pricing ranges, compliance and engagement models.',
  },
};

const GETTING_STARTED_FAQS = [
  {
    q: 'What is call center staffing?',
    a: 'Call center staffing is the work of sourcing, screening, and placing agents, supervisors, QA analysts, and team leads into voice, chat, email, and back-office contact-center roles. Done well, it is more than recruiting — it is matching a vetted CX talent pool to a specific QA scorecard, language profile, schedule, and compliance regime, then sizing cohorts to a client ramp calendar so seats fill on the date the floor needs them.',
  },
  {
    q: 'How is Call Center Staffing different from a generalist staffing agency?',
    a: 'We only recruit into contact-center, BPO, and CX roles — no warehouse, no clerical, no light-industrial. Every recruiter on our team has either operated on a contact-center floor or recruited exclusively into them for 5+ years. Our database (100k+ trained agents across 14 countries) is built around CX scorecards, not a generic Boolean search of public profiles.',
  },
  {
    q: 'Do you replace our internal TA team?',
    a: 'No. We work alongside your in-house TA — most engagements have us owning frontline volume (agents, leads, QA) while TA owns leadership and corporate hires. Some clients hand us the entire CX function; others use us for surge cohorts and seasonal ramps only. We size around what you already have, not what we want to sell.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Send us your forecast, region preference, and QA scorecard via the form on our /contact page or the quote form embedded on every page. A senior account manager writes a custom plan — sourcing timeline, screening criteria, recommended region mix, cohort sizing — and returns it within one business day. No decks, no chatbots, no gated whitepapers.',
  },
];

const PROCESS_FAQS = [
  {
    q: 'How fast can you ramp a team?',
    a: 'First qualified shortlist within 72 hours of plan sign-off on most engagements. For 10–25 seats, full cohort live in 3–4 weeks. Larger ramps (50–200) run as cohort waves — first cohort live in 30–45 days, follow-on cohorts every two weeks until the seat plan is full. Bilingual or licensed roles add a week for verification.',
  },
  {
    q: 'How long does it take to launch a new call center?',
    a: 'A net-new site usually runs 60–120 days from kickoff to live calls, depending on whether you are leasing space, contracting a BPO partner, or going remote-first. Recruiting is rarely the long pole — site selection, IT/telephony, and client UAT typically are. We staff to the launch date you commit to and build cohort ramp around it.',
  },
  {
    q: 'How do you screen candidates?',
    a: 'A six-stage screen: resume and tenure review, a recorded voice sample (you hear it before you hire), a scenario-based assessment scored to your QA rubric, a structured behavioral interview against your competency model, two reference checks, and a final cohort-fit review by the lead recruiter. Bilingual fluency is scored to a level (B2/C1/etc.), not self-reported.',
  },
  {
    q: 'What does the staffing plan include?',
    a: 'A written plan covering: recommended region mix (onshore, nearshore, offshore), sourcing timeline by week, screening criteria mapped to your scorecard, cohort sizing and ramp curve, replacement guarantee terms, and a custom written quote. Plans are written by the senior recruiter who will own the engagement — not handed off after sign.',
  },
];

const PRICING_FAQS = [
  {
    q: 'How much does call center staffing cost?',
    a: 'Cost is driven mainly by region and role mix, not by us. As a rough guide: onshore (US/Canada) fully-loaded agent wages typically run highest; nearshore (Mexico, Colombia, Costa Rica) usually runs 40–60% lower than onshore for comparable bilingual talent; offshore (Philippines, India) runs 60–75% lower for English-only voice and chat. Our recruiting fee sits on top of that wage base — quoted as a percentage of first-year compensation for direct-hire, or a per-hour markup for contract. Every quote is written, not verbal.',
  },
  {
    q: 'Are there replacement fees?',
    a: 'Yes — for direct-hire engagements we charge a replacement fee tied to first-year compensation, billed only when a candidate is hired and starts. For contract or contract-to-hire we bill an hourly markup on top of the agent wage. There are no retainers, no job-board fees, no kickoff charges. You only pay when someone shows up to work.',
  },
  {
    q: 'What is your guarantee if a placement leaves?',
    a: 'Every direct-hire placement carries a 90-day attrition guarantee — if a placement leaves or is terminated for cause within 90 days of start, we replace at no additional fee. Contract placements are replaced within 5 business days. We track cohort attrition weekly through ramp and share the report with you.',
  },
];

const COMPLIANCE_FAQS = [
  {
    q: 'Where do you recruit?',
    a: 'Onshore: US and Canada. Nearshore: Mexico, Colombia, Costa Rica, Dominican Republic, Guatemala, Jamaica. Offshore: Philippines, India, with selective work in South Africa and Egypt. Fourteen countries total, 100k+ trained agents in active pipeline. Region recommendation is part of every staffing plan — we will not push you offshore if your work is regulated to a single jurisdiction.',
  },
  {
    q: 'Do you staff bilingual agents?',
    a: 'Yes — 30+ languages with active pipelines, including Spanish, Portuguese, French, Tagalog, Mandarin, Cantonese, German, Italian, Polish, Russian, Vietnamese, and Arabic. Fluency is scored to level (A2 through C2 against the CEFR scale, or your equivalent rubric) and you hear the recorded voice sample before approving the shortlist. Self-reported "fluent" never makes it past stage two.',
  },
  {
    q: 'Are you HIPAA, PCI, or SOC 2 compliant?',
    a: 'Yes. Compliance is vetted at candidate submission — HIPAA training certificates, PCI-DSS awareness, background and credit checks where the role requires them — and the specific obligations are written into the SOW for every engagement. For SOC 2 work we align our submission process to your auditor requirements. We will not place a candidate into a regulated seat without the documentation in hand.',
  },
  {
    q: 'Can you place licensed agents (NMLS, state-insurance)?',
    a: 'Yes. We run active pipelines of NMLS-licensed mortgage agents, state-licensed P&C and life insurance agents, Series 6/7 holders, and licensed healthcare-adjacent staff. License status is verified against the relevant registry at submission and again before start. Multi-state appointments and CE tracking can be coordinated as part of the engagement.',
  },
];

const ENGAGEMENT_FAQS = [
  {
    q: 'Do you do permanent hire or temp / contract?',
    a: 'Both. Roughly 70% of our active assignments are direct-hire into in-house contact centers and BPO floors; 30% are contract or contract-to-hire through a partner staffing structure. Engagement model is recommended as part of the staffing plan based on your seat tenure expectation, headcount approval path, and budget structure.',
  },
  {
    q: 'Can you scale across multiple sites?',
    a: 'Yes. Multi-site engagements run through a single named program lead on our side coordinating with site leads at each location. Calibration sessions hold the QA bar consistent across sites; cohort sizing flexes to each site\'s training calendar. The largest active program we run spans four sites across two countries and one US state.',
  },
  {
    q: 'Do you support remote, hybrid, and on-site?',
    a: 'All three. Remote-first cohorts get an additional home-office and equipment vetting layer (workspace photos, internet speed test, secondary connection where required). Hybrid and on-site cohorts are screened against your commute radius and shift schedule. Work model is set per role in the staffing plan, not assumed.',
  },
];

const ALL_FAQS = [
  ...GETTING_STARTED_FAQS,
  ...PROCESS_FAQS,
  ...PRICING_FAQS,
  ...COMPLIANCE_FAQS,
  ...ENGAGEMENT_FAQS,
];

export default function FAQPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={ALL_FAQS} />

      {/* HERO — single column, centered, matches /services hub voice */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/cc-team-meeting.jpg"
          alt="Call Center Staffing FAQ"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/50"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/15"
        />
        <div aria-hidden className="absolute inset-0 pattern-grid opacity-20" />
        <div
          aria-hidden
          className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent-500/30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl"
        />

        <Container className="relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              FAQ · 18 operator questions answered
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Call center staffing{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">FAQ.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[640px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Straight answers on process, timelines, screening, pricing ranges, compliance, and
              engagement models. Written by the senior account managers who run the floor with you — not
              a marketing team.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#staffing-plan" size="lg" withArrow>
                Get a written plan
              </Button>
              <a
                href="#getting-started"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                Jump to the questions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      <div id="getting-started">
        <FAQSection
          eyebrow="Getting started"
          heading="What call center staffing actually is — and how we fit."
          intro="The basics. What we do, how we differ from a generalist staffing firm, and where we plug into an existing TA function."
          items={GETTING_STARTED_FAQS}
          background="white"
        />
      </div>

      <FAQSection
        eyebrow="Process & timelines"
        heading="Ramp, launch, and how we screen."
        intro="What to expect once a plan is signed — first shortlist within 72 hours, cohort waves for larger ramps, six-stage screen on every candidate."
        items={PROCESS_FAQS}
        background="neutral"
      />

      <FAQSection
        eyebrow="Pricing & cost"
        heading="What it costs and how we charge."
        intro="Honest ranges by region, how the replacement fee works, and what happens if a hire leaves inside the guarantee window."
        items={PRICING_FAQS}
        background="white"
      />

      <FAQSection
        eyebrow="Locations, languages, compliance"
        heading="Where we recruit and what we vet against."
        intro="Onshore, nearshore, offshore. 30+ languages scored to level. HIPAA, PCI, SOC 2, NMLS, and state-insurance work — vetted at submission, written into the SOW."
        items={COMPLIANCE_FAQS}
        background="neutral"
      />

      <FAQSection
        eyebrow="Engagement models"
        heading="Direct-hire, contract, multi-site, remote."
        intro="How we structure engagements — permanent versus contract, scaling across sites, and whether we support remote, hybrid, or on-site work models."
        items={ENGAGEMENT_FAQS}
        background="white"
      />

      <StaffingPlanCTA />
      <CTABand
        headline="Still have a question? Ask it on the quote."
        sub="Send us your forecast, region preference, and any open question. A senior account manager writes back inside one business day with a plan and a direct answer — no chatbots, no auto-responders."
      />
    </>
  );
}
