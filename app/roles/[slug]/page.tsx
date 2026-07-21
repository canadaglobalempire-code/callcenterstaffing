import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  Search,
  ScanFace,
  ListChecks,
  ClipboardCheck,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { GeographicCoverage } from '@/components/sections/GeographicCoverage';
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
import { ROLES, getRole } from '@/lib/content/roles';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

type Params = { slug: string };

export function generateStaticParams() {
  return ROLES.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const role = getRole(params.slug);
  if (!role) return {};
  return {
    title: role.metaTitle,
    description: role.metaDescription,
    alternates: alternatesFor(`/roles/${role.slug}`),
    openGraph: {
      title: role.metaTitle,
      description: role.metaDescription,
      url: `${site.url}/roles/${role.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: role.metaTitle,
      description: role.metaDescription,
    },
  };
}

const SCREEN_STEPS = [
  {
    icon: Search,
    title: 'Sourcing',
    body: 'Targeted outreach against our 100k+ trained-agent database, screened to your role spec and quality bar.',
  },
  {
    icon: ScanFace,
    title: 'Recorded voice + skills sample',
    body: 'Every shortlisted candidate ships with a recorded voice sample and a scored skills assessment.',
  },
  {
    icon: ListChecks,
    title: 'Structured behavioral interview',
    body: 'Two-round structured interview against the same competencies your QA team grades against.',
  },
  {
    icon: CheckCircle2,
    title: 'Reference + cohort fit',
    body: 'Two professional references and a final cohort-fit review with your hiring manager before offer.',
  },
];

const ROLE_HERO_IMAGES: Record<string, string> = {
  'inbound-customer-service': '/images/cc-woman-headset.jpg',
  'outbound-sales-agents': '/images/cc-agent-call.jpg',
  'bilingual-agents': '/images/cc-agent-headset.jpg',
  'team-leads-supervisors': '/images/cc-man-headset.jpg',
  'qa-analysts': '/images/cc-agent-focus.jpg',
  'workforce-management': '/images/cc-woman-typing.jpg',
  trainers: '/images/team-collaboration.jpg',
  'operations-managers': '/images/agents-office-pair.jpg',
};

export default function RolePage({ params }: { params: Params }) {
  const role = getRole(params.slug);
  if (!role) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Roles', href: '/roles' },
    { label: role.shortName, href: `/roles/${role.slug}` },
  ];

  const heroImage = ROLE_HERO_IMAGES[role.slug] ?? '/images/cc-team-meeting.jpg';

  const headlineWords = role.hero.headline.split(' ');
  const splitIndex = Math.max(0, headlineWords.length - 3);
  const headlineLead = headlineWords.slice(0, splitIndex).join(' ');
  const headlineTail = headlineWords.slice(splitIndex).join(' ');

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <ServiceSchema
        name={`${role.name} Staffing`}
        description={role.metaDescription}
        serviceType={role.name}
        areaServed={['US', 'CA', 'MX', 'PH', 'CO']}
        url={`${site.url}/roles/${role.slug}`}
      />
      <FAQSchema items={role.faqs} />

      {/* HERO — homepage template */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src={heroImage}
          alt={role.name}
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
              {role.hero.eyebrow}
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              {headlineLead && <>{headlineLead} </>}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">{headlineTail}</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              {role.hero.subhead}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#staffing-plan" size="lg" withArrow>
                Get a quote
              </Button>
              <a
                href="#screening"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                How we screen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-500" />
                <span className="font-semibold text-white">{role.placementTimeline}</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent-500" />
                90-day attrition guarantee
              </span>
            </div>
          </div>

          {/* Quote form — same as homepage */}
          <div className="lg:col-span-5 lg:pl-4">
            <HeroQuoteForm />
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* WHAT THIS ROLE DOES */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>What this role does</Eyebrow>
              <Heading level={2} display="l" className="mt-5">
                Beyond the job spec — what {role.shortName.toLowerCase()} actually do well.
              </Heading>
              <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-navy-700 max-w-prose">
                {role.whatTheyDo.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-28 rounded-3xl border border-accent-500/20 bg-gradient-to-br from-accent-500/8 via-white to-accent-500/5 p-7 lg:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500 text-white shadow-md">
                    <CheckCircle2 className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                      What we screen for
                    </div>
                    <div className="font-display text-base font-bold tracking-tight text-navy-950">
                      {role.skillsScreenedFor.length} core competencies
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {role.skillsScreenedFor.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-3 text-[14px] leading-snug text-navy-950"
                    >
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-500/15 text-accent-500">
                        <CheckCircle2 className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                {role.languagesSupported && (
                  <>
                    <div className="my-6 h-px bg-navy-950/10" />
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                      Languages we support
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {role.languagesSupported.map((l) => (
                        <li key={l}>
                          <span className="inline-flex items-center rounded-full bg-white border border-navy-950/8 px-3 py-1 text-xs font-semibold text-navy-950">
                            {l}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* SCREENING PLAYBOOK */}
      <Section id="screening" background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Our screening playbook</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                A four-step screen tuned to {role.shortName.toLowerCase()}.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Every shortlist ships with recorded voice samples and a scored assessment. You hear
              the agent before you hire them.
            </p>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SCREEN_STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.title}
                  className="relative rounded-3xl border border-navy-950/8 bg-white p-7 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div
                    aria-hidden
                    className="figure-num absolute top-3 right-5 text-[3.5rem] leading-none text-accent-500/15 select-none"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold tracking-tight text-navy-950">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-700">{s.body}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      {/* Reuse homepage sections so the page literally feels like the homepage */}
      <RolesGrid />
      <GeographicCoverage />
      <Testimonials />
      <Industries />
      <ProcessSteps
        intro="No black box. Every step has a named owner on our team and a shared status doc with yours."
      />
      <StaffingPlanCTA />
      <FAQSection
        heading={`${role.shortName} — common questions.`}
        items={role.faqs}
        background="white"
      />
      <CTABand
        headline={`Need ${role.shortName.toLowerCase()} placed?`}
        sub="Tell us your forecast and quality bar. A senior account manager will send a written quote within one business day."
      />
    </>
  );
}
