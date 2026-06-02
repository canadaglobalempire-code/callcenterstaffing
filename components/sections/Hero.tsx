import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Wallet } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm';

const HERO_STATS = [
  { value: '100k+', label: 'Vetted agents in our database' },
  { value: '20+', label: 'Years staffing call centers and BPOs' },
  { value: '30+', label: 'Languages supported across regions' },
  { value: '72hrs', label: 'Avg. time to first qualified candidate' },
  { value: '90-day', label: 'Attrition guarantee on every placement' },
  { value: '14', label: 'Countries actively recruiting' },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white pt-40 pb-0 lg:pt-48">
      {/* Background video — full color, no overlay */}
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        poster="/images/cc-office-wide.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Black overlay — darker on the left for text legibility, video shows through on the right */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />

      {/* Orange glows — replace blue with warmer accent for depth */}
      <div
        aria-hidden
        className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent-500/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl"
      />

      <Container className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
            Call Center Staffing Agency · Since 2003
          </span>

          <h1 className="mt-6 font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
            Call Center Staffing,{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent-500">deployed to your business.</span>
              <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/15 -z-0" />
            </span>
          </h1>

          <p className="mt-6 max-w-[600px] text-[17px] lg:text-lg leading-relaxed text-white/80">
            Need call center agents? We have them ready.{' '}
            <strong className="font-semibold text-white">
              100,000+ trained agents
            </strong>{' '}
            across the US, Mexico, Colombia, Philippines and South Africa. Tell us how many you
            need — we deploy a team to your business in 72 hours. Temporary or long-term.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button href="/contact" size="lg" withArrow>
              Get a Free Quote
            </Button>
            <Link
              href="/how-we-work"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 h-14 text-[15px] font-semibold text-white hover:bg-white hover:text-navy-950 transition-colors"
            >
              How we work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1">
              <Wallet className="h-4 w-4 text-emerald-400" />
              <span className="font-bold text-emerald-300">Free quote</span>
              <span className="text-white/60">· month-to-month, no setup fees</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="font-semibold text-white">4.9/5</span> · 200+ businesses
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent-500" />
              Swap any agent — no charge
            </span>
          </div>
        </div>

        {/* Quote form — replaces image collage */}
        <div className="lg:col-span-5 lg:pl-4">
          <HeroQuoteForm />
        </div>
      </Container>

      {/* Stats marquee — full bleed at bottom of hero */}
      <div className="relative mt-16 lg:mt-20 border-t border-white/10 bg-navy-950/40 backdrop-blur-sm">
        <div className="flex items-center gap-3 px-4 lg:px-8 py-3 border-b border-white/5">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-500">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            By the numbers · Two decades recruiting only into the contact-center industry
          </span>
        </div>
        <div className="relative overflow-hidden py-5">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-navy-950 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-navy-950 to-transparent"
          />
          <div className="flex w-max animate-marquee items-center">
            {[...HERO_STATS, ...HERO_STATS].map((s, i) => (
              <div key={i} className="flex items-center gap-4 px-8 lg:px-10">
                <div className="font-display text-2xl lg:text-3xl font-extrabold leading-none tracking-[-0.03em] tabular-nums text-accent-500">
                  {s.value}
                </div>
                <div className="text-[13px] lg:text-sm font-medium text-white/80 max-w-[24ch]">
                  {s.label}
                </div>
                <span aria-hidden className="ml-4 lg:ml-6 h-8 w-px bg-white/15" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
