import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  Rocket,
  Building2,
  Briefcase,
  XCircle,
  PhoneCall,
  Users,
  ClipboardList,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { FAQSection } from '@/components/sections/FAQSection';
import { StaffingPlanCTA } from '@/components/sections/StaffingPlanCTA';
import { CTABand } from '@/components/sections/CTABand';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Call Center Staffing for Small Business & Startups',
  description:
    'Call center staffing agency for small business and startups. 5–50 seat cohorts, lighter engagement, same screen and 90-day guarantee. Free written quote in 1 day.',
  alternates: alternatesFor('/small-business'),
  openGraph: {
    title: 'Call Center Staffing for Small Business & Startups',
    description:
      'Call center staffing agency for small business and startups. 5–50 seat cohorts, lighter engagement, same screen, 90-day guarantee. Free written quote in 1 day.',
    url: `${site.url}/small-business`,
    images: [
      {
        url: '/images/cc-discussion.jpg',
        width: 1200,
        height: 630,
        alt: 'Call center staffing for small businesses and startups',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Center Staffing for Small Business & Startups',
    description:
      '5–50 seat cohorts, lighter engagement, same screen, 90-day guarantee. Free written quote in one business day.',
    images: ['/images/cc-discussion.jpg'],
  },
};

const SEGMENTS = [
  {
    icon: Rocket,
    eyebrow: 'Funded startups',
    title: 'Seed–Series B',
    body:
      'Typically 5–25 agents in cohort 1, scaling to 50–100 over 12 months. Common stack: customer support + ops + bilingual sales. We size around your runway and your training calendar — not a fixed minimum.',
  },
  {
    icon: Building2,
    eyebrow: 'Owner-operated SMBs',
    title: '$5M–$50M revenue',
    body:
      'Established small businesses running an in-house support team or outbound sales team. You have the floor, the playbook, and the QA scorecard — you just need agents who pass it. Same screen we use for enterprise.',
  },
  {
    icon: Briefcase,
    eyebrow: 'Specialty BPOs',
    title: 'Boutique outsourcers',
    body:
      'Small floors (8–50 seats) with calibrated quality bars and named-account ownership. We respect the way a boutique BPO sells trust — recordings, references, and named-recruiter accountability come standard.',
  },
];

const HONEST_LIMITS = [
  {
    title: 'Single-agent placements',
    body:
      "Under 5 seats, our placement-fee economics don't work for either side. Try a freelancer or contract platform — and come back when you're ready to staff a cohort.",
  },
  {
    title: 'Sub-$15/hr fully-loaded budgets',
    body:
      'Outside our wage-benchmark range — even nearshore and offshore. We are not the cheapest option on the internet, and we will not pretend to be.',
  },
  {
    title: 'Day-of replacement requests',
    body:
      "We can move fast — but we don't promise next-day. First qualified shortlist usually inside 5–10 business days. If you need a body in a chair tomorrow, we are not it.",
  },
  {
    title: 'Generalist clerical or back-office',
    body:
      'We only place call-center and contact-center work — voice, chat, email, and the supervisors who own them. No warehouse, no admin, no general office staffing.',
  },
  {
    title: 'Outsourcing the whole operation',
    body:
      'We are not a BPO. We staff your floor; we don\'t run it. If you need a turnkey vendor that owns the QA, the WFM, and the P&L of your support function, we will refer you to one.',
  },
  {
    title: 'Anything that smells like consumer-facing recruiting',
    body:
      'We work for operators, not job-seekers. We do not run resume-coaching, career-services, or training-to-hire programs. If you are an agent looking for work, our job board is the right door.',
  },
];

const STEPS = [
  {
    icon: PhoneCall,
    n: '01',
    title: '30-min intake call',
    body:
      'Half the length of an enterprise discovery. We need: role, seat count, region preference, target start date, and any non-negotiables on the QA bar. No deck, no NDA dance — most clients sign off on a scope inside the call.',
  },
  {
    icon: Users,
    n: '02',
    title: '5–7 candidate shortlist with recordings, in 5–10 business days',
    body:
      'Same six-stage screen as a 200-seat ramp: resume and tenure review, recorded voice sample, scenario-based assessment, structured behavioral interview, references, and final cohort-fit review. You hear the voice before you decide.',
  },
  {
    icon: ClipboardList,
    n: '03',
    title: 'One named recruiter through ramp + 90-day guarantee',
    body:
      'A single recruiter owns the engagement from intake to day 90. No embedded model, no weekly cohort score-card overhead — just direct lines and a real attrition guarantee. If a placement leaves inside 90 days, we replace at no charge.',
  },
];

const FAQS = [
  {
    q: "What's the smallest engagement you'll take?",
    a: 'Five seats is the working floor. Below that, the placement-fee structure stops working for either side — you pay too much per head and we can\'t justify the senior recruiter time. We have staffed 8-seat boutiques and 200-seat ramps with the same screen; the cohort just has to be at least five.',
  },
  {
    q: 'Are you a fit for early-stage startups?',
    a: "Yes — if you're funded (seed and up) and ready to staff a cohort of 5+ agents inside the next 8 weeks. We've placed cohort 1 for Seed and Series A teams who needed a customer support pod, an outbound sales motion, or a bilingual ops layer. We are not a fit for pre-seed or pre-revenue founders looking for a discount on a single agent.",
  },
  {
    q: 'Do you require a long contract or retainer?',
    a: 'No. Direct-hire engagements are paid per agent — billed only when a candidate is hired and starts. No retainer, no kickoff fee, no monthly minimums. Contract or contract-to-hire engagements are billed as an hourly markup on the agent wage. You only pay when someone shows up to work.',
  },
  {
    q: 'What if we only need bilingual agents?',
    a: 'Bilingual is one of the most common asks at this scale — Spanish, Portuguese, French, and Tagalog lead the requests. Fluency is scored to a level (B2/C1 against the CEFR scale, or your equivalent rubric) and you hear the recorded voice sample before approving the shortlist. Self-reported "fluent" never makes it past stage two.',
  },
  {
    q: 'Can a small business afford a specialist call center staffing agency?',
    a: 'Almost always — because the placement-fee structure is the same regardless of cohort size. You pay only when someone is hired and starts, and the fee is a percentage of first-year compensation (or an hourly markup for contract). For a 10-seat cohort, total spend is usually well below the cost of running your own ad spend, sourcing time, and bad-hire churn. Quote is free, written, and lands inside one business day.',
  },
  {
    q: 'How does a small-business quote process actually work?',
    a: 'Submit the form on /contact with role, seat count, region preference, and target start date. A senior account manager reads it, writes a custom plan — sourcing timeline, screening criteria, recommended region mix, cohort sizing, and a written quote — and returns it inside one business day. No decks, no chatbots, no gated whitepapers. If we are not a fit, we say so in the same reply and point you somewhere that is.',
  },
];

export default function SmallBusinessPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Small business', href: '/small-business' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={FAQS} />

      {/* HERO — 7/5 split, dark navy */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/cc-discussion.jpg"
          alt="A small operator team reviewing a call-center staffing plan"
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
              Small business · Startups · 5–50 seats
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Call center staffing for small businesses and startups —{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">same screen, smaller cohort.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              We&apos;ve staffed 8-seat boutiques and 200-seat ramps. The screen is identical: recorded
              voice samples, scenario-based assessments, structured behavioral interviews, references.
              The engagement is lighter — one named recruiter, no weekly score-card overhead, faster
              decisions. Built for operators who are done outgrowing freelancers.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a Free Quote
              </Button>
              <a
                href="#expectations"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                Read the small-print
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

      {/* WHO THIS IS FOR */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Who we work with</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Built for the operator who&apos;s done outgrowing freelancers — but isn&apos;t
                running 500 seats yet.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Three operator profiles fit cleanly inside our small-business model. If you recognize
              yourself in one of these, the quote process will feel built for you.
            </p>
          </div>

          <ul className="grid gap-5 lg:grid-cols-3">
            {SEGMENTS.map((s) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.title}
                  className="relative overflow-hidden rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-8 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                    {s.eyebrow}
                  </div>
                  <h3 className="mt-2 font-display text-[1.25rem] font-bold tracking-[-0.02em] text-navy-950 leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-navy-700">{s.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* WHAT WE DO AT THIS SCALE */}
      <Section background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>What changes at small scale</Eyebrow>
              <Heading level={2} display="l" className="mt-5">
                Same discipline, lighter engagement.
              </Heading>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[17px] leading-relaxed text-navy-700 max-w-prose">
              <p>
                The screen does not change. Every candidate goes through the same six stages we
                run on a 200-seat ramp: recorded voice samples, scenario-based assessments scored to
                your QA rubric, structured behavioral interviews against your competency model,
                references, and a final cohort-fit review by the lead recruiter. You hear the voice
                before you decide. We will not place a candidate into a regulated seat without the
                documentation in hand.
              </p>
              <p>
                What changes is the engagement model. No embedded recruiter sitting on your floor.
                No 45-minute weekly cohort score-card review. Less reporting overhead, faster decision
                cycles, one named recruiter through the whole engagement. We can place 5 agents as
                cleanly as we place 50 — the difference is how much paperwork sits between the
                shortlist and the offer.
              </p>
              <p>
                That is the trade. Same screen, same 90-day attrition guarantee, lighter operating
                cadence. If you want enterprise governance, you should be on the enterprise track
                anyway. If you want enterprise-grade screening with a small-business operating
                rhythm, this is the right page.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* HONEST LIMITS */}
      <Section id="expectations" background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Honest limits</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-3xl">
                What we are NOT a fit for — read this before you submit a quote request.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Honest answer: if you need 2 agents and have a budget of &ldquo;whatever Upwork
              costs,&rdquo; we are not your fit. Saying so up front saves both of us a week. Six
              cases where we will tell you no — and usually point you somewhere better.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {HONEST_LIMITS.map((l) => (
              <li
                key={l.title}
                className="relative rounded-3xl border border-navy-950/8 bg-white p-6 lg:p-7 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                  <XCircle className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-[17px] font-bold tracking-tight text-navy-950 leading-snug">
                  {l.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-700">{l.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* LIGHTER ENGAGEMENT MODEL */}
      <Section background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>How a small-business engagement runs</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Three steps, two weeks, one named recruiter.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Adapted from our enterprise process — same screen, less ceremony. No embedded model,
              no weekly cohort score-card. The 90-day attrition guarantee is identical.
            </p>
          </div>

          <ol className="grid gap-5 lg:grid-cols-3">
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.n}
                  className="relative overflow-hidden rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-8 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <span className="font-display text-[2rem] font-extrabold leading-none tracking-[-0.03em] text-ink-200">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[1.25rem] font-bold tracking-[-0.02em] text-navy-950 leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-navy-700">{s.body}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      {/* PRICING TRANSPARENCY (no rates) */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>Pricing transparency</Eyebrow>
              <Heading level={2} display="l" className="mt-5">
                Pricing — we send a written quote, not a price list.
              </Heading>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button href="/contact" size="lg" withArrow>
                  Request a written quote
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[17px] leading-relaxed text-navy-700 max-w-prose">
              <p>
                Every engagement gets a custom written quote built around your role, region and
                timeline. It is free, no-obligation, and arrives inside one business day. No decks,
                no gated whitepapers, no chatbot in the middle. A senior account manager writes it and
                signs their name to it.
              </p>
              <p>
                Small-business engagements are not charged differently from enterprise. The
                placement-fee structure is the same regardless of cohort size — you pay only when
                a candidate is hired and starts, and the 90-day attrition guarantee is identical.
                We do not run a discount tier or a budget tier. The screen is the screen.
              </p>
              <p className="text-[14px] text-navy-700/80">
                For exact ranges by region and engagement type, the{' '}
                <a href="/faq" className="font-semibold text-accent-500 underline-offset-4 hover:underline">
                  FAQ
                </a>{' '}
                covers what we publish openly. For numbers tied to your seat plan, request a quote.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <FAQSection
        eyebrow="Small-business FAQ"
        heading="Six honest questions before you submit a quote."
        intro="Written by the senior recruiter who would actually own your engagement. If your real question is not here, ask it on the quote — every reply is read by a human."
        items={FAQS}
        background="neutral"
      />

      <StaffingPlanCTA />

      <CTABand
        eyebrow="Small business · Startups"
        headline="Tell us your floor — even if it&rsquo;s small."
        sub="Five seats or fifty. Same screen, same 90-day guarantee, lighter engagement. A senior account manager writes back inside one business day with a plan and a written quote — or tells you straight if we&rsquo;re not the fit."
        primaryHref="/contact"
        primaryLabel="Get a Free Quote"
      />
    </>
  );
}
