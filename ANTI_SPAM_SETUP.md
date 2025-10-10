# Anti-Spam Configuration Guide

This document explains the anti-spam measures implemented in the contact forms and how to configure them.

## Overview

The contact forms use two layers of spam protection:
1. **Honeypot field** - A hidden field that humans won't see but bots will fill
2. **Google reCAPTCHA v3** - Invisible verification that scores user interactions

## Required Environment Variables

Add these to your `.env.local` file (create one if it doesn't exist):

```env
# Google reCAPTCHA v3 Configuration
# Get your keys from: https://www.google.com/recaptcha/admin
# Select reCAPTCHA v3 when creating keys
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key-here
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key-here

# Existing SMTP Configuration (already set up)
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=your-email@example.com
SMTP_PASS=your-smtp-password
SMTP_TO=recipient@example.com
```

## Getting reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" or "+" to register a new site
3. Fill in the form:
   - **Label**: Syboh Solutions (or your site name)
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: Add your domains (e.g., `sybohsolutions.com`, `localhost` for dev)
4. Accept terms and submit
5. Copy the **Site Key** → Use as `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
6. Copy the **Secret Key** → Use as `RECAPTCHA_SECRET_KEY`

## How It Works

### Frontend Protection

1. **Honeypot Field**:
   - An invisible input field named `website` is added to both contact forms
   - It's hidden using CSS (`position: absolute; left: -9999px`)
   - Has `tabIndex={-1}` and `autoComplete="off"` to prevent human interaction
   - Bots typically auto-fill all form fields, including this one

2. **reCAPTCHA v3**:
   - Script loads automatically in the layout via `<head>`
   - Executes invisibly on form submission
   - Generates a token with action `contact_form`
   - No user interaction required (no checkbox)

### Backend Validation

The API route (`app/api/contact/route.ts`) validates both measures:

1. **Honeypot Check**:
   ```typescript
   if (body.website && body.website.trim() !== '') {
     // Block spam, return success to not alert the bot
     return NextResponse.json({ success: true });
   }
   ```

2. **reCAPTCHA Verification**:
   - Sends token to Google's verification endpoint
   - Checks if verification succeeded
   - Validates the score (0.0 to 1.0, where 1.0 is human-like)
   - Default minimum score: **0.5** (adjustable in `route.ts`)

## Adjusting the Score Threshold

In `app/api/contact/route.ts`, line 70:

```typescript
const minScore = 0.5; // Adjust as needed
```

**Score Guidelines**:
- **0.9 - 1.0**: Very likely human (strictest)
- **0.7 - 0.8**: Likely human
- **0.5**: Balanced (recommended)
- **0.3 - 0.4**: More permissive
- **0.0 - 0.2**: Likely bot

Lower threshold = fewer false positives but more spam may get through.

## Testing

### Test Honeypot
You can test by manually filling the honeypot field (open dev tools, find the `website` input, and enter text). The form should "succeed" but no email will be sent.

### Test reCAPTCHA
- **Dev environment**: Use `localhost` as a domain in reCAPTCHA admin
- **Production**: Ensure your domain is added to the allowed list
- Check browser console for reCAPTCHA errors
- Check server logs for verification failures

## Monitoring

The API route logs spam attempts:
- `Honeypot triggered - potential spam submission blocked`
- `reCAPTCHA verification failed: [error-codes]`
- `reCAPTCHA score too low: X.XX - potential spam blocked`

Check your server logs regularly to monitor spam attempts.

## Files Modified

- `components/ContactForm.tsx` - Added honeypot and reCAPTCHA to component form
- `app/contact/page.tsx` - Added honeypot and reCAPTCHA to contact page form
- `app/layout.tsx` - Added reCAPTCHA script to head
- `app/api/contact/route.ts` - Added backend validation logic

## User Experience

✅ **No impact on legitimate users**:
- No visible changes to the form
- No "I'm not a robot" checkbox
- reCAPTCHA v3 runs invisibly
- Same submission experience as before

✅ **Effective against spam**:
- Blocks simple bots with honeypot
- Blocks sophisticated bots with reCAPTCHA
- Two-layer defense

## Troubleshooting

**Forms not submitting**:
- Check if environment variables are set correctly
- Verify reCAPTCHA keys match your domain
- Check browser console for JavaScript errors
- Check server logs for API errors

**Too many false positives (real users blocked)**:
- Lower the `minScore` threshold (try 0.3-0.4)
- Check if reCAPTCHA is loading properly (network tab)
- Verify domain is whitelisted in reCAPTCHA admin

**Still getting spam**:
- Increase the `minScore` threshold (try 0.7-0.8)
- Check honeypot is properly hidden in production CSS
- Monitor logs to see which protection is being bypassed

