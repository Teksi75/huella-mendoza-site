import type { Metadata } from 'next';
import Link from 'next/link';
import { buildWhatsAppUrl, whatsappMessages } from '@/data/contact';

export const metadata: Metadata = {
  title: 'HUELLA Refugios – Estadías en Potrerillos',
};

export default function RefugiosPage() {
  return (
    <main>
      <section
        id="refugios"
        className="section-padding scroll-mt-28 bg-[#ece1d3] pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="u-card mb-6 border border-[#d5b8b8] bg-[#fff4f4] p-4 text-sm text-[#7f4f31]">
              Hoy no hay disponibilidad. Si te interesa vivir la experiencia HUELLA Refugios, sumate a la lista de espera y te avisamos apenas abramos fechas.
            </div>
            <p className="section-eyebrow">Refugios</p>
            <h2 className="section-title section-title-section">HUELLA Refugios</h2>
            <p className="mt-4 text-base text-[#5a6662]">
              Refugios de uso temporal diseñados para descansar con luz suave, silencio y vistas abiertas.
              <br />
              Todo resuelto para llegar, usar y volver liviano.
            </p>
            <Link
              href={buildWhatsAppUrl(whatsappMessages.refugios)}
              target="_blank"
              rel="noopener noreferrer"
              className="u-btn-secondary u-ease u-focus mt-8 inline-flex"
            >
              Sumarme a la lista de espera
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8f2e8]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="section-title section-title-section">La experiencia</h2>
            <ul className="mt-6 grid gap-3 text-sm text-[#5a6662]">
              <li>Luz cálida y abrigo resueltos para acompañar el ritmo del día.</li>
              <li>Silencio y privacidad para desconectar sin esfuerzos.</li>
              <li>Paisaje presente en cada mirada desde espacios simples de usar.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#ece1d3]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="section-title section-title-section">Cómo reservar</h2>
            <ol className="mt-6 grid list-decimal list-inside gap-3 text-sm text-[#5a6662]">
              <li>Contanos fechas, cantidad de personas y necesidades especiales.</li>
              <li>Te avisamos apenas haya fechas, junto con servicios y detalles de acceso.</li>
              <li>Coordinamos la reserva y el ingreso de forma simple.</li>
            </ol>
            <Link
              href={buildWhatsAppUrl(whatsappMessages.refugiosReserva)}
              target="_blank"
              rel="noopener noreferrer"
              className="u-btn-secondary u-ease u-focus mt-8 inline-flex"
            >
              Avisame cuando haya fechas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
