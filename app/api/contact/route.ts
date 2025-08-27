import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

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
    const transporter = nodemailer.createTransporter({
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


