'use client';

import { useState, useRef, useId, useEffect, cloneElement, isValidElement, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ArrowRight, AlertCircle, Send } from 'lucide-react';
import Script from 'next/script';
import { cn } from '@/lib/utils';
import { submitLead, LEAD_SUBJECT, thanksName, focusFirstInvalid } from '@/lib/lead-client';
import { SPLITFORMS_KEY } from '@/lib/splitforms';
import { trackLeadSubmission } from '@/lib/analytics';
import { Recaptcha, type RecaptchaHandle } from './Recaptcha';
import { PhoneField, DEFAULT_DIAL, isDialCodePrefix, isValidDialCode, isValidNationalNumber, isValidE164, toE164 } from './PhoneField';

// Every field is required so each lead arrives complete. The website accepts
// any text, so a bare domain, a full URL or "N/A" all satisfy it.
const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  company: z.string().min(2, 'Enter your company').max(160),
  website: z.string().trim().min(1, 'Enter your website, or N/A'),
  email: z.string().email('Enter a valid company email'),
  phoneDial: z.string().refine(isValidDialCode, 'Enter a valid country code, e.g. +44'),
  phone: z
    .string()
    .trim()
    .min(1, 'Enter your mobile number')
    .refine(isValidNationalNumber, 'Enter a valid phone number'),
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
  notes: z.string().trim().min(2, 'Tell us a little about your needs').max(800),
}).superRefine((v, ctx) => {
  // Same rule as app/api/lead: 7-15 digits in total, starting with a known dial code.
  if (isValidDialCode(v.phoneDial) && isValidNationalNumber(v.phone) && !isValidE164(toE164(v.phoneDial, v.phone))) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['phone'], message: 'Enter a valid phone number' });
  }
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
// Red border + soft red ring on a field that failed validation; cleared as soon
// as the field becomes valid (react-hook-form revalidates on change after submit).
const errorRing = (on: unknown) => (on ? '!border-red-600 ring-2 ring-red-600/20' : '');

export function StaffingPlanForm({ compact = false }: { compact?: boolean }) {
  const formId = useId();
  const fieldId = (name: string) => `${formId}-${name}`;
  const [submitted, setSubmitted] = useState(false);
  const [thanks, setThanks] = useState('Thanks!');
  const [showBanner, setShowBanner] = useState(false);
  const [captchaMissing, setCaptchaMissing] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<RecaptchaHandle>(null);
  const renderedAtRef = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
    trigger,
    clearErrors,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: { phoneDial: DEFAULT_DIAL },
  });

  const backToForm = () => {
    renderedAtRef.current = Date.now();
    setSubmitted(false);
  };
  // Back to an empty, working form ~6 s after the thank-you (or on the button).
  useEffect(() => {
    if (!submitted) return;
    const t = setTimeout(() => {
      renderedAtRef.current = Date.now();
      setSubmitted(false);
    }, 6000);
    return () => clearTimeout(t);
  }, [submitted]);

  useEffect(() => {
    if (captchaToken) setCaptchaMissing(false);
  }, [captchaToken]);

  const hasErrors = Object.keys(errors).length > 0 || captchaMissing;

  // Missing/invalid fields: nothing is sent; banner, red fields, scroll to the first.
  const onInvalid = (fieldErrors: Record<string, unknown> = {}) => {
    setCaptchaMissing(!captchaToken);
    setShowBanner(true);
    focusFirstInvalid(formRef.current, Object.keys(fieldErrors));
  };

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);
    if (!captchaToken) {
      onInvalid();
      return;
    }
    setShowBanner(false);
    try {
      await submitLead({
        source: 'StaffingPlanForm',
        subject: LEAD_SUBJECT,
        renderedAt: renderedAtRef.current,
        companyWebsite: honeypotRef.current?.value,
        form: formRef.current,
        fields: {
          name: values.name,
          company: values.company,
          website: values.website,
          email: values.email,
          phone: toE164(values.phoneDial, values.phone),
          roleType: values.roleType,
          agentCount: values.agentCount,
          location: values.location,
          // Posted as "message" so SplitForms reads it as the visitor's message.
          message: values.notes,
          'g-recaptcha-response': captchaToken,
        },
      });
      trackLeadSubmission('StaffingPlanForm');
      setThanks(thanksName(values.name));
      reset();
      clearErrors();
      setShowBanner(false);
      setCaptchaMissing(false);
      captchaRef.current?.reset();
      setCaptchaToken(null);
      setSubmitted(true);
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
        <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.01em] text-navy-950">{thanks}</h3>
        <p className="mt-2 text-navy-700 max-w-sm mx-auto">
          Your inquiry has been received. One of our representatives will reach out to you.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-brand-600 hover:text-navy-950"
          onClick={backToForm}
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      data-sf-key={SPLITFORMS_KEY}
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className={cn('grid gap-5', compact ? '' : 'lg:grid-cols-2')}
      noValidate
    >
      <Script src="https://splitforms.com/embed.js" strategy="afterInteractive" />
      <input
        ref={honeypotRef}
        type="text"
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {showBanner && hasErrors && (
        <p
          role="alert"
          className={cn(
            'inline-flex items-center gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700',
            compact ? '' : 'lg:col-span-2',
          )}
        >
          <AlertCircle className="h-4 w-4 flex-none" />
          Please complete the highlighted fields below.
        </p>
      )}

      <Field label="Full name" id={fieldId('name')} error={errors.name?.message}>
        <input id={fieldId('name')} {...register('name')} className={cn(fieldClass, errorRing(errors.name))} placeholder="Operations lead" />
      </Field>

      <Field label="Company" id={fieldId('company')} error={errors.company?.message}>
        <input
          id={fieldId('company')}
          {...register('company')}
          className={cn(fieldClass, errorRing(errors.company))}
          placeholder="Northstar Commerce"
        />
      </Field>

      <Field label="Website" id={fieldId('website')} error={errors.website?.message}>
        <input
          id={fieldId('website')}
          type="text"
          {...register('website')}
          className={cn(fieldClass, errorRing(errors.website))}
          placeholder="yourcompany.com or N/A"
        />
      </Field>

      <Field label="Company email" id={fieldId('email')} error={errors.email?.message}>
        <input
          id={fieldId('email')}
          type="email"
          {...register('email')}
          className={cn(fieldClass, errorRing(errors.email))}
          placeholder="you@company.com"
        />
      </Field>

      <Field label="Phone" id={fieldId('phone')} error={errors.phoneDial?.message ?? errors.phone?.message}>
        <PhoneField
          id={fieldId('phone')}
          fieldClass={cn(fieldClass, errorRing(errors.phone || errors.phoneDial))}
          groupFocusClass="group-focus-within:border-brand-600"
          dialField={register('phoneDial')}
          numberField={register('phone')}
          dial={watch('phoneDial')}
          onDialSelect={(dial) => setValue('phoneDial', dial, { shouldValidate: true })}
          onDialTyped={(dial) => {
            // A partly typed code ("+3" on the way to "+380") waits for blur/submit;
            // an unknown complete code (+999) or a real one is checked right away.
            if (isDialCodePrefix(dial) && !isValidDialCode(dial)) clearErrors('phoneDial');
            else void trigger('phoneDial');
          }}
          dialInvalid={errors.phoneDial ? true : undefined}
          placeholder="Best callback number"
          chevronColor="#2a3d5f"
        />
      </Field>

      <Field label="Role type" id={fieldId('roleType')} error={errors.roleType?.message}>
        <Select id={fieldId('roleType')} {...register('roleType')} className={errorRing(errors.roleType)} options={ROLE_OPTIONS} />
      </Field>

      <Field label="Agents needed" id={fieldId('agentCount')} error={errors.agentCount?.message}>
        <Select id={fieldId('agentCount')} {...register('agentCount')} className={errorRing(errors.agentCount)} options={AGENT_OPTIONS} />
      </Field>

      <Field label="Location preference" id={fieldId('location')} error={errors.location?.message}>
        <Select id={fieldId('location')} {...register('location')} className={errorRing(errors.location)} options={LOCATION_OPTIONS} />
      </Field>

      <Field
        label="Anything we should know?"
        id={fieldId('notes')}
        error={errors.notes?.message}
        className="lg:col-span-2"
      >
        <textarea
          id={fieldId('notes')}
          rows={4}
          {...register('notes')}
          className={cn(fieldClass, 'h-auto py-3 leading-relaxed', errorRing(errors.notes))}
          placeholder="Account licensure, language mix, ramp constraints…"
        />
      </Field>

      <div className="lg:col-span-2 flex flex-col gap-4 pt-2">
        <div>
          <div data-captcha className={cn('w-fit rounded-md', captchaMissing && 'ring-2 ring-red-600 ring-offset-2')}>
            <Recaptcha ref={captchaRef} onChange={setCaptchaToken} />
          </div>
          {captchaMissing && (
            <p className="mt-1.5 inline-flex items-center gap-1 text-xs text-red-600">
              <AlertCircle className="h-3 w-3" />
              Please confirm you are not a robot.
            </p>
          )}
        </div>

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
        <span aria-hidden="true" className="ml-0.5 text-red-600">
          *
        </span>
      </label>
      {isValidElement(children)
        ? cloneElement(children as React.ReactElement<{ 'aria-invalid'?: boolean; 'aria-describedby'?: string }>, {
            'aria-invalid': error ? true : undefined,
            'aria-describedby': error ? `${id}-error` : undefined,
          })
        : children}
      {error && (
        <p id={`${id}-error`} className="inline-flex items-center gap-1 text-xs text-red-600">
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
