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
              Tell us the queue, headcount and timeline. We&rsquo;ll map the staffing plan.
            </Heading>
            <p className="mt-6 text-body-l text-navy-700 max-w-prose">
              No public phone number, no direct email posted for bots to scrape. Use the protected
              form and we route the request to a senior account manager for a written plan.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <UserCheck className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
                <div>
                  <div className="font-semibold text-navy-950">A real person reads your request</div>
                  <p className="text-navy-700">Not a chatbot. A senior account manager who understands call-center ramps.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
                <div>
                  <div className="font-semibold text-navy-950">Response in 24 hours</div>
                  <p className="text-navy-700">One business day. Written next steps using the details you provide.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
                <div>
                  <div className="font-semibold text-navy-950">No commitment</div>
                  <p className="text-navy-700">Region mix, hourly range and ramp calendar before you decide.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-lg border border-ink-200 bg-white p-6 lg:p-10 shadow-sm">
              <div className="mb-6 rounded-lg border border-accent-500/20 bg-accent-500/8 px-4 py-3 text-sm leading-relaxed text-navy-700">
                <strong className="font-semibold text-navy-950">Protected request:</strong> we do
                not publish phone or email contact details on the site. This form is the cleanest
                way to reach the staffing team without opening the door to spam.
              </div>
              <StaffingPlanForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
