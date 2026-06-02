import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

type StatItem = { value: string; label: string };

type StatsBandProps = {
  eyebrow?: string;
  heading?: string;
  stats?: StatItem[];
};

const DEFAULT: StatItem[] = [
  { value: '100k+', label: 'Vetted agents in our active database' },
  { value: '20+', label: 'Years staffing call centers and BPOs' },
  { value: '30+', label: 'Languages supported across regions' },
  { value: '72hrs', label: 'Average time to first qualified candidate' },
];

export function StatsBand({
  eyebrow = 'By the numbers',
  heading = 'Two decades of recruiting only into the contact-center industry.',
  stats = DEFAULT,
}: StatsBandProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        {(eyebrow || heading) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {heading && (
              <p className="mt-4 font-display text-2xl lg:text-[2rem] leading-tight tracking-[-0.025em] font-bold text-navy-950">
                {heading}
              </p>
            )}
          </div>
        )}

        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-navy-950/8 bg-white p-7 lg:p-8 transition-all duration-300 hover:border-accent-500/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="absolute top-0 right-0 h-px w-12 bg-accent-500/40" />
              <dt className="font-display text-[2.75rem] lg:text-[3.5rem] font-extrabold leading-none tracking-[-0.04em] tabular-nums text-navy-950">
                {s.value}
              </dt>
              <dd className="mt-4 text-sm leading-snug text-navy-700 max-w-[20ch]">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
