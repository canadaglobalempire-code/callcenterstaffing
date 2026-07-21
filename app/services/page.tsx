import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Headphones,
  Building2,
  MessageSquare,
  HeartHandshake,
  Network,
  Globe,
  Plane,
  Flag,
  Languages,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTABand } from '@/components/sections/CTABand';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SERVICES } from '@/lib/content/services';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

const SERVICE_ICONS: Record<string, typeof Headphones> = {
  'call-center-recruitment': Headphones,
  'bpo-recruitment': Building2,
  'contact-center-staffing': MessageSquare,
  'customer-service-staffing': HeartHandshake,
  'outsourced-call-center-staffing': Network,
  'nearshore-call-center-staffing': Plane,
  'offshore-call-center-staffing': Globe,
  'onshore-call-center-staffing': Flag,
  'bilingual-call-center-staffing': Languages,
};

const SERVICE_TAGLINES: Record<string, string> = {
  'call-center-recruitment':
    'Agents, supervisors and QA — sourced against your scorecard, not a generic CX rubric.',
  'bpo-recruitment':
    'Multi-client floors with calibrated quality bars, overlapping ramps and blended language mix.',
  'contact-center-staffing':
    'Voice, chat, email, social — staffed against a per-channel QA bar from cohort one.',
  'customer-service-staffing':
    'CX agents whose CSAT trend bends the curve. Empathy and de-escalation scored to level.',
  'outsourced-call-center-staffing':
    'We are not a BPO — we recruit talent INTO your BPO floor against your brand-side scorecard.',
  'nearshore-call-center-staffing':
    'Mexico, Colombia, Costa Rica. Time-zone fit, bilingual depth, USMCA-friendly contracting.',
  'offshore-call-center-staffing':
    'Philippines and India — 24/7 coverage, deep CX maturity, the cost economics that work.',
  'onshore-call-center-staffing':
    'US-based agents. License-verified, compliance-cleared, brand-aligned for regulated work.',
  'bilingual-call-center-staffing':
    'Spanish, Portuguese, Tagalog, French. Fluency scored to level — you hear the recording before you hire.',
};

export const metadata: Metadata = {
  title: 'Call Center Staffing Services: Onshore & Offshore',
  description:
    'Specialised recruiting services for call centers, BPOs and contact centers. Onshore, nearshore and offshore. 100k+ trained agents, 90-day attrition guarantee, 72-hour first qualified.',
  alternates: alternatesFor('/services'),
  openGraph: {
    title: 'Call Center Staffing Services: Onshore & Offshore',
    description:
      'Specialised recruiting services for call centers, BPOs and contact centers across onshore, nearshore and offshore markets.',
    url: `${site.url}/services`,
    images: [
      {
        url: '/images/cc-team-row-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Call Center Staffing services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Center Staffing Services — Onshore, Nearshore, Offshore',
    description:
      'Specialised recruiting services for call centers, BPOs and contact centers.',
  },
};

export default function ServicesIndexPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO — split 7/5 with quote form, matches slug pages */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/hd-agents-row.jpg"
          alt="Call center recruiting services"
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
              Services · 9 specialisations
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Call center recruiting services,{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">built for operators.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Nine specialised services covering call centers, BPOs and contact centers across
              onshore, nearshore and offshore markets. Senior account managers who have run a floor.
              Cohorts that hold. A 90-day attrition guarantee on every assignment.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#staffing-plan" size="lg" withArrow>
                Get a written plan
              </Button>
              <a
                href="#services-grid"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                Browse the services
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

      {/* SERVICES GRID */}
      <Section id="services-grid" background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Nine services, one specialisation</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Pick the service that maps to how you actually buy recruiting.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              We cover the full surface of call-center, BPO and contact-center recruiting — onshore,
              nearshore, offshore. Each service has its own playbook, screen and scorecard.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.slug] ?? Headphones;
              const tagline = SERVICE_TAGLINES[service.slug] ?? service.metaDescription;
              return (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block h-full rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-8 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </span>
                      <ArrowRight className="h-4 w-4 text-navy-700/40 transition-all group-hover:text-accent-500 group-hover:translate-x-1" />
                    </div>

                    <h3 className="mt-6 font-display text-xl lg:text-[1.4rem] font-bold tracking-tight text-navy-950">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-navy-700">{tagline}</p>

                    <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-accent-500">
                      Explore service
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CTABand
        headline="Talk to a senior account manager today."
        sub="Tell us your forecast, your QA scorecard and your region preference. A senior account manager sends a written staffing plan within one business day — no decks, no fluff."
      />
    </>
  );
}
