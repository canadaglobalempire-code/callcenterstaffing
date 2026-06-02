import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4;
  display?: 'xl' | 'l' | 'm' | false;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

const displayStyles: Record<'xl' | 'l' | 'm', string> = {
  xl: 'font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.5rem] leading-[1.05] tracking-[-0.035em] font-extrabold',
  l: 'font-display text-[2.25rem] lg:text-[3.25rem] leading-[1.08] tracking-[-0.03em] font-bold',
  m: 'font-display text-[1.875rem] lg:text-[2.25rem] leading-[1.15] tracking-[-0.025em] font-bold',
};

const proseStyles: Record<1 | 2 | 3 | 4, string> = {
  1: 'text-3xl lg:text-4xl font-semibold',
  2: 'text-2xl lg:text-3xl font-semibold',
  3: 'text-xl font-semibold leading-[1.3]',
  4: 'text-lg font-semibold leading-[1.4]',
};

export function Heading({
  level = 2,
  display = false,
  as,
  className,
  children,
}: HeadingProps) {
  const Tag = (as ?? `h${level}`) as ElementType;
  const classes = display ? displayStyles[display] : proseStyles[level];
  return <Tag className={cn(classes, className)}>{children}</Tag>;
}
