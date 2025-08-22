# Syboh Brand Guide (v1)

## Brand Identity
**Syboh Solutions** - Operator-first systems. Real-world ROI.

## Color Palette

### Primary Colors
- **Background**: `#0E1420` (Deep Navy)
- **Text**: `#F5F5F5` (Off-White)
- **Muted Text**: `#9CA3AF` (Gray)

### Accent Gradient
- **Primary Gradient**: `#1AE0F2` → `#58F272` → `#F2E91A`
- **Teal Start**: `#1AE0F2`
- **Green Middle**: `#58F272`
- **Yellow End**: `#F2E91A`

### Usage Guidelines
- Use gradient sparingly for highlights and CTAs
- Maintain deep navy background for consistency
- Ensure WCAG AA contrast ratios (4.5:1 minimum)
- Use muted colors for secondary information

## Typography

### Font Stack
- **Headings**: Poppins (600–700 weight)
- **Body**: Inter (400–500 weight)
- **Fallback**: Arial, Helvetica, sans-serif

### Font Sizes
- **H1**: 2.5rem (40px) - Page titles
- **H2**: 2rem (32px) - Section headers
- **H3**: 1.5rem (24px) - Subsection headers
- **Body**: 1rem (16px) - Main content
- **Small**: 0.875rem (14px) - Captions, metadata

## Logo Usage

### Primary Logo
- **File**: `/public/images/sybohfrogtransparentbackground.png`
- **Usage**: Header navigation, primary brand mark
- **Sizing**: `h-12 w-auto` (48px height, auto width)
- **Background**: Transparent (blends with any background)

### Secondary Logo
- **File**: `/public/images/SybohWeblogo.png`
- **Usage**: Hero sections, marketing materials
- **Sizing**: Responsive, maintain aspect ratio
- **Background**: Full logo with background

### Logo Guidelines
- Never stretch or distort the logo
- Maintain minimum 24px height for readability
- Use transparent version on colored backgrounds
- Keep clear space around logo (minimum 1x logo height)

## UI Components

### Buttons
- **Primary**: Gradient background with hover animation
- **Secondary**: Transparent with gradient border
- **Text**: Gradient text color
- **Hover**: Shift gradient position slightly

### Cards & Containers
- **Background**: Slightly lighter than main background (`#1F2937`)
- **Border**: Subtle gradient or muted color
- **Shadow**: Minimal, dark theme appropriate

### Forms
- **Input Background**: Dark, contrasting with text
- **Focus States**: Gradient border or outline
- **Validation**: Green for success, red for errors

## Visual Elements

### Icons
- Use Lucide React icons
- Maintain consistent stroke width
- Use brand colors for accent icons
- Keep icons simple and recognizable

### Images
- High contrast against dark backgrounds
- Optimize for web (WebP format preferred)
- Maintain aspect ratios
- Use alt text for accessibility

### Animations
- Subtle, purposeful movements
- Use CSS transitions (200-300ms)
- Avoid excessive motion
- Respect user's motion preferences

## Content Guidelines

### Voice & Tone
- **Professional** but approachable
- **Technical** but accessible
- **Confident** but not boastful
- **Solution-focused** rather than feature-focused

### Messaging
- Emphasize "operator-first" approach
- Focus on real-world ROI and results
- Use concrete examples and case studies
- Avoid jargon, explain technical concepts clearly

## Accessibility

### Color Contrast
- Maintain 4.5:1 contrast ratio minimum
- Test all text combinations
- Provide alternative indicators beyond color
- Support high contrast mode

### Typography
- Minimum 16px font size for body text
- Line height of 1.5 for readability
- Avoid all caps for long text
- Use proper heading hierarchy

### Interactive Elements
- Clear focus indicators
- Adequate touch targets (44px minimum)
- Keyboard navigation support
- Screen reader compatibility

## File Organization

### Assets
- Store logos in `/public/images/`
- Use descriptive filenames
- Optimize for web delivery
- Maintain version control

### Implementation
- Use CSS custom properties for colors
- Implement in Tailwind CSS configuration
- Document any deviations from guide
- Regular brand audits and updates

## Version Control
- **Current Version**: v1.0
- **Last Updated**: December 2024
- **Next Review**: Quarterly
- **Contact**: Design team for questions or updates
