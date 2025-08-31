"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

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
    price: "Custom",
    tagline: "Advanced features, integrations, or headless.",
    ctaLabel: "Request a Quote",
    ctaHref: "/start-project",
    features: [
      { label: "Complex IA & custom components" },
      { label: "Integrations (POS, CRM, automations)" },
      { label: "Multi-location / multi-lang options" },
      { label: "Performance budget & accessibility pass" },
      { label: "Pair with any Care Plan" },
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-muted/20 text-foreground shadow-xl
      ${plan.popular ? "border-accent-teal/60 ring-1 ring-accent-teal/40" : "border-muted"}`}
    >
      {plan.popular && (
        <span className="absolute -top-3 right-4 rounded-full gradient-bg px-3 py-1 text-xs font-semibold text-background">
          Most popular
        </span>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold">{plan.name}</h3>
        <div className="mt-2 flex items-end gap-1">
          <span className="text-4xl font-bold gradient-text">{plan.price}</span>
          {plan.period && <span className="pb-1 text-sm text-muted-foreground">{plan.period}</span>}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{plan.tagline}</p>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-5 flex w-full items-center justify-between rounded-lg border border-muted bg-muted/10 px-4 py-3 text-sm hover:bg-muted/20 transition-colors"
        >
          <span>What&apos;s included</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <ul className="mt-4 space-y-2 text-sm">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full gradient-bg" />
                <span className="text-muted-foreground">{f.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-auto p-6">
        <Link
          href={plan.ctaHref}
          className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-all
            ${plan.popular ? "gradient-bg text-background hover:opacity-90" : "bg-muted/20 hover:bg-muted/30"}`}
        >
          {plan.ctaLabel}
        </Link>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [tab, setTab] = useState<"care" | "builds">("care");

  const activePlans = tab === "care" ? carePlans : builds;
  const title = tab === "care" ? "Website Care Plans" : "Website Builds";
  const subtitle =
    tab === "care"
      ? "We don't just build and disappear. Every Syboh site comes with a care plan to keep it secure, updated, and improving."
      : "Pick the build that fits today. Add a Care Plan to keep improving month after month.";

  // Handle anchor links for direct plan navigation
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#essential" || hash === "#growth" || hash === "#premium") {
      setTab("care");
    } else if (hash === "#starter" || hash === "#business" || hash === "#custom") {
      setTab("builds");
    }
  }, []);

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold gradient-text">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>

        <div className="mt-6 inline-flex rounded-lg border border-muted bg-muted/20 p-1">
          <button
            onClick={() => setTab("care")}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              tab === "care" ? "gradient-bg text-background" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Care Plans
          </button>
          <button
            onClick={() => setTab("builds")}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              tab === "builds" ? "gradient-bg text-background" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Website Builds
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activePlans.map((p) => (
          <PlanCard key={p.name} plan={p} />
        ))}
      </div>

      {tab === "builds" && (
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-muted-foreground">
          💡 Prefer a lower upfront cost? Choose a build + commit to the Growth Care Plan for 12 months
          and save <span className="text-accent-teal">$300</span> on your build.
        </p>
      )}
    </section>
  );
}
