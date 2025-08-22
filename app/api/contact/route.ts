import { NextResponse } from "next/server";
import { z } from "zod";
import { COMPANY } from "@/lib/constants";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional().default(""),
  message: z.string().min(1),
});

const resendKey = process.env.RESEND_API_KEY;
const formspreeUrl = process.env.FORMSPREE_URL || "";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { name, email, company, message } = parsed.data;
    const subject = `New website inquiry from ${name}`;
    const html = `
      <div style="font-family:system-ui,sans-serif;">
        <h2>${subject}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: COMPANY.emails.from,
        to: COMPANY.emails.info,
        subject,
        html,
      });
      return NextResponse.json({ ok: true });
    }

    if (formspreeUrl) {
      const resp = await fetch(formspreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, _subject: subject }),
      });
      const ok = resp.ok;
      return NextResponse.json({ ok });
    }

    return NextResponse.json({ error: "No email provider configured" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


