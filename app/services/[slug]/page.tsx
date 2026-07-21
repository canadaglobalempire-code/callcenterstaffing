import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Sparkles, Lightbulb, Target, TrendingUp, Users, MapPin } from 'lucide-react';
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
import { SERVICES, getService } from '@/lib/content/services';
import { getRole } from '@/lib/content/roles';
import { getLocation } from '@/lib/content/locations';
import { site } from '@/lib/site';
import { alternatesFor, socialImages } from '@/lib/seo';

type Params = { slug: string };

const SERVICE_SUPPORT_IMAGES: Record<string, string> = {
  'call-center-recruitment': '/images/internet-call-center-agent-working.jpg',
  'bpo-recruitment': '/images/internet-call-center-agents-row.jpg',
  'contact-center-staffing': '/images/internet-call-center-headset-pair.jpg',
  'customer-service-staffing': '/images/internet-call-center-agent-working.jpg',
  'outsourced-call-center-staffing': '/images/internet-office-planning-meeting.jpg',
  'nearshore-call-center-staffing': '/images/internet-call-center-headset-pair.jpg',
  'offshore-call-center-staffing': '/images/internet-call-center-agents-row.jpg',
  'onshore-call-center-staffing': '/images/internet-office-team-meeting.jpg',
  'bilingual-call-center-staffing': '/images/internet-call-center-headset-pair.jpg',
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const svc = getService(params.slug);
  if (!svc) return {};
  const images = socialImages(svc.name, svc.heroImage);
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: alternatesFor(`/services/${svc.slug}`),
    openGraph: {
      title: svc.metaTitle,
      description: svc.metaDescription,
      url: `${site.url}/services/${svc.slug}`,
      type: 'website',
      images: images.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: svc.metaTitle,
      description: svc.metaDescription,
      images: images.twitter,
    },
  };
}

export default function ServicePage({ params }: { params: Params }) {
  const svc = getService(params.slug);
  if (!svc) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: svc.name, href: `/services/${svc.slug}` },
  ];

  const heroImage = svc.heroImage ?? '/images/cc-team-meeting.jpg';
  const supportImage =
    SERVICE_SUPPORT_IMAGES[svc.slug] ?? '/images/internet-office-planning-meeting.jpg';

  const headlineWords = svc.hero.headline.split(' ');
  const splitIndex = Math.max(0, headlineWords.length - 3);
  const headlineLead = headlineWords.slice(0, splitIndex).join(' ');
  const headlineTail = headlineWords.slice(splitIndex).join(' ');

  const relatedRoles = svc.relatedRoles
    .map((slug) => getRole(slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const relatedLocations = svc.relatedLocations
    .map((slug) => getLocation(slug))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <ServiceSchema
        name={svc.name}
        description={svc.metaDescription}
        serviceType="Staffing and recruiting"
        areaServed={['US', 'CA', 'MX', 'PH', 'CO']}
        url={`${site.url}/services/${svc.slug}`}
      />
      <FAQSchema items={svc.faqs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-40 text-white lg:pb-28 lg:pt-48">
        <Image
          src={heroImage}
          alt={svc.name}
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
              {svc.hero.eyebrow}
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
              {svc.hero.subhead}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#staffing-plan" size="lg" withArrow>
                Get a quote
              </Button>
              <a
                href="#what-is-it"
                className="group inline-flex h-14 items-center gap-2 rounded-full border border-white/25 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-navy-950"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <dl className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ['Model', 'Agents on our payroll'],
                ['Timing', 'First slate in about 72 hours'],
                ['Request', 'Protected form only'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-tight text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <HeroQuoteForm />
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* INTRO + WHAT IS IT */}
      <Section id="what-is-it" background="white">
        <Container>
          {/* Lead */}
          <div className="max-w-3xl">
            <Eyebrow>What it is</Eyebrow>
            <Heading level={2} display="m" className="mt-5">
              What is {svc.primaryKeyword}?
            </Heading>
            <p className="mt-6 text-body-l text-navy-700">{svc.intro}</p>
          </div>

          {/* Two equal columns */}
          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            {/* Left: specialist image card */}
            <div className="ring-navy-950/5 relative min-h-[340px] overflow-hidden rounded-3xl shadow-xl ring-1">
              <Image
                src={supportImage}
                alt={`${svc.name} staffing specialists`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="ring-navy-950/5 absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 px-5 py-4 shadow-2xl ring-1 backdrop-blur-sm">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                  Specialist recruiters
                </div>
                <div className="mt-1 font-display text-sm font-extrabold leading-tight text-navy-950">
                  20+ years recruiting only into the contact-center industry
                </div>
              </div>
            </div>

            {/* Right: what-is-it content card (equal weight) */}
            <div className="flex flex-col justify-center space-y-5 rounded-3xl border border-navy-950/8 bg-ink-50 p-7 text-[15px] leading-relaxed text-navy-700 lg:p-9">
              {svc.whatIsIt.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* WHO IT'S FOR */}
      <Section background="neutral">
        <Container>
          <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Who it&apos;s for</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Built for the operators who actually buy this work.
              </Heading>
            </div>
            <p className="max-w-prose text-body-l text-navy-700 lg:col-span-5">
              We do not place generalist clerical roles. {svc.name} is for the operators below — the
              discipline is narrow on purpose.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {svc.whoItsFor.map((w, i) => (
              <li
                key={w.title}
                className="border-navy-950/8 hover:border-accent-500/40 rounded-3xl border bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-accent-500/30 font-display text-3xl font-extrabold tracking-tight">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-base font-bold tracking-tight text-navy-950">
                  {w.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-700">{w.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* OUR APPROACH + STEPS */}
      <Section background="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Our approach</Eyebrow>
              <Heading level={2} display="l" className="mt-5">
                The discipline behind every cohort.
              </Heading>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-navy-700">
                {svc.ourApproach.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid gap-5 sm:grid-cols-2">
                {svc.approachSteps.map((step, i) => (
                  <li
                    key={step.title}
                    className="border-navy-950/8 hover:border-accent-500/40 relative rounded-3xl border bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div
                      aria-hidden
                      className="text-accent-500/15 absolute right-5 top-3 select-none font-display text-[3.5rem] leading-none"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className="bg-accent-500/10 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent-500">
                      Step {i + 1}
                    </span>
                    <h3 className="mt-5 font-display text-base font-bold tracking-tight text-navy-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-navy-700">{step.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* WHY CHOOSE US */}
      <Section background="neutral">
        <Container>
          <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Why choose us</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Why operators keep us on retainer for years.
              </Heading>
            </div>
            <p className="max-w-prose text-body-l text-navy-700 lg:col-span-5">
              We are specialists, not generalists. The screen, the calibration and the guarantee all
              line up with how operators actually run a contact center.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {svc.whyChooseUs.map((w, i) => {
              const Icons = [Sparkles, Lightbulb, Target, TrendingUp];
              const Icon = Icons[i % Icons.length];
              return (
                <li
                  key={w.title}
                  className="border-navy-950/8 hover:border-accent-500/40 rounded-3xl border bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="bg-accent-500/10 inline-flex h-11 w-11 items-center justify-center rounded-xl text-accent-500">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold tracking-tight text-navy-950">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-700">{w.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* OUTCOMES */}
      <OutcomesPanel
        outcomes={svc.outcomes}
        intro={`The numbers we report against on every ${svc.primaryKeyword} engagement. Honest benchmarks from active deployments.`}
        background="white"
      />

      {/* RELATED ROLES */}
      {relatedRoles.length > 0 && (
        <Section background="neutral">
          <Container>
            <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>Roles we place</Eyebrow>
                <Heading level={2} display="l" className="mt-5 max-w-2xl">
                  Roles included in {svc.name.toLowerCase()}.
                </Heading>
              </div>
              <p className="max-w-prose text-body-l text-navy-700 lg:col-span-5">
                Frontline, leadership, QA and operations — sourced against the same scorecard.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedRoles.map((role) => (
                <li key={role.slug}>
                  <Link
                    href={`/roles/${role.slug}`}
                    className="border-navy-950/8 hover:border-accent-500/40 group flex h-full items-start gap-4 rounded-3xl border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="bg-accent-500/10 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl text-accent-500">
                      <Users className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div className="flex-1">
                      <div className="font-display text-base font-bold tracking-tight text-navy-950 transition-colors group-hover:text-accent-500">
                        {role.name}
                      </div>
                      <div className="mt-1 text-[13px] leading-snug text-navy-700">
                        {role.shortName}
                      </div>
                    </div>
                    <ArrowRight className="text-navy-700/40 h-4 w-4 flex-none transition-all group-hover:translate-x-1 group-hover:text-accent-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {/* RELATED LOCATIONS */}
      {relatedLocations.length > 0 && (
        <Section background="white">
          <Container>
            <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>Where we recruit</Eyebrow>
                <Heading level={2} display="l" className="mt-5 max-w-2xl">
                  Markets we recruit in for {svc.name.toLowerCase()}.
                </Heading>
              </div>
              <p className="max-w-prose text-body-l text-navy-700 lg:col-span-5">
                Each market has its own playbook — wage benchmarks, attrition patterns and the agent
                profile we look for.
              </p>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2">
              {relatedLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="border-navy-950/8 hover:border-accent-500/40 group flex h-full items-start gap-5 rounded-3xl border bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="bg-accent-500/10 inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl text-accent-500">
                      <MapPin className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-navy-950 transition-colors group-hover:text-accent-500">
                        <span className="text-base leading-none">{loc.flagEmoji}</span>
                        {loc.name}
                      </div>
                      <div className="mt-2 text-[13px] leading-relaxed text-navy-700">
                        {loc.talentSnapshot.talentPoolSize} talent pool ·{' '}
                        {loc.talentSnapshot.languages.slice(0, 3).join(', ')}
                      </div>
                    </div>
                    <ArrowRight className="text-navy-700/40 h-4 w-4 flex-none transition-all group-hover:translate-x-1 group-hover:text-accent-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <FAQSection
        heading={`${svc.name} — common questions.`}
        items={svc.faqs}
        background="neutral"
        image="/images/cc-discussion.jpg"
        imageAlt={`Talk to a ${svc.name.toLowerCase()} recruiter`}
        ctaHref="/contact"
        ctaLabel="Talk to a recruiter"
      />

      <StaffingPlanCTA />

      <CTABand
        headline={`Ready to talk ${svc.primaryKeyword}?`}
        sub={`A senior account manager who has run ${svc.primaryKeyword} engagements for years writes your plan — not a generalist. We respond within one business day.`}
      />
    </>
  );
}
