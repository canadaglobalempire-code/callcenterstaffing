import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Stethoscope,
  Banknote,
  Shield,
  ShoppingBag,
  Radio,
  Plane,
  Cloud,
  Zap,
  Truck,
  Building,
  GraduationCap,
  Headphones,
  Package,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTABand } from '@/components/sections/CTABand';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { INDUSTRIES } from '@/lib/content/industries';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';
import type { ComponentType, SVGProps } from 'react';

export const metadata: Metadata = {
  title: 'Call Center Staffing by Industry — Healthcare, Finance, Insurance & More',
  description:
    'Vertical-specific call center staffing across 13 industries. HIPAA, NMLS, PCI, CPNI, FERPA-aware screening with industry-trained recruiters since 2003.',
  alternates: alternatesFor('/industries'),
  openGraph: {
    title: 'Call Center Staffing by Industry — Healthcare, Finance, Insurance & More',
    description:
      'Vertical-specific call center staffing across 13 industries. HIPAA, NMLS, PCI, CPNI, FERPA-aware screening with industry-trained recruiters since 2003.',
    url: `${site.url}/industries`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Center Staffing by Industry',
    description:
      'Vertical-specific call center staffing across 13 industries with industry-trained recruiters.',
  },
};

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

const ICONS: Record<string, LucideIcon> = {
  healthcare: Stethoscope,
  'financial-services': Banknote,
  insurance: Shield,
  'ecommerce-retail': ShoppingBag,
  'telecom-media': Radio,
  'travel-hospitality': Plane,
  saas: Cloud,
  utilities: Zap,
  logistics: Truck,
  'government-public': Building,
  education: GraduationCap,
  'tech-support': Headphones,
  warehouse: Package,
};

const NOTES: Record<string, string> = {
  healthcare: 'HIPAA · EMR · prior auth',
  'financial-services': 'NMLS · Reg E · FCRA',
  insurance: 'Licensed · FNOL · TCPA',
  'ecommerce-retail': 'PCI · CSAT · Q4 surge',
  'telecom-media': 'Tier 1/2 · CPNI · retention',
  'travel-hospitality': 'GDS · 24/7 · multi-lang',
  saas: 'SOC 2 · API depth · GDPR',
  utilities: 'PUC · LIHEAP · storm surge',
  logistics: 'TMS · ETA · claims',
  'government-public': 'ADA 508 · FedRAMP · LEP',
  education: 'FERPA · enrollment · aid',
  'tech-support': 'tier 1/2/3 · ticket quality · 24/7',
  warehouse: 'WMS · returns · Q4 surge',
};

export default function IndustriesHubPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO — dark navy pattern from locations page */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/cc-diverse-team.jpg"
          alt="Industry-specific call center staffing"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/70 to-black/55" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/15" />
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
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              Industries · 13 verticals
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Call center staffing, calibrated{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">to your industry.</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[640px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Compliance, licensure, language mix and seasonality all change how we screen.
              Thirteen industries. Thirteen screening protocols. Recruiters who know the regulator —
              not just the resume.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#staffing-plan" size="lg" withArrow>
                Get a Free Quote
              </Button>
              <a
                href="#industries-grid"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                See all 13 verticals
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* INDUSTRY GRID */}
      <Section id="industries-grid" background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Vertical playbooks</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Thirteen industries. Thirteen screening protocols.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Click any industry to see its compliance considerations, common roles, outcome
              benchmarks and the way we screen against the regulator — not just your QA scorecard.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => {
              const Icon = ICONS[industry.slug];
              const note = NOTES[industry.slug];
              return (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group relative block h-full rounded-3xl border border-navy-950/8 bg-white p-7 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                        {Icon ? <Icon className="h-5 w-5" strokeWidth={2} /> : null}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-navy-700/40 transition-all group-hover:text-accent-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-navy-950">
                      {industry.name}
                    </h3>
                    {note && (
                      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-500">
                        {note}
                      </div>
                    )}
                    <p className="mt-3 text-[14px] leading-relaxed text-navy-700 line-clamp-3">
                      {industry.hero.subhead}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy-950 group-hover:text-accent-500 transition-colors">
                      View {industry.name.toLowerCase()} staffing
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CTABand
        headline="Ready to staff your vertical-specific contact center?"
        sub="Tell us your industry, license requirements and forecast. A senior account manager who knows your regulator sends a written staffing plan within one business day."
      />
    </>
  );
}
