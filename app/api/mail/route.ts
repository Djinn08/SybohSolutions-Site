import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot: if hidden field has content, bail
    if (body._hp) {
      return NextResponse.json({ ok: true });
    }

    const {
      fromName = "Website",
      fromEmail,
      subject = "New message",
      html,
    } = body;

    if (!fromEmail || !html) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., "mail.privateemail.com"
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // info@sybohsolutions.com
        pass: process.env.SMTP_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"${fromName}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER, // default to same inbox
      replyTo: fromEmail,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Mail send failed" }, { status: 500 });
  }
}
