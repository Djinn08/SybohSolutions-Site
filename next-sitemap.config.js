/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://sybohsolutions.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: "./public",
  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
    '/private/*',
    '/*.json',
    '/*.xml',
    '/legal/*',
    '/offers/*',
    '/process/*',
    '/roadmaps/*',
    '/services/*',
  ],
  additionalPaths: async (config) => {
    return [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0,
      },
      {
        loc: '/about',
        changefreq: 'monthly',
        priority: 0.8,
      },
      {
        loc: '/pricing',
        changefreq: 'monthly',
        priority: 0.9,
      },
      {
        loc: '/lincoln-web-design',
        changefreq: 'weekly',
        priority: 0.9,
      },
      {
        loc: '/start-project',
        changefreq: 'monthly',
        priority: 0.8,
      },
      {
        loc: '/add-ons',
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/work',
        changefreq: 'weekly',
        priority: 0.6,
      },
      {
        loc: '/contact',
        changefreq: 'monthly',
        priority: 0.7,
      },
    ];
  },
};


