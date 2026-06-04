import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  MinusCircle,
  XCircle,
  Target,
  ClipboardList,
  Mic,
  Handshake,
  TrendingUp,
  Users,
  Clock,
  ShieldCheck,
  Signature,
  Search,
  PhoneCall,
  Calendar,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { WhyUs } from '@/components/sections/WhyUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { StaffingPlanCTA } from '@/components/sections/StaffingPlanCTA';
import { CTABand } from '@/components/sections/CTABand';
import { FAQSection } from '@/components/sections/FAQSection';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Best Call Center Staffing Agency — Specialist vs Generalist',
  description:
    'The best call center staffing agency for operators serious about quality of hire. Specialist vs generalist comparison, 90-day guarantee, 100k+ trained agents.',
  alternates: alternatesFor('/why-us'),
  openGraph: {
    title: 'Best Call Center Staffing Agency — Specialist vs Generalist',
    description:
      'The best call center staffing agency for operators serious about quality of hire. Specialist vs generalist comparison and 90-day guarantee.',
    url: `${site.url}/why-us`,
    images: [
      {
        url: '/images/hd-agents-working.jpg',
        width: 1200,
        height: 630,
        alt: 'Specialist call center staffing agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Call Center Staffing Agency — Specialist vs Generalist',
    description:
      'The best call center staffing agency for operators serious about quality of hire. Specialist vs generalist comparison and 90-day guarantee.',
    images: ['/images/hd-agents-working.jpg'],
  },
};

type Mark = 'yes' | 'partial' | 'no';

const COMPARISON_ROWS: {
  dimension: string;
  specialist: { mark: Mark; note: string };
  generalist: { mark: Mark; note: string };
  inhouse: { mark: Mark; note: string };
}[] = [
  {
    dimension: 'Recruiter background',
    specialist: { mark: 'yes', note: 'Operator-trained — has run a floor or recruited only into them for 5+ years.' },
    generalist: { mark: 'no', note: 'Generalist desk handling clerical, warehouse and CX side-by-side.' },
    inhouse: { mark: 'partial', note: 'Strong on culture; rarely sized for cohort hiring at scale.' },
  },
  {
    dimension: 'Sourcing pool',
    specialist: { mark: 'yes', note: 'Active 100k+ vetted contact-center bench across 14 countries.' },
    generalist: { mark: 'partial', note: 'Cold outreach plus job-board reposts. Bench is shared across verticals.' },
    inhouse: { mark: 'no', note: 'Inbound applications and a referral network — capped pipeline.' },
  },
  {
    dimension: 'Screening',
    specialist: { mark: 'yes', note: 'Calibrated against your QA scorecard before any submission.' },
    generalist: { mark: 'partial', note: 'Generic CX rubric — empathy, tone, schedule fit. Same for every client.' },
    inhouse: { mark: 'partial', note: 'Aligned to your scorecard, but recruiters carry 25+ open reqs at a time.' },
  },
  {
    dimension: 'Voice / recording samples',
    specialist: { mark: 'yes', note: 'Every shortlisted agent ships with a recorded voice sample.' },
    generalist: { mark: 'no', note: 'Resume and notes only. You meet the agent on the interview.' },
    inhouse: { mark: 'no', note: 'Rare outside of dedicated CX TA pods.' },
  },
  {
    dimension: 'Compliance verification',
    specialist: { mark: 'yes', note: 'NMLS, HIPAA, PCI and licensure verified at submission — not at offer.' },
    generalist: { mark: 'partial', note: 'Surface checks; deeper verification deferred to your HR team.' },
    inhouse: { mark: 'partial', note: 'Done correctly — but adds days to time-to-fill on every req.' },
  },
  {
    dimension: 'Bilingual fluency screening',
    specialist: { mark: 'yes', note: 'CEFR-scored recordings in target language. No self-reporting.' },
    generalist: { mark: 'no', note: 'Self-reported on the application and trusted on the resume.' },
    inhouse: { mark: 'partial', note: 'Possible if you have a native speaker on your TA team.' },
  },
  {
    dimension: 'Cohort calibration',
    specialist: { mark: 'yes', note: '30 / 60 / 90 score-card reporting against attrition, QA and AHT.' },
    generalist: { mark: 'no', note: 'Hand off the stack at offer. No follow-through into ramp.' },
    inhouse: { mark: 'partial', note: 'Tracked internally — rarely reported back to the hiring manager.' },
  },
  {
    dimension: 'Replacement guarantee',
    specialist: { mark: 'yes', note: '90-day attrition guarantee, written into every SOW.' },
    generalist: { mark: 'partial', note: '30 days at best. Often watered down in fine print.' },
    inhouse: { mark: 'no', note: 'No formal replacement window — the cost lives on your P&L.' },
  },
];

const FAILURE_PATTERNS = [
  {
    icon: Target,
    title: 'They optimize for top-of-funnel, not cohort-fit.',
    body:
      'Generalist firms are measured on submissions per req. So they push volume — and let your hiring manager filter. The result: a wide pile of resumes, low conversion to offer, and burned interviewer time.',
  },
  {
    icon: ClipboardList,
    title: 'They screen against generic HR criteria.',
    body:
      'Empathy, tone, schedule fit. The same rubric for every client. None of it is calibrated to your QA scorecard, your CSAT thresholds, or the AHT band the role actually has to hit.',
  },
  {
    icon: Mic,
    title: 'They place agents who cannot survive nesting.',
    body:
      'Without recorded voice samples and live screen-share testing, an agent can interview well and still fold the first time they handle a real escalation. Cohort-2 attrition rises and ramp slips.',
  },
  {
    icon: Handshake,
    title: 'They hand you a stack and walk away.',
    body:
      'No 30/60/90 follow-through. No cohort attrition reporting. No replacement guarantee written into the SOW. If the placement fails, the cost moves to your P&L, not theirs.',
  },
];

const OUTCOMES = [
  {
    icon: TrendingUp,
    metric: '+22 pts',
    label: '90-day retention',
    body: 'Cohort retention vs. the prior generalist or in-house model — measured at day 90 across active engagements.',
  },
  {
    icon: Users,
    metric: '94%',
    label: 'cohort completion',
    body: 'Of placed agents complete training and nesting and reach the floor — not just survive offer-acceptance.',
  },
  {
    icon: Clock,
    metric: 'Less than 72 hrs',
    label: 'time to first slate',
    body: 'On most engagements, the first batch of qualified, recorded candidates lands within 72 hours of plan sign-off.',
  },
  {
    icon: ShieldCheck,
    metric: '200+',
    label: 'operators served',
    body: 'BPOs, in-house contact centers and CX teams across healthcare, financial services, government and tech.',
  },
];

const GUARANTEE_STEPS = [
  {
    icon: Signature,
    title: 'Written into the SOW',
    body: 'Every engagement carries a 90-day replacement clause. No verbal promises, no fine print.',
  },
  {
    icon: Search,
    title: 'You flag — we own',
    body: 'If a placement leaves or is let go for fit inside 90 days, you flag it. We own the replacement.',
  },
  {
    icon: PhoneCall,
    title: 'Re-source within days',
    body: 'We re-source from the same screened pipeline. New shortlist on your desk within days, not weeks.',
  },
  {
    icon: Calendar,
    title: 'No second invoice',
    body: 'The replacement is at no additional charge. The original replacement fee covers it — period.',
  },
];

const FAQS = [
  {
    q: 'How are you different from a generalist staffing agency?',
    a: 'A generalist agency runs one playbook across clerical, warehouse, healthcare ops and contact-center roles. We only recruit for contact centers — every recruiter has either operated on a floor or recruited exclusively into them for 5+ years. That focus shows up in the screen (calibrated to your QA scorecard, not a generic rubric), the shortlist (every candidate ships with a recorded voice sample), and the guarantee (90-day attrition cover written into every SOW).',
  },
  {
    q: 'Why is a specialist agency worth the premium?',
    a: 'On most engagements we are not actually more expensive — we are more expensive per submission and cheaper per successful placement. Generalists ship higher volumes at lower conversion, which moves cost onto your interviewer time, your training budget, and your post-90-day attrition line. A specialist screens harder up front so cohort-2 retention holds and your ramp finishes on schedule.',
  },
  {
    q: 'Do you replace our internal TA team?',
    a: 'No — we extend it. Most of our clients have a strong in-house TA function that is sized for ongoing core hiring. We come in for cohort hiring, ramp-ups, multi-region launches, bilingual seats, and regulated-industry roles where the screening protocol is tighter than what a generalist desk can run. Your TA leader keeps the relationship; we run the surge.',
  },
  {
    q: 'What happens if a placement underperforms?',
    a: 'Inside 90 days, the replacement is on us — written into the SOW, no re-negotiation. You flag the gap, we re-source from the same pre-screened pipeline, and a new shortlist lands within days. Because we screen properly upfront — voice sample, QA-calibrated screen, compliance verified at submission — we rarely use the clause. But it exists because we stand behind the work.',
  },
  {
    q: 'How do you compare to call center outsourcing companies?',
    a: 'Outsourcing companies sell a managed service: they hire the agents, manage the floor, and bill you per seat-hour or per contact. We sell recruiting only — your agents, your management, your tech stack. Operators come to us when they want to keep ownership of the floor and the customer relationship, but cannot run hiring at the volume or quality they need with internal TA alone.',
  },
  {
    q: 'What if I need just one role placed, not a cohort?',
    a: 'We place single roles — most often supervisors, QA leads, WFM analysts, and bilingual senior agents — on the same screening protocol and same 90-day guarantee. The minimum engagement is one seat. Pricing scales with role seniority, not headcount; a single supervisor placement gets the same operator-trained recruiter as a 60-seat ramp.',
  },
];

function MarkIcon({ mark }: { mark: Mark }) {
  if (mark === 'yes') {
    return (
      <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent-500/15 text-accent-500">
        <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
      </span>
    );
  }
  if (mark === 'partial') {
    return (
      <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-navy-700/15 text-navy-700">
        <MinusCircle className="h-4 w-4" strokeWidth={2.5} />
      </span>
    );
  }
  return (
    <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-navy-700/8 text-navy-700/60">
      <XCircle className="h-4 w-4" strokeWidth={2.5} />
    </span>
  );
}

export default function WhyUsPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Why us', href: '/why-us' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={FAQS} />

      {/* HERO — homepage template */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/hd-agents-working.jpg"
          alt="Specialist call center recruiters at work"
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
              The specialist call center staffing agency
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Why operators pick the best call center staffing agency over generalist firms —{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">and keep us on retainer for years.</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              We do not place generalist clerical roles. The discipline is narrow on purpose. Every
              recruiter has run a contact-center floor or recruited exclusively into them for 5+
              years — and we are measured on the floor, not on the contract.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a Free Quote
              </Button>
              <a
                href="#outcomes"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                See our outcomes
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

      {/* CATEGORY COMPARISON TABLE */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Specialist vs generalist</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-3xl">
                Why a specialist call center staffing agency outperforms a generalist firm.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Same role on paper, different result on the floor. This is what changes when the
              recruiter only works contact-center.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-hidden rounded-3xl border border-navy-950/8 bg-white shadow-sm">
            <div className="grid grid-cols-12 bg-navy-950 text-white">
              <div className="col-span-3 p-5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                Dimension
              </div>
              <div className="col-span-3 p-5 border-l border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                  Best fit
                </div>
                <div className="mt-1 font-display text-[15px] font-extrabold leading-tight">
                  Specialist call center agency
                </div>
                <div className="text-[11px] font-semibold text-white/60">(us)</div>
              </div>
              <div className="col-span-3 p-5 border-l border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                  Category
                </div>
                <div className="mt-1 font-display text-[15px] font-extrabold leading-tight">
                  Generalist staffing firm
                </div>
                <div className="text-[11px] font-semibold text-white/60">CX as a side vertical</div>
              </div>
              <div className="col-span-3 p-5 border-l border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                  Category
                </div>
                <div className="mt-1 font-display text-[15px] font-extrabold leading-tight">
                  In-house TA alone
                </div>
                <div className="text-[11px] font-semibold text-white/60">Without an agency partner</div>
              </div>
            </div>

            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.dimension}
                className={`grid grid-cols-12 ${i % 2 === 0 ? 'bg-white' : 'bg-ink-50'} border-t border-navy-950/8`}
              >
                <div className="col-span-3 p-5 font-display text-[14px] font-bold tracking-tight text-navy-950 leading-snug">
                  {row.dimension}
                </div>
                <div className="col-span-3 p-5 border-l border-navy-950/8">
                  <div className="flex items-start gap-3">
                    <MarkIcon mark={row.specialist.mark} />
                    <p className="text-[13px] leading-relaxed text-navy-700">{row.specialist.note}</p>
                  </div>
                </div>
                <div className="col-span-3 p-5 border-l border-navy-950/8">
                  <div className="flex items-start gap-3">
                    <MarkIcon mark={row.generalist.mark} />
                    <p className="text-[13px] leading-relaxed text-navy-700">{row.generalist.note}</p>
                  </div>
                </div>
                <div className="col-span-3 p-5 border-l border-navy-950/8">
                  <div className="flex items-start gap-3">
                    <MarkIcon mark={row.inhouse.mark} />
                    <p className="text-[13px] leading-relaxed text-navy-700">{row.inhouse.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile / tablet stacked cards */}
          <div className="lg:hidden grid gap-5">
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.dimension}
                className="rounded-3xl border border-navy-950/8 bg-white p-6 shadow-sm"
              >
                <div className="font-display text-[15px] font-bold tracking-tight text-navy-950">
                  {row.dimension}
                </div>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 rounded-2xl bg-accent-500/8 p-3">
                    <MarkIcon mark={row.specialist.mark} />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-500">
                        Specialist agency (us)
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-navy-700">
                        {row.specialist.note}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 rounded-2xl bg-ink-50 p-3">
                    <MarkIcon mark={row.generalist.mark} />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-700">
                        Generalist firm
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-navy-700">
                        {row.generalist.note}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 rounded-2xl bg-ink-50 p-3">
                    <MarkIcon mark={row.inhouse.mark} />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-700">
                        In-house TA alone
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-navy-700">
                        {row.inhouse.note}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-5 text-[12px] text-navy-700">
            <span className="inline-flex items-center gap-2">
              <MarkIcon mark="yes" />
              <span className="font-semibold">Built in by default</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <MarkIcon mark="partial" />
              <span className="font-semibold">Possible — but inconsistent</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <MarkIcon mark="no" />
              <span className="font-semibold">Not part of the model</span>
            </span>
          </div>
        </Container>
      </Section>

      {/* WHY GENERALISTS FAIL */}
      <Section background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>The pattern</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                The four ways generalist staffing firms fail at contact-center recruiting.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              We do not need to name names. The pattern is the same wherever a generalist firm
              bolts a CX vertical onto an existing book of clerical and warehouse work.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {FAILURE_PATTERNS.map((p, i) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.title}
                  className="relative rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-8 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div
                    aria-hidden
                    className="absolute top-3 right-5 font-display text-[3.5rem] leading-none text-accent-500/15 select-none"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-[1.125rem] font-bold tracking-tight text-navy-950 leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-navy-700">{p.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* WHAT MAKES US DIFFERENT — reuse homepage WhyUs */}
      <WhyUs />

      {/* OUTCOMES */}
      <Section id="outcomes" background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Outcomes</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Numbers from active engagements.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Honest benchmarks, measured on the floor through ramp — not the polished version that
              shows up in a vendor deck.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map((o) => {
              const Icon = o.icon;
              return (
                <li
                  key={o.label}
                  className="group relative overflow-hidden rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-8 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="absolute top-0 right-0 h-px w-12 bg-accent-500/40" />
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="mt-5 font-display text-[2.5rem] lg:text-[3rem] font-extrabold leading-none tracking-[-0.04em] tabular-nums text-navy-950">
                    {o.metric}
                  </div>
                  <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-500">
                    {o.label}
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-navy-700">{o.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* TESTIMONIALS — reuse */}
      <Testimonials />

      {/* 90-DAY GUARANTEE EXPLAINED */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-6">
              <Eyebrow>The guarantee</Eyebrow>
              <Heading level={2} display="l" className="mt-5">
                Our 90-day attrition guarantee — written into every SOW.
              </Heading>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-navy-700 max-w-prose">
                <p>
                  If a placement leaves the role inside the first 90 days — voluntarily, or because
                  fit on the floor did not match what the resume promised — we replace them at no
                  charge. Not a credit toward a future engagement. A real, sourced replacement from
                  the same pre-screened pipeline.
                </p>
                <p>
                  We can offer a 90-day window — not the 30-day window most generalist firms cap
                  at — because we do the screening work properly upfront. CEFR-scored language
                  recordings. Voice samples. QA-calibrated screens. Compliance verified at
                  submission, not deferred to your HR team.{' '}
                  <strong className="font-semibold text-navy-950">
                    The clause exists because we stand behind the work — not as a sales line.
                  </strong>
                </p>
                <p>
                  In practice, we rarely have to use it. Our cohort completion rate sits above 90%
                  on most engagements. But the guarantee is in the SOW, not in a separate marketing
                  deck, so the cost of a miss never silently moves onto your P&L.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-accent-500/20 bg-gradient-to-br from-accent-500/8 via-white to-accent-500/5 p-7 lg:p-9 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                  <ShieldCheck className="h-3 w-3" />
                  How it works
                </span>
                <h3 className="mt-5 font-display text-[1.5rem] font-extrabold tracking-[-0.025em] text-navy-950 leading-tight">
                  The 90-day guarantee in four steps.
                </h3>

                <ol className="mt-6 space-y-5">
                  {GUARANTEE_STEPS.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <li key={step.title} className="flex items-start gap-4">
                        <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-accent-500 text-white shadow-sm">
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline gap-3">
                            <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                              Step {i + 1}
                            </span>
                          </div>
                          <div className="mt-1 font-display text-[15px] font-bold tracking-tight text-navy-950">
                            {step.title}
                          </div>
                          <p className="mt-1 text-[13px] leading-relaxed text-navy-700">
                            {step.body}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <FAQSection
        eyebrow="Common questions"
        heading="What buyers ask before they pick a specialist."
        items={FAQS}
        background="neutral"
      />

      <StaffingPlanCTA />

      <CTABand
        headline="Stop running recruiting twice. We're the specialist."
        sub="A senior account manager — operator-trained, contact-center only — writes your plan within one business day. No decks. No template. No second invoice if a placement fails inside 90 days."
      />
    </>
  );
}
