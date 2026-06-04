import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Reframe } from '@/components/sections/Reframe';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { SEOIntro } from '@/components/sections/SEOIntro';
import { TrustBar } from '@/components/sections/TrustBar';
import { ClientVerticalStrip } from '@/components/sections/ClientVerticalStrip';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { WhyUs } from '@/components/sections/WhyUs';
import { GeographicCoverage } from '@/components/sections/GeographicCoverage';
import { RolesGrid } from '@/components/sections/RolesGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { Industries } from '@/components/sections/Industries';
import { CTABand } from '@/components/sections/CTABand';
import { StaffingPlanCTA } from '@/components/sections/StaffingPlanCTA';
import { FAQSection } from '@/components/sections/FAQSection';
import { BlogTeaser } from '@/components/sections/BlogTeaser';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Call Center Staffing Agency | Trained Agents in 72 Hrs',
  description:
    'Hire trained call center agents on our payroll. Deploy a team in 72 hours, pay only for hours worked, swap any agent free. Get a free quote today.',
  keywords: [
    'trained call center agents',
    'trained call center staff',
    'call center staffing',
    'call center staffing agency',
    'call center recruitment agency',
    'hire call center agents',
    'BPO recruitment',
    'contact center staffing',
    'nearshore call center staffing',
    'offshore call center staffing',
  ],
  alternates: alternatesFor('/'),
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: 'Call Center Staffing Agency — Trained Agents, Deployed to You',
    description:
      '100,000+ trained call center agents, deployed to your business in 72 hours. Temporary or long-term. Onshore, nearshore, offshore. Pay only for hours worked.',
    images: [
      {
        url: '/images/cc-office-wide.jpg',
        width: 1200,
        height: 630,
        alt: 'Trained call center staff and agents — deployed to your floor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Center Staffing Agency — Trained Agents, Deployed to You',
    description:
      '100,000+ trained call center agents, deployed to your business. Temporary or long-term. Free quote, pay only for hours worked.',
    images: ['/images/cc-office-wide.jpg'],
  },
};

const HOMEPAGE_FAQS = [
  {
    q: 'How does it work — do we hire the agents?',
    a: 'No. The agents stay on our payroll. You pay us a flat hourly rate per agent, and we handle wages, benefits, payroll taxes, HR and replacements. You direct their work like any other team member.',
  },
  {
    q: 'How fast can agents start working?',
    a: 'Most teams go live in 3–14 days. For small teams (5–25 agents) we usually deploy within a week. For larger ramps (50–200), we send a wave-based plan with the first agents live in under 14 days.',
  },
  {
    q: 'Temporary or long-term — which do you do?',
    a: 'Both. Temporary means a defined window (e.g., 2-month surge for Q4 or open enrollment). Long-term means an ongoing assignment with no end date. Either way, the engagement is month-to-month — scale up, down or end anytime.',
  },
  {
    q: 'What if an agent is not a good fit?',
    a: 'Tell us and we swap them out at no charge. Every agent is recorded and screened before they start, but if you do not click with someone, we replace them within days.',
  },
  {
    q: 'What does a quote include?',
    a: 'A written plan with: how many agents we recommend, which region (onshore, nearshore, offshore), the hourly rate per agent, when they can start, and any compliance flags (HIPAA, PCI, NMLS). Free, one business day.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reframe />
      <WhatWeDo />
      <ClientVerticalStrip />
      <TrustBar />
      <HowItWorks />
      <SolutionsGrid />
      <GeographicCoverage />
      <WhyUs />
      <SEOIntro />
      <Industries />
      <RolesGrid />
      <Testimonials />
      <BlogTeaser />
      <StaffingPlanCTA />
      <FAQSection
        heading="Common questions from operators."
        intro="If your question is not here, browse the full FAQ — or ask the recruiter who sends your staffing plan."
        items={HOMEPAGE_FAQS}
        background="white"
        ctaHref="/faq"
        ctaLabel="See all FAQs"
      />
      <CTABand />
    </>
  );
}
