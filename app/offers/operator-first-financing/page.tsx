import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function OperatorFirstFinancingPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-6">
          Operator-First Financing
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We can install high-impact systems upfront and structure payback via revenue share. 
          Example: 50/50 until covered, then 20/80 with maintenance. Terms vary by business and usage.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full gradient-bg mx-auto mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Ownership until payoff</h3>
          <p className="text-sm text-muted-foreground">
            We retain ownership of equipment until the system is fully paid off through revenue sharing.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full gradient-bg mx-auto mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Transparent reporting</h3>
          <p className="text-sm text-muted-foreground">
            Clear visibility into revenue splits, payback progress, and system performance metrics.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full gradient-bg mx-auto mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Maintenance included</h3>
          <p className="text-sm text-muted-foreground">
            Ongoing support, updates, and training to keep your systems running smoothly.
          </p>
        </div>
      </div>

      <div className="bg-muted/10 rounded-lg p-6 mb-8">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Note:</strong> Final terms set after site assessment. Subject to contract.
        </p>
      </div>

      <div className="text-center">
        <Link
          href={COMPANY.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-md gradient-bg px-8 text-background font-medium transition-all hover:opacity-90"
        >
          Book a Consult
        </Link>
      </div>
    </main>
  );
}
