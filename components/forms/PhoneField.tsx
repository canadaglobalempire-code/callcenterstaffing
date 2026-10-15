'use client';

import { forwardRef, useState } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { COUNTRIES, DEFAULT_DIAL, UNKNOWN_FLAG, countryForDial, normaliseDial } from '@/lib/phone';

export {
  COUNTRIES,
  DEFAULT_DIAL,
  DIAL_CODES,
  countryForDial,
  isDialCodePrefix,
  isValidDialCode,
  isValidE164,
  isValidNationalNumber,
  normaliseDial,
  toE164,
} from '@/lib/phone';
export type { Country } from '@/lib/phone';

type PhoneFieldProps = {
  id: string;
  /** Classes of the neighbouring inputs, reused for both halves of the group. */
  fieldClass: string;
  /** group-focus-within: variants of the form's focus styles, for the dial-code group. */
  groupFocusClass: string;
  dialField: UseFormRegisterReturn;
  numberField: UseFormRegisterReturn;
  /** Current dial code (from watch()). */
  dial: string | undefined;
  /** Writes a dial code chosen from the list into the form. */
  onDialSelect: (dial: string) => void;
  /** Runs after each typed change to the dial code (once the form has the new value). */
  onDialTyped?: (dial: string) => void;
  dialInvalid?: boolean;
  placeholder?: string;
  chevronColor?: string;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
};

// Left group: [flag] [typed dial code] [chevron]. An invisible native <select>
// fills the whole group underneath, so clicking the flag or chevron opens the
// country list, while the dial-code input sits above it in the middle.
export const PhoneField = forwardRef<HTMLDivElement, PhoneFieldProps>(function PhoneField(
  {
    id,
    fieldClass,
    groupFocusClass,
    dialField,
    numberField,
    dial = DEFAULT_DIAL,
    onDialSelect,
    onDialTyped,
    dialInvalid,
    placeholder,
    chevronColor = '#0f172a',
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedBy,
  },
  ref,
) {
  // Set only when a country is picked from the list, so a shared code such as
  // +1 keeps showing Canada after choosing it; typing clears it.
  const [pickedIso2, setPickedIso2] = useState<string | null>(null);
  const country = countryForDial(dial, pickedIso2);
  return (
    <div ref={ref} className="flex w-full">
      <div className="group relative w-[5.75rem] flex-none focus-within:z-10">
        <select
          id={`${id}-country`}
          aria-label="Country calling code"
          value={country?.iso2 ?? ''}
          onChange={(e) => {
            const picked = COUNTRIES.find((c) => c.iso2 === e.target.value);
            if (!picked) return;
            setPickedIso2(picked.iso2);
            onDialSelect(picked.dial);
          }}
          className={cn(fieldClass, groupFocusClass, 'appearance-none rounded-r-none pr-5 text-transparent')}
        >
          <option value="" disabled hidden>
            {`${UNKNOWN_FLAG} Other`}
          </option>
          {COUNTRIES.map((c) => (
            <option key={c.iso2} value={c.iso2} className="text-navy-950">
              {`${c.flag} ${c.name} ${c.dial}`}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center gap-1 pl-2.5 pr-5 text-[15px] font-medium text-navy-950">
          <span aria-hidden="true">{country?.flag ?? UNKNOWN_FLAG}</span>
          <input
            id={`${id}-dial`}
            type="text"
            inputMode="numeric"
            autoComplete="tel-country-code"
            maxLength={5}
            aria-label="Country dial code"
            aria-required="true"
            aria-invalid={dialInvalid || undefined}
            aria-describedby={dialInvalid ? ariaDescribedBy : undefined}
            defaultValue={DEFAULT_DIAL}
            {...dialField}
            onChange={(e) => {
              e.target.value = normaliseDial(e.target.value);
              setPickedIso2(null);
              const typed = e.target.value;
              return dialField.onChange(e).then(() => onDialTyped?.(typed));
            }}
            className="pointer-events-auto relative z-20 h-7 w-full min-w-[3.5ch] max-w-[5ch] border-0 bg-transparent p-0 text-[15px] font-medium text-navy-950 focus:outline-none focus:ring-0"
          />
        </div>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-1.5 top-1/2 z-10 -translate-y-1/2"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke={chevronColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <input
        id={id}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        aria-required="true"
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedBy}
        {...numberField}
        className={cn(fieldClass, '-ml-px min-w-0 flex-1 rounded-l-none focus:relative focus:z-10')}
        placeholder={placeholder}
      />
    </div>
  );
});
