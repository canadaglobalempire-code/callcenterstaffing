import Link from 'next/link';
import { Globe2, Headphones } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

const STATS = [
  { value: '100k+', label: 'Vetted agents in our active database' },
  { value: '30+', label: 'Languages supported across regions' },
  { value: '90-day', label: 'Attrition guarantee on every placement' },
  { value: '20+ yrs', label: 'Specialization in contact-center hiring' },
];

export function SEOIntro() {
  return (
    <Section background="white" spacing="default" id="what-we-do">
      <Container>
        {/* Lead */}
        <div className="max-w-3xl">
          <Eyebrow color="orange">Who we are</Eyebrow>
          <Heading level={2} display="m" className="mt-4 text-navy-950">
            We give you trained call center agents — they work for your business, on our payroll.
          </Heading>
          <p className="mt-5 text-lg leading-relaxed text-navy-700">
            <strong className="font-semibold text-navy-950">Call Center Staffing</strong> is a call
            center staffing agency with a network of{' '}
            <strong className="font-semibold text-navy-950">
              100,000+ trained call center agents
            </strong>
            . Need 5 agents for a 2-month surge? Done. Need 50 agents long-term for a new support
            line? Done. The agents stay on our payroll. You pay only for the hours they work. Since
            2003, we have deployed trained call center staff to businesses across the US, Canada,
            Mexico, Colombia, the Philippines and South Africa. We don&apos;t run call centers — we
            supply the trained agents who do.
          </p>
        </div>

        {/* Two feature cards */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-navy-950/8 bg-ink-50 p-7 lg:p-8 transition-colors hover:border-accent-500/40">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
              <Globe2 className="h-6 w-6" strokeWidth={2} />
            </span>
            <Heading level={3} className="mt-5 text-navy-950">
              Onshore, nearshore and offshore agents.
            </Heading>
            <p className="mt-3 text-base leading-relaxed text-navy-700">
              Need US-based agents for a regulated queue? We have them. Need bilingual agents in{' '}
              <Link
                href="/locations/central-america"
                className="font-semibold text-accent-600 underline-offset-4 hover:underline"
              >
                Mexico
              </Link>{' '}
              or{' '}
              <Link
                href="/locations/south-america"
                className="font-semibold text-accent-600 underline-offset-4 hover:underline"
              >
                Colombia
              </Link>{' '}
              for cost-efficient nearshore? We have them. Need 24/7 coverage from the{' '}
              <Link
                href="/locations/asia"
                className="font-semibold text-accent-600 underline-offset-4 hover:underline"
              >
                Philippines
              </Link>{' '}
              or{' '}
              <Link
                href="/locations/africa"
                className="font-semibold text-accent-600 underline-offset-4 hover:underline"
              >
                South Africa
              </Link>
              ? We have them. Pick a region — we deploy the agents.
            </p>
          </div>

          <div className="rounded-3xl border border-navy-950/8 bg-ink-50 p-7 lg:p-8 transition-colors hover:border-accent-500/40">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
              <Headphones className="h-6 w-6" strokeWidth={2} />
            </span>
            <Heading level={3} className="mt-5 text-navy-950">
              Every kind of call center agent.
            </Heading>
            <p className="mt-3 text-base leading-relaxed text-navy-700">
              Every kind of call center role —{' '}
              <Link
                href="/roles/inbound-customer-service"
                className="font-semibold text-accent-600 underline-offset-4 hover:underline"
              >
                inbound customer service
              </Link>
              , outbound sales,{' '}
              <Link
                href="/roles/bilingual-agents"
                className="font-semibold text-accent-600 underline-offset-4 hover:underline"
              >
                bilingual agents
              </Link>
              , team leads, QA analysts, workforce management. Every agent is already trained. You
              hear a voice sample before they start. First agents on your queue in 72 hours.
            </p>
          </div>
        </div>

        {/* Stats band */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-navy-950 text-white">
          <div className="flex items-center gap-3 border-b border-white/10 px-6 py-3 lg:px-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-500">
              Two decades, one industry
            </span>
          </div>
          <ul className="grid grid-cols-2 divide-white/10 sm:divide-x lg:grid-cols-4">
            {STATS.map((s) => (
              <li key={s.label} className="px-6 py-7 lg:px-8">
                <div className="font-display text-3xl lg:text-4xl font-extrabold tracking-[-0.03em] tabular-nums text-accent-500">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium leading-snug text-white/70">{s.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
