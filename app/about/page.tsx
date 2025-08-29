import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Syboh Solutions | Web & Tech Support in Lincoln, NE",
  description: "Meet the brothers behind Syboh Solutions in Lincoln, NE. Practical web, SaaS, and tech help built for small business operators.",
};

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
            <li><strong className="text-foreground">Websites & Care</strong> — clean builds, working intake/contact, basic SEO, and month-to-month maintenance.</li>
            <li><strong className="text-foreground">Tech help</strong> — installs/config, basic automations, and training so your team can actually use what&apos;s set up.</li>
            <li><strong className="text-foreground">Operations support</strong> — checklists, simple workflows, and light analytics so you can see what&apos;s working.</li>
          </ul>
        </div>

        {/* How we work */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold gradient-text">How we work</h2>
          <p className="text-foreground"><strong>Assess → Implement → Retain</strong></p>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Assess</strong> — quick discovery of goals, budget, and must-haves.</li>
            <li><strong className="text-foreground">Implement</strong> — build the essentials first—no upsell fluff.</li>
            <li><strong className="text-foreground">Retain</strong> — ongoing updates and small improvements month-to-month.</li>
          </ol>
        </div>

        {/* Why Syboh */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold gradient-text">Why Syboh</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Local & responsive — Lincoln, NE roots; we actually show up.</li>
            <li>Predictable pricing — clear scope and month-to-month care.</li>
            <li>Practical, not flashy — we ship what you need and document it.</li>
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


