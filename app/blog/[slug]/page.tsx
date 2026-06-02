import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import type { ReactNode } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { TrustBar } from '@/components/sections/TrustBar';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABand } from '@/components/sections/CTABand';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { BlogPostingSchema } from '@/components/seo/BlogPostingSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { POSTS, getPost } from '@/lib/content/posts';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

type Params = { slug: string };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: alternatesFor(`/blog/${post.slug}`),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${site.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      ...(post.heroImage
        ? { images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.title }] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

const FALLBACK_IMAGE = '/images/cc-team-meeting.jpg';

/**
 * Renders a paragraph string and turns inline path tokens (e.g. "/services/foo")
 * into Next Link components. Lets us keep the data layer pure-string while
 * still emitting real internal links in the rendered article.
 */
function renderParagraph(text: string, key: number): ReactNode {
  // Match /path tokens. Allows letters, digits, hyphens, slashes. Stops at
  // whitespace, comma, period, or sentence-ending punctuation.
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

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  const heroImage = post.heroImage ?? FALLBACK_IMAGE;
  const url = `${site.url}/blog/${post.slug}`;

  const related = (post.relatedPostSlugs ?? [])
    .map((slug) => getPost(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <BlogPostingSchema
        headline={post.title}
        description={post.metaDescription}
        url={url}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        author={post.author}
        image={heroImage}
        keywords={post.primaryKeyword}
        articleSection={post.category}
      />
      {post.faqs && post.faqs.length > 0 && <FAQSchema items={post.faqs} />}

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <Image
          src={heroImage}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/55"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/20"
        />
        <div aria-hidden className="absolute inset-0 pattern-grid opacity-15" />
        <div
          aria-hidden
          className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent-500/25 blur-3xl"
        />

        <Container className="relative">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All operator notes
            </Link>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              {post.category}
            </span>

            <h1 className="mt-6 font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3.75rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-white">
              {post.title}
            </h1>

            <p className="mt-6 max-w-[640px] text-[17px] lg:text-lg leading-relaxed text-white/80">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/70">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4 text-accent-500" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent-500" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-500" />
                {post.readingMinutes} min read
              </span>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* ARTICLE BODY */}
      <Section background="white">
        <Container>
          <article className="mx-auto max-w-3xl">
            {post.sections.map((section, i) => (
              <div key={i} className={i === 0 ? '' : 'mt-10'}>
                {section.heading && section.level === 3 ? (
                  <Heading level={3} className="text-navy-950 !text-[1.375rem] lg:!text-[1.5rem]">
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
          </article>
        </Container>
      </Section>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <Section background="neutral">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
              <div className="lg:col-span-7">
                <Eyebrow>Keep reading</Eyebrow>
                <Heading level={2} display="m" className="mt-5 max-w-2xl">
                  Related operator notes.
                </Heading>
              </div>
              <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
                More on the same operational thread — scaling, retention, and
                how staffing cost actually pencils out.
              </p>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => (
                <li key={rp.slug}>
                  <Link
                    href={`/blog/${rp.slug}`}
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
                        {rp.category}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[1.0625rem] font-bold leading-snug tracking-tight text-navy-950 group-hover:text-accent-500 transition-colors">
                      {rp.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-navy-700 line-clamp-3">
                      {rp.excerpt}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-accent-500 mt-auto pt-4">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {/* FAQS */}
      {post.faqs && post.faqs.length > 0 && (
        <FAQSection
          heading={`${post.primaryKeyword} — common questions.`}
          items={post.faqs}
          background={related.length > 0 ? 'white' : 'neutral'}
        />
      )}

      <CTABand
        headline="Want this applied to your operation?"
        sub="A senior account manager writes a plan against your forecast — sourcing timeline, screening criteria, written quote. One business day, no decks."
      />
    </>
  );
}
