import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type SectionProps = {
  as?: ElementType;
  background?: 'white' | 'neutral' | 'navy' | 'brand-tint';
  spacing?: 'default' | 'tight' | 'loose';
  className?: string;
  id?: string;
  children: ReactNode;
};

const bgClass: Record<NonNullable<SectionProps['background']>, string> = {
  white: 'bg-white text-navy-700',
  neutral: 'bg-ink-50 text-navy-700',
  navy: 'bg-navy-950 text-white',
  'brand-tint': 'bg-brand-50 text-navy-700',
};

const spacingClass: Record<NonNullable<SectionProps['spacing']>, string> = {
  tight: 'py-12 lg:py-16',
  default: 'py-16 lg:py-24',
  loose: 'py-20 lg:py-32',
};

export function Section({
  as: Tag = 'section',
  background = 'white',
  spacing = 'default',
  className,
  id,
  children,
}: SectionProps) {
  return (
    <Tag id={id} className={cn(bgClass[background], spacingClass[spacing], className)}>
      {children}
    </Tag>
  );
}
