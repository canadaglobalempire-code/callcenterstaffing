import Image from 'next/image';
import { Check, Clock, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

type CTABandProps = {
  eyebrow?: string;
  headline?: string;
  sub?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

const QUOTE_INCLUDES = [
  'Recommended agent count and region mix',
  'Estimated hourly rate per agent',
  'Earliest shortlist and ramp timeline',
  'Compliance notes for regulated queues',
];

export function CTABand({
  eyebrow = 'Ready when you are',
  headline = 'Get a written plan in one business day.',
  sub = 'Tell us how many agents you need and what they would handle. We send back a written quote with timing, regions and rate — no decks, no fluff.',
  primaryHref = '/contact',
  primaryLabel = 'Get a quote',
}: CTABandProps) {
  const words = headline.split(' ');
  const lead = words.slice(0, -3).join(' ');
  const emphasis = words.slice(-3).join(' ');

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 text-white lg:py-24">
      {/* Background image */}
      <Image
        src="/images/internet-office-planning-meeting.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div
        aria-hidden
        className="via-black/70 to-black/55 absolute inset-0 bg-gradient-to-br from-navy-950"
      />
      <div aria-hidden className="pattern-grid absolute inset-0 opacity-20" />
      <div
        aria-hidden
        className="bg-accent-500/30 absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="bg-accent-500/15 absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: headline + content */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-500" />
              {eyebrow}
            </span>

            <h2 className="mt-6 max-w-3xl font-display text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-[2.75rem] lg:text-[3.5rem]">
              {lead}{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-500">
                  {emphasis}
                </span>
                <span
                  aria-hidden
                  className="bg-accent-500/15 absolute inset-x-0 bottom-1 -z-0 h-3"
                />
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75 lg:text-lg">
              {sub}
            </p>

            {/* Trust chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                <Clock className="h-3.5 w-3.5 text-accent-500" />1 business day
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-500" />
                Protected form
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                <Check className="h-3.5 w-3.5 text-accent-500" />
                No public phone or email
              </span>
            </div>
          </div>

          {/* Right: quote-card with CTA */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-7 text-navy-950 shadow-2xl ring-1 ring-white/10 lg:p-8">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent-500">
                What you&apos;ll get
              </div>
              <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-navy-950">
                Your written staffing plan includes:
              </h3>

              <ul className="mt-5 space-y-3">
                {QUOTE_INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-snug text-navy-700"
                  >
                    <span className="bg-accent-500/15 mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full text-accent-500">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3">
                <Button href={primaryHref} size="lg" withArrow className="w-full justify-center">
                  {primaryLabel}
                </Button>
                <p className="text-navy-700/80 text-center text-[12px]">
                  A senior account manager reviews every protected request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
