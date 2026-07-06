import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Globe2, Languages, Clock, MapPin } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTABand } from '@/components/sections/CTABand';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { REGIONS } from '@/lib/content/regions';
import { LOCATIONS } from '@/lib/content/locations';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

const COUNTRY_LOCATIONS = LOCATIONS.filter((l) => !l.name.includes(','));
const METRO_LOCATIONS = LOCATIONS.filter((l) => l.name.includes(','));

export const metadata: Metadata = {
  title: 'Where We Recruit — Call Center Staffing by Region',
  description:
    'We deploy trained call center agents across nine regions worldwide — North America, South America, Central America, the Caribbean, Europe, Africa, Asia, Australia and the Middle East. Onshore, nearshore and offshore.',
  alternates: alternatesFor('/locations'),
  openGraph: {
    title: 'Where We Recruit — Call Center Staffing by Region',
    description:
      'Trained call center agents across nine regions worldwide. Onshore, nearshore and offshore coverage on the time zones and languages your customers need.',
    url: `${site.url}/locations`,
    images: [
      {
        url: '/images/cc-office-wide.jpg',
        width: 1200,
        height: 630,
        alt: 'Global call center staffing coverage by region',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where We Recruit — Call Center Staffing by Region',
    description: 'Trained call center agents across nine regions worldwide.',
  },
};

export default function LocationsIndexPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Regions', href: '/locations' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/cc-office-wide.jpg"
          alt="Global call center staffing coverage"
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
              Coverage · 9 regions worldwide
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Trained agents,{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">wherever the work is.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              We&apos;re not tied to any one location — we recruit across nine regions worldwide and
              deploy agents on the time zone, language and cost profile your business needs. Onshore,
              nearshore or offshore: tell us the work, we&apos;ll tell you the best fit.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a written plan
              </Button>
              <a
                href="#regions-grid"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                Browse the regions
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

      {/* REGIONS GRID */}
      <Section id="regions-grid" background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Nine regions, one playbook</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Pick a region — we deploy the agents.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              The same disciplined sourcing, screening and quality bar applies in every region we
              cover. Where you place the work depends on time zone, language mix, compliance and
              budget — we help you choose.
            </p>
          </div>

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((r) => (
              <li key={r.slug} id={r.slug} className="group h-full scroll-mt-28">
                <Link
                  href={`/locations/${r.slug}`}
                  className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy-950/5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={r.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg">
                        {r.shore}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-5 flex items-center gap-2 drop-shadow-lg">
                      <span className="text-2xl leading-none">{r.globe}</span>
                      <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                        {r.name}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[14px] leading-relaxed text-navy-700">{r.blurb}</p>

                    <div className="mt-5">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-navy-700/70 mb-2">
                        Markets we recruit in
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {r.markets.map((m) => (
                          <span
                            key={m}
                            className="inline-flex items-center gap-1 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-500"
                          >
                            <MapPin className="h-3 w-3" />
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-5 border-t border-navy-950/8 grid grid-cols-2 gap-3 text-[12px]">
                      <div className="flex items-start gap-2">
                        <Languages className="h-3.5 w-3.5 mt-0.5 flex-none text-navy-700/60" />
                        <span className="font-semibold text-navy-950 leading-tight">
                          {r.languages}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-3.5 w-3.5 mt-0.5 flex-none text-navy-700/60" />
                        <span className="font-semibold text-navy-950 leading-tight">
                          {r.coverage}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Coverage banner */}
          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-navy-950/8 bg-ink-50 px-6 py-5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/10 text-accent-500">
              <Globe2 className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <div className="font-display text-lg font-bold tracking-tight text-navy-950">
                9 regions · 100,000+ trained agents · onshore, nearshore & offshore
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-navy-700">
                Continuous sourcing across the markets that matter to your customers
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* COUNTRY & METRO COVERAGE */}
      <Section background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Country &amp; city pages</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Go deeper on the markets we staff most.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Wage benchmarks, tenure, time-zone overlap and the agent profile we recruit for —
              broken down by the specific countries and US metros where we place the most cohorts.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Countries */}
            <div>
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-700/70">
                Nearshore, offshore &amp; onshore countries
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {COUNTRY_LOCATIONS.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/locations/${l.slug}`}
                      className="group flex h-full items-center gap-3 rounded-2xl border border-navy-950/8 bg-white p-4 transition-all hover:border-accent-500/40 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <span className="text-xl leading-none">{l.flagEmoji}</span>
                      <span className="flex-1 font-display text-[15px] font-bold tracking-tight text-navy-950 transition-colors group-hover:text-accent-500">
                        {l.name}
                      </span>
                      <ArrowRight className="h-4 w-4 flex-none text-navy-700/40 transition-all group-hover:translate-x-1 group-hover:text-accent-500" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* US metros */}
            <div>
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-700/70">
                US onshore metro coverage
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {METRO_LOCATIONS.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/locations/${l.slug}`}
                      className="group flex h-full items-center gap-3 rounded-2xl border border-navy-950/8 bg-white p-4 transition-all hover:border-accent-500/40 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <MapPin className="h-4 w-4 flex-none text-accent-500" />
                      <span className="flex-1 font-display text-[15px] font-bold tracking-tight text-navy-950 transition-colors group-hover:text-accent-500">
                        {l.name}
                      </span>
                      <ArrowRight className="h-4 w-4 flex-none text-navy-700/40 transition-all group-hover:translate-x-1 group-hover:text-accent-500" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand
        headline="Not sure which region fits your program?"
        sub="Tell us the work — inbound, outbound, blended, B2B or B2C — your volume and any compliance needs. A senior recruiter sends a written plan with the right region and the agents to staff it, within one business day."
      />
    </>
  );
}
