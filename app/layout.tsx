import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildWhatsAppUrl, whatsappMessages } from "@/data/contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HUELLA – Arquitectura y espacios para habitar",
  description: "Soluciones habitacionales y experiencias turísticas integradas al paisaje de Potrerillos, Mendoza",
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
