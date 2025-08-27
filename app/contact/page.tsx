"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        e.currentTarget.reset();
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
          Contact
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to start your project? Fill out the form and we&apos;ll get back to you within one business day.
        </p>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-2xl px-6 pb-16">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-white/10 bg-neutral-900/50 p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">Name *</label>
              <input
                name="name"
                required
                className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">Phone</label>
              <input
                name="phone"
                className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">Company</label>
              <input
                name="company"
                className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">Message *</label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 font-medium text-neutral-900 disabled:opacity-60 transition-all hover:opacity-90"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Toast */}
          {success && (
            <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
              <p className="text-green-400 font-medium">Message sent successfully!</p>
              <p className="text-green-300 text-sm mt-1">We&apos;ll get back to you within one business day.</p>
            </div>
          )}

          {/* Error Toast */}
          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
              <p className="text-red-400 font-medium">Failed to send message</p>
              <p className="text-red-300 text-sm mt-1">{error}</p>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}


