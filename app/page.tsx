import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syboh Solutions | Websites, Tech Installs & Business Support in Lincoln, NE",
  description: "Operator-first web development and tech solutions for small businesses in Lincoln, NE. Custom websites, SaaS tools, tech installations, and ongoing maintenance starting at $149/mo.",
  keywords: [
    "web development Lincoln NE",
    "website design Lincoln Nebraska", 
    "tech installation Lincoln",
    "business support Lincoln NE",
    "website maintenance Lincoln",
    "small business web design",
    "operator-first solutions",
    "tech consulting Lincoln NE"
  ],
  openGraph: {
    title: "Syboh Solutions | Websites, Tech Installs & Business Support in Lincoln, NE",
    description: "Operator-first web development and tech solutions for small businesses in Lincoln, NE. Custom websites, SaaS tools, tech installations, and ongoing maintenance starting at $149/mo.",
    url: "https://sybohsolutions.com",
    siteName: "Syboh Solutions",
    images: [
      {
        url: "https://sybohsolutions.com/images/sybohfrogtransparentbackgroundLOGO.png",
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
    description: "Operator-first web development and tech solutions for small businesses in Lincoln, NE.",
    images: ["https://sybohsolutions.com/images/sybohfrogtransparentbackgroundLOGO.png"],
  },
  alternates: {
    canonical: "https://sybohsolutions.com",
  },
};


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/images/sybohfrogtransparentbackgroundLOGO.png"
            alt="Syboh Solutions Logo"
            width={0}
            height={0}
            className="w-32 h-auto mx-auto mb-8"
            priority
            unoptimized
          />
          <h1 className="text-5xl font-bold tracking-tight gradient-text md:text-7xl mb-6">
            Websites that grow with your business.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Custom builds backed by ongoing care so your site never falls behind.
          </p>
          <Link
            href="/pricing"
            className="inline-flex h-14 items-center justify-center rounded-md gradient-bg px-8 text-background font-semibold text-lg transition-all hover:opacity-90"
          >
            View Plans
          </Link>
        </div>
      </section>

      {/* Plans Teaser Row */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Essential Care */}
          <div className="rounded-xl border border-muted bg-muted/10 p-6 hover:bg-muted/20 transition-colors">
            <h3 className="text-xl font-semibold mb-2">Essential Care</h3>
            <div className="text-3xl font-bold gradient-text mb-4">$149<span className="text-sm text-muted-foreground font-normal">/mo</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Managed hosting + SSL</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Weekly backups & monitoring</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Core updates & security</span>
              </li>
            </ul>
            <Link
              href="/pricing"
              className="inline-flex w-full items-center justify-center rounded-lg border border-muted px-4 py-2 text-sm font-medium hover:bg-muted/20 transition-colors"
            >
              View Full Plan
            </Link>
          </div>

          {/* Growth Care */}
          <div className="rounded-xl border border-accent-teal/60 bg-muted/10 p-6 hover:bg-muted/20 transition-colors relative">
            <span className="absolute -top-3 right-4 rounded-full gradient-bg px-3 py-1 text-xs font-semibold text-background">
              Most Popular
            </span>
            <h3 className="text-xl font-semibold mb-2">Growth Care</h3>
            <div className="text-3xl font-bold gradient-text mb-4">$349<span className="text-sm text-muted-foreground font-normal">/mo</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Everything in Essential</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Monthly SEO checkups</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Priority support (24h)</span>
              </li>
            </ul>
            <Link
              href="/pricing"
              className="inline-flex w-full items-center justify-center rounded-lg gradient-bg px-4 py-2 text-sm font-semibold text-background hover:opacity-90 transition-all"
            >
              View Full Plan
            </Link>
          </div>

          {/* Premium Care */}
          <div className="rounded-xl border border-muted bg-muted/10 p-6 hover:bg-muted/20 transition-colors">
            <h3 className="text-xl font-semibold mb-2">Premium Care</h3>
            <div className="text-3xl font-bold gradient-text mb-4">$749<span className="text-sm text-muted-foreground font-normal">/mo</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Everything in Growth</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Unlimited updates</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Direct phone support</span>
              </li>
            </ul>
            <Link
              href="/pricing"
              className="inline-flex w-full items-center justify-center rounded-lg border border-muted px-4 py-2 text-sm font-medium hover:bg-muted/20 transition-colors"
            >
              View Full Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">Why Syboh?</h2>
          <p className="text-lg text-muted-foreground">
            We don&apos;t just build and disappear. Every Syboh site comes with a care plan — hosting, updates, and ongoing support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Hosting + SSL */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg gradient-bg mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Hosting + SSL</h3>
            <p className="text-sm text-muted-foreground">Managed hosting with automatic SSL certificates and uptime monitoring.</p>
          </div>

          {/* Ongoing Updates */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg gradient-bg mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Ongoing Updates</h3>
            <p className="text-sm text-muted-foreground">Regular security updates, plugin maintenance, and core system updates.</p>
          </div>

          {/* SEO Optimization */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg gradient-bg mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">SEO Optimization</h3>
            <p className="text-sm text-muted-foreground">Monthly SEO checkups and ongoing optimization to improve search rankings.</p>
          </div>

          {/* Priority Support */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg gradient-bg mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Priority Support</h3>
            <p className="text-sm text-muted-foreground">Fast response times with dedicated support channels for urgent issues.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-4">Ready to start?</h2>
          <Link
            href="/start-project"
            className="inline-flex h-14 items-center justify-center rounded-md gradient-bg px-8 text-background font-semibold text-lg transition-all hover:opacity-90"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}
