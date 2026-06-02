import {
  Clock,
  TrendingUp,
  Target,
  BarChart3,
  Award,
  ShieldCheck,
  Sparkles,
  Activity,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

type Outcome = { metric: string; description: string };

type OutcomesPanelProps = {
  outcomes: Outcome[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
  cadenceNote?: string;
  featuredLabel?: string;
  background?: 'white' | 'neutral';
  id?: string;
};

/**
 * Asymmetric, dashboard-style outcomes display.
 * Drops a reusable, more polished alternative to the plain 3-card grid.
 *
 * Layout:
 * - Featured stat (lg:col-span-5) — big dark navy card
 * - 2 secondary stats (lg:col-span-7) — white cards with gradient accents
 * - 4th+ outcomes flow into the secondary grid
 * - Optional cadence strip below ("Reported weekly to your ops team")
 */
export function OutcomesPanel({
  outcomes,
  eyebrow = 'Outcomes',
  heading = 'What good looks like — measured.',
  intro,
  cadenceNote = '30-day attrition flag · 60-day calibration · 90-day score-card',
  featuredLabel = 'Headline metric',
  background = 'white',
  id,
}: OutcomesPanelProps) {
  if (!outcomes?.length) return null;

  const featured = outcomes[0];
  const rest = outcomes.slice(1);
  const FeaturedIcon = pickIcon(featured.metric, featured.description, 0);

  return (
    <Section background={background} id={id}>
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
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

        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Featured — dark hero card */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white p-8 lg:p-10 ring-1 ring-white/10 min-h-[300px]">
            <div
              aria-hidden
              className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-accent-500/25 blur-3xl"
            />
            <div aria-hidden className="absolute inset-0 pattern-grid opacity-20" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-lg">
                  <FeaturedIcon className="h-6 w-6" strokeWidth={2.25} />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
                  {featuredLabel}
                </span>
              </div>

              <div className="mt-auto pt-10">
                <div className="font-display text-[3.75rem] lg:text-[5rem] font-extrabold leading-[0.9] tracking-[-0.05em] tabular-nums text-white">
                  {featured.metric}
                </div>
                <div className="mt-4 text-[15px] leading-snug text-white/85 max-w-sm">
                  {featured.description}
                </div>
                <div
                  aria-hidden
                  className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500/0"
                />
              </div>
            </div>
          </div>

          {/* Secondary stats */}
          <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
            {rest.map((o, i) => {
              const Icon = pickIcon(o.metric, o.description, i + 1);
              return (
                <div
                  key={o.metric + i}
                  className="group relative overflow-hidden rounded-3xl border border-navy-950/10 bg-white p-7 lg:p-8 transition-all hover:border-accent-500/40 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div
                    aria-hidden
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500/0"
                  />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-navy-700/60 tabular-nums">
                      {String(i + 2).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="mt-7 font-display text-[2.5rem] lg:text-[3rem] font-extrabold leading-none tracking-[-0.04em] tabular-nums text-navy-950">
                    {o.metric}
                  </div>
                  <div className="mt-3 text-[14px] leading-snug text-navy-700">
                    {o.description}
                  </div>
                </div>
              );
            })}

            {/* Cadence strip — fills last row when remaining stats fit cleanly */}
            {rest.length > 0 && cadenceNote && (
              <div className="sm:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-500/8 via-white to-accent-500/5 border border-accent-500/20 p-5 lg:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-accent-500 text-white shadow-md">
                      <BarChart3 className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
                        Live cohort reporting
                      </div>
                      <div className="mt-1 font-display text-[14px] lg:text-[15px] font-bold tracking-tight text-navy-950 leading-snug">
                        {cadenceNote}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-navy-700 whitespace-nowrap">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Updated weekly
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/**
 * Pick a sensible icon based on the outcome metric content.
 * Falls back to a rotation to avoid all-same-icon.
 */
function pickIcon(metric: string, description: string, index: number): LucideIcon {
  const text = `${metric} ${description}`.toLowerCase();

  if (/(hour|day|month|min|72|<\s?3|cycle|ramp|live|launch)/.test(text)) return Clock;
  if (/(retention|attrition|fill|stay|hold|cohort|completion|complet)/.test(text)) return TrendingUp;
  if (/(verified|verify|complian|hipaa|pci|nmls|license|cleared|screen)/.test(text)) return ShieldCheck;
  if (/(\+\s*\d+|csat|fcr|nps|quality|score|qa|lift|improvement)/.test(text)) return Award;
  if (/(seat|agent|placed|placement|deploy|hire|operator|client|cohort)/.test(text)) return Target;
  if (/(coverage|country|countries|24\/7|region|state|city|market|hub)/.test(text)) return Activity;
  if (/(no-show|drop|miss|exception|drift|surge)/.test(text)) return Sparkles;

  const rotation: LucideIcon[] = [TrendingUp, Target, Clock, ShieldCheck, Award];
  return rotation[index % rotation.length];
}
