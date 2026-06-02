import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type EyebrowProps = {
  color?: 'orange' | 'blue' | 'neutral' | 'white';
  className?: string;
  children: ReactNode;
};

const colors: Record<NonNullable<EyebrowProps['color']>, string> = {
  orange: 'text-accent-500',
  blue: 'text-brand-600',
  neutral: 'text-navy-700',
  white: 'text-white/70',
};

export function Eyebrow({ color = 'orange', className, children }: EyebrowProps) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 text-eyebrow uppercase font-medium tracking-[0.14em]',
        colors[color],
        className,
      )}
    >
      <span aria-hidden className="inline-block h-px w-6 bg-current opacity-60" />
      {children}
    </p>
  );
}
