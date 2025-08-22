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
    default: `${COMPANY.shortName} — ${COMPANY.tagline}`,
    template: `%s — ${COMPANY.shortName}`,
  },
  description: COMPANY.tagline,
  openGraph: {
    title: `${COMPANY.shortName}`,
    description: COMPANY.tagline,
    url: COMPANY.siteUrl,
    siteName: COMPANY.shortName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.shortName,
    description: COMPANY.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        <div className="min-h-[calc(100dvh-160px)]">{children}</div>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
