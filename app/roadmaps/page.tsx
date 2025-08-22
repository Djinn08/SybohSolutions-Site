export default function RoadmapsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Roadmaps</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">
        Clear, staged paths: launch → stability → credit-building → growth.
      </p>

      <section className="mt-8 space-y-6">
        <details className="rounded-xl border p-4" open>
          <summary className="cursor-pointer text-lg font-medium">Vending Machines</summary>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Launch: placement, machine selection, basic routes</li>
            <li>Stability: product mix, maintenance, cash handling</li>
            <li>Credit-building: vendor terms, small credit lines</li>
            <li>Growth: expand routes, optimize ROAS</li>
          </ul>
        </details>

        <details className="rounded-xl border p-4">
          <summary className="cursor-pointer text-lg font-medium">Self-Pour / BohBar</summary>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Launch: sizing, licensing, install plan</li>
            <li>Stability: staff training, loss prevention, uptime</li>
            <li>Credit-building: equipment financing partners</li>
            <li>Growth: events, membership, per-oz margin optimization</li>
          </ul>
        </details>

        <details className="rounded-xl border p-4">
          <summary className="cursor-pointer text-lg font-medium">Hospitality Training</summary>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Launch: service standards, menu fluency</li>
            <li>Stability: pre-shift routines, table-turn playbooks</li>
            <li>Credit-building: reviews, repeat guests</li>
            <li>Growth: upsell systems, event playbooks</li>
          </ul>
        </details>

        <details className="rounded-xl border p-4">
          <summary className="cursor-pointer text-lg font-medium">Website & Branding</summary>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Launch: fast site, clear CTA, basic SEO</li>
            <li>Stability: content cadence, local SEO</li>
            <li>Credit-building: case studies, testimonials</li>
            <li>Growth: campaigns, partnerships</li>
          </ul>
        </details>
      </section>

      <div className="mt-10">
        <a
          className="inline-flex h-11 items-center justify-center rounded-md border px-6 hover:bg-muted"
          href="/api/onepager.pdf"
        >
          Download one-pager (PDF)
        </a>
      </div>
    </main>
  );
}


