'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { citeSources } from '@/lib/cite-sources';

type FAQProps = {
  items: { q: string; a: string }[];
  className?: string;
};

export function FAQ({ items, className }: FAQProps) {
  // One set per render so each law is linked once per page, on first mention.
  const cited = new Set<string>();
  return (
    <Accordion.Root
      type="multiple"
      className={cn('divide-y divide-ink-200 border-y border-ink-200', className)}
    >
      {items.map((item, idx) => (
        <Accordion.Item key={idx} value={`item-${idx}`} className="py-1">
          <Accordion.Header>
            <Accordion.Trigger
              className="group flex w-full items-start justify-between gap-6 py-6 text-left text-base lg:text-lg font-semibold text-navy-950 transition-colors hover:text-brand-600"
            >
              <span className="flex-1">{item.q}</span>
              <Plus
                aria-hidden
                className="mt-0.5 h-5 w-5 flex-none text-navy-700 transition-transform duration-200 group-data-[state=open]:rotate-45"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content forceMount className="overflow-hidden data-[state=closed]:hidden data-[state=open]:animate-fade-in">
            {/* data-faq-answer is targeted by the speakable schema — answer
                engines pull from FAQ answers more than from body copy. */}
            <p
              data-faq-answer
              className="pb-6 pr-10 text-base leading-relaxed text-navy-700 max-w-prose"
            >
              {citeSources(item.a, cited)}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
