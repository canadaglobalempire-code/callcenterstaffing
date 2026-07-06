'use client';

import { useState, useRef, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ArrowRight, AlertCircle, ShieldCheck, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { submitLead } from '@/lib/lead-client';
import { trackLeadSubmission } from '@/lib/analytics';
import { Recaptcha, type RecaptchaHandle } from './Recaptcha';

const schema = z.object({
  name: z.string().min(2, 'Enter your name'),
  email: z.string().email('Enter a valid work email'),
  company: z.string().min(2, 'Enter your company'),
  website: z.string().optional(),
  phone: z
    .string()
    .min(7, 'Enter a phone number')
    .regex(/^[\d+\-().\s]+$/, 'Phone contains invalid characters'),
  agentCount: z.enum(['1-9', '10-49', '50-199', '200-499', '500+']),
  region: z.enum(['onshore-us', 'nearshore-latam', 'offshore-asia', 'multi-region', 'open']),
});

type FormValues = z.infer<typeof schema>;

const AGENT_OPTIONS: { value: FormValues['agentCount']; label: string }[] = [
  { value: '1-9', label: '1–9 agents' },
  { value: '10-49', label: '10–49 agents' },
  { value: '50-199', label: '50–199 agents' },
  { value: '200-499', label: '200–499 agents' },
  { value: '500+', label: '500+ agents' },
];
const REGION_OPTIONS: { value: FormValues['region']; label: string }[] = [
  { value: 'onshore-us', label: 'Onshore (US / Canada)' },
  { value: 'nearshore-latam', label: 'Nearshore (Latin America)' },
  { value: 'offshore-asia', label: 'Offshore (Asia / Africa)' },
  { value: 'multi-region', label: 'Multi-region' },
  { value: 'open', label: 'Open to recommendation' },
];

const fieldClass =
  'h-12 w-full rounded-xl border border-white/20 bg-white px-4 text-[15px] text-navy-950 font-medium shadow-sm transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30 focus:outline-none placeholder:text-navy-700/55 placeholder:font-normal';

export function HeroQuoteForm() {
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
    defaultValues: {
      name: '',
      email: '',
      company: '',
      website: '',
      phone: '',
      agentCount: undefined,
      region: undefined,
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);
    if (!captchaToken) {
      setSubmitError('Please confirm you are not a robot.');
      return;
    }
    try {
      await submitLead({
        source: 'HeroQuoteForm',
        subject: `New quote request from ${values.name} (${values.company})`,
        renderedAt: renderedAtRef.current,
        companyWebsite: honeypotRef.current?.value,
        fields: {
          name: values.name,
          email: values.email,
          company: values.company,
          website: values.website,
          phone: values.phone,
          agentCount: values.agentCount,
          region: values.region,
          'g-recaptcha-response': captchaToken,
        },
      });
      trackLeadSubmission('HeroQuoteForm');
      setSubmitted(true);
      reset();
      renderedAtRef.current = Date.now();
      captchaRef.current?.reset();
      setCaptchaToken(null);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Try again.');
    }
  };

  return (
    <div className="relative">
      {/* Floating compliance badge — top right */}
      <div className="absolute -top-3 -right-3 z-10 hidden sm:flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 shadow-2xl ring-4 ring-navy-950">
        <ShieldCheck className="h-4 w-4 text-white" strokeWidth={2.5} />
        <span className="text-[11px] font-bold uppercase tracking-wider text-white">
          90-day guarantee
        </span>
      </div>

      <div className="rounded-3xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/15 shadow-2xl p-7 lg:p-8">
        {submitted ? (
          <div className="text-center py-8">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-500 text-white shadow-xl">
              <Check className="h-7 w-7" strokeWidth={2.5} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white">
              Quote request received.
            </h3>
            <p className="mt-3 text-white/75 max-w-sm mx-auto text-[15px]">
              A senior recruiter will review the request and respond with a written quote and
              sourcing timeline within one business day.
            </p>
            <button
              type="button"
              onClick={() => {
                renderedAtRef.current = Date.now();
                setSubmitted(false);
              }}
              className="mt-5 text-sm font-semibold text-accent-500 hover:text-accent-400"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-xl lg:text-2xl font-extrabold tracking-tight text-white">
                  Get a written plan
                </h2>
                <p className="mt-1 text-sm text-white/65">
                  Written quote in one business day. No obligation.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-3.5" noValidate>
              <input
                ref={honeypotRef}
                type="text"
                name="companyWebsite"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <Field id="name" label="Your name" error={errors.name?.message}>
                <input
                  id="name"
                  {...register('name')}
                  className={fieldClass}
                  placeholder="Your name"
                />
              </Field>

              <Field id="company" label="Company" error={errors.company?.message}>
                <input
                  id="company"
                  {...register('company')}
                  className={fieldClass}
                  placeholder="Company"
                />
              </Field>

              <Field id="website" label="Website" error={errors.website?.message}>
                <input
                  id="website"
                  type="text"
                  {...register('website')}
                  className={fieldClass}
                  placeholder="Website (e.g. www.yourcompany.com)"
                />
              </Field>

              <Field id="email" label="Company email" error={errors.email?.message}>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={fieldClass}
                  placeholder="you@company.com"
                />
              </Field>

              <Field id="phone" label="Phone number" error={errors.phone?.message}>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className={fieldClass}
                  placeholder="Phone number"
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="agentCount" className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                    Agents needed
                  </label>
                  <Select id="agentCount" {...register('agentCount')} options={AGENT_OPTIONS} placeholder="Select size" />
                  {errors.agentCount?.message && (
                    <p className="inline-flex items-center gap-1 text-xs text-accent-500 font-medium">
                      <AlertCircle className="h-3 w-3" />
                      {errors.agentCount.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="region" className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                    Region
                  </label>
                  <Select id="region" {...register('region')} options={REGION_OPTIONS} placeholder="Select region" />
                  {errors.region?.message && (
                    <p className="inline-flex items-center gap-1 text-xs text-accent-500 font-medium">
                      <AlertCircle className="h-3 w-3" />
                      {errors.region.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-1">
                <Recaptcha ref={captchaRef} onChange={setCaptchaToken} theme="dark" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative mt-4 inline-flex h-[60px] w-full items-center justify-between gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-accent-500 to-accent-400 pl-5 pr-2 text-left text-white shadow-[0_10px_30px_-10px_rgba(249,115,22,0.55)] transition-all hover:shadow-[0_18px_40px_-10px_rgba(249,115,22,0.65)] hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-white/15 backdrop-blur-sm">
                    <Send className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                  <span className="flex flex-col leading-tight min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                      {isSubmitting ? 'Submitting' : 'Protected · 1 business day'}
                    </span>
                    <span className="text-[15px] font-extrabold tracking-tight truncate">
                      {isSubmitting ? 'Sending your request…' : 'Get my written plan'}
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
                  className="inline-flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-300 font-medium"
                >
                  <AlertCircle className="h-3.5 w-3.5" />
                  {submitError}
                </p>
              )}

              <p className="text-[11px] leading-relaxed text-white/50 text-center">
                We never sell or share your information. By submitting, you agree we may contact
                you about your staffing needs.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {children}
      {error && (
        <p className="inline-flex items-center gap-1 text-xs text-accent-500 font-medium">
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
    placeholder?: string;
  }
>(({ options, placeholder, className, ...rest }, ref) => (
  <select
    ref={ref}
    {...rest}
    className={cn(
      fieldClass,
      'appearance-none bg-no-repeat bg-[length:14px] bg-[right_14px_center] pr-10',
      className,
    )}
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%230f172a' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
      backgroundColor: 'white',
    }}
  >
    <option value="" disabled className="text-navy-950">
      {placeholder ?? 'Select…'}
    </option>
    {options.map((o) => (
      <option key={o.value} value={o.value} className="text-navy-950">
        {o.label}
      </option>
    ))}
  </select>
));
Select.displayName = 'Select';
