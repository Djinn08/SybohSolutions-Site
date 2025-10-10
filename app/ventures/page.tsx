import Link from "next/link";
import Image from "next/image";
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
    },
    {
      name: "Lincoln Web Design",
      status: "Active",
      description: "Local web projects, hosting, and SEO for small businesses and creators. Current partners include The Hermit's Hovel — a professional tattoo shop specializing in dark academia and mystical artistry — and Scott Bohlin, author of The World of SaFrol Hodol fantasy trilogy. Each site is built to order, fully customized, and hosted with client collaboration at every step.",
      subProjects: [
        {
          name: "The Hermit's Hovel",
          description: "Professional tattoo shop & mystical artistry - dark academia and occult symbolism",
          url: "https://hermits-hovel.vercel.app",
          imageUrl: "/images/hermits-hovel-preview.jpg",
        },
        {
          name: "The World of SaFrol Hodol",
          description: "Fantasy book trilogy author website - Scott Bohlin's epic fantasy world",
          url: "https://worldofsafrolhodol.com",
          imageUrl: "/images/safrol-hodol-preview.jpg",
        },
      ],
    },
    {
      name: "Bohvend",
      status: "Active",
      description: "Our vending division — we install, stock, and maintain machines while sharing a slice of each location's earnings. Currently partnering with Anytime Fitness and Nutrition Authority of Lincoln, NE.",
    },
    {
      name: "QR Collective",
      status: "In Progress",
      description: "A soon-to-launch service for custom QR design packs that blend digital utility with physical branding.",
    },
    {
      name: "Syboh Solutions Operations Assistance",
      status: "Active",
      description: "Tech installs, systems training, and operational support. We help optimize physical workflows, point-of-sale setups, and workplace tech so teams stay efficient and focused.",
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

      {/* Ventures List */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="space-y-12">
          {ventures.map((venture, index) => (
            <div key={index} className="space-y-6">
              {/* Venture Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h2 className="text-2xl font-semibold gradient-text">
                  {venture.name}
                </h2>
                <span className={`text-sm px-4 py-2 rounded-full font-medium self-start ${
                  venture.status === "Active" 
                    ? "bg-green-500/20 text-green-400" 
                    : venture.status === "In Progress"
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {venture.status}
                </span>
              </div>
              
              {/* Venture Description */}
              <p className="text-muted-foreground leading-relaxed text-lg">
                {venture.description}
              </p>

              {/* Sub-projects for Lincoln Web Design */}
              {venture.subProjects && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-accent-teal">Featured Projects</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {venture.subProjects.map((project, projectIndex) => (
                      <div key={projectIndex} className="rounded-xl border border-white/10 bg-muted/10 p-6 space-y-4">
                        {/* Project Image Placeholder */}
                        <div className="aspect-video bg-gradient-to-br from-accent-teal/20 to-accent-lime/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                          {project.imageUrl ? (
                            <Image
                              src={project.imageUrl}
                              alt={`${project.name} website preview`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          ) : (
                            <div className="text-center">
                              <div className="w-12 h-12 rounded-full gradient-bg mx-auto mb-2 flex items-center justify-center">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <p className="text-sm text-muted-foreground">Website Preview</p>
                            </div>
                          )}
                        </div>
                        
                        {/* Project Details */}
                        <div className="space-y-2">
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <h4 className="text-lg font-semibold text-accent-teal hover:text-accent-lime transition-colors">
                              {project.name} →
                            </h4>
                          </a>
                          <p className="text-sm text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Divider (except for last item) */}
              {index < ventures.length - 1 && (
                <div className="pt-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center py-16 mt-12">
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

