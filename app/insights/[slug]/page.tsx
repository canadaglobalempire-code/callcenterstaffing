import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Wrench,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABand } from '@/components/sections/CTABand';
import { StaffingPlanCTA } from '@/components/sections/StaffingPlanCTA';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { INSIGHTS, getInsight } from '@/lib/content/insights';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

type Params = { slug: string };

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const insight = getInsight(params.slug);
  if (!insight) return {};
  return {
    title: insight.metaTitle,
    description: insight.metaDescription,
    alternates: alternatesFor(`/insights/${insight.slug}`),
    openGraph: {
      title: insight.metaTitle,
      description: insight.metaDescription,
      url: `${site.url}/insights/${insight.slug}`,
      type: 'article',
      ...(insight.heroImage
        ? {
            images: [
              {
                url: insight.heroImage,
                width: 1200,
                height: 630,
                alt: insight.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: insight.metaTitle,
      description: insight.metaDescription,
    },
  };
}

const FALLBACK_IMAGE = '/images/cc-team-meeting.jpg';

/**
 * Render a paragraph string and turn inline path tokens (e.g. "/services/foo")
 * into Next Link components. Same pattern used by the blog renderer so
 * authors can write internal links inline as plain strings.
 */
function renderParagraph(text: string, key: number): ReactNode {
  const regex = /(\/[a-z0-9][a-z0-9\-/]*[a-z0-9])/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const href = match[1];
    parts.push(
      <Link
        key={`${key}-l-${i++}`}
        href={href}
        className="font-semibold text-accent-500 underline decoration-accent-500/30 underline-offset-[3px] hover:decoration-accent-500"
      >
        {href}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return (
    <p key={key} className="mt-5 text-[17px] leading-[1.75] text-navy-700">
      {parts}
    </p>
  );
}

export default function InsightPage({ params }: { params: Params }) {
  const insight = getInsight(params.slug);
  if (!insight) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Insights', href: '/insights' },
    { label: insight.title, href: `/insights/${insight.slug}` },
  ];

  const heroImage = insight.heroImage ?? FALLBACK_IMAGE;

  const related = (insight.relatedSlugs ?? [])
    .map((slug) => getInsight(slug))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      {insight.faqs && insight.faqs.length > 0 && (
        <FAQSchema items={insight.faqs} />
      )}

      {/* HERO — split, dark navy, About-style */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src={heroImage}
          alt={insight.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/45"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/15"
        />
        <div aria-hidden className="absolute inset-0 pattern-grid opacity-15" />
        <div
          aria-hidden
          className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent-500/25 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl"
        />

        <Container className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All operator insights
            </Link>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              Pain-point insight
            </span>

            <h1 className="mt-6 font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3.75rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-white">
              {insight.symptom}
            </h1>

            <p className="mt-6 max-w-[640px] text-[17px] lg:text-lg leading-relaxed text-white/80">
              {insight.excerpt} You are not the first operator we have seen with
              this pattern, and the fix is more concrete than most teams expect.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a written plan
              </Button>
              <a
                href="#fix"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                See the fix
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

      {/* DIAGNOSTICS — "Are you seeing this?" */}
      <Section background="white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-10 shadow-sm ring-1 ring-navy-950/5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                  <AlertTriangle className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <Eyebrow>Are you seeing this?</Eyebrow>
              </div>

              <Heading
                level={2}
                className="mt-5 text-navy-950 !text-[1.75rem] lg:!text-[2.125rem] !font-bold !tracking-[-0.025em]"
              >
                If any of these are true, this insight applies to you.
              </Heading>

              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {insight.diagnostics.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-navy-950/8 bg-white p-4 lg:p-5 transition-colors hover:border-accent-500/30"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 flex-none text-accent-500"
                      strokeWidth={2.25}
                    />
                    <span className="text-[15px] leading-relaxed text-navy-700">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* THE FIX — main content / sections */}
      <Section id="fix" background="neutral">
        <Container>
          <article className="mx-auto max-w-3xl">
            <Eyebrow>The fix</Eyebrow>
            <Heading
              level={2}
              display="l"
              className="mt-5 text-navy-950"
            >
              Why this is happening — and what to do about it.
            </Heading>

            <div className="mt-10">
              {insight.sections.map((section, i) => (
                <div key={i} className={i === 0 ? '' : 'mt-10'}>
                  {section.heading && section.level === 3 ? (
                    <Heading
                      level={3}
                      className="text-navy-950 !text-[1.375rem] lg:!text-[1.5rem]"
                    >
                      {section.heading}
                    </Heading>
                  ) : section.heading ? (
                    <Heading
                      level={2}
                      className="text-navy-950 !text-[1.625rem] lg:!text-[1.875rem] !font-bold !tracking-[-0.02em]"
                    >
                      {section.heading}
                    </Heading>
                  ) : null}

                  {section.paragraphs?.map((p, pi) => renderParagraph(p, pi))}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-3 text-[16px] leading-[1.7] text-navy-700"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </article>
        </Container>
      </Section>

      {/* SPECIFIC FIXES — card grid */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>What to do this week</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Five operational fixes you can start on Monday.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              These are the specific, day-one moves we make on engagements that
              show this pattern. Not generic advice — the actual checklist.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {insight.fixes.map((f, i) => (
              <li
                key={i}
                className="relative rounded-3xl border border-navy-950/8 bg-white p-6 lg:p-7 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                    <Wrench className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                    Fix {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[1.0625rem] lg:text-[1.125rem] font-bold tracking-tight text-navy-950 leading-snug">
                  {f.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-navy-700">
                  {f.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* HOW WE HELP */}
      <Section background="neutral">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl border border-navy-950/8 bg-white p-8 lg:p-12 shadow-sm">
            <Eyebrow>How we help</Eyebrow>
            <Heading level={2} display="m" className="mt-5">
              A senior account manager applies this playbook to your operation, in
              writing, in one business day.
            </Heading>
            <p className="mt-6 text-[17px] leading-relaxed text-navy-700 max-w-prose">
              Our team has run this fix for hundreds of operators. The work
              lives in two engagement models — pick the one that matches your
              situation, or let us recommend on the call.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link
                href="/services/call-center-recruitment"
                className="group flex items-start gap-4 rounded-2xl border border-navy-950/8 bg-white p-5 transition-all hover:border-accent-500/40 hover:shadow-sm"
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                  <ArrowRight className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                    Service
                  </div>
                  <div className="mt-1 font-display text-[1rem] font-bold tracking-tight text-navy-950 group-hover:text-accent-500 transition-colors">
                    Call Center Recruitment
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-700">
                    The full recruiting engagement — sourcing, screening, voice
                    samples, scorecard-aligned interviews, 90-day guarantee.
                  </p>
                </div>
              </Link>

              <Link
                href="/solutions/scaling-existing-call-center"
                className="group flex items-start gap-4 rounded-2xl border border-navy-950/8 bg-white p-5 transition-all hover:border-accent-500/40 hover:shadow-sm"
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                  <ArrowRight className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                    Solution
                  </div>
                  <div className="mt-1 font-display text-[1rem] font-bold tracking-tight text-navy-950 group-hover:text-accent-500 transition-colors">
                    Scaling an Existing Call Center
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-700">
                    Cohort waves, frozen QA bar, weekly calibration — built for
                    operators going from a stable floor to a 30 to 100 percent
                    expansion.
                  </p>
                </div>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" withArrow>
                Talk to a recruiter
              </Button>
              <Link
                href="/how-we-work"
                className="group inline-flex items-center gap-2 rounded-full border border-navy-950/15 px-6 h-14 text-[15px] font-semibold text-navy-950 hover:border-navy-950 hover:shadow-md transition-all"
              >
                See how we work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* RELATED INSIGHTS */}
      {related.length > 0 && (
        <Section background="white">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
              <div className="lg:col-span-7">
                <Eyebrow>Related insights</Eyebrow>
                <Heading level={2} display="m" className="mt-5 max-w-2xl">
                  Other patterns we see on the floor.
                </Heading>
              </div>
              <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
                These problems usually travel together. If one applies, the
                others probably do too.
              </p>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => (
                <li key={rp.slug}>
                  <Link
                    href={`/insights/${rp.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-navy-950/8 bg-white p-6 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-navy-950/5">
                      <Image
                        src={rp.heroImage ?? FALLBACK_IMAGE}
                        alt={rp.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500 shadow-sm">
                        Pain point
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[1.0625rem] font-bold leading-snug tracking-tight text-navy-950 group-hover:text-accent-500 transition-colors">
                      {rp.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-navy-700 line-clamp-3">
                      {rp.symptom}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-accent-500 mt-auto pt-4">
                      Read the fix
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {/* FAQs */}
      {insight.faqs && insight.faqs.length > 0 && (
        <FAQSection
          heading={`${insight.primaryKeyword} — common questions.`}
          items={insight.faqs}
          background={related.length > 0 ? 'neutral' : 'white'}
        />
      )}

      <StaffingPlanCTA />

      <CTABand
        headline="Ready to fix this at the source?"
        sub="A senior account manager writes a plan against your forecast — sourcing timeline, screening criteria, written quote. One business day, no decks."
      />
    </>
  );
}
