import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add-On Services | Tech Installs, SaaS Tools, Operations Support",
  description: "Expand your business capabilities with add-ons: SaaS tools, tech installs, operations support, and more. Starting at $99 for one-time services.",
  keywords: [
    "tech installation Lincoln NE",
    "SaaS tools Lincoln Nebraska",
    "business operations support",
    "POS system setup Lincoln",
    "automation workflows Lincoln",
    "business process optimization"
  ],
  openGraph: {
    title: "Add-On Services | Tech Installs, SaaS Tools, Operations Support",
    description: "Expand your business capabilities with add-ons: SaaS tools, tech installs, operations support, and more.",
    url: "https://sybohsolutions.com/add-ons",
    siteName: "Syboh Solutions",
    images: [
      {
        url: "https://sybohsolutions.com/images/sybohfrogtransparentbackgroundLOGO.png",
        width: 1200,
        height: 630,
        alt: "Syboh Solutions Add-On Services - Lincoln, NE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Add-On Services | Tech Installs, SaaS Tools, Operations Support",
    description: "Expand your business capabilities with add-ons starting at $99.",
    images: ["https://sybohsolutions.com/images/sybohfrogtransparentbackgroundLOGO.png"],
  },
  alternates: {
    canonical: "https://sybohsolutions.com/add-ons",
  },
};

export default function AddOnsPage() {
  const addOns = [
    {
      name: "SaaS Tools & Automation",
      description: "Custom automation workflows and SaaS integrations to streamline your business operations.",
      price: "From $299",
      features: [
        "Custom automation workflows",
        "Data integration & reporting",
        "API development & maintenance",
        "User training & documentation",
        "Monthly maintenance available"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: "Tech Installation & Setup",
      description: "Professional installation and setup of hardware and software systems for your business.",
      price: "From $199",
      features: [
        "POS system setup & training",
        "Digital displays & kiosks",
        "Network infrastructure",
        "Hardware maintenance",
        "Ongoing support available"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      name: "Operations & Process Support",
      description: "Optimize your business processes and workflows for maximum efficiency.",
      price: "From $399",
      features: [
        "Process optimization",
        "Workflow automation",
        "Team training & onboarding",
        "Performance analytics",
        "Continuous improvement plans"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const quickServices = [
    {
      name: "Website Content Update",
      description: "Quick text, image, or content updates to your existing website.",
      price: "$99",
      turnaround: "24-48 hours"
    },
    {
      name: "SEO Audit & Report",
      description: "Comprehensive SEO analysis with actionable recommendations.",
      price: "$199",
      turnaround: "3-5 business days"
    },
    {
      name: "Performance Optimization",
      description: "Speed improvements and performance optimization for your website.",
      price: "$299",
      turnaround: "1 week"
    },
    {
      name: "Security Hardening",
      description: "Security audit and hardening for your website and systems.",
      price: "$399",
      turnaround: "1 week"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
          Add-On Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Extra help when you need it — SaaS tools, tech installs, and operations support to grow your business.
        </p>
      </section>

      {/* Main Add-Ons Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-3">
          {addOns.map((service, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-muted/10 p-8 hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] group">
              <div className="w-16 h-16 rounded-lg gradient-bg mx-auto mb-6 flex items-center justify-center text-background group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-center">{service.name}</h3>
              <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              
              <div className="text-center mb-6">
                <span className="text-2xl font-bold gradient-text">{service.price}</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center rounded-lg border border-muted px-4 py-3 text-sm font-medium hover:bg-muted/20 transition-colors group-hover:border-accent-teal/50 group-hover:text-accent-teal"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">Quick Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Need something done fast? These services are designed for quick turnaround and immediate impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quickServices.map((service, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-muted/10 p-6 hover:bg-white/5 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold gradient-text">{service.price}</span>
                <span className="text-xs text-muted-foreground bg-muted/20 px-2 py-1 rounded-full">
                  {service.turnaround}
                </span>
              </div>
              
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center rounded-lg border border-muted px-3 py-2 text-sm font-medium hover:bg-muted/20 transition-colors"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-4">Ready to add on?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Let&apos;s discuss how these services can help your business grow and operate more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg gradient-bg px-8 py-4 text-background font-semibold hover:opacity-90 transition-all"
            >
              Get a Quote
            </Link>
            <Link
              href="/start-project"
              className="inline-flex items-center justify-center rounded-lg border border-muted px-8 py-4 font-semibold hover:bg-muted/20 transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
