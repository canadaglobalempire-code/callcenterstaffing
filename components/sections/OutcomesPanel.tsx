import {
  Clock,
  TrendingUp,
  Target,
  BarChart3,
  Award,
  ShieldCheck,
  Sparkles,
  Activity,
  CheckCircle2,
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
 * Card-based outcomes display.
 *
 * - Headline metric → featured dark navy card.
 * - Remaining metrics → white cards with an accent top bar and icon chip.
 * - Cadence note → parsed into individual reporting cards.
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

  const cadenceItems = (cadenceNote ?? '')
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <Section background={background} id={id}>
      <Container>
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading level={2} display="m" className="mt-3 max-w-xl">
              {heading}
            </Heading>
          </div>
          {intro && (
            <p className="max-w-md text-[14px] leading-relaxed text-navy-700">{intro}</p>
          )}
        </div>

        {/* Metric cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o, i) => {
            const Icon = pickIcon(o.metric, o.description, i);

            // Featured (headline) card — dark navy
            if (i === 0) {
              return (
                <div
                  key={o.metric + i}
                  className="relative overflow-hidden rounded-3xl bg-navy-950 p-7 text-white shadow-lg"
                >
                  <div
                    aria-hidden
                    className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-accent-500/20 blur-3xl"
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500">
                      {featuredLabel}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500 text-white">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                  </div>
                  <div className="relative mt-6 font-display text-[2.75rem] font-extrabold leading-none tracking-[-0.04em] tabular-nums text-accent-500">
                    {o.metric}
                  </div>
                  <div className="relative mt-3 text-[14px] leading-snug text-white/80">
                    {o.description}
                  </div>
                </div>
              );
            }

            // Secondary cards — white
            return (
              <div
                key={o.metric + i}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy-950/10 bg-white p-7 shadow-sm transition-all hover:border-accent-500/40 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-accent-500/0"
                />
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="mt-6 font-display text-[2.5rem] font-extrabold leading-none tracking-[-0.04em] tabular-nums text-navy-950">
                  {o.metric}
                </div>
                <div className="mt-3 text-[14px] leading-snug text-navy-700">{o.description}</div>
              </div>
            );
          })}
        </div>

        {/* Reporting cadence — as cards */}
        {cadenceItems.length > 0 && (
          <div className="mt-8 rounded-3xl border border-accent-500/20 bg-accent-500/5 p-5 lg:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <div className="flex items-center gap-2.5 text-[14px]">
                <BarChart3 className="h-4.5 w-4.5 flex-none text-accent-500" strokeWidth={2.25} />
                <span className="font-bold text-accent-600">Live cohort reporting</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-navy-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Updated weekly
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-3">
              {cadenceItems.map((item) => {
                const [lead, ...rest] = item.split(' ');
                return (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-navy-950/8 bg-white px-4 py-3.5"
                  >
                    <CheckCircle2
                      className="h-5 w-5 flex-none text-accent-500"
                      strokeWidth={2.25}
                    />
                    <span className="text-[13px] leading-snug text-navy-800">
                      <span className="font-bold text-navy-950">{lead}</span>
                      {rest.length > 0 ? ` ${rest.join(' ')}` : ''}
                    </span>
                  </li>
                );
              })}
            </ul>
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
