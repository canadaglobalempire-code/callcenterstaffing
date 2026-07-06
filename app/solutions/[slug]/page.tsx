import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, AlertCircle, Lightbulb, TrendingUp, Quote, Clock, Target, BarChart3 } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { OutcomesPanel } from '@/components/sections/OutcomesPanel';
import { GeographicCoverage } from '@/components/sections/GeographicCoverage';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { RolesGrid } from '@/components/sections/RolesGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { Industries } from '@/components/sections/Industries';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { StaffingPlanCTA } from '@/components/sections/StaffingPlanCTA';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABand } from '@/components/sections/CTABand';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { SOLUTIONS, getSolution } from '@/lib/content/solutions';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

type Params = { slug: string };

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const sol = getSolution(params.slug);
  if (!sol) return {};
  return {
    title: sol.metaTitle,
    description: sol.metaDescription,
    alternates: alternatesFor(`/solutions/${sol.slug}`),
    openGraph: {
      title: sol.metaTitle,
      description: sol.metaDescription,
      url: `${site.url}/solutions/${sol.slug}`,
      ...(sol.heroImage
        ? { images: [{ url: sol.heroImage, width: 1200, height: 630, alt: sol.name }] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: sol.metaTitle,
      description: sol.metaDescription,
    },
  };
}

export default function SolutionPage({ params }: { params: Params }) {
  const sol = getSolution(params.slug);
  if (!sol) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: sol.name, href: `/solutions/${sol.slug}` },
  ];

  const heroImage = sol.heroImage ?? '/images/cc-team-meeting.jpg';

  const headlineWords = sol.hero.headline.split(' ');
  const splitIndex = Math.max(0, headlineWords.length - 3);
  const headlineLead = headlineWords.slice(0, splitIndex).join(' ');
  const headlineTail = headlineWords.slice(splitIndex).join(' ');

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <ServiceSchema
        name={sol.name}
        description={sol.metaDescription}
        serviceType="Staffing solution"
        areaServed={['US', 'CA', 'MX', 'PH', 'CO']}
        url={`${site.url}/solutions/${sol.slug}`}
      />
      <FAQSchema items={sol.faqs} />

      {/* HERO — homepage template */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src={heroImage}
          alt={sol.name}
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
              {sol.hero.eyebrow}
            </span>

            <h1 className="mt-6 text-balance font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3.5rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-white">
              {headlineLead && <>{headlineLead} </>}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 text-accent-500">{headlineTail}</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1.5 h-3 rounded-sm bg-accent-500/20 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              {sol.hero.subhead}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#staffing-plan" size="lg" withArrow>
                Get a written plan
              </Button>
              <a
                href="#approach"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                Our approach
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Quote form — same as homepage */}
          <div className="lg:col-span-5 lg:pl-4">
            <HeroQuoteForm />
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* PROBLEM + APPROACH — split */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Problem card */}
            <div className="rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-10 shadow-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-500">
                <AlertCircle className="h-3.5 w-3.5" />
                The problem
              </span>
              <Heading level={2} display="m" className="mt-5">
                Why most operators end up running recruiting twice.
              </Heading>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-navy-700">
                {sol.problem.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Approach card */}
            <div
              id="approach"
              className="rounded-3xl bg-gradient-to-br from-navy-950 to-navy-900 text-white p-7 lg:p-10 ring-1 ring-white/10 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-500">
                  <Lightbulb className="h-3.5 w-3.5" />
                  Our approach
                </span>
                <h2 className="mt-5 font-display text-[1.75rem] lg:text-[2rem] font-extrabold leading-tight tracking-[-0.025em] text-white">
                  How we solve it differently.
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/80">
                  {sol.ourApproach.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* APPROACH STEPS */}
      {sol.approachSteps && sol.approachSteps.length > 0 && (
        <Section background="neutral">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
              <div className="lg:col-span-7">
                <Eyebrow>The playbook</Eyebrow>
                <Heading level={2} display="l" className="mt-5 max-w-2xl">
                  Step by step — the discipline behind the outcome.
                </Heading>
              </div>
              <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
                Every step has a named owner on our team and a shared status doc with yours.
              </p>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {sol.approachSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="relative rounded-3xl border border-navy-950/8 bg-white p-7 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div
                    aria-hidden
                    className="figure-num absolute top-3 right-5 text-[3.5rem] leading-none text-accent-500/15 select-none"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent-500">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold tracking-tight text-navy-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-700">{step.body}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {/* OUTCOMES — dashboard-style scorecard */}
      <OutcomesPanel
        outcomes={sol.outcomes}
        intro="The numbers we report against on every engagement. Honest benchmarks from active deployments."
        background="white"
      />

      {/* CASE STUDY */}
      {sol.caseStudy && (
        <Section background="neutral">
          <Container>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-5 relative min-h-[360px]">
                <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy-950/5">
                  <Image
                    src="/images/hd-office-team.jpg"
                    alt={sol.caseStudy.company}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-lg">
                      Case study
                    </span>
                    <div className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white drop-shadow-lg">
                      {sol.caseStudy.company}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center">
                <Eyebrow>How it played out</Eyebrow>
                <Heading level={2} display="m" className="mt-5">
                  From challenge to outcome — in their words.
                </Heading>

                <div className="mt-8 space-y-5">
                  <div className="rounded-2xl border border-navy-950/8 bg-white p-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                      The challenge
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-navy-700">
                      {sol.caseStudy.challenge}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 text-white p-6 ring-1 ring-white/10">
                    <div className="flex items-center gap-2">
                      <Quote className="h-4 w-4 text-accent-500" />
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                        The result
                      </div>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/90">
                      {sol.caseStudy.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Reuse homepage sections so the page literally feels like the homepage */}
      <SolutionsGrid />
      <RolesGrid />
      <GeographicCoverage />
      <Testimonials />
      <Industries />
      <ProcessSteps
        intro="No black box. Every step has a named owner on our team and a shared status doc with yours."
      />
      <StaffingPlanCTA />
      <FAQSection
        heading={`${sol.name} — common questions.`}
        items={sol.faqs}
        background="white"
      />
      <CTABand
        headline={`Ready for ${sol.name.toLowerCase()}?`}
        sub="A senior account manager sends a written staffing plan within one business day — built around your forecast, not a generic template."
      />
    </>
  );
}
