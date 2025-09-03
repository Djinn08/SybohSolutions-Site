import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Syboh Solutions | Websites, Tech Installs & Business Support in Lincoln, NE",
    template: "%s | Syboh Solutions"
  },
  description: "Operator-first web development and tech solutions for small businesses in Lincoln, NE. Custom websites, SaaS tools, tech installations, and ongoing maintenance starting at $149/mo.",
  keywords: [
    "web development Lincoln NE",
    "website design Lincoln Nebraska",
    "tech installation Lincoln",
    "business support Lincoln NE",
    "website maintenance Lincoln",
    "small business web design",
    "operator-first solutions",
    "tech consulting Lincoln NE",
    "Lincoln Nebraska web services",
    "local web development"
  ],
  authors: [{ name: "Syboh Solutions LLC" }],
  creator: "Syboh Solutions LLC",
  publisher: "Syboh Solutions LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sybohsolutions.com",
    siteName: "Syboh Solutions",
    title: "Syboh Solutions | Websites, Tech Installs & Business Support in Lincoln, NE",
    description: "Operator-first web development and tech solutions for small businesses in Lincoln, NE. Custom websites, SaaS tools, tech installations, and ongoing maintenance starting at $149/mo.",
    images: [
      {
        url: "https://sybohsolutions.com/images/sybohfrogtransparentbackgroundLOGO.png",
        width: 1200,
        height: 630,
        alt: "Syboh Solutions - Web Development and Tech Support in Lincoln, NE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syboh Solutions | Websites, Tech Installs & Business Support in Lincoln, NE",
    description: "Operator-first web development and tech solutions for small businesses in Lincoln, NE.",
    images: ["https://sybohsolutions.com/images/sybohfrogtransparentbackgroundLOGO.png"],
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
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://sybohsolutions.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
