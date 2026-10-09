import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: AI engineering and Oracle ERP, on one network`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          color: "#0e1116",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>{site.name}</div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2, maxWidth: 900 }}>
          AI engineering and Oracle ERP, on one network.
        </div>
        <svg width="1056" height="120" viewBox="0 0 1056 120">
          <path d="M0 20 H300 L360 80 H1056" fill="none" stroke="#f2a20c" strokeWidth="12" />
          <path d="M0 110 H290 L306 94 H1056" fill="none" stroke="#1f49c7" strokeWidth="12" />
          <rect x="500" y="66" width="26" height="42" rx="13" fill="#fff" stroke="#0e1116" strokeWidth="4" />
          <rect x="640" y="66" width="26" height="42" rx="13" fill="#fff" stroke="#0e1116" strokeWidth="4" />
          <rect x="780" y="66" width="26" height="42" rx="13" fill="#fff" stroke="#0e1116" strokeWidth="4" />
          <circle cx="120" cy="20" r="11" fill="#fff" stroke="#0e1116" strokeWidth="4" />
          <circle cx="220" cy="20" r="11" fill="#fff" stroke="#0e1116" strokeWidth="4" />
          <circle cx="120" cy="110" r="11" fill="#fff" stroke="#0e1116" strokeWidth="4" />
          <circle cx="220" cy="110" r="11" fill="#fff" stroke="#0e1116" strokeWidth="4" />
        </svg>
      </div>
    ),
    size,
  );
}
