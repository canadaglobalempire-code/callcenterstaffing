/**
 * Blog posts and insights write internal links inline as plain paths
 * ("see /services/contact-center-staffing") and the renderers turn them into
 * links. A path only counts when it starts a word, so "30/60/90",
 * "inbound/offshore", "Decree 13/2023" and URLs stay text, and when its first
 * segment is a real route on this site.
 */
const ROUTES = new Set([
  'about',
  'blog',
  'case-studies',
  'contact',
  'faq',
  'how-we-work',
  'industries',
  'insights',
  'locations',
  'outsourcing',
  'privacy',
  'remote-call-center-staffing',
  'resources',
  'roles',
  'services',
  'small-business',
  'solutions',
  'terms',
  'tools',
  'why-us',
]);

export function inlinePathRegex(): RegExp {
  return /(?<![A-Za-z0-9/.:])\/[a-z0-9][a-z0-9\-/]*[a-z0-9]/g;
}

export function isSitePath(path: string): boolean {
  return ROUTES.has(path.split('/')[1]);
}
