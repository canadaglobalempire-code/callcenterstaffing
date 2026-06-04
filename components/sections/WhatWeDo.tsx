import { CheckCircle2, PhoneIncoming, PhoneOutgoing, Repeat, Building2 } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

const WHAT_WE_DO = [
  {
    icon: PhoneIncoming,
    title: 'Inbound',
    body: 'Customer service, support, help desk, order taking and overflow. Agents who handle the calls coming to you.',
  },
  {
    icon: PhoneOutgoing,
    title: 'Outbound',
    body: 'Sales, lead generation, appointment setting, collections and surveys. Agents who make the calls for you.',
  },
  {
    icon: Repeat,
    title: 'Blended',
    body: 'Inbound and outbound on the same team. Agents who flex between answering and dialing as your volume shifts.',
  },
  {
    icon: Building2,
    title: 'B2B / B2C',
    body: 'Consumer and business campaigns alike. Agents matched to your audience, your script and your sales cycle.',
  },
];

export function WhatWeDo() {
  return (
    <Section background="neutral" id="what-we-provide">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10">
          <div className="lg:col-span-7">
            <Eyebrow color="orange">What we do</Eyebrow>
            <Heading level={2} display="l" className="mt-5 max-w-2xl">
              The call center work we provide staffing for.
            </Heading>
          </div>
          <p className="lg:col-span-5 text-body-l text-navy-700 max-w-prose">
            Whatever the work is, we have the trained agents for it. Inbound, outbound, blended,
            B2B or B2C — tell us how many you need and we deploy a team to your business in 72
            hours. They work for you; they stay on our payroll.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_WE_DO.map((w) => {
            const Icon = w.icon;
            return (
              <li
                key={w.title}
                className="relative flex h-full flex-col rounded-3xl border border-navy-950/8 bg-white p-7 transition-colors hover:border-accent-500/40"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <CheckCircle2 className="h-6 w-6 text-accent-500" strokeWidth={2.25} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-navy-950">
                  {w.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-navy-700">{w.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
