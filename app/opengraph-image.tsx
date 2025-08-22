import { ImageResponse } from "next/og";
import { COMPANY } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${COMPANY.shortName} — ${COMPANY.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 36, opacity: 0.85 }}>{COMPANY.shortName}</div>
        <div style={{ fontWeight: 700 }}>{COMPANY.tagline}</div>
      </div>
    ),
    size
  );
}


