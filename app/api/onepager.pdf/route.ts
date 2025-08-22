import { NextResponse } from "next/server";
import { COMPANY } from "@/lib/constants";

export const dynamic = "force-dynamic";

export async function GET() {
  // Minimal placeholder PDF generated from HTML using a data URI for now to avoid native dependencies.
  // For production-grade PDFs, integrate a headless Chrome or @react-pdf/renderer pipeline.
  const html = `
    <html>
      <head><meta charset="utf-8"/></head>
      <body style="font-family:Arial,Helvetica,sans-serif;padding:24px">
        <h1 style="margin:0 0 8px 0">${COMPANY.shortName}</h1>
        <p style="margin:0 0 16px 0">${COMPANY.tagline}</p>
        <h2 style="margin:16px 0 8px 0">Roadmaps</h2>
        <ul>
          <li>Vending Machines: launch → stability → credit-building → growth</li>
          <li>Self-Pour / BohBar: sizing, install, training, optimization</li>
          <li>Hospitality Training: standards, upsell, retention</li>
          <li>Website & Branding: fast site, clear CTA, SEO</li>
        </ul>
        <p style="margin-top:24px">Contact: ${COMPANY.emails.info}</p>
      </body>
    </html>
  `;

  // Return HTML with application/pdf hint so browsers can "Print to PDF"; avoids heavy deps.
  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": "inline; filename=syboh-onepager.html",
    },
  });
}


