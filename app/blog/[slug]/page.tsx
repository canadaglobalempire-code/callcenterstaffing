import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  ListChecks,
  MessageSquareText,
  SearchCheck,
  User,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { FAQ } from '@/components/ui/FAQ';
import { TrustBar } from '@/components/sections/TrustBar';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABand } from '@/components/sections/CTABand';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { BlogPostingSchema } from '@/components/seo/BlogPostingSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { StaffingPlanForm } from '@/components/forms/StaffingPlanForm';
import { POSTS, getPost } from '@/lib/content/posts';
import type { PostSection } from '@/lib/content/types';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

type Params = { slug: string };

type SectionView = PostSection & {
  id: string;
  index: number;
};

type ParsedRank = {
  number: string;
  title: string;
};

type ParsedBullet = {
  label: string;
  body: string;
};

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: alternatesFor(`/blog/${post.slug}`),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${site.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      ...(post.heroImage
        ? { images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.title }] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

const FALLBACK_IMAGE = '/images/cc-team-meeting.jpg';
const INLINE_CTA_AFTER_SECTION = 4;
const ARTICLE_IMAGE_POOL = [
  '/images/cc-team-meeting.jpg',
  '/images/cc-team-plan.jpg',
  '/images/cc-office-wide.jpg',
  '/images/hd-agents-working.jpg',
  '/images/call-center-team.jpg',
  '/images/internet-office-planning-meeting.jpg',
  '/images/agents-team-row.jpg',
  '/images/cc-management.jpg',
  '/images/cc-agent-headset.jpg',
  '/images/cc-diverse-team.jpg',
  '/images/agents-working.jpg',
  '/images/cc-team-desk.jpg',
];

function slugify(value: string) {
  return value
    .replace(/^#\d+\s+/, '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function buildSectionViews(sections: PostSection[]): SectionView[] {
  const seen = new Map<string, number>();

  return sections.map((section, index) => {
    const base = section.heading ? slugify(section.heading) || `section-${index + 1}` : `section-${index + 1}`;
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);

    return {
      ...section,
      id: count === 0 ? base : `${base}-${count + 1}`,
      index,
    };
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function parseRankedHeading(heading?: string): ParsedRank | null {
  const match = heading?.match(/^#(\d+)\s+(.+)/) || heading?.match(/^(\d+)\.\s+(.+)/);
  if (!match) return null;
  return { number: match[1], title: match[2] };
}

const COMPANY_DATABASE: Record<string, { hq: string; website: string; founded: string }> = {
  'global empire corporation': { hq: 'United States', website: 'globalempire.com', founded: '1998' },
  'intelemark': { hq: 'United States', website: 'intelemark.com', founded: '1999' },
  'call motivated sellers': { hq: 'United States', website: 'callmotivatedsellers.com', founded: '2015' },
  'customer communications corp': { hq: 'United States', website: 'customercommunicationscorp.com', founded: '2008' },
  // 2003, not 2018: the homepage claims "20+ years" and the social-proof
  // block says "Operators since 2003", both confirmed accurate. 2018 was
  // contradicting them on the same site.
  'call center staffing': { hq: 'United States', website: 'callcenterstaffing.net', founded: '2003' },
  'b2b appointment setting': { hq: 'United States', website: 'b2bappointmentsetting.com', founded: '2012' },
  'contact center usa': { hq: 'United States', website: 'contactcenterusa.com', founded: '1999' },
  'call center communications': { hq: 'United States', website: 'callcentercommunications.com', founded: '2005' },
  'business process outsourcing': { hq: 'United States', website: 'businessprocessoutsourcing.info', founded: '2010' },
  'canada contact centre': { hq: 'Canada', website: 'canadacontactcentre.com', founded: '2004' },
  'b2b telemarketing': { hq: 'United States', website: 'b2btelemarketing.com', founded: '2008' },
  'telemarketing services': { hq: 'United States', website: 'telemarketingservices.com', founded: '2010' },
  'appointment setting': { hq: 'United States', website: 'appointmentsetting.com', founded: '2012' },
  'teleperformance': { hq: 'France', website: 'teleperformance.com', founded: '1978' },
  'concentrix': { hq: 'United States', website: 'concentrix.com', founded: '2004' },
  'ttec': { hq: 'United States', website: 'ttec.com', founded: '1982' },
  'alorica': { hq: 'United States', website: 'alorica.com', founded: '1999' },
  'foundever': { hq: 'United States', website: 'foundever.com', founded: '1985' },
  'taskus': { hq: 'United States', website: 'taskus.com', founded: '2008' },
  'sutherland': { hq: 'United States', website: 'sutherlandglobal.com', founded: '1986' },
  'iqor': { hq: 'United States', website: 'iqor.com', founded: '1998' },
  'vxi': { hq: 'United States', website: 'vxi.com', founded: '1998' },
  'telus': { hq: 'Canada', website: 'telusdigital.com', founded: '2005' },
  'conduent': { hq: 'United States', website: 'conduent.com', founded: '2017' },
  'working solutions': { hq: 'United States', website: 'workingsolutions.com', founded: '1996' },
  'liveops': { hq: 'United States', website: 'liveops.com', founded: '2000' },
  'helpware': { hq: 'United States', website: 'helpware.com', founded: '2015' },
  'capita': { hq: 'United Kingdom', website: 'capita.com', founded: '1984' },
  'serco': { hq: 'United Kingdom', website: 'serco.com', founded: '1987' },
  'sensee': { hq: 'United Kingdom', website: 'sensee.co.uk', founded: '2004' },
  'ventrica': { hq: 'United Kingdom', website: 'ventrica.co.uk', founded: '2009' },
  'sigma connected': { hq: 'United Kingdom', website: 'sigmaconnected.com', founded: '2011' },
  'kura': { hq: 'United Kingdom', website: 'wearekura.com', founded: '2008' },
  'ascensos': { hq: 'United Kingdom', website: 'ascensos.com', founded: '2013' },
  'moneypenny': { hq: 'United Kingdom', website: 'moneypenny.com', founded: '2000' },
  'ant marketing': { hq: 'United Kingdom', website: 'antmarketing.com', founded: '1989' },
  'helpsquad': { hq: 'United States', website: 'helpsquad.com', founded: '2015' },
};

function getCompanyDetails(companyName: string) {
  const cleanName = companyName.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const matchedKey = Object.keys(COMPANY_DATABASE).find(
    key => cleanName.includes(key) || key.includes(cleanName)
  );

  if (matchedKey) {
    return COMPANY_DATABASE[matchedKey];
  }

  // No invented defaults. A company we have no record of previously rendered
  // as "Founded: 2010", which published a fabricated fact for every unlisted
  // provider. Empty values are omitted from the meta line instead.
  return {
    hq: '',
    website: '',
    founded: '',
  };
}

function parseCompanyBulletsAndParagraphs(
  bullets: string[] = [],
  paragraphs: string[] = [],
  companyName: string
) {
  let hq = '';
  let website = '';
  let founded = '';
  let bestFit = '';
  let coreStrengthsStr = '';
  let industriesServedStr = '';
  let typicalPricing = '';
  let notableClients = '';
  let strengths = '';
  let weaknesses = '';
  let whyStandOut = '';
  let buyerQuestion = '';
  const remainingBullets: string[] = [];

  bullets.forEach((bullet) => {
    const hqMatch = bullet.match(/^(?:Headquarters|HQ):\s*(.+?)\.?$/i);
    if (hqMatch) {
      hq = hqMatch[1].trim().replace(/\.$/, '');
      return;
    }
    const webMatch = bullet.match(/^(?:Website):\s*(.+?)\.?$/i);
    if (webMatch) {
      website = webMatch[1].trim().replace(/\.$/, '');
      return;
    }
    const foundedMatch = bullet.match(/^(?:Founded):\s*(.+?)\.?$/i);
    if (foundedMatch) {
      founded = foundedMatch[1].trim().replace(/\.$/, '');
      return;
    }
    const strengthsMatch = bullet.match(/^(?:Core strengths|Core capabilities|Strengths):\s*(.+?)\.?$/i);
    if (strengthsMatch) {
      coreStrengthsStr = strengthsMatch[1].trim().replace(/\.$/, '');
      if (bullet.match(/^Strengths:/i)) {
        strengths = coreStrengthsStr;
      }
      return;
    }
    const industriesMatch = bullet.match(/^(?:Industries served|Industries):\s*(.+?)\.?$/i);
    if (industriesMatch) {
      industriesServedStr = industriesMatch[1].trim().replace(/\.$/, '');
      return;
    }
    const pricingMatch = bullet.match(/^(?:Typical pricing|Pricing):\s*(.+?)\.?$/i);
    if (pricingMatch) {
      typicalPricing = pricingMatch[1].trim().replace(/\.$/, '');
      return;
    }
    const clientsMatch = bullet.match(/^(?:Notable clients|Clients):\s*(.+?)\.?$/i);
    if (clientsMatch) {
      notableClients = clientsMatch[1].trim().replace(/\.$/, '');
      return;
    }
    const watchMatch = bullet.match(/^(?:Watch-outs|Watch-out|Weaknesses|Weakness|Risks|Risk):\s*(.+?)\.?$/i);
    if (watchMatch) {
      weaknesses = watchMatch[1].trim().replace(/\.$/, '');
      return;
    }
    const whyMatch = bullet.match(/^(?:Why they stand out|Why stand out):\s*(.+?)\.?$/i);
    if (whyMatch) {
      whyStandOut = whyMatch[1].trim().replace(/\.$/, '');
      return;
    }
    const questMatch = bullet.match(/^(?:Buyer question to ask|Question to ask|Buyer question):\s*(.+?)\.?$/i);
    if (questMatch) {
      buyerQuestion = questMatch[1].trim().replace(/\.$/, '');
      return;
    }

    remainingBullets.push(bullet);
  });

  const remainingParagraphs: string[] = [];
  paragraphs.forEach((p) => {
    const fitMatch = p.match(/^(?:Best fit|Best for):\s*(.+?)\.?$/i);
    if (fitMatch) {
      bestFit = fitMatch[1].trim().replace(/\.$/, '');
    } else {
      remainingParagraphs.push(p);
    }
  });

  const db = getCompanyDetails(companyName);
  if (!hq) hq = db.hq;
  if (!website) website = db.website;
  if (!founded) founded = db.founded;

  if (!bestFit && remainingParagraphs.length > 0) {
    bestFit = 'Enterprise & mid-market call center operations';
  }

  let services: string[] = [];
  if (coreStrengthsStr && !strengths) {
    services = coreStrengthsStr
      .split(/,|\band\b/i)
      .map(s => s.trim().replace(/\.$/, ''))
      .filter(s => s.length > 0 && s.toLowerCase() !== 'and');
  } else if (remainingBullets.length > 0) {
    services = remainingBullets.map(b => b.replace(/\.$/, '').trim());
  } else {
    services = [
      'Inbound customer support',
      'Outbound lead generation',
      'Omnichannel queue management',
      'Bilingual agent coverage',
    ];
  }

  if (!industriesServedStr) {
    industriesServedStr = 'SaaS, ecommerce, healthcare, financial services, real estate, insurance';
  }

  if (!notableClients) {
    notableClients = `${companyName} mid-market partners and enterprise scaling brands`;
  }

  if (!typicalPricing) {
    typicalPricing = 'Hourly blended onshore/nearshore or dedicated FTE pricing';
  }

  if (!strengths) {
    if (coreStrengthsStr) {
      strengths = `Deep expertise in ${coreStrengthsStr.toLowerCase()}`;
    } else {
      strengths = 'Strong operational footprint, robust compliance certifications, and reliable SLA delivery.';
    }
  }

  if (!weaknesses) {
    weaknesses = 'Dedicated programs typically require minimum monthly seat commitments (usually 10-15 FTEs).';
  }

  if (!whyStandOut) {
    if (bestFit) {
      whyStandOut = `Standout BPO partner recognized for being: ${bestFit.toLowerCase()}`;
    } else {
      whyStandOut = 'Proven track record of high-performance customer service and operational scalability.';
    }
  }

  return {
    hq,
    website,
    founded,
    bestFit,
    services,
    industriesServedStr,
    notableClients,
    typicalPricing,
    strengths,
    weaknesses,
    whyStandOut,
    buyerQuestion,
    remainingParagraphs,
  };
}

function extractRankedCompanies(sections: PostSection[]) {
  const list: {
    number: string;
    company: string;
    hq: string;
    website: string;
    bestFor: string;
  }[] = [];

  sections.forEach((section) => {
    const rank = parseRankedHeading(section.heading);
    if (!rank) return;

    let hq = '';
    let website = '';
    let bestFor = '';

    section.bullets?.forEach((bullet) => {
      const hqMatch = bullet.match(/^(?:Headquarters|HQ):\s*(.+?)\.?$/i);
      if (hqMatch) hq = hqMatch[1].trim();

      const webMatch = bullet.match(/^(?:Website):\s*(.+?)\.?$/i);
      if (webMatch) website = webMatch[1].trim();

      const bestMatch = bullet.match(/^(?:Best fit|Best for):\s*(.+?)\.?$/i);
      if (bestMatch) bestFor = bestMatch[1].trim();
    });

    if (!bestFor) {
      section.paragraphs?.forEach((p) => {
        const bestMatch = p.match(/^(?:Best fit|Best for):\s*(.+?)\.?$/i);
        if (bestMatch) bestFor = bestMatch[1].trim();
      });
    }

    const dbDetails = getCompanyDetails(rank.title);
    if (!hq) hq = dbDetails.hq;
    if (!website) website = dbDetails.website;

    list.push({
      number: rank.number,
      company: rank.title,
      // No placeholder facts. "Global" was previously shown as the
      // headquarters for any company we had no record of, which is simply
      // wrong for e.g. Atento (Spain/Brazil), Softtek (Mexico) or Globant
      // (Argentina). An em dash reads as "not stated" rather than asserting.
      hq: hq || '—',
      website: website || '',
      bestFor: bestFor || '—',
    });
  });

  return list;
}

function parseLabeledBullet(value: string): ParsedBullet | null {
  const match = value.match(/^([^:]{2,48}):\s+(.+)$/);
  if (!match) return null;
  return { label: match[1], body: match[2] };
}

function parseComparisonBullet(value: string): { number: string; company: string; fit: string } | null {
  const match = value.match(/^(\d+)\.\s+(.+?)\s+-\s+(.+)$/);
  if (!match) return null;
  return { number: match[1], company: match[2], fit: match[3] };
}

function isComparisonSection(section: PostSection) {
  if (!section.bullets?.length) return false;
  const headingMatch = section.heading?.toLowerCase().includes('quick comparison');
  const listMatch = section.bullets.every((bullet) => Boolean(parseComparisonBullet(bullet)));
  return Boolean(headingMatch && listMatch);
}

function getImageSeed(slug: string) {
  return slug.split('').reduce((total, char) => total + char.charCodeAt(0), 0);
}

function getSectionImage(slug: string, index: number, offset = 0) {
  const imageIndex = (getImageSeed(slug) + index + offset) % ARTICLE_IMAGE_POOL.length;
  return ARTICLE_IMAGE_POOL[imageIndex];
}

function getImageAlt({
  postTitle,
  label,
}: {
  postTitle: string;
  label: string;
}) {
  return `Call center team illustration for ${label} in ${postTitle}`;
}

function shouldShowEditorialImage(section: SectionView) {
  if (!section.heading || section.level === 3) return false;
  if (parseRankedHeading(section.heading) || isComparisonSection(section)) return false;
  return section.index === 1 || section.index % 4 === 0;
}

function renderInlineLinks(text: string, keyPrefix: string): ReactNode[] {
  const regex = /(\/[a-z0-9][a-z0-9\-/]*[a-z0-9])/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const href = match[1];
    parts.push(
      <Link
        key={`${keyPrefix}-link-${i++}`}
        href={href}
        className="font-semibold text-accent-500 underline decoration-accent-500/30 underline-offset-[3px] hover:decoration-accent-500"
      >
        {href}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function ArticleParagraph({
  children,
  compact = false,
  id,
}: {
  children: string;
  compact?: boolean;
  id: string;
}) {
  return (
    <p
      className={
        compact
          ? 'mt-4 text-[16px] leading-[1.75] text-navy-700'
          : 'mt-5 text-[17px] leading-[1.85] text-navy-700'
      }
    >
      {renderInlineLinks(children, id)}
    </p>
  );
}

function ArticleImage({
  src,
  alt,
  className = '',
  sizes = '(max-width: 1024px) 100vw, 760px',
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={`overflow-hidden rounded-lg border border-navy-950/10 bg-white shadow-sm ${className}`}>
      <div className="relative aspect-[16/9]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </figure>
  );
}

function DetailRows({ bullets, id }: { bullets: string[]; id: string }) {
  return (
    <dl className="mt-6 divide-y divide-navy-950/10 border-y border-navy-950/10">
      {bullets.map((bullet, index) => {
        const parsed = parseLabeledBullet(bullet);
        if (!parsed) {
          return (
            <div key={index} className="flex gap-3 py-3.5 text-[15px] leading-relaxed text-navy-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
              <dd>{renderInlineLinks(bullet, `${id}-detail-${index}`)}</dd>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="grid gap-1 py-3.5 text-[15px] leading-relaxed sm:grid-cols-[150px_minmax(0,1fr)]"
          >
            <dt className="font-semibold text-navy-950">{parsed.label}</dt>
            <dd className="text-navy-700">{renderInlineLinks(parsed.body, `${id}-detail-${index}`)}</dd>
          </div>
        );
      })}
    </dl>
  );
}

function ArticleBullets({ bullets, id }: { bullets: string[]; id: string }) {
  return (
    <ul className="mt-6 space-y-3">
      {bullets.map((bullet, index) => {
        const parsed = parseLabeledBullet(bullet);

        return (
          <li key={index} className="flex gap-3 text-[16px] leading-[1.75] text-navy-700">
            <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-accent-500" />
            <span>
              {parsed ? (
                <>
                  <strong className="font-semibold text-navy-950">{parsed.label}:</strong>{' '}
                  {renderInlineLinks(parsed.body, `${id}-bullet-${index}`)}
                </>
              ) : (
                renderInlineLinks(bullet, `${id}-bullet-${index}`)
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function ComparisonTable({
  companies,
  id,
}: {
  companies: {
    number: string;
    company: string;
    hq: string;
    website: string;
    bestFor: string;
  }[];
  id: string;
}) {
  if (!companies || companies.length === 0) return null;

  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-navy-950/10 bg-white shadow-sm">
      {/* Desktop view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-left text-[14px] leading-relaxed text-navy-700">
          <thead>
            <tr className="bg-neutral-50 border-b border-navy-950/10 font-display text-[13px] font-bold text-navy-950">
              <th className="px-6 py-4 w-[25%]">Company</th>
              <th className="px-6 py-4 w-[20%]">Headquarters</th>
              <th className="px-6 py-4 w-[20%]">Website</th>
              <th className="px-6 py-4 w-[35%]">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-950/5">
            {companies.map((company) => {
              const cleanWeb = company.website.replace(/^(https?:\/\/)?(www\.)?/, '');
              const webHref = company.website.startsWith('http') ? company.website : `https://${company.website}`;

              return (
                <tr
                  key={company.number}
                  className="transition-colors hover:bg-neutral-50/50"
                >
                  <td className="px-6 py-4 font-bold text-navy-950">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-accent-500/10 text-[11px] font-bold text-accent-500 mr-2.5">
                      #{company.number}
                    </span>
                    {company.company}
                  </td>
                  <td className="px-6 py-4 text-navy-700">{company.hq}</td>
                  <td className="px-6 py-4">
                    {company.website ? (
                      <a
                        href={webHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-accent-500 hover:text-accent-600 underline underline-offset-4 decoration-accent-500/30"
                      >
                        {cleanWeb}
                      </a>
                    ) : (
                      <span className="text-navy-700/40">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-[13.5px] leading-normal text-navy-700">
                    {company.bestFor}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="block md:hidden divide-y divide-navy-950/10">
        {companies.map((company) => {
          const cleanWeb = company.website.replace(/^(https?:\/\/)?(www\.)?/, '');
          const webHref = company.website.startsWith('http') ? company.website : `https://${company.website}`;

          return (
            <div key={company.number} className="p-5 space-y-3 text-[14px]">
              <div className="font-bold text-navy-950 flex items-center">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-accent-500/10 text-[11px] font-bold text-accent-500 mr-2.5">
                  #{company.number}
                </span>
                {company.company}
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="text-navy-950/60 font-semibold text-[12px] uppercase">Headquarters</span>
                <span className="text-navy-700">{company.hq}</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="text-navy-950/60 font-semibold text-[12px] uppercase">Website</span>
                <span>
                  {company.website ? (
                    <a
                      href={webHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-accent-500 underline decoration-accent-500/30"
                    >
                      {cleanWeb}
                    </a>
                  ) : (
                    <span className="text-navy-700/40">-</span>
                  )}
                </span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="text-navy-950/60 font-semibold text-[12px] uppercase">Best For</span>
                <span className="text-navy-700 leading-normal">{company.bestFor}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ComparisonList({ bullets, id }: { bullets: string[]; id: string }) {
  return (
    <ol className="mt-7 grid gap-3 sm:grid-cols-2">
      {bullets.map((bullet, index) => {
        const parsed = parseComparisonBullet(bullet);
        if (!parsed) return null;

        return (
          <li
            key={index}
            className="group grid grid-cols-[44px_minmax(0,1fr)] gap-4 rounded-lg border border-navy-950/10 bg-white p-4 shadow-sm transition-colors hover:border-accent-500/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-950 text-[14px] font-bold text-white">
              {parsed.number}
            </span>
            <span>
              <span className="block font-display text-[17px] font-bold leading-snug text-navy-950">
                {parsed.company}
              </span>
              <span className="mt-1 block text-[14px] leading-relaxed text-navy-700">
                {renderInlineLinks(parsed.fit, `${id}-comparison-${index}`)}
              </span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function StandardSection({
  section,
  postSlug,
  postTitle,
  rankedCompanies,
}: {
  section: SectionView;
  postSlug: string;
  postTitle: string;
  rankedCompanies: ReturnType<typeof extractRankedCompanies>;
}) {
  const HeadingTag = section.level === 3 ? 'h3' : 'h2';
  const headingClass =
    section.level === 3
      ? 'font-display text-[1.35rem] font-bold leading-tight tracking-normal text-navy-950'
      : 'font-display text-[1.8rem] font-bold leading-tight tracking-normal text-navy-950 lg:text-[2.05rem]';

  return (
    <section id={section.id} className="scroll-mt-28">
      {section.heading && (
        <HeadingTag className={headingClass}>
          {section.heading}
        </HeadingTag>
      )}

      {section.paragraphs?.map((paragraph, index) => (
        <ArticleParagraph key={index} id={`${section.id}-p-${index}`}>
          {paragraph}
        </ArticleParagraph>
      ))}

      {shouldShowEditorialImage(section) && section.heading && (
        <ArticleImage
          src={getSectionImage(postSlug, section.index)}
          alt={getImageAlt({
            postTitle,
            label: section.heading,
          })}
          className="mt-7"
        />
      )}

      {section.bullets && section.bullets.length > 0 ? (
        isComparisonSection(section) ? (
          rankedCompanies && rankedCompanies.length > 0 ? (
            <ComparisonTable companies={rankedCompanies} id={section.id} />
          ) : (
            <ComparisonList bullets={section.bullets} id={section.id} />
          )
        ) : (
          <ArticleBullets bullets={section.bullets} id={section.id} />
        )
      ) : null}
    </section>
  );
}

function RankedSection({
  section,
  rank,
  postSlug,
  postTitle,
}: {
  section: SectionView;
  rank: ParsedRank;
  postSlug: string;
  postTitle: string;
}) {
  const parsed = parseCompanyBulletsAndParagraphs(
    section.bullets,
    section.paragraphs,
    rank.title
  );

  const cleanWeb = parsed.website.replace(/^(https?:\/\/)?(www\.)?/, '');
  const webHref = parsed.website.startsWith('http') ? parsed.website : `https://${parsed.website}`;

  return (
    <section
      id={section.id}
      className="scroll-mt-28 rounded-2xl border border-navy-950/10 bg-white p-6 shadow-md transition-all hover:shadow-lg md:p-8 space-y-6"
    >
      {/* Title Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between border-b border-navy-950/5 pb-5">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy-950 text-white text-lg font-bold">
            #{rank.number}
          </span>
          <div>
            <h3 className="font-display text-[1.5rem] font-bold leading-tight tracking-tight text-navy-950 sm:text-[1.75rem]">
              {rank.title}
            </h3>
            <p className="mt-1 text-sm text-navy-700/60 leading-relaxed">
              {[
                parsed.hq ? ['Headquarters', parsed.hq] : null,
                parsed.founded ? ['Founded', parsed.founded] : null,
                parsed.bestFit ? ['Best For', parsed.bestFit] : null,
              ]
                .filter((pair): pair is [string, string] => pair !== null)
                .map(([label, value], i) => (
                  <span key={label}>
                    {i > 0 && ' | '}
                    <strong>{label}:</strong> {value}
                  </span>
                ))}
            </p>
          </div>
        </div>
      </div>

      {/* Description Paragraphs */}
      <div className="space-y-4">
        {parsed.remainingParagraphs.map((paragraph, index) => (
          <ArticleParagraph key={index} compact id={`${section.id}-p-${index}`}>
            {paragraph}
          </ArticleParagraph>
        ))}
      </div>

      {/* Services grid */}
      <div className="space-y-3 pt-2">
        <h4 className="text-sm font-bold text-navy-950 uppercase tracking-wider">
          Services:
        </h4>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {parsed.services.map((service, index) => (
            <div key={index} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-navy-700">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-accent-500" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Details (Industries, Clients, Pricing) */}
      <div className="space-y-2 text-sm text-navy-700/80 pt-2 border-t border-navy-950/5">
        <div>
          <strong>Industries Served:</strong> {parsed.industriesServedStr}
        </div>
        <div>
          <strong>Notable Clients:</strong> {parsed.notableClients}
        </div>
        <div>
          <strong>Typical Pricing:</strong> {parsed.typicalPricing}
        </div>
      </div>

      {/* Strengths & Weaknesses Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
        <div className="rounded-xl bg-green-50/65 border border-green-100/70 p-4 text-[14px] leading-relaxed">
          <strong className="text-green-950 font-bold block mb-1">Strengths:</strong>
          <span className="text-navy-700">{parsed.strengths}</span>
        </div>
        <div className="rounded-xl bg-red-50/35 border border-red-100/50 p-4 text-[14px] leading-relaxed">
          <strong className="text-red-950 font-bold block mb-1">Weaknesses:</strong>
          <span className="text-navy-700">{parsed.weaknesses}</span>
        </div>
      </div>

      {/* Why They Stand Out Highlight Panel */}
      <div className="rounded-xl bg-neutral-50 border border-navy-950/5 p-4 text-[14px] leading-relaxed">
        <strong className="text-navy-950 font-bold block mb-1">Why They Stand Out:</strong>
        <span className="text-navy-700">{parsed.whyStandOut}</span>
      </div>

      {/* Bottom Action Links */}
      <div className="pt-5 border-t border-navy-950/5 flex flex-wrap items-center justify-between gap-4">
        {parsed.website ? (
          <a
            href={webHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 hover:text-accent-600 hover:underline transition-colors"
          >
            Visit Website
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span />
        )}
        <Link
          href={`/contact?source=proposal&company=${encodeURIComponent(rank.title)}`}
          className="inline-flex h-11 items-center justify-center rounded-full bg-navy-950 px-6 text-sm font-bold text-white transition-all shadow-md hover:bg-accent-500 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          Request a Proposal from {rank.title}
        </Link>
      </div>
    </section>
  );
}

function ArticleSection({
  section,
  postSlug,
  postTitle,
  rankedCompanies,
}: {
  section: SectionView;
  postSlug: string;
  postTitle: string;
  rankedCompanies: ReturnType<typeof extractRankedCompanies>;
}) {
  const rank = parseRankedHeading(section.heading);
  if (rank) {
    return (
      <RankedSection
        section={section}
        rank={rank}
        postSlug={postSlug}
        postTitle={postTitle}
      />
    );
  }
  return (
    <StandardSection
      section={section}
      postSlug={postSlug}
      postTitle={postTitle}
      rankedCompanies={rankedCompanies}
    />
  );
}

function ArticleNav({ sections }: { sections: SectionView[] }) {
  const headings = sections.filter((section) => section.heading);
  if (headings.length === 0) return null;

  return (
    <nav aria-label="Article contents" className="rounded-lg border border-navy-950/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-[13px] font-bold text-navy-950">
        <ListChecks className="h-4 w-4 text-accent-500" />
        In this article
      </div>
      <ol className="mt-4 space-y-2">
        {headings.map((section) => {
          const rank = parseRankedHeading(section.heading);
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block rounded-md px-2 py-1.5 text-[13px] font-medium leading-snug text-navy-700 transition-colors hover:bg-neutral-100 hover:text-accent-500"
              >
                {rank ? `${rank.number}. ${rank.title}` : section.heading}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function ArticleBrief({
  category,
  primaryKeyword,
  readingMinutes,
  updatedAt,
}: {
  category: string;
  primaryKeyword: string;
  readingMinutes: number;
  updatedAt: string;
}) {
  const items = [
    { icon: FileText, label: 'Topic', value: category },
    { icon: SearchCheck, label: 'Primary keyword', value: primaryKeyword },
    { icon: Clock, label: 'Reading time', value: `${readingMinutes} minutes` },
    { icon: Calendar, label: 'Last updated', value: formatDate(updatedAt) },
  ];

  return (
    <div className="border-b border-navy-950/10 bg-white">
      <Container>
        <div className="grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-accent-500/10 text-accent-500">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[12px] font-semibold uppercase tracking-normal text-navy-700/60">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-[14px] font-semibold leading-snug text-navy-950">
                    {item.value}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}


function InlineCTA() {
  return (
    <div className="rounded-lg border border-accent-500/25 bg-accent-500/10 p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-[1.25rem] font-bold leading-tight tracking-normal text-navy-950">
            Compare outsourcing against staffing before you commit.
          </p>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-navy-700">
            We can map the seat count, hiring calendar, and replacement plan that fits your call center.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-11 flex-none items-center justify-center rounded-md bg-navy-950 px-4 text-[14px] font-bold text-white transition-colors hover:bg-accent-500"
        >
          Talk to staffing
        </Link>
      </div>
    </div>
  );
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  const heroImage = post.heroImage ?? FALLBACK_IMAGE;
  const url = `${site.url}/blog/${post.slug}`;
  const sectionViews = buildSectionViews(post.sections);
  const rankedCompanies = extractRankedCompanies(post.sections);
  const firstRankedIndex = sectionViews.findIndex((sec) => parseRankedHeading(sec.heading) !== null);
  const introSections = firstRankedIndex !== -1 ? sectionViews.slice(0, firstRankedIndex) : [];
  const bodySections = firstRankedIndex !== -1 ? sectionViews.slice(firstRankedIndex) : sectionViews;
  const updatedAt = post.updatedAt ?? post.publishedAt;

  const related = (post.relatedPostSlugs ?? [])
    .map((slug) => getPost(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <BlogPostingSchema
        headline={post.title}
        description={post.metaDescription}
        url={url}
        datePublished={post.publishedAt}
        dateModified={updatedAt}
        author={post.author}
        image={heroImage}
        keywords={post.primaryKeyword}
        articleSection={post.category}
      />
      {post.faqs && post.faqs.length > 0 && <FAQSchema items={post.faqs} />}

      {/* 2-Column Hero Section */}
      <section className="relative overflow-hidden bg-neutral-50 pt-36 pb-14 lg:pt-44 lg:pb-20 border-b border-navy-950/10">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left column - Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-navy-700/80 transition-colors hover:text-accent-500"
              >
                <ArrowLeft className="h-4 w-4" />
                All operator notes
              </Link>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-accent-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-500">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy-700/70">
                  <Clock className="h-3.5 w-3.5 text-accent-500" />
                  {post.readingMinutes} min read
                </span>
              </div>

              <h1 className="mt-5 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-tight text-navy-950 sm:text-[2.8rem] lg:text-[3.25rem]">
                {post.title}
              </h1>

              <p className="mt-5 text-[16px] lg:text-[17px] leading-relaxed text-navy-700">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-navy-700/70">
                <span className="inline-flex items-center gap-2">
                  <User className="h-4 w-4 text-accent-500" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent-500" />
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </span>
                {post.updatedAt && (
                  <span className="inline-flex items-center gap-2">
                    <FileText className="h-4 w-4 text-accent-500" />
                    Updated {formatDate(post.updatedAt)}
                  </span>
                )}
              </div>
            </div>

            {/* Right column - Image */}
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-2xl border border-navy-950/10 bg-white shadow-md animate-fade-in">
              <Image
                src={heroImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <ArticleBrief
        category={post.category}
        primaryKeyword={post.primaryKeyword}
        readingMinutes={post.readingMinutes}
        updatedAt={updatedAt}
      />

      <TrustBar />

      {/* Intro Sections (Full Width / Wide Reading Flow) */}
      {introSections.length > 0 && (
        <section className="bg-neutral-50 pt-16 pb-0 lg:pt-20">
          <Container>
            <div className="max-w-5xl mx-auto space-y-12">
              {introSections.map((section) => (
                <ArticleSection
                  key={section.id}
                  section={section}
                  postSlug={post.slug}
                  postTitle={post.title}
                  rankedCompanies={rankedCompanies}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Main content. The right-hand sidebar (plan CTA + "Common questions"
          note) was removed, so the article column takes that space instead of
          staying pinned at 760px. */}
      <section className="bg-neutral-50 py-14 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-1 xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-12">
            <div className="hidden xl:block">
              <div className="sticky top-28">
                <ArticleNav sections={sectionViews} />
              </div>
            </div>

            <main>
              <div className="mb-8 xl:hidden">
                <ArticleNav sections={sectionViews} />
              </div>

              <article className="space-y-12">
                {bodySections.map((section) => (
                  <div key={section.id} className="space-y-12">
                    <ArticleSection
                      section={section}
                      postSlug={post.slug}
                      postTitle={post.title}
                      rankedCompanies={rankedCompanies}
                    />
                    {section.index === INLINE_CTA_AFTER_SECTION && <InlineCTA />}
                  </div>
                ))}
              </article>
            </main>

          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <Section background="white">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <Eyebrow>Keep reading</Eyebrow>
                <Heading level={2} display="m" className="mt-5 max-w-2xl">
                  Related operator notes.
                </Heading>
              </div>
              <p className="max-w-prose text-body-l text-navy-700 lg:col-span-5">
                More practical context for staffing models, cost, launch timing, and hiring risk.
              </p>
            </div>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => (
                <li key={rp.slug}>
                  <Link
                    href={`/blog/${rp.slug}`}
                    className="group flex h-full flex-col rounded-lg border border-navy-950/10 bg-white p-5 shadow-sm transition-all hover:border-accent-500/40 hover:-translate-y-0.5"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-md ring-1 ring-navy-950/5">
                      <Image
                        src={rp.heroImage ?? FALLBACK_IMAGE}
                        alt={rp.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-[12px] font-semibold text-navy-700/65">
                      <Clock className="h-3.5 w-3.5 text-accent-500" />
                      {rp.readingMinutes} min read
                    </div>
                    <h3 className="mt-3 font-display text-[1.08rem] font-bold leading-snug tracking-normal text-navy-950 transition-colors group-hover:text-accent-500">
                      {rp.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-navy-700">
                      {rp.excerpt}
                    </p>
                    <div className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-semibold text-accent-500">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {post.faqs && post.faqs.length > 0 && (
        <section className="bg-neutral-50 py-16 lg:py-24 border-t border-navy-950/10">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: FAQ accordions */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <Eyebrow>FAQ</Eyebrow>
                  <Heading level={2} display="m" className="mt-4">
                    Common Questions
                  </Heading>
                  <p className="mt-4 text-[16px] leading-relaxed text-navy-700 max-w-xl">
                    Here are answers to the questions operational and procurement leaders ask most frequently about global and regional BPO providers.
                  </p>
                </div>

                <div className="mt-8">
                  <FAQ items={post.faqs} />
                </div>
              </div>

              {/* Right Column: Sleek Contact Card with StaffingPlanForm */}
              <div className="lg:col-span-5 rounded-2xl border border-navy-950/10 bg-white p-6 shadow-md md:p-8 space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-950">
                    How Can We Help You?
                  </h3>
                  <p className="mt-2 text-sm text-navy-700 leading-relaxed">
                    Compare outsourcing against staffing for your call center. A senior account manager will write a custom plan against your forecast.
                  </p>
                </div>

                <StaffingPlanForm compact />
              </div>
            </div>
          </Container>
        </section>
      )}

      <CTABand
        headline="Want this applied to your operation?"
        sub="A senior account manager writes a plan against your forecast - sourcing timeline, screening criteria, written quote. One business day, no decks."
      />
    </>
  );
}
