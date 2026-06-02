import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Users,
  Network,
  CheckCircle2,
  Scale,
  GitMerge,
  Layers,
  Headphones,
  ClipboardCheck,
  Globe2,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { StaffingPlanCTA } from '@/components/sections/StaffingPlanCTA';
import { CTABand } from '@/components/sections/CTABand';
import { FAQSection } from '@/components/sections/FAQSection';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Call Center Outsourcing & Staffing — In-House, BPO, Hybrid',
  description:
    'Call center outsourcing companies, in-house staffing, hybrid models. We recruit agents for both. Specialist call center staffing partner since 2003.',
  alternates: alternatesFor('/outsourcing'),
  openGraph: {
    title: 'Call Center Outsourcing & Staffing — In-House, BPO, Hybrid',
    description:
      'Call center outsourcing companies, in-house staffing, hybrid models. We recruit agents for both. Specialist call center staffing partner since 2003.',
    url: `${site.url}/outsourcing`,
    images: [
      {
        url: '/images/hd-office-team.jpg',
        width: 1200,
        height: 630,
        alt: 'Call center outsourcing and staffing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Center Outsourcing & Staffing — In-House, BPO, Hybrid',
    description:
      'Call center outsourcing companies, in-house staffing, hybrid models. We recruit agents for both.',
  },
};

const DECISION_CARDS: {
  icon: typeof Building2;
  eyebrow: string;
  title: string;
  bullets: string[];
  closing?: boolean;
}[] = [
  {
    icon: Network,
    eyebrow: 'Outsource when',
    title: 'Outsource when…',
    bullets: [
      'Volume forecasts are uncertain and you need elastic capacity without capex.',
      'You need multi-language depth — Spanish, Portuguese, Tagalog, French — at scale, fast.',
      '24/7 or off-hours coverage is required and an in-house roster cannot economically support it.',
      'Regulatory complexity sits outside your wheelhouse and a partner already owns the licensing.',
      'You want to convert fixed labor cost into a variable per-seat or per-minute rate.',
    ],
  },
  {
    icon: Building2,
    eyebrow: 'Keep in-house when',
    title: 'Keep in-house when…',
    bullets: [
      'The queue is high-margin and a single retained customer pays back the cost of a salaried agent.',
      'Calls are brand-defining moments — onboarding, churn saves, premium-tier escalations.',
      'Sensitive escalation paths need legal, fraud or executive routing your BPO cannot replicate.',
      'IP-heavy work — proprietary tooling, internal systems, deep product knowledge.',
      'You hold the regulatory licensing yourself and prefer not to extend it across a vendor.',
    ],
  },
  {
    icon: GitMerge,
    eyebrow: 'Hybrid when',
    title: 'Hybrid when…',
    bullets: [
      'Tier-1 inbound stays in-house; Tier-2 overflow and after-hours go to a BPO.',
      'Brand-side QA and coaching live in-house; agents themselves sit on a BPO floor.',
      'Surge volume runs through a BPO; baseline run-rate stays on payroll.',
      'Onshore voice is in-house; offshore back-office and chat are outsourced.',
      'Pilot a new region with a BPO before deciding whether to stand up your own site.',
    ],
  },
  {
    icon: Users,
    eyebrow: 'Either way',
    title: 'Either way, you still need to staff the floor.',
    bullets: [
      'Outsourcing does not eliminate the recruiting problem — it shifts where the bodies sit.',
      'A BPO partner needs warm bodies on seats every Monday morning, same as you do.',
      'Agent attrition exists on every floor in the industry; the question is who fills the chairs.',
      'We staff in-house operators, BPO partners, and brand-side teams placing into a BPO partner.',
      'Pick the operating model that fits your queue. We will recruit against it.',
    ],
    closing: true,
  },
];

const SERVICE_BLOCKS: {
  icon: typeof Headphones;
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
}[] = [
  {
    icon: Building2,
    eyebrow: 'For in-house operators',
    title: 'Direct-to-employer staffing for your own floor.',
    body: 'Agents, supervisors, QA leads and contact-center leadership recruited straight onto your payroll. Embedded recruiting for sustained ramps, leadership search for floor managers and ops directors.',
    href: '/services/call-center-recruitment',
    cta: 'Call center recruitment',
  },
  {
    icon: Network,
    eyebrow: 'For BPOs and outsourcers',
    title: 'Multi-client floor staffing for BPO operators.',
    body: 'Calibrated quality bars across simultaneous client programs, blended language mix, overlapping ramps. We work with BPO recruiting teams as a sourcing arm — not as a competitor.',
    href: '/services/bpo-recruitment',
    cta: 'BPO recruitment',
  },
  {
    icon: Layers,
    eyebrow: 'For brands using a BPO partner',
    title: 'Recruit talent INTO your BPO partner’s floor.',
    body: 'You picked a BPO. The BPO is short on agents. We recruit candidates against your brand-side scorecard, screen them to your QA bar, and route them onto the BPO’s floor — even though we are not the BPO.',
    href: '/services/outsourced-call-center-staffing',
    cta: 'Outsourced call center staffing',
  },
];

const COMPARISON_ROWS: { dimension: string; inHouse: string; outsourced: string }[] = [
  {
    dimension: 'Cost economics',
    inHouse: 'Fixed cost per FTE — predictable, but heavy at low utilization. Capex on real estate and tech.',
    outsourced: 'Per-seat or per-minute. Variable, scales with volume. Vendor margin is baked into the rate.',
  },
  {
    dimension: 'Speed to scale',
    inHouse: 'Constrained by your own recruiting velocity, training capacity and seat count.',
    outsourced: 'Faster — a mature BPO can absorb hundreds of seats from existing bench, but only if their bench is real.',
  },
  {
    dimension: 'Quality control',
    inHouse: 'Direct line to QA. Coaching, calibration and discretion sit on your team.',
    outsourced: 'You write the scorecard, the BPO operates against it. Calibration drift is a real risk without weekly reviews.',
  },
  {
    dimension: 'Compliance ownership',
    inHouse: 'You hold every license, every audit trail. Full liability, full control.',
    outsourced: 'Liability splits between you and the BPO per contract. Read the data-handling and audit clauses carefully.',
  },
  {
    dimension: 'Cultural fit / brand voice',
    inHouse: 'Tightest fit. Agents are employees of your brand, immersed in product and team.',
    outsourced: 'Achievable but not free — depends on dedicated vs. shared agents, training fidelity and floor leadership.',
  },
  {
    dimension: 'Capex vs Opex',
    inHouse: 'Capex-heavy at launch — facility, tech stack, workforce management, training infrastructure.',
    outsourced: 'Opex from day one. Vendor owns the infrastructure; you pay for the seats you use.',
  },
  {
    dimension: 'Recruiting burden',
    inHouse: 'Sits squarely with your TA team — and sourcing CX agents is a specialist discipline most TA teams are not staffed for.',
    outsourced: 'Sits with the BPO’s recruiting team — which is often where the wheels come off if their pipeline is thin.',
  },
];

const STATS = [
  { value: '200+', label: 'Operators served', sub: 'In-house, BPO, and brand-side teams placing into BPO floors.' },
  { value: '100k+', label: 'Vetted agents', sub: 'Active database, voice-screened, scored against operator-grade rubrics.' },
  { value: '14', label: 'Countries actively recruiting', sub: 'Onshore US, nearshore LATAM, offshore Asia — staffed in-region.' },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Are you a BPO?',
    a: 'No. Call Center Staffing is a specialist recruiting firm — we place agents, supervisors and QA leads onto contact-center floors. We do not operate the floors ourselves. Whether the seat is on a BPO’s floor or in your own building, we are the staffing partner that fills it.',
  },
  {
    q: 'Can you place agents on a BPO partner’s floor?',
    a: 'Yes. This is a common engagement. You hire a BPO to operate the floor, and you hire us to recruit candidates against your brand-side scorecard. We screen against your QA bar and the candidates are placed onto the BPO’s floor — the BPO operates the technology, the SLA and day-to-day floor management.',
  },
  {
    q: 'How do I decide between in-house and outsourced?',
    a: 'Look at the queue, not the vendor pitch. High-margin, brand-defining, IP-heavy or regulated work where you own the licensing usually belongs in-house. Volatile, multi-language, off-hours or capex-avoidant volume usually belongs with a BPO. Most operators end up hybrid — Tier-1 in-house, Tier-2 outsourced, or onshore voice in-house and offshore back-office outsourced.',
  },
  {
    q: 'What does “outsourced contact center solutions” actually mean?',
    a: 'It is a marketing umbrella for any arrangement where a third party operates some or all of your customer-facing voice, chat, email or social channels. It usually bundles the technology stack, the floor management, the SLA and the agents. We supply the agents — to BPOs that need warm bodies, and to brands that have already chosen a BPO and need their floor filled to spec.',
  },
  {
    q: 'Do you have BPOs you partner with?',
    a: 'We work with a network of BPO operators across the US, Latin America and Asia. We are vendor-neutral — we do not take a kickback for steering you toward any specific BPO. If you already have a BPO partner, we work alongside them. If you are still picking one, we can introduce a shortlist that fits your queue.',
  },
  {
    q: 'How fast can you ramp an outsourced floor?',
    a: 'On most engagements, the first qualified shortlist lands within 72 hours of plan sign-off. For an outsourced floor, the rate-limiter is usually the BPO’s training calendar and seat availability — not sourcing. We size cohorts to the BPO’s training cadence so candidates are not sitting idle between offer and start date.',
  },
];

export default function OutsourcingPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Outsourcing', href: '/outsourcing' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={FAQS} />

      {/* HERO — 7/5 split, dark navy */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/hd-office-team.jpg"
          alt="Contact center floor"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/50"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/20"
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
              Outsourcing · The staffing partner
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Outsource your call center, or keep it in-house —{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">we staff the floor either way.</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Most call center outsourcing companies sell you the floor. We sell you the people who
              sit on it. Call Center Staffing is a specialist staffing agency that places agents,
              supervisors and QA leads — onto in-house contact centers, onto BPO floors, and onto
              hybrid setups where the model splits between the two. Whichever route you pick, the
              recruiting work is the same; only the destination floor is different.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a Free Quote
              </Button>
              <a
                href="#approach"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                See our approach
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

      {/* REFRAME — we are not a BPO */}
      <Section id="approach" background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <Eyebrow>Important distinction</Eyebrow>
              <Heading level={2} display="l" className="mt-5">
                We are not a BPO. We are the staffing partner that fills BPO floors — and your
                in-house floor.
              </Heading>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-navy-700 max-w-prose">
                <p>
                  When operators search &ldquo;outsource call center&rdquo; or &ldquo;call center
                  outsourcing companies,&rdquo; most of the results are BPOs — vendors that operate
                  the floor, own the technology, manage the agents, and sign the SLA. We are not
                  one of those vendors. We are the recruiting firm those vendors quietly rely on
                  when their own pipeline is thin.
                </p>
                <p>
                  When you outsource to a BPO, the BPO handles the technology, the floor
                  management, and the SLA. They still need agents on seats. We supply those agents.
                  When you decide <em>not</em> to outsource and run the floor yourself, we supply
                  the agents to your in-house team. Same screen, same scorecard discipline; the
                  difference is which company’s W-2 the agent ends up on.
                </p>
                <p>
                  This matters at the buying stage because the staffing problem does not vanish
                  when you sign a BPO contract — it relocates. Putting Call Center Staffing on the
                  shortlist alongside the BPO conversation lets you separate two decisions that
                  should be separate: <strong className="font-semibold text-navy-950">who runs
                  the floor</strong>, and <strong className="font-semibold text-navy-950">who fills
                  the seats</strong>.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-accent-500/20 bg-gradient-to-br from-accent-500/8 via-white to-accent-500/5 p-7 lg:p-8 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                  <Scale className="h-3 w-3" />
                  At a glance
                </span>
                <h3 className="mt-5 font-display text-[1.5rem] font-extrabold tracking-[-0.025em] text-navy-950 leading-tight">
                  BPO vs. staffing partner — what each one actually does.
                </h3>
                <ul className="mt-6 space-y-4 text-[14px] leading-relaxed text-navy-700">
                  <li className="rounded-2xl border border-navy-950/8 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-navy-700/70">
                      A BPO sells you
                    </div>
                    <p className="mt-1 text-navy-950 font-semibold">
                      Operated floor, technology stack, SLA, floor management, billed per seat or
                      per minute.
                    </p>
                  </li>
                  <li className="rounded-2xl border border-navy-950/8 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                      We sell you
                    </div>
                    <p className="mt-1 text-navy-950 font-semibold">
                      The agents that go on that floor — sourced, screened, scored, placed. Billed
                      per agent.
                    </p>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* DECISION FRAMEWORK — 4-card grid */}
      <Section background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Decision framework</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                When call center outsourcing makes sense — and when it doesn&apos;t.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              We staff both sides. Below is the honest framework operators use to pick the model
              that actually fits the queue, instead of buying the model their vendor is best at
              selling.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {DECISION_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <li
                  key={card.title}
                  className={`relative overflow-hidden rounded-3xl border p-7 lg:p-8 transition-all hover:shadow-md hover:-translate-y-0.5 ${
                    card.closing
                      ? 'border-accent-500/30 bg-gradient-to-br from-accent-500/8 via-white to-white'
                      : 'border-navy-950/8 bg-white hover:border-accent-500/40'
                  }`}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                    {card.eyebrow}
                  </div>
                  <h3 className="mt-2 font-display text-[1.35rem] font-bold tracking-[-0.02em] text-navy-950 leading-tight">
                    {card.title}
                  </h3>
                  <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-navy-700">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 flex-none text-accent-500"
                          strokeWidth={2}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* WHAT WE DO — services for both models */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>What we do</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Recruiting that works for in-house, BPO and hybrid models.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Three engagement shapes, one specialism. Pick the one that maps to how your floor is
              structured today — or call us and we will help you pick.
            </p>
          </div>

          <ul className="grid gap-5 lg:grid-cols-3">
            {SERVICE_BLOCKS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group block h-full rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-8 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </span>
                      <ArrowRight className="h-4 w-4 text-navy-700/40 transition-all group-hover:text-accent-500 group-hover:translate-x-1" />
                    </div>
                    <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                      {s.eyebrow}
                    </div>
                    <h3 className="mt-2 font-display text-xl lg:text-[1.4rem] font-bold tracking-tight text-navy-950 leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-navy-700">{s.body}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-accent-500">
                      {s.cta}
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* COMPARISON TABLE — in-house vs outsourced */}
      <Section background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Comparison</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Call center outsourcing vs in-house — the operator&apos;s view.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              An honest read on both sides. We staff both, so we have no incentive to straw-man
              either column. Pick the model that fits your queue — not your vendor&apos;s marketing
              deck.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-navy-950/8 bg-white shadow-sm">
            {/* Desktop / tablet header */}
            <div className="hidden md:grid grid-cols-12 gap-6 border-b border-navy-950/8 bg-ink-50 px-6 lg:px-8 py-5">
              <div className="col-span-3 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-700">
                Dimension
              </div>
              <div className="col-span-4 lg:col-span-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-950">
                <Building2 className="h-3.5 w-3.5 text-accent-500" />
                In-house
              </div>
              <div className="col-span-5 lg:col-span-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-950">
                <Network className="h-3.5 w-3.5 text-accent-500" />
                Outsourced (BPO)
              </div>
            </div>

            <ul className="divide-y divide-navy-950/8">
              {COMPARISON_ROWS.map((row) => (
                <li
                  key={row.dimension}
                  className="grid md:grid-cols-12 gap-3 md:gap-6 px-6 lg:px-8 py-6"
                >
                  <div className="md:col-span-3">
                    <div className="md:hidden text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500 mb-1">
                      Dimension
                    </div>
                    <div className="font-display text-[15px] font-bold text-navy-950 leading-snug">
                      {row.dimension}
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="md:hidden text-[10px] font-bold uppercase tracking-[0.16em] text-navy-700 mb-1">
                      In-house
                    </div>
                    <p className="text-[14px] leading-relaxed text-navy-700">{row.inHouse}</p>
                  </div>
                  <div className="md:col-span-5">
                    <div className="md:hidden text-[10px] font-bold uppercase tracking-[0.16em] text-navy-700 mb-1">
                      Outsourced (BPO)
                    </div>
                    <p className="text-[14px] leading-relaxed text-navy-700">{row.outsourced}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-[14px] text-navy-700 max-w-3xl">
            <strong className="font-semibold text-navy-950">We staff both.</strong> Pick the model
            that fits your queue, not your vendor&apos;s marketing deck.
          </p>
        </Container>
      </Section>

      {/* OUTCOMES — 3 stat cards */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Outcomes</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                What good looks like — measured.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Numbers we are willing to put on a written quote — for in-house, BPO and hybrid
              engagements alike.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STATS.map((s, i) => {
              const icons = [Users, ClipboardCheck, Globe2];
              const Icon = icons[i] ?? Users;
              return (
                <li
                  key={s.label}
                  className="relative overflow-hidden rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-8 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div className="mt-6 font-display text-[2.75rem] lg:text-[3.25rem] leading-none font-extrabold tracking-[-0.03em] text-navy-950">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-500">
                    {s.label}
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-navy-700">{s.sub}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* FAQs */}
      <FAQSection
        background="neutral"
        eyebrow="Frequently asked"
        heading="Outsourcing, in-house, hybrid — common questions."
        intro="The questions operators ask us most often when they are still picking the model. Short, direct, no marketing fluff."
        items={FAQS}
        ctaHref="/contact"
        ctaLabel="Talk to a senior account manager"
      />

      <StaffingPlanCTA />

      <CTABand
        headline="Pick the model. We staff the floor."
        sub="Tell us your forecast, your QA scorecard and whether the floor is in-house, with a BPO partner, or a hybrid of both. A senior account manager sends a written staffing plan within one business day."
      />
    </>
  );
}
