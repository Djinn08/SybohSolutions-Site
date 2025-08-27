"use client";

import ResponsiveIframe from "@/components/ResponsiveIframe";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
          Contact
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to start your project? Fill out the form below and we&apos;ll get back to you within one business day.
        </p>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <ResponsiveIframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfG7tJnGMp-_bqV1KbeE0JZ6SA25Tkuh18Pi8O1_C6EnbU8yg/viewform?embedded=true"
          title="Syboh Solutions Contact Form"
        />
        
        <p className="text-center text-sm text-muted-foreground mt-6">
          Please allow up to 1 business day for a reply.
        </p>
      </section>
    </main>
  );
}


