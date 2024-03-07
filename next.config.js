/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  env: {
    WISH_API_URL: process.env.WISH_API_URL,
  },
}

module.exports = nextConfig
