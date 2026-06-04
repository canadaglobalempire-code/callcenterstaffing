import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe2, Languages, Clock } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

const REGIONS = [
  {
    label: 'Onshore',
    href: '/locations/north-america',
    seats: '12,000+',
    countries: ['🇺🇸 United States', '🇨🇦 Canada'],
    cities: ['New York', 'Atlanta', 'Dallas', 'Phoenix', 'Vancouver'],
    languages: 'English (native)',
    timezones: 'PT · MT · CT · ET',
    image: '/images/america.jpg',
    color: 'brand',
  },
  {
    label: 'Nearshore',
    href: '/locations/central-america',
    seats: '18,000+',
    countries: ['🇲🇽 Mexico', '🇨🇴 Colombia', '🇨🇷 Costa Rica'],
    cities: ['Guadalajara', 'Mexico City', 'Bogotá', 'San José'],
    languages: 'English · Spanish · Portuguese',
    timezones: 'CT · ET overlap',
    image: '/images/cc-diverse-team.jpg',
    color: 'accent',
  },
  {
    label: 'Offshore',
    href: '/locations/asia',
    seats: '22,000+',
    countries: ['🇵🇭 Philippines', '🇿🇦 South Africa'],
    cities: ['Manila', 'Cebu', 'Davao', 'Cape Town'],
    languages: 'English · Tagalog · Afrikaans',
    timezones: '24/7 coverage',
    image: '/images/cc-agent-night.jpg',
    color: 'navy',
  },
] as const;

const accentClasses: Record<(typeof REGIONS)[number]['color'], { bg: string; text: string; ring: string; chip: string }> = {
  brand: {
    bg: 'bg-brand-600',
    text: 'text-brand-600',
    ring: 'ring-brand-600/30',
    chip: 'bg-brand-600/10 text-brand-600',
  },
  accent: {
    bg: 'bg-accent-500',
    text: 'text-accent-500',
    ring: 'ring-accent-500/30',
    chip: 'bg-accent-500/10 text-accent-500',
  },
  navy: {
    bg: 'bg-navy-950',
    text: 'text-navy-950',
    ring: 'ring-navy-950/15',
    chip: 'bg-navy-950/8 text-navy-950',
  },
};

export function GeographicCoverage() {
  return (
    <section id="regions" className="relative isolate overflow-hidden bg-gradient-to-br from-white via-ink-50 to-white py-16 lg:py-24">
      <div
        aria-hidden
        className="absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-accent-500/8 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-navy-950/5 blur-3xl"
      />
      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
          <div className="lg:col-span-7">
            <Eyebrow>Global talent reach</Eyebrow>
            <Heading level={2} display="l" className="mt-5 max-w-2xl">
              One recruiter. Every shore that matters.
            </Heading>
          </div>
          <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
            Whether you need native-English account managers in Phoenix or a 200-seat bilingual
            ramp in Guadalajara, we work the same disciplined sourcing playbook in every market we
            cover.
          </p>
        </div>

        {/* Coverage banner */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-navy-950/8 bg-white px-6 py-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/10 text-accent-500">
              <Globe2 className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <div className="font-display text-lg font-bold tracking-tight text-navy-950">
                3 regions · 14 countries · 50,000+ active bench
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-navy-700">
                Continuous sourcing across all major CX markets
              </div>
            </div>
          </div>
        </div>

        {/* Region cards */}
        <ul className="grid gap-6 lg:grid-cols-3">
          {REGIONS.map((r) => {
            const c = accentClasses[r.color];
            return (
              <li key={r.label} className="h-full">
                <Link
                  href={r.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ${c.ring} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={r.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15" />
                    <div className="absolute top-5 left-5">
                      <span className={`inline-flex items-center gap-2 rounded-full ${c.bg} px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg`}>
                        {r.label}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                      <div className="drop-shadow-lg">
                        <div className="font-display text-3xl font-extrabold leading-none tracking-tight text-white">
                          {r.seats}
                        </div>
                        <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-white">
                          active bench
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1 drop-shadow-lg" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-navy-700/70 mb-2">
                        Countries
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {r.countries.map((country) => (
                          <span key={country} className={`inline-flex items-center rounded-full ${c.chip} px-3 py-1 text-xs font-semibold`}>
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-navy-700/70 mb-2">
                        Cities
                      </div>
                      <p className="text-[13px] leading-relaxed text-navy-700">
                        {r.cities.join(' · ')}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-navy-950/8 grid grid-cols-2 gap-3 text-[12px]">
                      <div className="flex items-start gap-2">
                        <Languages className="h-3.5 w-3.5 mt-0.5 flex-none text-navy-700/60" />
                        <div>
                          <div className="font-semibold text-navy-950 leading-tight">{r.languages.split(' · ')[0]}</div>
                          <div className="text-navy-700/70 leading-tight">+ regional</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-3.5 w-3.5 mt-0.5 flex-none text-navy-700/60" />
                        <div>
                          <div className="font-semibold text-navy-950 leading-tight">
                            {r.timezones.split(' · ')[0].split(' ')[0]}
                          </div>
                          <div className="text-navy-700/70 leading-tight truncate">
                            {r.timezones.split(' · ').slice(1).join(' · ') || r.timezones.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
