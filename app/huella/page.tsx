import Image from 'next/image';
import Link from 'next/link';
import { altText } from '@/data/altText';

const pathways = [
  {
    id: 'base',
    title: 'HUELLA Base',
    description:
      'Unidades modulares listas para avanzar con orden y previsión.',
    href: '/base',
    image: '/media/huella/base/huella-base-modulo-simple.webp',
    ctaLabel: 'Ver Base',
  },
  {
    id: 'diseno',
    title: 'HUELLA Diseño',
    description:
      'Proyecto a medida con acompañamiento profesional.',
    href: '/diseno',
    image: '/media/huella/diseno/diseno-croquis-10.webp',
    ctaLabel: 'Conocer más',
  },
  {
    id: 'refugios',
    title: 'HUELLA Refugios',
    description:
      'Estadías para descansar en diálogo con el paisaje.',
    href: '/refugios',
    ctaLabel: 'Conocer más',
    comingSoon: 'PRÓXIMAMENTE',
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
              <div
                key={pathway.title}
                id={pathway.id}
                className="u-card flex flex-col justify-between p-6 scroll-mt-28 md:scroll-mt-32"
              >
                <div>
                  <div className="relative mb-4 flex h-36 items-center justify-center overflow-hidden rounded-xl border border-tierra-200 bg-tierra-50">
                    {pathway.image ? (
                      <Image
                        src={pathway.image}
                        alt={altText[pathway.image]}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                    ) : null}
                    {pathway.comingSoon ? (
                      <span className="relative rounded-full border border-tierra-200 bg-white/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-tierra-600 backdrop-blur">
                        {pathway.comingSoon}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="text-xl">{pathway.title}</h2>
                  <p className="mt-3 text-sm text-gray-600">{pathway.description}</p>
                </div>
                <Link
                  href={pathway.href}
                  className="u-btn-secondary u-ease u-focus mt-6 inline-flex items-center text-sm"
                >
                  {pathway.ctaLabel}
                </Link>
              </div>
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
