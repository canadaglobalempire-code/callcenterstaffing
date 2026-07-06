import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { site } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Call Center Staffing collects, uses, and protects information submitted through this website.',
  alternates: alternatesFor('/privacy'),
  openGraph: {
    title: 'Privacy Policy — Call Center Staffing',
    description:
      'How Call Center Staffing collects, uses, and protects information submitted through this website.',
    url: `${site.url}/privacy`,
  },
};

const sections = [
  {
    title: 'Information we collect',
    body: [
      'When you request a quote, staffing plan, or newsletter subscription, we collect the information you choose to submit, such as your name, company, work email, phone number, website, hiring needs, location preferences, and message details.',
      'We also use analytics and security tools that may collect device, browser, page-view, and interaction data so we can understand site performance, improve the experience, measure marketing effectiveness, and reduce spam.',
    ],
  },
  {
    title: 'How we use information',
    body: [
      'We use submitted information to respond to staffing requests, prepare quotes, recommend recruiting plans, operate the website, prevent abuse, and improve our marketing and service experience.',
      'We do not sell personal information. We only share information with service providers that help operate the website, process form submissions, run analytics, or support legitimate business follow-up.',
    ],
  },
  {
    title: 'Lead forms and anti-spam protection',
    body: [
      'Public phone numbers and direct email addresses are intentionally not published on this website. This keeps spam calls and spam email down and allows legitimate inquiries to be routed through protected forms.',
      'Forms may use CAPTCHA, validation, analytics, and submission services to verify requests and reduce automated abuse.',
    ],
  },
  {
    title: 'Cookies and analytics',
    body: [
      'The website may use cookies, pixels, tags, and similar technologies from analytics or measurement providers such as Google Analytics and Microsoft Clarity.',
      'These tools help us understand traffic sources, page engagement, conversion paths, and technical issues. Browser settings and provider opt-out tools may let you limit some tracking.',
    ],
  },
  {
    title: 'Data retention',
    body: [
      'We keep submitted information only as long as needed for business, legal, security, and operational purposes. Retention periods may vary depending on the nature of the inquiry and any ongoing relationship.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      'You can request that we review, update, or delete information you submitted through this website, subject to legal and operational limits.',
      'To make a privacy request, use the contact form and include “Privacy request” in the details field.',
    ],
  },
];

export default function PrivacyPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Privacy', href: '/privacy' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <WebPageSchema
        path="/privacy"
        name="Privacy Policy"
        description="How Call Center Staffing collects, uses, and protects information submitted through this website."
      />
      <section className="bg-neutral-50 pt-36 pb-14 lg:pt-44 lg:pb-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-eyebrow uppercase tracking-[0.14em] text-accent-500">
              Legal
            </p>
            <Heading level={1} display="l" className="mt-5">
              Privacy Policy
            </Heading>
            <p className="mt-5 text-body-l text-navy-700">
              This policy explains how {site.name} handles information submitted through
              this website. Last updated July 6, 2026.
            </p>
          </div>
        </Container>
      </section>

      <Section background="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="space-y-10">
                {sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="font-display text-2xl font-extrabold tracking-[-0.02em] text-navy-950">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-navy-700">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-navy-950/10 bg-neutral-50 p-6">
                <h2 className="font-display text-xl font-extrabold tracking-tight text-navy-950">
                  Privacy request
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">
                  Use the protected contact form for privacy questions or data requests. We do not
                  publish direct email or phone details on the site.
                </p>
                <Button href="/contact" className="mt-5 w-full">
                  Contact us
                </Button>
              </div>
            </aside>
          </div>

          <p className="mt-12 border-t border-navy-950/10 pt-6 text-sm leading-relaxed text-navy-700">
            This page is general website privacy information and is not legal advice. The policy
            should be reviewed with counsel before relying on it for regulated, international, or
            jurisdiction-specific requirements.
          </p>
        </Container>
      </Section>
    </>
  );
}
