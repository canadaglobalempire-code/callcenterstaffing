import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  TrendingUp,
  Quote,
  AlertTriangle,
  Lightbulb,
  Users,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { StaffingPlanCTA } from '@/components/sections/StaffingPlanCTA';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABand } from '@/components/sections/CTABand';
import { OutcomesPanel } from '@/components/sections/OutcomesPanel';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { INDUSTRIES, getIndustry } from '@/lib/content/industries';
import { ROLES } from '@/lib/content/roles';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

type Params = { slug: string };

// Unique hero image per industry — keeps every industry page visually distinct.
const INDUSTRY_HERO_IMAGES: Record<string, string> = {
  healthcare: '/images/case-study-healthcare.jpg',
  'financial-services': '/images/case-study-financial.jpg',
  insurance: '/images/cc-man-laptop.jpg',
  'ecommerce-retail': '/images/case-study-ecommerce.jpg',
  'telecom-media': '/images/case-study-technology.jpg',
  'travel-hospitality': '/images/agent-smiling.jpg',
  saas: '/images/cc-agent-desk.jpg',
  utilities: '/images/cc-agent-blue.jpg',
  logistics: '/images/cc-agent-1.jpg',
  'government-public': '/images/agent-woman-office.jpg',
  education: '/images/agent-focused.jpg',
  'tech-support': '/images/cc-agent-laptop.jpg',
  warehouse: '/images/agents-row.jpg',
};

// Secondary "our approach" image per industry — distinct from the hero above.
const INDUSTRY_APPROACH_IMAGES: Record<string, string> = {
  healthcare: '/images/internet-call-center-agent-working.jpg',
  'financial-services': '/images/internet-office-team-meeting.jpg',
  insurance: '/images/internet-call-center-headset-pair.jpg',
  'ecommerce-retail': '/images/internet-call-center-agents-row.jpg',
  'telecom-media': '/images/cc-management.jpg',
  'travel-hospitality': '/images/cc-team-collab.jpg',
  saas: '/images/cc-team-desk.jpg',
  utilities: '/images/cc-support-team.jpg',
  logistics: '/images/hd-agents-working.jpg',
  'government-public': '/images/cc-team-plan.jpg',
  education: '/images/diverse-team.jpg',
  'tech-support': '/images/cc-team-work.jpg',
  warehouse: '/images/hd-agents-row.jpg',
};

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const ind = getIndustry(params.slug);
  if (!ind) return {};
  return {
    title: ind.metaTitle,
    description: ind.metaDescription,
    alternates: alternatesFor(`/industries/${ind.slug}`),
    openGraph: {
      title: ind.metaTitle,
      description: ind.metaDescription,
      url: `${site.url}/industries/${ind.slug}`,
      ...(ind.heroImage
        ? { images: [{ url: ind.heroImage, width: 1200, height: 630, alt: ind.name }] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ind.metaTitle,
      description: ind.metaDescription,
    },
  };
}

export default function IndustryPage({ params }: { params: Params }) {
  const ind = getIndustry(params.slug);
  if (!ind) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries' },
    { label: ind.name, href: `/industries/${ind.slug}` },
  ];

  const heroImage = INDUSTRY_HERO_IMAGES[ind.slug] ?? ind.heroImage ?? '/images/case-study-healthcare.jpg';
  const approachImage =
    INDUSTRY_APPROACH_IMAGES[ind.slug] ?? '/images/internet-call-center-agent-working.jpg';

  // Highlight last 3 words of headline in accent (matches solutions/locations pattern)
  const headlineWords = ind.hero.headline.split(' ');
  const splitIndex = Math.max(0, headlineWords.length - 3);
  const headlineLead = headlineWords.slice(0, splitIndex).join(' ');
  const headlineTail = headlineWords.slice(splitIndex).join(' ');

  // Resolve role slugs to role records (filter unknown)
  const roleEntries = ind.rolesCommonlyStaffed
    .map((slug) => ROLES.find((r) => r.slug === slug))
    .filter((r): r is (typeof ROLES)[number] => Boolean(r));

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <ServiceSchema
        name={`Call Center Staffing for ${ind.name}`}
        description={ind.metaDescription}
        serviceType={`Call center staffing for ${ind.name.toLowerCase()}`}
        areaServed={['US', 'CA', 'MX', 'PH', 'CO']}
        url={`${site.url}/industries/${ind.slug}`}
      />
      <FAQSchema items={ind.faqs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-40 text-white lg:pb-28 lg:pt-48">
        <Image
          src={heroImage}
          alt={`${ind.name} call center staffing`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div
          aria-hidden
          className="from-black/75 via-black/60 to-black/40 absolute inset-0 bg-gradient-to-r"
        />
        <div
          aria-hidden
          className="to-black/15 absolute inset-0 bg-gradient-to-t from-black via-transparent"
        />
        <div aria-hidden className="pattern-grid absolute inset-0 opacity-20" />
        <div
          aria-hidden
          className="bg-accent-500/30 absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full blur-3xl"
        />
        <div
          aria-hidden
          className="bg-accent-500/20 absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full blur-3xl"
        />

        <Container className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-500" />
              {ind.hero.eyebrow}
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-[3.25rem] lg:text-[4.25rem]">
              {headlineLead && <>{headlineLead} </>}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">{headlineTail}</span>
                <span
                  aria-hidden
                  className="bg-accent-500/15 absolute inset-x-0 bottom-1 -z-0 h-3"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-white/75 lg:text-lg">
              {ind.hero.subhead}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#staffing-plan" size="lg" withArrow>
                Get a quote
              </Button>
              <a
                href="#challenges"
                className="group inline-flex h-14 items-center gap-2 rounded-full border border-white/25 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-navy-950"
              >
                Industry challenges
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md lg:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                    Industry readiness
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white">
                    {ind.name} staffing screen
                  </h2>
                </div>
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-accent-500 text-white">
                  <ShieldCheck className="h-5 w-5" strokeWidth={2.4} />
                </span>
              </div>

              <dl className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                    Roles mapped
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug text-white">
                    {roleEntries.length} role families screened against industry scenarios
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                    Compliance watchlist
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug text-white">
                    {(ind.regulatoryFrameworks ?? ind.complianceConsiderations ?? ['QA scorecard'])
                      .slice(0, 3)
                      .join(' · ')}
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                    First screen focus
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug text-white">
                    {ind.industryChallenges[0]?.title ?? 'Queue fit, compliance and customer tone'}
                  </dd>
                </div>
              </dl>

              <p className="mt-5 text-sm leading-relaxed text-white/68">
                This page is built around the screening risks that matter in {ind.name.toLowerCase()},
                not a generic call-center hiring checklist.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* INTRO — AI-Overview optimized passage */}
      <Section background="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>What is {ind.name.toLowerCase()} staffing</Eyebrow>
              <Heading level={2} display="m" className="mt-5">
                The work, the rules, the talent profile.
              </Heading>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[17px] leading-relaxed text-navy-700">{ind.intro}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* INDUSTRY CHALLENGES */}
      <Section id="challenges" background="neutral">
        <Container>
          <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Industry challenges</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                What makes staffing {ind.name.toLowerCase()} different.
              </Heading>
            </div>
            <p className="max-w-prose text-body-l text-navy-700 lg:col-span-5">
              The four staffing problems generic CX recruiters underestimate — and the screening
              discipline that addresses each one.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ind.industryChallenges.map((c, i) => (
              <li
                key={c.title}
                className="border-navy-950/8 hover:border-accent-500/40 rounded-3xl border bg-white p-6 transition-all hover:shadow-md"
              >
                <span className="bg-accent-500/10 inline-flex h-10 w-10 items-center justify-center rounded-xl text-accent-500">
                  <AlertTriangle className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="text-accent-500/30 mt-5 font-display text-3xl font-extrabold tracking-tight">
                  0{i + 1}
                </div>
                <h3 className="mt-2 font-display text-base font-bold tracking-tight text-navy-950">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-700">{c.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* STAFFING APPROACH */}
      <Section background="white">
        <Container>
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col">
              <span className="bg-accent-500/10 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-500">
                <Lightbulb className="h-3.5 w-3.5" />
                Our approach
              </span>
              <Heading level={2} display="m" className="mt-5">
                How we staff {ind.name.toLowerCase()} contact centers.
              </Heading>
              <p className="mt-5 text-[15px] leading-relaxed text-navy-700">
                A senior account manager who has placed {ind.name.toLowerCase()} talent against your
                regulator owns the engagement. No generalist account managers — you talk to the
                person sourcing your shortlist.
              </p>
              <div className="ring-navy-950/5 relative mt-6 min-h-[280px] flex-1 overflow-hidden rounded-3xl shadow-xl ring-1">
                <Image
                  src={approachImage}
                  alt={`${ind.name} call center recruiting team`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="from-black/40 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                <div className="ring-navy-950/5 absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-2xl ring-1 backdrop-blur-sm">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-500 text-white">
                    <ShieldCheck className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-sm font-extrabold leading-tight text-navy-950">
                      Industry-trained recruiters
                    </div>
                    <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-navy-700">
                      Calibrated to your regulator
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 to-navy-900 p-7 text-white ring-1 ring-white/10 lg:p-10">
              <div
                aria-hidden
                className="bg-accent-500/20 absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
              />
              <div className="relative">
                <div className="space-y-4 text-[15px] leading-relaxed text-white/85">
                  {ind.staffingApproach.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* COMPLIANCE & REGULATORY */}
      {ind.complianceConsiderations?.length || ind.regulatoryFrameworks?.length ? (
        <Section background="neutral">
          <Container>
            <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>Compliance & regulatory</Eyebrow>
                <Heading level={2} display="l" className="mt-5 max-w-2xl">
                  Screened to your regulator — not just your scorecard.
                </Heading>
              </div>
              <p className="max-w-prose text-body-l text-navy-700 lg:col-span-5">
                The compliance discipline we run on every {ind.name.toLowerCase()} placement —
                verified at shortlist, not at offer.
              </p>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
              {ind.complianceConsiderations && ind.complianceConsiderations.length > 0 && (
                <div className="border-navy-950/8 rounded-3xl border bg-white p-7 lg:col-span-7 lg:p-9">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                    Considerations
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-navy-950">
                    Built into every shortlist.
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {ind.complianceConsiderations.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14px] leading-snug text-navy-700"
                      >
                        <span className="bg-accent-500/15 mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full text-accent-500">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {ind.regulatoryFrameworks && ind.regulatoryFrameworks.length > 0 && (
                <div className="lg:col-span-5">
                  <div className="rounded-3xl bg-gradient-to-br from-navy-950 to-navy-900 p-7 text-white ring-1 ring-white/10 lg:p-9">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-accent-500" />
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                        Frameworks we screen against
                      </div>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-white">
                      Regulators in scope.
                    </h3>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {ind.regulatoryFrameworks.map((fw) => (
                        <li
                          key={fw}
                          className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm"
                        >
                          {fw}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* OUTCOMES */}
      {ind.outcomes && ind.outcomes.length > 0 && (
        <OutcomesPanel
          outcomes={ind.outcomes}
          intro={`Honest benchmarks from active ${ind.name.toLowerCase()} engagements. The numbers we report against on every monthly business review.`}
          background="white"
        />
      )}

      {/* CASE HIGHLIGHT */}
      {ind.caseHighlight && (
        <Section background="neutral">
          <Container>
            <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="relative min-h-[360px] lg:col-span-5">
                <div className="ring-navy-950/5 relative h-full w-full overflow-hidden rounded-3xl shadow-xl ring-1">
                  <Image
                    src="/images/hd-office-team.jpg"
                    alt={ind.caseHighlight.company}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="from-black/50 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-lg">
                      Case highlight
                    </span>
                    <div className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white drop-shadow-lg">
                      {ind.caseHighlight.company}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center lg:col-span-7">
                <Eyebrow>How it played out</Eyebrow>
                <Heading level={2} display="m" className="mt-5">
                  From challenge to outcome — in their numbers.
                </Heading>

                <div className="mt-8 space-y-5">
                  <div className="border-navy-950/8 rounded-2xl border bg-white p-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                      The challenge
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-navy-700">
                      {ind.caseHighlight.challenge}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 p-6 text-white ring-1 ring-white/10">
                    <div className="flex items-center gap-2">
                      <Quote className="h-4 w-4 text-accent-500" />
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                        The result
                      </div>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/90">
                      {ind.caseHighlight.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* INDUSTRY-TARGETED LEAD CAPTURE — mid-page conversion */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-16 text-white lg:py-20">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950"
        />
        <div aria-hidden className="pattern-grid absolute inset-0 opacity-20" />
        <div
          aria-hidden
          className="bg-accent-500/25 absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full blur-3xl"
        />
        <Container className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-accent-500 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-500" />
              {ind.name} staffing quote
            </span>
            <h2 className="mt-6 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-[2.5rem] lg:text-[3rem]">
              Tell us about your {ind.name.toLowerCase()} floor.{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">
                  We&apos;ll send a written plan.
                </span>
                <span
                  aria-hidden
                  className="bg-accent-500/15 absolute inset-x-0 bottom-1 -z-0 h-3"
                />
              </span>
            </h2>
            <p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-white/80 lg:text-[17px]">
              A senior account manager who has placed {ind.name.toLowerCase()} talent against your
              regulator will write your plan — not a generalist. Protected request, no obligation,
              one business day.
            </p>
            <ul className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {[
                'Sourcing timeline',
                'Screening criteria',
                'Recommended region mix',
                'Cohort sizing',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px] text-white/85">
                  <span className="bg-accent-500/20 grid h-5 w-5 flex-none place-items-center rounded-full text-[10px] font-bold text-accent-500">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:pl-4">
            <HeroQuoteForm />
          </div>
        </Container>
      </section>

      {/* ROLES WE STAFF */}
      {roleEntries.length > 0 && (
        <Section background="white">
          <Container>
            <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>Roles we staff</Eyebrow>
                <Heading level={2} display="l" className="mt-5 max-w-2xl">
                  Roles we staff for {ind.name.toLowerCase()}.
                </Heading>
              </div>
              <p className="max-w-prose text-body-l text-navy-700 lg:col-span-5">
                The role profiles most commonly placed in {ind.name.toLowerCase()} engagements —
                each with its own screening protocol.
              </p>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {roleEntries.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/roles/${r.slug}`}
                    className="border-navy-950/8 hover:border-accent-500/40 group relative block h-full rounded-3xl border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <span className="bg-accent-500/10 inline-flex h-10 w-10 items-center justify-center rounded-xl text-accent-500">
                        <Users className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <ArrowUpRight className="text-navy-700/40 h-4 w-4 transition-all group-hover:text-accent-500" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-navy-950">
                      {r.name}
                    </h3>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-500">
                      {r.shortName}
                    </p>
                    <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-navy-700">
                      {r.hero.subhead}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <FAQSection
        heading={`${ind.name} staffing — common questions.`}
        items={ind.faqs}
        background="neutral"
      />
      <StaffingPlanCTA />
      <CTABand
        headline={`Ready to staff your ${ind.name.toLowerCase()} contact center?`}
        sub={`A senior account manager who has placed ${ind.name.toLowerCase()} talent against your regulator will write your plan — not a generalist. We respond within one business day.`}
      />
    </>
  );
}
