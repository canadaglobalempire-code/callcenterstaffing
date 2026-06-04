import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  ListChecks,
  MessageSquareText,
  SearchCheck,
  User,
} from 'lucide-react';
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
import type { PostSection } from '@/lib/content/types';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

type Params = { slug: string };

type SectionView = PostSection & {
  id: string;
  index: number;
};

type ParsedRank = {
  number: string;
  title: string;
};

type ParsedBullet = {
  label: string;
  body: string;
};

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
const INLINE_CTA_AFTER_SECTION = 4;
const ARTICLE_IMAGE_POOL = [
  '/images/cc-team-meeting.jpg',
  '/images/cc-team-plan.jpg',
  '/images/cc-office-wide.jpg',
  '/images/hd-agents-working.jpg',
  '/images/call-center-team.jpg',
  '/images/internet-office-planning-meeting.jpg',
  '/images/agents-team-row.jpg',
  '/images/cc-management.jpg',
  '/images/cc-agent-headset.jpg',
  '/images/cc-diverse-team.jpg',
  '/images/agents-working.jpg',
  '/images/cc-team-desk.jpg',
];

function slugify(value: string) {
  return value
    .replace(/^#\d+\s+/, '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function buildSectionViews(sections: PostSection[]): SectionView[] {
  const seen = new Map<string, number>();

  return sections.map((section, index) => {
    const base = section.heading ? slugify(section.heading) || `section-${index + 1}` : `section-${index + 1}`;
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);

    return {
      ...section,
      id: count === 0 ? base : `${base}-${count + 1}`,
      index,
    };
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function parseRankedHeading(heading?: string): ParsedRank | null {
  const match = heading?.match(/^#(\d+)\s+(.+)/);
  if (!match) return null;
  return { number: match[1], title: match[2] };
}

function parseLabeledBullet(value: string): ParsedBullet | null {
  const match = value.match(/^([^:]{2,48}):\s+(.+)$/);
  if (!match) return null;
  return { label: match[1], body: match[2] };
}

function parseComparisonBullet(value: string): { number: string; company: string; fit: string } | null {
  const match = value.match(/^(\d+)\.\s+(.+?)\s+-\s+(.+)$/);
  if (!match) return null;
  return { number: match[1], company: match[2], fit: match[3] };
}

function isComparisonSection(section: PostSection) {
  if (!section.bullets?.length) return false;
  const headingMatch = section.heading?.toLowerCase().includes('quick comparison');
  const listMatch = section.bullets.every((bullet) => Boolean(parseComparisonBullet(bullet)));
  return Boolean(headingMatch && listMatch);
}

function getImageSeed(slug: string) {
  return slug.split('').reduce((total, char) => total + char.charCodeAt(0), 0);
}

function getSectionImage(slug: string, index: number, offset = 0) {
  const imageIndex = (getImageSeed(slug) + index + offset) % ARTICLE_IMAGE_POOL.length;
  return ARTICLE_IMAGE_POOL[imageIndex];
}

function getImageAlt({
  postTitle,
  label,
}: {
  postTitle: string;
  label: string;
}) {
  return `Call center team illustration for ${label} in ${postTitle}`;
}

function shouldShowEditorialImage(section: SectionView) {
  if (!section.heading || section.level === 3) return false;
  if (parseRankedHeading(section.heading) || isComparisonSection(section)) return false;
  return section.index === 1 || section.index % 4 === 0;
}

function renderInlineLinks(text: string, keyPrefix: string): ReactNode[] {
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
        key={`${keyPrefix}-link-${i++}`}
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

  return parts;
}

function ArticleParagraph({
  children,
  compact = false,
  id,
}: {
  children: string;
  compact?: boolean;
  id: string;
}) {
  return (
    <p
      className={
        compact
          ? 'mt-4 text-[16px] leading-[1.75] text-navy-700'
          : 'mt-5 text-[17px] leading-[1.85] text-navy-700'
      }
    >
      {renderInlineLinks(children, id)}
    </p>
  );
}

function ArticleImage({
  src,
  alt,
  className = '',
  sizes = '(max-width: 1024px) 100vw, 760px',
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={`overflow-hidden rounded-lg border border-navy-950/10 bg-white shadow-sm ${className}`}>
      <div className="relative aspect-[16/9]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </figure>
  );
}

function DetailRows({ bullets, id }: { bullets: string[]; id: string }) {
  return (
    <dl className="mt-6 divide-y divide-navy-950/10 border-y border-navy-950/10">
      {bullets.map((bullet, index) => {
        const parsed = parseLabeledBullet(bullet);
        if (!parsed) {
          return (
            <div key={index} className="flex gap-3 py-3.5 text-[15px] leading-relaxed text-navy-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
              <dd>{renderInlineLinks(bullet, `${id}-detail-${index}`)}</dd>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="grid gap-1 py-3.5 text-[15px] leading-relaxed sm:grid-cols-[150px_minmax(0,1fr)]"
          >
            <dt className="font-semibold text-navy-950">{parsed.label}</dt>
            <dd className="text-navy-700">{renderInlineLinks(parsed.body, `${id}-detail-${index}`)}</dd>
          </div>
        );
      })}
    </dl>
  );
}

function ArticleBullets({ bullets, id }: { bullets: string[]; id: string }) {
  return (
    <ul className="mt-6 space-y-3">
      {bullets.map((bullet, index) => {
        const parsed = parseLabeledBullet(bullet);

        return (
          <li key={index} className="flex gap-3 text-[16px] leading-[1.75] text-navy-700">
            <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-accent-500" />
            <span>
              {parsed ? (
                <>
                  <strong className="font-semibold text-navy-950">{parsed.label}:</strong>{' '}
                  {renderInlineLinks(parsed.body, `${id}-bullet-${index}`)}
                </>
              ) : (
                renderInlineLinks(bullet, `${id}-bullet-${index}`)
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function ComparisonList({ bullets, id }: { bullets: string[]; id: string }) {
  return (
    <ol className="mt-7 grid gap-3 sm:grid-cols-2">
      {bullets.map((bullet, index) => {
        const parsed = parseComparisonBullet(bullet);
        if (!parsed) return null;

        return (
          <li
            key={index}
            className="group grid grid-cols-[44px_minmax(0,1fr)] gap-4 rounded-lg border border-navy-950/10 bg-white p-4 shadow-sm transition-colors hover:border-accent-500/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-950 text-[14px] font-bold text-white">
              {parsed.number}
            </span>
            <span>
              <span className="block font-display text-[17px] font-bold leading-snug text-navy-950">
                {parsed.company}
              </span>
              <span className="mt-1 block text-[14px] leading-relaxed text-navy-700">
                {renderInlineLinks(parsed.fit, `${id}-comparison-${index}`)}
              </span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function StandardSection({
  section,
  postSlug,
  postTitle,
}: {
  section: SectionView;
  postSlug: string;
  postTitle: string;
}) {
  const HeadingTag = section.level === 3 ? 'h3' : 'h2';
  const headingClass =
    section.level === 3
      ? 'font-display text-[1.35rem] font-bold leading-tight tracking-normal text-navy-950'
      : 'font-display text-[1.8rem] font-bold leading-tight tracking-normal text-navy-950 lg:text-[2.05rem]';

  return (
    <section id={section.id} className="scroll-mt-28">
      {section.heading && (
        <HeadingTag className={headingClass}>
          {section.heading}
        </HeadingTag>
      )}

      {section.paragraphs?.map((paragraph, index) => (
        <ArticleParagraph key={index} id={`${section.id}-p-${index}`}>
          {paragraph}
        </ArticleParagraph>
      ))}

      {shouldShowEditorialImage(section) && section.heading && (
        <ArticleImage
          src={getSectionImage(postSlug, section.index)}
          alt={getImageAlt({
            postTitle,
            label: section.heading,
          })}
          className="mt-7"
        />
      )}

      {section.bullets && section.bullets.length > 0 ? (
        isComparisonSection(section) ? (
          <ComparisonList bullets={section.bullets} id={section.id} />
        ) : (
          <ArticleBullets bullets={section.bullets} id={section.id} />
        )
      ) : null}
    </section>
  );
}

function RankedSection({
  section,
  rank,
  postSlug,
  postTitle,
}: {
  section: SectionView;
  rank: ParsedRank;
  postSlug: string;
  postTitle: string;
}) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 rounded-lg border border-navy-950/10 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-accent-500 text-[15px] font-extrabold text-white">
          #{rank.number}
        </span>
        <div>
          <p className="text-[12px] font-bold uppercase tracking-normal text-navy-700/70">
            Ranked provider
          </p>
          <h2 className="mt-1 font-display text-[1.7rem] font-extrabold leading-tight tracking-normal text-navy-950 lg:text-[2rem]">
            {rank.title}
          </h2>
        </div>
      </div>

      <ArticleImage
        src={getSectionImage(postSlug, section.index, Number(rank.number))}
        alt={getImageAlt({
          postTitle,
          label: `${rank.title} BPO provider profile`,
        })}
        className="mt-6"
        sizes="(max-width: 1024px) 100vw, 720px"
      />

      {section.paragraphs?.map((paragraph, index) => (
        <ArticleParagraph key={index} compact id={`${section.id}-p-${index}`}>
          {paragraph}
        </ArticleParagraph>
      ))}

      {section.bullets && section.bullets.length > 0 && (
        <DetailRows bullets={section.bullets} id={section.id} />
      )}
    </section>
  );
}

function ArticleSection({
  section,
  postSlug,
  postTitle,
}: {
  section: SectionView;
  postSlug: string;
  postTitle: string;
}) {
  const rank = parseRankedHeading(section.heading);
  if (rank) {
    return (
      <RankedSection
        section={section}
        rank={rank}
        postSlug={postSlug}
        postTitle={postTitle}
      />
    );
  }
  return (
    <StandardSection
      section={section}
      postSlug={postSlug}
      postTitle={postTitle}
    />
  );
}

function ArticleNav({ sections }: { sections: SectionView[] }) {
  const headings = sections.filter((section) => section.heading);
  if (headings.length === 0) return null;

  return (
    <nav aria-label="Article contents" className="rounded-lg border border-navy-950/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-[13px] font-bold text-navy-950">
        <ListChecks className="h-4 w-4 text-accent-500" />
        In this article
      </div>
      <ol className="mt-4 space-y-2">
        {headings.map((section) => {
          const rank = parseRankedHeading(section.heading);
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block rounded-md px-2 py-1.5 text-[13px] font-medium leading-snug text-navy-700 transition-colors hover:bg-neutral-100 hover:text-accent-500"
              >
                {rank ? `${rank.number}. ${rank.title}` : section.heading}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function ArticleBrief({
  category,
  primaryKeyword,
  readingMinutes,
  updatedAt,
}: {
  category: string;
  primaryKeyword: string;
  readingMinutes: number;
  updatedAt: string;
}) {
  const items = [
    { icon: FileText, label: 'Topic', value: category },
    { icon: SearchCheck, label: 'Primary keyword', value: primaryKeyword },
    { icon: Clock, label: 'Reading time', value: `${readingMinutes} minutes` },
    { icon: Calendar, label: 'Last updated', value: formatDate(updatedAt) },
  ];

  return (
    <div className="border-b border-navy-950/10 bg-white">
      <Container>
        <div className="grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-accent-500/10 text-accent-500">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[12px] font-semibold uppercase tracking-normal text-navy-700/60">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-[14px] font-semibold leading-snug text-navy-950">
                    {item.value}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

function SidebarCTA() {
  return (
    <aside className="rounded-lg border border-navy-950/10 bg-navy-950 p-5 text-white shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-500 text-white">
        <MessageSquareText className="h-5 w-5" />
      </div>
      <p className="mt-4 font-display text-[1.15rem] font-bold leading-tight tracking-normal text-white">
        Need staffing numbers behind the decision?
      </p>
      <p className="mt-3 text-[14px] leading-relaxed text-white/75">
        Get a written plan for seats, timeline, screening, and region fit before you pick an operating model.
      </p>
      <Link
        href="/contact"
        className="mt-5 inline-flex h-11 items-center justify-center rounded-md bg-accent-500 px-4 text-[14px] font-bold text-white transition-colors hover:bg-accent-400"
      >
        Get a plan
      </Link>
    </aside>
  );
}

function InlineCTA() {
  return (
    <div className="rounded-lg border border-accent-500/25 bg-accent-500/10 p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-[1.25rem] font-bold leading-tight tracking-normal text-navy-950">
            Compare outsourcing against staffing before you commit.
          </p>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-navy-700">
            We can map the seat count, hiring calendar, and replacement plan that fits your call center.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-11 flex-none items-center justify-center rounded-md bg-navy-950 px-4 text-[14px] font-bold text-white transition-colors hover:bg-accent-500"
        >
          Talk to staffing
        </Link>
      </div>
    </div>
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
  const sectionViews = buildSectionViews(post.sections);
  const updatedAt = post.updatedAt ?? post.publishedAt;

  const related = (post.relatedPostSlugs ?? [])
    .map((slug) => getPost(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <BlogPostingSchema
        headline={post.title}
        description={post.metaDescription}
        url={url}
        datePublished={post.publishedAt}
        dateModified={updatedAt}
        author={post.author}
        image={heroImage}
        keywords={post.primaryKeyword}
        articleSection={post.category}
      />
      {post.faqs && post.faqs.length > 0 && <FAQSchema items={post.faqs} />}

      <section className="relative isolate overflow-hidden bg-navy-950 text-white pt-36 pb-16 lg:pt-44 lg:pb-24">
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
          className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10"
        />
        <div aria-hidden className="absolute inset-0 pattern-grid opacity-15" />

        <Container className="relative">
          <div className="max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/75 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All operator notes
            </Link>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-[12px] font-bold uppercase tracking-normal text-white">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-2 text-[13px] font-medium text-white/75">
                <Clock className="h-4 w-4 text-accent-500" />
                {post.readingMinutes} min read
              </span>
            </div>

            <h1 className="mt-6 font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-normal text-white sm:text-[2.8rem] lg:text-[3.65rem]">
              {post.title}
            </h1>

            <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-white/80 lg:text-lg">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/75">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4 text-accent-500" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent-500" />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </span>
              {post.updatedAt && (
                <span className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4 text-accent-500" />
                  Updated {formatDate(post.updatedAt)}
                </span>
              )}
            </div>
          </div>
        </Container>
      </section>

      <ArticleBrief
        category={post.category}
        primaryKeyword={post.primaryKeyword}
        readingMinutes={post.readingMinutes}
        updatedAt={updatedAt}
      />

      <TrustBar />

      <section className="bg-neutral-50 py-14 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[220px_minmax(0,760px)_280px] xl:gap-10">
            <div className="hidden xl:block">
              <div className="sticky top-28">
                <ArticleNav sections={sectionViews} />
              </div>
            </div>

            <main>
              <div className="mb-8 xl:hidden">
                <ArticleNav sections={sectionViews} />
              </div>

              <article className="space-y-12">
                {sectionViews.map((section) => (
                  <div key={section.id} className="space-y-12">
                    <ArticleSection
                      section={section}
                      postSlug={post.slug}
                      postTitle={post.title}
                    />
                    {section.index === INLINE_CTA_AFTER_SECTION && <InlineCTA />}
                  </div>
                ))}
              </article>
            </main>

            <div className="hidden lg:block">
              <div className="sticky top-28 space-y-5">
                <SidebarCTA />
                {post.faqs && post.faqs.length > 0 && (
                  <div className="rounded-lg border border-navy-950/10 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-[13px] font-bold text-navy-950">
                      <MessageSquareText className="h-4 w-4 text-accent-500" />
                      Common questions
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-navy-700">
                      The FAQ section below is structured for search and for buyers comparing options.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <Section background="white">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <Eyebrow>Keep reading</Eyebrow>
                <Heading level={2} display="m" className="mt-5 max-w-2xl">
                  Related operator notes.
                </Heading>
              </div>
              <p className="max-w-prose text-body-l text-navy-700 lg:col-span-5">
                More practical context for staffing models, cost, launch timing, and hiring risk.
              </p>
            </div>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => (
                <li key={rp.slug}>
                  <Link
                    href={`/blog/${rp.slug}`}
                    className="group flex h-full flex-col rounded-lg border border-navy-950/10 bg-white p-5 shadow-sm transition-all hover:border-accent-500/40 hover:-translate-y-0.5"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-md ring-1 ring-navy-950/5">
                      <Image
                        src={rp.heroImage ?? FALLBACK_IMAGE}
                        alt={rp.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-[12px] font-semibold text-navy-700/65">
                      <Clock className="h-3.5 w-3.5 text-accent-500" />
                      {rp.readingMinutes} min read
                    </div>
                    <h3 className="mt-3 font-display text-[1.08rem] font-bold leading-snug tracking-normal text-navy-950 transition-colors group-hover:text-accent-500">
                      {rp.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-navy-700">
                      {rp.excerpt}
                    </p>
                    <div className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-semibold text-accent-500">
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

      {post.faqs && post.faqs.length > 0 && (
        <FAQSection
          heading={`${post.primaryKeyword} - common questions.`}
          items={post.faqs}
          background={related.length > 0 ? 'neutral' : 'white'}
        />
      )}

      <CTABand
        headline="Want this applied to your operation?"
        sub="A senior account manager writes a plan against your forecast - sourcing timeline, screening criteria, written quote. One business day, no decks."
      />
    </>
  );
}
