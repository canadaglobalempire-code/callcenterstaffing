import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type BadgeProps = {
  variant?: 'neutral' | 'brand' | 'accent' | 'navy';
  className?: string;
  children: ReactNode;
};

const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
  neutral: 'bg-ink-100 text-navy-700',
  brand: 'bg-brand-50 text-brand-600',
  accent: 'bg-accent-500/10 text-accent-500',
  navy: 'bg-navy-950 text-white',
};

export function Badge({ variant = 'neutral', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
