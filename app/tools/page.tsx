import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calculator as CalcIcon } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTABand } from '@/components/sections/CTABand';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Free Call Center Staffing Tools — Calculators & Planners',
  description:
    'Free interactive tools for call center operators. Plan headcount, calculate cohort sizes, and pressure-test forecasts before you brief a recruiter.',
  alternates: alternatesFor('/tools'),
  openGraph: {
    title: 'Free Call Center Staffing Tools — Calculators & Planners',
    description:
      'Free interactive tools for call center operators. Plan headcount, calculate cohort sizes, and pressure-test forecasts.',
    url: `${site.url}/tools`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Call Center Staffing Tools — Calculators & Planners',
    description:
      'Free interactive tools for call center operators. Plan headcount, calculate cohort sizes, and pressure-test forecasts.',
  },
};

const TOOLS = [
  {
    href: '/tools/staffing-calculator',
    eyebrow: 'Live calculator',
    title: 'Call center agent calculator',
    body: 'Enter monthly volume, AHT, service level, and attrition. Get required productive agents, scheduled headcount, and a hire-to-bench cohort in seconds.',
    icon: CalcIcon,
    cta: 'Run the calculator',
  },
] as const;

export default function ToolsIndexPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/cc-team-work.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/45"
        />
        <div aria-hidden className="absolute inset-0 pattern-grid opacity-20" />
        <div
          aria-hidden
          className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-accent-500/30 blur-3xl"
        />

        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
            Free tools · No signup
          </span>
          <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.5rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white max-w-4xl">
            Free tools for call center operators.
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] lg:text-lg leading-relaxed text-white/75">
            Pressure-test your forecast before you brief a recruiter. Built by people who have
            run the math on hundreds of cohorts — practical, not academic.
          </p>
        </Container>
      </section>

      <TrustBar />

      <Section background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>The tools</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Pick a tool. Get an answer.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Every tool runs in your browser. Nothing is submitted, nothing is stored. Use them,
              walk away — or hand the output to us for a written plan.
            </p>
          </div>

          <ul className="grid gap-6 lg:grid-cols-2">
            {TOOLS.map((t) => {
              const Icon = t.icon;
              return (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="group flex h-full flex-col rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-9 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                        {t.eyebrow}
                      </span>
                    </div>
                    <h3 className="mt-7 font-display text-2xl font-extrabold leading-tight tracking-tight text-navy-950">
                      {t.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-navy-700">{t.body}</p>
                    <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.14em] text-accent-500">
                      {t.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CTABand
        eyebrow="Done with the math?"
        headline="Hand the numbers to a senior recruiter."
        sub="Calculator output plus your timeline and license requirements is enough for a written plan within one business day. No obligation."
        primaryHref="/contact"
        primaryLabel="Get a written plan"
      />
    </>
  );
}
