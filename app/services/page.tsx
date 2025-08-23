import Link from "next/link";
import { FEATURES } from "@/lib/constants";

const services = [
  { title: "Operations Optimization", href: "/services", desc: "Streamline systems and improve efficiency across your business operations." },
  { title: "On-Site Tech Installations", href: "/services/operator-tech-installs", desc: "Set up POS, kiosks, displays, and hardware solutions." },
  { title: "SaaS Tools & Digital Products", href: "/services", desc: "Showcase in-house tools and digital solutions for business automation." },
  { title: "Websites & Ongoing Support", href: "/services/site-creation", desc: "Creation, optimization, retainers, and updates for your digital presence." },
  ...(FEATURES.showBohBar ? [{ title: "BohBar", href: "/services/bohbar", desc: "Concept page: Coming soon." }] : []),
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight gradient-text">What We Do</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">
        Comprehensive solutions to help your business operate more efficiently and grow sustainably.
      </p>
      <div className="mt-6">
        <a
          className="inline-flex h-10 items-center justify-center rounded-md gradient-bg px-4 text-background font-medium transition-all hover:opacity-90"
          href="/roadmaps"
        >
          View our process
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


