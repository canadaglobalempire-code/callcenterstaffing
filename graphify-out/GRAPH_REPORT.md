# Graph Report - call center staffing  (2026-09-05)

## Corpus Check
- 124 files · ~876,440 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 678 nodes · 1837 edges · 37 communities (28 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `543a9602`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- HeroQuoteForm.tsx
- page.tsx
- page.tsx
- posts.ts
- compilerOptions
- Container.tsx
- SEO & Website Audit — callcenterstaffing.net
- page.tsx
- Call Center Staffing — Marketing Site
- page.tsx
- route.ts
- page.tsx
- devDependencies
- dependencies
- cn
- page.tsx
- site.ts
- Product
- StatsBand.tsx
- page.tsx
- Button.tsx
- page.tsx
- page.tsx
- scripts
- page.tsx
- page.tsx
- package.json
- Reveal.tsx
- extends
- indexnow.mjs
- eslint-config-next
- next.config.mjs
- react
- tailwind-merge
- prettier
- tailwind.config.ts

## God Nodes (most connected - your core abstractions)
1. `Container()` - 52 edges
2. `site` - 44 edges
3. `Heading()` - 42 edges
4. `Section()` - 40 edges
5. `Eyebrow()` - 40 edges
6. `cn()` - 39 edges
7. `alternatesFor()` - 37 edges
8. `Button()` - 32 edges
9. `BreadcrumbSchema()` - 29 edges
10. `CTABand()` - 28 edges

## Surprising Connections (you probably didn't know these)
- `Field()` --calls--> `cn()`  [EXTRACTED]
  components/forms/StaffingPlanForm.tsx → lib/utils.ts
- `generateMetadata()` --calls--> `alternatesFor()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → lib/seo.ts
- `generateMetadata()` --calls--> `socialImages()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → lib/seo.ts
- `generateMetadata()` --calls--> `alternatesFor()`  [EXTRACTED]
  app/industries/[slug]/page.tsx → lib/seo.ts
- `generateMetadata()` --calls--> `alternatesFor()`  [EXTRACTED]
  app/insights/[slug]/page.tsx → lib/seo.ts

## Import Cycles
- None detected.

## Communities (37 total, 9 thin omitted)

### Community 0 - "HeroQuoteForm.tsx"
Cohesion: 0.08
Nodes (28): AGENT_OPTIONS, FormValues, REGION_OPTIONS, schema, Select, Props, Recaptcha, RecaptchaHandle (+20 more)

### Community 1 - "page.tsx"
Cohesion: 0.08
Nodes (38): ARTICLE_IMAGE_POOL, ArticleBrief(), ArticleBullets(), ArticleNav(), ArticleParagraph(), ArticleSection(), BlogPostPage(), buildSectionViews() (+30 more)

### Community 2 - "page.tsx"
Cohesion: 0.06
Nodes (39): generateMetadata(), IndustryPage(), HOMEPAGE_FAQS, metadata, Params, ROLE_HERO_IMAGES, SCREEN_STEPS, generateMetadata() (+31 more)

### Community 3 - "posts.ts"
Cohesion: 0.08
Nodes (33): BPO_CONTENT, BpoContent, COMPANY_META, GROUP_PROVIDERS, GroupProvider, groupProvidersDetailSection(), groupProvidersIntro(), groupProvidersRankedSections() (+25 more)

### Community 4 - "compilerOptions"
Cohesion: 0.07
Nodes (28): ./*, dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+20 more)

### Community 5 - "Container.tsx"
Cohesion: 0.13
Nodes (27): BENEFITS, metadata, PILLARS, AGENT_TRAITS, metadata, Container(), ContainerProps, bgClass (+19 more)

### Community 6 - "SEO & Website Audit — callcenterstaffing.net"
Cohesion: 0.08
Nodes (23): 0. How to read this document, 10. Local SEO (Phase 11), 11. Conversion / CRO (Phase 12) — current state is good, 12. AI / GEO / AEO (Phase 13), 13. Recommended Implementation Order (post-approval), 14. Open Decisions (need owner input before Wave 1), 1. Business Summary (Phase 1), 2. Current State — What Is Already Done Well (verified in code) (+15 more)

### Community 7 - "page.tsx"
Cohesion: 0.06
Nodes (47): DATE_FORMATTER, generateMetadata(), InsightPage(), renderParagraph(), block(), GET(), Item, line() (+39 more)

### Community 8 - "Call Center Staffing — Marketing Site"
Cohesion: 0.12
Nodes (15): A new location, A new role, A new solution, Accessibility, Adding content, Call Center Staffing — Marketing Site, Design tokens, Form submission (+7 more)

### Community 9 - "page.tsx"
Cohesion: 0.06
Nodes (29): ALL_FAQS, COMPLIANCE_FAQS, ENGAGEMENT_FAQS, GETTING_STARTED_FAQS, metadata, PRICING_FAQS, PROCESS_FAQS, inter (+21 more)

### Community 10 - "route.ts"
Cohesion: 0.13
Nodes (20): Attribution, ATTRIBUTION_LABELS, attributionSchema, baseSchema, fieldSchemas, forwardToSplitforms(), getClientKey(), getRateMap() (+12 more)

### Community 11 - "page.tsx"
Cohesion: 0.25
Nodes (6): CASES, CaseStudy, FAQS, metadata, OVERVIEW_STATS, SCORECARD

### Community 12 - "devDependencies"
Cohesion: 0.11
Nodes (19): autoprefixer, eslint, devDependencies, autoprefixer, eslint, postcss, prettier-plugin-tailwindcss, tailwindcss (+11 more)

### Community 13 - "dependencies"
Cohesion: 0.11
Nodes (19): clsx, framer-motion, @hookform/resolvers, lucide-react, next, dependencies, clsx, framer-motion (+11 more)

### Community 14 - "cn"
Cohesion: 0.06
Nodes (37): ATTRITION_OPTIONS, Calculator(), Field(), HOURS_OPTIONS, Lang, LANGUAGES, OCCUPANCY_OPTIONS, SecondaryStat() (+29 more)

### Community 15 - "page.tsx"
Cohesion: 0.29
Nodes (5): FAQS, HONEST_LIMITS, metadata, SEGMENTS, STEPS

### Community 16 - "site.ts"
Cohesion: 0.13
Nodes (16): metadata, metadata, metadata, sections, metadata, RESOURCES, metadata, sections (+8 more)

### Community 17 - "Product"
Cohesion: 0.22
Nodes (8): Accessibility & Inclusion, Anti-references, Brand Personality, Design Principles, Product, Product Purpose, Register, Users

### Community 18 - "StatsBand.tsx"
Cohesion: 0.40
Nodes (3): DEFAULT, StatItem, StatsBandProps

### Community 19 - "page.tsx"
Cohesion: 0.11
Nodes (18): INDUSTRY_APPROACH_IMAGES, INDUSTRY_HERO_IMAGES, Params, Params, COUNTRY_LOCATIONS, metadata, METRO_LOCATIONS, metadata (+10 more)

### Community 21 - "Button.tsx"
Cohesion: 0.12
Nodes (13): ENGAGEMENT_OPTIONS, metadata, QUOTE_INCLUDES, TRUST_LIST, metadata, Button(), ButtonAsButton, ButtonAsLink (+5 more)

### Community 23 - "page.tsx"
Cohesion: 0.40
Nodes (3): BENEFITS, FAQS, metadata

### Community 26 - "page.tsx"
Cohesion: 0.25
Nodes (6): COMPARISON_ROWS, DECISION_CARDS, FAQS, metadata, SERVICE_BLOCKS, STATS

### Community 29 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, indexnow, lint, start

### Community 30 - "page.tsx"
Cohesion: 0.33
Nodes (4): ICONS, LucideIcon, metadata, NOTES

### Community 34 - "page.tsx"
Cohesion: 0.40
Nodes (3): metadata, PLAN_INCLUDES, RELATED

### Community 36 - "package.json"
Cohesion: 0.50
Nodes (3): name, private, version

## Knowledge Gaps
- **310 isolated node(s):** `next/core-web-vitals`, `metadata`, `BENEFITS`, `PILLARS`, `RateBucket` (+305 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `HeroQuoteForm.tsx`, `page.tsx`, `Button.tsx`, `Container.tsx`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Why does `site` connect `site.ts` to `page.tsx`, `page.tsx`, `page.tsx`, `Container.tsx`, `page.tsx`, `page.tsx`, `route.ts`, `page.tsx`, `cn`, `page.tsx`, `page.tsx`, `Button.tsx`, `page.tsx`, `page.tsx`, `page.tsx`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Why does `Container()` connect `Container.tsx` to `page.tsx`, `page.tsx`, `page.tsx`, `page.tsx`, `page.tsx`, `page.tsx`, `cn`, `page.tsx`, `site.ts`, `StatsBand.tsx`, `page.tsx`, `Button.tsx`, `page.tsx`, `page.tsx`, `page.tsx`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `next/core-web-vitals`, `metadata`, `BENEFITS` to the rest of the system?**
  _310 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `HeroQuoteForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08258258258258258 - nodes in this community are weakly interconnected._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07878787878787878 - nodes in this community are weakly interconnected._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05660377358490566 - nodes in this community are weakly interconnected._