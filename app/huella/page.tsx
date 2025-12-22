import Link from 'next/link';

const pathways = [
  {
    title: 'HUELLA Base',
    description: 'Unidades claras para avanzar con orden y confianza.',
    href: '/base',
  },
  {
    title: 'HUELLA Diseno',
    description: 'Arquitectura integrada para decisiones claras y humanas.',
    href: '/diseno',
  },
  {
    title: 'HUELLA Refugios',
    description: 'Experiencias de descanso en dialogo con el paisaje.',
    href: '/refugios',
  },
];

export default function HuellaPage() {
  return (
    <main>
      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-widest text-tierra-600">HUELLA</p>
            <h1 className="mt-4 text-3xl md:text-4xl">Tres formas de habitar el territorio</h1>
            <p className="mt-4 text-base text-gray-700">
              Te presentamos los caminos para explorar HUELLA con calma. Elegi el
              ritmo, la escala y el acompañamiento que mejor dialoguen con tu forma de
              vivir.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pathways.map((pathway) => (
              <div
                key={pathway.title}
                className="flex flex-col justify-between rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm"
              >
                <div>
                  <h2 className="text-xl">{pathway.title}</h2>
                  <p className="mt-3 text-sm text-gray-600">{pathway.description}</p>
                </div>
                <Link
                  href={pathway.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-tierra-700 hover:text-tierra-900"
                >
                  Conocer más
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-gray-600">
            Elegi por donde empezar o consultanos para acompanarte en el proceso.
          </div>
        </div>
      </section>
    </main>
  );
}
