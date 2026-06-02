import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { POSTS } from '@/lib/content/posts';

export function BlogTeaser() {
  const latest = [...POSTS]
    .sort((a, b) => (b.publishedAt > a.publishedAt ? 1 : -1))
    .slice(0, 3);

  return (
    <Section background="white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
          <div className="lg:col-span-7">
            <Eyebrow>Operator playbooks</Eyebrow>
            <Heading level={2} display="l" className="mt-5 max-w-2xl">
              Plain-English guides to scaling, retention and staffing cost.
            </Heading>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-navy-950/15 bg-white px-5 h-11 text-[13px] font-bold uppercase tracking-[0.14em] text-navy-950 hover:border-accent-500 hover:text-accent-500 transition-colors"
            >
              Browse all posts
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <li key={post.slug} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy-950/5 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {post.heroImage && (
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
                    <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500 shadow-md">
                      {post.category}
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/70">
                    <Clock className="h-3.5 w-3.5 text-accent-500" />
                    {post.readingMinutes} min read
                  </div>
                  <h3 className="mt-4 font-display text-[1.3rem] font-bold tracking-tight text-navy-950 leading-snug group-hover:text-accent-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-navy-700 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent-500 transition-transform group-hover:translate-x-1">
                    Read post
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
