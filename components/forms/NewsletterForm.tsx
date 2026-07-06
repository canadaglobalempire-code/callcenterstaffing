'use client';

import { useRef, useState, type FormEvent } from 'react';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { submitLead } from '@/lib/lead-client';
import { trackEvent } from '@/lib/analytics';

export function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const renderedAtRef = useRef(Date.now());

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get('email') ?? '').trim();
    if (!email) return;

    setStatus('sending');
    setError(null);
    try {
      await submitLead({
        source: 'NewsletterForm',
        subject: `Newsletter signup: ${email}`,
        renderedAt: renderedAtRef.current,
        companyWebsite: String(fd.get('companyWebsite') ?? ''),
        fields: {
          email,
        },
      });
      trackEvent('newsletter_signup', {
        form_source: 'NewsletterForm',
        page_path: window.location.pathname,
      });
      setStatus('done');
      renderedAtRef.current = Date.now();
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  }

  const done = status === 'done';
  const sending = status === 'sending';

  return (
    <form
      className="mt-8 flex max-w-md flex-col gap-2"
      onSubmit={onSubmit}
      aria-label="Newsletter signup"
    >
      <input
        type="text"
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="flex flex-col sm:flex-row gap-2">
        <label className="sr-only" htmlFor="footer-email">
          Email address
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          placeholder="Work email"
          disabled={done || sending}
          className="flex-1 rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={done || sending}
          className="inline-flex items-center justify-center gap-1 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-navy-950 hover:bg-white/90 disabled:opacity-60"
        >
          {done ? (
            <>
              Subscribed <Check className="h-4 w-4" />
            </>
          ) : sending ? (
            <>Sending…</>
          ) : (
            <>
              Subscribe <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {status === 'error' && error && (
        <p
          role="alert"
          className="inline-flex items-center gap-1.5 text-xs text-red-300 font-medium"
        >
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </form>
  );
}
