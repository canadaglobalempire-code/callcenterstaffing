import { XCircle, CheckCircle2, ArrowRight, Wallet, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

const PILLARS = [
  {
    icon: Wallet,
    label: 'Pay only for hours worked',
    body: 'Month-to-month. No setup fees. No long contracts. Scale up or down anytime.',
  },
  {
    icon: Clock,
    label: 'Agents live in 72 hours',
    body: 'Tell us how many agents you need. We deploy a team to your business in 3 business days.',
  },
  {
    icon: ShieldCheck,
    label: 'Swap any agent — no charge',
    body: "Don't like an agent? We replace them at no charge. Written into every contract.",
  },
];

export function Reframe() {
  return (
    <section className="relative isolate overflow-hidden bg-white border-y border-navy-950/8 py-10 lg:py-14">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 lg:gap-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-950/5 px-4 py-2 text-[13px] font-semibold text-navy-950">
                <XCircle className="h-4 w-4 text-navy-700/50" />
                Not a call center
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-4 py-2 text-[13px] font-bold text-accent-500">
                <CheckCircle2 className="h-4 w-4" />
                A staffing agency for call centers
              </span>
            </div>

            <p className="mt-5 font-display text-[1.25rem] lg:text-[1.5rem] font-extrabold leading-tight tracking-[-0.02em] text-navy-950 max-w-3xl">
              We don&apos;t run call centers. We{' '}
              <span className="text-accent-500">give you our trained agents</span> to work for your
              business — temporary or long-term.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-navy-700 max-w-3xl">
              The agents stay on our payroll. You don&apos;t hire, train, or manage HR. Tell us
              how many you need and what you sell — we deploy a team within 72 hours. Onshore,
              nearshore, offshore. Pay only for the hours they work.
            </p>

            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-navy-950/15 px-5 h-11 text-[13px] font-bold uppercase tracking-[0.14em] text-navy-950 hover:border-accent-500 hover:text-accent-500 transition-colors"
            >
              What we do
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <ul className="grid gap-3">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <li
                    key={p.label}
                    className="flex items-start gap-4 rounded-2xl border border-navy-950/8 bg-white px-5 py-4 transition-colors hover:border-accent-500/40"
                  >
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="font-display text-[15px] font-extrabold tracking-tight text-navy-950 leading-tight">
                        {p.label}
                      </div>
                      <p className="mt-1 text-[13px] leading-snug text-navy-700">{p.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
