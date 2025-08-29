import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Syboh Solutions | Web & Tech Support in Lincoln, NE",
  description: "Meet the brothers behind Syboh Solutions in Lincoln, NE. Practical web, SaaS, and tech help built for small business operators.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-10 text-neutral-800">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-4xl font-serif">About Syboh</h1>
        <p className="text-lg text-neutral-600">
          Operator-first web + tech, based in Lincoln, NE. We&apos;re two brothers building straightforward websites
          and practical tech for small businesses. Our goal is simple: make your tools work, keep them maintained,
          and be easy to reach when you need help.
        </p>
      </header>

      {/* What we do */}
      <section className="space-y-3">
        <h2 className="text-2xl font-serif">What we do</h2>
        <ul className="list-disc pl-5 space-y-1 text-neutral-700">
          <li><strong>Websites & Care</strong> — clean builds, working intake/contact, basic SEO, and month-to-month maintenance.</li>
          <li><strong>Tech help</strong> — installs/config, basic automations, and training so your team can actually use what&apos;s set up.</li>
          <li><strong>Operations support</strong> — checklists, simple workflows, and light analytics so you can see what&apos;s working.</li>
        </ul>
      </section>

      {/* How we work */}
      <section className="space-y-3">
        <h2 className="text-2xl font-serif">How we work</h2>
        <p><strong>Assess → Implement → Retain</strong></p>
        <ol className="list-decimal pl-5 space-y-1 text-neutral-700">
          <li><strong>Assess</strong> — quick discovery of goals, budget, and must-haves.</li>
          <li><strong>Implement</strong> — build the essentials first—no upsell fluff.</li>
          <li><strong>Retain</strong> — ongoing updates and small improvements month-to-month.</li>
        </ol>
      </section>

      {/* Why Syboh */}
      <section className="space-y-3">
        <h2 className="text-2xl font-serif">Why Syboh</h2>
        <ul className="list-disc pl-5 space-y-1 text-neutral-700">
          <li>Local & responsive — Lincoln, NE roots; we actually show up.</li>
          <li>Predictable pricing — clear scope and month-to-month care.</li>
          <li>Practical, not flashy — we ship what you need and document it.</li>
        </ul>
      </section>

      {/* Who you'll work with */}
      <section className="space-y-3">
        <h2 className="text-2xl font-serif">Who you&apos;ll work with</h2>
        <ul className="space-y-2 text-neutral-700">
          <li><strong>Connor</strong> — Design, Client Comms, Sales, Operations, Training, Installations & Business Solutions.</li>
          <li><strong>Brendan</strong> — SaaS, Web Development, Custom Builds, Integrations, and Technical Solutions.</li>
        </ul>
      </section>

      {/* Closing CTA */}
      <footer className="pt-6">
        <p className="text-neutral-700">Ready to get started?</p>
        <a href="/start-project" className="mt-3 inline-block rounded-xl border border-neutral-700 px-4 py-2 hover:bg-neutral-100">
          Book a consult
        </a>
      </footer>
    </main>
  );
}


