import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Care & Support Plans | Syboh Solutions Lincoln, NE",
  description: "Choose the right monthly care plan for your website. Secure hosting, updates, SEO, and support — tailored for small businesses in Lincoln, NE.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-20 px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] tracking-tight gradient-text mb-4">
          Pricing & Plans
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transparent pricing for website builds and ongoing care. Choose the plan that fits your needs and budget.
        </p>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Additional Info Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold gradient-text mb-4">
            Why Choose Syboh Solutions?
          </h2>
          <p className="text-muted-foreground">
            We believe in transparent pricing and long-term partnerships.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-muted/10 rounded-lg p-6">
            <h3 className="font-semibold mb-3">No Hidden Fees</h3>
            <p className="text-sm text-muted-foreground">
              What you see is what you pay. No surprise charges, no upsells, no pressure to upgrade.
            </p>
          </div>
          
          <div className="bg-muted/10 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Month-to-Month Flexibility</h3>
            <p className="text-sm text-muted-foreground">
              Start with any care plan and adjust as your needs change. No long-term contracts required.
            </p>
          </div>
          
          <div className="bg-muted/10 rounded-lg p-6">
            <h3 className="font-semibold mb-3">First Month Free</h3>
            <p className="text-sm text-muted-foreground">
              Try any care plan risk-free. If you&apos;re not satisfied, you don&apos;t pay for the first month.
            </p>
          </div>
          
          <div className="bg-muted/10 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Operator-First Approach</h3>
            <p className="text-sm text-muted-foreground">
              We build and maintain systems that work for your team, not against them.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold gradient-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Common questions about our website care plans and services.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-muted/10 rounded-lg p-6">
            <h3 className="font-semibold mb-2">What counts as a &apos;small update&apos;?</h3>
            <p className="text-sm text-muted-foreground">
              Small updates include text changes, image swaps, minor layout adjustments, and basic content additions. We&apos;ll clarify what&apos;s included when you make a request.
            </p>
          </div>
          
          <div className="bg-muted/10 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Can I switch plans later?</h3>
            <p className="text-sm text-muted-foreground">
              Absolutely! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.
            </p>
          </div>
          
          <div className="bg-muted/10 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Do you offer month-to-month?</h3>
            <p className="text-sm text-muted-foreground">
              Yes, all our care plans are month-to-month with no long-term contracts. You&apos;re free to adjust or cancel as your needs change.
            </p>
          </div>
          
          <div className="bg-muted/10 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Can you migrate my existing site?</h3>
            <p className="text-sm text-muted-foreground">
              We can migrate most existing websites to our hosting and care plans. We&apos;ll assess your current setup and provide a migration plan.
            </p>
          </div>
          
          <div className="bg-muted/10 rounded-lg p-6">
            <h3 className="font-semibold mb-2">What tech do you use?</h3>
            <p className="text-sm text-muted-foreground">
              We primarily work with WordPress, but also support custom React/Next.js sites, Shopify, and other platforms. We&apos;ll recommend the best solution for your needs.
            </p>
          </div>
          
          <div className="bg-muted/10 rounded-lg p-6">
            <h3 className="font-semibold mb-2">How fast are updates handled?</h3>
            <p className="text-sm text-muted-foreground">
              Essential Care: 48 hours, Growth Care: 24 hours, Premium Care: Same day for urgent requests. Security updates are applied immediately across all plans.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-4">Ready to start?</h2>
          <Link
            href="/start-project"
            className="inline-flex h-14 items-center justify-center rounded-md gradient-bg px-8 text-background font-semibold text-lg transition-all hover:opacity-90"
          >
            Start a Project
          </Link>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
