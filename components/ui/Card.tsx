import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type CardProps = {
  as?: ElementType;
  hoverable?: boolean;
  className?: string;
  children: ReactNode;
};

export function Card({ as: Tag = 'div', hoverable = false, className, children }: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-lg border border-ink-200 bg-white p-6 transition-all duration-200',
        hoverable && 'hover:border-brand-600 hover:shadow-md hover:-translate-y-0.5',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
