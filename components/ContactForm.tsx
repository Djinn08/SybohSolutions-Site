"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);

    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      company: fd.get("company") as string,
      message: fd.get("message") as string,
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
        form.reset();
      } else {
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError("Failed to send message. Please try again or email us directly at info@sybohsolutions.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl space-y-4 rounded-2xl border border-white/10 bg-neutral-900/50 p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm text-white/70">Name</label>
          <input name="name" required className="w-full rounded-lg bg-neutral-800 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400"/>
        </div>
        <div>
          <label className="mb-1 block text-sm text-white/70">Email</label>
          <input type="email" name="email" required className="w-full rounded-lg bg-neutral-800 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400"/>
        </div>
        <div>
          <label className="mb-1 block text-sm text-white/70">Phone</label>
          <input name="phone" className="w-full rounded-lg bg-neutral-800 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400"/>
        </div>
        <div>
          <label className="mb-1 block text-sm text-white/70">Company (optional)</label>
          <input name="company" className="w-full rounded-lg bg-neutral-800 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400"/>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm text-white/70">Message / Question</label>
        <textarea name="message" rows={6} required className="w-full rounded-lg bg-neutral-800 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400"/>
      </div>

      <button
        disabled={loading}
        className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 font-medium text-neutral-900 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send message"}
      </button>

      {success && (
        <div className="rounded-lg bg-emerald-900/50 border border-emerald-500/20 p-4">
          <p className="text-emerald-400">Message sent successfully! We&apos;ll get back to you within one business day.</p>
        </div>
      )}
      
      {error && (
        <div className="rounded-lg bg-red-900/50 border border-red-500/20 p-4">
          <p className="text-red-400">{error}</p>
        </div>
      )}
    </form>
  );
}
