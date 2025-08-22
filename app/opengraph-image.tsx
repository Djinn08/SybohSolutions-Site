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
          background: "#0d1117",
          color: "#f0f0f0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: 80,
          position: "relative",
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(0, 230, 230, 0.1), rgba(214, 255, 87, 0.1))",
          }}
        />
        <div style={{ 
          fontSize: 36, 
          opacity: 0.85,
          color: "#00e6e6",
          fontWeight: 600,
        }}>
          {COMPANY.shortName}
        </div>
        <div style={{ 
          fontWeight: 700,
          fontSize: 48,
          marginTop: 16,
          color: "#f0f0f0",
        }}>
          {COMPANY.tagline}
        </div>
      </div>
    ),
    size
  );
}


