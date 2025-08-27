import Link from "next/link";

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

      {/* Google Form Embed */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60 min-h-[1200px] md:min-h-[1600px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfG7tJnGMp-_bqV1KbeE0JZ6SA25Tkuh18Pi8O1_C6EnbU8yg/viewform?embedded=true"
            title="Syboh Solutions Project Form"
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
        {/* Fallback Link */}
        <div className="text-center mt-6">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfG7tJnGMp-_bqV1KbeE0JZ6SA25Tkuh18Pi8O1_C6EnbU8yg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open form in a new tab
          </Link>
        </div>
      </section>
    </main>
  );
}
