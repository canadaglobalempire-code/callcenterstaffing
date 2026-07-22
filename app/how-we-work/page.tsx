import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Award,
  Sparkles,
  Users,
  Wrench,
  Calendar,
  Brain,
  ListChecks,
  ShieldCheck,
  Lightbulb,
  Compass,
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
  title: 'How We Work With You — Call Center Staffing',
  description:
    'Personalized recruitment strategies tuned to your KPIs, omnichannel mix, and budget. 20+ years recruiting only into the contact-center industry.',
  alternates: alternatesFor('/how-we-work'),
  openGraph: {
    title: 'How We Work With You — Call Center Staffing',
    description:
      'Personalized recruitment strategies tuned to your KPIs, omnichannel mix, and budget. Built around your contact center, not a template.',
    url: `${site.url}/how-we-work`,
    images: [
      {
        url: '/images/cc-team-plan.jpg',
        width: 1200,
        height: 630,
        alt: 'Planning a call center staffing engagement',
      },
    ],
  },
};

const AGENT_TRAITS = [
  { label: 'Ethical', icon: ShieldCheck },
  { label: 'Clear communicators', icon: Sparkles },
  { label: 'Career-minded', icon: Award },
  { label: 'Success driven', icon: Compass },
  { label: 'Personable', icon: HeartHandshake },
  { label: 'Technically skilled', icon: Wrench },
  { label: 'Adaptable', icon: Brain },
  { label: 'Highly organized', icon: ListChecks },
  { label: 'Problem solvers', icon: Lightbulb },
  { label: 'Reliable', icon: Calendar },
  { label: 'Trustworthy', icon: CheckCircle2 },
  { label: 'Loyal', icon: Users },
];

export default function HowWeWorkPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'How we work', href: '/how-we-work' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/team-collaboration.jpg"
          alt="Recruiting strategy session"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
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

        <Container className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              How we work with you
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Call Center Staffing strategies{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">that actually work.</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Deciding the right number of agents to hire is a real challenge — too many burns
              budget, too few and you can&apos;t handle your customers or take on new accounts.
              Our specialists meet with you to map staffing needs to service goals.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#staffing-plan" size="lg" withArrow>
                Get a quote
              </Button>
              <a
                href="#strategy"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                See our strategy
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

      {/* STRATEGY — meet & map */}
      <Section id="strategy" background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Eyebrow>Step one</Eyebrow>
              <Heading level={2} display="l" className="mt-5">
                Specialists who&apos;ve seen your KPIs before.
              </Heading>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-navy-700 max-w-prose">
                <p>
                  The Staffing and Recruiting Specialists at Call Center Staffing will meet with
                  you to determine your staffing needs and your service goals.
                </p>
                <p>
                  With <strong className="font-semibold text-navy-950">20+ years</strong> of
                  experience in the industry, we&apos;re well-versed in call-center KPIs,
                  omnichannel service and technical support challenges, and the very real cost of
                  hiring and onboarding new staff.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: '20+', label: 'Years in CX recruiting' },
                  { value: '100k+', label: 'Vetted agents' },
                  { value: '14', label: 'Countries' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-navy-950/8 bg-white p-4 text-center"
                  >
                    <div className="font-display text-[1.5rem] font-extrabold tracking-[-0.03em] text-accent-500 leading-none">
                      {s.value}
                    </div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-navy-700 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy-950/5">
                <Image
                  src="/images/cc-team-plan.jpg"
                  alt="Strategy session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 backdrop-blur-sm p-5 shadow-2xl ring-1 ring-navy-950/5">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-500 text-white">
                      <Compass className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                        Strategy session
                      </div>
                      <div className="mt-1 font-display text-[15px] font-bold tracking-tight text-navy-950 leading-snug">
                        45 min · written staffing plan delivered next business day
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* THE BEST AGENTS — 12 traits grid */}
      <Section background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>The best agents</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                We focus on agents who would lift any team they&apos;re placed on.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              What makes Call Center Staffing different is our focus on hiring the best agents for
              the call centers that want the very best teams. It&apos;s that simple. Here are the
              traits we screen for, every time.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {AGENT_TRAITS.map((t) => {
              const Icon = t.icon;
              return (
                <li
                  key={t.label}
                  className="group flex items-center gap-3 rounded-2xl border border-navy-950/8 bg-white px-4 py-4 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                  <span className="font-display text-[14px] font-bold tracking-tight text-navy-950">
                    {t.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* NOT ALL CALL CENTERS — personalization */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy-950/5">
                <Image
                  src="/images/diverse-team.jpg"
                  alt="Diverse team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm px-5 py-4 shadow-2xl ring-1 ring-navy-950/5">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-500 text-white">
                    <Users className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <div className="font-display text-sm font-extrabold leading-tight text-navy-950">
                      8-seat boutiques to multi-site BPOs
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-accent-500 mt-0.5">
                      We staff every size
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <Eyebrow>Personalized to your floor</Eyebrow>
              <Heading level={2} display="l" className="mt-5">
                Not all call centers are the same — and we know it.
              </Heading>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-navy-700 max-w-prose">
                <p>
                  We create personalized recruitment strategies for each client. Call Center
                  Staffing will hire the staff <strong className="font-semibold text-navy-950">YOU need</strong> to
                  meet your needs and the needs of your customers — from small call centers to the
                  largest in the world.
                </p>
                <p>
                  We&apos;ve worked with some of the largest call centers in the world and built
                  long-lasting positive relationships with our clients. We want you to have the
                  best experience with Call Center Staffing.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-navy-950/8 bg-white p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                    Small floors
                  </div>
                  <div className="mt-1 font-display text-base font-bold tracking-tight text-navy-950">
                    8–25 seat boutiques
                  </div>
                </div>
                <div className="rounded-2xl border border-navy-950/8 bg-white p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                    Enterprise
                  </div>
                  <div className="mt-1 font-display text-base font-bold tracking-tight text-navy-950">
                    Multi-site BPOs · 500+ seats
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* RETENTION OUTCOME */}
      <Section background="neutral">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-navy-950 to-navy-900 text-white p-8 lg:p-12 ring-1 ring-white/10 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-accent-500/25 blur-3xl"
            />
            <div aria-hidden className="absolute inset-0 pattern-grid opacity-20" />

            <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-500">
                  <HeartHandshake className="h-3.5 w-3.5" />
                  Why retention starts with recruiting
                </span>
                <h2 className="mt-5 font-display text-[2rem] lg:text-[2.5rem] font-extrabold leading-tight tracking-[-0.03em] text-white max-w-2xl">
                  Agent retention is{' '}
                  <span className="text-accent-500">a result of good recruiting.</span>
                </h2>
                <p className="mt-6 text-[15px] lg:text-base leading-relaxed text-white/80 max-w-2xl">
                  When the right agent is hired for the right job at the right call center,
                  everyone&apos;s happy — agents, team leaders and management. Natural team
                  cohesion comes from that perfect fit. We&apos;re proud of the impact we have on
                  retention rates. A happy team is an outstanding-performing team — and that&apos;s
                  what we&apos;re all about.
                </p>
              </div>

              <div className="lg:col-span-5 grid gap-4">
                {[
                  { value: '+22 pts', label: '90-day retention vs. prior recruiting model' },
                  { value: '3.2%', label: 'No-show rate at start date' },
                  { value: '4.9/5', label: 'Operator satisfaction across 200+ engagements' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-5 rounded-2xl bg-white/5 backdrop-blur-sm px-5 py-4 ring-1 ring-white/10"
                  >
                    <div className="font-display text-[2rem] font-extrabold tracking-[-0.03em] text-accent-500 leading-none tabular-nums">
                      {s.value}
                    </div>
                    <div className="text-[12px] font-medium text-white/85 leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Reuse homepage sections */}
      <ProcessSteps
        intro="No black box. Every step has a named owner on our team and a shared status doc with yours."
      />
      <Testimonials />
      <Industries />
      <StaffingPlanCTA />
      <CTABand
        headline="Get to know us — and we'll get to know your call center."
        sub="Contact us today to discuss your staffing needs. A senior account manager sends a written quote within one business day. No decks. No fluff."
      />
    </>
  );
}
