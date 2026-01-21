import { buildWhatsAppUrl, whatsappMessages } from '@/data/contact';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-2xl font-bold tracking-tight">HUELLA</div>
              <p className="mt-4 text-sm text-gray-300">
                Arquitectura y sistemas habitables, pensados para acompañar
                distintas formas de vivir el territorio.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Contacto rapido
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>babytomba@gmail.com</li>
                <li>+54 9 261 5010488</li>
                <li>Potrerillos, Mendoza</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Redes
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <span className="text-stone-500">Instagram</span>
                </li>
                <li>
                  <a
                    className="text-gray-300 hover:text-white"
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

          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-gray-400">
            (c) {new Date().getFullYear()} HUELLA. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
