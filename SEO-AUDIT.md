# SEO & Website Audit — callcenterstaffing.net

_Audit date: 2026-07-06 · Status: pre-change deliverable (no code modified). Complements [SEO-INVESTIGATION.md](SEO-INVESTIGATION.md)._

---

## 0. How to read this document

This is a **production, already-optimized** Next.js 14 (App Router) site, not a greenfield audit target. Prior sessions already implemented the large majority of technical, on-page, and schema SEO. This audit therefore does two things:

1. **Confirms what is already correct** (so we don't waste effort re-doing it).
2. **Isolates the genuine remaining gaps** and ranks them by impact/effort.

The headline conclusion: the on-page/technical foundation is strong. The real levers now are **(a) an unpublished geo-page opportunity, (b) blog cluster intent-misalignment, (c) trust/EEAT proof, and (d) getting the rebrand indexed & trusted** — the last of which is largely off-code.

---

## 1. Business Summary (Phase 1)

| Dimension | Finding |
|---|---|
| **Business model** | B2B lead generation for a specialist **call-center / contact-center staffing & recruiting agency**. ~20 years operating (founded 2003), rebranded. Conversion = protected form → written staffing plan/quote. |
| **What they sell** | Trained agents placed **on CCS's payroll** (not the client's), temporary or long-term, onshore / nearshore / offshore. Client pays only for hours worked. Differentiators: 100k+ trained agents, ~72h first slate, 90-day attrition guarantee, free agent swap, no HR burden. |
| **Target audience** | Operations leaders, CX executives, BPO operators, founders, hiring managers — under staffing pressure (slipping queues, launch dates, attrition, new channel/region/language/compliance need). |
| **Ideal customer profile** | Contact-center operators buying **5–500+ seats**, often with a compliance dimension (HIPAA, PCI, NMLS, licensed insurance) or a bilingual/nearshore need. |
| **Geographic targeting** | Served regions: US, Canada, Mexico, Philippines, Colombia, Central America, Caribbean, plus Europe/Africa/Asia/Australia/Middle East. Primary buyer market: **United States**. |
| **Industries served** | 13 verticals: healthcare, financial services, insurance, ecommerce/retail, telecom/media, travel/hospitality, SaaS, utilities, logistics, government/public, education, tech support, warehouse. |
| **Customer pain points** | Understaffed floors, can't find qualified agents, SLA slipping, high attrition, seasonal surge, compliance-constrained hiring, launch ramps. |
| **Buyer intent** | Overwhelmingly **commercial/transactional** (hire, staff, agency, cost, quote), with a secondary informational layer (guides, comparisons). |
| **USP** | "Specialist recruiters, 20+ years in contact centers only. Agents on our payroll, deployed in ~72 hours, pay only for hours worked, 90-day guarantee, no HR burden." |
| **Deliberate constraints** | **No public phone/email** (anti-spam); all contact via protected forms. Longevity/scale claims are intentional brand assets, not placeholders. |
| **Main competitors** | Two tiers: (1) staffing/RPO firms positioning into contact-center hiring; (2) **BPO/outsourcing vendors & directory/review sites** that dominate the "best/top BPO companies" SERPs the blog currently targets. |

---

## 2. Current State — What Is Already Done Well (verified in code)

**Technical foundation — solid:**
- Unique `title` + `metaDescription` + `H1` on every page (verified across all 21 static routes + 7 dynamic templates). No duplicate metadata found.
- `metadataBase`, OpenGraph + Twitter cards site-wide, per-page canonicals via `alternatesFor()`.
- Canonical host enforced: 301 `callcenterstaffing.net → www` in `next.config.mjs`.
- `robots.ts` allows all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) + standard bots.
- Comprehensive `sitemap.ts` covering all collections and dynamic slugs.
- Security headers: HSTS (preload), X-Content-Type-Options, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy. `poweredByHeader: false`.
- Image formats `avif`/`webp`, `next/image` with priority + sizes on heroes.
- Accessibility: skip-link, semantic sections, reduced-motion intent, WCAG 2.1 AA target.
- Lead API: origin check, rate limiting, honeypot, submit-timing check, Zod validation, reCAPTCHA v2 field. Genuinely hardened.

**Schema — strong coverage:**
- `Organization` + `WebSite` global (layout).
- `BreadcrumbList` on 28 pages, `FAQPage` on 12, `Service` on 6 (all service/industry/solution/role slugs), `BlogPosting` on blog posts, `WebPage` on legal pages.
- **No fabricated ratings:** `ReviewSchema` (with a default 4.9) exists but is **correctly unused** — nothing publishes fake reviews. Good.

**Content — deep and specific:**
- Service/industry data files are large (12k–15k words of source data across the sets) with intro, what-is-it, who-it's-for, approach steps, why-us, outcomes, FAQs per entry. This is not thin content.
- 9 services, 13 industries, 5 solutions, 8 roles, 9 region pages, 31 blog posts, 3 insights, staffing calculator tool.

---

## 3. Full Issue Register — Prioritized (Phases 2, 6, 10, 14)

Legend: **P0 = Critical**, **P1 = High**, **P2 = Medium**, **P3 = Low**. "Code?" = fixable in this repo vs. off-site.

| # | Priority | Issue | Code? | Detail & recommendation |
|---|---|---|---|---|
| 1 | **P0** | **Rebrand likely not indexed / not yet trusted** | Off-site | Root cause of low impressions per SEO-INVESTIGATION.md. Action: verify in GSC (`Indexed` vs `Discovered/Crawled – not indexed`), submit sitemap, request indexing on priority URLs, build authority. Nothing more to fix in code. |
| 2 | **P0** | **Committed secret: `SPLITFORMS_ACCESS_KEY` hardcoded fallback** in `app/api/lead/route.ts:7` (`adc9e2ea…`) | ✅ | Server-side (not browser-exposed) but the key is **in git history**. Rotate the key at Splitforms, remove the literal fallback, require the env var. The `NEXT_PUBLIC_*` fallbacks (GA/Clarity/reCAPTCHA site key/Google verification) are public by design — acceptable. |
| 3 | **P1** | **Country & US-metro geo pages exist as data but have NO route** | ✅ | `lib/content/locations.ts` holds rich entries for **Mexico, Philippines, Colombia, South Africa, United States, Phoenix, Tampa, San Antonio, Atlanta, Charlotte** — but `/locations/[slug]` is driven by `regions.ts` (9 *continents*). So high-intent terms like "nearshore call center staffing **Mexico**" or "call center staffing **Tampa**" have **no dedicated landing page**. This is the single biggest untapped on-site opportunity. Publish country + metro pages (see §7). |
| 4 | **P1** | **Blog cluster intent-misaligned with buyer** | ✅ | ~21 of 31 posts are "Top 15 BPO companies in {country}" / "best outsourcing companies" — **directory/review intent** dominated by high-authority list sites, and it sells the *opposite* (outsourcing) of what CCS is (staffing). Keeps impressions low-converting. Recommendation: keep a few as top-of-funnel authority, but rebalance new content toward **staffing/hiring/cost buyer intent** (see §9). |
| 5 | **P1** | **Thin EEAT / no author identity** | ✅ | `BlogPosting.author` defaults to the org, not a named person. No author bios, no named recruiters, no credentials. For a "written by senior account managers, not marketers" claim, add **named author entities + bios** to lift EEAT and AI-citation trust. |
| 6 | **P1** | **No `AggregateRating` / real review proof anywhere** | ✅ + off-site | Case-studies page references "reviews" but no review schema or on-page testimonials with attribution are published. **Do not fabricate.** If real client reviews/testimonials exist, publish them with `Review`/`AggregateRating`. If not, this is a proof-gathering task, not a code task. |
| 7 | **P2** | **No `BreadcrumbList` visible UI on some templates / verify breadcrumb nav renders** | ✅ | Breadcrumb *schema* is present on 28 pages; confirm the visible `BreadcrumbNav` UI component renders on all deep pages (present in `components/ui/BreadcrumbNav.tsx`) for the matching visual breadcrumb Google rewards. |
| 8 | **P2** | **`/locations` index claims "nine regions worldwide" but several are thin** | ✅ | 9 continent pages exist; some (Australia, Middle East) likely have little real recruiting depth. Ensure each has genuine differentiated content or consider `noindex` on the weakest to avoid thin-content dilution. |
| 9 | **P2** | **Insights (3) vs Blog (31) vs Resources overlap** | ✅ | Three content hubs (`/blog`, `/insights`, `/resources`) risk cannibalization and dilute crawl focus. Clarify IA: insights = pain-point playbooks, blog = guides, resources = hub. Cross-link deliberately; avoid duplicate targeting. |
| 10 | **P2** | **Image `alt` quality on decorative vs meaningful images** | ✅ | Heroes use the entity name as alt (`alt={svc.name}`) which can read as keyword-ish; decorative gradient layers correctly use `aria-hidden`. Audit alts for descriptive accuracy vs keyword repetition. |
| 11 | **P3** | **No `llms.txt`** for GEO/AI answer engines | ✅ | Optional but cheap: add `/llms.txt` summarizing services + canonical URLs to aid AI answer engines. |
| 12 | **P3** | **OG image is a single generic team photo site-wide** | ✅ | Per-section OG images (esp. for services/industries) would improve social/SERP CTR. Low priority. |
| 13 | **P3** | **Sitemap `lastModified` hardcoded to one date** | ✅ | All non-post URLs share `2026-07-06`. Fine now; wire to real content timestamps later so freshness signals stay honest. |

---

## 4. Keyword Map (Phases 4, 7) — employer-intent (primary) vs candidate-intent

CCS is **100% employer-intent** (companies hiring agents). It deliberately does **not** target job-seeker/candidate queries — correct for the model. Do **not** add "call center jobs" pages; they'd attract the wrong audience and dilute conversion.

**Primary keyword → page map (existing pages, confirmed):**

| Cluster | Primary target | Page |
|---|---|---|
| Home | call center staffing agency | `/` |
| Recruiting service | call center recruitment / contact center staffing | `/services/*` |
| BPO staffing | BPO staffing services (vs BPO *companies*) | `/services/bpo-recruitment` |
| Shore models | nearshore / offshore / onshore call center staffing | `/services/{nearshore,offshore,onshore}-call-center-staffing` |
| Bilingual | bilingual / Spanish call center agents | `/services/bilingual-call-center-staffing` + `/roles/bilingual-agents` |
| Verticals | {healthcare, insurance, financial, saas…} call center staffing | `/industries/*` |
| Situations | scaling / launching / seasonal surge / compliance staffing | `/solutions/*` |
| Roles | inbound / outbound / QA / WFM / team-lead staffing | `/roles/*` |
| Remote | remote / work-from-home call center staffing | `/remote-call-center-staffing` |
| SMB | call center staffing for small business | `/small-business` |
| Tool | call center staffing calculator / cost | `/tools/staffing-calculator` |

**Highest-opportunity missing/under-served targets (build or strengthen):**
1. `nearshore call center staffing Mexico` → **new** `/locations/mexico` (data exists)
2. `call center staffing Philippines` / `offshore` → **new** `/locations/philippines`
3. `call center staffing Colombia` → **new** `/locations/colombia`
4. `HIPAA call center staffing agency` → strengthen `/industries/healthcare` + dedicated solution
5. `licensed insurance call center agents` → strengthen `/industries/insurance`
6. `NMLS call center staffing` → strengthen `/industries/financial-services`
7. `call center staffing agency for open enrollment` / `Q4 seasonal` → `/solutions/seasonal-surge`
8. `hire trained call center agents` / `agents on our payroll` → home + services
9. US metro terms: `call center staffing {Tampa, Phoenix, San Antonio, Atlanta, Charlotte}` → **new** metro pages (data exists)

---

## 5. Missing Service Pages (Phase 8)

Coverage is already strong. Genuinely missing / worth adding as dedicated pages:
- **24/7 / after-hours support staffing** (distinct buyer need)
- **Multilingual (beyond bilingual)** staffing — French-Canadian, Portuguese
- **Appointment setting / lead-gen agent staffing** (currently only under outbound)
- **Help desk / technical support staffing** (industry `tech-support` exists; a *service* page would capture the service-intent query)
- **Live chat / non-voice agent staffing**
- **Temporary vs permanent / direct-hire** — partially covered by `direct-to-employer` solution; a clearer service split could help.

Do **not** over-split; each new page must clear a real query with distinct content or it becomes thin/cannibalizing.

---

## 6. Internal Linking Strategy (Phase 6)

Current: service pages link to related roles + related locations (index only). Good hub structure. Improvements:
- **Fix the location links**: related-location cards currently link to `/locations` (index) instead of a real country page (because those pages don't exist yet). Publishing §7 pages makes these links land on relevant targets.
- **Cluster hub-and-spoke**: each `/industries/{x}` should link to the matching solution (e.g., healthcare → compliance-licensed), matching roles, and 2–3 supporting blog posts; and receive links back. Build an explicit link matrix.
- **Cost/calculator** should be linked from every "cost" and pricing-question FAQ.
- **Contextual links from blog → money pages**: the "cost", "how to hire fast", "reduce turnover" posts should link to services/solutions, not just other posts.

---

## 7. Geo-Page Build Plan (the P1 opportunity)

The data already exists in `lib/content/locations.ts`. Two page families to publish under a clean URL scheme (avoid clashing with the 9 continent pages):

- **Country nearshore/offshore pages** — `/locations/mexico`, `/locations/philippines`, `/locations/colombia`, `/locations/south-africa` (or a `/nearshore/{country}` scheme).
- **US metro pages** — `/locations/phoenix-az`, `/tampa-fl`, `/san-antonio-tx`, `/atlanta-ga`, `/charlotte-nc`.

Each gets: unique H1, metaTitle/Desc, `Service` + `BreadcrumbList` (+ `LocalBusiness`-style `areaServed` for metros), talent snapshot, wage/attrition notes, FAQs, and links from related services + the `/locations` index. **Quality gate:** only publish a geo page if it has genuinely differentiated content (the current data supports this) — no thin templated duplication.

---

## 8. Schema Recommendations (Phases 10, 13)

- Add **`author` Person** entities to `BlogPosting` (real names + `/authors/{slug}` bio pages) → EEAT + AI citations.
- Add **`Review`/`AggregateRating`** only from **real** testimonials (proof-gathering task).
- Add **`LocalBusiness` / `Service` areaServed** detail on new metro pages.
- Add **`HowTo`/`FAQPage`** where genuinely applicable (calculator, "how to hire fast").
- Keep `Organization`/`WebSite` as-is; consider adding real `sameAs` once social/LinkedIn profiles exist (currently empty by design).

---

## 9. Blog / Content Strategy (Phase 9) — 12-month direction

**Rebalance principle:** shift the mix from *"top BPO companies"* (directory intent, sells outsourcing) toward **staffing/hiring buyer intent** that maps to CCS's offer and internal-links to money pages.

**Keep (top-of-funnel authority, lightly refresh):** a handful of the strongest "best outsourcing companies 2026" posts.
**Prioritize new clusters:**
1. **Cost & budgeting** — cost per agent by region, onshore vs nearshore vs offshore cost, seasonal cost.
2. **Hiring speed & quality** — how to hire agents fast, screening, reducing turnover/no-show.
3. **By-industry staffing** — HIPAA/healthcare, licensed insurance, NMLS lending, ecommerce peak.
4. **Situational** — open-enrollment staffing, Q4 surge, launch ramps, scaling without quality loss.
5. **Model education** — staffing vs BPO, agents-on-our-payroll explained, pay-per-hour model.

_(A full 100+ topic list is maintained separately; ~40 concrete titles already exist as posts — the gap is intent-balance and internal linking, not raw volume.)_

---

## 10. Local SEO (Phase 11)

CCS is a **distributed staffing agency, not a storefront** — full GBP/NAP local SEO is a partial fit. But the **US metro pages (§7)** unlock local-intent capture ("call center staffing Tampa") without needing a physical office. Recommendation: publish metro pages with `areaServed` schema; only pursue GBP if a real verifiable business address exists. Maintain the no-public-phone/email policy.

---

## 11. Conversion / CRO (Phase 12) — current state is good

Already strong: form-first, protected forms, hero quote form, staffing-plan CTA, sticky CTA, trust bar, outcomes panels, guarantee messaging. Incremental wins:
- Add **named, attributed testimonials + logos** (biggest trust gap).
- Add **response-time proof** ("we reply within 1 business day") consistently near every CTA — partially present.
- Consider a **Calendly/booking** alternative for high-intent visitors who won't fill a form (weigh against anti-spam policy).

---

## 12. AI / GEO / AEO (Phase 13)

Already ahead: AI crawlers allowed, FAQ schema, structured content. To improve citability:
- Add author identity (§5/§8).
- Add `/llms.txt`.
- Ensure each key page has a crisp, quotable **1–2 sentence answer** near the top (many already do via hero subheads/intros).

---

## 13. Recommended Implementation Order (post-approval)

**Wave 1 — Critical/fast (this repo):**
1. Rotate + de-hardcode `SPLITFORMS_ACCESS_KEY` (P0 security).
2. Publish country geo pages (Mexico, Philippines, Colombia, South Africa) — data exists. (P1)
3. Publish US metro pages (Tampa, Phoenix, San Antonio, Atlanta, Charlotte) — data exists. (P1)
4. Fix related-location internal links to point at the new pages. (P1)

**Wave 2 — Authority/EEAT:**
5. Author entities + bio pages + `BlogPosting.author` Person schema. (P1)
6. Publish real testimonials/reviews + schema (needs client-supplied proof). (P1)
7. Blog intent rebalance + internal-link matrix. (P1–P2)

**Wave 3 — Polish:**
8. New service pages (24/7, help desk, live chat, appointment setting) as demand justifies. (P2)
9. `llms.txt`, per-section OG images, sitemap freshness wiring, thin-region review. (P3)

**Off-code (owner actions):** GSC indexing verification + sitemap submission + CDN cache purge, backlink/authority building, gather real reviews.

---

## 14. Open Decisions (need owner input before Wave 1)

1. **Geo URL scheme** — publish country/metro pages under `/locations/{slug}` (alongside the 9 continents) or a separate `/nearshore/{country}` + `/us/{metro}` scheme? (Recommend: `/locations/{slug}` for simplicity.)
2. **Real reviews** — do verifiable client testimonials/ratings exist to publish? (Required before any `Review`/`AggregateRating` schema — we will not fabricate.)
3. **Author identity** — are there real named recruiters/account managers we can attribute content to for EEAT?
4. **Splitforms key** — confirm we may rotate the exposed key.
