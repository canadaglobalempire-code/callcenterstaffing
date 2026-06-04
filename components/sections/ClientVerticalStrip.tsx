import { Container } from '@/components/layout/Container';
import {
  HeartPulse,
  Banknote,
  ShoppingBag,
  Radio,
  Shield,
  Cloud,
  Building,
  Plane,
} from 'lucide-react';

const VERTICALS = [
  { icon: HeartPulse, label: 'Health systems', note: 'HIPAA-cleared member & patient support' },
  { icon: Banknote, label: 'Regional banks', note: 'Licensed, compliance-ready contact centers' },
  { icon: Shield, label: 'Insurers', note: 'FNOL, claims & state-licensed agents' },
  { icon: ShoppingBag, label: 'DTC retailers', note: 'CSAT, returns & Q4 surge bench' },
  { icon: Radio, label: 'Telecom carriers', note: 'Tier 1 / tier 2 support & sales' },
  { icon: Cloud, label: 'SaaS scale-ups', note: 'Technical support & onboarding' },
  { icon: Building, label: 'Multi-client BPOs', note: 'Headcount across client floors' },
  { icon: Plane, label: 'Travel brands', note: '24/7 multilingual support' },
];

export function ClientVerticalStrip() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white py-16 lg:py-20">
      {/* Accent glows */}
      <div
        aria-hidden
        className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-3xl"
      />
      <div aria-hidden className="absolute inset-0 pattern-grid opacity-[0.07]" />

      <Container className="relative">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-500 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              Trusted across 200+ operators
            </span>
            <h2 className="mt-5 font-display text-[1.75rem] lg:text-[2.25rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              Recruiting for the verticals that demand it most.
            </h2>
          </div>

          {/* Quick stats */}
          <div className="flex gap-8 lg:gap-10">
            <div>
              <div className="font-display text-3xl lg:text-4xl font-extrabold tabular-nums tracking-tight text-accent-500">
                200+
              </div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/60">
                Operators served
              </div>
            </div>
            <div className="border-l border-white/10 pl-8 lg:pl-10">
              <div className="font-display text-3xl lg:text-4xl font-extrabold tabular-nums tracking-tight text-accent-500">
                13
              </div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/60">
                Industries staffed
              </div>
            </div>
          </div>
        </div>

        {/* Verticals grid */}
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {VERTICALS.map((v) => {
            const Icon = v.icon;
            return (
              <li key={v.label}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-accent-500/40 hover:bg-white/[0.07]">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-accent-500/15 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-[15px] font-bold leading-tight tracking-tight text-white">
                      {v.label}
                    </div>
                    <div className="mt-1 text-[12px] leading-snug text-white/55">{v.note}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
