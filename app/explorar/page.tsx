import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const huellaPaths = [
  {
    title: 'HUELLA Base',
    copy: 'Unidades claras para avanzar con orden, previsibilidad y un ritmo sereno.',
    href: '/base',
  },
  {
    title: 'HUELLA Diseno',
    copy: 'Acompanamiento cercano para dar forma a un proyecto con identidad y criterio.',
    href: '/diseno',
  },
  {
    title: 'HUELLA Refugios',
    copy: 'Experiencias de descanso pensadas para vivir el paisaje con calma.',
    href: '/refugios',
  },
];

export default function ExploreHuella() {
  return (
    <main>
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 z-10" />
          <img
            src="/media/huella/home/home-protrerillos-embalse-1.png"
            alt="Paisaje de Huella"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center text-white px-6 max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-sm text-white/70">Explorar</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Tres caminos para habitar con calma
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light leading-relaxed text-white/85">
            Base, Diseno y Refugios comparten un mismo criterio de diseno en dialogo
            con el territorio. Conocelos antes de elegir tu proximo paso.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-tierra-600">HUELLA</p>
            <h2 className="mt-4">Elegí el ritmo que mejor te acompaña</h2>
            <p className="mt-3 text-base text-gray-700">
              Cada propuesta mantiene la esencia de HUELLA: claridad, calma y respeto
              por el paisaje. Exploralas con tiempo y encontrá la que se adapta a tu
              forma de habitar.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {huellaPaths.map((path) => (
              <div
                key={path.title}
                className="rounded-2xl border border-tierra-200 bg-tierra-50 p-8 shadow-sm flex flex-col"
              >
                <h3 className="text-xl font-semibold text-tierra-900">{path.title}</h3>
                <p className="mt-4 text-sm text-gray-700 leading-relaxed flex-1">{path.copy}</p>
                <Link
                  href={path.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tierra-800 hover:text-tierra-900"
                >
                  Ver más
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link href="/" className="btn-secondary inline-flex items-center gap-2 px-6 py-3">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
