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
  title: 'Terms of Use',
  description:
    'Website terms for using Call Center Staffing content, forms, calculators, and resources.',
  alternates: alternatesFor('/terms'),
  openGraph: {
    title: 'Terms of Use — Call Center Staffing',
    description:
      'Website terms for using Call Center Staffing content, forms, calculators, and resources.',
    url: `${site.url}/terms`,
  },
};

const sections = [
  {
    title: 'Use of this website',
    body: [
      'This website provides general information about call-center staffing, recruiting, workforce planning, outsourcing alternatives, and related services.',
      'You may use the website for lawful business research and inquiry purposes. You may not interfere with the website, attempt unauthorized access, submit malicious content, or use forms for spam, scraping, or automated abuse.',
    ],
  },
  {
    title: 'No guaranteed outcome from website content',
    body: [
      'Website content, calculators, benchmarks, case studies, and guides are provided for informational purposes. They do not create a staffing agreement, service-level commitment, employment relationship, or guarantee unless separately documented in a signed agreement.',
      'Any quote, staffing plan, timeline, or recommendation depends on your specific requirements, labor market conditions, compliance needs, and final commercial terms.',
    ],
  },
  {
    title: 'Form submissions',
    body: [
      'By submitting a form, you confirm that the information is accurate and that you are authorized to share it for business follow-up.',
      'Submitting a form allows us to contact you about the staffing request or resource you requested. Public phone numbers and direct email addresses are intentionally not published on the website to reduce spam.',
    ],
  },
  {
    title: 'Intellectual property',
    body: [
      'The website, brand assets, copy, page structure, calculators, graphics, and other materials are owned by or licensed to Call Center Staffing unless otherwise stated.',
      'You may not copy, republish, resell, or create derivative commercial materials from the website without written permission.',
    ],
  },
  {
    title: 'Third-party services',
    body: [
      'The website may use third-party services for analytics, form processing, CAPTCHA, hosting, fonts, scripts, and measurement. Those services may operate under their own terms and privacy practices.',
    ],
  },
  {
    title: 'Limitation of liability',
    body: [
      'The website is provided as available. To the fullest extent permitted by law, Call Center Staffing is not liable for indirect, incidental, consequential, or special damages arising from use of the website or reliance on website content.',
    ],
  },
];

export default function TermsPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Terms', href: '/terms' },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <WebPageSchema
        path="/terms"
        name="Terms of Use"
        description="Website terms for using Call Center Staffing content, forms, calculators, and resources."
      />
      <section className="bg-neutral-50 pt-36 pb-14 lg:pt-44 lg:pb-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-eyebrow uppercase tracking-[0.14em] text-accent-500">
              Legal
            </p>
            <Heading level={1} display="l" className="mt-5">
              Terms of Use
            </Heading>
            <p className="mt-5 text-body-l text-navy-700">
              These terms govern use of the {site.name} website. Last updated July 6, 2026.
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
                  Questions about these terms?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">
                  Use the protected contact form and include “Terms question” in the details field.
                </p>
                <Button href="/contact" className="mt-5 w-full">
                  Contact us
                </Button>
              </div>
            </aside>
          </div>

          <p className="mt-12 border-t border-navy-950/10 pt-6 text-sm leading-relaxed text-navy-700">
            These website terms should be reviewed with counsel before relying on them as final
            legal terms for regulated or jurisdiction-specific requirements.
          </p>
        </Container>
      </Section>
    </>
  );
}
