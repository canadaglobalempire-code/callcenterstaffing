import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { StaffingPlanForm } from '@/components/forms/StaffingPlanForm';
import { Clock, ShieldCheck, UserCheck } from 'lucide-react';

export function StaffingPlanCTA() {
  return (
    <Section id="staffing-plan" background="neutral">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Get a quote</Eyebrow>
            <Heading level={2} display="l" className="mt-5">
              Tell us how many agents you need. We&rsquo;ll send a quote in one business day.
            </Heading>
            <p className="mt-6 text-body-l text-navy-700 max-w-prose">
              No decks. No long sales calls. Tell us what your business does, how many agents you
              want and where — and we send back a written quote with timing and rate.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <UserCheck className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
                <div>
                  <div className="font-semibold text-navy-950">A real person reads your request</div>
                  <p className="text-navy-700">Not a chatbot. A senior account manager who understands call centers.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
                <div>
                  <div className="font-semibold text-navy-950">Response in 24 hours</div>
                  <p className="text-navy-700">One business day. Written quote in your inbox.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
                <div>
                  <div className="font-semibold text-navy-950">Free quote · no commitment</div>
                  <p className="text-navy-700">Pay only for hours worked. Month-to-month, scale anytime.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-lg border border-ink-200 bg-white p-6 lg:p-10 shadow-sm">
              <StaffingPlanForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
