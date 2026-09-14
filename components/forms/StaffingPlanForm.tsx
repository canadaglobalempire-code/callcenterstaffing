'use client';

import { useState, useRef, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ArrowRight, AlertCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { submitLead } from '@/lib/lead-client';
import { trackLeadSubmission } from '@/lib/analytics';
import { Recaptcha, type RecaptchaHandle } from './Recaptcha';

// Every field except the free-text notes is required so each lead arrives
// complete. The website accepts any text, so a bare domain, a full URL or "N/A"
// all satisfy it.
const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  company: z.string().min(2, 'Enter your company').max(160),
  website: z.string().trim().min(1, 'Enter your website, or N/A'),
  email: z.string().email('Enter a valid company email'),
  phone: z.string().regex(/^[\d+\-().\s]{7,40}$/, 'Enter a valid phone number'),
  roleType: z.enum(
    ['inbound-cs', 'outbound-sales', 'bilingual', 'team-leads', 'qa-wfm', 'multiple'],
    { errorMap: () => ({ message: 'Select a role type' }) },
  ),
  agentCount: z.enum(['1-9', '10-49', '50-199', '200-499', '500+'], {
    errorMap: () => ({ message: 'Select how many agents you need' }),
  }),
  location: z.enum(['onshore-us', 'nearshore-latam', 'offshore-asia', 'multi-region', 'open'], {
    errorMap: () => ({ message: 'Select a location preference' }),
  }),
  notes: z.string().max(800).optional(),
});

type FormValues = z.infer<typeof schema>;

const ROLE_OPTIONS: { value: FormValues['roleType']; label: string }[] = [
  { value: 'inbound-cs', label: 'Inbound customer service' },
  { value: 'outbound-sales', label: 'Outbound sales' },
  { value: 'bilingual', label: 'Bilingual / multilingual' },
  { value: 'team-leads', label: 'Team leads / supervisors' },
  { value: 'qa-wfm', label: 'QA / WFM / trainers' },
  { value: 'multiple', label: 'Multiple roles' },
];
const AGENT_OPTIONS: { value: FormValues['agentCount']; label: string }[] = [
  { value: '1-9', label: '1–9 agents' },
  { value: '10-49', label: '10–49 agents' },
  { value: '50-199', label: '50–199 agents' },
  { value: '200-499', label: '200–499 agents' },
  { value: '500+', label: '500+ agents' },
];
const LOCATION_OPTIONS: { value: NonNullable<FormValues['location']>; label: string }[] = [
  { value: 'onshore-us', label: 'Onshore (US / Canada)' },
  { value: 'nearshore-latam', label: 'Nearshore (Latin America)' },
  { value: 'offshore-asia', label: 'Offshore (Asia / Africa)' },
  { value: 'multi-region', label: 'Multi-region' },
  { value: 'open', label: 'Open to recommendation' },
];

const fieldClass =
  'h-11 w-full rounded-md border border-ink-200 bg-white px-3.5 text-[15px] text-navy-950 shadow-sm transition-colors focus:border-brand-600 focus:outline-none placeholder:text-navy-700/50';
const labelClass = 'text-xs font-semibold uppercase tracking-[0.12em] text-navy-700';

export function StaffingPlanForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<RecaptchaHandle>(null);
  const renderedAtRef = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);
    if (!captchaToken) {
      setSubmitError('Please confirm you are not a robot.');
      return;
    }
    try {
      await submitLead({
        source: 'StaffingPlanForm',
        subject: `New staffing plan request from ${values.name}${values.company ? ` (${values.company})` : ''}`,
        renderedAt: renderedAtRef.current,
        companyWebsite: honeypotRef.current?.value,
        fields: {
          name: values.name,
          company: values.company,
          website: values.website,
          email: values.email,
          phone: values.phone,
          roleType: values.roleType,
          agentCount: values.agentCount,
          location: values.location,
          notes: values.notes,
          'g-recaptcha-response': captchaToken,
        },
      });
      trackLeadSubmission('StaffingPlanForm');
      setSubmitted(true);
      reset();
      renderedAtRef.current = Date.now();
      captchaRef.current?.reset();
      setCaptchaToken(null);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Try again.');
      captchaRef.current?.reset();
      setCaptchaToken(null);
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-lg border border-brand-600/30 bg-brand-50 p-8 text-center"
      >
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-white">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.01em] text-navy-950">Quote request received.</h3>
        <p className="mt-2 text-navy-700 max-w-sm mx-auto">
          A senior recruiter will respond within one business day with a written quote and
          sourcing timeline.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-brand-600 hover:text-navy-950"
          onClick={() => {
            renderedAtRef.current = Date.now();
            setSubmitted(false);
          }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('grid gap-5', compact ? '' : 'lg:grid-cols-2')}
      noValidate
    >
      <input
        ref={honeypotRef}
        type="text"
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <Field label="Full name" id="name" error={errors.name?.message}>
        <input id="name" {...register('name')} className={fieldClass} placeholder="Operations lead" />
      </Field>

      <Field label="Company" id="company" error={errors.company?.message}>
        <input
          id="company"
          {...register('company')}
          className={fieldClass}
          placeholder="Northstar Commerce"
        />
      </Field>

      <Field label="Website" id="website" error={errors.website?.message}>
        <input
          id="website"
          type="text"
          {...register('website')}
          className={fieldClass}
          placeholder="yourcompany.com or N/A"
        />
      </Field>

      <Field label="Company email" id="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={fieldClass}
          placeholder="you@company.com"
        />
      </Field>

      <Field label="Phone" id="phone" error={errors.phone?.message}>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className={fieldClass}
          placeholder="Best callback number"
        />
      </Field>

      <Field label="Role type" id="roleType" error={errors.roleType?.message}>
        <Select id="roleType" {...register('roleType')} options={ROLE_OPTIONS} />
      </Field>

      <Field label="Agents needed" id="agentCount" error={errors.agentCount?.message}>
        <Select id="agentCount" {...register('agentCount')} options={AGENT_OPTIONS} />
      </Field>

      <Field label="Location preference" id="location" error={errors.location?.message}>
        <Select id="location" {...register('location')} options={LOCATION_OPTIONS} />
      </Field>

      <Field
        label="Anything we should know? (optional)"
        id="notes"
        error={errors.notes?.message}
        className="lg:col-span-2"
      >
        <textarea
          id="notes"
          rows={4}
          {...register('notes')}
          className={cn(fieldClass, 'h-auto py-3 leading-relaxed')}
          placeholder="Account licensure, language mix, ramp constraints…"
        />
      </Field>

      <div className="lg:col-span-2 flex flex-col gap-4 pt-2">
        <Recaptcha ref={captchaRef} onChange={setCaptchaToken} />

        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative inline-flex h-[60px] w-full items-center justify-between gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-accent-500 to-accent-400 pl-5 pr-2 text-left text-white shadow-[0_10px_30px_-10px_rgba(249,115,22,0.55)] transition-all hover:shadow-[0_18px_40px_-10px_rgba(249,115,22,0.65)] hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0 disabled:cursor-not-allowed"
        >
          <span className="flex items-center gap-3 min-w-0">
            <span className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-white/15 backdrop-blur-sm">
              <Send className="h-4 w-4" strokeWidth={2.25} />
            </span>
            <span className="flex flex-col leading-tight min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                {isSubmitting ? 'Submitting' : 'Protected · 1 business day · No obligation'}
              </span>
              <span className="text-[15px] font-extrabold tracking-tight truncate">
                {isSubmitting ? 'Sending your request…' : 'Get a quote'}
              </span>
            </span>
          </span>
          <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-white text-accent-500 shadow-md transition-transform group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          </span>
        </button>
        {submitError && (
          <p
            role="alert"
            className="inline-flex items-center gap-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 font-medium"
          >
            <AlertCircle className="h-4 w-4" />
            {submitError}
          </p>
        )}
        <p className="text-xs text-navy-700/80">
          By submitting, you agree we may contact you about your staffing needs. We never sell or
          share your information.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
  className,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && (
        <p className="inline-flex items-center gap-1 text-xs text-red-600">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
}

const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    options: { value: string; label: string }[];
  }
>((props, ref) => {
  const { options, className, ...rest } = props;
  return (
    // Start on the placeholder. With no value the browser preselects the first
    // real option, so an untouched select would still submit an answer.
    <select
      ref={ref}
      defaultValue=""
      {...rest}
      className={cn(fieldClass, 'appearance-none bg-no-repeat bg-[length:14px] bg-[right_14px_center]', className)}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%232a3d5f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
      }}
    >
      <option value="" disabled>
        Select…
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
});
Select.displayName = 'Select';
