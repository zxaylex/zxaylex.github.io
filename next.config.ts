import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  skipProxyUrlNormalize: true,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export"
};

export default nextConfig;
