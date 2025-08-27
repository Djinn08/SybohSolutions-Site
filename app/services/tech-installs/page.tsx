"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


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
                        <div className="flex flex-col items-center gap-6 min-h-[900px] md:min-h-[1000px]">
                          <h2 className="text-4xl font-bold">Tech Installs</h2>
                          <p className="text-xl text-muted-foreground">Tools that work on day one — without the big upfront bill.</p>
                          <p className="max-w-3xl">Most vendors drop a giant invoice and disappear. We don&apos;t. We install the tech you need — self-pour walls, POS kiosks, displays — and offer flexible ways to pay so you can start seeing returns immediately.</p>

                          <ul className="text-left max-w-3xl space-y-3">
                            <li>Straight Install: Pay once, own it outright with install and handoff</li>
                            <li>Operator-First Financing: Install upfront, pay through revenue share</li>
                            <li>Maintenance-First: You buy/install, we keep it humming with support</li>
                            <li>End-to-end setup with operator training on all models</li>
                          </ul>

                          <div className="mx-auto max-w-3xl pt-6">
                            <Image 
                              src="/images/TechInstallImage.jpg" 
                              alt="Tech installation example" 
                              width={1200} 
                              height={800} 
                              className="w-full h-auto rounded-2xl shadow-lg" 
                            />
                          </div>

                          <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl pt-8">
                            <div className="rounded-2xl border p-6 text-left">
                              <h3 className="font-semibold text-lg">Straight Install</h3>
                              <p className="text-sm text-muted-foreground">Pay once, own it outright. We handle install, setup, and handoff.</p>
                              <p className="mt-3 text-xs italic">Best for: teams with budget in hand and a clear timeline.</p>
                            </div>
                            <div className="rounded-2xl border p-6 text-left ring-1 ring-primary/30 bg-primary/5">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-lg">Operator-First Financing</h3>
                                <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">Signature</span>
                              </div>
                              <p className="text-sm text-muted-foreground">We install upfront. You pay it off through a fair revenue split, then keep the lion&apos;s share while we maintain it.</p>
                              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                                <span className="rounded-full border px-2 py-0.5">No big upfront bill</span>
                                <span className="rounded-full border px-2 py-0.5">Fast start</span>
                                <span className="rounded-full border px-2 py-0.5">Training + maintenance</span>
                              </div>
                            </div>
                            <div className="rounded-2xl border p-6 text-left">
                              <h3 className="font-semibold text-lg">Maintenance-First</h3>
                              <p className="text-sm text-muted-foreground">You buy/install, and we keep it humming with proactive support.</p>
                              <p className="mt-3 text-xs italic">Best for: teams who already purchased hardware and want reliable upkeep.</p>
                            </div>
                          </div>

                          <div className="w-full max-w-5xl overflow-x-auto pt-6">
                            <table className="w-full text-left text-sm">
                              <thead className="text-muted-foreground">
                                <tr><th></th><th>Straight</th><th>Operator-First</th><th>Maintenance</th></tr>
                              </thead>
                              <tbody className="divide-y divide-border/40">
                                <tr><td>Upfront cost</td><td>High</td><td>Low</td><td>None (post-purchase)</td></tr>
                                <tr><td>Monthly/Rev share</td><td>Optional retainer</td><td>Revenue split until payoff</td><td>Flat retainer</td></tr>
                                <tr><td>Ownership</td><td>You</td><td>Syboh until paid off</td><td>You</td></tr>
                                <tr><td>Includes</td><td>Install + training</td><td>Install + training + maintenance</td><td>Support + updates</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-muted/20 rounded-lg p-6 max-w-2xl mx-auto">
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
