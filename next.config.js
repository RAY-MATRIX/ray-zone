/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  env: {
    WISH_API_URL:
      'https://bnobel00fg.execute-api.ap-southeast-2.amazonaws.com/prod',
  },
}

module.exports = nextConfig
