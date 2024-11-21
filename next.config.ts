import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "assets.aceternity.com", "haksezldnsxyenpcdjph.supabase.co"]
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
