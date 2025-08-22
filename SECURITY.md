# Security Implementation Guide

## Overview
This document outlines the security measures implemented in the Syboh Solutions Next.js application for Vercel deployment.

## Security Headers

### HTTP Security Headers
- **Strict-Transport-Security**: Enforces HTTPS with 2-year max-age
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking attacks
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Restricts browser features
- **Cross-Origin Policies**: Implements strict CORS policies

### Content Security Policy (CSP)
Currently in **Report-Only** mode for development. To enforce:
1. Set `reportOnly: false` in `lib/security.ts`
2. Monitor CSP violations in browser console
3. Adjust directives as needed

## Rate Limiting

### API Rate Limiting
- **General API**: 100 requests per minute per IP
- **Contact Form**: 3 submissions per 5 minutes per IP
- **Implementation**: In-memory storage (consider Redis for production)

### Rate Limit Configuration
```typescript
// In lib/security.ts
rateLimit: {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 100, // 100 requests per window
}
```

## Input Validation & Sanitization

### Contact Form Validation
- **Name**: Letters, spaces, hyphens, apostrophes only
- **Email**: Valid email format, max 254 characters
- **Company**: Optional, max 100 characters
- **Message**: Alphanumeric and common punctuation, max 2000 characters

### Sanitization Functions
- Removes HTML tags
- Blocks javascript: and data: protocols
- Trims whitespace
- Limits input length

## Bot Protection

### Blocked User Agents
- Generic bots, crawlers, scrapers
- curl, wget, python, java, perl requests
- Allows legitimate search engines (Googlebot, Bingbot)

### Suspicious Request Detection
- Blocks requests with localhost/127.0.0.1 in headers
- Validates request methods (GET, POST, HEAD, OPTIONS only)
- Checks content-type headers

## Environment Configuration

### Development vs Production
- **CSP**: Report-only in development, enforced in production
- **Rate Limits**: More lenient in development
- **Source Maps**: Disabled in production

### Environment Variables
```bash
# Required for email functionality
RESEND_API_KEY=your_resend_api_key
FORMSPREE_URL=your_formspree_url

# Optional security settings
NODE_ENV=production
```

## Monitoring & Maintenance

### CSP Monitoring
1. Check browser console for CSP violations
2. Monitor CSP reports (if configured)
3. Adjust directives based on legitimate violations

### Rate Limit Monitoring
- Monitor 429 responses in logs
- Adjust limits based on legitimate traffic patterns
- Consider implementing Redis for distributed rate limiting

### Security Headers Testing
Use tools like:
- [Security Headers](https://securityheaders.com)
- [Mozilla Observatory](https://observatory.mozilla.org)
- [HTTP Security Report](https://httpsecurityreport.com)

## Deployment Checklist

### Pre-Deployment
- [ ] CSP violations reviewed and resolved
- [ ] Rate limits tested and adjusted
- [ ] Security headers verified
- [ ] Input validation tested
- [ ] Bot protection configured

### Post-Deployment
- [ ] Security headers verified in production
- [ ] CSP monitoring enabled
- [ ] Rate limiting working correctly
- [ ] Contact form rate limiting tested
- [ ] Security.txt accessible

## Incident Response

### Security Contact
- **Email**: security@sybohsolutions.com
- **Response Time**: 24-48 hours
- **Disclosure Policy**: Coordinated disclosure preferred

### Vulnerability Reporting
1. Email security@sybohsolutions.com
2. Include detailed description and steps to reproduce
3. Provide proof-of-concept if possible
4. Allow reasonable time for response

## Updates & Maintenance

### Regular Tasks
- [ ] Review and update CSP directives monthly
- [ ] Monitor rate limit effectiveness
- [ ] Update blocked user agent patterns
- [ ] Review security headers quarterly
- [ ] Test input validation regularly

### Security Updates
- Keep Next.js and dependencies updated
- Monitor security advisories
- Implement security patches promptly
- Test thoroughly before deployment

## Additional Resources

- [Next.js Security Documentation](https://nextjs.org/docs/advanced-features/security-headers)
- [OWASP Security Headers](https://owasp.org/www-project-secure-headers/)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Rate Limiting Best Practices](https://cloud.google.com/architecture/rate-limiting-strategies-techniques)
