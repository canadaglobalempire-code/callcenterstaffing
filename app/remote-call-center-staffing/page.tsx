import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Wifi, ShieldCheck, Globe2, Clock } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTABand } from '@/components/sections/CTABand';
import { FAQSection } from '@/components/sections/FAQSection';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Remote Call Center Staffing — Work-From-Home Agents',
  description:
    'Remote call center staffing: trained work-from-home agents on our payroll, deployed in 72 hours. Pay per hour, swap any agent free. Get a written plan.',
  alternates: alternatesFor('/remote-call-center-staffing'),
  openGraph: {
    title: 'Remote Call Center Staffing — Work-From-Home Agents',
    description:
      'Trained remote, work-from-home call center agents on our payroll. Deploy in 72 hours, pay only for hours worked, onshore/nearshore/offshore.',
    url: `${site.url}/remote-call-center-staffing`,
    images: [
      {
        url: '/images/cc-woman-typing.jpg',
        width: 1200,
        height: 630,
        alt: 'Remote work-from-home call center agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Call Center Staffing — Work-From-Home Agents',
    description: 'Trained remote work-from-home call center agents on our payroll, deployed in 72 hours.',
  },
};

const BENEFITS = [
  {
    icon: Globe2,
    title: 'A wider talent pool',
    body: 'Remote hiring lifts the geographic limit. We recruit work-from-home agents across the US and worldwide — onshore, nearshore and offshore — matched to your time zone and language mix.',
  },
  {
    icon: ShieldCheck,
    title: 'Vetted home-office setup',
    body: 'Every remote agent is screened for a quiet workspace, wired connection, and headset before they start — and for HIPAA/PCI clean-desk discipline where the queue requires it.',
  },
  {
    icon: Clock,
    title: '24/7 follow-the-sun coverage',
    body: 'Because agents work from home across regions, we can staff overnight, weekend and holiday coverage without standing up a physical site.',
  },
  {
    icon: Wifi,
    title: 'No real estate, no idle seats',
    body: 'Skip the floor lease and per-seat minimums. Agents stay on our payroll and you pay only for the hours they actually work.',
  },
];

const FAQS = [
  {
    q: 'Do you provide remote work-from-home call center agents?',
    a: 'Yes. We recruit, screen and deploy trained work-from-home agents who stay on our payroll. You direct their work like any team member; we handle wages, benefits, equipment vetting, HR and replacements.',
  },
  {
    q: 'How do you ensure quality and security with remote agents?',
    a: 'Every remote agent is screened for a quiet, dedicated workspace, a wired internet connection and a compliant headset, plus recorded voice and skills assessments. For regulated queues we verify HIPAA/PCI clean-desk practices before the agent goes live.',
  },
  {
    q: 'How fast can remote agents start?',
    a: 'Most remote teams go live in 3–14 days. Because we are not waiting on a physical site or badging, work-from-home cohorts often ramp faster than on-site builds.',
  },
  {
    q: 'Can remote agents cover nights, weekends and 24/7?',
    a: 'Yes. We staff follow-the-sun coverage by recruiting work-from-home agents across onshore, nearshore and offshore regions, so your queue is covered around the clock without a second site.',
  },
];

export default function RemoteStaffingPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Remote Call Center Staffing', href: '/remote-call-center-staffing' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={FAQS} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/cc-woman-typing.jpg"
          alt="Remote work-from-home call center agent"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        <div aria-hidden className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent-500/30 blur-3xl" />
        <div aria-hidden className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl" />

        <Container className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              Remote · Work-from-home agents
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Work-from-home agents,{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">staffed and ready.</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Hire trained remote call center agents without the real estate, the HR, or the idle
              seats. We recruit work-from-home agents across onshore, nearshore and offshore regions,
              keep them on our payroll, and deploy a team to your business in 72 hours — you pay only
              for the hours they work.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a written plan
              </Button>
              <a
                href="#how"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                How remote staffing works
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

      {/* WHAT / WHY */}
      <Section id="how" background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Remote call center staffing</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                The agents work from home. The accountability stays with us.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Remote work removed the geographic limit on hiring — but it added a vetting, equipment
              and security problem. We solve both: trained work-from-home agents, screened for the
              home-office setup your queue demands, deployed without a physical floor.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <li
                  key={b.title}
                  className="flex h-full flex-col rounded-3xl border border-navy-950/8 bg-white p-7 transition-colors hover:border-accent-500/40"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-navy-950">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-navy-700">{b.body}</p>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 rounded-3xl border border-navy-950/8 bg-ink-50 p-7 lg:p-9">
            <Heading level={3} className="text-navy-950">
              Remote, hybrid or on-site — we staff all three.
            </Heading>
            <p className="mt-4 text-base leading-relaxed text-navy-700 max-w-prose">
              Many teams run a blend: remote agents for general CX and overflow, on-site or hybrid for
              regulated, licensed or clean-desk work. Tell us the mix you need and we recommend the
              model — and the region — that fits your compliance posture and budget.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-[13px]">
              {['Remote / WFH', 'Hybrid', 'On-site', 'Onshore', 'Nearshore', 'Offshore'].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white border border-navy-950/8 px-3 py-1.5 font-semibold text-navy-800"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-500" />
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/services/onshore-call-center-staffing" className="text-accent-600 hover:underline underline-offset-4">
                Onshore staffing →
              </Link>
              <Link href="/services/nearshore-call-center-staffing" className="text-accent-600 hover:underline underline-offset-4">
                Nearshore staffing →
              </Link>
              <Link href="/services/offshore-call-center-staffing" className="text-accent-600 hover:underline underline-offset-4">
                Offshore staffing →
              </Link>
              <Link href="/outsourcing" className="text-accent-600 hover:underline underline-offset-4">
                Outsourcing vs in-house →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <FAQSection
        heading="Remote call center staffing — questions, answered."
        intro="How work-from-home staffing works, what we screen for, and how fast you can go live."
        items={FAQS}
        background="neutral"
        ctaHref="/contact"
        ctaLabel="Get a written plan"
      />

      <CTABand
        headline="Need remote agents on your queue this week?"
        sub="Tell us the work — inbound, outbound, blended, B2B or B2C — your volume and any compliance needs. A senior recruiter sends a written staffing plan within one business day."
      />
    </>
  );
}
