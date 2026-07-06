# SEO Investigation - 2026-07-06

## Executive Diagnosis

The website is crawlable, but the current live SEO setup and keyword strategy explain why impressions and clicks are weak.

Confirmed issues:

- The live `www.callcenterstaffing.net` and `callcenterstaffing.net` hosts both returned `200 OK` during testing. That splits canonical signals across duplicate hosts.
- Public search checks did not surface clear indexed results for `site:callcenterstaffing.net`, which suggests the new site may not yet be indexed or trusted. Confirm this in Google Search Console.
- The live site is still serving older metadata/copy in places, including "free quote" snippets. Local code has now been cleaned, but the production deploy and CDN cache must be refreshed.
- The current keyword mix is heavily weighted toward broad commercial and comparison terms. Those can have volume, but they are high-difficulty and dominated by stronger domains.
- Exact search volume and keyword difficulty require Google Search Console, Google Keyword Planner, Ahrefs, Semrush, or a similar source. The table below uses practical SEO demand bands and SERP difficulty assumptions, not paid-tool exacts.

## Technical Fixes Implemented

- Added a permanent redirect from `callcenterstaffing.net/*` to `https://www.callcenterstaffing.net/*` in `next.config.mjs`.
- Cleaned `robots.txt` Host output from a full URL to `www.callcenterstaffing.net`.
- Kept the sitemap URL on the canonical `www` host.
- Updated remaining "free quote" metadata/default CTA copy to "written plan" language.
- Earlier local SEO/security work remains in place: canonical site URL, sitemap updates, privacy/terms pages, protected server-side lead route, no public phone/email, structured data cleanup, and conversion events.

## Current Keyword Targeting

| Page / Cluster | Current Target Keyword | Demand Band | Difficulty | Diagnosis |
|---|---:|---:|---:|---|
| Homepage | call center staffing agency | Medium | High | Correct core term, but hard for a rebrand/newly deployed site. Needs authority and long-tail support. |
| Homepage | call center staffing | Medium-High | Very High | Broad head term. Good for positioning, poor short-term click opportunity. |
| Services | call center recruitment | Medium | High | Relevant, but competitors include staffing agencies and recruiting content sites. |
| Services | BPO staffing services | Low-Medium | Medium | Better commercial fit than generic "BPO companies"; keep building this. |
| Services | contact center staffing | Medium | High | Strong fit, but competitive and close to generic contact-center resources. |
| Services | customer service staffing agency | Low-Medium | Medium-High | Good buyer intent. Needs proof and internal links. |
| Services | outsourced call center staffing | Low-Medium | Medium-High | Good because it explains the staffing-vs-BPO difference. |
| Services | nearshore call center staffing | Low-Medium | Medium | Strong opportunity, especially paired with Mexico/Colombia. |
| Services | offshore call center staffing | Medium | High | More competitive and more BPO-heavy. |
| Services | onshore call center staffing | Low-Medium | Medium | Good compliance/regulatory intent. |
| Services | bilingual call center staffing | Low-Medium | Medium | Strong conversion term; should link to Spanish-speaking agent content. |
| Industries | healthcare call center staffing | Low-Medium | Medium | One of the best commercial opportunities because the compliance angle narrows competition. |
| Industries | financial services call center staffing | Low | Medium | Lower volume, high-value buyer. Keep. |
| Industries | insurance call center staffing | Low-Medium | Medium | Strong vertical intent, especially licensed P&C/life/health modifiers. |
| Industries | ecommerce customer service outsourcing | Medium | High | Has traffic potential but leans outsourcing, not staffing. Needs staffing alternative positioning. |
| Industries | SaaS customer support outsourcing | Low-Medium | Medium | Good founder/operator intent. Needs comparison/internal links. |
| Industries | utilities/logistics/government/education call center staffing | Low | Low-Medium | Lower volume but easier and higher intent. Good long-tail pages. |
| Roles | Spanish speaking call center agents | Medium | Medium-High | Good demand, but needs "hire", "staffing", and "bilingual" variants. |
| Roles | inbound customer service agent staffing | Low-Medium | Medium | Useful support page, not likely a traffic leader. |
| Locations | call center staffing in Mexico | Low-Medium | Medium | Strong nearshore buyer intent. |
| Locations | call center staffing in the Philippines | Low-Medium | Medium-High | More competitive with BPO/offshore vendors. |
| Locations | call center staffing Colombia | Low | Medium | Good long-tail opportunity. |
| Blog | best call center outsourcing companies | High | Very High | Traffic target, not an easy ranking win. Dominated by review/list sites. |
| Blog | top BPO companies in USA/India/Philippines/etc. | Medium-High | Very High | Volume exists, but direct conversion is weaker and difficulty is high. |
| Blog | call center staffing cost | Medium | High | Important buyer term. Strengthen with calculator and quote-plan CTA. |
| Blog | seasonal call center staffing | Low-Medium | Medium | Good near-term opportunity. |
| Blog | call center no-show rate | Low | Low-Medium | Lower volume, but easier and highly credible. |

Demand bands:

- High: broad category search demand.
- Medium: meaningful monthly demand but still competitive.
- Low-Medium: smaller volume, usually stronger buyer intent.
- Low: niche, but often easier to rank and convert.

## Why Impressions Are Low

1. Google may not have indexed the new/rebranded site yet. The public `site:` check did not show a clean indexed footprint. Google Search Console must confirm "Indexed", "Discovered - currently not indexed", or "Crawled - currently not indexed".
2. The non-www duplicate host created a canonical signal problem. This is now fixed in code with a permanent redirect, but it must be deployed.
3. The current site is trying to rank for several very hard head terms before Google has enough trust signals for the domain.
4. The blog has many "best/top BPO companies" pages. These can get impressions over time, but they compete with high-authority directories and may not drive immediate leads.
5. The strongest business differentiators are not yet separated into enough low-competition landing pages: agents on our payroll, no HR burden, pay only for hours worked, 90-day guarantee, 72-hour shortlist, compliance-specific staffing, bilingual nearshore staffing.

## Priority Keyword Plan

Build and internally link these first because they combine buyer intent with lower difficulty:

1. `HIPAA call center staffing agency`
2. `healthcare call center staffing agency`
3. `licensed insurance call center agents`
4. `NMLS call center staffing`
5. `bilingual Spanish call center agents`
6. `nearshore call center staffing Mexico`
7. `call center staffing agency for small business`
8. `seasonal call center staffing for Q4`
9. `call center staffing for open enrollment`
10. `remote call center staffing agency`
11. `hire trained call center agents`
12. `call center agents on our payroll`

## Next SEO Actions Outside Code

- Deploy the local changes.
- Purge Hostinger/CDN cache after deploy.
- In Google Search Console, verify both `https://www.callcenterstaffing.net` and domain property if possible.
- Submit `https://www.callcenterstaffing.net/sitemap.xml`.
- Inspect these URLs manually in Search Console: `/`, `/services/call-center-recruitment`, `/services/bilingual-call-center-staffing`, `/industries/healthcare`, `/tools/staffing-calculator`.
- Check whether Google selects the `www` canonical after deployment.
- Export GSC query/page data after 7-14 days, then replace the demand bands above with real impressions, clicks, CTR, and average position.

