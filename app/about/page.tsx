import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  Users,
  TrendingDown,
  Clock,
  HeartHandshake,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Target,
  Wallet,
  Building2,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { Testimonials } from '@/components/sections/Testimonials';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { Industries } from '@/components/sections/Industries';
import { StaffingPlanCTA } from '@/components/sections/StaffingPlanCTA';
import { CTABand } from '@/components/sections/CTABand';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Us — Call Center Staffing',
  description:
    'Call Center Staffing focuses on making sure your call center has the right team with the right skills at the right time. Specialized recruiting for BPOs and contact centers across onshore, nearshore and offshore markets.',
  alternates: alternatesFor('/about'),
  openGraph: {
    title: 'About Us — Call Center Staffing',
    description:
      'Specialized recruiting for call centers, BPOs, and CX teams. Reduce churn, fill open positions faster, and improve KPIs.',
    url: `${site.url}/about`,
  },
};

const BENEFITS = [
  { icon: Users, title: 'Increase your qualified candidate pool', body: 'Active reach into a 100k+ trained-agent database — every shortlist arrives recorded and screened.' },
  { icon: Wallet, title: 'Reduce your talent search costs', body: 'Cut what you spend on job boards, ad spend, and HR sourcing time. Pay per agent, not per click.' },
  { icon: Clock, title: 'Reduce your training time expense', body: 'Better quality of hire shortens ramp. Cohorts hit the floor closer to fully-trained baseline.' },
  { icon: TrendingDown, title: 'Reduce employee churn', body: '90-day attrition guarantee, replacement at no charge, and weekly cohort health reports.' },
  { icon: HeartHandshake, title: 'Improve your customer service', body: 'Better agents → better CSAT and FCR. Voice-screened candidates show up day-one ready to serve.' },
  { icon: Sparkles, title: 'Fill open positions faster', body: 'First qualified shortlist within 72 hours of plan sign-off on most engagements.' },
  { icon: BarChart3, title: 'Improve your KPIs', body: 'Calls completed, sales per agent, and CSAT — measured weekly through ramp, not just at hand-off.' },
];

const PILLARS = [
  {
    icon: Wallet,
    eyebrow: 'Budget sensitive',
    title: 'Save on HR, recruitment, training and management.',
    body: 'Ramping up staffing for a season, a campaign, or ongoing operations is expensive when you add up sourcing, screening, and management time. We take that work off your team — so you can launch faster, scale up or down as needed, and start managing customer needs sooner.',
  },
  {
    icon: Clock,
    eyebrow: 'Time sensitive',
    title: 'Built for launch calendars, not abstract job recs.',
    body: 'Every cohort is sized and scheduled to your training calendar with a named owner on our side. No black-box recruiting funnels — a shared status doc, every week, until your seats are full.',
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Industry sensitive',
    title: 'Healthcare, financial services, government — we know the rules.',
    body: 'Compliance, licensure, language mix, and seasonality all change how we screen. We have active pipelines of HIPAA, PCI, and licensed talent, and a screening protocol tuned to each regulated vertical.',
  },
];

export default function AboutPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO — homepage template */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/about-us.jpg"
          alt="Our recruiting team"
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
              About us
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              The right team, with the right skills,{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">at the right time.</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Call Center Staffing focuses on making sure your call center has the right team with
              the right skills at the right time. Specialized recruiting for BPOs and in-house
              contact centers across onshore, nearshore and offshore markets.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#staffing-plan" size="lg" withArrow>
                Get a Free Quote
              </Button>
              <a
                href="#why-us"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                Why operators choose us
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

      {/* INTRO — problem framing */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <Eyebrow>Why we exist</Eyebrow>
              <Heading level={2} display="l" className="mt-5">
                Staffing a call center isn&apos;t as easy as placing an ad — and it&apos;s rarely
                cheap.
              </Heading>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-navy-700 max-w-prose">
                <p>
                  Today, with more companies turning to virtual staffing solutions, the demand for
                  skilled agents — with strong customer-service aptitudes, problem solving,
                  communication, dependability, and a real work ethic — is growing every day.
                </p>
                <p>
                  Hiring, training, and onboarding a new agent is expensive — especially given the
                  high turnover rates most call centers wrestle with. <strong className="font-semibold text-navy-950">Call Center
                  Staffing is the solution your company has been looking for.</strong>
                </p>
              </div>
            </div>

            {/* Stat callout */}
            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-accent-500/20 bg-gradient-to-br from-accent-500/8 via-white to-accent-500/5 p-7 lg:p-8 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                  <Target className="h-3 w-3" />
                  Our focus
                </span>
                <h3 className="mt-5 font-display text-[1.5rem] font-extrabold tracking-[-0.025em] text-navy-950 leading-tight">
                  Two decades of recruiting only into the contact-center industry.
                </h3>
                <ul className="mt-6 space-y-3 text-[14px] leading-relaxed text-navy-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-500/15 text-accent-500 text-[10px] font-bold">
                      ✓
                    </span>
                    No generalist clerical, no warehouse, no healthcare ops — only CX recruiting.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-500/15 text-accent-500 text-[10px] font-bold">
                      ✓
                    </span>
                    Every recruiter has either operated on a contact-center floor or recruited into
                    them for 5+ years.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-500/15 text-accent-500 text-[10px] font-bold">
                      ✓
                    </span>
                    100k+ trained agents across 14 countries and three regions.
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* BENEFITS GRID */}
      <Section id="why-us" background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>What you get</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Everything operators measure us on.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              We&apos;re measured on the floor — not on the contract. These are the outcomes our
              clients see in week one and quarter one.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <li
                  key={b.title}
                  className={`relative rounded-3xl border border-navy-950/8 bg-white p-6 lg:p-7 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5 ${
                    i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-bold tracking-tight text-navy-950 leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-700">{b.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* MISSION SECTION */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy-950/5">
                <Image
                  src="/images/cc-team-meeting.jpg"
                  alt="Recruiters in a strategy session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />

                {/* Floating quote card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 backdrop-blur-sm p-5 shadow-2xl ring-1 ring-navy-950/5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                    Our mission
                  </div>
                  <p className="mt-2 text-[14px] leading-snug text-navy-950 font-semibold">
                    To help you build a team of the most exceptional agents you&apos;ll need —
                    sales, support, technical, inbound, outbound, back-office.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <Eyebrow>Our approach</Eyebrow>
              <Heading level={2} display="l" className="mt-5">
                The right team, the right channels, the right experience.
              </Heading>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-navy-700 max-w-prose">
                <p>
                  At Call Center Staffing our goal is to help you find the right call-center staff
                  so you can build a team of exceptional sales, technical support, customer-care,
                  inbound, outbound and back-office agents. You need the right multi-channel
                  approach to creating personalized customer experiences — and you need to know
                  your agents are able to deliver.
                </p>
                <p>
                  We strive to better understand our clients&apos; competitive and market
                  challenges so we can play a more effective role as a trusted partner — providing
                  the right call-center staff for the work that&apos;s actually in front of you.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* THREE PILLARS — budget / time / industry sensitive */}
      <Section background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Built for the constraints you actually have</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Budget&nbsp;sensitive · Time&nbsp;sensitive · Industry&nbsp;sensitive.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              We save you time and money — and recognize that healthcare, financial services and
              government each have their own rules. Our process flexes to whichever set you live
              under.
            </p>
          </div>

          <ul className="grid gap-5 lg:grid-cols-3">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.title}
                  className="relative overflow-hidden rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-8 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                    {p.eyebrow}
                  </div>
                  <h3 className="mt-2 font-display text-[1.25rem] font-bold tracking-[-0.02em] text-navy-950 leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-navy-700">{p.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* Reuse homepage sections so the page literally feels like the homepage */}
      <ProcessSteps
        intro="No black box. Every step has a named owner on our team and a shared status doc with yours."
      />
      <Testimonials />
      <Industries />
      <StaffingPlanCTA />
      <CTABand
        headline="Ready to build a team that actually stays?"
        sub="A senior account manager sends a written quote and sourcing timeline within one business day — built around your forecast, not a generic template."
      />
    </>
  );
}
