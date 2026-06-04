export const site = {
  name: 'Call Center Staffing',
  shortName: 'CCS',
  description:
    'A call center staffing agency with 100,000+ trained agents ready to deploy to your business. Temporary or long-term. Onshore, nearshore, offshore. Pay only for hours worked.',
  url: 'https://www.callcenterstaffing.net',
  legalName: 'Call Center Staffing, Inc.',
  // NOTE: Demo placeholder contact details — replace with the client's real
  // phone, email and address before launch. The (800) 555-01xx range is the
  // officially reserved fictional number range, so it is safe to ship as a demo.
  contact: {
    phoneDisplay: '(800) 555-0142',
    phoneHref: 'tel:+18005550142',
    email: 'hello@callcenterstaffing.net',
    emailHref: 'mailto:hello@callcenterstaffing.net',
    salesEmail: 'staffing@callcenterstaffing.net',
    salesEmailHref: 'mailto:staffing@callcenterstaffing.net',
    hours: 'Mon–Fri · 8am–8pm ET',
    address: {
      street: '2500 N Central Ave, Suite 900',
      city: 'Phoenix',
      region: 'AZ',
      postalCode: '85004',
      country: 'US',
      full: '2500 N Central Ave, Suite 900, Phoenix, AZ 85004',
    },
  },
  // NOTE: only ship sameAs/social URLs that actually resolve — a 404 sameAs
  // weakens trust. Add facebook/crunchbase/clutch here once those profiles exist.
  social: {
    linkedin: 'https://www.linkedin.com/company/call-center-staffing',
    x: 'https://x.com/ccs_staffing',
  },
  founded: '2003',
} as const;
