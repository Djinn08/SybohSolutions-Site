import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { CtaBanner } from "@/components/ui/cta-banner";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="text-center">
        <div className="mb-8 flex flex-col items-center justify-center">
          <Image
            src="/images/sybohfrogtransparentbackgroundLOGO.png"
            alt="Syboh Solutions LLC"
            width={0}
            height={0}
            className="h-auto w-full max-w-md md:max-w-lg"
            priority
            unoptimized
          />
          <h1 className="text-balance text-4xl font-semibold tracking-tight gradient-text md:text-6xl mt-4">
            Syboh Solutions
          </h1>
        </div>
        <p className="text-balance text-muted-foreground mx-auto mt-4 max-w-2xl">
          Design. Install. Train. Scale. We help operators deploy high-ROI systems
          that pay back fast.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href={COMPANY.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md gradient-bg px-6 text-background font-medium transition-all hover:opacity-90"
          >
            Book a consult
          </Link>
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-md border border-muted px-6 hover:bg-muted transition-colors"
          >
            Explore services
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight gradient-text mb-6">What We Do</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Operations",
              desc: "Streamline systems and improve efficiency across your business operations.",
              href: "/services",
            },
            {
              title: "Operator Tech Installs",
              desc: "Set up POS, kiosks, displays, and hardware solutions.",
              href: "/services/operator-tech-installs",
            },
            {
              title: "SaaS Tools",
              desc: "Showcase in-house tools and digital solutions for business automation.",
              href: "/services",
            },
            {
              title: "Websites, Retainers & Optimization",
              desc: "Creation, optimization, retainers, and ongoing updates for your digital presence.",
              href: "/services/site-creation",
            },
          ].map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="rounded-xl border border-muted p-6 transition hover:bg-muted"
            >
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight gradient-text mb-6">Our Process</h2>
        <ol className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Assess", desc: "We map goals, constraints, and ROI drivers." },
            { title: "Install/Train", desc: "Deploy systems and upskill your team." },
            { title: "Optimize", desc: "Iterate to drive cash-flow and retention." },
          ].map((step, i) => (
            <li key={step.title} className="rounded-xl border border-muted p-6">
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
