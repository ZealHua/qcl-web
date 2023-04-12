/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
  // Config different URL here for different environment
  env: {
    API_BASE_URL: dev ? 'http://localhost:8000/api' : 'https://your-production-api-url.com/api',
  },
}

module.exports = nextConfig;



