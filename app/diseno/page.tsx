import Link from 'next/link';

export default function DisenoPage() {
  return (
    <main>
      <section id="huella-diseno" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>HUELLA Diseno</h2>
            <p className="mt-3">
              Acompanamiento cercano para dar forma a un espacio con identidad.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-600">
              <li>Escucha activa para entender tu forma de habitar.</li>
              <li>Criterio de arquitectura integrada para resolver con coherencia.</li>
              <li>Seguimiento simple y presente en cada etapa.</li>
            </ul>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl">Modelos listos</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Alternativas probadas para avanzar sin vueltas.
                  <br />
                  Elegis el ritmo y el nivel de terminacion.
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">
                  Proceso
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Eleccion - Ajuste - Inicio de obra
                </p>
                <Link
                  href="#huella-diseno"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-tierra-700 hover:text-tierra-900"
                >
                  Ver mas
                </Link>
              </div>
              <div className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl">Proyectos personalizados</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Ideas a medida que nacen del sitio y tu vida.
                  <br />
                  Criterio claro para decidir con calma.
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">
                  Proceso
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Relevamiento - Propuesta - Ajustes finales
                </p>
                <Link
                  href="#huella-diseno"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-tierra-700 hover:text-tierra-900"
                >
                  Ver mas
                </Link>
              </div>
              <div className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl">Ampliaciones</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Crecer sin romper la armonia del lugar.
                  <br />
                  Soluciones simples que suman valor.
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">
                  Proceso
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Diagnostico - Plan - Obra liviana
                </p>
                <Link
                  href="#huella-diseno"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-tierra-700 hover:text-tierra-900"
                >
                  Ver mas
                </Link>
              </div>
            </div>
            <Link href="/contacto" className="btn-secondary mt-8 inline-flex">
              Consultar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
