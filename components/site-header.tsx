"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 font-medium">
          <Image
            src="/images/sybohfrogtransparentbackgroundLOGO.png"
            alt="Syboh Solutions Logo"
            width={0}
            height={0}
            className="h-8 w-auto md:h-10"
            priority
            unoptimized
          />
          <span className="text-lg font-semibold gradient-text">{COMPANY.shortName}</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV_LINKS.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link 
                key={l.href} 
                href={l.href} 
                className={`text-sm transition-colors ${
                  isActive 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/start-project"
          className="ml-6 inline-flex h-9 items-center justify-center rounded-md gradient-bg px-4 text-background font-medium transition-all hover:opacity-90"
        >
          Book a consult
        </Link>
      </div>
    </header>
  );
}


