import { buildWhatsAppUrl, whatsappMessages } from '@/data/contact';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1f1b17] text-[#f5ece1]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 15% 15%, rgb(159 104 68 / 0.34), transparent 42%), radial-gradient(circle at 80% 100%, rgb(112 73 47 / 0.28), transparent 40%)',
        }}
      />
      <div className="section-padding">
        <div className="container-custom relative">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="brand-wordmark text-xl md:text-2xl">HUELLA</div>
              <p className="mt-4 max-w-sm text-sm text-[#e2d2c1]">
                Arquitectura y sistemas habitables, pensados para acompañar
                distintas formas de vivir el territorio.
              </p>
            </div>

            <div>
              <div className="section-eyebrow text-[#d2b697]">
                Contacto rapido
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[#e6d7c7]">
                <li>babytomba@gmail.com</li>
                <li>+54 9 261 5010488</li>
                <li>Potrerillos, Mendoza</li>
              </ul>
            </div>

            <div>
              <div className="section-eyebrow text-[#d2b697]">
                Redes
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <span className="text-[#c9b3a0]">Instagram</span>
                </li>
                <li>
                  <a
                    className="u-focus rounded-sm text-[#e8dccf] hover:text-white"
                    href={buildWhatsAppUrl(whatsappMessages.contacto)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-[#c8b8a7]">
            (c) 2026 HUELLA. Todos los derechos reservados.
          </div>
          <a
            href="/llms.txt"
            className="sr-only focus:not-sr-only focus:absolute focus:bottom-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black focus:shadow"
            rel="nofollow"
          >
            LLM index
          </a>
        </div>
      </div>
    </footer>
  );
}
