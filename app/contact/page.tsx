"use client";

import { useState, useRef, useEffect } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Check if reCAPTCHA is loaded
    if (typeof window !== 'undefined' && window.grecaptcha) {
      window.grecaptcha.ready(() => {
        setRecaptchaReady(true);
      });
    }
  }, []);

  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};
    
    if (!formData.get("name")?.toString().trim()) {
      errors.name = "Name is required";
    }
    
    const email = formData.get("email")?.toString().trim();
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.get("message")?.toString().trim()) {
      errors.message = "Message is required";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);
    setValidationErrors({});

    const formData = new FormData(e.currentTarget);
    
    if (!validateForm(formData)) {
      setLoading(false);
      return;
    }

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
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
      website: formData.get("website") as string, // Honeypot field
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
        formRef.current?.reset();
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        formRef.current?.reset();
      }
    } catch {
      setError("Failed to send message. Please check your connection and try again.");
      formRef.current?.reset();
    } finally {
      setLoading(false);
    }
  };

  const getInputClassName = (fieldName: string) => {
    const baseClasses = "w-full rounded-lg bg-neutral-800 px-4 py-3 text-white outline-none ring-1 transition-all";
    const errorClasses = validationErrors[fieldName] 
      ? "ring-red-500 focus:ring-2 focus:ring-red-400" 
      : "ring-white/10 focus:ring-2 focus:ring-emerald-400";
    
    return `${baseClasses} ${errorClasses}`;
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
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-white/10 bg-neutral-900/50 p-8">
          {/* Honeypot field - hidden from humans, visible to bots */}
          <input
            type="text"
            name="website"
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                name="name"
                required
                className={getInputClassName("name")}
                placeholder="Your full name"
              />
              {validationErrors.name && (
                <p className="mt-1 text-sm text-red-400">{validationErrors.name}</p>
              )}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className={getInputClassName("email")}
                placeholder="your@email.com"
              />
              {validationErrors.email && (
                <p className="mt-1 text-sm text-red-400">{validationErrors.email}</p>
              )}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">Phone</label>
              <input
                name="phone"
                type="tel"
                className={getInputClassName("phone")}
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">Company</label>
              <input
                name="company"
                className={getInputClassName("company")}
                placeholder="Your company name"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className={getInputClassName("message")}
              placeholder="Tell us about your project, timeline, and goals..."
            />
            {validationErrors.message && (
              <p className="mt-1 text-sm text-red-400">{validationErrors.message}</p>
            )}
          </div>

          {/* Success/Error Messages */}
          {success && (
            <div className="rounded-lg bg-green-500/20 border border-green-500/30 p-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-green-400 font-medium">Message sent successfully! We&apos;ll get back to you within one business day.</p>
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-lg bg-red-500/20 border border-red-500/30 p-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-400 font-medium">{error}</p>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-3 rounded-lg gradient-bg px-6 py-4 font-semibold text-neutral-900 transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <LoadingSpinner size="sm" className="text-neutral-900" />
                Sending Message...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </form>
      </section>
    </main>
  );
}


