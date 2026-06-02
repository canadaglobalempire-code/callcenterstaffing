import Link from 'next/link';
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
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: editorial copy */}
          <div className="lg:col-span-8">
            <Eyebrow color="orange">What we do</Eyebrow>
            <Heading level={2} display="m" className="mt-4 text-navy-950">
              We give you trained call center agents — they work for your business, on our payroll.
            </Heading>

            <p className="mt-5 text-lg leading-relaxed text-navy-700">
              <strong className="font-semibold text-navy-950">Call Center Staffing</strong> is a
              call center staffing agency with a network of{' '}
              <strong className="font-semibold text-navy-950">
                100,000+ trained call center agents
              </strong>
              . Need 5 agents for a 2-month surge? Done. Need 50 agents long-term for a new
              support line? Done. The agents stay on our payroll. You pay only for the hours they
              work. Since 2003, we have deployed trained call center staff to businesses across
              the US, Canada, Mexico, Colombia, the Philippines and South Africa. We don&apos;t
              run call centers — we supply the trained agents who do.
            </p>

            <div className="mt-10">
              <Heading level={3} className="text-navy-950">
                Onshore, nearshore and offshore call center agents.
              </Heading>
              <p className="mt-4 text-base leading-relaxed text-navy-700">
                Need US-based agents for a regulated queue? We have them. Need bilingual agents in{' '}
                <Link
                  href="/locations/mexico"
                  className="font-semibold text-accent-600 underline-offset-4 hover:underline"
                >
                  Mexico
                </Link>{' '}
                or{' '}
                <Link
                  href="/locations/colombia"
                  className="font-semibold text-accent-600 underline-offset-4 hover:underline"
                >
                  Colombia
                </Link>{' '}
                for cost-efficient nearshore? We have them. Need 24/7 coverage from the{' '}
                <Link
                  href="/locations/philippines"
                  className="font-semibold text-accent-600 underline-offset-4 hover:underline"
                >
                  Philippines
                </Link>{' '}
                or{' '}
                <Link
                  href="/locations/south-africa"
                  className="font-semibold text-accent-600 underline-offset-4 hover:underline"
                >
                  South Africa
                </Link>
                ? We have them. Pick a region — we deploy the agents.
              </p>
            </div>

            <div className="mt-10">
              <Heading level={3} className="text-navy-950">
                What kind of agents we provide.
              </Heading>
              <p className="mt-4 text-base leading-relaxed text-navy-700">
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
                , team leads, QA analysts, workforce management. Every agent is already trained.
                You hear a voice sample before they start. First agents on your queue in 72
                hours.
              </p>
            </div>
          </div>

          {/* Right: stat callouts */}
          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-navy-950/10 bg-ink-50 p-6 lg:p-7">
              <p className="text-eyebrow uppercase tracking-[0.16em] text-navy-700/80">
                Two decades, one industry
              </p>
              <ul className="mt-5 grid gap-5">
                {STATS.map((s) => (
                  <li key={s.label} className="border-t border-navy-950/10 pt-4 first:border-t-0 first:pt-0">
                    <div className="font-display text-3xl font-extrabold tracking-[-0.03em] tabular-nums text-accent-500">
                      {s.value}
                    </div>
                    <div className="mt-1 text-sm font-medium text-navy-700">{s.label}</div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
