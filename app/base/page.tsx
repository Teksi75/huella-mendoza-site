import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { altText } from '@/data/altText';
import { buildWhatsAppUrl, whatsappMessages } from '@/data/contact';

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
              <p className="text-sm uppercase tracking-widest text-tierra-600 text-center md:text-left mb-3">
                HUELLA Base
              </p>
              <h1 className="text-3xl font-bold leading-tight text-center mb-4 md:text-4xl md:text-left">
                HUELLA Base
              </h1>
              <p className="text-xl font-semibold text-center mb-6 md:text-left">
                Bases modulares: previsibilidad, orden y escalabilidad desde el inicio.
              </p>
              <div className="mb-6">
                <p className="text-base leading-relaxed text-gray-700 text-center md:text-left">
                  Base es el módulo estructural del sistema HUELLA. Cada proyecto se define a
                  partir de una cantidad de módulos base que funcionan como la pieza fundamental
                  para organizar costos, tiempos y posibilidades futuras. Esto permite planificar
                  con claridad, reducir incertidumbres y pensar espacios que crecen sin
                  improvisaciones.
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
                La lógica modular hace que las unidades encajen entre sí y en el transporte, la
                obra en sitio se coordine con menos imprevistos y los tiempos de montaje se
                optimicen. Definir la cantidad de módulos base desde el principio permite
                planificar logística y obra de forma ordenada y clara.
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
                Pensamos los materiales y aislamientos para acompañar el clima y el entorno, tanto
                en una unidad como en varias combinadas.
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
                  HUELLA Base no es un producto cerrado. Es un sistema que permite crecer,
                  reconfigurar y ampliar tu proyecto según tus necesidades.
                </p>
                <p className="mt-3 text-base leading-relaxed text-gray-700">
                  Podés empezar con una sola unidad, sumar módulos base, combinar configuraciones
                  para diferentes usos y pensar un conjunto de módulos como un sistema mayor que se
                  adapta con el tiempo.
                </p>
                <p className="mt-3 text-base leading-relaxed text-gray-700">
                  Este enfoque por cantidad de módulos organiza mejor la logística y la obra desde
                  el inicio, facilita cotizaciones claras y permite proyectar espacios que crecen
                  sin perder coherencia.
                </p>
                <p className="mt-3 text-base font-semibold text-gray-700">
                  Un mismo punto de partida × múltiples módulos posibles.
                </p>
              </div>
              <div className="mb-4 text-base leading-relaxed text-gray-700">
                <p>Analizamos tu idea y la cantidad de módulos.</p>
                <p className="mt-2">
                  Contanos tu proyecto para ver cuántos módulos base tiene sentido planificar y
                  cómo se puede organizar.
                </p>
              </div>
              <div>
                <Link
                  href={buildWhatsAppUrl(whatsappMessages.base)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-primary text-white font-semibold text-center rounded-md text-lg mb-4 inline-flex justify-center"
                >
                  Pedir presupuesto
                </Link>
                <Link
                  href={buildWhatsAppUrl(whatsappMessages.base)}
                  target="_blank"
                  rel="noopener noreferrer"
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
