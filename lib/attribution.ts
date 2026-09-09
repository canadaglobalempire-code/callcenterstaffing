/**
 * First-touch lead attribution.
 *
 * The site has no CRM: leads arrive as SplitForms notification emails. Until
 * now those carried only the path the form was submitted on, which cannot
 * distinguish an organic visitor who landed on a blog post and converted three
 * pages later from a direct visitor who went straight to /contact.
 *
 * `ATTRIBUTION_SNIPPET` runs before hydration on the real landing page, so the
 * referrer and query string are the genuine entry values rather than whatever
 * client-side navigation has since rewritten them. First touch wins: once the
 * session key is set it is never overwritten.
 */
export const ATTRIBUTION_STORAGE_KEY = 'ccs_attr';

export type Attribution = {
  landingPath?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  clickId?: string;
  landedAt?: string;
};

/**
 * Inline script body. Deliberately dependency-free and defensive — a storage
 * exception in a locked-down browser must never break page render.
 */
export const ATTRIBUTION_SNIPPET = `(function(){try{
var K=${JSON.stringify(ATTRIBUTION_STORAGE_KEY)};
if(sessionStorage.getItem(K))return;
var q=new URLSearchParams(location.search);
var cid=q.get('gclid')||q.get('msclkid')||q.get('fbclid')||q.get('ttclid')||'';
var d={landingPath:location.pathname+location.search,referrer:document.referrer||'',
utmSource:q.get('utm_source')||'',utmMedium:q.get('utm_medium')||'',
utmCampaign:q.get('utm_campaign')||'',utmTerm:q.get('utm_term')||'',
utmContent:q.get('utm_content')||'',clickId:cid,landedAt:new Date().toISOString()};
sessionStorage.setItem(K,JSON.stringify(d));
}catch(e){}})();`;

const MAX_FIELD_LENGTH = 300;

function clean(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.slice(0, MAX_FIELD_LENGTH);
}

/** Read the stored first-touch record. Returns undefined if nothing usable. */
export function getAttribution(): Attribution | undefined {
  if (typeof window === 'undefined') return undefined;

  let raw: string | null = null;
  try {
    raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
  } catch {
    return undefined;
  }
  if (!raw) return undefined;

  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return undefined;
  }
  if (!parsed || typeof parsed !== 'object') return undefined;

  const attribution: Attribution = {
    landingPath: clean(parsed.landingPath),
    referrer: clean(parsed.referrer),
    utmSource: clean(parsed.utmSource),
    utmMedium: clean(parsed.utmMedium),
    utmCampaign: clean(parsed.utmCampaign),
    utmTerm: clean(parsed.utmTerm),
    utmContent: clean(parsed.utmContent),
    clickId: clean(parsed.clickId),
    landedAt: clean(parsed.landedAt),
  };

  const hasValue = Object.values(attribution).some((v) => v !== undefined);
  return hasValue ? attribution : undefined;
}
