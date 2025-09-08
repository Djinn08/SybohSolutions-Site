import Link from 'next/link';
import Script from 'next/script';

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Syboh Solutions',
  url: 'https://sybohsolutions.com/',
  telephone: '+1-402-413-6279',
  areaServed: 'Lincoln NE',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lincoln',
    addressRegion: 'NE',
    addressCountry: 'US'
  },
  sameAs: []
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a small-business website cost in Lincoln?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most builds range from $1.5k–$4k depending on scope. Ongoing care plans start at $149/month.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you rebuild or migrate WordPress sites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We migrate to modern stacks (like Next.js) or clean up existing WordPress for speed, security, and SEO.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you manage Google Business Profiles (GBP)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes—setup, posting, review prompts, and local SEO to improve visibility in Lincoln searches.'
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script id="ld-local" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
      <Script id="ld-faq" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-16 px-6">
          <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
            Web Design & SEO for Small Businesses in Lincoln, NE
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Operator-first sites that load fast, rank locally, and come with ongoing care so you never fall behind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg gradient-bg px-6 py-3 text-background font-medium hover:opacity-90 transition-all">
              Get a quote
            </Link>
            <Link href="/work" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-white font-medium hover:bg-white/10 transition-all">
              See client work
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">Or call <a className="underline hover:text-foreground transition-colors" href="tel:+14024136279">(402) 413-6279</a></p>
        </section>

        {/* Content Sections */}
        <section className="mx-auto max-w-3xl px-6 pb-16 space-y-12">

          {/* Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold gradient-text">What you get</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Custom build with modern stack</strong> — tuned for speed and Core Web Vitals.</li>
              <li><strong className="text-foreground">Local SEO + Google Business Profile</strong> — support for Lincoln visibility.</li>
              <li><strong className="text-foreground">Content edits, backups, and security updates</strong> — via Care Plans.</li>
              <li><strong className="text-foreground">Hosting, SSL, analytics, and event tracking</strong> — configured.</li>
            </ul>
          </div>

          {/* Pricing snapshot */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold gradient-text">Simple pricing</h2>
            <p className="text-muted-foreground">Typical builds: <strong className="text-foreground">$1.5k–$4k</strong>. Care Plans from <strong className="text-foreground">$149/mo</strong>.</p>
            <p className="text-sm text-muted-foreground">Transparent scope before we start. Ask about rev-share or staged rollouts.</p>
            <Link href="/add-ons" className="inline-flex items-center text-accent-teal hover:text-accent-lime transition-colors">
              See services & care plans →
            </Link>
          </div>

          {/* Portfolio teaser */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold gradient-text">Recent Lincoln projects</h2>
            <p className="text-muted-foreground">From breweries to studios, we build sites that drive bookings and foot traffic.</p>
            <Link href="/work" className="inline-flex items-center text-accent-teal hover:text-accent-lime transition-colors">
              Browse the portfolio →
            </Link>
          </div>

          {/* Local SEO & Areas */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold gradient-text">Local SEO for Lincoln</h2>
            <p className="text-muted-foreground">
              We optimize for neighborhoods and nearby towns—Downtown, Near South, University Place, Waverly, Bennet, and more—so you show up when customers search.
            </p>
          </div>

          {/* Map embed (city view) - temporarily removed */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold gradient-text">We serve Lincoln, NE</h2>
            <p className="text-muted-foreground">
              We provide web design and development services throughout Lincoln, Nebraska and surrounding areas.
            </p>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold gradient-text">FAQs</h2>
            <div className="space-y-3">
              <details className="rounded-lg border border-white/10 bg-neutral-900/50 p-4">
                <summary className="cursor-pointer font-medium text-foreground hover:text-accent-teal transition-colors">How long does a project take?</summary>
                <p className="mt-2 text-muted-foreground">2–6 weeks depending on scope and content readiness.</p>
              </details>
              <details className="rounded-lg border border-white/10 bg-neutral-900/50 p-4">
                <summary className="cursor-pointer font-medium text-foreground hover:text-accent-teal transition-colors">Can you work with my existing content or brand?</summary>
                <p className="mt-2 text-muted-foreground">Yes. We tighten copy, apply your brand, and fill gaps where needed.</p>
              </details>
              <details className="rounded-lg border border-white/10 bg-neutral-900/50 p-4">
                <summary className="cursor-pointer font-medium text-foreground hover:text-accent-teal transition-colors">Do you provide hosting and maintenance?</summary>
                <p className="mt-2 text-muted-foreground">Yes—hosting, SSL, updates, monitoring, and support are included in Care Plans.</p>
              </details>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center pt-8">
            <h2 className="text-2xl font-semibold gradient-text mb-4">Ready to grow?</h2>
            <p className="text-muted-foreground mb-6">Tell us about your business and we&apos;ll propose the fastest path to value.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg gradient-bg px-6 py-3 text-background font-medium hover:opacity-90 transition-all">
                Start a project
              </Link>
              <Link href="/add-ons" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-white font-medium hover:bg-white/10 transition-all">
                View services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
