import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-muted bg-background/95">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} <span className="gradient-text font-semibold">Syboh Solutions LLC</span></p>
          <nav className="flex gap-4">
            <Link href="/legal/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}


