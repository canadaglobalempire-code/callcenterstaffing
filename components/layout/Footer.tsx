import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { site } from '@/lib/site';

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Solutions',
    links: [
      { label: 'Scaling Existing Centers', href: '/solutions/scaling-existing-call-center' },
      { label: 'Launching New Centers', href: '/solutions/launching-new-call-center' },
      { label: 'Seasonal & Surge', href: '/solutions/seasonal-surge' },
      { label: 'Direct-to-Employer', href: '/solutions/direct-to-employer' },
      { label: 'Compliance & Licensed', href: '/solutions/compliance-licensed' },
      { label: 'Small Business & Startups', href: '/small-business' },
      { label: 'Outsourcing & In-House', href: '/outsourcing' },
      { label: 'Remote / Work-From-Home', href: '/remote-call-center-staffing' },
    ],
  },
  {
    title: 'Regions',
    links: [
      { label: 'North America', href: '/locations/north-america' },
      { label: 'South America', href: '/locations/south-america' },
      { label: 'Central America', href: '/locations/central-america' },
      { label: 'Caribbean', href: '/locations/caribbean' },
      { label: 'Europe', href: '/locations/europe' },
      { label: 'Africa', href: '/locations/africa' },
      { label: 'Asia', href: '/locations/asia' },
      { label: 'Australia', href: '/locations/australia' },
      { label: 'Middle East', href: '/locations/middle-east' },
    ],
  },
  {
    title: 'Roles',
    links: [
      { label: 'Inbound CS', href: '/roles/inbound-customer-service' },
      { label: 'Outbound Sales', href: '/roles/outbound-sales-agents' },
      { label: 'Bilingual Agents', href: '/roles/bilingual-agents' },
      { label: 'Team Leads', href: '/roles/team-leads-supervisors' },
      { label: 'QA Analysts', href: '/roles/qa-analysts' },
      { label: 'Workforce Management', href: '/roles/workforce-management' },
      { label: 'Trainers', href: '/roles/trainers' },
      { label: 'Operations Managers', href: '/roles/operations-managers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Why Us', href: '/why-us' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Insights', href: '/insights' },
      { label: 'Staffing Calculator', href: '/tools/staffing-calculator' },
      { label: 'How We Work', href: '/how-we-work' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label={site.name} className="inline-flex">
              <div className="rounded-lg bg-white px-4 py-3">
                <Image
                  src="/logo/logo.png"
                  alt={site.name}
                  width={200}
                  height={50}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              Specialized recruiting for call centers, BPOs and customer-experience teams. Onshore,
              nearshore and offshore — placed with discipline.
            </p>
          </div>

          <div className="lg:col-span-8 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-white/80 hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="mt-16 border-white/10" />

        <div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="/sitemap.xml" className="hover:text-white">
                Sitemap
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Get a Quote
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
