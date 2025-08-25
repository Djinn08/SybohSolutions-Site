"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  function validateForm(formData: FormData): boolean {
    const errors: Record<string, string> = {};
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters long";
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
      errors.email = "Please enter a valid email address";
    }

    if (!message || message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function onSubmit(formData: FormData) {
    setStatus("submitting");
    setError("");
    setValidationErrors({});

    if (!validateForm(formData)) {
      setStatus("error");
      setError("Please fix the validation errors below.");
      return;
    }

    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      // Check content type before parsing JSON
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error("Server returned non-JSON response");
      }
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }
      
      if (!data.ok) {
        throw new Error(data.error || "Failed to send message");
      }
      
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight gradient-text">Contact</h1>
      <p className="text-muted-foreground mt-2">
        Tell us about your goals. We&apos;ll reply within one business day.
      </p>
      <form
        className="mt-8 grid gap-4"
        action={onSubmit}
      >
        <div>
          <label className="block text-sm font-medium">Name *</label>
          <input 
            name="name" 
            required 
            className={`mt-1 w-full rounded-md border bg-background p-2 focus:outline-none focus:ring-2 focus:ring-accent-teal/50 ${
              validationErrors.name ? 'border-red-500' : 'border-muted'
            }`} 
          />
          {validationErrors.name && (
            <p className="mt-1 text-sm text-red-400">{validationErrors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input 
            name="email" 
            type="email" 
            required 
            className={`mt-1 w-full rounded-md border bg-background p-2 focus:outline-none focus:ring-2 focus:ring-accent-teal/50 ${
              validationErrors.email ? 'border-red-500' : 'border-muted'
            }`} 
          />
          {validationErrors.email && (
            <p className="mt-1 text-sm text-red-400">{validationErrors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input 
            name="company" 
            className="mt-1 w-full rounded-md border border-muted bg-background p-2 focus:outline-none focus:ring-2 focus:ring-accent-teal/50" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message *</label>
          <textarea 
            name="message" 
            required 
            rows={6} 
            className={`mt-1 w-full rounded-md border bg-background p-2 focus:outline-none focus:ring-2 focus:ring-accent-teal/50 ${
              validationErrors.message ? 'border-red-500' : 'border-muted'
            }`} 
          />
          {validationErrors.message && (
            <p className="mt-1 text-sm text-red-400">{validationErrors.message}</p>
          )}
        </div>
        <button
          disabled={status === "submitting"}
          className="inline-flex h-11 items-center justify-center rounded-md gradient-bg px-6 text-background font-medium transition-all hover:opacity-90 disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <div className="rounded-md border border-green-500/20 bg-green-500/10 p-4">
            <p className="text-green-400 font-medium">Message sent successfully!</p>
            <p className="text-green-300 text-sm mt-1">We&apos;ll be in touch within one business day.</p>
          </div>
        )}
        {status === "error" && (
          <div className="rounded-md border border-red-500/20 bg-red-500/10 p-4">
            <p className="text-red-400 font-medium">Failed to send message</p>
            <p className="text-red-300 text-sm mt-1">{error}</p>
          </div>
        )}
      </form>
    </main>
  );
}


