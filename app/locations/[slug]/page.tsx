import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, MapPin, Users, Globe2, Languages, Clock } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { GeographicCoverage } from '@/components/sections/GeographicCoverage';
import { RolesGrid } from '@/components/sections/RolesGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { Industries } from '@/components/sections/Industries';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { StaffingPlanCTA } from '@/components/sections/StaffingPlanCTA';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABand } from '@/components/sections/CTABand';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { LOCATIONS, getLocation } from '@/lib/content/locations';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

type Params = { slug: string };

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const loc = getLocation(params.slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: alternatesFor(`/locations/${loc.slug}`),
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `${site.url}/locations/${loc.slug}`,
      images: [{ url: loc.heroImage, width: 1200, height: 630, alt: loc.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: loc.metaTitle,
      description: loc.metaDescription,
    },
  };
}

export default function LocationPage({ params }: { params: Params }) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/#regions' },
    { label: loc.name, href: `/locations/${loc.slug}` },
  ];

  // Highlight last few words of headline in orange (homepage pattern)
  const headlineWords = loc.hero.headline.split(' ');
  const splitIndex = Math.max(0, headlineWords.length - 3);
  const headlineLead = headlineWords.slice(0, splitIndex).join(' ');
  const headlineTail = headlineWords.slice(splitIndex).join(' ');

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <ServiceSchema
        name={`Call Center Staffing in ${loc.name}`}
        description={loc.metaDescription}
        serviceType="Staffing and recruiting"
        areaServed={loc.name}
        url={`${site.url}/locations/${loc.slug}`}
      />
      <FAQSchema items={loc.faqs} />

      {/* HERO — homepage template */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src={loc.heroImage}
          alt={`Call center talent in ${loc.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/50" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/20" />
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
              <span className="text-base leading-none">{loc.flagEmoji}</span>
              {loc.hero.eyebrow}
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              {headlineLead && <>{headlineLead} </>}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">{headlineTail}</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              {loc.hero.subhead}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#staffing-plan" size="lg" withArrow>
                Get a Free Quote
              </Button>
              <a
                href="#snapshot"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                See talent snapshot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Quote form — same as homepage */}
          <div className="lg:col-span-5 lg:pl-4">
            <HeroQuoteForm />
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* TALENT SNAPSHOT */}
      <Section id="snapshot" background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Why staff in {loc.name}</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                {loc.name} at a glance — the numbers operators ask about.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              An honest fact sheet — talent depth, language coverage, and time-zone fit.
              Not round-up marketing.
            </p>
          </div>

          {/* Snapshot stat tiles */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-10">
            {[
              { icon: Users, label: 'Talent pool', value: loc.talentSnapshot.talentPoolSize },
              {
                icon: Globe2,
                label: 'English level',
                value: loc.talentSnapshot.avgEnglishProficiency,
              },
              { icon: Clock, label: 'Avg. tenure', value: loc.talentSnapshot.avgTenure },
              {
                icon: Languages,
                label: 'Time zones',
                value: loc.talentSnapshot.timeZones.join(' · '),
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="rounded-3xl border border-navy-950/8 bg-white p-6 lg:p-7 transition-all hover:border-accent-500/40 hover:shadow-md"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-navy-700">
                    {s.label}
                  </div>
                  <div className="mt-1 font-display text-xl lg:text-[1.5rem] font-extrabold tracking-[-0.02em] text-navy-950 leading-tight">
                    {s.value}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why here — pillar cards */}
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {loc.whyHere.map((w, i) => (
              <li
                key={w.title}
                className="rounded-3xl border border-navy-950/8 bg-white p-6 transition-all hover:border-accent-500/40 hover:shadow-md"
              >
                <div className="font-display text-3xl font-extrabold text-accent-500/30 tracking-tight">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-base font-bold tracking-tight text-navy-950">
                  {w.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-700">{w.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* CITIES */}
      <Section background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Cities we recruit in</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                We don&apos;t staff &ldquo;{loc.name}&rdquo; abstractly — we staff specific markets.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Each market has its own recruiting playbook — wage benchmarks, attrition patterns,
              and the agent profile we look for.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {loc.cities.map((c) => (
              <li
                key={c.name}
                className="rounded-3xl border border-navy-950/8 bg-white p-7 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                  <MapPin className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-navy-950">
                  {c.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-700">{c.note}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Reuse homepage sections so the page literally feels like the homepage */}
      <GeographicCoverage />
      <RolesGrid />
      <Testimonials />
      <Industries />
      <ProcessSteps
        intro="No black box. Every step has a named owner on our team and a shared status doc with yours."
      />
      <StaffingPlanCTA />
      <FAQSection
        heading={`${loc.name} staffing — common questions.`}
        items={loc.faqs}
        background="white"
      />
      <CTABand
        headline={`Ready to staff your team in ${loc.name}?`}
        sub={`A senior account manager who has placed in ${loc.name} for years will write your plan — not a generalist. Reply within one business day.`}
      />
    </>
  );
}
