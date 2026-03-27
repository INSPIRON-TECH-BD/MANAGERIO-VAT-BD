import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // n-Law 03: Zero external image domains unless explicitly needed
  images: {
    domains: [],
  },
};

export default nextConfig;