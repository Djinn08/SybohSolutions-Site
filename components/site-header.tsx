"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 font-medium">
          <Image
            src="/images/sybohfrogtransparentbackgroundLOGO.png"
            alt="Syboh Solutions Logo"
            width={40}
            height={40}
            className="h-8 w-auto md:h-10"
            priority
          />
          <span className="text-lg font-semibold gradient-text">{COMPANY.shortName}</span>
        </Link>
        
        {/* Desktop Navigation */}
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

        {/* Desktop CTA Button */}
        <Link
          href="/start-project"
          className="hidden md:inline-flex h-9 items-center justify-center rounded-md gradient-bg px-4 text-background font-medium transition-all hover:opacity-90 whitespace-nowrap"
        >
          Book a consult
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-muted hover:bg-muted/50 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/50" onClick={closeMobileMenu} />
          <div className="fixed inset-y-0 right-0 z-50 w-64 bg-background border-l border-muted shadow-lg">
            <div className="flex flex-col p-6 space-y-4">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold gradient-text">Menu</span>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-muted/50 rounded-md transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-3">
                {NAV_LINKS.map((l) => {
                  const isActive = pathname === l.href;
                  return (
                    <Link 
                      key={l.href} 
                      href={l.href} 
                      onClick={closeMobileMenu}
                      className={`text-base py-2 px-3 rounded-md transition-colors ${
                        isActive 
                          ? "bg-muted/20 text-foreground" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/10"
                      }`}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-muted">
                <Link
                  href="/start-project"
                  onClick={closeMobileMenu}
                  className="w-full inline-flex h-12 items-center justify-center rounded-md gradient-bg text-background font-medium transition-all hover:opacity-90"
                >
                  Book a consult
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


