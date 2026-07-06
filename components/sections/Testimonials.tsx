import Image from 'next/image';
import { Star } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

// Anonymized client testimonials — role + program context only, no company names.
// NOTE: no Review/AggregateRating JSON-LD is emitted here on purpose. Google does
// not allow rich-result review markup for testimonials a business collects about
// itself, and emitting a fabricated aggregate rating risks a manual action. If you
// gather verifiable third-party reviews (Google, Clutch, G2), we can add compliant
// schema pointing at those.
const ITEMS = [
  {
    quote:
      'We had already promised the client a launch date, then needed 60 bilingual agents on a Mexico City floor to hit it. They had the first cohort screened in under two weeks and all 60 seats live in 38 days. Honestly, the hires came in stronger than what our old retained search firm used to send.',
    title: 'VP, Customer Operations',
    context: 'Healthcare BPO · nearshore program',
    image: '/images/agent-female-office.jpg',
    metric: { value: '38 days', label: 'to 60 seats live' },
  },
  {
    quote:
      'We stood up a new BPO from nothing. Their recruiters basically embedded with our ops team — sat in on calibration, learned our scorecard — and we hit our first SLA inside the ramp window instead of two months late like everyone warned us.',
    title: 'Chief Operating Officer',
    context: 'Outsourcing startup · new-site launch',
    image: '/images/cc-agent-pro.jpg',
    metric: { value: '0 → 120', label: 'agents in 90 days' },
  },
  {
    quote:
      'What actually sold me was that the pipeline never stopped. We run hot — attrition sits around 22% — and even so our seats stayed full and the 90-day quality scores held. That kind of consistency is the thing most agencies can’t really deliver.',
    title: 'Director of Workforce Management',
    context: 'Financial services · inbound support',
    image: '/images/agent-smiling.jpg',
    metric: { value: '98%', label: 'seat fill held' },
  },
];

export function Testimonials() {
  return (
    <Section background="neutral">
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
                Operators since 2003
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-navy-700">
                Names withheld at client request
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
                  alt="Call center operations professional at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
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
                  <div className="font-bold text-navy-950">{q.title}</div>
                  <div className="text-sm text-navy-700">{q.context}</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
