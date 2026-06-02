import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Crumb = { label: string; href: string };

export function BreadcrumbNav({
  items,
  variant = 'light',
  className,
}: {
  items: Crumb[];
  variant?: 'light' | 'dark';
  className?: string;
}) {
  const isDark = variant === 'dark';
  return (
    <nav aria-label="Breadcrumb" className={cn('text-sm', className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, idx) => {
          const last = idx === items.length - 1;
          return (
            <li key={c.href + idx} className="flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight
                  aria-hidden
                  className={cn('h-3.5 w-3.5', isDark ? 'text-white/40' : 'text-ink-300')}
                />
              )}
              {last ? (
                <span className={cn(isDark ? 'text-white/80' : 'text-navy-700')} aria-current="page">
                  {c.label}
                </span>
              ) : (
                <Link
                  href={c.href}
                  className={cn(
                    'underline-offset-4 hover:underline',
                    isDark ? 'text-white/60 hover:text-white' : 'text-navy-700 hover:text-navy-950',
                  )}
                >
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
