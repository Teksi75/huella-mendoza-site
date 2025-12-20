export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-2xl font-bold tracking-tight">HUELLA</div>
              <p className="mt-4 text-sm text-gray-300">
                Arquitectura y experiencias en la montana, pensadas para vivir
                el territorio con diseno y calma.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Contacto rapido
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>info@huella.com</li>
                <li>+54 9 261 000 0000</li>
                <li>Potrerillos, Mendoza</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Redes
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a className="text-gray-300 hover:text-white" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white" href="#">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white" href="#">
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
