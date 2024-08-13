/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { API_QUOTE: process.env.API_QUOTE, API_IMAGE: process.env.API_IMAGE },
};

export default nextConfig;
