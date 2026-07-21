const siteUrl = 'https://www.callcenterstaffing.net';

export const site = {
  name: 'Call Center Staffing',
  shortName: 'CCS',
  description:
    'A call center staffing agency with 100,000+ trained agents ready to deploy to your business. Temporary or long-term. Onshore, nearshore, offshore. Pay only for hours worked.',
  url: siteUrl.replace(/\/$/, ''),
  legalName: 'Call Center Staffing, Inc.',
  contact: {
    formPath: '/contact',
    hours: 'Mon–Fri · 8am–8pm ET',
  },
  // Keep public direct-contact details off the site to reduce spam calls and email.
  social: {},
  founded: '2003',
} as const;
