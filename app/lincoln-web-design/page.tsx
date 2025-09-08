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

      <main className="mx-auto max-w-4xl px-4 py-12 space-y-16">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Web Design & SEO for Small Businesses in Lincoln, NE
          </h1>
          <p className="text-lg">
            Operator-first sites that load fast, rank locally, and come with ongoing care so you never fall behind.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="rounded-xl px-5 py-3 bg-lime-400 text-black font-medium">
              Get a quote
            </Link>
            <Link href="/work" className="rounded-xl px-5 py-3 border border-white/30">
              See client work
            </Link>
          </div>
          <p className="text-sm">Or call <a className="underline" href="tel:+14024136279">(402) 413-6279</a></p>
        </section>

        {/* Benefits */}
        <section className="grid gap-6">
          <h2 className="text-2xl font-semibold">What you get</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom build with modern stack, tuned for speed and Core Web Vitals.</li>
            <li>Local SEO + Google Business Profile support for Lincoln visibility.</li>
            <li>Content edits, backups, and security updates via Care Plans.</li>
            <li>Hosting, SSL, analytics, and event tracking configured.</li>
          </ul>
        </section>

        {/* Pricing snapshot */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Simple pricing</h2>
          <p>Typical builds: <strong>$1.5k–$4k</strong>. Care Plans from <strong>$149/mo</strong>.</p>
          <p className="text-sm">Transparent scope before we start. Ask about rev-share or staged rollouts.</p>
          <Link href="/add-ons" className="underline">See services & care plans →</Link>
        </section>

        {/* Portfolio teaser */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Recent Lincoln projects</h2>
          <p>From breweries to studios, we build sites that drive bookings and foot traffic.</p>
          <Link href="/work" className="underline">Browse the portfolio →</Link>
        </section>

        {/* Local SEO & Areas */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Local SEO for Lincoln</h2>
          <p>
            We optimize for neighborhoods and nearby towns—Downtown, Near South, University Place, Waverly, Bennet, and more—so you show up when customers search.
          </p>
        </section>

        {/* Map embed (city view) */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">We serve Lincoln, NE</h2>
          <div className="aspect-video w-full overflow-hidden rounded-2xl">
            <iframe
              title="Lincoln, NE Map"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Lincoln,NE&output=embed">
            </iframe>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">FAQs</h2>
          <details><summary className="cursor-pointer font-medium">How long does a project take?</summary>
            <p className="mt-2">2–6 weeks depending on scope and content readiness.</p>
          </details>
          <details><summary className="cursor-pointer font-medium">Can you work with my existing content or brand?</summary>
            <p className="mt-2">Yes. We tighten copy, apply your brand, and fill gaps where needed.</p>
          </details>
          <details><summary className="cursor-pointer font-medium">Do you provide hosting and maintenance?</summary>
            <p className="mt-2">Yes—hosting, SSL, updates, monitoring, and support are included in Care Plans.</p>
          </details>
        </section>

        {/* Final CTA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Ready to grow?</h2>
          <p>Tell us about your business and we&apos;ll propose the fastest path to value.</p>
          <div className="flex gap-3">
            <Link href="/contact" className="rounded-xl px-5 py-3 bg-lime-400 text-black font-medium">
              Start a project
            </Link>
            <Link href="/add-ons" className="rounded-xl px-5 py-3 border border-white/30">
              View services
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
