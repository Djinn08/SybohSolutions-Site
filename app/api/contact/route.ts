import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { COMPANY } from "@/lib/constants";
import { Resend } from "resend";
import { logger } from "@/lib/logger";

// Enhanced schema with stricter validation
const schema = z.object({
  name: z.string().min(1).max(100).regex(/^[a-zA-Z\s\-']+$/, "Name contains invalid characters"),
  email: z.string().email().max(254),
  company: z.string().max(100).optional().default(""),
  message: z.string().min(1).max(2000).regex(/^[a-zA-Z0-9\s\-_.,!?@#$%^&*()+=<>[\]{}|\\/`~'"]+$/, "Message contains invalid characters"),
});

// Rate limiting for contact form
const contactRateLimit = new Map<string, { count: number; resetTime: number }>();
const CONTACT_RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes
const CONTACT_RATE_LIMIT_MAX = 3; // 3 submissions per 5 minutes

function getContactRateLimitKey(req: NextRequest): string {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  return `contact:${ip}`;
}

function checkContactRateLimit(req: NextRequest): boolean {
  const key = getContactRateLimitKey(req);
  const now = Date.now();
  const record = contactRateLimit.get(key);

  if (!record || now > record.resetTime) {
    contactRateLimit.set(key, {
      count: 1,
      resetTime: now + CONTACT_RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (record.count >= CONTACT_RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

// Input sanitization
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .substring(0, 2000); // Limit length
}

export async function POST(req: NextRequest) {
  // Check rate limit
  if (!checkContactRateLimit(req)) {
    logger.warn("Contact form rate limit exceeded", { 
      ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown' 
    }, 'contact-form');
    return NextResponse.json(
      { error: "Too many contact form submissions. Please try again later." },
      { status: 429 }
    );
  }

  // Validate request method
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: "Method not allowed" },
      { status: 405 }
    );
  }

  // Validate content type
  const contentType = req.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    return NextResponse.json(
      { error: "Invalid content type" },
      { status: 400 }
    );
  }

  try {
    const data = await req.json();
    
    // Validate and sanitize input
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      logger.error("Contact form validation failed", { 
        errors: parsed.error.issues,
        data: { name: data.name, email: data.email, company: data.company, messageLength: data.message?.length }
      }, 'contact-form');
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { name, email, company, message } = parsed.data;
    
    // Additional sanitization
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = email.toLowerCase().trim();
    const sanitizedCompany = sanitizeInput(company);
    const sanitizedMessage = sanitizeInput(message);

    // Validate email domain (basic check)
    const emailDomain = sanitizedEmail.split('@')[1];
    if (!emailDomain || emailDomain.length < 3) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const subject = `New website inquiry from ${sanitizedName}`;
    const html = `
      <div style="font-family:system-ui,sans-serif;">
        <h2>${subject}</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Company:</strong> ${sanitizedCompany}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
        <hr>
        <p><small>Submitted from IP: ${req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'}</small></p>
      </div>
    `;

    const resendKey = process.env.RESEND_API_KEY;
    const formspreeUrl = process.env.FORMSPREE_URL || "";

    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: COMPANY.emails.from,
          to: COMPANY.emails.info, // Use CONTACT_TO environment variable
          subject,
          html,
        });
        logger.contactForm(parsed.data as Record<string, unknown>, true);
        return NextResponse.json({ ok: true });
      } catch (emailError) {
        logger.error("Email sending failed", { error: emailError }, 'contact-form');
        logger.contactForm(parsed.data as Record<string, unknown>, false, "Email sending failed");
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }
    }

    if (formspreeUrl) {
      try {
        const resp = await fetch(formspreeUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            name: sanitizedName, 
            email: sanitizedEmail, 
            company: sanitizedCompany, 
            message: sanitizedMessage, 
            _subject: subject 
          }),
        });
        const ok = resp.ok;
        if (ok) {
          logger.contactForm(parsed.data as Record<string, unknown>, true);
        } else {
          logger.contactForm(parsed.data as Record<string, unknown>, false, "Formspree request failed");
        }
        return NextResponse.json({ ok });
      } catch (formspreeError) {
        logger.error("Formspree request failed", { error: formspreeError }, 'contact-form');
        logger.contactForm(parsed.data as Record<string, unknown>, false, "Formspree request failed");
        return NextResponse.json(
          { error: "Failed to send message" },
          { status: 500 }
        );
      }
    }

    logger.error("No email provider configured", { 
      resendKey: !!resendKey, 
      formspreeUrl: !!formspreeUrl 
    }, 'contact-form');
    logger.contactForm(parsed.data as Record<string, unknown>, false, "No email provider configured");
    return NextResponse.json(
      { error: "No email provider configured" },
      { status: 500 }
    );
  } catch (error) {
    logger.error("Contact form server error", { error }, 'contact-form');
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}


