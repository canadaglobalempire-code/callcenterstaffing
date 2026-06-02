import Image from 'next/image';
import { Search, ScanFace, Rocket, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

type Step = {
  num: string;
  title: string;
  body: string;
  icon: typeof Search;
  image: string;
};

const DEFAULT_STEPS: Step[] = [
  {
    num: '01',
    title: 'Tell us what you need',
    body: 'A 30-minute call. How many agents? What do they handle? What language? Where (onshore, nearshore, offshore)? You get a free written quote in one business day.',
    icon: Search,
    image: '/images/cc-team-plan.jpg',
  },
  {
    num: '02',
    title: 'We pick the right agents',
    body: 'We match trained agents from our 100k+ network to your business. You hear a voice sample of every agent before they start work. Compliance-cleared (HIPAA, PCI, NMLS) when needed.',
    icon: ScanFace,
    image: '/images/cc-agent-monitor.jpg',
  },
  {
    num: '03',
    title: 'Agents start working',
    body: 'Your team is live. Pay only for hours worked, month-to-month. Scale up, scale down, or swap agents anytime. We handle HR, payroll and replacements at no extra charge.',
    icon: Rocket,
    image: '/images/hd-agents-row.jpg',
  },
];

export function ProcessSteps({
  steps = DEFAULT_STEPS,
  eyebrow = 'How it works',
  heading = 'Three steps. Built for operators, not for HR.',
  intro,
  background = 'neutral',
}: {
  steps?: Step[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
  background?: 'white' | 'neutral';
}) {
  return (
    <Section id="process" background={background}>
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12">
          <div className="lg:col-span-7">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading level={2} display="l" className="mt-5 max-w-2xl">
              {heading}
            </Heading>
          </div>
          {intro && (
            <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">{intro}</p>
          )}
        </div>

        <ol className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.num} className="group relative h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy-950/5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Image header with step number overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={step.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-950/85 via-navy-950/55 to-navy-950/30" />

                    {/* Giant step number watermark */}
                    <div
                      aria-hidden
                      className="figure-num absolute -top-2 -right-2 text-[8rem] leading-none text-white/15 select-none"
                    >
                      {step.num}
                    </div>

                    {/* Icon chip top-left */}
                    <span className="absolute top-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-accent-500 shadow-lg">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>

                    {/* Step badge bottom-left */}
                    <div className="absolute bottom-5 left-5">
                      <span className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                        Step {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-2xl lg:text-[1.65rem] leading-tight font-bold tracking-[-0.025em] text-navy-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-navy-700">{step.body}</p>
                  </div>
                </div>

                {/* Connector arrow between cards (desktop only) */}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden lg:flex absolute -right-4 top-24 z-10 h-8 w-8 items-center justify-center rounded-full bg-accent-500 shadow-lg"
                  >
                    <ArrowRight className="h-4 w-4 text-white" strokeWidth={2.5} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
