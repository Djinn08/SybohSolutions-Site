// Security configuration for the application
export const securityConfig = {
  // Rate limiting settings
  rateLimit: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 100, // 100 requests per window
    skipSuccessfulRequests: false,
    skipFailedRequests: false,
  },

  // CSP configuration
  csp: {
    // Report-only mode (set to false to enforce)
    reportOnly: true,
    
    // CSP directives
    directives: {
      'default-src': ["'self'"],
      'script-src': [
        "'self'",
        "'unsafe-inline'", // Required for Next.js
        "'unsafe-eval'", // Required for Next.js development
        'https://va.vercel-scripts.com',
        'https://vitals.vercel-insights.com',
      ],
      'style-src': [
        "'self'",
        "'unsafe-inline'", // Required for Tailwind CSS
        'https://fonts.googleapis.com',
      ],
      'font-src': [
        "'self'",
        'https://fonts.gstatic.com',
      ],
      'img-src': [
        "'self'",
        'data:',
        'https:',
        'blob:',
      ],
      'connect-src': [
        "'self'",
        'https://api.vercel.com',
        'https://vitals.vercel-insights.com',
        'https://calendly.com',
        'https://formspree.io',
      ],
      'frame-src': ["'none'"],
      'object-src': ["'none'"],
      'base-uri': ["'self'"],
      'form-action': ["'self'"],
      'frame-ancestors': ["'none'"],
      'upgrade-insecure-requests': [],
    },
  },

  // Allowed origins for CORS
  allowedOrigins: [
    'https://sybohsolutions.com',
    'https://www.sybohsolutions.com',
    'https://syboh-solutions-site.vercel.app',
  ],

  // Blocked user agents
  blockedUserAgents: [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /curl/i,
    /wget/i,
    /python/i,
    /java/i,
    /perl/i,
  ],

  // Allowed request methods
  allowedMethods: ['GET', 'POST', 'HEAD', 'OPTIONS'],

  // Security headers
  headers: {
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin',
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'X-DNS-Prefetch-Control': 'off',
    'X-XSS-Protection': '1; mode=block',
    'X-Download-Options': 'noopen',
    'X-Permitted-Cross-Domain-Policies': 'none',
  },
};

// Environment-specific security settings
export const getSecuritySettings = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  
  return {
    ...securityConfig,
    csp: {
      ...securityConfig.csp,
      reportOnly: !isProduction, // Enforce CSP in production
    },
    rateLimit: {
      ...securityConfig.rateLimit,
      maxRequests: isProduction ? 100 : 1000, // More lenient in development
    },
  };
};
