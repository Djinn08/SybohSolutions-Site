"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

type Feature = { label: string };
type Plan = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  popular?: boolean;
  ctaLabel: string;
  ctaHref: string;
  features: Feature[];
};

const carePlans: Plan[] = [
  {
    name: "Essential Care",
    price: "$149",
    period: "/mo",
    tagline: "Keep the lights on: hosting, security, core updates.",
    ctaLabel: "Choose Essential",
    ctaHref: "/start-project",
    features: [
      { label: "Managed hosting + SSL" },
      { label: "Weekly backups & uptime monitoring" },
      { label: "Core updates (CMS, plugins, security)" },
      { label: "1 small content/update request / month" },
      { label: "Email support (≤ 48h response)" },
      { label: "First month free" },
    ],
  },
  {
    name: "Growth Care",
    price: "$349",
    period: "/mo",
    tagline: "Optimization & momentum. Most teams start here.",
    popular: true,
    ctaLabel: "Choose Growth",
    ctaHref: "/start-project",
    features: [
      { label: "Everything in Essential" },
      { label: "Up to 4 update requests / month" },
      { label: "Monthly performance & SEO checkup" },
      { label: "Priority support (≤ 24h response)" },
      { label: "Quarterly strategy call" },
      { label: "First month free" },
    ],
  },
  {
    name: "Premium Care",
    price: "$749",
    period: "/mo",
    tagline: "Your outsourced web & growth team.",
    ctaLabel: "Choose Premium",
    ctaHref: "/start-project",
    features: [
      { label: "Everything in Growth" },
      { label: "Unlimited small updates (no rebuilds)" },
      { label: "Ongoing SEO optimization & reporting" },
      { label: "Conversion optimization (forms, CTAs, flows)" },
      { label: "Bi-monthly strategy & analytics review" },
      { label: "Direct Slack/phone support" },
      { label: "First month free" },
    ],
  },
];

const builds: Plan[] = [
  {
    name: "Starter Site",
    price: "$1,099",
    tagline: "Single-page, fast launch, mobile-first.",
    ctaLabel: "Start Starter",
    ctaHref: "/start-project",
    features: [
      { label: "One-page responsive website" },
      { label: "Contact form + basic analytics" },
      { label: "Copy wireframe guidance" },
      { label: "Launch checklist & QA" },
      { label: "Pair with any Care Plan" },
    ],
  },
  {
    name: "Business Site",
    price: "$2,499",
    popular: true,
    tagline: "Multi-page site built to convert.",
    ctaLabel: "Start Business",
    ctaHref: "/start-project",
    features: [
      { label: "4–8 pages (Home, Services, About, Contact, etc.)" },
      { label: "Lead forms + calendaring/booking support" },
      { label: "Local SEO basics (metadata, sitemap, indexing)" },
      { label: "Blog setup (optional)" },
      { label: "Pair with Growth Care (save $300 w/ 12-mo commit)" },
    ],
  },
  {
    name: "Custom Build",
    price: "$4,999+",
    tagline: "Complex functionality, integrations, custom features.",
    ctaLabel: "Start Custom",
    ctaHref: "/start-project",
    features: [
      { label: "Custom functionality & integrations" },
      { label: "Advanced user management" },
      { label: "API development & third-party connections" },
      { label: "E-commerce or membership features" },
      { label: "Custom admin dashboard" },
    ],
  },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"care" | "builds">("care");
  const [isLoading, setIsLoading] = useState(false);

  const handlePlanSelection = async (plan: Plan) => {
    setIsLoading(true);
    // Simulate loading for better UX
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = plan.ctaHref;
    }, 500);
  };

  const subtitle =
    activeTab === "care"
      ? "We don't just build and disappear. Every Syboh site comes with a care plan to keep it secure, updated, and improving."
      : "Pick the build that fits today. Add a Care Plan to keep improving month after month.";

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold gradient-text mb-4">Choose Your Plan</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg bg-muted/20 p-1">
          <button
            onClick={() => setActiveTab("care")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "care"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Website Care Plans
          </button>
          <button
            onClick={() => setActiveTab("builds")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "builds"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Website Builds
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {(activeTab === "care" ? carePlans : builds).map((plan, index) => (
          <div
            key={plan.name}
            className={`relative rounded-xl border p-6 transition-all duration-300 hover:scale-[1.02] ${
              plan.popular
                ? "border-accent-teal/60 bg-muted/20 shadow-lg shadow-accent-teal/10"
                : "border-muted bg-muted/10 hover:bg-muted/20"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <span className="absolute -top-3 right-4 rounded-full gradient-bg px-3 py-1 text-xs font-semibold text-background">
                Most Popular
              </span>
            )}

            {/* Plan Header */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold gradient-text">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground font-normal">{plan.period}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{plan.tagline}</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                  <span>{feature.label}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => handlePlanSelection(plan)}
              disabled={isLoading}
              className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                plan.popular
                  ? "gradient-bg text-background hover:opacity-90"
                  : "border border-muted hover:bg-muted/20"
              }`}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner size="sm" className={plan.popular ? "text-background" : "text-foreground"} />
                  Loading...
                </>
              ) : (
                plan.ctaLabel
              )}
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4">Questions about pricing?</h3>
        <p className="text-muted-foreground mb-6">
          We&apos;re here to help you choose the right plan for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg gradient-bg px-6 py-3 text-background font-medium hover:opacity-90 transition-all"
          >
            Get in Touch
          </Link>
          <Link
            href="/start-project"
            className="inline-flex items-center justify-center rounded-lg border border-muted px-6 py-3 font-medium hover:bg-muted/20 transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
