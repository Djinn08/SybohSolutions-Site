import Link from "next/link";

export default function WorkPage() {
  const projects = [
    {
      name: "Airo Tattoo",
      status: "In progress",
      bullets: "Custom site, booking flow, local SEO setup, monthly care.",
      image: "/images/placeholder-project.jpg", // Placeholder for now
    },
    // Add more projects here as needed
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold tracking-tight gradient-text md:text-6xl mb-4">
          Our Work
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          See how we&apos;ve helped businesses grow with custom websites and ongoing support.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-muted/10 overflow-hidden hover:bg-white/5 transition-colors">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-accent-teal/20 to-accent-lime/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-bg mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Project Image</p>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent-teal/20 text-accent-teal">
                    {project.status}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {project.bullets.split(', ').map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-muted px-4 py-2 text-sm font-medium hover:bg-muted/20 transition-colors"
                >
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 rounded-full gradient-bg mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
            <p className="text-muted-foreground mb-6">We&apos;re working on our first projects. Check back soon!</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg gradient-bg px-6 py-3 text-background font-medium hover:opacity-90 transition-all"
            >
              Start Your Project
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
