import Link from 'next/link';
import Image from 'next/image';
import {
  HeartPulse,
  Banknote,
  ShoppingBag,
  Radio,
  Shield,
  Plane,
  Cloud,
  Zap,
  Truck,
  Building,
  GraduationCap,
  Headphones,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

const INDUSTRIES = [
  {
    slug: 'healthcare',
    label: 'Healthcare',
    icon: HeartPulse,
    note: 'HIPAA · payer · provider',
    image: '/images/case-study-healthcare.jpg',
  },
  {
    slug: 'financial-services',
    label: 'Financial Services',
    icon: Banknote,
    note: 'NMLS · collections · Reg E',
    image: '/images/case-study-financial.jpg',
  },
  {
    slug: 'ecommerce-retail',
    label: 'eCommerce & Retail',
    icon: ShoppingBag,
    note: 'CSAT · returns · Q4 surge',
    image: '/images/case-study-ecommerce.jpg',
  },
  {
    slug: 'telecom-media',
    label: 'Telecom & Media',
    icon: Radio,
    note: 'tier 1 · tier 2 · sales',
    image: '/images/case-study-technology.jpg',
  },
  {
    slug: 'insurance',
    label: 'Insurance',
    icon: Shield,
    note: 'licensed · FNOL · claims',
    image: '/images/agent-focused.jpg',
  },
  {
    slug: 'travel-hospitality',
    label: 'Travel & Hospitality',
    icon: Plane,
    note: 'GDS · 24/7 · multi-lang',
    image: '/images/team-thumbsup.jpg',
  },
  {
    slug: 'saas',
    label: 'SaaS & Tech',
    icon: Cloud,
    note: 'tier 2 · API · SOC 2',
    image: '/images/cc-agent-laptop.jpg',
  },
  {
    slug: 'utilities',
    label: 'Utilities & Energy',
    icon: Zap,
    note: 'PUC · billing · storm surge',
    image: '/images/cc-agent-blue.jpg',
  },
  {
    slug: 'logistics',
    label: 'Logistics & Transport',
    icon: Truck,
    note: 'TMS · ETA · claims',
    image: '/images/cc-team-work.jpg',
  },
  {
    slug: 'government-public',
    label: 'Government & Public',
    icon: Building,
    note: 'FedRAMP · ADA 508',
    image: '/images/new-flag.jpg',
  },
  {
    slug: 'education',
    label: 'Education',
    icon: GraduationCap,
    note: 'FERPA · enrollment · aid',
    image: '/images/cc-team-collab.jpg',
  },
  {
    slug: 'tech-support',
    label: 'Tech Support & Helpdesk',
    icon: Headphones,
    note: 'tier 1/2/3 · 24/7 · SaaS',
    image: '/images/cc-support-team.jpg',
  },
];

export function Industries() {
  return (
    <Section id="industries" background="white">
      <Container>
        <div className="mb-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>Industries served</Eyebrow>
            <Heading level={2} display="l" className="mt-5 max-w-2xl">
              Vertical playbooks for the regulated and the high-volume.
            </Heading>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-5">
            <p className="max-w-prose text-body-l text-navy-700">
              Compliance, licensure, language mix and seasonality all change how we screen. Every
              one of our 13 verticals has a tailored screening protocol our recruiters are trained
              on.
            </p>
            <Link
              href="/industries"
              className="bg-accent-500/10 group inline-flex h-11 w-fit items-center gap-2 rounded-full px-5 text-[13px] font-bold uppercase tracking-[0.14em] text-accent-500 transition-colors hover:bg-accent-500 hover:text-white"
            >
              View all 13 industries
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => {
            const Icon = i.icon;
            return (
              <li key={i.slug} className="h-full">
                <Link
                  href={`/industries/${i.slug}`}
                  className="ring-navy-950/5 group relative block overflow-hidden rounded-3xl shadow-sm ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={i.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="via-black/50 to-black/10 absolute inset-0 bg-gradient-to-t from-navy-950" />
                    <span className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-accent-500 shadow-lg backdrop-blur-sm">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-white/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                        {i.label}
                      </h3>
                      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                        {i.note}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
