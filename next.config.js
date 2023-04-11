/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["scontent-lcy1-1.cdninstagram.com"],
  },
  publicRuntimeConfig: {
    instagramAccessToken: process.env.INSTAGRAM_KEY,
  },
};
module.exports = nextConfig;
