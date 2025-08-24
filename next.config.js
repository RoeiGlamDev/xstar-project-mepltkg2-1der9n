/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    allowedDevOrigins: ['https://*.trycloudflare.com'],
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;