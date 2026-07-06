'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

// Public reCAPTCHA v2 site key — safe to ship in client code.
// The matching SECRET key is configured in the SplitForms dashboard (never in this repo).
const SITE_KEY = '6Ld_Fw8tAAAAAGmZm1aBgugZA434TfkJWlhkUzEP';
const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? SITE_KEY;

export type RecaptchaHandle = { reset: () => void };

declare global {
  interface Window {
    grecaptcha?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => number;
      reset: (id?: number) => void;
      getResponse: (id?: number) => string;
    };
  }
}

type Props = {
  onChange: (token: string | null) => void;
  theme?: 'light' | 'dark';
};

/**
 * Google reCAPTCHA v2 ("I'm not a robot") checkbox.
 * Loads the API once, renders explicitly, and exposes reset() via ref.
 * The resolved token is handed up via onChange and sent to SplitForms as
 * `g-recaptcha-response`, which SplitForms verifies server-side.
 */
export const Recaptcha = forwardRef<RecaptchaHandle, Props>(({ onChange, theme = 'light' }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetId.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(widgetId.current);
        onChange(null);
      }
    },
  }));

  useEffect(() => {
    const SCRIPT_ID = 'recaptcha-api';
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement('script');
      s.id = SCRIPT_ID;
      s.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }

    const timer = setInterval(() => {
      if (
        window.grecaptcha &&
        typeof window.grecaptcha.render === 'function' &&
        containerRef.current &&
        widgetId.current === null
      ) {
        widgetId.current = window.grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          callback: (token: string) => onChange(token),
          'expired-callback': () => onChange(null),
          'error-callback': () => onChange(null),
        });
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} className="min-h-[78px]" />;
});

Recaptcha.displayName = 'Recaptcha';
