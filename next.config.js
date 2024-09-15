/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["vchvqkgechbbujamfttg.supabase.co"],
  },
};

module.exports = nextConfig;
