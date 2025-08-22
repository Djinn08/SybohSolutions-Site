import Link from "next/link";
import { FEATURES } from "@/lib/constants";

const services = [
  { title: "Hospitality Training", href: "/services/hospitality-training", desc: "Front-of-house systems that improve guest experience and check averages." },
  { title: "Operator Tech Installs", href: "/services/operator-tech-installs", desc: "Self-pour beer, vending, and other high-ROI systems." },
  { title: "Vending Machines", href: "/services/vending", desc: "Placement, operations, routes, and cash-flow optimization." },
  { title: "Site Creation", href: "/services/site-creation", desc: "Lead-gen and small-business sites that convert." },
  ...(FEATURES.showBohBar ? [{ title: "BohBar", href: "/services/bohbar", desc: "Concept page: Coming soon." }] : []),
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight gradient-text">Services</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">
        Operator-first services: training, high-ROI installs, vending systems, and lead-gen sites.
      </p>
      <div className="mt-6">
        <a
          className="inline-flex h-10 items-center justify-center rounded-md gradient-bg px-4 text-background font-medium transition-all hover:opacity-90"
          href="/roadmaps"
        >
          View roadmaps
        </a>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="rounded-xl border border-muted p-6 transition hover:bg-muted">
            <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
            <p className="text-muted-foreground mt-2 text-sm">{s.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}


