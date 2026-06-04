import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Calculator as CalcIcon, BookOpen, Compass, Workflow } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTABand } from '@/components/sections/CTABand';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Calculator } from './Calculator';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Call Center Staffing Calculator — Agents & Cost',
  description:
    'Free call center staffing calculator. Estimate agents needed and cost per agent by region (onshore, nearshore, offshore) in seconds. No signup. Get a quote.',
  alternates: alternatesFor('/tools/staffing-calculator'),
  openGraph: {
    title: 'Call Center Staffing Calculator — Agents & Cost',
    description:
      'Estimate how many call center agents you need and what they cost per region — onshore, nearshore, offshore. Free, instant, no signup.',
    url: `${site.url}/tools/staffing-calculator`,
    images: [
      {
        url: '/images/cc-team-plan.jpg',
        width: 1200,
        height: 630,
        alt: 'Call center agent staffing calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Center Staffing Calculator — Agents & Cost',
    description:
      'Estimate how many call center agents you need and what they cost per region — onshore, nearshore, offshore. Free, instant, no signup.',
  },
};

const PLAN_INCLUDES = [
  'Recommended region mix (onshore / nearshore / offshore)',
  'Sourcing timeline based on your start date',
  'Screening criteria tuned to your QA scorecard',
  'Cohort sizing with nest-survival buffer',
  'Ramp plan from class graduation to floor target',
];

const RELATED = [
  {
    href: '/blog/how-to-scale-a-call-center-without-sacrificing-quality',
    eyebrow: 'Playbook',
    title: 'How to scale a call center without sacrificing quality',
    body: 'The 6 levers that decide whether a ramp lands or burns the cohort.',
    icon: BookOpen,
  },
  {
    href: '/insights/call-center-understaffed',
    eyebrow: 'Diagnosis',
    title: 'Call center understaffed — root cause checklist',
    body: 'Signals you are short-staffed beyond what AHT and shrinkage explain.',
    icon: Compass,
  },
  {
    href: '/how-we-work',
    eyebrow: 'Process',
    title: 'How we work — the operator-first delivery model',
    body: 'No black box. Named owners, weekly cohort reporting, written plans.',
    icon: Workflow,
  },
] as const;

export default function StaffingCalculatorPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Staffing calculator', href: '/tools/staffing-calculator' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/cc-man-laptop.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"
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

        <Container className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              Free tool · No signup required
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              How many call center agents do you{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">actually need?</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Plug in your call volume, AHT, service level, and attrition. Get a defensible
              cohort recommendation in seconds. No email, no decks — just the math you need
              before you brief a recruiter.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#calculator"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 h-14 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-accent-400 hover:-translate-y-0.5 hover:shadow-md"
              >
                <CalcIcon className="h-4 w-4" />
                Run the calculator
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                How the math works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 lg:p-7">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                What you&apos;ll get
              </div>
              <ul className="mt-4 space-y-3 text-[14px] text-white/85">
                {[
                  'Required productive agents to hit your service level',
                  'Total scheduled headcount after shrinkage',
                  'Hire-to-bench cohort with nest-survival buffer',
                  'Annual replacement headcount from attrition',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-500 text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-accent-500">
                <span className="h-px w-6 bg-accent-500" />
                Field-tuned approximation
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* CALCULATOR */}
      <Section background="neutral" id="calculator">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>The calculator</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Inputs on the left, live results on the right.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Most operators overestimate AHT by 15–20%. Calibrate against your last 90 days of
              data, not your job rec. Garbage in, garbage out.
            </p>
          </div>

          <Calculator />
        </Container>
      </Section>

      {/* CTA — written plan */}
      <Section background="white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white p-8 lg:p-12 ring-1 ring-white/10">
            <div
              aria-hidden
              className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-accent-500/25 blur-3xl"
            />
            <div aria-hidden className="absolute inset-0 pattern-grid opacity-20" />
            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-500">
                  Next step
                </span>
                <h2 className="mt-5 font-display text-[2rem] lg:text-[2.5rem] font-extrabold leading-tight tracking-[-0.03em] text-white">
                  Want a written staffing plan based on these numbers?
                </h2>
                <p className="mt-4 text-[15px] lg:text-base leading-relaxed text-white/80 max-w-xl">
                  A senior recruiter takes the calculator output and turns it into a defensible
                  staffing plan — region mix, screening criteria, sourcing timeline, ramp plan.
                  One business day. No obligation.
                </p>
                <div className="mt-7">
                  <Button href="/contact" variant="primary" size="lg" withArrow>
                    Get a written plan
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6 lg:p-7 backdrop-blur-sm">
                  <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent-500">
                    What&apos;s in the written plan
                  </div>
                  <ul className="mt-4 space-y-3">
                    {PLAN_INCLUDES.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14px] leading-snug text-white/85"
                      >
                        <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-500 text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section background="neutral" id="how-it-works">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>How this calculator works</Eyebrow>
              <Heading level={2} display="m" className="mt-5">
                A defensible field approximation — not full Erlang C.
              </Heading>
              <p className="mt-5 text-[15px] leading-relaxed text-navy-700">
                We start from monthly call volume and operating hours to derive calls per hour.
                Calls per hour times AHT (in hours) gives the offered load in Erlangs — the
                amount of agent-time the queue demands at any given moment.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-700">
                We divide by your occupancy target, multiply by a service-level buffer (1.05x
                for 70/60 up to 1.30x for 95/60), then divide by (1 − shrinkage) to get
                scheduled headcount. A 15% nest-survival buffer gives the recommended hire-to-bench
                cohort. Annual replacement headcount comes from your attrition midpoint.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-700">
                It is not a full Erlang C solver, and it does not model interval-level variance.
                It will land you in a defensible ballpark — within a few agents on most queues.
                A senior recruiter refines it against your actual interval forecast in the
                written plan.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ol className="space-y-4">
                {[
                  {
                    title: 'Calls per hour',
                    body: 'Monthly volume ÷ (operating hours per week × 4.33 weeks/month).',
                  },
                  {
                    title: 'Offered load (Erlangs)',
                    body: 'Calls per hour × (AHT in seconds ÷ 3600).',
                  },
                  {
                    title: 'Productive agents',
                    body: 'ceil((Erlangs ÷ occupancy) × service-level multiplier).',
                  },
                  {
                    title: 'Scheduled headcount',
                    body: 'ceil(productive ÷ (1 − shrinkage)).',
                  },
                  {
                    title: 'Hire-to-bench cohort',
                    body: 'ceil(scheduled × 1.15) for nest survival and ramp.',
                  },
                  {
                    title: 'Annual replacement headcount',
                    body: 'ceil(scheduled × annualized attrition midpoint).',
                  },
                ].map((step, i) => (
                  <li
                    key={step.title}
                    className="relative rounded-2xl border border-navy-950/8 bg-white p-5 lg:p-6 transition-colors hover:border-accent-500/40"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-display text-2xl font-extrabold tracking-tight text-accent-500 tabular-nums w-8 flex-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="font-display text-base font-bold text-navy-950">
                          {step.title}
                        </div>
                        <div className="mt-1 text-[14px] leading-relaxed text-navy-700">
                          {step.body}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* RELATED */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Next steps</Eyebrow>
              <Heading level={2} display="m" className="mt-5 max-w-2xl">
                Related reading once you have your number.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              The math is half the answer. The other half is the sourcing playbook that lands the
              cohort and keeps it on the floor.
            </p>
          </div>

          <ul className="grid gap-5 lg:grid-cols-3">
            {RELATED.map((r) => {
              const Icon = r.icon;
              return (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group block h-full rounded-3xl border border-navy-950/8 bg-white p-6 lg:p-7 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                        {r.eyebrow}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold leading-snug tracking-tight text-navy-950">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-navy-700">{r.body}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.16em] text-accent-500">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CTABand
        eyebrow="From numbers to plan"
        headline="Turn your calculator output into a written staffing plan."
        sub="A senior recruiter takes your inputs, refines them against an interval forecast, and sends back a written plan with screening criteria and a sourcing timeline — within one business day."
        primaryHref="/contact"
        primaryLabel="Get my written plan"
      />
    </>
  );
}
