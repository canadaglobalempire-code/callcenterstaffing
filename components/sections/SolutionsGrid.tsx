import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, TrendingUp, Rocket, CalendarClock, Users, ShieldCheck, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

const SOLUTIONS: {
  slug: string;
  href?: string;
  icon: typeof TrendingUp;
  title: string;
  desc: string;
  image: string;
}[] = [
  {
    slug: 'scaling-existing-call-center',
    icon: TrendingUp,
    title: 'Scaling an existing call center',
    desc: 'Backfill attrition, ramp seats, and protect SLAs without sacrificing quality of hire.',
    image: '/images/agents-working.jpg',
  },
  {
    slug: 'launching-new-call-center',
    icon: Rocket,
    title: 'Launching a new call center',
    desc: 'Greenfield builds across onshore, nearshore and offshore — from first 25 to first 250.',
    image: '/images/hd-office-team.jpg',
  },
  {
    slug: 'seasonal-surge',
    icon: CalendarClock,
    title: 'Seasonal & surge staffing',
    desc: 'Pre-built bench for Q4, open enrollment, tax season and product launches.',
    image: '/images/agents-team-row.jpg',
  },
  {
    slug: 'direct-to-employer',
    icon: Users,
    title: 'Direct-to-employer staffing',
    desc: 'Permanent hires placed directly into in-house contact centers, not vendor floors.',
    image: '/images/cc-team-desk.jpg',
  },
  {
    slug: 'compliance-licensed',
    icon: ShieldCheck,
    title: 'Compliance & licensed roles',
    desc: 'NMLS, state-insurance, HIPAA and PCI-cleared agents — screened to your regulator, not just your scorecard.',
    image: '/images/cc-headset-desk.jpg',
  },
  {
    slug: 'small-business',
    href: '/small-business',
    icon: Sparkles,
    title: 'Small business & startups',
    desc: '5–50 seat cohorts — the same screening and quality bar, on a lighter, faster engagement.',
    image: '/images/cc-team-huddle.jpg',
  },
];

export function SolutionsGrid() {
  return (
    <Section id="solutions" background="white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
          <div className="lg:col-span-7">
            <Eyebrow>What we solve</Eyebrow>
            <Heading level={2} display="l" className="mt-5 max-w-2xl">
              Recruiting built for the rhythm of contact-center operations.
            </Heading>
          </div>
          <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
            Every engagement starts with a workforce plan, not a job spec. We staff to your AHT,
            your forecast, and the licensure or language mix your accounts demand.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.slug} className="group h-full">
                <Link
                  href={s.href ?? `/solutions/${s.slug}`}
                  className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy-950/5 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 backdrop-blur-sm text-accent-500 shadow-lg">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-[1.4rem] font-bold tracking-tight text-navy-950 leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-navy-700">{s.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent-500 transition-transform group-hover:translate-x-1">
                      Learn more
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}

          <li className="md:col-span-2 lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-500/8 via-white to-accent-500/5 ring-1 ring-accent-500/20 shadow-sm">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl"
              />
              <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 p-8 lg:p-12 items-center">
                {/* Left: photo with floating recruiter card */}
                <div className="lg:col-span-4 relative">
                  <div className="relative aspect-[4/5] max-w-[260px] lg:max-w-none overflow-hidden rounded-2xl shadow-xl ring-4 ring-white">
                    <Image
                      src="/images/cc-discussion.jpg"
                      alt="Senior recruiter"
                      fill
                      sizes="(max-width: 1024px) 260px, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-2 lg:right-auto lg:-right-4 rounded-2xl bg-white px-4 py-3 shadow-2xl ring-1 ring-navy-950/5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                        Live now
                      </div>
                    </div>
                    <div className="mt-1 font-display text-sm font-extrabold tracking-tight text-navy-950">
                      Senior recruiters
                    </div>
                    <div className="text-[11px] text-navy-700">Replying in &lt; 4 hrs</div>
                  </div>
                </div>

                {/* Right: content + CTA */}
                <div className="lg:col-span-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-500">
                    Not sure which fits?
                  </span>
                  <h3 className="mt-4 font-display text-2xl lg:text-[2rem] font-extrabold tracking-[-0.025em] leading-tight text-navy-950 max-w-2xl">
                    Talk to a recruiter — we&apos;ll send a written quote in one business day.
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-navy-700 max-w-xl">
                    Tell us your forecast, AHT and license requirements. A senior recruiter — not a
                    chatbot — sends back a written plan and sourcing timeline.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href="#staffing-plan"
                      className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 h-12 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-accent-400 hover:-translate-y-0.5 hover:shadow-xl"
                    >
                      Get a written plan
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <div className="flex items-center gap-3 text-xs text-navy-700">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500/15 text-accent-500 text-[10px] font-bold">
                          ✓
                        </span>
                        Free
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500/15 text-accent-500 text-[10px] font-bold">
                          ✓
                        </span>
                        No obligation
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500/15 text-accent-500 text-[10px] font-bold">
                          ✓
                        </span>
                        1 business day
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
