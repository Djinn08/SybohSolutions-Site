import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add-On Services | Tech Installs, SaaS Tools, Operations",
  description: "Expand your business capabilities with add-ons: SaaS tools, tech installs, operations support, and more.",
};

export default function AddOnsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
          Add-Ons
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Extra help when you need it — SaaS tools, tech installs, and operations support.
        </p>
      </section>

      {/* Add-Ons Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* SaaS Tools */}
          <div className="rounded-2xl border border-white/10 bg-muted/10 p-8 hover:bg-white/5 transition-colors">
            <h3 className="text-2xl font-semibold mb-4">SaaS Tools</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Custom automation workflows</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Data integration & reporting</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>API development & maintenance</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>User training & documentation</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-muted px-4 py-2 text-sm font-medium hover:bg-muted/20 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Tech Installs */}
          <div className="rounded-2xl border border-white/10 bg-muted/10 p-8 hover:bg-white/5 transition-colors">
            <h3 className="text-2xl font-semibold mb-4">Tech Installs</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>POS system setup & training</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Digital displays & kiosks</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Network infrastructure</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Hardware maintenance</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-muted px-4 py-2 text-sm font-medium hover:bg-muted/20 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Operations */}
          <div className="rounded-2xl border border-white/10 bg-muted/10 p-8 hover:bg-white/5 transition-colors">
            <h3 className="text-2xl font-semibold mb-4">Operations</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Process optimization</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Workflow automation</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Team training & onboarding</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                <span>Performance analytics</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-muted px-4 py-2 text-sm font-medium hover:bg-muted/20 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
