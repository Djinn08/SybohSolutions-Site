import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { CtaBanner } from "@/components/ui/cta-banner";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
          <span>Operator-first</span>
          <span className="text-foreground">•</span>
          <span>Real-world ROI</span>
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          {COMPANY.tagline}
        </h1>
        <p className="text-balance text-muted-foreground mx-auto mt-4 max-w-2xl">
          Design. Install. Train. Scale. We help operators deploy high-ROI systems
          that pay back fast.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href={COMPANY.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-6 text-background transition-colors hover:opacity-90"
          >
            Book a consult
          </Link>
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-md border px-6 hover:bg-muted"
          >
            Explore services
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Hospitality Training",
            desc: "Tighter service, happier guests, higher check averages.",
            href: "/services/hospitality-training",
          },
          {
            title: "Operator Tech Installs",
            desc: "Self-pour beer, vending, and high-ROI systems.",
            href: "/services/operator-tech-installs",
          },
          {
            title: "Vending Machines",
            desc: "From placement to optimization and cash-flow.",
            href: "/services/vending",
          },
        ].map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="rounded-xl border p-6 transition hover:bg-muted"
          >
            <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
            <p className="text-muted-foreground mt-2 text-sm">{s.desc}</p>
          </Link>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">How we work</h2>
        <ol className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            { title: "Assess", desc: "We map goals, constraints, and ROI drivers." },
            { title: "Install/Train", desc: "Deploy systems and upskill your team." },
            { title: "Optimize", desc: "Iterate to drive cash-flow and retention." },
          ].map((step, i) => (
            <li key={step.title} className="rounded-xl border p-5">
              <div className="text-sm text-muted-foreground">Step {i + 1}</div>
              <div className="mt-2 text-lg font-medium">{step.title}</div>
              <p className="text-muted-foreground mt-1 text-sm">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBanner />
    </main>
  );
}
