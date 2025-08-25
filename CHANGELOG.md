# Changelog

All notable changes to the Syboh Solutions website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Comprehensive security hardening for Vercel deployment
- Security headers implementation (HSTS, CSP, X-Frame-Options, etc.)
- Rate limiting for API routes and contact form
- Input validation and sanitization for contact form
- Bot protection and suspicious request detection
- Middleware for security enforcement
- Security configuration file (`lib/security.ts`)
- Enhanced robots.txt with security directives
- Security.txt file for vulnerability reporting
- Comprehensive security documentation (`SECURITY.md`)
- Project documentation and development guidelines
- `.cursorrules` file with comprehensive project rules
- `PROMPTS/00_BOOTSTRAP_AGENT.md` for AI assistant context
- `BRAND_GUIDE.md` with detailed brand standards
- Enhanced `README.md` with Cursor workflow instructions
- `/content` directory structure for content management
- Sample `content/home.json` with structured content data
- Subtle linen texture background for enhanced visual appeal
- New favicon using SybohWeblogo.png for better brand recognition
- Local logging system (`lib/logger.ts`) for automatic log generation
- Enhanced contact form validation with real-time error feedback
- Improved success/error messaging for contact form submissions
- New dedicated process page with full-width carousel (Assess ⇄ Implement ⇄ Retain)
- Service-specific pages with carousel navigation (Operations, Tech Installs, SaaS Tools, Websites)
- Smooth scroll navigation for "What We Do" section
- Auto-advancing carousels with manual navigation controls and step indicators
- Enhanced service page content with expanded explanations, key bullet points, and case study placeholders

### Changed
- Updated logo placement: smaller transparent frog logo in header, larger transparent logo in hero section
- Fixed TypeScript errors related to IP address access in NextRequest
- Updated contact form validation with stricter regex patterns
- Enhanced error handling and user feedback
- Updated brand colors to match new brand guide standards
- Enhanced project documentation and development workflow
- **Page Title & Metadata**: Updated to "Syboh Solutions | Digital Tools & Business Support" with new description
- **Navigation Labels**: "Services" → "What We Do", "Roadmaps" → "Our Process"
- **Homepage Content**: Rewrote offerings as plain-English buckets with clear value propositions
- **Process Section**: Replaced jargon-heavy content with simple 4-step process (Listen, Plan, Build, Support)
- **Visual Design**: Added subtle linen texture background for enhanced visual appeal
- **Favicon**: Updated to use SybohWeblogo.png for better brand recognition
- **Homepage Hero**: Added "Syboh Solutions" text with gradient styling, centered with frog logo
- **Contact Form**: Wired to info@sybohsolutions.com with enhanced validation and error handling
- **What We Do Section**: Updated to 2x2 grid with subsections: Operations, Operator Tech Installs, SaaS Tools, Websites/Retainers/Optimization
- **Our Process Section**: Changed to 3-step process: Assess, Install/Train, Optimize
- **Logo Updates**: Replaced hero image and site header logo with sybohfrogtransparentbackgroundLOGO.png
- **Hero Section Layout**: Improved visual hierarchy with smaller logo, larger tagline, bigger buttons, and scroll indicator
- **Site Structure**: Removed "Our Process" section from homepage (now dedicated page only)
- **Navigation**: Updated "What We Do" to smooth scroll to section instead of separate page
- **Service Descriptions**: Updated with new benefit-driven blurbs and "Explore" buttons
- **Process Page**: Removed PDF download button, added full-width carousel with 3-step process
- **Service Pages**: Created individual pages with carousel navigation showing all services
- **Content Updates**: Updated service descriptions with more compelling, benefit-focused copy
- **Service Page Content**: Enhanced with expanded explanations, key bullet points, and case study placeholders for each service
- **Build Fixes**: Fixed ESLint errors for unused variables and unescaped apostrophes in service pages
- **Static Generation Fix**: Converted SiteHeader to client component to resolve event handler error during build
- **Navigation & UX Improvements**: Added smooth scrolling to layout, removed secondary CTA from hero, updated carousel autoplay to 12s with hover pause
- **Contact Form Enhancement**: Improved JSON response handling and error management, updated to use CONTACT_TO environment variable
- **Tech Installs Enhancement**: Added Operator-First Financing as key differentiator with three financing options, comparison table, FAQ section, and dedicated financing page
- **Navigation Fix**: Fixed "What We Do" navbar button to work from all pages by navigating to homepage then scrolling to section
- **Carousel UX Update**: Removed individual "Book a Consult" buttons from carousel slides, added consistent static CTA section below all service carousels
- **CTA Link Update**: Changed all carousel page CTAs to link to `/contact` instead of Calendly for better user flow
- **Process Page Cleanup**: Removed "Learn More" buttons from Our Process carousel slides, updated CTA section with process-specific messaging
- **Global CTA Update**: Changed all "Book a Consult" buttons site-wide to redirect to `/contact` form instead of Calendly for better user experience
- **Homepage CTA Cleanup**: Removed redundant "Book a consult" button from hero section, keeping only navbar and bottom CTAs for cleaner UX
- **Carousel Content Enhancement**: Added placeholder images and Latin filler content to all "What We Do" carousel slides for visual consistency and better user engagement

### Fixed
- Build errors related to `req.ip` property not existing on NextRequest type
- ESLint errors with unused variables and unescaped apostrophes
- Logo scaling issues to prevent distortion
- Security vulnerabilities in contact form input handling
- Zod validation error property access (`parsed.error.issues` instead of `parsed.error.errors`)
- OpenGraph image gradient text styling that doesn't work in ImageResponse context
- Vercel.json builds configuration conflicts with Next.js deployment
- Build script sitemap generation causing build failures
- TypeScript null check error in middleware.ts header validation
- TypeScript ESLint errors in logger.ts by replacing `any` types with `Record<string, unknown>`
- TypeScript error in logger.ts contactForm method by adding proper type checking for message length

## [2024-12-22] - Build Troubleshooting and Fixes

### Fixed
- **TypeScript Errors**: 
  - Fixed `parsed.error.errors` to `parsed.error.issues` in contact route
  - Removed gradient text styling from OpenGraph image (not supported in ImageResponse)
  - Simplified vercel.json configuration to prevent build conflicts
  - Removed sitemap generation from build script to isolate build issues
  - Fixed null check error in middleware.ts header validation logic

### Technical
- Simplified build process for better reliability
- Removed conflicting Vercel configuration
- Fixed OpenGraph image rendering issues
- Streamlined package.json build scripts

## [2024-12-22] - Initial Branding Update

### Added
- New Syboh Solutions branding with frog logo integration
- Transparent frog logo (`sybohfrogtransparentbackground.png`) for header
- Full logo with background (`SybohWeblogo.png`) for hero section
- Custom favicon with gradient "S" design
- Poppins font family integration
- Gradient text effects for headings and brand elements
- Custom CSS utilities for gradients and styling

### Changed
- Complete color scheme overhaul:
  - Background: Deep navy (`#0d1117`)
  - Accent gradient: Teal to lime (`#00e6e6 → #d6ff57`)
  - Text: Off-white (`#f0f0f0`)
  - Muted colors for secondary elements
- Updated all page headings to use gradient text styling
- Enhanced button styling with gradient backgrounds
- Improved form styling with focus states and proper borders
- Updated OpenGraph image with new branding colors

### Updated
- Site header with responsive frog logo and gradient company name
- Homepage hero section with full logo integration
- All service pages with gradient headings
- Contact form with enhanced styling and validation
- Footer with gradient company name
- CTA banner with gradient styling
- Legal pages (Privacy, Terms) with new branding
- Roadmaps page with updated styling

### Technical
- Updated `next.config.ts` with security headers
- Modified `app/layout.tsx` to use Poppins font
- Enhanced `app/globals.css` with new color variables and utilities
- Created `app/icon.tsx` for dynamic favicon generation
- Updated `app/opengraph-image.tsx` with new branding

## [2024-12-22] - Security Implementation

### Added
- **Security Headers**: Comprehensive HTTP security headers implementation
  - Strict-Transport-Security with 2-year max-age
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy with restricted browser features
  - Cross-Origin policies for strict CORS implementation
  - Content Security Policy (CSP) in report-only mode

- **Rate Limiting**: 
  - General API rate limiting: 100 requests/minute per IP
  - Contact form rate limiting: 3 submissions per 5 minutes per IP
  - In-memory rate limiting implementation

- **Input Validation & Sanitization**:
  - Enhanced Zod schema with strict regex patterns
  - Input sanitization functions to remove HTML tags and malicious protocols
  - Email domain validation
  - Character length limits and type checking

- **Bot Protection**:
  - User agent filtering for suspicious bots
  - Request method validation (GET, POST, HEAD, OPTIONS only)
  - Suspicious header detection and blocking
  - Allowlist for legitimate search engines

### Created
- `middleware.ts` - Security middleware with rate limiting and bot protection
- `lib/security.ts` - Centralized security configuration
- `public/.well-known/security.txt` - Security researcher contact information
- `SECURITY.md` - Comprehensive security documentation

### Updated
- `next.config.ts` - Added security headers configuration
- `app/api/contact/route.ts` - Enhanced with security measures
- `public/robots.txt` - Security-focused bot directives

## [2024-12-22] - Bug Fixes and Polish

### Fixed
- TypeScript build errors related to `req.ip` property access
- ESLint errors with unused variables in catch blocks
- Unescaped apostrophes in contact form text
- Logo scaling issues causing distortion
- PowerShell execution policy issues preventing local development

### Changed
- Updated IP address detection to use headers only (`x-forwarded-for`, `x-real-ip`)
- Improved error handling in API routes
- Enhanced form validation error messages
- Optimized logo placement and sizing

### Technical
- Removed dependency on `req.ip` property
- Updated middleware and API routes for compatibility
- Fixed image optimization settings for logos
- Improved build process reliability

---

## Notes

- All security measures are production-ready and follow industry best practices
- CSP is currently in report-only mode for safe deployment
- Rate limiting uses in-memory storage (consider Redis for high-traffic production)
- Logo files are stored in `/public/images/` directory
- Security documentation provides comprehensive guidance for maintenance
- Build process simplified for better reliability and debugging
