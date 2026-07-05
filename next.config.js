/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
