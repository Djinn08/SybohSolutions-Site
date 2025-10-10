# Changelog

All notable changes to the Syboh Solutions website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2025-10-10] - Site Refactoring & Anti-Spam Implementation

### Added
- **Ventures Page**: New `/ventures` page showcasing Syboh Solutions' sub-divisions and ventures
  - RoundTabl - Beer-wall and digital gifting platform (In Progress)
  - Lincoln Web Design - Web projects and hosting with featured clients (Active)
  - Bohvend - Vending division with current partnerships (Active)
  - QR Collective - Custom QR design packs (In Progress)
  - Syboh Solutions Operations Assistance - Tech installs and training (Active)
  - Responsive 3-column card layout with gradient backgrounds and hover effects
  - Status badges (Active/In Progress) for each venture
  - Featured sub-projects for Lincoln Web Design with live links:
    - **The Hermit's Hovel** (https://hermits-hovel.vercel.app) - Professional tattoo shop & mystical artistry specializing in dark academia and occult symbolism
    - **The World of SaFrol Hodol** (https://worldofsafrolhodol.com) - Fantasy book trilogy author website by Scott Bohlin featuring epic fantasy world building
  - Clickable project links with hover effects and external link indicators

### Updated
- **Lincoln Web Design Client Showcases**: Enhanced featured projects section with live website links
  - **The Hermit's Hovel**: Dark academia tattoo shop website with mystical artistry focus
    - Features professional tattoo services, portfolio gallery, and occult symbolism
    - Dark theme with gold/bronze accents and medieval-inspired design
    - Live site: https://hermits-hovel.vercel.app
  - **The World of SaFrol Hodol**: Epic fantasy author website for Scott Bohlin
    - Showcases "The Trian Trilogy" fantasy book series
    - Features dramatic fantasy artwork, author bio, and book information
    - Includes subscription system and Amazon purchase links
    - Live site: https://worldofsafrolhodol.com
  - Updated project descriptions to highlight specific services and specialties
  - Added external link styling with hover effects and accessibility attributes

### Changed
- **Navigation Restructure**: Complete navigation overhaul
  - Renamed "Work" tab to "Ventures" across all pages and routes
  - Removed "Start a Project" tab from navigation (consolidated with "Book a consult" button)
  - Updated navbar in `lib/constants.ts` and `components/site-header.tsx`
  - All "Book a consult" buttons now point to `/contact` instead of `/start-project`
  - Updated footer navigation to reflect new structure
- **Sitemap Updates**: Updated `next-sitemap.config.js`
  - Changed `/work` to `/ventures` with increased priority (0.8)
  - Removed `/start-project` from sitemap
- **SEO Metadata**: Updated page metadata
  - New title: "Ventures | Syboh Solutions"
  - New description highlighting sub-divisions and ventures
- **Link Updates**: Updated all internal references site-wide
  - `/work` → `/ventures` across all pages
  - `/start-project` → `/contact` for all CTAs
  - Updated: add-ons, pricing, about, home page, Lincoln web design page
  - Updated PricingSection component with new CTA links
- **Call-to-Action Consistency**: Standardized all CTAs to use `/contact`
  - Removed scattered `/start-project` references
  - Single source of truth for contact/booking actions

### Removed
- "Start a Project" navigation tab (functionality consolidated with "Book a consult" button)

## [2025-10-10] - Anti-Spam Implementation

### Added
- **Honeypot Field**: Invisible form field to catch bot submissions
  - Added `website` field to both ContactForm component and contact page
  - Hidden using absolute positioning and accessibility attributes
  - Bots fill this field while humans never see it
- **Google reCAPTCHA v3**: Invisible bot protection without user interaction
  - Integrated reCAPTCHA v3 script in main layout
  - Added token generation on form submission
  - No "I'm not a robot" checkbox - fully invisible to users
  - Automatic score-based verification (0.0-1.0 scale)
- **Backend Validation**: Comprehensive spam filtering
  - Honeypot validation - blocks submissions with filled honeypot field
  - reCAPTCHA token verification via Google API
  - Score threshold checking (default: 0.5, adjustable)
  - Detailed logging for spam attempts
- **Documentation**: Complete setup and configuration guide
  - Created `ANTI_SPAM_SETUP.md` with step-by-step instructions
  - Environment variable documentation
  - Score threshold guidelines
  - Troubleshooting section
  - Monitoring and testing instructions

### Changed
- **Contact API Route**: Enhanced with two-layer spam protection
  - Added honeypot check before processing
  - Added reCAPTCHA verification before sending email
  - Returns success to bots without sending email (stealth blocking)
  - Improved error messages for security failures
- **Contact Forms**: Updated both forms with anti-spam measures
  - `components/ContactForm.tsx` - Added honeypot and reCAPTCHA
  - `app/contact/page.tsx` - Added honeypot and reCAPTCHA
  - No visual changes to maintain user experience
- **Layout**: Added reCAPTCHA script loading
  - Conditionally loads only if site key is configured
  - Uses async/defer for optimal performance
  - Script loads in document head
- **Lincoln Web Design Page**: Temporarily removed Google Maps embed due to connection issues

### Technical
- Zero impact on user experience - fully invisible protection
- Two-layer defense: honeypot catches simple bots, reCAPTCHA catches sophisticated ones
- Configurable score threshold for fine-tuning false positive rate
- Comprehensive logging for monitoring spam attempts
- Production-ready with proper error handling

### Security
- Honeypot field prevents form auto-fill bot attacks
- reCAPTCHA v3 provides ML-powered bot detection
- Score-based validation allows granular control
- No user data collected by protection mechanisms
- Stealth blocking prevents bot detection and adaptation

## [Previous Releases]

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
- **Site v1.0.2 Update**: Comprehensive improvements including consistent carousel layouts, smooth scroll navigation, enhanced Tech Installs content, and robust contact form handling
- **Image Path Standardization**: Updated all image references to use `/images/` paths and implemented consistent Next.js Image component usage across all service pages
- **Carousel Layout Consistency**: Implemented fixed-height containers (`min-h-[900px] md:min-h-[1000px]`) for all carousel slides to prevent navigation drift
- **Tech Installs Content Restoration**: Replaced Tech Installs slide with comprehensive structure including financing options, comparison table, and detailed service descriptions
- **Smooth Scroll Navigation**: Added `scroll-behavior: smooth` to global CSS and implemented proper anchor linking for "What We Do" section
- **Contact API Hardening**: Enhanced JSON parsing with content-type checking and improved error handling for Formspree integration
- **Pricing Section Integration**: Added comprehensive pricing component with care plans and website builds, integrated into homepage and dedicated pricing page
- **Pricing Features**: Interactive pricing cards with expandable feature lists, tabbed interface for Care Plans vs Website Builds, and responsive design
- **Navigation Updates**: Added "Pricing" link to main navigation and "Pricing" buttons to service cards on homepage
- **Homepage Website Focus**: Completely restructured homepage to focus exclusively on websites with new hero, plans teaser, why us, and CTA sections
- **Homepage Sections**: New hero with "Websites that grow with your business" headline, 3-column plans teaser row, "Why Syboh?" section with 4 benefit icons, and simplified CTA
- **Navigation Simplification**: Removed "What We Do" and "Our Process" links, changed "Pricing" to "Plans", streamlined to focus on website services
- **Complete Site Restructure**: Updated navigation to Home, Plans, Add-Ons, Work, About, Contact with active state indicators
- **New Pages**: Created Contact page with Google Form iframe, Add-Ons page with 3 service cards, Work page with project showcase
- **ResponsiveIframe Component**: Created reusable iframe wrapper for embedded forms and content
- **Pricing Page Enhancement**: Fixed heading typography, added comprehensive FAQ section with 6 common questions, improved section order
- **Footer Redesign**: Updated with mini sitemap, contact info, social icons, and improved styling
- **Typography Fix**: Fixed "g" descender cutoff in pricing page heading with proper line-height and padding
- **Native Forms Implementation**: Replaced Google Form embed with custom ContactForm component using Nodemailer + SMTP
- **Form System**: Created /contact (general) and /start-project (website intake) pages with honeypot spam protection
- **Email Integration**: Added SMTP mailer API route with proper error handling and email templating
- **CTA Updates**: Updated all "Start a Project" buttons to link to /start-project instead of /contact
- **Dependencies**: Added nodemailer and @types/nodemailer for email functionality
- **Contact API Route**: Created dedicated `/api/contact` route with proper validation, email formatting, and error handling
- **Start Project Page**: Created new page with Google Form embed and responsive iframe wrapper
- **Security Headers**: Updated CSP to allow Google Forms embedding, removed X-Frame-Options DENY
- **Contact Page Redesign**: Replaced ContactForm component with simple form and toast notifications
- **Navigation Updates**: Added "Start a Project" to main navigation, removed "About" link
- **Footer Enhancement**: Added disclaimer about managed hosting and security, updated quick links

### Fixed
- **TypeScript Errors**: Fixed `any` types in API routes, unused variables, and unused imports
- **ESLint Warnings**: Removed unused imports and variables across multiple files
- **TypeScript Fix**: Corrected `createTransporter` to `createTransport` in contact API route
- **Start Project Page**: Replaced Google Form embed with clean CTA button linking to external form
- **Contact Form**: Fixed double error message display issue

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
