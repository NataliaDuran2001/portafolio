import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portafolio",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
