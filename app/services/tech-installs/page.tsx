"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const services = [
  {
    title: "Operations",
    headline: "Cut wasted steps. Boost profits.",
    expanded: "We streamline workflows across your business so operators spend less time fighting inefficiencies and more time driving revenue. Our approach is hands-on: we map your current systems, eliminate redundancies, and design processes that scale.",
    bullets: [
      "Identify bottlenecks and inefficiencies",
      "Standardize workflows for consistency", 
      "Reduce labor waste and boost ROI",
      "Build scalable systems operators actually use"
    ],
    placeholder: "Case Study Coming Soon — Example of reduced labor hours or improved throughput."
  },
  {
    title: "Tech Installs",
    headline: "Tools that work on day one — without the big upfront bill.",
    expanded: "Most vendors drop a giant invoice and disappear. We don't. We install the tech you need—self-pour walls, POS kiosks, displays—and offer flexible ways to pay so you can start seeing returns immediately.",
    bullets: [
      "Straight Install: Pay once, own it outright with install and handoff",
      "Operator-First Financing: Install upfront, pay through revenue share",
      "Maintenance-First: You buy/install, we keep it humming with support",
      "End-to-end setup with operator training on all models"
    ],
    placeholder: "Proof Point Coming Soon — Example install or operator feedback."
  },
  {
    title: "SaaS Tools",
    headline: "Automate the grind. Scale smarter.",
    expanded: "We design and deploy digital tools that eliminate repetitive tasks, giving operators back valuable time. Whether it's reporting dashboards, scheduling tools, or custom automation, our SaaS solutions grow alongside your operation.",
    bullets: [
      "Automate manual or repetitive workflows",
      "Custom tools tailored to your business model",
      "Scalable solutions that evolve with your needs",
      "Data-driven insights to support decisions"
    ],
    placeholder: "Demo or Screenshot Coming Soon — Example SaaS dashboard."
  },
  {
    title: "Websites & Optimization",
    headline: "Your digital front door — always open.",
    expanded: "We build websites that don't just look good — they convert. From launch to long-term optimization, we maintain your digital presence so it stays sharp, fast, and profitable.",
    bullets: [
      "Modern, responsive website design",
      "SEO, analytics, and conversion optimization",
      "Ongoing updates and retainer support",
      "Integrated digital strategy to grow traffic and sales"
    ],
    placeholder: "Metrics Coming Soon — Example increase in traffic or conversions."
  },
];

export default function TechInstallsPage() {
  const [currentService, setCurrentService] = useState(1); // Start on Tech Installs
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 12000); // Change every 12 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToService = (index: number) => {
    setCurrentService(index);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
          Tech Installs
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tools that work on day one. From POS to kiosks and displays, we install tech that&apos;s reliable, intuitive, and ready for your operators.
        </p>
      </section>

      {/* Carousel Section */}
      <section className="relative min-h-[500px] flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        <div className="relative w-full max-w-6xl mx-auto px-6">
          {/* Carousel Container */}
          <div 
            className="relative overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentService * 100}%)` }}
            >
                             {services.map((service) => (
                 <div 
                   key={service.title}
                   className="w-full flex-shrink-0 px-8 py-16 text-center"
                 >
                   <div className="max-w-4xl mx-auto">
                     <h2 className="text-3xl font-semibold tracking-tight mb-4">
                       {service.title}
                     </h2>
                     <h3 className="text-2xl font-medium gradient-text mb-6">
                       {service.headline}
                     </h3>
                     <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                       {service.expanded}
                     </p>
                     
                     {/* Key Bullet Points */}
                     <div className="grid gap-3 max-w-2xl mx-auto mb-8">
                       {service.bullets.map((bullet, bulletIndex) => (
                         <div key={bulletIndex} className="flex items-start gap-3">
                           <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                           <p className="text-muted-foreground text-left">{bullet}</p>
                         </div>
                       ))}
                     </div>
                     
                     {/* Enhanced content for Tech Installs */}
                     {service.title === "Tech Installs" ? (
                       <div className="space-y-8 max-w-4xl mx-auto">
                         {/* Financing Options */}
                         <div className="grid gap-4 md:grid-cols-3">
                           <div className="bg-muted/20 rounded-lg p-4 border border-muted">
                             <h4 className="font-semibold mb-2">Straight Install</h4>
                             <p className="text-sm text-muted-foreground mb-2">Pay once, own it outright. We handle install, setup, and handoff.</p>
                             <p className="text-xs text-muted-foreground italic">Best for: teams with budget in hand and a clear timeline.</p>
                           </div>
                           <div className="bg-gradient-to-br from-accent-teal/20 to-accent-lime/20 rounded-lg p-4 border border-accent-teal/30 relative">
                             <div className="absolute -top-2 -right-2 bg-gradient-to-r from-accent-teal to-accent-lime text-background text-xs px-2 py-1 rounded-full font-medium">
                               Signature
                             </div>
                             <h4 className="font-semibold mb-2">Operator-First Financing</h4>
                             <p className="text-sm text-muted-foreground mb-2">We install upfront. You pay it off through a fair revenue split.</p>
                             <p className="text-xs text-muted-foreground italic">Best for: high-impact upgrades where you want ROI now, not later.</p>
                             <div className="flex flex-wrap gap-1 mt-2">
                               <span className="text-xs bg-background/50 px-2 py-1 rounded">No big upfront bill</span>
                               <span className="text-xs bg-background/50 px-2 py-1 rounded">Fast start</span>
                               <span className="text-xs bg-background/50 px-2 py-1 rounded">Training + maintenance</span>
                             </div>
                           </div>
                           <div className="bg-muted/20 rounded-lg p-4 border border-muted">
                             <h4 className="font-semibold mb-2">Maintenance-First</h4>
                             <p className="text-sm text-muted-foreground mb-2">You buy/install, and we keep it humming with proactive support.</p>
                             <p className="text-xs text-muted-foreground italic">Best for: teams who already purchased hardware and want reliable upkeep.</p>
                           </div>
                         </div>

                         {/* Comparison Table */}
                         <div className="bg-muted/10 rounded-lg p-4">
                           <h4 className="font-semibold mb-3 text-center">Plan Comparison</h4>
                           <div className="grid gap-2 text-sm">
                             <div className="grid grid-cols-4 gap-2 font-medium">
                               <div></div>
                               <div>Straight</div>
                               <div>Operator-First</div>
                               <div>Maintenance</div>
                             </div>
                             <div className="grid grid-cols-4 gap-2 border-t border-muted pt-2">
                               <div className="text-muted-foreground">Upfront cost</div>
                               <div>High</div>
                               <div>Low</div>
                               <div>None (post-purchase)</div>
                             </div>
                             <div className="grid grid-cols-4 gap-2 border-t border-muted pt-2">
                               <div className="text-muted-foreground">Monthly/Rev share</div>
                               <div>Optional retainer</div>
                               <div>Revenue split until payoff</div>
                               <div>Flat retainer</div>
                             </div>
                             <div className="grid grid-cols-4 gap-2 border-t border-muted pt-2">
                               <div className="text-muted-foreground">Ownership</div>
                               <div>You</div>
                               <div>Syboh until paid off</div>
                               <div>You</div>
                             </div>
                             <div className="grid grid-cols-4 gap-2 border-t border-muted pt-2">
                               <div className="text-muted-foreground">Includes</div>
                               <div>Install + training</div>
                               <div>Install + training + maintenance</div>
                               <div>Maintenance + training</div>
                             </div>
                           </div>
                         </div>

                         {/* FAQ Section */}
                         <div className="space-y-3">
                           <h4 className="font-semibold">Frequently Asked Questions</h4>
                           <div className="space-y-2 text-sm">
                             <details className="bg-muted/10 rounded p-3">
                               <summary className="font-medium cursor-pointer">How does the split work?</summary>
                               <p className="text-muted-foreground mt-2">Example terms: 50/50 until the system is paid off; then 20/80 ongoing with maintenance included. Exact numbers depend on your volume and agreement.</p>
                             </details>
                             <details className="bg-muted/10 rounded p-3">
                               <summary className="font-medium cursor-pointer">Who owns the equipment?</summary>
                               <p className="text-muted-foreground mt-2">For Operator-First, Syboh retains ownership until payoff. After payoff, ownership and the revenue split adjust per agreement.</p>
                             </details>
                             <details className="bg-muted/10 rounded p-3">
                               <summary className="font-medium cursor-pointer">What if sales are slow?</summary>
                               <p className="text-muted-foreground mt-2">We structure fair terms together. Example: a small monthly floor or longer payoff window, so both sides are protected.</p>
                             </details>
                             <details className="bg-muted/10 rounded p-3">
                               <summary className="font-medium cursor-pointer">What do you install?</summary>
                               <p className="text-muted-foreground mt-2">Self-pour walls, POS, kiosks, digital displays, and related peripherals—end-to-end setup with operator training.</p>
                             </details>
                           </div>
                         </div>

                                                   {/* Operator-First details link only */}
                          <div className="flex justify-center">
                            <Link
                              href="/offers/operator-first-financing"
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
                            >
                              See Operator-First details
                            </Link>
                          </div>

                         {/* Disclaimers */}
                         <div className="text-xs text-muted-foreground text-center space-y-1">
                           <p>Example terms shown for illustration. Final terms depend on assessment and agreement.</p>
                           <p>Operator-First availability subject to approval.</p>
                         </div>
                       </div>
                     ) : (
                       <div className="bg-muted/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                         <p className="text-muted-foreground text-sm italic">
                           {service.placeholder}
                         </p>
                       </div>
                     )}
                     
                                           {/* No CTA button on individual slides */}
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevService}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 border border-muted flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Previous service"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextService}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 border border-muted flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Next service"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Service Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToService(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentService 
                    ? 'gradient-bg' 
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

            {/* CTA Section */}
      <section className="text-center py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Need more in-depth information?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let&apos;s talk about how Syboh Solutions can help your operation.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md gradient-bg px-8 text-background font-medium transition-all hover:opacity-90"
          >
            Book a Consult
          </Link>
        </div>
      </section>
    </main>
  );
}
