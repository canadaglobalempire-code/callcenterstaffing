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

  return (
    <Section background={background} id={id}>
      <Container>
        {/* Compact header */}
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 mb-7">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading level={2} display="m" className="mt-3 max-w-xl">
              {heading}
            </Heading>
          </div>
          {intro && <p className="max-w-md text-[14px] leading-relaxed text-navy-700">{intro}</p>}
        </div>

        {/* Compact uniform stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o, i) => {
            const Icon = pickIcon(o.metric, o.description, i);
            return (
              <div
                key={o.metric + i}
                className="group relative overflow-hidden rounded-2xl border border-navy-950/10 bg-white p-5 transition-colors hover:border-accent-500/40"
              >
                <div
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-500/0"
                />
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  {i === 0 && (
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-accent-500">
                      {featuredLabel}
                    </span>
                  )}
                </div>
                <div className="mt-4 font-display text-[2rem] font-extrabold leading-none tracking-[-0.03em] tabular-nums text-navy-950">
                  {o.metric}
                </div>
                <div className="mt-2 text-[13px] leading-snug text-navy-700">{o.description}</div>
              </div>
            );
          })}
        </div>

        {/* Slim reporting line */}
        {cadenceNote && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl border border-accent-500/20 bg-accent-500/5 px-5 py-3">
            <div className="flex items-center gap-2.5 text-[13px] text-navy-800">
              <BarChart3 className="h-4 w-4 flex-none text-accent-500" strokeWidth={2.25} />
              <span className="font-semibold text-accent-600">Live cohort reporting</span>
              <span className="text-navy-700">· {cadenceNote}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-navy-700 whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Updated weekly
            </div>
          </div>
        )}
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
