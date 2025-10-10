import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  website?: string; // Honeypot field
  'g-recaptcha-response'?: string; // reCAPTCHA token
}

interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  score?: number;
  action?: string;
  'error-codes'?: string[];
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

    // Anti-spam check #1: Honeypot field
    // If the 'website' field is filled, it's likely a bot
    if (body.website && body.website.trim() !== '') {
      console.warn('Honeypot triggered - potential spam submission blocked');
      // Return success to not alert the bot
      return NextResponse.json({ success: true });
    }

    // Anti-spam check #2: Verify reCAPTCHA v3 token
    const recaptchaToken = body['g-recaptcha-response'];
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!recaptchaToken || !recaptchaSecretKey) {
      console.warn('reCAPTCHA verification missing');
      return NextResponse.json(
        { success: false, error: "Security verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token with Google
    const recaptchaVerifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    const recaptchaResponse = await fetch(recaptchaVerifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
    });

    const recaptchaData: RecaptchaResponse = await recaptchaResponse.json();

    // Check if reCAPTCHA verification was successful
    if (!recaptchaData.success) {
      console.warn('reCAPTCHA verification failed:', recaptchaData['error-codes']);
      return NextResponse.json(
        { success: false, error: "Security verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Check reCAPTCHA score (v3 returns a score from 0.0 to 1.0)
    // Score interpretation: 1.0 is very likely a good interaction, 0.0 is very likely a bot
    const minScore = 0.5; // Adjust threshold as needed (0.5 is recommended)
    if (recaptchaData.score !== undefined && recaptchaData.score < minScore) {
      console.warn(`reCAPTCHA score too low: ${recaptchaData.score} - potential spam blocked`);
      // Return success to not alert sophisticated bots
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // Use SSL for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Create email content
    const subject = `New Contact Form Submission from ${body.name}`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${body.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <a href="mailto:${body.email}">${body.email}</a>
            </td>
          </tr>
          ${body.phone ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${body.phone}</td>
          </tr>
          ` : ''}
          ${body.company ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${body.company}</td>
          </tr>
          ` : ''}
        </table>
        
        <div style="margin-top: 20px;">
          <h3 style="color: #333;">Message:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
            ${body.message}
          </div>
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>This message was sent from the Syboh Solutions contact form.</p>
          <p>Submitted at: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Syboh Solutions Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      replyTo: body.email,
      subject,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    console.error("Contact form error:", error);
    
    const errorMessage = error instanceof Error ? error.message : "Failed to send contact form submission";
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage
      },
      { status: 500 }
    );
  }
}


