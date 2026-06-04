'use client';

import { useMemo, useState } from 'react';
import { AlertCircle, Users, ClipboardCheck, RefreshCw, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const fieldClass =
  'h-11 w-full rounded-md border border-ink-200 bg-white px-3.5 text-[15px] text-navy-950 shadow-sm transition-colors focus:border-brand-600 focus:outline-none placeholder:text-navy-700/50';
const labelClass = 'text-xs font-semibold uppercase tracking-[0.12em] text-navy-700';
const helperClass = 'text-[12px] text-navy-700/70 leading-snug';

const SL_OPTIONS = [
  { value: '80/20', label: '80% answered in 20s (standard)', mult: 1.10 },
  { value: '90/30', label: '90% in 30s (regulated)', mult: 1.20 },
  { value: '95/60', label: '95% in 60s (BPO premium)', mult: 1.30 },
  { value: '70/60', label: '70% in 60s (cost-tuned)', mult: 1.05 },
] as const;

const HOURS_OPTIONS = [
  { value: 40, label: '40 hrs (8x5 single shift)' },
  { value: 60, label: '60 hrs (8x5 + extended)' },
  { value: 84, label: '84 hrs (12x7)' },
  { value: 168, label: '168 hrs (24/7)' },
] as const;

const OCCUPANCY_OPTIONS = [
  { value: 0.75, label: '75% (sustainable)' },
  { value: 0.80, label: '80% (industry avg)' },
  { value: 0.85, label: '85% (aggressive)' },
] as const;

const SHRINKAGE_OPTIONS = [
  { value: 0.25, label: '25% (mature ops)' },
  { value: 0.30, label: '30% (industry avg)' },
  { value: 0.35, label: '35% (high attrition)' },
] as const;

const ATTRITION_OPTIONS = [
  { value: 0.10, label: 'Less than 15% (top quartile)' },
  { value: 0.20, label: '15–25% (average)' },
  { value: 0.325, label: '25–40% (high)' },
  { value: 0.50, label: '>40% (urgent)' },
] as const;

const LANGUAGES = ['English', 'Spanish', 'Portuguese', 'Tagalog', 'French'] as const;
type Lang = (typeof LANGUAGES)[number];

export function Calculator() {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(10000);
  const [aht, setAht] = useState<number>(300);
  const [slKey, setSlKey] = useState<string>('80/20');
  const [hours, setHours] = useState<number>(60);
  const [occupancy, setOccupancy] = useState<number>(0.80);
  const [shrinkage, setShrinkage] = useState<number>(0.30);
  const [attritionMid, setAttritionMid] = useState<number>(0.325);
  const [languages, setLanguages] = useState<Lang[]>(['English']);

  const toggleLanguage = (lang: Lang) => {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang],
    );
  };

  const result = useMemo(() => {
    const sl = SL_OPTIONS.find((s) => s.value === slKey) ?? SL_OPTIONS[0];
    const safeVolume = Math.max(0, Number(monthlyVolume) || 0);
    const safeAht = Math.max(1, Number(aht) || 1);
    const callsPerHour = safeVolume / (hours * 4.33);
    const aerlangs = callsPerHour * (safeAht / 3600);
    const productiveAgents = Math.max(
      1,
      Math.ceil((aerlangs / occupancy) * sl.mult),
    );
    const totalScheduled = Math.ceil(productiveAgents / (1 - shrinkage));
    const recommendedCohort = Math.ceil(totalScheduled * 1.15);
    const annualReplacementHeadcount = Math.ceil(totalScheduled * attritionMid);
    return {
      callsPerHour: Math.round(callsPerHour * 10) / 10,
      aerlangs: Math.round(aerlangs * 10) / 10,
      productiveAgents,
      totalScheduled,
      recommendedCohort,
      annualReplacementHeadcount,
    };
  }, [monthlyVolume, aht, slKey, hours, occupancy, shrinkage, attritionMid]);

  const inputsValid = monthlyVolume > 0 && aht > 0 && languages.length > 0;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      {/* INPUTS — col-7 */}
      <form
        className="lg:col-span-7"
        onSubmit={(e) => e.preventDefault()}
        noValidate
        aria-label="Call center staffing calculator inputs"
      >
        <div className="rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-9 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-500">
                <Sparkles className="h-3.5 w-3.5" />
                Your inputs
              </span>
              <h2 className="mt-3 font-display text-[1.5rem] font-extrabold tracking-tight text-navy-950">
                Tell us your numbers.
              </h2>
              <p className="mt-1 text-[13px] text-navy-700">
                All math runs in your browser. Nothing is submitted.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {/* Monthly call volume */}
            <Field
              label="Monthly call volume"
              id="monthlyVolume"
              helper="Calls per month across all queues."
            >
              <input
                id="monthlyVolume"
                type="number"
                inputMode="numeric"
                min={0}
                step={100}
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(parseInt(e.target.value || '0', 10))}
                className={fieldClass}
                placeholder="10000"
              />
            </Field>

            {/* AHT */}
            <Field
              label="Average Handle Time (seconds)"
              id="aht"
              helper="Average time per call including ACW. Most operators overestimate AHT by 15–20%. Calibrate against your last 90 days, not your job rec."
            >
              <input
                id="aht"
                type="number"
                inputMode="numeric"
                min={1}
                step={5}
                value={aht}
                onChange={(e) => setAht(parseInt(e.target.value || '0', 10))}
                className={fieldClass}
                placeholder="300"
              />
            </Field>

            {/* Service level */}
            <Field
              label="Service level target"
              id="slKey"
              helper="Higher service level targets need more agents on the floor."
            >
              <Select
                id="slKey"
                value={slKey}
                onChange={(e) => setSlKey(e.target.value)}
                options={SL_OPTIONS.map((o) => ({ value: o.value, label: o.label }))}
              />
            </Field>

            {/* Hours */}
            <Field
              label="Operating hours per week"
              id="hours"
              helper="Total hours queues are live across all shifts."
            >
              <Select
                id="hours"
                value={String(hours)}
                onChange={(e) => setHours(parseInt(e.target.value, 10))}
                options={HOURS_OPTIONS.map((o) => ({
                  value: String(o.value),
                  label: o.label,
                }))}
              />
            </Field>

            {/* Occupancy */}
            <Field
              label="Occupancy target"
              id="occupancy"
              helper="Anything over 85% sustained burns agents out fast."
            >
              <Select
                id="occupancy"
                value={String(occupancy)}
                onChange={(e) => setOccupancy(parseFloat(e.target.value))}
                options={OCCUPANCY_OPTIONS.map((o) => ({
                  value: String(o.value),
                  label: o.label,
                }))}
              />
            </Field>

            {/* Shrinkage */}
            <Field
              label="Shrinkage"
              id="shrinkage"
              helper="Time off the phone — breaks, training, coaching, PTO, sick."
            >
              <Select
                id="shrinkage"
                value={String(shrinkage)}
                onChange={(e) => setShrinkage(parseFloat(e.target.value))}
                options={SHRINKAGE_OPTIONS.map((o) => ({
                  value: String(o.value),
                  label: o.label,
                }))}
              />
            </Field>

            {/* Attrition */}
            <Field
              label="Annualized attrition"
              id="attritionMid"
              helper="If you don't know — pick high. Most operators underreport by half."
              className="sm:col-span-2"
            >
              <Select
                id="attritionMid"
                value={String(attritionMid)}
                onChange={(e) => setAttritionMid(parseFloat(e.target.value))}
                options={ATTRITION_OPTIONS.map((o) => ({
                  value: String(o.value),
                  label: o.label,
                }))}
              />
            </Field>

            {/* Languages */}
            <Field
              label="Languages"
              id="languages"
              helper="Default English. Add bilingual chips if your queues need them."
              className="sm:col-span-2"
            >
              <div
                id="languages"
                role="group"
                aria-label="Languages"
                className="flex flex-wrap gap-2"
              >
                {LANGUAGES.map((lang) => {
                  const active = languages.includes(lang);
                  return (
                    <button
                      key={lang}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleLanguage(lang)}
                      className={cn(
                        'inline-flex h-9 items-center gap-1.5 rounded-full border px-4 text-[13px] font-semibold transition-colors',
                        active
                          ? 'border-accent-500 bg-accent-500 text-white shadow-sm'
                          : 'border-ink-200 bg-white text-navy-700 hover:border-accent-500/50 hover:text-navy-950',
                      )}
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            </Field>
          </div>

          {!inputsValid && (
            <p className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-red-600">
              <AlertCircle className="h-3.5 w-3.5" />
              Pick a positive call volume, AHT, and at least one language.
            </p>
          )}
        </div>
      </form>

      {/* OUTPUTS — col-5 sticky */}
      <aside className="lg:col-span-5">
        <div className="lg:sticky lg:top-28 space-y-5">
          {/* Headline output card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white p-7 lg:p-8 ring-1 ring-white/10">
            <div
              aria-hidden
              className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-accent-500/25 blur-3xl"
            />
            <div aria-hidden className="absolute inset-0 pattern-grid opacity-20" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-lg">
                  <Users className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-500 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
                  Live result
                </span>
              </div>

              <div className="mt-7">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Required productive agents
                </div>
                <div className="mt-2 font-display text-[3.75rem] lg:text-[4.5rem] font-extrabold leading-[0.9] tracking-[-0.04em] tabular-nums text-white">
                  {result.productiveAgents.toLocaleString()}
                </div>
                <div className="mt-3 text-[13px] leading-snug text-white/80">
                  Agents on the phone hitting your service level at target occupancy.
                </div>
              </div>
            </div>
          </div>

          {/* Secondary stats */}
          <div className="grid grid-cols-2 gap-4">
            <SecondaryStat
              icon={ClipboardCheck}
              label="Total scheduled headcount"
              value={result.totalScheduled.toLocaleString()}
              hint="Productive ÷ (1 − shrinkage)"
            />
            <SecondaryStat
              icon={Sparkles}
              label="Hire-to-bench cohort"
              value={result.recommendedCohort.toLocaleString()}
              hint="Scheduled × 1.15 buffer"
            />
            <SecondaryStat
              icon={RefreshCw}
              label="Annual replacement headcount"
              value={result.annualReplacementHeadcount.toLocaleString()}
              hint="Scheduled × annualized attrition"
              wide
            />
          </div>

          {/* Behind-the-numbers strip */}
          <div className="rounded-2xl border border-navy-950/8 bg-white p-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
              Behind the numbers
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-2 text-[12px] text-navy-700">
              <div className="flex justify-between gap-2">
                <dt>Calls / hour</dt>
                <dd className="font-semibold tabular-nums text-navy-950">
                  {result.callsPerHour.toLocaleString()}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Offered load (Erlangs)</dt>
                <dd className="font-semibold tabular-nums text-navy-950">
                  {result.aerlangs.toLocaleString()}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>SL multiplier</dt>
                <dd className="font-semibold tabular-nums text-navy-950">
                  {(SL_OPTIONS.find((s) => s.value === slKey)?.mult ?? 1).toFixed(2)}x
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Languages</dt>
                <dd className="font-semibold text-navy-950 truncate">
                  {languages.length > 0 ? languages.join(', ') : '—'}
                </dd>
              </div>
            </dl>
          </div>

          <p className="text-[12px] leading-snug text-navy-700/80 px-1">
            Field-tuned approximation. A senior recruiter will refine this in your written
            staffing plan.
          </p>
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  id,
  helper,
  className,
  children,
}: {
  label: string;
  id: string;
  helper?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {helper && <p className={helperClass}>{helper}</p>}
    </div>
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
}) {
  const { options, className, ...rest } = props;
  return (
    <select
      {...rest}
      className={cn(
        fieldClass,
        'appearance-none bg-no-repeat bg-[length:14px] bg-[right_14px_center] pr-10',
        className,
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%232a3d5f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

function SecondaryStat({
  icon: Icon,
  label,
  value,
  hint,
  wide,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  hint: string;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-navy-950/10 bg-white p-5 transition-colors hover:border-accent-500/40',
        wide && 'col-span-2',
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500/0" />
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
          <Icon className="h-4 w-4" strokeWidth={2} />
        </span>
        <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-navy-700">
          {label}
        </div>
      </div>
      <div className="mt-4 font-display text-[2rem] lg:text-[2.25rem] font-extrabold leading-none tracking-[-0.03em] tabular-nums text-navy-950">
        {value}
      </div>
      <div className="mt-2 text-[11px] text-navy-700/80">{hint}</div>
    </div>
  );
}
