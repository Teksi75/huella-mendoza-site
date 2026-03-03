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
      'Alojamiento con vista al lago en Potrerillos, en funcionamiento y con disponibilidad limitada.',
    href: '/refugios',
    ctaLabel: 'Conocer más',
    comingSoon: 'DISPONIBILIDAD LIMITADA',
  },
];

export default function HuellaPage() {
  return (
    <main>
      <section className="section-padding bg-[#ece1d3]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">HUELLA</p>
            <h1 className="mt-4">Tres líneas de trabajo dentro de HUELLA.</h1>
            <p className="mt-4 text-base text-[#5a6662]">
              Base, Diseño y Refugios responden a escalas y usos distintos. Elegí por
              sistema, por proyecto o por estadía.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pathways.map((pathway) => (
              <div
                key={pathway.title}
                id={pathway.id}
                className="u-card flex scroll-mt-28 flex-col justify-between p-6 md:scroll-mt-32"
              >
                <div>
                  <div className="relative mb-4 flex h-36 items-center justify-center overflow-hidden rounded-xl border border-[#d7c8b2] bg-[#f6ecdf]">
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
                      <span className="relative rounded-full border border-[#d9ccb8] bg-white/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[#7f4f31] backdrop-blur">
                        {pathway.comingSoon}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="text-xl">{pathway.title}</h3>
                  <p className="mt-3 text-sm text-[#5a6662]">{pathway.description}</p>
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

          <div className="mt-12 text-center text-sm text-[#5a6662]">
            Elegí por dónde empezar o consultanos para acompañarte en el proceso.
          </div>
        </div>
      </section>
    </main>
  );
}
