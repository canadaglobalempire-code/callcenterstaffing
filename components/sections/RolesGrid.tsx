import Link from 'next/link';
import Image from 'next/image';
import {
  Headphones,
  PhoneOutgoing,
  Languages,
  Users,
  ClipboardCheck,
  Activity,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

const ROLES = [
  {
    slug: 'inbound-customer-service',
    label: 'Inbound CS agents',
    icon: Headphones,
    image: '/images/cc-woman-headset.jpg',
    note: 'CSAT · resolution rate',
  },
  {
    slug: 'outbound-sales-agents',
    label: 'Outbound sales agents',
    icon: PhoneOutgoing,
    image: '/images/cc-agent-call.jpg',
    note: 'conversion · pipeline',
  },
  {
    slug: 'bilingual-agents',
    label: 'Bilingual agents',
    icon: Languages,
    image: '/images/cc-agent-headset.jpg',
    note: 'EN · ES · PT · TL',
  },
  {
    slug: 'team-leads-supervisors',
    label: 'Team leads & supervisors',
    icon: Users,
    image: '/images/cc-man-headset.jpg',
    note: 'shrinkage · adherence',
  },
  {
    slug: 'qa-analysts',
    label: 'QA analysts',
    icon: ClipboardCheck,
    image: '/images/cc-agent-focus.jpg',
    note: 'calibration · scorecards',
  },
  {
    slug: 'workforce-management',
    label: 'Workforce management',
    icon: Activity,
    image: '/images/cc-woman-typing.jpg',
    note: 'forecast · scheduling',
  },
  {
    slug: 'trainers',
    label: 'Trainers & QA coaches',
    icon: GraduationCap,
    image: '/images/team-collaboration.jpg',
    note: 'onboarding · upskilling',
  },
  {
    slug: 'operations-managers',
    label: 'Operations managers',
    icon: Briefcase,
    image: '/images/agents-office-pair.jpg',
    note: 'P&L · floor leadership',
  },
];

export function RolesGrid() {
  return (
    <Section id="roles" background="neutral">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
          <div className="lg:col-span-7">
            <Eyebrow>Roles we staff</Eyebrow>
            <Heading level={2} display="l" className="mt-5 max-w-2xl">
              Every seat on the floor — and the people who run it.
            </Heading>
          </div>
          <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
            From frontline agents to ops directors, we recruit the entire stack. Every role has a
            dedicated screening playbook tuned to the way contact centers actually measure
            performance.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((r) => {
            const Icon = r.icon;
            return (
              <li key={r.slug} className="h-full">
                <Link
                  href={`/roles/${r.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-navy-950/5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={r.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Subtle bottom shading + icon chip — text moves to the panel below */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-accent-500 shadow-lg ring-1 ring-navy-950/5">
                      <Icon className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                  </div>

                  {/* Solid content panel — guaranteed contrast */}
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div>
                      <h3 className="font-display text-[17px] font-bold tracking-tight text-navy-950 leading-snug">
                        {r.label}
                      </h3>
                      <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-accent-500">
                        {r.note}
                      </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between border-t border-navy-950/8 pt-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-navy-700">
                        View role
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-accent-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
