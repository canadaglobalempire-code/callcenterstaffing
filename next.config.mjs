/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'callcenterstaffing.net' }],
        destination: 'https://www.callcenterstaffing.net/:path*',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/case-studies',
        permanent: true,
      },
      // Evergreen URLs: the year was stripped from these slugs so the URLs do
      // not need rewriting (and losing their equity) every January. The old
      // dated paths are indexed, so they redirect permanently.
      { source: '/blog/best-call-center-outsourcing-companies-2026', destination: '/blog/best-call-center-outsourcing-companies', permanent: true },
      { source: '/blog/best-customer-service-outsourcing-companies-2026', destination: '/blog/best-customer-service-outsourcing-companies', permanent: true },
      { source: '/blog/bpo-companies-directory-2026', destination: '/blog/bpo-companies-directory', permanent: true },
      { source: '/blog/bpo-vs-call-center-outsourcing-2026', destination: '/blog/bpo-vs-call-center-outsourcing', permanent: true },
      { source: '/blog/call-center-outsourcing-for-small-business-2026', destination: '/blog/call-center-outsourcing-for-small-business', permanent: true },
      { source: '/blog/call-center-staffing-best-practices-2026', destination: '/blog/call-center-staffing-best-practices', permanent: true },
      { source: '/blog/call-center-staffing-cost-2026', destination: '/blog/call-center-staffing-cost', permanent: true },
      { source: '/blog/ecommerce-customer-service-outsourcing-2026', destination: '/blog/ecommerce-customer-service-outsourcing', permanent: true },
      { source: '/blog/healthcare-call-center-outsourcing-2026', destination: '/blog/healthcare-call-center-outsourcing', permanent: true },
      { source: '/blog/inbound-call-center-outsourcing-2026', destination: '/blog/inbound-call-center-outsourcing', permanent: true },
      { source: '/blog/nearshore-call-center-outsourcing-2026', destination: '/blog/nearshore-call-center-outsourcing', permanent: true },
      { source: '/blog/offshore-call-center-outsourcing-2026', destination: '/blog/offshore-call-center-outsourcing', permanent: true },
      { source: '/blog/outbound-call-center-outsourcing-2026', destination: '/blog/outbound-call-center-outsourcing', permanent: true },
    ];
  },
};

export default nextConfig;
