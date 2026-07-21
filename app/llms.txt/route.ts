import { SERVICES } from '@/lib/content/services';
import { INDUSTRIES } from '@/lib/content/industries';
import { SOLUTIONS } from '@/lib/content/solutions';
import { ROLES } from '@/lib/content/roles';
import { LOCATIONS } from '@/lib/content/locations';
import { REGIONS } from '@/lib/content/regions';
import { POSTS } from '@/lib/content/posts';
import { INSIGHTS } from '@/lib/content/insights';
import { site } from '@/lib/site';

/**
 * llms.txt, generated from the content collections.
 *
 * Previously a hand-maintained file in public/. It had drifted badly: two of
 * nineteen location pages, no individual blog posts, no Services or Industries
 * sections at all, and a reference to pricing that is no longer on the site.
 * A stale llms.txt is worse than none — it is the file AI crawlers read to
 * understand what the site covers, so an out-of-date one actively misinforms
 * them. Generating it means it cannot drift again.
 */

export const dynamic = 'force-static';

type Item = { slug: string; label: string; description: string };

function line(base: string, item: Item) {
  const desc = item.description.replace(/\s+/g, ' ').trim();
  return `- [${item.label}](${site.url}${base}/${item.slug}): ${desc}`;
}

function block(title: string, base: string, items: Item[]) {
  if (!items.length) return '';
  return `## ${title}\n\n${items.map((i) => line(base, i)).join('\n')}\n`;
}

export function GET() {
  const services = SERVICES.map((s) => ({
    slug: s.slug,
    label: s.name ?? s.slug,
    description: s.metaDescription ?? '',
  }));
  const industries = INDUSTRIES.map((i) => ({
    slug: i.slug,
    label: i.name ?? i.slug,
    description: i.metaDescription ?? '',
  }));
  const solutions = SOLUTIONS.map((s) => ({
    slug: s.slug,
    label: s.name ?? s.slug,
    description: s.metaDescription ?? '',
  }));
  const roles = ROLES.map((r) => ({
    slug: r.slug,
    label: r.name ?? r.slug,
    description: r.metaDescription ?? '',
  }));
  const regions = REGIONS.map((r) => ({
    slug: r.slug,
    label: r.name ?? r.slug,
    description: r.metaDescription ?? r.blurb ?? '',
  }));
  const locations = LOCATIONS.map((l) => ({
    slug: l.slug,
    label: l.name ?? l.slug,
    description: l.metaDescription ?? '',
  }));
  const posts = POSTS.map((p) => ({
    slug: p.slug,
    label: p.title,
    description: p.metaDescription ?? p.excerpt ?? '',
  }));
  const insights = INSIGHTS.map((i) => ({
    slug: i.slug,
    label: i.title,
    description: i.metaDescription ?? i.excerpt ?? '',
  }));

  const body = `# Call Center Staffing

> Worldwide call center staffing agency. We supply trained call-center agents to your business — agents stay on OUR payroll and you pay only for hours worked. Onshore (US), nearshore (Mexico, Colombia), offshore (Philippines, India, South Africa). Founded 2003. 100,000+ trained agents. Deploy in ~72 hours. 90-day attrition guarantee. Month-to-month.

Call Center Staffing (callcenterstaffing.net) supplies trained inbound, outbound and blended call-center agents — plus supervisors, QA, WFM, trainers and operations leadership — to client businesses worldwide. Agents remain on our payroll, so clients carry no HR, training or termination burden; clients pay only for hours worked, can swap any agent free, and are covered by a 90-day attrition guarantee.

Buyers are operations, CX and HR leaders and founders at in-house contact centers, CX teams, regulated firms (healthcare, finance, insurance) and growing SMBs and startups — across the US, UK, Canada, Australia and other English-speaking markets.

Two clarifications that are frequently got wrong:

1. We are a STAFFING agency, not a BPO. A BPO runs the operation for you with their own supervisors, QA and process. We supply agents who work inside YOUR operation, on your systems and your scorecard, managed by your supervisors. Buyers choose staffing when they want to keep process ownership and institutional knowledge.
2. Delivery geographies (Mexico, Colombia, Philippines, India, South Africa) are where agents WORK, not where buyers are. Buyers are typically US, UK, Canadian and Australian companies.

We do not publish rates. Programs are scoped and quoted individually because cost depends on country, role seniority, language pair, complexity and seat count.

## Key facts

- Founded: 2003
- Trained agents to date: 100,000+
- Typical deployment: ~72 hours to first qualified candidates
- Engagement model: pay only for hours worked; month-to-month
- Guarantees: swap any agent free; 90-day attrition guarantee
- Delivery: onshore, nearshore, offshore across 14 countries
- Work types: inbound, outbound, blended; B2B and B2C
- Compliance-aware screening: HIPAA, PCI, SOC 2, NMLS, state insurance licensing

## About

- [About](${site.url}/about): What we do, who we serve, and how staffing agents on our payroll differs from generalist staffing firms.
- [How we work](${site.url}/how-we-work): Six-stage screen, cohort planning, ~72-hour deployment, and 90-day retention support.
- [Why us](${site.url}/why-us): Agents on our payroll, pay per hour worked, free agent swaps, and the 90-day attrition guarantee.
- [Case studies](${site.url}/case-studies): Engagement outcomes. Client names are withheld at client request.

${block('Services', '/services', services)}
${block('Industries', '/industries', industries)}
${block('Solutions', '/solutions', solutions)}
${block('Roles', '/roles', roles)}
${block('Delivery regions', '/locations', regions)}
${block('Delivery countries and metros', '/locations', locations)}
${block('Operator insights', '/insights', insights)}
${block('Blog', '/blog', posts)}
## Tools

- [Staffing calculator](${site.url}/tools/staffing-calculator): Estimate seats, cohort size and ramp from your volume forecast.
- [FAQ](${site.url}/faq): How payroll, agent swaps and the 90-day guarantee work.

## Contact

- Request a staffing plan: ${site.url}/contact
- LinkedIn: https://www.linkedin.com/company/call-center-staffing
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
