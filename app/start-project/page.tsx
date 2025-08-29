import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project with Syboh Solutions | Lincoln, NE",
  description: "Ready to upgrade your business tech or website? Start your project with Syboh Solutions. Practical, local, and operator-first.",
};

export default function StartProjectPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
          Start a Project
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Tell us about your project. This detailed form helps us quote accurately.
        </p>
      </section>

      {/* Project Form CTA */}
      <section className="mx-auto max-w-2xl px-6 pb-16">
        <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-12 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 rounded-full gradient-bg mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
                         <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
             <p className="text-muted-foreground mb-6">
               Your better website is just a few steps away!
             </p>
             <p className="text-muted-foreground">
               Click the button below to access our detailed project intake form. This helps us provide you with an accurate quote and timeline.
             </p>
          </div>
          
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfG7tJnGMp-_bqV1KbeE0JZ6SA25Tkuh18Pi8O1_C6EnbU8yg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-4 font-semibold text-neutral-900 transition-all hover:opacity-90"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Start a Project
          </Link>
          
          <p className="text-sm text-muted-foreground mt-4">
            Opens in a new tab • Takes about 5-10 minutes to complete
          </p>
        </div>
      </section>
    </main>
  );
}
