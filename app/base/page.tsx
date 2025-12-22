import Link from 'next/link';

export default function BasePage() {
  return (
    <main>
      <section
        id="base"
        className="section-padding bg-tierra-50 scroll-mt-28 pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>HUELLA Base</h2>
            <p className="mt-3">
              Modulos habitacionales estandarizados que avanzan con plazos, alcances y terminaciones definidas.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-600">
              <li>Pasos y plazos cerrados desde el primer contacto.</li>
              <li>Niveles de terminacion preestablecidos segun uso y presupuesto.</li>
              <li>Costos transparentes para decidir con previsibilidad.</li>
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
