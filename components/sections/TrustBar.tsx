import { ShieldCheck, Wallet, Users, Globe2 } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const TRUST_BADGES = [
  { icon: Wallet, value: 'Free quote', label: 'Month-to-month · no setup fees' },
  { icon: Users, value: '200+', label: 'Businesses served' },
  { icon: ShieldCheck, value: 'HIPAA · PCI · SOC 2', label: 'Compliance ready' },
  { icon: Globe2, value: '14 countries', label: 'Trained agents on tap' },
];

export function TrustBar() {
  return (
    <section id="trust" className="bg-white border-b border-ink-200 py-12 lg:py-14">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-navy-950/10 bg-gradient-to-r from-ink-50 via-white to-ink-50 shadow-sm">
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {TRUST_BADGES.map((b, i) => {
              const Icon = b.icon;
              return (
                <li
                  key={b.label}
                  className={`group flex items-center gap-4 px-5 py-6 lg:px-7 ${
                    i % 2 === 1 ? 'border-l border-navy-950/8' : ''
                  } ${i >= 2 ? 'border-t border-navy-950/8 lg:border-t-0' : ''} ${
                    i !== 0 ? 'lg:border-l lg:border-navy-950/8' : ''
                  }`}
                >
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-base lg:text-lg font-extrabold tracking-tight text-navy-950 leading-tight">
                      {b.value}
                    </div>
                    <div className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-navy-700/80">
                      {b.label}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
