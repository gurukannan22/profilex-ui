import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/profilex-ui',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
