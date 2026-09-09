import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true
  },
  images: {
    // Modern formats first; Next falls back to the original for old browsers.
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
