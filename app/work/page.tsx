import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Projects | Syboh Solutions Portfolio Lincoln, NE",
  description: "Explore projects built by Syboh Solutions — websites, installs, and technical solutions for small businesses in Lincoln, NE.",
};

export default function WorkPage() {
  const projects = [
    {
      name: "Airo Tattoo Studio",
      status: "In Progress",
      category: "Website + Local SEO",
      description: "Custom booking website with artist portfolios, online scheduling, and local search optimization for Lincoln's premier tattoo studio.",
      bullets: [
        "Custom Next.js website with booking integration",
        "Artist portfolio galleries and service pages",
        "Local SEO setup with Google Business Profile",
        "Monthly care plan with content updates"
      ],
      image: "/images/placeholder-project.jpg",
      timeline: "4-6 weeks",
      budget: "$3,500 - $4,200"
    },
    {
      name: "Lincoln Coffee Co.",
      status: "Planning",
      category: "E-commerce + POS",
      description: "Online ordering system with POS integration for Lincoln's favorite local coffee shop chain.",
      bullets: [
        "E-commerce website with online ordering",
        "POS system integration and training",
        "Inventory management dashboard",
        "Customer loyalty program setup"
      ],
      image: "/images/placeholder-project.jpg",
      timeline: "6-8 weeks",
      budget: "$5,200 - $6,800"
    },
    {
      name: "Nebraska Auto Repair",
      status: "Completed",
      category: "Website + Operations",
      description: "Service booking website with customer management system for a family-owned auto repair business.",
      bullets: [
        "Service booking and appointment system",
        "Customer database and communication tools",
        "Service history tracking",
        "Monthly maintenance and updates"
      ],
      image: "/images/placeholder-project.jpg",
      timeline: "5 weeks",
      budget: "$4,100"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
          Our Work
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          See how we&apos;ve helped Lincoln businesses grow with custom websites and ongoing support.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-muted/10 overflow-hidden hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] group">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-accent-teal/20 to-accent-lime/20 flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                  <div className="w-16 h-16 rounded-full gradient-bg mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{project.category}</p>
                </div>
                {/* Subtle overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-accent-teal transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    project.status === "Completed" 
                      ? "bg-green-500/20 text-green-400" 
                      : project.status === "In Progress"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {project.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Project Meta */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                  <div className="bg-muted/20 rounded-lg p-2">
                    <p className="text-muted-foreground">Timeline</p>
                    <p className="font-medium">{project.timeline}</p>
                  </div>
                  <div className="bg-muted/20 rounded-lg p-2">
                    <p className="text-muted-foreground">Budget</p>
                    <p className="font-medium">{project.budget}</p>
                  </div>
                </div>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-muted px-4 py-2 text-sm font-medium hover:bg-muted/20 transition-colors group-hover:border-accent-teal/50 group-hover:text-accent-teal"
                >
                  Start Similar Project
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center py-16 mt-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to start your project?</h3>
            <p className="text-muted-foreground mb-6">
              Let&apos;s build something amazing together. Every project starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start-project"
                className="inline-flex items-center justify-center rounded-lg gradient-bg px-6 py-3 text-background font-medium hover:opacity-90 transition-all"
              >
                Start Your Project
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-muted px-6 py-3 font-medium hover:bg-muted/20 transition-colors"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
