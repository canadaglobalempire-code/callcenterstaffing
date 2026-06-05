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
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTABand } from '@/components/sections/CTABand';
import { FAQSection } from '@/components/sections/FAQSection';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { REGIONS, getRegion } from '@/lib/content/regions';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export function generateStaticParams() {
  return REGIONS.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const region = getRegion(params.slug);
  if (!region) return {};
  return {
    title: region.metaTitle,
    description: region.metaDescription,
    alternates: alternatesFor(`/locations/${region.slug}`),
    openGraph: {
      title: region.metaTitle,
      description: region.metaDescription,
      url: `${site.url}/locations/${region.slug}`,
      images: [{ url: region.image, width: 1200, height: 630, alt: `Call center staffing in ${region.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: region.metaTitle,
      description: region.metaDescription,
    },
  };
}

export default function RegionPage({ params }: { params: { slug: string } }) {
  const region = getRegion(params.slug);
  if (!region) notFound();

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
                Get a Free Quote
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
            <HeroQuoteForm />
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
