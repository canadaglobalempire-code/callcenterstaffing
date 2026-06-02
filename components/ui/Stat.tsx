import { cn } from '@/lib/utils';

type StatProps = {
  value: string;
  label: string;
  accent?: 'orange' | 'white' | 'navy';
  align?: 'left' | 'center';
  size?: 'md' | 'lg';
  className?: string;
};

const accents: Record<NonNullable<StatProps['accent']>, string> = {
  orange: 'text-accent-500',
  white: 'text-white',
  navy: 'text-navy-950',
};

export function Stat({
  value,
  label,
  accent = 'orange',
  align = 'left',
  size = 'lg',
  className,
}: StatProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <div
        className={cn(
          'font-display font-extrabold leading-none tracking-[-0.04em] tabular-nums',
          size === 'lg' ? 'text-[3.25rem] lg:text-[4rem]' : 'text-[2.5rem]',
          accents[accent],
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          'mt-3 text-sm leading-snug max-w-[20ch]',
          accent === 'white' ? 'text-white/70' : 'text-navy-700',
          align === 'center' && 'mx-auto',
        )}
      >
        {label}
      </div>
    </div>
  );
}
