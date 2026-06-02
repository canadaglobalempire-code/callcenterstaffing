import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  UserCheck,
  FileText,
  CalendarDays,
  BookOpen,
  Check,
  MessageSquare,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTABand } from '@/components/sections/CTABand';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { StaffingPlanForm } from '@/components/forms/StaffingPlanForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact Us — Call Center Staffing Quote in 1 Day',
  description:
    'Get a written call center staffing quote within one business day. Senior recruiter, no chatbot. HIPAA · PCI · SOC 2 ready. Free, no obligation.',
  alternates: alternatesFor('/contact'),
  openGraph: {
    title: 'Contact Us — Call Center Staffing Quote in 1 Business Day',
    description:
      'Request a written call center staffing quote. Senior recruiter response within one business day. HIPAA · PCI · SOC 2 ready.',
    url: `${site.url}/contact`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — Call Center Staffing Quote in 1 Business Day',
    description:
      'Request a written call center staffing quote. Senior recruiter response within one business day.',
  },
};

const QUOTE_INCLUDES = [
  {
    icon: FileText,
    title: 'Recommended region mix',
    body: 'Onshore, nearshore, or offshore — chosen against your budget, language needs, and licensure.',
  },
  {
    icon: Clock,
    title: 'Sourcing timeline',
    body: 'First qualified shortlist target date, cohort cadence, and ramp-to-floor calendar.',
  },
  {
    icon: UserCheck,
    title: 'Screening criteria tuned to your QA scorecard',
    body: 'Voice screen rubric, behavioral filters, and licensure checks tailored to your work — not a generic template.',
  },
  {
    icon: ShieldCheck,
    title: 'Cohort sizing and ramp plan',
    body: 'Class sizes that match your trainer capacity, no-show buffer, and a 90-day attrition guarantee.',
  },
];

const TRUST_LIST = [
  {
    icon: Clock,
    title: 'One business day response',
    body: 'A senior account manager — not a chatbot, not an SDR — reads your request and replies with a written quote.',
  },
  {
    icon: ShieldCheck,
    title: 'No obligation, no decks',
    body: 'No sales call required to receive your written staffing plan. Free to read, free to walk away.',
  },
  {
    icon: UserCheck,
    title: 'Senior recruiter, every time',
    body: 'Every reply comes from someone with 5+ years recruiting into contact centers — or who has run a floor.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance-ready from day one',
    body: 'HIPAA, PCI, and SOC 2 readiness baked into screening — for healthcare, fintech, and regulated work.',
  },
];

const ENGAGEMENT_OPTIONS = [
  {
    icon: CalendarDays,
    eyebrow: '45 minutes',
    title: 'Schedule a strategy call',
    body: 'Map your forecast, KPIs, and licensure constraints to a written staffing plan with a senior account manager.',
    href: '#staffing-plan',
    cta: 'Book a call',
    external: false,
  },
  {
    icon: BookOpen,
    eyebrow: 'Read first',
    title: 'Browse our playbook',
    body: 'How we structure cohorts, screen for QA fit, and stand up onshore, nearshore, and offshore programs.',
    href: '/how-we-work',
    cta: 'See how we work',
    external: false,
  },
];

export default function ContactPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/cc-team-huddle.jpg"
          alt="Recruiters reviewing a staffing plan"
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
              Contact us
            </span>

            <h1 className="mt-6 font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3.75rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
              Request a call center staffing quote
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">in one business day.</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Tell us what you need to staff and a senior account manager sends back a written call
              center staffing quote — region mix, sourcing timeline, screening criteria, and cohort
              plan. No chatbot. No deck. Recruiting that respects how a contact center actually
              runs.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-semibold text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-accent-500" /> Free
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-accent-500" /> No obligation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-accent-500" /> 1 business day response
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-accent-500" /> HIPAA · PCI · SOC 2 ready
              </span>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#staffing-plan" size="lg" withArrow>
                Get a Free Quote
              </Button>
              <a
                href="#other-ways"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                Other ways to engage
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

      {/* MAIN CONTACT — what you'll get + StaffingPlanForm */}
      <Section id="staffing-plan" background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT: what you'll get + trust list */}
            <div className="lg:col-span-5">
              <Eyebrow>Contact Call Center Staffing</Eyebrow>
              <Heading level={2} display="l" className="mt-5">
                What&apos;s in your written staffing quote.
              </Heading>
              <p className="mt-5 text-[17px] leading-relaxed text-navy-700 max-w-prose">
                Hire call center agents the way operators actually plan a floor. Every quote is
                drafted by a senior account manager — measured on the floor, not on the contract.
              </p>

              <ul className="mt-8 space-y-5">
                {QUOTE_INCLUDES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div>
                        <h3 className="font-display text-[16px] font-bold tracking-tight text-navy-950 leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[14px] leading-relaxed text-navy-700">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 rounded-3xl border border-navy-950/8 bg-gradient-to-br from-accent-500/8 via-white to-accent-500/5 p-7">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                  Why teams trust us with their forecast
                </div>
                <ul className="mt-5 space-y-4">
                  {TRUST_LIST.map((t) => {
                    const Icon = t.icon;
                    return (
                      <li key={t.title} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-lg bg-accent-500/15 text-accent-500">
                          <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                        </span>
                        <div>
                          <div className="font-display text-[14px] font-bold tracking-tight text-navy-950 leading-snug">
                            {t.title}
                          </div>
                          <p className="mt-1 text-[13px] leading-relaxed text-navy-700">
                            {t.body}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* RIGHT: longer staffing plan form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-9 shadow-sm">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Get a staffing quote
                </div>
                <h3 className="mt-3 font-display text-[1.75rem] lg:text-[2rem] font-extrabold tracking-[-0.025em] text-navy-950 leading-tight">
                  Tell us what you need to staff.
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-700 max-w-prose">
                  The more you share — forecast, languages, licensure, ramp window — the more
                  specific your written quote will be. Every field below shapes the plan that lands
                  in your inbox.
                </p>

                <div className="mt-7">
                  <StaffingPlanForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* OTHER WAYS TO ENGAGE */}
      <Section id="other-ways" background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Other ways to engage</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Not ready for a written quote? Here&apos;s how else operators reach us.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              No newsletter list. No nurture sequence. Pick the channel that fits where you are in
              your planning cycle.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {ENGAGEMENT_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              return (
                <li key={opt.title}>
                  <a
                    href={opt.href}
                    target={opt.external ? '_blank' : undefined}
                    rel={opt.external ? 'noopener noreferrer' : undefined}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-8 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                      {opt.eyebrow}
                    </div>
                    <h3 className="mt-2 font-display text-[1.25rem] font-bold tracking-[-0.02em] text-navy-950 leading-tight">
                      {opt.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-navy-700 flex-grow">
                      {opt.body}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-accent-500">
                      {opt.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* CLOSING CTA */}
      <CTABand
        headline="Ready for a written staffing quote?"
        sub="Tell us your forecast and license requirements. A senior account manager sends back a written plan, screening criteria, and a sourcing timeline within one business day — no decks, no fluff."
      />
    </>
  );
}
