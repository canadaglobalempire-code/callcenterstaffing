import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCTA } from '@/components/ui/StickyCTA';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { WebsiteSchema } from '@/components/seo/WebsiteSchema';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Specialized Call Center Recruiting`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  openGraph: {
    type: 'website',
    siteName: site.name,
    url: site.url,
    title: `${site.name} — Specialized Call Center Recruiting`,
    description: site.description,
    images: [
      {
        url: '/images/agents-team-row.jpg',
        width: 1200,
        height: 630,
        alt: 'Call center agents at work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Specialized Call Center Recruiting`,
    description: site.description,
    images: ['/images/agents-team-row.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: site.url,
    languages: {
      'en-US': site.url,
      'en-GB': site.url,
      'en-CA': site.url,
      'en-AU': site.url,
      'en-IE': site.url,
      'en-NZ': site.url,
      'en-ZA': site.url,
      'en-IN': site.url,
      'en-AE': site.url,
      'en-SG': site.url,
      'en-PH': site.url,
      'x-default': site.url,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0A1628',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-navy-950 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
        <OrganizationSchema />
        <WebsiteSchema />
      </body>
    </html>
  );
}
