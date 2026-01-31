import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const inter = localFont({
  src: [
    {
      path: "./fonts/inter-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
});

const siteUrl = "https://huella-mendoza-site.vercel.app";
const title = "HUELLA";
const description = "Arquitectura para habitar el paisaje.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og/og-huella.png`,
        secureUrl: `${siteUrl}/og/og-huella.png`,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og/og-huella.png`,
        alt: title,
      },
    ],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
