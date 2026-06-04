import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  FileText,
  AlertTriangle,
  Calculator,
  BookOpen,
  HelpCircle,
  Activity,
  Users,
  type LucideIcon,
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
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

const RESOURCES: { label: string; href: string; desc: string; icon: LucideIcon }[] = [
  {
    label: 'Why us',
    href: '/why-us',
    desc: 'Specialist vs generalist recruiting, head-to-head — and why it changes your numbers.',
    icon: Award,
  },
  {
    label: 'Case studies',
    href: '/case-studies',
    desc: 'Real engagements, real numbers — across 200+ operators and every shore.',
    icon: FileText,
  },
  {
    label: 'Insights',
    href: '/insights',
    desc: 'Pain-point playbooks for operators in trouble — diagnose it, then fix it.',
    icon: AlertTriangle,
  },
  {
    label: 'Staffing calculator',
    href: '/tools/staffing-calculator',
    desc: 'How many agents do you actually need? A free, interactive estimate in two minutes.',
    icon: Calculator,
  },
  {
    label: 'Blog',
    href: '/blog',
    desc: 'Operator playbooks, scaling guides and cost benchmarks for contact-center leaders.',
    icon: BookOpen,
  },
  {
    label: 'FAQ',
    href: '/faq',
    desc: 'Process, pricing and compliance — answered straight, no sales fog.',
    icon: HelpCircle,
  },
  {
    label: 'How we work',
    href: '/how-we-work',
    desc: 'Three steps from forecast to filled seats — exactly how an engagement runs.',
    icon: Activity,
  },
  {
    label: 'About us',
    href: '/about',
    desc: 'Why we exist, who we are, and what makes our recruiting different.',
    icon: Users,
  },
];

export const metadata: Metadata = {
  title: 'Resources — Call Center Staffing Guides, Tools & Insights',
  description:
    'Playbooks, case studies, a free staffing calculator, FAQs and operator insights for scaling, launching and staffing call centers.',
  alternates: alternatesFor('/resources'),
  openGraph: {
    title: 'Resources — Call Center Staffing Guides, Tools & Insights',
    description:
      'Playbooks, case studies, a free staffing calculator, FAQs and operator insights for contact-center leaders.',
    url: `${site.url}/resources`,
    images: [
      {
        url: '/images/cc-discussion.jpg',
        width: 1200,
        height: 630,
        alt: 'Call center staffing resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources — Call Center Staffing Guides, Tools & Insights',
    description: 'Playbooks, case studies, tools and insights for contact-center leaders.',
  },
};

export default function ResourcesIndexPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/cc-discussion.jpg"
          alt="Call center staffing resources"
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
              <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              Resources · Guides, tools & insights
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Everything you need to{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">staff a call center.</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Playbooks, case studies, a free staffing calculator and straight answers — the same
              thinking we bring to every engagement, in one place.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a Free Quote
              </Button>
              <a
                href="#resources-grid"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                Browse resources
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

      {/* RESOURCES GRID */}
      <Section id="resources-grid" background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Browse the library</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Tools and reading for contact-center leaders.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Whether you&apos;re scoping a ramp, building a business case or just sizing the
              problem, start here — then talk to a recruiter when you&apos;re ready.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RESOURCES.map((r) => {
              const Icon = r.icon;
              return (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group block h-full rounded-3xl border border-navy-950/8 bg-white p-7 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-navy-700/40 transition-all group-hover:text-accent-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-navy-950">
                      {r.label}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-navy-700">{r.desc}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CTABand
        headline="Ready to talk specifics?"
        sub="Tell us your forecast, your QA scorecard and your region preference. A senior recruiter sends a written staffing plan within one business day — no decks, no fluff."
      />
    </>
  );
}
