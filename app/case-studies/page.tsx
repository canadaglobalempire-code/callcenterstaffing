import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Clock, Users, TrendingUp, Award, Quote as QuoteIcon } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { Testimonials } from '@/components/sections/Testimonials';
import { StaffingPlanCTA } from '@/components/sections/StaffingPlanCTA';
import { CTABand } from '@/components/sections/CTABand';
import { FAQSection } from '@/components/sections/FAQSection';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Case Studies & Reviews — Call Center Staffing Agency',
  description:
    'Real call center staffing case studies and reviews. 60 bilingual agents in 38 days. 0→120 agents in 90 days. 200+ operators served since 2003.',
  alternates: alternatesFor('/case-studies'),
  openGraph: {
    title: 'Case Studies & Reviews — Call Center Staffing Agency',
    description:
      'Real call center staffing case studies and reviews. 60 bilingual agents in 38 days. 0→120 agents in 90 days. 200+ operators served since 2003.',
    url: `${site.url}/case-studies`,
    images: [
      {
        url: '/images/hd-office-team.jpg',
        width: 1200,
        height: 630,
        alt: 'Call Center Staffing case studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies & Reviews — Call Center Staffing Agency',
    description:
      'Real call center staffing case studies and reviews. 60 bilingual agents in 38 days. 0→120 agents in 90 days. 200+ operators served since 2003.',
  },
};

type CaseStudy = {
  industry: string;
  company: string;
  image: string;
  headlineMetric: { value: string; label: string };
  challenge: string;
  result: string;
  resultMetrics: { value: string; label: string }[];
  quote: string;
  quoteTitle: string;
  tags: { region: string; role: string; timeline: string };
};

const CASES: CaseStudy[] = [
  {
    industry: 'Healthcare',
    company: 'National healthcare payer',
    image: '/images/case-study-healthcare.jpg',
    headlineMetric: { value: '60 in 38 days', label: 'bilingual nesting class filled' },
    challenge:
      'A 60-seat bilingual nesting class had a hard go-live date tied to a payer contract. The previous retained search firm had placed only 8 of 16 seats in the prior cohort, with quality misses surfacing in week-two QA. Recruiting needed to restart with a higher bar — and finish faster.',
    result:
      'We seated 60 bilingual agents on the Mexico City floor in 38 days against a 45-day target. Cohort completion held through nesting and scorecards moved up at the same time.',
    resultMetrics: [
      { value: '60', label: 'seats live in 38 days' },
      { value: '94%', label: 'cohort completion' },
      { value: '+18 pts', label: 'CSAT vs prior cohort' },
    ],
    quote:
      '60 bilingual agents on the Mexico City floor in 38 days. Quality of hire was higher than what we used to see from our retained search firm.',
    quoteTitle: 'VP, Customer Operations',
    tags: { region: 'Onshore + Nearshore Mexico City', role: 'Bilingual CX', timeline: '38 days' },
  },
  {
    industry: 'BPO',
    company: 'Greenfield BPO · US fintech program',
    image: '/images/cc-agent-pro.jpg',
    headlineMetric: { value: '0 → 120', label: 'agents in 90 days' },
    challenge:
      'Greenfield BPO standing up its first 120-seat floor for a US fintech client. The IT punchlist was still open four weeks before launch. Recruiting had to run in parallel with build-out — and hit SLA inside the ramp window, not after it.',
    result:
      'We took the floor from zero to 120 agents in 90 days. The first SLA was hit inside ramp, and 90-day attrition came in at 11% against a 22% industry average for the same role and region.',
    resultMetrics: [
      { value: '0 → 120', label: 'agents in 90 days' },
      { value: 'SLA hit', label: 'inside ramp window' },
      { value: '11%', label: '90-day attrition' },
    ],
    quote:
      'We launched a new BPO from zero. Their recruiters embedded with our ops team and we hit our first SLA inside the ramp window.',
    quoteTitle: 'COO',
    tags: { region: 'Offshore Manila + Cebu', role: 'Multi-channel CX', timeline: '90 days' },
  },
  {
    industry: 'Financial Services',
    company: 'Licensed collections operator',
    image: '/images/case-study-financial.jpg',
    headlineMetric: { value: '98%', label: 'seat fill held' },
    challenge:
      'Licensed agent collections sat at 22% annualized attrition. In-house TA could not keep pace with roughly 14 seats lost weekly across two sites. The team needed a steady weekly cadence of qualified, license-eligible candidates — not bursts.',
    result:
      'We held weekly placements at 26 per week over 14 months, kept seat fill at 98%, and lifted 90-day retention by 22 points against the prior recruiting model.',
    resultMetrics: [
      { value: '98%', label: 'seat fill held' },
      { value: '+22 pts', label: '90-day retention' },
      { value: '26/wk', label: 'placements over 14 months' },
    ],
    quote:
      'The pipeline never stopped. Even at 22% attrition, our seats stayed full and our 90-day quality scores held.',
    quoteTitle: 'Director of WFM',
    tags: { region: 'Onshore US', role: 'Licensed collections', timeline: '14 months' },
  },
  {
    industry: 'Insurance',
    company: 'Multi-state P&C insurer',
    image: '/images/internet-call-center-agent-working.jpg',
    headlineMetric: { value: '80 licensed', label: 'agents in 9 weeks' },
    challenge:
      'A new state-licensed P&C queue was launching across four sun-belt cities. The team needed verified-license agents at submission, not at offer — every prior cohort had lost days to badging-day surprises when licenses came back unverified.',
    result:
      'We placed 80 licensed agents across four cities in 9 weeks with 100% license verification at submission. There were zero badging-day surprises through the entire ramp.',
    resultMetrics: [
      { value: '80', label: 'licensed agents, 4 cities' },
      { value: '100%', label: 'license verified at submission' },
      { value: '9 weeks', label: 'multi-market ramp' },
    ],
    quote:
      'Every shortlist arrived with verified licenses attached. We stopped losing badging days, and our compliance lead stopped chasing paperwork.',
    quoteTitle: 'Head of Licensing Ops',
    tags: { region: 'Onshore US Sun-Belt', role: 'NMLS-licensed P&C', timeline: '9 weeks' },
  },
  {
    industry: 'SaaS / Tech',
    company: 'B2B SaaS platform',
    image: '/images/case-study-technology.jpg',
    headlineMetric: { value: '+65 seats', label: 'in 8 weeks' },
    challenge:
      'Tier-2 tech support had to scale from 25 to 90 seats during a product-launch window. The role required real depth in API and integration troubleshooting, not generalist support. Hiring slowly was not an option — the launch calendar was set.',
    result:
      'We added 65 net seats in 8 weeks, lifted first-call resolution by 14 points, and stood up 24/7 coverage in time for the launch window.',
    resultMetrics: [
      { value: '65', label: 'net seats in 8 weeks' },
      { value: '+14 pts', label: 'FCR lift' },
      { value: '24/7', label: 'coverage achieved' },
    ],
    quote:
      'They sourced engineers who could actually debug an integration call. Our FCR moved 14 points and we hit the launch window without burning the existing team out.',
    quoteTitle: 'VP, Support',
    tags: { region: 'Offshore Philippines', role: 'Tier-2 tech support', timeline: '8 weeks' },
  },
  {
    industry: 'eCommerce',
    company: 'DTC ecommerce brand',
    image: '/images/case-study-ecommerce.jpg',
    headlineMetric: { value: '110-agent', label: 'Q4 surge bench' },
    challenge:
      'Q4 was projected at 4x baseline volume from Black Friday through January returns. The team needed a pre-built bench ready by October 1, a clean ramp, and an equally clean demobilization in February with the option to retain top performers.',
    result:
      'We pre-built a 110-agent surge bench by October 1, ramped on schedule, demobilized cleanly on February 15, and retained 22% of the bench for the next season.',
    resultMetrics: [
      { value: '110', label: 'agents on bench by Oct 1' },
      { value: 'Feb 15', label: 'clean demobilization' },
      { value: '22%', label: 'retained for next season' },
    ],
    quote:
      'The bench was ready before our forecast was final. We ramped on schedule, held CSAT through peak, and demobilized without a single contract dispute.',
    quoteTitle: 'Director of CX',
    tags: {
      region: 'Onshore US + Nearshore Colombia',
      role: 'Q4 retail surge',
      timeline: 'Oct → Feb',
    },
  },
];

const OVERVIEW_STATS: { value: string; label: string; icon: typeof Clock }[] = [
  { value: '+22 pts', label: '90-day retention vs prior model', icon: TrendingUp },
  { value: '94%', label: 'cohort completion', icon: Award },
  { value: 'Less than 72 hrs', label: 'first qualified shortlist', icon: Clock },
  { value: '200+', label: 'active operators served', icon: Users },
];

const SCORECARD: { icon: typeof Clock; title: string; report: string; cadence: string }[] = [
  {
    icon: Clock,
    title: 'Time to first qualified',
    report:
      'Hours from plan sign-off to the first qualified, recorded shortlist landing in your inbox. Most engagements come in under 72 hours.',
    cadence: 'Reported once per cohort kickoff',
  },
  {
    icon: Users,
    title: 'Cohort completion',
    report:
      'Percent of placed candidates that finish nesting and reach the floor. We publish the cohort drop-off curve, not just the headline number.',
    cadence: 'Reported weekly through nesting',
  },
  {
    icon: TrendingUp,
    title: '90-day retention',
    report:
      'Percent of placements still active at day 90, broken out by site, role and recruiter. The number that actually predicts ramp economics.',
    cadence: 'Reported at day 30, 60, 90',
  },
  {
    icon: Award,
    title: 'Quality of hire',
    report:
      'CSAT lift, QA score and FCR for our cohort against the prior recruiting source. We line up the comparison so the answer is honest, not flattering.',
    cadence: 'Reported monthly post-ramp',
  },
];

const FAQS = [
  {
    q: 'Can you share more case studies in our specific industry?',
    a: 'Yes. The six engagements on this page are a sample. We can walk through near-match references — same role, same region, similar headcount — under NDA on a 30-minute call. If your industry is regulated (healthcare, financial services, insurance, government) we will route you to a senior account manager who has run those engagements directly.',
  },
  {
    q: 'What metrics do you report against?',
    a: 'Time to first qualified shortlist, cohort completion through nesting, 90-day retention, and quality of hire (CSAT, QA score, FCR) measured against your prior recruiting source. You see the same scorecard internally that we use to track recruiter performance — no curated highlight reels.',
  },
  {
    q: 'Do you guarantee results?',
    a: 'We carry a 90-day attrition guarantee on direct-hire placements: if a placement leaves inside 90 days for any reason, we replace at no additional fee. We do not guarantee CSAT or FCR numbers because those are joint outcomes — but we do publish them weekly so we can correct course early if a cohort underperforms.',
  },
  {
    q: 'Can we talk to a current client as a reference?',
    a: 'Yes, after a first call. We do not list active clients publicly because most engagements run under NDA. Once we understand your role, region and headcount, we will introduce you to one or two operators running comparable programs — usually a peer at VP, Director or Head of Operations level.',
  },
  {
    q: 'How do you handle confidentiality on case studies?',
    a: 'Every case study on this page is published with the operator’s written approval and a review of the metrics. Where a client prefers anonymity, we anonymize the company name but keep the numbers and the role exact. We never share client names, headcount targets or scorecards without explicit consent.',
  },
];

export default function CaseStudiesPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-40 text-white lg:pb-28 lg:pt-48">
        <Image
          src="/images/hd-office-team.jpg"
          alt="Call center operations floor"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div
          aria-hidden
          className="from-black/75 via-black/60 to-black/40 absolute inset-0 bg-gradient-to-r"
        />
        <div
          aria-hidden
          className="to-black/15 absolute inset-0 bg-gradient-to-t from-black via-transparent"
        />
        <div aria-hidden className="pattern-grid absolute inset-0 opacity-20" />
        <div
          aria-hidden
          className="bg-accent-500/30 absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full blur-3xl"
        />
        <div
          aria-hidden
          className="bg-accent-500/20 absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full blur-3xl"
        />

        <Container className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-500" />
              Case studies · 200+ operators served
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-[3.25rem] lg:text-[4.25rem]">
              Real engagements, real numbers —{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">
                  call center staffing case studies and reviews.
                </span>
                <span
                  aria-hidden
                  className="bg-accent-500/15 absolute inset-x-0 bottom-1 -z-0 h-3"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[17px] leading-relaxed text-white/75 lg:text-lg">
              Operators evaluating a call center staffing agency want reviews and outcomes, not a
              brochure. Below are six engagements we ran — with the headcount, the timeline, the
              attrition number and the operator who signed off on it. If a metric is uncomfortable,
              it is still on the page.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a quote
              </Button>
              <a
                href="#cases"
                className="group inline-flex h-14 items-center gap-2 rounded-full border border-white/25 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-navy-950"
              >
                Browse cases
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <HeroQuoteForm />
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* OUTCOMES OVERVIEW STRIP */}
      <Section background="white">
        <Container>
          <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Across all engagements</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                What we are measured on — across 200+ operators.
              </Heading>
            </div>
            <p className="max-w-prose text-body-l text-navy-700 lg:col-span-5">
              Honest numbers from active placements — not aggregated marketing. Each metric is
              tracked weekly through ramp and reported back to the operator who hired us.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OVERVIEW_STATS.map((s) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.label}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy-950/10 bg-white p-7 shadow-sm transition-all hover:border-accent-500/40 hover:-translate-y-0.5 hover:shadow-md lg:p-8"
                >
                  <div
                    aria-hidden
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-accent-500/0"
                  />
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="mt-6 font-display text-[2.75rem] font-extrabold tabular-nums leading-none tracking-[-0.04em] text-navy-950 lg:text-[3.25rem]">
                    {s.value}
                  </div>
                  <div className="mt-3 text-sm leading-snug text-navy-700">{s.label}</div>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* FEATURED CASE STUDIES GRID */}
      <Section id="cases" background="neutral">
        <Container>
          <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Selected engagements</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Six engagements that show how we work.
              </Heading>
            </div>
            <p className="max-w-prose text-body-l text-navy-700 lg:col-span-5">
              Healthcare, financial services, insurance, BPO, SaaS and retail. Onshore, nearshore
              and offshore. Same scorecard, same weekly cadence — different industries.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c) => (
              <li
                key={c.company}
                className="ring-navy-950/5 group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={`${c.company} — ${c.industry}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="from-black/70 via-black/25 absolute inset-0 bg-gradient-to-t to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-950 backdrop-blur-sm">
                      {c.industry}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="font-display text-2xl font-extrabold leading-none tracking-tight text-accent-500">
                      {c.headlineMetric.value}
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/85">
                      {c.headlineMetric.label}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="font-display text-xl font-extrabold tracking-tight text-navy-950">
                    {c.company}
                  </div>

                  <div className="mt-5">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                      Challenge
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-navy-700">{c.challenge}</p>
                  </div>

                  <div className="mt-5">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                      Result
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-navy-700">{c.result}</p>
                  </div>

                  <ul className="mt-5 grid grid-cols-3 gap-2">
                    {c.resultMetrics.map((m) => (
                      <li
                        key={m.label}
                        className="border-navy-950/8 rounded-xl border bg-ink-50 px-3 py-3"
                      >
                        <div className="font-display text-base font-extrabold tabular-nums leading-none tracking-tight text-navy-950">
                          {m.value}
                        </div>
                        <div className="mt-1.5 text-[10px] font-semibold leading-tight text-navy-700">
                          {m.label}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl bg-ink-50 p-5">
                    <QuoteIcon aria-hidden className="h-4 w-4 text-accent-500" strokeWidth={2.25} />
                    <blockquote className="mt-2 text-[13px] leading-relaxed text-navy-700">
                      &ldquo;{c.quote}&rdquo;
                    </blockquote>
                    <div className="mt-3 text-[12px]">
                      <span className="font-bold text-navy-950">{c.quoteTitle}</span>
                      <span className="text-navy-700"> · {c.company}</span>
                    </div>
                  </div>

                  <div className="border-navy-950/10 mt-5 flex flex-wrap gap-2 border-t pt-4">
                    <span className="bg-accent-500/10 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold text-accent-500">
                      {c.tags.region}
                    </span>
                    <span className="bg-navy-950/5 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold text-navy-700">
                      {c.tags.role}
                    </span>
                    <span className="bg-navy-950/5 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold text-navy-700">
                      {c.tags.timeline}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* SCORECARD */}
      <Section background="white">
        <Container>
          <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Operator scorecard</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                How operators measure us — through ramp and beyond.
              </Heading>
            </div>
            <p className="max-w-prose text-body-l text-navy-700 lg:col-span-5">
              Four numbers. Reported on a fixed cadence. The same scorecard runs across every
              engagement — onshore, nearshore, offshore.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SCORECARD.map((s) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.title}
                  className="border-navy-950/8 hover:border-accent-500/40 rounded-3xl border bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="bg-accent-500/10 inline-flex h-11 w-11 items-center justify-center rounded-xl text-accent-500">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold tracking-tight text-navy-950">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-700">{s.report}</p>
                  <div className="bg-accent-500/10 mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent-500">
                    {s.cadence}
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <FAQSection
        heading="Case studies and reviews — common questions."
        items={FAQS}
        background="neutral"
      />

      <StaffingPlanCTA />

      <CTABand
        headline="See how your engagement would look."
        sub="A senior account manager sends a written quote, sourcing timeline and screening criteria within one business day — built around your forecast, not a generic case study."
      />
    </>
  );
}
