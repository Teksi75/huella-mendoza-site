import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HUELLA Refugios – Estadías en Potrerillos',
};

export default function RefugiosPage() {
  return (
    <main>
      <section
        id="refugios"
        className="section-padding bg-tierra-50 scroll-mt-28 pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>HUELLA Refugios</h2>
            <p className="mt-4 text-base text-gray-600">
              Refugios de uso temporal diseñados para descansar con luz suave, silencio y vistas abiertas.
              <br />
              Todo resuelto para llegar, usar y volver liviano.
            </p>
            <Link href="/contacto" className="btn-secondary mt-8 inline-flex">
              Consultar disponibilidad
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>La experiencia</h2>
            <ul className="mt-6 grid gap-3 text-sm text-gray-600">
              <li>Luz cálida y abrigo resueltos para acompañar el ritmo del día.</li>
              <li>Silencio y privacidad para desconectar sin esfuerzos.</li>
              <li>Paisaje presente en cada mirada desde espacios simples de usar.</li>
          </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Cómo reservar</h2>
            <ol className="mt-6 grid gap-3 text-sm text-gray-600 list-decimal list-inside">
              <li>Contanos fechas, cantidad de personas y necesidades especiales.</li>
              <li>Confirmamos disponibilidad, servicios y detalles de acceso.</li>
              <li>Coordinamos la reserva y el ingreso de forma simple.</li>
            </ol>
            <Link href="/contacto" className="btn-secondary mt-8 inline-flex">
              Consultar disponibilidad
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
