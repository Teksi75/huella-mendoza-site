import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { altText } from '@/data/altText';

export const metadata: Metadata = {
  title: 'HUELLA Base – Unidades modulares',
};

const logisticaCards = [
  {
    src: '/media/huella/base/huella-base-plegado.webp',
    title: 'Transporte compacto',
    copy: 'Transporte optimizado con volumen reducido para mover unidades de forma simple.',
  },
  {
    src: '/media/huella/base/huella-base-logistica.webp',
    title: 'Montaje directo',
    copy: 'Montaje ordenado en sitio con eficiencia logística para reducir tiempos y coordinar despliegues.',
  },
];

export default function BasePage() {
  return (
    <main>
      <section
        id="base"
        className="section-padding bg-tierra-50 scroll-mt-28 pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-tierra-200 bg-white shadow-sm">
              <Image
                src="/media/huella/base/huella-base-modulo-simple.webp"
                alt={altText['/media/huella/base/huella-base-modulo-simple.webp']}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
                priority
              />
            </div>
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-widest text-tierra-600 text-center md:text-left">
                HUELLA Base
              </p>
              <h1 className="text-3xl font-bold leading-tight text-center mb-4 md:text-left">
                HUELLA Base
              </h1>
              <p className="text-xl font-semibold text-center mb-6 md:text-left">
                Un punto de partida claro y eficiente.
              </p>
              <div className="mb-6">
                <p className="text-base leading-relaxed text-gray-700 text-center md:text-left">
                  Base, el módulo estructural del sistema HUELLA. Punto de partida claro para
                  ordenar estructura, logística y escalabilidad sin perder coherencia en cada
                  etapa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Logística y obra</h2>
            <div className="mb-6">
              <p className="text-base leading-relaxed text-gray-700">
                La lógica modular simplifica la logística, reduce tiempos de obra.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {logisticaCards.map((item) => (
              <div
                key={item.src}
                className="flex flex-col rounded-2xl border border-tierra-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl rounded-b-none">
                  <Image
                    src={item.src}
                    alt={altText[item.src]}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-tierra-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Confort y uso real</h2>
              <p className="text-base leading-relaxed text-gray-700">
                Aunque parten de una estructura modular simple, las unidades cuentan con
                tratamiento térmico para un uso confortable y continuo.
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                Materiales y aislaciones pensadas para acompañar el clima y el entorno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-tierra-200 bg-white shadow-sm">
              <Image
                src="/media/huella/base/huella-base-campamento.webp"
                alt={altText['/media/huella/base/huella-base-campamento.webp']}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="max-w-xl">
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Escalabilidad</h2>
                <p className="text-base leading-relaxed text-gray-700">
                  HUELLA Base no es un producto cerrado. Es un sistema que permite crecer.
                </p>
                <p className="mt-3 text-base leading-relaxed text-gray-700">
                  Podés empezar con una unidad y ampliar, adaptar o sumar nuevas piezas a
                  medida que cambian tus necesidades.
                </p>
                <p className="mt-3 text-base leading-relaxed text-gray-700">
                  Un mismo punto de partida, múltiples configuraciones posibles.
                </p>
              </div>
              <div>
                <Link
                  href="/contacto"
                  className="w-full py-3 bg-primary text-white font-semibold text-center rounded-md text-lg mb-4 inline-flex justify-center"
                >
                  Pedir presupuesto
                </Link>
                <Link
                  href="/contacto"
                  className="w-full py-3 border border-primary text-primary font-semibold text-center rounded-md text-lg inline-flex justify-center"
                >
                  Consultar opciones
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
