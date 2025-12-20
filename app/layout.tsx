import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";  // Lo comentamos por ahora para evitar error

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HUELLA - Diseño y experiencias en la montaña",
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
        {/* <Footer /> */}  {/* Lo dejamos comentado hasta crear el Footer */}
      </body>
    </html>
  );
}