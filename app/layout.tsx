import type { Metadata } from "next";
import { Space_Grotesk, Spectral } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "John McChesney TenEyck Jr.",
  description:
    "Builder and operator focused on practical systems, product craftsmanship, and reliable infrastructure."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spectral.variable}`}>
      <body className="font-serif antialiased">{children}</body>
    </html>
  );
}
