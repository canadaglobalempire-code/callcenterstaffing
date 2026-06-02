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
  { icon: HeartPulse, label: 'Health systems' },
  { icon: Banknote, label: 'Regional banks' },
  { icon: Shield, label: 'Insurers' },
  { icon: ShoppingBag, label: 'DTC retailers' },
  { icon: Radio, label: 'Telecom carriers' },
  { icon: Cloud, label: 'SaaS scale-ups' },
  { icon: Building, label: 'Multi-client BPOs' },
  { icon: Plane, label: 'Travel brands' },
];

export function ClientVerticalStrip() {
  return (
    <section className="relative isolate bg-ink-50 border-y border-navy-950/8 py-10 lg:py-12">
      <Container>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
          <div className="text-center lg:text-left lg:max-w-xs lg:flex-none">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-500">
              Trusted across 200+ operators
            </div>
            <p className="mt-2 font-display text-[1rem] lg:text-[1.05rem] font-bold leading-snug tracking-tight text-navy-950">
              Recruiting for the verticals that demand it most.
            </p>
          </div>

          <ul className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8 lg:gap-4">
            {VERTICALS.map((v) => {
              const Icon = v.icon;
              return (
                <li
                  key={v.label}
                  className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-navy-950/8 bg-white px-3 py-4 transition-colors hover:border-accent-500/40"
                >
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <span className="text-center text-[11px] font-semibold leading-tight text-navy-700">
                    {v.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
