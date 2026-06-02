import Image from 'next/image';
import { cn } from '@/lib/utils';

type QuoteProps = {
  quote: string;
  author: string;
  title: string;
  company: string;
  logoSrc?: string;
  className?: string;
};

export function Quote({ quote, author, title, company, logoSrc, className }: QuoteProps) {
  return (
    <figure className={cn('flex h-full flex-col rounded-lg border border-ink-200 p-8', className)}>
      <span aria-hidden className="font-display text-6xl font-extrabold leading-none text-accent-500">
        “
      </span>
      <blockquote className="mt-2 font-display text-[1.4rem] leading-[1.45] tracking-[-0.015em] font-semibold text-navy-950">
        {quote}
      </blockquote>
      <figcaption className="mt-auto pt-8">
        <div className="flex items-center gap-4 border-t border-ink-200 pt-5">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={`${company} logo`}
              width={48}
              height={48}
              className="h-10 w-10 object-contain rounded"
            />
          ) : (
            <div className="grid h-10 w-10 place-items-center rounded bg-ink-100 text-xs font-semibold text-navy-700">
              {company
                .split(' ')
                .map((w) => w[0])
                .slice(0, 2)
                .join('')}
            </div>
          )}
          <div className="text-sm">
            <div className="font-semibold text-navy-950">{author}</div>
            <div className="text-navy-700">
              {title}, {company}
            </div>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
