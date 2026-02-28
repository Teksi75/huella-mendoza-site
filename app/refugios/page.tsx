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
              HUELLA Refugios funciona con cupos limitados. Consultanos por próximas fechas disponibles.
            </div>
            <p className="section-eyebrow">Refugios</p>
            <h2 className="section-title section-title-section">HUELLA Refugios</h2>
            <p className="mt-4 text-base text-[#5a6662]">
              Alojamiento turístico en funcionamiento en Potrerillos, con vista al lago y
              arquitectura contemporánea.
              <br />
              Espacios de escala precisa, bien orientados y resueltos para estadías cortas.
            </p>
            <Link
              href={buildWhatsAppUrl(whatsappMessages.refugios)}
              target="_blank"
              rel="noopener noreferrer"
              className="u-btn-secondary u-ease u-focus mt-8 inline-flex"
            >
              Consultar disponibilidad
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8f2e8]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="section-title section-title-section">El proyecto</h2>
            <ul className="mt-6 grid gap-3 text-sm text-[#5a6662]">
              <li>Implantación orientada al lago, con aperturas que priorizan visuales largas.</li>
              <li>Arquitectura contemporánea y materialidad cuidada, diferenciada en Potrerillos.</li>
              <li>Distribución compacta y equipamiento completo para operación turística real.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#ece1d3]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="section-title section-title-section">Cómo reservar</h2>
            <ol className="mt-6 grid list-decimal list-inside gap-3 text-sm text-[#5a6662]">
              <li>Compartinos fechas y cantidad de huéspedes.</li>
              <li>Confirmamos opciones vigentes según disponibilidad limitada.</li>
              <li>Coordinamos reserva, acceso y condiciones de estadía.</li>
            </ol>
            <Link
              href={buildWhatsAppUrl(whatsappMessages.refugiosReserva)}
              target="_blank"
              rel="noopener noreferrer"
              className="u-btn-secondary u-ease u-focus mt-8 inline-flex"
            >
              Consultar fechas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
