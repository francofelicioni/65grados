import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "65 Grados · Café de Especialidad Taiwanesa · Núñez",
  description:
    "Pastelería y café de especialidad taiwanesa en Núñez, Buenos Aires. Tostadores propios, pastelería artesanal, specialty coffee, filtrados y bubble tea. Iberá 2386.",
  keywords: [
    "café especialidad",
    "taiwanese café",
    "núñez",
    "buenos aires",
    "specialty coffee",
    "bubble tea",
    "pastelería",
    "65 grados",
  ],
  openGraph: {
    title: "65 Grados · Café de Especialidad Taiwanesa",
    description: "Tostadores propios · Pastelería artesanal · Núñez, Buenos Aires",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
