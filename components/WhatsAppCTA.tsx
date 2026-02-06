"use client";

import { usePathname } from "next/navigation";
import { buildWhatsAppUrl, whatsappMessages } from "@/data/contact";

const routeMessages: Array<{ prefix: string; message: string }> = [
  { prefix: "/base", message: whatsappMessages.base },
  { prefix: "/diseno", message: whatsappMessages.diseno },
  { prefix: "/refugios", message: whatsappMessages.refugios },
  { prefix: "/proyectos", message: whatsappMessages.proyectos },
  { prefix: "/contacto", message: whatsappMessages.contacto },
];

const getMessageForPath = (pathname: string | null) => {
  if (!pathname) {
    return whatsappMessages.home;
  }

  const match = routeMessages.find(
    ({ prefix }) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  return match?.message ?? whatsappMessages.home;
};

const WhatsAppCTA = () => {
  const pathname = usePathname();
  const message = getMessageForPath(pathname);

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="u-btn-primary u-ease fixed bottom-4 right-4 z-50 inline-flex items-center justify-center px-4 py-3 text-sm shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-med)]"
    >
      WhatsApp
    </a>
  );
};

export default WhatsAppCTA;
