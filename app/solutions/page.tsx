import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { CTABand } from '@/components/sections/CTABand';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Call Center Staffing Solutions for Every Situation',
  description:
    'Solutions for every contact-center situation: scaling an existing floor, launching a new one, seasonal surge, direct-to-employer and compliance-licensed roles.',
  alternates: alternatesFor('/solutions'),
  openGraph: {
    title: 'Call Center Staffing Solutions for Every Situation',
    description:
      'Recruiting built for the rhythm of contact-center operations — scaling, launching, seasonal surge, direct-to-employer, compliance and small business.',
    url: `${site.url}/solutions`,
    images: [
      {
        url: '/images/agents-working.jpg',
        width: 1200,
        height: 630,
        alt: 'Call center staffing solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Center Staffing Solutions',
    description: 'Recruiting built for the rhythm of contact-center operations.',
  },
};

export default function SolutionsIndexPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/agents-working.jpg"
          alt="Call center staffing solutions"
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
              Solutions · For every operating situation
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Staffing solutions{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">for how you actually operate.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Whether you&apos;re backfilling attrition, standing up a new center, riding a seasonal
              peak or hiring permanent in-house staff, we map the right recruiting solution to your
              situation — and deploy trained agents against it.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a quote
              </Button>
              <a
                href="#solutions"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                Browse the solutions
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

      <SolutionsGrid />

      <CTABand
        headline="Not sure which solution fits?"
        sub="Tell us your forecast, your QA scorecard and any compliance needs. A senior account manager sends a written staffing plan within one business day — no decks, no fluff."
      />
    </>
  );
}
