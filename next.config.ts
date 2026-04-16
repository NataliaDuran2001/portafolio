import type { NextConfig } from "next";

const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
