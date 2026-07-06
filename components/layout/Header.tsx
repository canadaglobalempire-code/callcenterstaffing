'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  TrendingUp,
  Rocket,
  CalendarClock,
  Building2,
  Users,
  ShieldCheck,
  Headphones,
  PhoneOutgoing,
  Languages,
  ClipboardCheck,
  Activity,
  GraduationCap,
  Briefcase,
  MessageSquare,
  HeartHandshake,
  Network,
  Globe,
  Plane,
  Flag,
  Stethoscope,
  Banknote,
  Shield,
  ShoppingBag,
  Radio,
  Cloud,
  Zap,
  Truck,
  Building,
  BookOpen,
  HelpCircle,
  Award,
  FileText,
  Sparkles,
  Network as NetworkIcon,
  Calculator,
  AlertTriangle,
  Stethoscope as StethoscopeIcon,
  Package,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { site } from '@/lib/site';
import { Button } from '@/components/ui/Button';

type MenuItem = {
  label: string;
  href: string;
  desc?: string;
  icon?: LucideIcon;
  flag?: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: MenuItem[];
  layout?: 'solutions' | 'roles' | 'locations' | 'services' | 'industries' | 'resources';
  footer?: { label: string; href: string };
};

const NAV: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    layout: 'services',
    children: [
      { label: 'Call center recruitment', href: '/services/call-center-recruitment', desc: 'Agents, supervisors, QA — sourced against your scorecard.', icon: Headphones },
      { label: 'BPO recruitment', href: '/services/bpo-recruitment', desc: 'Multi-client floors with calibrated quality bars.', icon: Building2 },
      { label: 'Contact center staffing', href: '/services/contact-center-staffing', desc: 'Voice, chat, email, social — staffed against per-channel QA.', icon: MessageSquare },
      { label: 'Customer service staffing', href: '/services/customer-service-staffing', desc: 'CX agents whose CSAT trend bends the curve.', icon: HeartHandshake },
      { label: 'Outsourced call center staffing', href: '/services/outsourced-call-center-staffing', desc: 'We recruit talent INTO your BPO — we are not a BPO.', icon: Network },
      { label: 'Nearshore staffing', href: '/services/nearshore-call-center-staffing', desc: 'Mexico, Colombia, Costa Rica — time-zone fit, bilingual depth.', icon: Plane },
      { label: 'Offshore staffing', href: '/services/offshore-call-center-staffing', desc: 'Philippines and India — 24/7 coverage, deep CX maturity.', icon: Globe },
      { label: 'Onshore staffing', href: '/services/onshore-call-center-staffing', desc: 'US-based agents. License-verified, compliance-cleared.', icon: Flag },
      { label: 'Bilingual staffing', href: '/services/bilingual-call-center-staffing', desc: 'Spanish, Portuguese, Tagalog — fluency scored to level.', icon: Languages },
      { label: 'Outsourcing & in-house', href: '/outsourcing', desc: 'In-house, BPO, hybrid — we recruit for all three.', icon: NetworkIcon },
    ],
    footer: { label: 'View all services', href: '/services' },
  },
  {
    label: 'Solutions',
    href: '/solutions',
    layout: 'solutions',
    children: [
      {
        label: 'Scaling an existing call center',
        href: '/solutions/scaling-existing-call-center',
        desc: 'Backfill attrition and ramp seats without sacrificing quality.',
        icon: TrendingUp,
      },
      {
        label: 'Launching a new call center',
        href: '/solutions/launching-new-call-center',
        desc: 'Greenfield builds — first 25 to first 250 seats.',
        icon: Rocket,
      },
      {
        label: 'Seasonal & surge staffing',
        href: '/solutions/seasonal-surge',
        desc: 'Pre-built bench for Q4, open enrollment, tax season.',
        icon: CalendarClock,
      },
      {
        label: 'Direct-to-employer staffing',
        href: '/solutions/direct-to-employer',
        desc: 'Permanent hires into in-house centers, not vendor floors.',
        icon: Users,
      },
      {
        label: 'Compliance & licensed roles',
        href: '/solutions/compliance-licensed',
        desc: 'NMLS, state-insurance, HIPAA and PCI-cleared agents.',
        icon: ShieldCheck,
      },
      {
        label: 'Small business & startups',
        href: '/small-business',
        desc: '5–50 seat cohorts — same screen, lighter engagement.',
        icon: Sparkles,
      },
    ],
    footer: { label: 'Get a written plan', href: '/contact' },
  },
  {
    label: 'Industries',
    href: '/industries',
    layout: 'industries',
    children: [
      { label: 'Healthcare', href: '/industries/healthcare', desc: 'HIPAA-cleared agents · payer · provider · EMR fluency.', icon: Stethoscope },
      { label: 'Financial Services', href: '/industries/financial-services', desc: 'NMLS · collections · Reg E · GLBA-aware screening.', icon: Banknote },
      { label: 'Insurance', href: '/industries/insurance', desc: 'State-licensed · FNOL · disclosure handling.', icon: Shield },
      { label: 'eCommerce & Retail', href: '/industries/ecommerce-retail', desc: 'CSAT · returns · Q4 surge bench.', icon: ShoppingBag },
      { label: 'Telecom & Media', href: '/industries/telecom-media', desc: 'Tier 1 · tier 2 · sales · CPNI.', icon: Radio },
      { label: 'Travel & Hospitality', href: '/industries/travel-hospitality', desc: 'GDS · 24/7 · multilingual.', icon: Plane },
      { label: 'SaaS & Tech', href: '/industries/saas', desc: 'SOC 2-aware · technical product depth.', icon: Cloud },
      { label: 'Utilities & Energy', href: '/industries/utilities', desc: 'PUC tariff · billing · disconnections.', icon: Zap },
      { label: 'Logistics & Transportation', href: '/industries/logistics', desc: 'TMS · Carmack · ETA accuracy.', icon: Truck },
      { label: 'Government & Public Sector', href: '/industries/government-public', desc: 'FedRAMP-aware · ADA Section 508.', icon: Building },
      { label: 'Education', href: '/industries/education', desc: 'FERPA · enrollment cycle peaks.', icon: GraduationCap },
      { label: 'Tech Support & Helpdesk', href: '/industries/tech-support', desc: 'Tier 1/2/3 · ticket quality · 24/7 coverage.', icon: Headphones },
      { label: 'Warehouse & Fulfillment', href: '/industries/warehouse', desc: 'WMS · returns · Q4 surge bench.', icon: Package },
    ],
    footer: { label: 'View all 13 industries', href: '/industries' },
  },
  {
    label: 'Locations',
    href: '/locations',
    layout: 'locations',
    children: [
      {
        label: 'North America',
        href: '/locations/north-america',
        desc: 'Onshore US & Canada · Native English · All US time zones',
        flag: '🌎',
      },
      {
        label: 'South America',
        href: '/locations/south-america',
        desc: 'Nearshore · Bilingual depth · CT/ET overlap',
        flag: '🌎',
      },
      {
        label: 'Central America',
        href: '/locations/central-america',
        desc: 'Nearshore · Bilingual · Cost-efficient',
        flag: '🌎',
      },
      {
        label: 'Caribbean',
        href: '/locations/caribbean',
        desc: 'Nearshore · Native English · ET overlap',
        flag: '🌎',
      },
      {
        label: 'Europe',
        href: '/locations/europe',
        desc: 'Multilingual · EU time-zone coverage',
        flag: '🌍',
      },
      {
        label: 'Africa',
        href: '/locations/africa',
        desc: 'Offshore · Neutral accent · UK time-zone',
        flag: '🌍',
      },
      {
        label: 'Asia',
        href: '/locations/asia',
        desc: 'Offshore · 24/7 coverage · Native English',
        flag: '🌏',
      },
      {
        label: 'Australia',
        href: '/locations/australia',
        desc: 'APAC time-zone · Native English',
        flag: '🌏',
      },
      {
        label: 'Middle East',
        href: '/locations/middle-east',
        desc: 'Multilingual · Arabic & English coverage',
        flag: '🌍',
      },
    ],
    footer: { label: 'See global coverage', href: '/locations' },
  },
  {
    label: 'Roles',
    href: '/roles',
    layout: 'roles',
    children: [
      { label: 'Inbound CS agents', href: '/roles/inbound-customer-service', icon: Headphones },
      { label: 'Outbound sales agents', href: '/roles/outbound-sales-agents', icon: PhoneOutgoing },
      { label: 'Bilingual agents', href: '/roles/bilingual-agents', icon: Languages },
      { label: 'Team leads & supervisors', href: '/roles/team-leads-supervisors', icon: Users },
      { label: 'QA analysts', href: '/roles/qa-analysts', icon: ClipboardCheck },
      { label: 'Workforce management', href: '/roles/workforce-management', icon: Activity },
      { label: 'Trainers & QA coaches', href: '/roles/trainers', icon: GraduationCap },
      { label: 'Operations managers', href: '/roles/operations-managers', icon: Briefcase },
    ],
    footer: { label: 'View all roles', href: '/roles' },
  },
  {
    label: 'Resources',
    href: '/resources',
    layout: 'resources',
    children: [
      { label: 'Why us', href: '/why-us', desc: 'Specialist vs generalist — head-to-head.', icon: Award },
      { label: 'Case studies', href: '/case-studies', desc: 'Real engagements, real numbers — 200+ operators.', icon: FileText },
      { label: 'Insights', href: '/insights', desc: 'Pain-point playbooks for operators in trouble.', icon: AlertTriangle },
      { label: 'Staffing calculator', href: '/tools/staffing-calculator', desc: 'How many agents do you need? Free interactive tool.', icon: Calculator },
      { label: 'Blog', href: '/blog', desc: 'Operator playbooks, scaling guides, cost benchmarks.', icon: BookOpen },
      { label: 'FAQ', href: '/faq', desc: 'Process, pricing, compliance — answered straight.', icon: HelpCircle },
      { label: 'How we work', href: '/how-we-work', desc: 'Three steps from forecast to filled seats.', icon: Activity },
      { label: 'About us', href: '/about', desc: 'Why we exist and what makes us different.', icon: Users },
    ],
    footer: { label: 'Talk to a recruiter', href: '/contact' },
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 z-50 transition-all duration-300 px-4 lg:px-8',
        scrolled ? 'top-2' : 'top-5',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-[1320px] items-center justify-between rounded-full bg-white/95 backdrop-blur-md px-5 lg:pl-7 lg:pr-3 transition-all duration-300',
          scrolled ? 'h-16 shadow-lg ring-1 ring-navy-950/5' : 'h-20 shadow-md ring-1 ring-navy-950/5',
        )}
      >
        <Link href="/" aria-label={site.name} className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt={site.name}
            width={200}
            height={50}
            priority
            className={cn('w-auto object-contain transition-all', scrolled ? 'h-9' : 'h-11')}
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const isOpen = openMenu === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  aria-haspopup={item.children ? 'menu' : undefined}
                  aria-expanded={item.children ? isOpen : undefined}
                  onFocus={() => item.children && setOpenMenu(item.label)}
                  className={cn(
                    'inline-flex items-center gap-1 px-4 py-2 text-[14px] font-semibold transition-colors',
                    isOpen ? 'text-accent-500' : 'text-navy-950 hover:text-accent-500',
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 opacity-60 transition-transform duration-200',
                        isOpen && 'rotate-180',
                      )}
                    />
                  )}
                </Link>

                {item.children && isOpen && (
                  <DropdownPanel item={item} onClose={() => setOpenMenu(null)} />
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button href="/contact" size="md">
            Get a plan
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-navy-950"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-24 z-40 bg-white">
          <div className="container-page py-8 overflow-y-auto h-[calc(100vh-5rem)]">
            <ul className="divide-y divide-ink-200 border-y border-ink-200">
              {NAV.map((item) => (
                <li key={item.label} className="py-3">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-2 text-lg font-bold text-navy-950"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-4 w-4 opacity-50" />}
                  </Link>
                  {item.children && (
                    <ul className="mt-2 space-y-1 pl-1">
                      {item.children.map((c) => {
                        const Icon = c.icon;
                        return (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 rounded-xl py-2 px-2 text-[14px] font-medium text-navy-700 hover:bg-accent-500/5 hover:text-accent-500"
                            >
                              {c.flag && <span className="text-base">{c.flag}</span>}
                              {Icon && (
                                <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent-500/10 text-accent-500">
                                  <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                                </span>
                              )}
                              {c.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <Button href="/contact" size="lg" className="w-full justify-center">
                Get a written plan
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function DropdownPanel({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const layout = item.layout ?? 'solutions';
  const widthClass =
    layout === 'industries'
      ? 'w-[760px]'
      : layout === 'services'
        ? 'w-[720px]'
        : layout === 'roles'
          ? 'w-[680px]'
          : layout === 'solutions'
            ? 'w-[640px]'
            : layout === 'resources'
              ? 'w-[720px]'
              : 'w-[360px]';

  return (
    <div
      className={cn(
        'absolute left-1/2 top-full -translate-x-1/2 pt-3 animate-fade-in',
        'max-w-[calc(100vw-2rem)]',
        widthClass,
      )}
    >
      <div className="rounded-3xl border border-navy-950/5 bg-white p-3 shadow-2xl ring-1 ring-navy-950/5">
        {/* Items */}
        <ul
          className={cn(
            'grid gap-1',
            layout === 'roles' && 'sm:grid-cols-2',
            layout === 'solutions' && 'sm:grid-cols-2',
            layout === 'services' && 'sm:grid-cols-2',
            layout === 'industries' && 'sm:grid-cols-2',
            layout === 'resources' && 'sm:grid-cols-2',
          )}
        >
          {item.children!.map((c) => {
            const Icon = c.icon;
            return (
              <li key={c.href}>
                <Link
                  href={c.href}
                  onClick={onClose}
                  className="group flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-accent-500/8"
                >
                  {c.flag ? (
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-500/10 text-2xl leading-none">
                      {c.flag}
                    </span>
                  ) : Icon ? (
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                      <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                    </span>
                  ) : null}
                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] font-bold text-navy-950 group-hover:text-accent-500 transition-colors">
                      {c.label}
                    </div>
                    {c.desc && (
                      <div className="mt-0.5 text-[12px] leading-snug text-navy-700">{c.desc}</div>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Footer */}
        {item.footer && (
          <div className="mt-2 border-t border-navy-950/5 px-3 pt-3 pb-1">
            <Link
              href={item.footer.href}
              onClick={onClose}
              className="group inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-accent-500 hover:bg-accent-500 hover:text-white transition-colors"
            >
              {item.footer.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
