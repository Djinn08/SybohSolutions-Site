import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { CtaBanner } from "@/components/ui/cta-banner";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="text-center relative">
        <div className="mb-6 flex flex-col items-center justify-center">
          <Image
            src="/images/sybohfrogtransparentbackgroundLOGO.png"
            alt="Syboh Solutions LLC"
            width={0}
            height={0}
            className="h-auto w-full max-w-sm md:max-w-md"
            priority
            unoptimized
          />
          <h1 className="text-balance text-4xl font-semibold tracking-tight gradient-text md:text-6xl mt-4">
            Syboh Solutions
          </h1>
        </div>
        <p className="text-balance text-2xl font-medium mx-auto mt-6 max-w-3xl leading-relaxed">
          Design. Install. Train. Scale. We help operators deploy high-ROI systems
          that pay back fast.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href={COMPANY.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md gradient-bg px-8 text-background font-medium transition-all hover:opacity-90"
          >
            Book a consult
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 items-center justify-center rounded-md border border-muted px-8 hover:bg-muted transition-colors"
          >
            Explore services
          </Link>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-muted-foreground" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight gradient-text mb-6">What We Do</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Operations",
              desc: "Cut wasted steps. Boost profits. We streamline workflows so your team spends less time fighting systems and more time driving revenue.",
              href: "/services/operations",
            },
            {
              title: "Tech Installs",
              desc: "Tools that work on day one. From POS to kiosks and displays, we install tech that's reliable, intuitive, and ready for your operators.",
              href: "/services/tech-installs",
            },
            {
              title: "SaaS Tools",
              desc: "Automate the grind. Scale smarter. Custom-built digital tools that reduce repetitive tasks and give operators back their time.",
              href: "/services/saas-tools",
            },
            {
              title: "Websites & Optimization",
              desc: "Your digital front door — always open. Websites built to convert, with ongoing updates and optimization so you never fall behind.",
              href: "/services/websites",
            },
          ].map((s) => (
            <div key={s.title} className="rounded-xl border border-muted p-6">
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{s.desc}</p>
              <Link
                href={s.href}
                className="inline-flex h-10 items-center justify-center rounded-md gradient-bg px-4 text-background font-medium transition-all hover:opacity-90 mt-4"
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
