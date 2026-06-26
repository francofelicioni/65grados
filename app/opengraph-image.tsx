import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} · Café de Especialidad Taiwanesa`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/logos/logo.jpg"),
  );
  const logoSrc = `data:image/jpeg;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1aaa",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        <img src={logoSrc} width={260} height={260} alt="" />
        <p
          style={{
            color: "white",
            fontSize: 52,
            fontWeight: 300,
            marginTop: 32,
            marginBottom: 0,
            letterSpacing: "0.04em",
          }}
        >
          65 Grados
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 28,
            marginTop: 16,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Taiwanese Specialty Café · Núñez
        </p>
      </div>
    ),
    { ...size },
  );
}
