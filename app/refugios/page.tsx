import Link from 'next/link';

export default function RefugiosPage() {
  return (
    <main>
      <section id="huella-refugios" className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>HUELLA Refugios</h2>
            <p className="mt-4 text-base text-gray-600">
              Pausas reales en el paisaje, con luz suave y silencio.
              <br />
              Un descanso simple, pensado para volver liviano.
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
              <li>Luz calida que acompana el ritmo del dia.</li>
              <li>Silencio que permite bajar el ruido interno.</li>
              <li>Paisaje presente en cada mirada y cada pausa.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Como reservar</h2>
            <ol className="mt-6 grid gap-3 text-sm text-gray-600 list-decimal list-inside">
              <li>Contanos fechas y cantidad de personas.</li>
              <li>Confirmamos disponibilidad y detalles.</li>
              <li>Coordinamos la reserva de forma simple.</li>
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
