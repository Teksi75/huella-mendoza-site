import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildWhatsAppUrl, whatsappMessages } from "@/data/contact";

const inter = Inter({ subsets: ["latin"] });

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
        url: "/og/og-huella.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/og-huella.png"],
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
        <a
          href={buildWhatsAppUrl(whatsappMessages.home)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="btn-primary fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full px-4 py-3 text-sm shadow-lg"
        >
          WhatsApp
        </a>
      </body>
    </html>
  );
}
