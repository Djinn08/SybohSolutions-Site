import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Simple in-memory rate limiting (for production, consider Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per minute

function getRateLimitKey(req: NextRequest): string {
  // Use IP address for rate limiting
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  return `rate_limit:${ip}`;
}

function checkRateLimit(req: NextRequest): boolean {
  const key = getRateLimitKey(req);
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Security headers that need to be set dynamically
function getSecurityHeaders() {
  return {
    'X-DNS-Prefetch-Control': 'off',
    'X-XSS-Protection': '1; mode=block',
    'X-Download-Options': 'noopen',
    'X-Permitted-Cross-Domain-Policies': 'none',
    'X-Robots-Tag': 'index, follow',
  };
}

// Move any existing middleware logic into this function (Cursor: preserve it exactly).
function prodMiddleware(req: NextRequest) {
  const response = NextResponse.next();

  // Add security headers
  Object.entries(getSecurityHeaders()).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Rate limiting for API routes
  if (req.nextUrl.pathname.startsWith('/api/')) {
    if (!checkRateLimit(req)) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests' }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': '60',
          },
        }
      );
    }
  }

  // Block suspicious requests
  const userAgent = req.headers.get('user-agent') || '';
  
  // List of legitimate search engine bots to always allow
  const legitimateBots = [
    'googlebot',
    'bingbot',
    'slurp',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'telegrambot',
    'discordbot',
    'slackbot',
    'applebot',
    'semrushbot',
    'ahrefsbot',
    'mj12bot',
    'dotbot',
    'rogerbot',
    'seznambot',
    'coccocbot',
    'ia_archiver',
    'archive.org_bot',
    'ia_archiver-web.archive.org',
  ];

  // Check if it's a legitimate bot
  const isLegitimateBot = legitimateBots.some(bot => 
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  // Only block suspicious bots if they're not legitimate
  if (!isLegitimateBot) {
    const suspiciousPatterns = [
      /bot.*scraper/i,
      /bot.*harvester/i,
      /bot.*spam/i,
      /bot.*crawler.*spam/i,
      /curl.*bot/i,
      /wget.*bot/i,
      /python.*requests/i,
      /python.*urllib/i,
      /scrapy/i,
      /phantomjs/i,
      /headless/i,
    ];

    const isSuspiciousBot = suspiciousPatterns.some(pattern => 
      pattern.test(userAgent)
    );

    if (isSuspiciousBot) {
      return new NextResponse('Forbidden', { status: 403 });
    }
  }

  // Validate request method
  const allowedMethods = ['GET', 'POST', 'HEAD', 'OPTIONS'];
  if (!allowedMethods.includes(req.method)) {
    return new NextResponse('Method Not Allowed', { status: 405 });
  }

  // Block requests with suspicious headers
  const suspiciousHeaders = [
    'x-forwarded-host',
    'x-forwarded-server',
    'x-forwarded-for',
  ];

  for (const header of suspiciousHeaders) {
    const value = req.headers.get(header);
    if (value && (value.includes('localhost') || value.includes('127.0.0.1'))) {
      return new NextResponse('Forbidden', { status: 403 });
    }
  }

  return response;
}

export function middleware(req: NextRequest) {
  if (process.env.NODE_ENV === 'development' || process.env.DEV_BYPASS === '1') {
    // Helpful debug header in dev
    const res = NextResponse.next();
    res.headers.set('x-dev-bypass', 'true');
    return res;
  }
  return prodMiddleware(req);
}

export const config = {
  // keep existing matcher if present; otherwise use a safe default that skips static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)).*)'],
};
