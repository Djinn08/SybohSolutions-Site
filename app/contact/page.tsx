"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(formData: FormData) {
    setStatus("submitting");
    setError("");
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight gradient-text">Contact</h1>
      <p className="text-muted-foreground mt-2">
        Tell us about your goals. We'll reply within one business day.
      </p>
      <form
        className="mt-8 grid gap-4"
        action={onSubmit}
      >
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" required className="mt-1 w-full rounded-md border border-muted bg-background p-2 focus:outline-none focus:ring-2 focus:ring-accent-teal/50" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input name="email" type="email" required className="mt-1 w-full rounded-md border border-muted bg-background p-2 focus:outline-none focus:ring-2 focus:ring-accent-teal/50" />
        </div>
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input name="company" className="mt-1 w-full rounded-md border border-muted bg-background p-2 focus:outline-none focus:ring-2 focus:ring-accent-teal/50" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" required rows={6} className="mt-1 w-full rounded-md border border-muted bg-background p-2 focus:outline-none focus:ring-2 focus:ring-accent-teal/50" />
        </div>
        <button
          disabled={status === "submitting"}
          className="inline-flex h-11 items-center justify-center rounded-md gradient-bg px-6 text-background font-medium transition-all hover:opacity-90 disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p className="text-green-400">Thanks! We'll be in touch shortly.</p>
        )}
        {status === "error" && (
          <p className="text-red-400">{error}</p>
        )}
      </form>
    </main>
  );
}


