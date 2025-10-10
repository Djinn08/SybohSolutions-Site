import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { COMPANY } from "@/lib/constants";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title: {
    default: "Syboh Solutions | Websites, Tech Installs & Business Support in Lincoln, NE",
    template: `%s — Syboh Solutions`,
  },
  description: "Operator-first web development, tech installations, and business support for small businesses in Lincoln, NE. Custom websites, SaaS tools, and ongoing maintenance.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/android-chrome-192x192.png', sizes: '180x180', type: 'image/png' }],
  },
  keywords: [
    "web development Lincoln NE",
    "website design Lincoln Nebraska",
    "tech installation Lincoln",
    "business support Lincoln NE",
    "SaaS tools Lincoln",
    "website maintenance Lincoln",
    "small business web design",
    "operator-first solutions",
    "tech consulting Lincoln NE",
    "business automation Lincoln"
  ],
  authors: [{ name: "Syboh Solutions" }],
  creator: "Syboh Solutions",
  publisher: "Syboh Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Syboh Solutions | Websites, Tech Installs & Business Support in Lincoln, NE",
    description: "Operator-first web development, tech installations, and business support for small businesses in Lincoln, NE. Custom websites, SaaS tools, and ongoing maintenance.",
    url: COMPANY.siteUrl,
    siteName: COMPANY.shortName,
    images: [
      {
        url: `${COMPANY.siteUrl}/images/sybohfrogtransparentbackgroundLOGO.png`,
        width: 1200,
        height: 630,
        alt: "Syboh Solutions - Web Development and Tech Support in Lincoln, NE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syboh Solutions | Websites, Tech Installs & Business Support in Lincoln, NE",
    description: "Operator-first web development, tech installations, and business support for small businesses in Lincoln, NE.",
    images: [`${COMPANY.siteUrl}/images/sybohfrogtransparentbackgroundLOGO.png`],
    creator: "@sybohsolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: COMPANY.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google reCAPTCHA v3 */}
        {recaptchaSiteKey && (
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
            async
            defer
          ></script>
        )}
      </head>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <SiteHeader />
        <div className="min-h-[calc(100dvh-160px)]">
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </div>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
