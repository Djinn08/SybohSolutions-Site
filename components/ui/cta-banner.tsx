"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/constants";

type CtaBannerProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  href?: string;
};

export function CtaBanner({
  title = COMPANY.tagline,
  subtitle = "Design. Install. Train. Scale.",
  ctaLabel = "Book a consult",
  href = COMPANY.calendlyUrl,
}: CtaBannerProps) {
  return (
    <section className="my-16 rounded-xl border border-muted bg-muted/20 p-6 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h3 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl gradient-text">
            {title}
          </h3>
          <p className="text-balance text-muted-foreground mt-2">
            {subtitle}
          </p>
        </div>
        <Link
          className="inline-flex h-11 items-center justify-center rounded-md gradient-bg px-6 text-background font-medium transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/50 disabled:pointer-events-none disabled:opacity-50"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}


