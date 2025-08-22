import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@vercel/analytics",
      "@vercel/speed-insights",
    ],
  },
};

export default nextConfig;
