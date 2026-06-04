import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Languages, Clock, Globe2, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTABand } from '@/components/sections/CTABand';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { REGIONS, getRegion } from '@/lib/content/regions';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

const ROLES_WE_STAFF = [
  { label: 'Inbound customer service', href: '/roles/inbound-customer-service' },
  { label: 'Outbound sales agents', href: '/roles/outbound-sales-agents' },
  { label: 'Bilingual agents', href: '/roles/bilingual-agents' },
  { label: 'Team leads & supervisors', href: '/roles/team-leads-supervisors' },
  { label: 'QA analysts', href: '/roles/qa-analysts' },
  { label: 'Workforce management', href: '/roles/workforce-management' },
];

export function generateStaticParams() {
  return REGIONS.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const region = getRegion(params.slug);
  if (!region) return {};
  return {
    title: `Call Center Staffing in ${region.name} — Trained Agents, Deployed to You`,
    description: `${region.shore} call center staffing across ${region.name}. ${region.blurb}`,
    alternates: alternatesFor(`/locations/${region.slug}`),
    openGraph: {
      title: `Call Center Staffing in ${region.name}`,
      description: region.blurb,
      url: `${site.url}/locations/${region.slug}`,
      images: [{ url: region.image, width: 1200, height: 630, alt: `Call center staffing in ${region.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Call Center Staffing in ${region.name}`,
      description: region.blurb,
    },
  };
}

export default function RegionPage({ params }: { params: { slug: string } }) {
  const region = getRegion(params.slug);
  if (!region) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Regions', href: '/locations' },
    { label: region.name, href: `/locations/${region.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src={region.image}
          alt={`Call center staffing in ${region.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/15" />
        <div aria-hidden className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent-500/30 blur-3xl" />
        <div aria-hidden className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl" />

        <Container className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="text-base leading-none">{region.globe}</span>
              {region.name} · {region.shore}
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Trained call center agents in{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">{region.name}.</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              {region.blurb}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a Free Quote
              </Button>
              <Link
                href="/locations"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                All regions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <HeroQuoteForm />
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* AT A GLANCE + MARKETS */}
      <Section background="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Where we recruit</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Markets we recruit in across {region.name}.
              </Heading>
              <p className="mt-5 text-body-l text-navy-700 max-w-prose">
                We run the same disciplined sourcing, screening and quality bar in every market we
                cover. Tell us the work and your volume — we&apos;ll recommend the right market in{' '}
                {region.name} and deploy a trained team against it.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {region.markets.map((m) => (
                  <li
                    key={m}
                    className="flex items-center gap-4 rounded-2xl border border-navy-950/8 bg-white p-5 transition-colors hover:border-accent-500/40"
                  >
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                      <MapPin className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span className="font-display text-lg font-bold tracking-tight text-navy-950">
                      {m}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* At a glance */}
            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-navy-950/10 bg-ink-50 p-6 lg:p-7">
                <p className="text-eyebrow uppercase tracking-[0.16em] text-navy-700/80">
                  {region.name} at a glance
                </p>
                <ul className="mt-5 grid gap-5">
                  <li className="flex items-start gap-3 border-t border-navy-950/10 pt-5 first:border-t-0 first:pt-0">
                    <Globe2 className="h-5 w-5 mt-0.5 flex-none text-accent-500" />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-navy-700/70">
                        Model
                      </div>
                      <div className="font-semibold text-navy-950">{region.shore}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 border-t border-navy-950/10 pt-5">
                    <Languages className="h-5 w-5 mt-0.5 flex-none text-accent-500" />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-navy-700/70">
                        Languages
                      </div>
                      <div className="font-semibold text-navy-950">{region.languages}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 border-t border-navy-950/10 pt-5">
                    <Clock className="h-5 w-5 mt-0.5 flex-none text-accent-500" />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-navy-700/70">
                        Coverage
                      </div>
                      <div className="font-semibold text-navy-950">{region.coverage}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ROLES WE STAFF */}
      <Section background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Roles we staff here</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Every seat on the floor, staffed in {region.name}.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              From frontline agents to QA and workforce management — every role is trained and
              screened, and you hear a voice sample before anyone starts.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROLES_WE_STAFF.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="group flex items-center gap-3 rounded-2xl border border-navy-950/8 bg-white p-5 transition-all hover:border-accent-500/40 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <CheckCircle2 className="h-5 w-5 flex-none text-accent-500" strokeWidth={2.25} />
                  <span className="font-display text-[15px] font-bold tracking-tight text-navy-950 group-hover:text-accent-500 transition-colors">
                    {r.label}
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 text-navy-700/40 transition-all group-hover:translate-x-1 group-hover:text-accent-500" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTABand
        headline={`Need trained agents in ${region.name}?`}
        sub="Tell us the work — inbound, outbound, blended, B2B or B2C — your volume and any compliance needs. A senior recruiter sends a written staffing plan within one business day."
      />
    </>
  );
}
