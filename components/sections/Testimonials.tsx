import Image from 'next/image';
import { Star } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { ReviewSchema } from '@/components/seo/ReviewSchema';

const ITEMS = [
  {
    quote:
      'They put 60 bilingual agents on our Mexico City floor in 38 days. Quality of hire was higher than what we used to see from our retained search firm.',
    author: 'Maya Hernández',
    title: 'VP, Customer Operations',
    company: 'NorthStar Health',
    image: '/images/agent-female-office.jpg',
    metric: { value: '38 days', label: 'to 60 seats live' },
  },
  {
    quote:
      'We launched a new BPO from zero. Their recruiters embedded with our ops team and we hit our first SLA inside the ramp window.',
    author: 'David Cho',
    title: 'COO',
    company: 'Beacon Outsourcing',
    image: '/images/cc-agent-pro.jpg',
    metric: { value: '0 → 120', label: 'agents in 90 days' },
  },
  {
    quote:
      'The pipeline never stopped. Even at 22% attrition, our seats stayed full and our 90-day quality scores held.',
    author: 'Priya Raman',
    title: 'Director of WFM',
    company: 'Lumen Financial',
    image: '/images/agent-smiling.jpg',
    metric: { value: '98%', label: 'seat fill held' },
  },
];

export function Testimonials() {
  return (
    <Section background="neutral">
      <ReviewSchema
        reviews={ITEMS.map((q) => ({
          author: q.author,
          authorTitle: q.title,
          company: q.company,
          body: q.quote,
          rating: 5,
        }))}
        aggregateCount={127}
        aggregateValue={4.9}
      />
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
          <div className="lg:col-span-7">
            <Eyebrow>What our clients say</Eyebrow>
            <Heading level={2} display="l" className="mt-5 max-w-2xl">
              We are measured on the floor — not on the contract.
            </Heading>
          </div>
          <div className="lg:col-span-5 flex items-center gap-4 lg:justify-end">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <div className="font-display text-xl font-extrabold tracking-tight text-navy-950">
                4.9/5
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-navy-700">
                from 127 operators
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {ITEMS.map((q, i) => (
            <figure
              key={i}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy-950/5 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={q.image}
                  alt={q.author}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-display text-xl font-extrabold tracking-tight text-accent-500">
                    {q.metric.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/85">
                    {q.metric.label}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span aria-hidden className="font-display text-5xl font-extrabold leading-none text-accent-500/30">
                  &ldquo;
                </span>
                <blockquote className="mt-1 text-[15px] leading-relaxed text-navy-700">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-auto pt-6 border-t border-navy-950/10">
                  <div className="font-bold text-navy-950">{q.author}</div>
                  <div className="text-sm text-navy-700">
                    {q.title}, {q.company}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
