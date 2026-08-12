import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/raven-law",
  assetPrefix: "/raven-law/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
