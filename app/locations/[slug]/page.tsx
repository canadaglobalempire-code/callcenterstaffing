import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Languages,
  Clock,
  Globe2,
  Users,
  GraduationCap,
  ShieldCheck,
  Target,
  CheckCircle2,
  Briefcase,
  CalendarClock,
  Banknote,
  Scale,
  ListChecks,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTABand } from '@/components/sections/CTABand';
import { FAQSection } from '@/components/sections/FAQSection';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { REGIONS, getRegion } from '@/lib/content/regions';
import { LOCATIONS, getLocation } from '@/lib/content/locations';
import { getLocationDetail } from '@/lib/content/locations-detail';
import { getService } from '@/lib/content/services';
import { getRole } from '@/lib/content/roles';
import { site } from '@/lib/site';
import { alternatesFor, socialImages } from '@/lib/seo';

type Region = NonNullable<ReturnType<typeof getRegion>>;
type Location = NonNullable<ReturnType<typeof getLocation>>;

export function generateStaticParams() {
  return [
    ...REGIONS.map((r) => ({ slug: r.slug })),
    ...LOCATIONS.map((l) => ({ slug: l.slug })),
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const region = getRegion(params.slug);
  if (region) {
    const images = socialImages(`Call center staffing in ${region.name}`, region.image);
    return {
      title: region.metaTitle,
      description: region.metaDescription,
      alternates: alternatesFor(`/locations/${region.slug}`),
      openGraph: {
        title: region.metaTitle,
        description: region.metaDescription,
        url: `${site.url}/locations/${region.slug}`,
        type: 'website',
        images: images.openGraph,
      },
      twitter: {
        card: 'summary_large_image',
        title: region.metaTitle,
        description: region.metaDescription,
        images: images.twitter,
      },
    };
  }

  const location = getLocation(params.slug);
  if (location) {
    const images = socialImages(
      `Call center staffing in ${location.name}`,
      location.heroImage,
    );
    return {
      title: location.metaTitle,
      description: location.metaDescription,
      alternates: alternatesFor(`/locations/${location.slug}`),
      openGraph: {
        title: location.metaTitle,
        description: location.metaDescription,
        url: `${site.url}/locations/${location.slug}`,
        type: 'website',
        images: images.openGraph,
      },
      twitter: {
        card: 'summary_large_image',
        title: location.metaTitle,
        description: location.metaDescription,
        images: images.twitter,
      },
    };
  }

  return {};
}

export default function LocationsSlugPage({ params }: { params: { slug: string } }) {
  const region = getRegion(params.slug);
  if (region) return <RegionView region={region} />;

  const location = getLocation(params.slug);
  if (location) return <LocationView location={location} />;

  notFound();
}

function RegionView({ region }: { region: Region }) {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Regions', href: '/locations' },
    { label: region.name, href: `/locations/${region.slug}` },
  ];

  const snapshot = [
    { icon: Users, label: 'Talent pool', value: region.talentSnapshot.talentPool },
    { icon: Languages, label: 'English', value: region.talentSnapshot.englishProficiency },
    { icon: GraduationCap, label: 'Avg. tenure', value: region.talentSnapshot.avgTenure },
    { icon: Clock, label: 'Time zones', value: region.talentSnapshot.timeZones },
    { icon: Globe2, label: 'Languages', value: region.talentSnapshot.languages },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={region.faqs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src={region.image}
          alt={`Call center staffing in ${region.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/15" />
        <div aria-hidden className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent-500/30 blur-3xl" />
        <div aria-hidden className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl" />

        <Container className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="text-base leading-none">{region.globe}</span>
              {region.name} · {region.shore}
            </span>

            <h1 className="mt-6 font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
              {region.h1}
            </h1>

            <p className="mt-6 max-w-[600px] text-[17px] lg:text-lg leading-relaxed text-white/80">
              {region.intro}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a quote
              </Button>
              <Link
                href="/locations"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                All regions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md lg:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                    Regional talent read
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white">
                    {region.name} at a glance
                  </h2>
                </div>
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-accent-500 text-white">
                  <MapPin className="h-5 w-5" strokeWidth={2.4} />
                </span>
              </div>

              <dl className="mt-6 grid gap-3">
                {snapshot.slice(0, 4).map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
                      <dt className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                        <Icon className="h-3.5 w-3.5 text-accent-500" />
                        {s.label}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold leading-snug text-white">
                        {s.value}
                      </dd>
                    </div>
                  );
                })}
              </dl>

              <p className="mt-5 text-sm leading-relaxed text-white/68">
                We use regional wage, language, tenure and time-zone signals to recommend where
                the next cohort should sit.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* WHY HERE + SNAPSHOT */}
      <Section background="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Why {region.name}</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Why companies staff agents in {region.name}.
              </Heading>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {region.whyHere.map((w) => (
                  <li
                    key={w.title}
                    className="rounded-3xl border border-navy-950/8 bg-white p-6 transition-colors hover:border-accent-500/40"
                  >
                    <div className="flex items-center gap-2 font-display text-[15px] font-bold tracking-tight text-navy-950">
                      <CheckCircle2 className="h-5 w-5 flex-none text-accent-500" strokeWidth={2.25} />
                      {w.title}
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-navy-700">{w.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Talent snapshot */}
            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-navy-950/10 bg-ink-50 p-6 lg:p-7">
                <p className="text-eyebrow uppercase tracking-[0.16em] text-navy-700/80">
                  {region.name} talent snapshot
                </p>
                <ul className="mt-5 grid gap-5">
                  {snapshot.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li
                        key={s.label}
                        className="flex items-start gap-3 border-t border-navy-950/10 pt-5 first:border-t-0 first:pt-0"
                      >
                        <Icon className="h-5 w-5 mt-0.5 flex-none text-accent-500" />
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-navy-700/70">
                            {s.label}
                          </div>
                          <div className="mt-0.5 text-[14px] font-medium leading-snug text-navy-950">
                            {s.value}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* KEY MARKETS */}
      <Section background="neutral">
        <Container>
          <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Where we recruit</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Key markets we staff across {region.name}.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">{region.bestFor}</p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {region.keyMarkets.map((m) => (
              <li
                key={m.name}
                className="flex h-full flex-col rounded-3xl border border-navy-950/8 bg-white p-6 transition-all hover:border-accent-500/40 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                  <MapPin className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="mt-5 font-display text-lg font-bold tracking-tight text-navy-950">
                  {m.name}
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-700">{m.note}</p>
              </li>
            ))}
          </ul>

          {/* Best-for + compliance band */}
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="flex items-start gap-4 rounded-3xl border border-navy-950/8 bg-white p-7">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                <Target className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <div className="font-display text-sm font-extrabold uppercase tracking-wider text-navy-950">
                  Best for
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-700">{region.bestFor}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-3xl border border-navy-950/8 bg-white p-7">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                <ShieldCheck className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <div className="font-display text-sm font-extrabold uppercase tracking-wider text-navy-950">
                  Compliance &amp; data
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-700">{region.compliance}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FAQSection
        heading={`Call center staffing in ${region.name} — FAQs.`}
        items={region.faqs}
        background="white"
        image={region.image}
        imageAlt={`Call center staffing in ${region.name}`}
        ctaHref="/contact"
        ctaLabel="Talk to a recruiter"
      />

      <CTABand
        headline={`Need trained agents in ${region.name}?`}
        sub="Tell us the work — inbound, outbound, blended, B2B or B2C — your volume and any compliance needs. A senior recruiter sends a written staffing plan within one business day."
      />
    </>
  );
}

const SHORE_LABEL: Record<Location['region'], string> = {
  onshore: 'Onshore',
  nearshore: 'Nearshore',
  offshore: 'Offshore',
};

function LocationView({ location }: { location: Location }) {
  const detail = getLocationDetail(location.slug);
  const relatedServices = (detail?.relatedServices ?? [])
    .map((slug) => getService(slug))
    .filter((svc): svc is NonNullable<typeof svc> => Boolean(svc));

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: location.name, href: `/locations/${location.slug}` },
  ];

  const snapshot = [
    { icon: Users, label: 'Talent pool', value: location.talentSnapshot.talentPoolSize },
    { icon: Languages, label: 'English', value: location.talentSnapshot.avgEnglishProficiency },
    { icon: GraduationCap, label: 'Avg. tenure', value: location.talentSnapshot.avgTenure },
    { icon: Clock, label: 'Time zones', value: location.talentSnapshot.timeZones.join(' · ') },
    { icon: Globe2, label: 'Languages', value: location.talentSnapshot.languages.join(', ') },
  ];

  const roles = location.rolesAvailable
    .map((slug) => getRole(slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <ServiceSchema
        name={`Call center staffing in ${location.name}`}
        description={location.metaDescription}
        serviceType="Staffing and recruiting"
        areaServed={[location.name]}
        url={`${site.url}/locations/${location.slug}`}
      />
      <FAQSchema items={location.faqs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src={location.heroImage}
          alt={`Call center staffing in ${location.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/15" />
        <div aria-hidden className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent-500/30 blur-3xl" />
        <div aria-hidden className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl" />

        <Container className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="text-base leading-none">{location.flagEmoji}</span>
              {location.hero.eyebrow}
            </span>

            <h1 className="mt-6 font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
              {location.hero.headline}
            </h1>

            <p className="mt-6 max-w-[600px] text-[17px] lg:text-lg leading-relaxed text-white/80">
              {location.hero.subhead}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a quote
              </Button>
              <Link
                href="/locations"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                All locations
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <dl className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ['Model', SHORE_LABEL[location.region]],
                ['First slate', 'In about 72 hours'],
                ...(location.staffingSince
                  ? ([['Staffing here since', location.staffingSince]] as const)
                  : []),
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
            <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md lg:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                    {SHORE_LABEL[location.region]} talent read
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white">
                    {location.name} at a glance
                  </h2>
                </div>
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-accent-500 text-white">
                  <MapPin className="h-5 w-5" strokeWidth={2.4} />
                </span>
              </div>

              <dl className="mt-6 grid gap-3">
                {snapshot.slice(0, 4).map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
                      <dt className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                        <Icon className="h-3.5 w-3.5 text-accent-500" />
                        {s.label}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold leading-snug text-white">
                        {s.value}
                      </dd>
                    </div>
                  );
                })}
              </dl>

              <p className="mt-5 text-sm leading-relaxed text-white/68">
                We benchmark wage, language, tenure and time-zone signals for {location.name} before
                we brief a single candidate.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* INTRO */}
      {detail?.intro && (
        <Section background="white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>Staffing in {location.name}</Eyebrow>
                <Heading level={2} display="l" className="mt-5 max-w-2xl">
                  What staffing {location.name} actually involves.
                </Heading>
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-navy-700">
                  <p>{detail.intro}</p>
                  {detail.introSecondary && <p>{detail.introSecondary}</p>}
                </div>
              </div>

              {detail.bodyImages?.[0] && (
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-navy-950/8">
                    <Image
                      src={detail.bodyImages[0].src}
                      alt={detail.bodyImages[0].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* WHY HERE + SNAPSHOT */}
      <Section background="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Why {location.name}</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Why operators staff call-center agents in {location.name}.
              </Heading>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {location.whyHere.map((w) => (
                  <li
                    key={w.title}
                    className="rounded-3xl border border-navy-950/8 bg-white p-6 transition-colors hover:border-accent-500/40"
                  >
                    <div className="flex items-center gap-2 font-display text-[15px] font-bold tracking-tight text-navy-950">
                      <CheckCircle2 className="h-5 w-5 flex-none text-accent-500" strokeWidth={2.25} />
                      {w.title}
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-navy-700">{w.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Talent snapshot */}
            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-navy-950/10 bg-ink-50 p-6 lg:p-7">
                <p className="text-eyebrow uppercase tracking-[0.16em] text-navy-700/80">
                  {location.name} talent snapshot
                </p>
                <ul className="mt-5 grid gap-5">
                  {snapshot.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li
                        key={s.label}
                        className="flex items-start gap-3 border-t border-navy-950/10 pt-5 first:border-t-0 first:pt-0"
                      >
                        <Icon className="h-5 w-5 mt-0.5 flex-none text-accent-500" />
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-navy-700/70">
                            {s.label}
                          </div>
                          <div className="mt-0.5 text-[14px] font-medium leading-snug text-navy-950">
                            {s.value}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* CITIES / MARKETS */}
      <Section background="neutral">
        <Container>
          <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Where we recruit</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Markets we recruit in across {location.name}.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Each city has its own wage benchmark, tenure pattern and agent profile. We recommend
              the market that fits your queue, compliance posture and budget — not a one-size floor.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {location.cities.map((c) => (
              <li
                key={c.name}
                className="flex h-full flex-col rounded-3xl border border-navy-950/8 bg-white p-6 transition-all hover:border-accent-500/40 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                  <MapPin className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="mt-5 font-display text-lg font-bold tracking-tight text-navy-950">
                  {c.name}
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-700">{c.note}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* COST BENCHMARK */}
      {detail?.costBenchmark && (
        <Section background="white">
          <Container>
            <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>Cost benchmarks</Eyebrow>
                <Heading level={2} display="l" className="mt-5 max-w-2xl">
                  What agents in {location.name} actually cost.
                </Heading>
              </div>
              <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
                {detail.costBenchmark.summary}
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-navy-950/8">
              <table className="w-full min-w-[38rem] border-collapse text-left">
                <thead>
                  <tr className="bg-ink-50">
                    <th className="px-6 py-4 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-navy-700">
                      Role
                    </th>
                    <th className="px-6 py-4 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-navy-700">
                      Indicative loaded cost
                    </th>
                    <th className="px-6 py-4 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-navy-700">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {detail.costBenchmark.rows.map((row) => (
                    <tr key={row.role} className="border-t border-navy-950/8 bg-white">
                      <td className="px-6 py-4 font-display text-[15px] font-bold tracking-tight text-navy-950">
                        {row.role}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-[15px] font-bold text-accent-500">
                        {row.band}
                      </td>
                      <td className="px-6 py-4 text-[13px] leading-relaxed text-navy-700">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-navy-950/8 bg-ink-50 px-6 py-5">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                <Banknote className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="text-[13px] leading-relaxed text-navy-700">
                {detail.costBenchmark.disclaimer}
              </p>
            </div>
          </Container>
        </Section>
      )}

      {/* HOW WE HIRE HERE */}
      {detail?.hiringProcess && detail.hiringProcess.length > 0 && (
        <Section background="neutral">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Eyebrow>How we hire here</Eyebrow>
                <Heading level={2} display="l" className="mt-5">
                  The {location.name} playbook.
                </Heading>
                <p className="mt-6 text-[15px] leading-relaxed text-navy-700">
                  Every market rewards a different sourcing decision. These are the ones that
                  actually move retention and quality in {location.name} — not a generic recruiting
                  process with the country name swapped in.
                </p>
                {detail.bodyImages?.[1] && (
                  <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl border border-navy-950/8">
                    <Image
                      src={detail.bodyImages[1].src}
                      alt={detail.bodyImages[1].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="lg:col-span-7">
                <ul className="grid gap-5">
                  {detail.hiringProcess.map((step, i) => (
                    <li
                      key={step.title}
                      className="relative rounded-3xl border border-navy-950/8 bg-white p-7 transition-all hover:border-accent-500/40 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div
                        aria-hidden
                        className="absolute right-5 top-3 select-none font-display text-[3.5rem] leading-none text-accent-500/15"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent-500">
                        Step {i + 1}
                      </span>
                      <h3 className="mt-5 max-w-xl font-display text-base font-bold tracking-tight text-navy-950">
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
      )}

      {/* ROLES WE STAFF HERE */}
      {roles.length > 0 && (
        <Section background="white">
          <Container>
            <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>Roles we place</Eyebrow>
                <Heading level={2} display="l" className="mt-5 max-w-2xl">
                  Roles we staff in {location.name}.
                </Heading>
              </div>
              <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
                Frontline, leadership, QA and operations — sourced against the same scorecard,
                wherever the work sits.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {roles.map((role) => (
                <li key={role.slug}>
                  <Link
                    href={`/roles/${role.slug}`}
                    className="group flex h-full items-start gap-4 rounded-3xl border border-navy-950/8 bg-white p-6 transition-all hover:border-accent-500/40 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                      <Briefcase className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div className="flex-1">
                      <div className="font-display text-base font-bold tracking-tight text-navy-950 transition-colors group-hover:text-accent-500">
                        {role.name}
                      </div>
                      <div className="mt-1 text-[13px] leading-snug text-navy-700">
                        {role.shortName}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 flex-none text-navy-700/40 transition-all group-hover:translate-x-1 group-hover:text-accent-500" />
                  </Link>
                </li>
              ))}
            </ul>

            {location.staffingSince && (
              <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-navy-950/8 bg-ink-50 px-6 py-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                  <CalendarClock className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="font-display text-base font-bold tracking-tight text-navy-950">
                  Recruiting in {location.name} since {location.staffingSince} · {SHORE_LABEL[location.region]}{' '}
                  · 100,000+ trained agents across our network
                </div>
              </div>
            )}
          </Container>
        </Section>
      )}

      {/* COMPLIANCE */}
      {detail?.compliance && detail.compliance.length > 0 && (
        <Section background="neutral">
          <Container>
            <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>Compliance &amp; risk</Eyebrow>
                <Heading level={2} display="l" className="mt-5 max-w-2xl">
                  What your legal team will ask about {location.name}.
                </Heading>
              </div>
              <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
                We staff to whatever constraints your compliance team sets. What follows is the
                landscape, not legal advice — the regulatory position stays yours.
              </p>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2">
              {detail.compliance.map((item) => (
                <li
                  key={item.title}
                  className="rounded-3xl border border-navy-950/8 bg-white p-7 transition-all hover:border-accent-500/40 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                    <ShieldCheck className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold tracking-tight text-navy-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-700">{item.body}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {/* COMPARISON */}
      {detail?.comparison && (
        <Section background="white">
          <Container>
            <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>Honest comparison</Eyebrow>
                <Heading level={2} display="l" className="mt-5 max-w-2xl">
                  {location.name} vs {detail.comparison.alternativeName}.
                </Heading>
              </div>
              <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
                {detail.comparison.summary}
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-navy-950/8">
              <table className="w-full min-w-[38rem] border-collapse text-left">
                <thead>
                  <tr className="bg-ink-50">
                    <th className="px-6 py-4 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-navy-700">
                      Factor
                    </th>
                    <th className="px-6 py-4 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-accent-500">
                      {location.name}
                    </th>
                    <th className="px-6 py-4 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-navy-700">
                      {detail.comparison.alternativeName}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {detail.comparison.rows.map((row) => (
                    <tr key={row.factor} className="border-t border-navy-950/8 bg-white">
                      <td className="px-6 py-4 font-display text-[14px] font-bold tracking-tight text-navy-950">
                        {row.factor}
                      </td>
                      <td className="px-6 py-4 text-[13px] leading-relaxed text-navy-700">
                        {row.here}
                      </td>
                      <td className="px-6 py-4 text-[13px] leading-relaxed text-navy-700">
                        {row.alternative}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-navy-950/8 bg-ink-50 px-6 py-5">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                <Scale className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="text-[13px] leading-relaxed text-navy-700">
                Not sure which side you fall on? Tell us the queue, the volume and the compliance
                constraints. A senior recruiter will say which market fits — including when the
                answer is the other column.
              </p>
            </div>
          </Container>
        </Section>
      )}

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <Section background="neutral">
          <Container>
            <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>How we staff it</Eyebrow>
                <Heading level={2} display="l" className="mt-5 max-w-2xl">
                  Services we run in {location.name}.
                </Heading>
              </div>
              <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
                The staffing model matters as much as the market. These are the engagements we run
                here most often.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {relatedServices.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group flex h-full items-start gap-4 rounded-3xl border border-navy-950/8 bg-white p-6 transition-all hover:border-accent-500/40 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                      <ListChecks className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div className="flex-1">
                      <div className="font-display text-base font-bold tracking-tight text-navy-950 transition-colors group-hover:text-accent-500">
                        {svc.name}
                      </div>
                      <div className="mt-1 text-[13px] leading-snug text-navy-700">
                        {svc.hero.eyebrow}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 flex-none text-navy-700/40 transition-all group-hover:translate-x-1 group-hover:text-accent-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <FAQSection
        heading={`Call center staffing in ${location.name} — FAQs.`}
        items={location.faqs}
        background="neutral"
        image={location.heroImage}
        imageAlt={`Call center staffing in ${location.name}`}
        ctaHref="/contact"
        ctaLabel="Talk to a recruiter"
      />

      <CTABand
        headline={`Need trained agents in ${location.name}?`}
        sub="Tell us the work — inbound, outbound, blended, B2B or B2C — your volume and any compliance needs. A senior recruiter sends a written staffing plan within one business day."
      />
    </>
  );
}
