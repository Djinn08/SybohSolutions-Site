export default function RoadmapsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight gradient-text">Our Process</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">
        A simple, proven approach to delivering results for your business.
      </p>

      <section className="mt-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Assess",
              desc: "We map goals, constraints, and ROI drivers to understand your unique needs and challenges.",
              icon: "📊"
            },
            {
              title: "Install/Train",
              desc: "Deploy systems and upskill your team with hands-on training and support.",
              icon: "🔧"
            },
            {
              title: "Optimize",
              desc: "Iterate to drive cash-flow and retention through continuous improvement and optimization.",
              icon: "📈"
            },
          ].map((step, i) => (
            <div key={step.title} className="rounded-xl border border-muted p-6">
              <div className="text-3xl mb-3">{step.icon}</div>
              <div className="text-sm text-muted-foreground mb-2">Step {i + 1}</div>
              <h3 className="text-lg font-semibold tracking-tight mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <a
          className="inline-flex h-11 items-center justify-center rounded-md border border-muted px-6 hover:bg-muted transition-colors"
          href="/api/onepager.pdf"
        >
          Download one-pager (PDF)
        </a>
      </div>
    </main>
  );
}


