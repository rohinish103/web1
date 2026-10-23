import { ImageResponse } from "next/og";

export const alt = "Yumi — Learn a language. Make a connection.";
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
          justifyContent: "center",
          padding: 90,
          background: "linear-gradient(135deg, #f4effe 0%, #fbf8f3 50%, #e8effd 100%)",
          color: "#231d35",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 24,
              background: "linear-gradient(135deg, #8b5cf6, #60a5fa)",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 48, fontWeight: 700 }}>yumi</div>
        </div>
        <div style={{ marginTop: 60, fontSize: 78, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
          Learn a language.
        </div>
        <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -2, color: "#7c3aed", lineHeight: 1.05 }}>
          Make a connection.
        </div>
        <div style={{ marginTop: 36, fontSize: 30, color: "#5f5873" }}>
          Your AI language-learning companion
        </div>
      </div>
    ),
    size,
  );
}
