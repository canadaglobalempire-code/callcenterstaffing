/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/testimonials',
        destination: '/case-studies',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
