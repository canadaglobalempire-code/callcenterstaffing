import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { RolesGrid } from '@/components/sections/RolesGrid';
import { CTABand } from '@/components/sections/CTABand';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Call Center Roles We Staff: Agents, QA, WFM & Ops',
  description:
    'Every seat on the floor: inbound and outbound agents, bilingual agents, team leads, QA analysts, workforce management, trainers and operations managers. Trained, screened, deployed.',
  alternates: alternatesFor('/roles'),
  openGraph: {
    title: 'Call Center Roles We Staff: Agents, QA, WFM & Ops',
    description:
      'From frontline agents to ops directors, we recruit the entire stack — each role with a dedicated screening playbook.',
    url: `${site.url}/roles`,
    images: [
      {
        url: '/images/cc-woman-headset.jpg',
        width: 1200,
        height: 630,
        alt: 'Call center roles we staff',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Center Roles We Staff',
    description: 'From frontline agents to ops directors — we recruit the entire stack.',
  },
};

export default function RolesIndexPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Roles', href: '/roles' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/cc-woman-headset.jpg"
          alt="Call center roles we staff"
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
              Roles · Every seat on the floor
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Every role we staff,{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">trained and ready.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              From inbound and outbound agents to QA, workforce management and operations leadership,
              we recruit the entire contact-center stack. Every role has its own screening playbook —
              and you hear a voice sample before any agent starts.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a written plan
              </Button>
              <a
                href="#roles"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                Browse the roles
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

      <RolesGrid />

      <CTABand
        headline="Need a role that's not listed?"
        sub="Tell us the seat — agent, supervisor, QA, WFM or ops — and the volume. A senior recruiter sends a written staffing plan and sourcing timeline within one business day."
      />
    </>
  );
}
