import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventures | Syboh Solutions",
  description: "Explore Syboh Solutions' ventures and sub-divisions — from web design to vending operations, each solving practical problems for local businesses in unique ways.",
};

export default function VenturesPage() {
  const ventures = [
    {
      name: "RoundTabl",
      status: "In Progress",
      description: "Beer-wall and digital gifting platform connecting patrons and local venues.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: "Lincoln Web Design",
      status: "Active",
      description: "Local web projects, hosting, and SEO for small businesses and creators. Current partners include The Hermit's Hovel — a professional tattoo shop specializing in dark academia and mystical artistry — and Scott Bohlin, author of The World of SaFrol Hodol fantasy trilogy. Each site is built to order, fully customized, and hosted with client collaboration at every step.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      featured: true,
      subProjects: [
        {
          name: "The Hermit's Hovel",
          description: "Professional tattoo shop & mystical artistry - dark academia and occult symbolism",
          url: "https://hermits-hovel.vercel.app",
          featured: true,
        },
        {
          name: "The World of SaFrol Hodol",
          description: "Fantasy book trilogy author website - Scott Bohlin's epic fantasy world",
          url: "https://worldofsafrolhodol.com",
          featured: true,
        },
      ],
    },
    {
      name: "Bohvend",
      status: "Active",
      description: "Our vending division — we install, stock, and maintain machines while sharing a slice of each location's earnings. Currently partnering with Anytime Fitness and Nutrition Authority of Lincoln, NE.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: "QR Collective",
      status: "In Progress",
      description: "A soon-to-launch service for custom QR design packs that blend digital utility with physical branding.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      ),
    },
    {
      name: "Syboh Solutions Operations Assistance",
      status: "Active",
      description: "Tech installs, systems training, and operational support. We help optimize physical workflows, point-of-sale setups, and workplace tech so teams stay efficient and focused.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
          Our Ventures
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          While web development is our bread and butter, Syboh Solutions also operates several sub-divisions — each designed to solve practical problems for local businesses in unique ways.
        </p>
      </section>

      {/* Ventures Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-muted/10 overflow-hidden hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] group">
              {/* Venture Icon/Image Area */}
              <div className="h-48 bg-gradient-to-br from-accent-teal/20 to-accent-lime/20 flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                  <div className="w-16 h-16 rounded-full gradient-bg mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-background">
                      {venture.icon}
                    </div>
                  </div>
                </div>
                {/* Subtle overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Venture Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-accent-teal transition-colors duration-300">
                    {venture.name}
                  </h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    venture.status === "Active" 
                      ? "bg-green-500/20 text-green-400" 
                      : venture.status === "In Progress"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {venture.status}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {venture.description}
                </p>

                {/* Sub-projects for Lincoln Web Design */}
                {venture.subProjects && (
                  <div className="mb-4 space-y-2">
                    <p className="text-xs font-semibold text-accent-teal uppercase tracking-wide">Featured Projects:</p>
                    {venture.subProjects.map((project, projectIndex) => (
                      <div key={projectIndex} className="bg-muted/20 rounded-lg p-3 hover:bg-muted/30 transition-colors">
                        {project.url ? (
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <div className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-accent-teal hover:text-accent-lime transition-colors">
                                  {project.name} →
                                </p>
                                <p className="text-xs text-muted-foreground">{project.description}</p>
                              </div>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                            <div>
                              <p className="text-sm font-medium">{project.name}</p>
                              <p className="text-xs text-muted-foreground">{project.description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                <button
                  className="inline-flex items-center justify-center rounded-lg border border-muted px-4 py-2 text-sm font-medium hover:bg-muted/20 transition-colors group-hover:border-accent-teal/50 group-hover:text-accent-teal cursor-not-allowed opacity-60"
                  disabled
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center py-16 mt-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Interested in partnering with us?</h3>
            <p className="text-muted-foreground mb-6">
              Whether it&apos;s a website, a vending partnership, or operational support — let&apos;s talk about how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg gradient-bg px-6 py-3 text-background font-medium hover:opacity-90 transition-all"
              >
                Get in Touch
              </Link>
              <Link
                href="/lincoln-web-design"
                className="inline-flex items-center justify-center rounded-lg border border-muted px-6 py-3 font-medium hover:bg-muted/20 transition-colors"
              >
                Lincoln Web Design
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

