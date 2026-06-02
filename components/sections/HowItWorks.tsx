import Link from 'next/link';
import { ClipboardList, Search, Users, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

const STEPS = [
  {
    icon: ClipboardList,
    label: 'Step 01',
    title: 'Tell us what you need',
    body: 'A 30-minute call. How many agents? What do they handle — sales, support, billing? What language? Onshore, nearshore or offshore? You get a free written quote in one business day.',
    timing: '1 business day',
  },
  {
    icon: Search,
    label: 'Step 02',
    title: 'We pick the right agents',
    body: 'We match agents from our 100k+ trained network to your business. You hear a voice sample of every agent before they start. No surprises.',
    timing: 'Voice samples in 72 hrs',
  },
  {
    icon: Users,
    label: 'Step 03',
    title: 'Agents start working',
    body: 'Your team is live. Pay only for hours worked. Scale up, scale down, or swap agents anytime — no long contracts. We handle HR, payroll and replacements.',
    timing: 'Agents live · 3–14 days',
  },
];

export function HowItWorks() {
  return (
    <Section background="white" id="how-it-works">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
          <div className="lg:col-span-7">
            <Eyebrow>How it works</Eyebrow>
            <Heading level={2} display="l" className="mt-5 max-w-2xl">
              Three steps. No black box. Your seats fill.
            </Heading>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <Link
              href="/how-we-work"
              className="group inline-flex items-center gap-2 rounded-full border border-navy-950/15 bg-white px-5 h-11 text-[13px] font-bold uppercase tracking-[0.14em] text-navy-950 hover:border-accent-500 hover:text-accent-500 transition-colors"
            >
              See full process
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <ol className="grid gap-5 lg:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-8 transition-all hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <div
                  aria-hidden
                  className="absolute top-3 right-5 font-display text-[3.5rem] leading-none text-accent-500/15 select-none tabular-nums"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent-500">
                    {step.label}
                  </div>

                  <h3 className="mt-4 font-display text-xl lg:text-[1.4rem] font-extrabold tracking-tight text-navy-950 leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-navy-700">{step.body}</p>

                  <div className="mt-6 flex items-center gap-2 border-t border-navy-950/5 pt-4">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-navy-950">
                      {step.timing}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
