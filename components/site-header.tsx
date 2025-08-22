import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <span className="h-6 w-6 rounded bg-foreground" />
          <span>{COMPANY.shortName}</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href={COMPANY.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-6 inline-flex h-9 items-center justify-center rounded-md bg-foreground px-4 text-background"
        >
          Book a consult
        </Link>
      </div>
    </header>
  );
}


