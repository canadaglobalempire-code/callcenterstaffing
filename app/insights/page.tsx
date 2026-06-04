import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTABand } from '@/components/sections/CTABand';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { INSIGHTS } from '@/lib/content/insights';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Operator Insights — Pain-Point Playbooks for Contact-Center Leaders',
  description:
    'Pain-point playbooks for contact-center leaders. Understaffed floors, broken recruiting funnels, slipping SLAs — diagnostics and operational fixes from senior account managers.',
  alternates: alternatesFor('/insights'),
  openGraph: {
    title:
      'Operator Insights — Pain-Point Playbooks for Contact-Center Leaders',
    description:
      'Diagnostics and operational fixes for the recurring pain points contact-center leaders see — written by senior account managers who run live engagements every day.',
    url: `${site.url}/insights`,
  },
};

const FALLBACK_IMAGE = '/images/cc-team-meeting.jpg';

export default function InsightsIndexPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Insights', href: '/insights' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/cc-management.jpg"
          alt="Operator insights"
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
          <div className="lg:col-span-9">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              Operator insights
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Operator insights — pain-point playbooks for{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">
                  contact-center leaders.
                </span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[640px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Each piece names the pattern, lists the diagnostics, and walks the
              fix — written by senior account managers who see it live every week.
              Empathic but operational. No filler.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#all-insights" size="lg" withArrow>
                See all insights
              </Button>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                Talk to a recruiter
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* INSIGHT CARDS */}
      <Section id="all-insights" background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Pain-point playbooks</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                The patterns we see most — and the fixes we run.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              If one of these patterns sounds familiar, it is almost certainly
              not the only one in play. They travel together. Start with the
              piece that matches what you are seeing today.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INSIGHTS.map((insight) => (
              <li key={insight.slug}>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-navy-950/8 bg-white p-6 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-navy-950/5">
                    <Image
                      src={insight.heroImage ?? FALLBACK_IMAGE}
                      alt={insight.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500 shadow-sm">
                      <AlertTriangle className="h-3 w-3" strokeWidth={2.5} />
                      Pain point
                    </span>
                  </div>

                  <div className="mt-5 flex flex-1 flex-col">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                      {insight.primaryKeyword}
                    </div>

                    <h3 className="mt-3 font-display text-[1.125rem] font-bold leading-snug tracking-tight text-navy-950 group-hover:text-accent-500 transition-colors">
                      {insight.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-relaxed text-navy-700 line-clamp-4">
                      {insight.symptom}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-accent-500 mt-auto pt-4">
                      Read the fix
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTABand
        headline="Want this thinking applied to your operation?"
        sub="A senior account manager writes a custom plan against your forecast — sourcing timeline, screening criteria, fee model. One business day, no decks."
      />
    </>
  );
}
