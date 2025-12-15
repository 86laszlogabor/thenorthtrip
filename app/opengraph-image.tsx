import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "#030712",
          color: "white",
        }}
      >
        <div style={{ fontSize: 22, opacity: 0.8 }}>thenorthtrip</div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 16, lineHeight: 1.05 }}>
          Deposits. Debit rules. Winter add-ons.
        </div>
        <div style={{ fontSize: 26, opacity: 0.8, marginTop: 22 }}>
          Small guides that prevent expensive “oops”.
        </div>
      </div>
    ),
    size
  );
}
