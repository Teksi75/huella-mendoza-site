import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DisenoPage() {
  const etapas = [
    'Exploracion del terreno y objetivos',
    'Concepto arquitectonico y volumetrias',
    'Anteproyecto y definicion de materiales',
    'Proyecto ejecutivo y coordinacion',
  ];

  const portfolio = [
    {
      title: 'Refugio Ladera',
      desc: 'Proyecto a medida en pendiente con vistas abiertas.',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600',
    },
    {
      title: 'Casa Mirador',
      desc: 'Vivienda modularizada para clima seco.',
      image:
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600',
    },
    {
      title: 'Estacion Base',
      desc: 'Nodo de servicios para turismo de montana.',
      image:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600',
    },
  ];

  return (
    <main>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h1>HUELLA Diseno</h1>
          <p className="mt-4 max-w-3xl">
            Cada terreno tiene condiciones unicas. Disenamos con criterio,
            evitando decisiones impulsivas y priorizando una arquitectura que
            se sostenga en el tiempo.
          </p>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <h2>Manifiesto</h2>
          <p className="mt-4 max-w-3xl">
            Creemos en proyectos que dialogan con el paisaje, respetan el
            entorno y resuelven la vida cotidiana con simpleza. Diseno es
            metodo, no capricho.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2>Como trabajamos</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {etapas.map((etapa, index) => (
              <div key={etapa} className="rounded-2xl border border-gray-200 p-5">
                <div className="text-sm font-semibold text-tierra-700">
                  Etapa {index + 1}
                </div>
                <p className="mt-2 text-sm text-gray-600">{etapa}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <h2>Portfolio</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {portfolio.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl bg-white">
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          <div>
            <h2>Que necesito para empezar</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Ubicacion y caracteristicas del terreno.</li>
              <li>Idea base del programa y uso.</li>
              <li>Rango estimado de presupuesto.</li>
              <li>Plazos deseados y expectativas.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-tierra-200 bg-tierra-50 p-6">
            <h3 className="text-xl">Agendar charla</h3>
            <p className="mt-3 text-sm text-gray-600">
              Coordinemos una primera reunion para alinear objetivos.
            </p>
            <Link
              href="/contacto?motivo=diseno"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tierra-700 hover:text-tierra-900"
            >
              Contanos tu terreno
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
