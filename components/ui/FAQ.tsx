'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

type FAQProps = {
  items: { q: string; a: string }[];
  className?: string;
};

export function FAQ({ items, className }: FAQProps) {
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
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none data-[state=open]:animate-fade-in">
            <p className="pb-6 pr-10 text-base leading-relaxed text-navy-700 max-w-prose">
              {item.a}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
