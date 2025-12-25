import Image from 'next/image';
import Link from 'next/link';

const pathways = [
  {
    id: 'base',
    title: 'HUELLA Base',
    description:
      'Unidades modulares listas, con alcances y plazos definidos.',
    href: '/base',
    image: '/media/huella/base/huella-base-modulo-simple.webp',
    ctaLabel: 'Ver Base',
  },
  {
    id: 'diseno',
    title: 'HUELLA Diseño',
    description:
      'Proyecto arquitectónico a medida con acompañamiento profesional.',
    href: '/diseno',
    ctaLabel: 'Conocer más',
  },
  {
    id: 'refugios',
    title: 'HUELLA Refugios',
    description:
      'Estadías en Potrerillos pensadas para descansar.',
    href: '/refugios',
    ctaLabel: 'Conocer más',
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
              Te presentamos los caminos para explorar HUELLA con calma. Elegí el
              ritmo, la escala y el acompañamiento que mejor dialoguen con tu forma de
              vivir.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pathways.map((pathway) => (
              <section
                key={pathway.title}
                id={pathway.id}
                className="scroll-mt-28 flex flex-col justify-between rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm md:scroll-mt-32"
              >
                <div>
                  {pathway.image ? (
                    <div className="relative mb-4 h-36 overflow-hidden rounded-xl border border-tierra-200 bg-tierra-50">
                      <Image
                        src={pathway.image}
                        alt={`${pathway.title} - preview técnico`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                    </div>
                  ) : null}
                  <h2 className="text-xl">{pathway.title}</h2>
                  <p className="mt-3 text-sm text-gray-600">{pathway.description}</p>
                </div>
                <Link
                  href={pathway.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-tierra-700 hover:text-tierra-900"
                >
                  {pathway.ctaLabel}
                </Link>
              </section>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-gray-600">
            Elegí por dónde empezar o consultanos para acompañarte en el proceso.
          </div>
        </div>
      </section>
    </main>
  );
}
