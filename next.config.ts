import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  skipMiddlewareUrlNormalize: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export"
};

export default nextConfig;
