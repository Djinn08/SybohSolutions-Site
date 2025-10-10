"use client";
import { useState, useEffect } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  useEffect(() => {
    // Check if reCAPTCHA is loaded
    if (typeof window !== 'undefined' && window.grecaptcha) {
      window.grecaptcha.ready(() => {
        setRecaptchaReady(true);
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);

    // Get reCAPTCHA token
    let recaptchaToken = '';
    try {
      if (window.grecaptcha && recaptchaReady) {
        recaptchaToken = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
          { action: 'contact_form' }
        );
      }
    } catch (err) {
      console.error('reCAPTCHA error:', err);
      setError('Security verification failed. Please try again.');
      setLoading(false);
      return;
    }

    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      company: fd.get("company") as string,
      message: fd.get("message") as string,
      website: fd.get("website") as string, // Honeypot field
      'g-recaptcha-response': recaptchaToken,
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
      {/* Honeypot field - hidden from humans, visible to bots */}
      <input
        type="text"
        name="website"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

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
