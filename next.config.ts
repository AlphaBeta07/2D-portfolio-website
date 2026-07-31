import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false, // hides the Next.js "N" logo and all dev indicators
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
