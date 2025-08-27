"use client";
import { useState } from "react";

type Props = {
  variant?: "contact" | "project";
};

export default function ContactForm({ variant = "contact" }: Props) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true); setOk(null);

        const form = e.currentTarget as HTMLFormElement;
        const fd = new FormData(form);

        const payload = {
          name: fd.get("name") as string,
          email: fd.get("email") as string,
          phone: fd.get("phone") as string,
          company: fd.get("company") as string,
          message: fd.get("message") as string,
        };

        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        setOk(data.success);
        setLoading(false);
        if (data.success) form.reset();
      }}
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

      {ok === true && <p className="text-emerald-400">Thanks! We&apos;ll get back to you within 1 business day.</p>}
      {ok === false && <p className="text-rose-400">Something went wrong. Please email info@sybohsolutions.com.</p>}
    </form>
  );
}
