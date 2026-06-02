# Call Center Staffing — Marketing Site

Production-grade Next.js 14 marketing website for a B2B call-center recruiting agency. Editorial-corporate design system, dynamic templates for locations / roles / solutions, structured data on every page.

## Stack

- **Next.js 14** (App Router) with TypeScript strict mode
- **Tailwind CSS** with a custom token system (CSS variables → Tailwind theme)
- **next/font**: Inter (body) + Fraunces (display)
- **lucide-react** for icons
- **framer-motion** for subtle reveal animations
- **react-hook-form + zod** for the staffing-plan form
- **@radix-ui/react-accordion** for FAQs
- Structured data via inline JSON-LD components

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (already passing — 12 routes)
npm run start        # serve production build
npm run lint         # eslint
npm run format       # prettier
```

## Project layout

```
app/
  layout.tsx                       root layout: fonts, header/footer, OrganizationSchema
  page.tsx                         homepage
  not-found.tsx
  sitemap.ts                       dynamic from data files
  robots.ts
  locations/[slug]/page.tsx        location template
  roles/[slug]/page.tsx            role template
  solutions/[slug]/page.tsx        solution template
  globals.css                      design tokens (CSS vars) + base styles
components/
  layout/                          Header, Footer, Container, Section
  ui/                              Button, Card, Stat, Quote, FAQ, Eyebrow, Heading, Badge, BreadcrumbNav, Reveal
  sections/                        Hero, TrustBar, StatsBand, SolutionsGrid, GeographicCoverage, WorldMap, ProcessSteps, RolesGrid, Testimonials, Industries, CTABand, FAQSection, StaffingPlanCTA
  forms/                           StaffingPlanForm, NewsletterForm
  seo/                             JsonLd, Organization-/Service-/Breadcrumb-/FAQ-Schema
lib/
  site.ts                          site-wide constants (name, phone, email, social)
  utils.ts                         cn(), formatNumber()
  content/
    types.ts                       Location | Role | Solution shapes
    locations.ts                   seeded: mexico, philippines
    roles.ts                       seeded: bilingual-agents, inbound-customer-service
    solutions.ts                   seeded: scaling-existing-call-center, launching-new-call-center
public/
  logo/                            logo.png, logo-wide.png
  images/                          hero + supporting photography
  awards/                          industry recognition badges
```

## Adding content

### A new location

1. Open `lib/content/locations.ts`.
2. Append a new object to the `LOCATIONS` array. Use the `Location` type — the file will type-check the shape for you.
3. Save. The new page is live at `/locations/<slug>` and is automatically included in `sitemap.xml`, the header dropdown (manual — see `components/layout/Header.tsx`) and any "Related" cards.

```ts
{
  slug: 'colombia',
  name: 'Colombia',
  region: 'nearshore',
  flagEmoji: '🇨🇴',
  heroImage: '/images/<file>.jpg',
  metaTitle: '...',
  metaDescription: '...',
  hero: { eyebrow, headline, subhead },
  whyHere: [{ title, body }, ...],
  talentSnapshot: { talentPoolSize, avgEnglishProficiency, avgSalaryRange, timeZones, languages },
  cities: [{ name, note }, ...],
  rolesAvailable: ['<role-slug>', ...],
  faqs: [{ q, a }, ...],
}
```

### A new role

1. Open `lib/content/roles.ts`.
2. Append to `ROLES`. Match the `Role` type.
3. To surface the role in the homepage roles grid, edit `components/sections/RolesGrid.tsx` (the static list there is intentional — only headline roles appear on the homepage; long-tail roles still get their own pages and sitemap entry).

### A new solution

1. Open `lib/content/solutions.ts`.
2. Append to `SOLUTIONS`. Match the `Solution` type.
3. To surface in the homepage solutions grid, edit the static list in `components/sections/SolutionsGrid.tsx`.

## Replacing placeholder copy

Search the codebase for the `[PLACEHOLDER]` token convention:

```bash
grep -rn "\[" lib/content components/sections components/layout app
```

Common placeholders:

- `[HERO_HEADLINE_LINE_1]`, `[HERO_HEADLINE_LINE_2]`, `[HERO_SUBHEAD]` — homepage hero (`components/sections/Hero.tsx`)
- `[STAT_*]` — stats (`components/sections/StatsBand.tsx` defaults)
- `[TESTIMONIAL_*]` — `components/sections/Testimonials.tsx`
- `[LOCATION_*_HEADLINE/SUBHEAD]` — `lib/content/locations.ts`
- `[ROLE_*_HEADLINE/SUBHEAD]` — `lib/content/roles.ts`
- `[SOLUTION_*_HEADLINE/SUBHEAD]`, `[CASE_*]` — `lib/content/solutions.ts`

The `<StatsBand />` and `<CTABand />` accept props so you can override copy per page without touching the component.

## Replacing images and the logo

- **Logo** lives at `public/logo/logo.png`. Header and footer reference it directly. To swap to an SVG, drop a `logo.svg` in the same folder and update the two `<Image src="...">` references in `components/layout/Header.tsx` and `components/layout/Footer.tsx`.
- **Hero image** is `public/images/cc-office-wide.jpg` (referenced in `components/sections/Hero.tsx`). Swap the file or update the path.
- **Location hero images** are referenced via the `heroImage` field in `lib/content/locations.ts`.
- **Solution hero images** via `solutions.ts → heroImage`.
- **Trust bar logos** are `public/awards/*` — list curated in `components/sections/TrustBar.tsx`.

## Design tokens

All colors, spacing and type scales are defined as CSS variables in `app/globals.css` and exposed to Tailwind via `tailwind.config.ts`. Edit a token once, see it everywhere:

```css
--navy-950: #0a1628;     /* primary dark */
--blue-600: #1e5ba8;     /* brand blue / primary CTA */
--orange-500: #e8743c;   /* accent — used sparingly */
```

The Tailwind utilities exposed are `bg-navy-950`, `text-brand-600`, `text-accent-500`, `border-ink-200`, etc. — see the `colors` section of `tailwind.config.ts`.

## SEO

- Every page has a `generateMetadata` (or static `metadata` on the homepage) producing unique `<title>`, description, OpenGraph and Twitter cards.
- `OrganizationSchema` is rendered globally from `app/layout.tsx`.
- Each template page renders `BreadcrumbSchema`, a `ServiceSchema` and a `FAQSchema` via the `<JsonLd>` helper.
- `app/sitemap.ts` builds the sitemap dynamically from `LOCATIONS / ROLES / SOLUTIONS`. `app/robots.ts` allows all crawling and points to the sitemap.

## Form submission

`StaffingPlanForm` and `NewsletterForm` currently `console.log` the payload. To wire to an API:

1. Replace the body of `onSubmit` in `components/forms/StaffingPlanForm.tsx` with a `fetch('/api/staffing-plan', { method: 'POST', body: JSON.stringify(values) })`.
2. Add `app/api/staffing-plan/route.ts` to handle the request (CRM, email, Slack — your choice).

## Accessibility

- Skip-to-content link in `app/layout.tsx`.
- Single `<h1>` per page.
- Focus styles use a brand-blue outline.
- All icon-only buttons have `aria-label`.
- Mobile menu manages `body.overflow` and `aria-expanded`.

## License

Private / proprietary.
