import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCTA } from '@/components/ui/StickyCTA';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { WebsiteSchema } from '@/components/seo/WebsiteSchema';
import { site } from '@/lib/site';

export const revalidate = 300;

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

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? 'x2dgwn3f7g';
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-B7QE452XJX';
const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  '1ffyhqmcj-JRp9k1GZOGD6pcBK4dB844HbEuYaoI9D4';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Specialized Call Center Recruiting`,
    // No brand suffix: every page title already leads with the "call center
    // staffing" phrasing, so appending the brand cost ~23 chars and pushed 69
    // of 98 titles past the ~60-char SERP truncation point. Pages own their
    // full title now.
    template: '%s',
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: googleVerification,
  },
  alternates: {
    canonical: site.url,
    languages: {
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
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityProjectId}");`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');`}
        </Script>
      </body>
    </html>
  );
}
