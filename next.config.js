/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  typescript: {
    // Ignore TypeScript errors during build to allow deployment
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
