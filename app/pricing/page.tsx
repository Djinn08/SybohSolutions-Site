import PricingSection from "@/components/PricingSection";
import { CtaBanner } from "@/components/ui/cta-banner";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
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

      <CtaBanner />
    </main>
  );
}
