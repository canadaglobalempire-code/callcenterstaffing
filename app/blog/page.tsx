import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTABand } from '@/components/sections/CTABand';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { POSTS } from '@/lib/content/posts';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Operator Notes — Call Center Staffing Blog',
  description:
    'Operational guides on scaling, retention, staffing cost, and hiring discipline for contact-center leaders. Written by senior account managers, not marketers.',
  alternates: alternatesFor('/blog'),
  openGraph: {
    title: 'Operator Notes — Call Center Staffing Blog',
    description:
      'Operational guides on scaling, retention and staffing cost for contact-center leaders.',
    url: `${site.url}/blog`,
    images: [
      {
        url: '/images/cc-team-meeting.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact-center operators reviewing staffing plans',
      },
    ],
  },
};

const FALLBACK_IMAGE = '/images/cc-team-meeting.jpg';

export default function BlogIndexPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ];

  const posts = [...POSTS].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
  const [featured, ...rest] = posts;

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src="/images/cc-team-plan.jpg"
          alt="Operator notes from the floor"
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
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              Operator notes
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Field notes from people who actually{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">
                  staff contact centers.
                </span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[640px] text-[17px] lg:text-lg leading-relaxed text-white/75">
              Operational guides on scaling, retention, staffing cost, and the
              hiring discipline behind cohorts that actually stay. Written by
              senior account managers who run live engagements every day — not by a
              marketing team writing about an industry from the outside.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#all-posts" size="lg" withArrow>
                Browse all posts
              </Button>
              <Link
                href="/how-we-work"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
              >
                How we work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* FEATURED POST */}
      {featured && (
        <Section background="white">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
              <div className="lg:col-span-7">
                <Eyebrow>Featured</Eyebrow>
                <Heading level={2} display="l" className="mt-5 max-w-2xl">
                  The most-read piece this month.
                </Heading>
              </div>
              <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
                The post operators are sharing internally with their workforce-management
                and hiring leads.
              </p>
            </div>

            <Link
              href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch rounded-3xl border border-navy-950/8 bg-white p-6 lg:p-8 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="relative lg:col-span-6 aspect-[4/3] lg:aspect-auto overflow-hidden rounded-2xl ring-1 ring-navy-950/5">
                <Image
                  src={featured.heroImage ?? FALLBACK_IMAGE}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-navy-700/70">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readingMinutes} min read
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[1.75rem] lg:text-[2.25rem] font-extrabold tracking-[-0.025em] text-navy-950 leading-[1.1] group-hover:text-accent-500 transition-colors">
                  {featured.title}
                </h3>

                <p className="mt-4 text-[15px] leading-relaxed text-navy-700">
                  {featured.excerpt}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-accent-500">
                  Read the full piece
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Container>
        </Section>
      )}

      {/* ALL POSTS */}
      <Section id="all-posts" background="neutral">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>All operator notes</Eyebrow>
              <Heading level={2} display="l" className="mt-5 max-w-2xl">
                Practical guides for the work in front of you.
              </Heading>
            </div>
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
              Every piece is written by someone who has placed into the role,
              the geography, or the regulatory environment it covers.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(rest.length ? rest : posts).map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-navy-950/8 bg-white p-6 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-navy-950/5">
                    <Image
                      src={post.heroImage ?? FALLBACK_IMAGE}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500 shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="mt-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-navy-700/60">
                      <Clock className="h-3 w-3" />
                      {post.readingMinutes} min read
                      <span aria-hidden className="opacity-50">·</span>
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>

                    <h3 className="mt-3 font-display text-[1.125rem] font-bold leading-snug tracking-tight text-navy-950 group-hover:text-accent-500 transition-colors">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-relaxed text-navy-700 line-clamp-4">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-accent-500 mt-auto pt-4">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Empty-state safeguard */}
          {posts.length === 0 && (
            <div className="rounded-3xl border border-navy-950/8 bg-white p-12 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-accent-500" />
              <p className="mt-4 text-navy-700">More operator notes coming soon.</p>
            </div>
          )}
        </Container>
      </Section>

      <CTABand
        headline="Want this thinking applied to your operation?"
        sub="A senior account manager writes a custom plan against your forecast — sourcing timeline, screening criteria, fee model. One business day, no decks."
      />
    </>
  );
}
