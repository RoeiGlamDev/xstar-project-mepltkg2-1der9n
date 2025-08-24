/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    allowedDevOrigins: ['https://*.trycloudflare.com'],
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;