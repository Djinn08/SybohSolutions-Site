"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const processSteps = [
  {
    step: 1,
    title: "Assess",
    headline: "See the full picture.",
    blurb: "We start by mapping your space — digitally or on-site — to uncover bottlenecks, hidden costs, and ROI drivers. No cookie-cutter solutions, just a clear understanding of what matters most to your operation.",
  },
  {
    step: 2,
    title: "Implement",
    headline: "Solutions that fit from day one.",
    blurb: "We design and install systems tailored to your workflow. From hardware setups to SaaS integrations, everything works together smoothly — without disrupting your operation.",
  },
  {
    step: 3,
    title: "Retain",
    headline: "Keep your team sharp, your systems smarter.",
    blurb: "We train your staff, refine the setup, and continuously optimize so your operation keeps running lean and profitable long after installation.",
  },
];

export default function ProcessPage() {
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processSteps.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % processSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
          Our Process
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A proven approach to delivering results that last.
        </p>
      </section>

      {/* Carousel Section */}
      <section className="relative min-h-[600px] flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        <div className="relative w-full max-w-6xl mx-auto px-6">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
                             {processSteps.map((step) => (
                <div 
                  key={step.step}
                  className="w-full flex-shrink-0 px-8 py-16 text-center"
                >
                  <div className="max-w-4xl mx-auto">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg text-background font-bold text-xl mb-6">
                      {step.step}
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-3xl font-semibold tracking-tight mb-4">
                      {step.title}
                    </h2>
                    
                    {/* Headline */}
                    <h3 className="text-2xl font-medium gradient-text mb-6">
                      {step.headline}
                    </h3>
                    
                    {/* Blurb */}
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                      {step.blurb}
                    </p>
                    
                    {/* Placeholder Button */}
                    <button className="inline-flex h-12 items-center justify-center rounded-md border border-muted px-6 hover:bg-muted transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevStep}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 border border-muted flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Previous step"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextStep}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 border border-muted flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Next step"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Step Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {processSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep 
                    ? 'gradient-bg' 
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Ready to get started?
          </h2>
                     <p className="text-muted-foreground mb-8">
             Let&apos;s discuss how our process can work for your business.
           </p>
          <Link
            href={COMPANY.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md gradient-bg px-8 text-background font-medium transition-all hover:opacity-90"
          >
            Book a Consult
          </Link>
        </div>
      </section>
    </main>
  );
}
