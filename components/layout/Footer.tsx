import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Linkedin } from 'lucide-react';
import { Container } from './Container';
import { site } from '@/lib/site';

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Solutions',
    links: [
      { label: 'Scaling existing centers', href: '/solutions/scaling-existing-call-center' },
      { label: 'Launching new centers', href: '/solutions/launching-new-call-center' },
      { label: 'Seasonal & surge', href: '/solutions/seasonal-surge' },
      { label: 'BPO staffing', href: '/solutions/bpo-staffing' },
      { label: 'Direct-to-employer', href: '/solutions/direct-to-employer' },
      { label: 'Compliance & licensed', href: '/solutions/compliance-licensed' },
      { label: 'Small business & startups', href: '/small-business' },
      { label: 'Outsourcing & in-house', href: '/outsourcing' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { label: 'United States', href: '/locations/united-states' },
      { label: 'Phoenix, AZ', href: '/locations/phoenix-az' },
      { label: 'Tampa, FL', href: '/locations/tampa-fl' },
      { label: 'San Antonio, TX', href: '/locations/san-antonio-tx' },
      { label: 'Atlanta, GA', href: '/locations/atlanta-ga' },
      { label: 'Charlotte, NC', href: '/locations/charlotte-nc' },
      { label: 'Mexico', href: '/locations/mexico' },
      { label: 'Colombia', href: '/locations/colombia' },
      { label: 'Philippines', href: '/locations/philippines' },
      { label: 'South Africa', href: '/locations/south-africa' },
    ],
  },
  {
    title: 'Roles',
    links: [
      { label: 'Inbound CS', href: '/roles/inbound-customer-service' },
      { label: 'Outbound sales', href: '/roles/outbound-sales-agents' },
      { label: 'Bilingual agents', href: '/roles/bilingual-agents' },
      { label: 'Team leads', href: '/roles/team-leads-supervisors' },
      { label: 'QA analysts', href: '/roles/qa-analysts' },
      { label: 'Workforce management', href: '/roles/workforce-management' },
      { label: 'Trainers', href: '/roles/trainers' },
      { label: 'Operations managers', href: '/roles/operations-managers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Why us', href: '/why-us' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Insights', href: '/insights' },
      { label: 'Staffing calculator', href: '/tools/staffing-calculator' },
      { label: 'How we work', href: '/how-we-work' },
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

            <ul className="mt-7 space-y-3 text-sm">
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-500" strokeWidth={2} />
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.emailHref}
                  className="inline-flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-500" strokeWidth={2} />
                  {site.contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-white/70">
                <MapPin className="h-4 w-4 shrink-0 text-accent-500" strokeWidth={2} />
                {site.contact.address.full}
              </li>
              <li className="inline-flex items-center gap-3 text-white/70">
                <Clock className="h-4 w-4 shrink-0 text-accent-500" strokeWidth={2} />
                {site.contact.hours}
              </li>
            </ul>

            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name} on LinkedIn`}
              className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-accent-500 hover:text-white"
            >
              <Linkedin className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>

          <div className="lg:col-span-8 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
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
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
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
          </ul>
        </div>
      </Container>
    </footer>
  );
}
