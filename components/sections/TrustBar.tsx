import Image from 'next/image';
import { ShieldCheck, Wallet, Users, Globe2 } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const AWARDS = [
  { src: '/awards/1.png', alt: 'Industry recognition' },
  { src: '/awards/3.png', alt: 'Industry recognition' },
  { src: '/awards/5.png', alt: 'Industry recognition' },
  { src: '/awards/8.png', alt: 'Industry recognition' },
  { src: '/awards/12.png', alt: 'Industry recognition' },
  { src: '/awards/14.png', alt: 'Industry recognition' },
  { src: '/awards/Hipaa-200x155-1.webp', alt: 'HIPAA compliant' },
];

const TRUST_BADGES = [
  { icon: Wallet, value: 'Free quote', label: 'Month-to-month · no setup fees' },
  { icon: Users, value: '200+', label: 'Businesses served' },
  { icon: ShieldCheck, value: 'HIPAA · PCI · SOC 2', label: 'Compliance ready' },
  { icon: Globe2, value: '14 countries', label: 'Trained agents on tap' },
];

export function TrustBar() {
  return (
    <section id="trust" className="bg-white border-b border-ink-200 py-14 lg:py-16">
      <Container>
        {/* Trust badges row — gives the bar more visual weight */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-10">
          {TRUST_BADGES.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.label}
                className="flex items-center gap-3 rounded-2xl border border-navy-950/8 bg-white px-4 py-3 transition-colors hover:border-accent-500/40"
              >
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <div className="font-display text-sm font-extrabold tracking-tight text-navy-950 leading-tight truncate">
                    {b.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-navy-700">
                    {b.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Award logos */}
        <div className="border-t border-ink-200 pt-10">
          <p className="text-center text-eyebrow uppercase tracking-[0.18em] text-navy-700/70">
            Trusted by leading call centers and BPOs
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 items-center gap-x-8 gap-y-6">
            {AWARDS.map((logo, i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={64}
                  className="h-12 w-auto object-contain opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
