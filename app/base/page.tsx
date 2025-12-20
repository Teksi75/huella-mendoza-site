import Link from 'next/link';

export default function BasePage() {
  return (
    <main>
      <section
        id="huella-base"
        className="section-padding bg-tierra-50 scroll-mt-24 md:scroll-mt-28"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>HUELLA Base</h2>
            <p className="mt-3">
              Unidades claras para avanzar rapido, con orden y previsibilidad.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-600">
              <li>Plazos y pasos definidos desde el inicio.</li>
              <li>Niveles de terminacion que se ajustan a tu presupuesto.</li>
              <li>Costos claros para decidir con confianza.</li>
            </ul>
            <Link href="/contacto" className="btn-secondary mt-8 inline-flex">
              Consultar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
