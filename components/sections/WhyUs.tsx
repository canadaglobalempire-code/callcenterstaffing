import Image from 'next/image';
import { ShieldCheck, Mic, Clock, BarChart3 } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

const PILLARS = [
  {
    icon: Mic,
    title: 'Live voice screening',
    body: 'Every shortlisted candidate ships with a recorded voice sample. You hear the agent before you hire them — accent, energy, pacing, the works.',
  },
  {
    icon: ShieldCheck,
    title: '90-day attrition guarantee',
    body: 'If a placement leaves in the first 90 days, we replace them at no charge. Industry-leading guarantee, written into every SOW.',
  },
  {
    icon: Clock,
    title: '72-hour first qualified slate',
    body: 'On most engagements, the first batch of qualified, recorded candidates lands within 72 hours of plan sign-off.',
  },
  {
    icon: BarChart3,
    title: 'Cohort health dashboards',
    body: 'For 90 days post-start, we share weekly cohort attrition, QA, and AHT trends so your WFM team can react before you do.',
  },
];

export function WhyUs() {
  return (
    <Section background="white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {/* Left: image — fills column, matches content height */}
          <div className="order-2 lg:order-1 relative min-h-[420px] lg:min-h-0">
            <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy-950/5">
              <Image
                src="/images/about-us.jpg"
                alt="Recruiting team at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />

              {/* "20+ years" badge — top-right */}
              <div className="absolute top-5 right-5 rounded-2xl bg-navy-950 text-white px-5 py-4 shadow-2xl ring-1 ring-white/10">
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                  20+ years
                </div>
                <div className="font-display text-2xl font-extrabold leading-none tracking-tight mt-1">
                  only CX
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-white/70 mt-0.5">
                  recruiting
                </div>
              </div>

              {/* Compliance badge — bottom-left */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm px-5 py-4 shadow-2xl ring-1 ring-navy-950/5">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-500 text-white">
                  <ShieldCheck className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <div className="font-display text-sm font-extrabold leading-tight text-navy-950">
                    HIPAA · PCI · SOC 2
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-navy-700 mt-0.5">
                    Compliance ready
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2 flex flex-col">
            <Eyebrow>Why operators choose us</Eyebrow>
            <Heading level={2} display="l" className="mt-5">
              Recruiting that respects how a contact center actually runs.
            </Heading>
            <p className="mt-5 text-body-l text-navy-700">
              Every recruiter on our team has either operated on a contact-center floor or recruited
              exclusively into them for 5+ years. We know what shrinkage looks like at 11pm. We know
              why your AHT moved 14 seconds last Tuesday. That&apos;s why our placements stay.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 flex-1">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-navy-950/8 bg-white p-5 shadow-sm transition-all duration-200 hover:border-accent-500/40 hover:shadow-md"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                      <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold tracking-tight text-navy-950">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-navy-700">{p.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
