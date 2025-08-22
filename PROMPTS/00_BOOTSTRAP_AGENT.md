# Bootstrap Me (Syboh)

## Context Loading
Load and understand context from:
- README.md
- SECURITY.md
- BRAND_GUIDE.md
- CHANGELOG.md

## Initial Verification Checklist

### Security Verification
- [ ] Verify security headers are present in `next.config.ts`
- [ ] Confirm CSP is configured (report-only mode)
- [ ] Check rate limiting is implemented in middleware
- [ ] Validate input sanitization in contact form
- [ ] Ensure no hardcoded secrets in codebase

### Branding Verification
- [ ] Confirm brand colors are applied globally:
  - Background: #0E1420 (deep navy)
  - Accent gradient: #1AE0F2 → #58F272 → #F2E91A
  - Text: #F5F5F5 (off-white)
- [ ] Verify Poppins font is loaded for headings
- [ ] Check logo placement: transparent frog at `h-12 w-auto` in navbar
- [ ] Ensure gradient text effects are applied to headings

### Technical Verification
- [ ] Confirm Next.js 15 with App Router
- [ ] Verify Tailwind CSS v4 is configured
- [ ] Check TypeScript strict mode is enabled
- [ ] Validate responsive design implementation
- [ ] Confirm accessibility standards (WCAG AA)

## Development Workflow
1. **Before making changes**: Read relevant documentation
2. **When editing UI**: Ensure responsive, accessible, semantic HTML
3. **When adding content**: Propose edits in `/content` directory first
4. **After completing tasks**: Append concise entry to CHANGELOG.md
5. **Before deployment**: Test locally and verify security measures

## Key Commands
```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Deploy (Vercel auto-deploys on push)
git add . && git commit -m "update" && git push
```

## File Structure Reminders
- `/components` - Reusable UI components
- `/app` - Next.js App Router pages
- `/lib` - Utilities and configurations
- `/public` - Static assets
- `/content` - Copy and content management
- `/PROMPTS` - AI assistant prompts

## Security Reminders
- Never commit secrets to repository
- Use Vercel environment variables
- Maintain security headers and CSP
- Keep rate limiting and input validation
- Follow "boringly secure" principle

## Brand Consistency
- Use gradient accents sparingly for highlights
- Maintain deep navy background
- Keep logo proportions consistent
- Use Poppins for headings, Inter for body text
- Ensure proper contrast ratios
