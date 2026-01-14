import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeScript } from "@/components/ThemeScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Carter | Product Designer & Front-End Engineer",
  description:
    "Alex Carter is a product designer and front-end engineer building thoughtful digital products.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Alex Carter | Product Designer & Front-End Engineer",
    description:
      "Explore projects, experience, and ways to connect with Alex Carter.",
    url: "https://example.com",
    siteName: "Alex Carter",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
