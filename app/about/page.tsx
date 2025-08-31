"use client";

import { useState, useMemo, useEffect, useCallback } from "react";

const STEPS = [
  {
    title: "Assess",
    subtitle: "Quick discovery of goals, budget, and must-haves.",
    bullets: [
      "Brief intake + competitor peek",
      "Scope + site map",
      "Timeline & deliverables"
    ],
  },
  {
    title: "Design",
    subtitle: "Wireframes and a clean, brand-fit UI.",
    bullets: [
      "Hero + navigation patterns",
      "Color/typography tokens",
      "Mobile-first layouts"
    ],
  },
  {
    title: "Implement",
    subtitle: "Build the essentials first—no upsell fluff.",
    bullets: [
      "Fast, accessible Next.js build",
      "Forms, analytics, security",
      "Responsive components"
    ],
  },
  {
    title: "Review",
    subtitle: "Walkthrough + revisions on staging.",
    bullets: [
      "Share preview link",
      "Content polish",
      "Pre-launch QA"
    ],
  },
  {
    title: "SEO",
    subtitle: "Technical + on-page SEO so you get seen.",
    bullets: [
      "Meta + schema + sitemap",
      "Page speed & image alt text",
      "Local signals (GBP, NAP)"
    ],
  },
  {
    title: "Launch",
    subtitle: "Go live with SSL and tracking verified.",
    bullets: [
      "Domain + redirects",
      "Search Console check",
      "Error monitoring"
    ],
  },
  {
    title: "Support",
    subtitle: "Retainer for updates and small improvements.",
    bullets: [
      "Monthly tweaks & backups",
      "Uptime & performance checks",
      "Roadmap suggestions"
    ],
  },
];

function ProcessCarousel() {
  const [i, setI] = useState(0);
  const max = STEPS.length - 1;
  const pct = useMemo(() => ((i + 1) / STEPS.length) * 100, [i]);

  const next = useCallback(() => setI((n) => Math.min(n + 1, max)), [max]);
  const prev = useCallback(() => setI((n) => Math.max(n - 1, 0)), []);

  // Keyboard navigation (← →)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold gradient-text">How we work</h2>
        <p className="text-sm text-muted-foreground">
          {i + 1} / {STEPS.length}
        </p>
      </header>

      {/* Slide */}
      <div className="relative overflow-hidden">
        <div
          className="transition-transform duration-300 ease-out flex"
          style={{ transform: `translateX(-${i * 100}%)`, width: `${STEPS.length * 100}%` }}
          aria-live="polite"
        >
          {STEPS.map((step) => (
            <article key={step.title} className="w-full shrink-0 px-1">
              <h3 className="text-xl font-bold text-foreground">
                {step.title} <span className="text-muted-foreground">— {step.subtitle}</span>
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                {step.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="rounded-xl bg-muted/20 px-3 py-2 text-foreground hover:bg-muted/40 disabled:opacity-40 transition-colors"
            disabled={i === 0}
            aria-label="Previous step"
          >
            ← Prev
          </button>
          <button
            onClick={next}
            className="rounded-xl gradient-bg px-3 py-2 font-medium text-background hover:opacity-90 disabled:opacity-40 transition-all"
            disabled={i === max}
            aria-label="Next step"
          >
            Next →
          </button>
        </div>
        <a
          href="/start-project"
          className="rounded-xl border border-muted px-4 py-2 text-foreground hover:bg-muted/20 transition-colors"
        >
          Start a project
        </a>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-2 w-full rounded-full bg-muted/20">
        <div
          className="h-2 rounded-full gradient-bg transition-all"
          style={{ width: `${pct}%` }}
          aria-hidden="true"
        />
      </div>

      {/* Dots */}
      <div className="mt-3 flex justify-center gap-2">
        {STEPS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full transition-colors ${
              idx === i ? "gradient-bg" : "bg-muted/40 hover:bg-muted/60"
            }`}
            aria-label={`Go to step ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
          About Syboh
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Operator-first web + tech, based in Lincoln, NE. We&apos;re two brothers building straightforward websites
          and practical tech for small businesses.
        </p>
      </section>

      {/* Content Sections */}
      <section className="mx-auto max-w-3xl px-6 pb-16 space-y-12">
        {/* What we do */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold gradient-text">What we do</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Websites & Care</strong> — clean builds, working intake/contact, SEO, and month-to-month maintenance.</li>
            <li><strong className="text-foreground">Tech help</strong> — installs/config, basic automations, and training so your team can actually use what&apos;s set up.</li>
            <li><strong className="text-foreground">Operations support</strong> — checklists, simple workflows, and light analytics so you can see what&apos;s working.</li>
          </ul>
        </div>

        {/* How we work - Carousel */}
        <div className="space-y-4">
          <ProcessCarousel />
        </div>

        {/* Why Syboh */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold gradient-text">Why Syboh</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Local & responsive</strong> — Lincoln, NE roots; we actually show up.</li>
            <li><strong className="text-foreground">Predictable pricing</strong> — clear scope and month-to-month care.</li>
            <li><strong className="text-foreground">Practical, not flashy</strong> — we ship what you need and document it.</li>
          </ul>
        </div>

        {/* Who you'll work with */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold gradient-text">Who you&apos;ll work with</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li><strong className="text-foreground">Connor</strong> — Design, Client Comms, Sales, Operations, Training, Installations & Business Solutions.</li>
            <li><strong className="text-foreground">Brendan</strong> — SaaS, Web Development, Custom Builds, Integrations, and Technical Solutions.</li>
          </ul>
        </div>

        {/* Closing CTA */}
        <div className="text-center pt-8">
          <p className="text-muted-foreground mb-4">Ready to get started?</p>
          <a 
            href="/start-project" 
            className="inline-flex items-center justify-center rounded-lg gradient-bg px-6 py-3 text-background font-medium hover:opacity-90 transition-all"
          >
            Book a consult
          </a>
        </div>
      </section>
    </main>
  );
}


