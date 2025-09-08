import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@vercel/analytics",
      "@vercel/speed-insights",
    ],
  },
  async redirects() {
    return [
      { source: '/services/operations', destination: '/add-ons', permanent: true }
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Strict Transport Security
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Content Type Options
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Frame Options - Removed DENY to allow Google Forms embedding
          // {
          //   key: "X-Frame-Options",
          //   value: "DENY",
          // },
          // Referrer Policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Permissions Policy
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
          },
          // Cross Origin Policies
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          // Content Security Policy (Report-Only initially)
          {
            key: "Content-Security-Policy-Report-Only",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://www.google.com https://docs.google.com https://forms.gle",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.google.com https://docs.google.com https://forms.gle",
              "font-src 'self' https://fonts.gstatic.com https://www.google.com https://docs.google.com https://forms.gle",
              "img-src 'self' data: https: blob: https://www.google.com https://docs.google.com https://forms.gle",
              "connect-src 'self' https://api.vercel.com https://vitals.vercel-insights.com https://www.google.com https://docs.google.com https://forms.gle",
              "frame-src 'self' https://docs.google.com https://www.google.com https://forms.gle",
              "child-src 'self' https://docs.google.com https://www.google.com https://forms.gle",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
  // Additional security configurations
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  // Disable directory listing
  trailingSlash: false,
  // Security: Disable source maps in production
  productionBrowserSourceMaps: false,
};

export default nextConfig;
