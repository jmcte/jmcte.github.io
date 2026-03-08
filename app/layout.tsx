import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Redirecting to jmcte.me",
  description: "jmcte.github.io redirects to the primary jmcte.me site.",
  alternates: {
    canonical: "https://jmcte.me/"
  },
  robots: {
    index: false,
    follow: false
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <meta httpEquiv="refresh" content="0; url=https://jmcte.me/" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
