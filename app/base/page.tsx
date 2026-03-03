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
    copy: 'Módulos preparados para traslado eficiente y descarga directa en obra.',
  },
  {
    src: '/media/huella/base/huella-base-logistica.webp',
    title: 'Montaje directo',
    copy: 'Ensamble en sitio con una secuencia simple para reducir tiempos de implementación.',
  },
];

export default function BasePage() {
  return (
    <main>
      <section
        id="base"
        className="section-padding scroll-mt-28 bg-[#ece1d3] pt-20 md:scroll-mt-32 md:pt-24"
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
              <p className="section-eyebrow text-center md:text-left">Sistema por etapas</p>
              <h1 className="mb-4 text-center text-3xl font-medium uppercase tracking-[0.2em] text-[#7f4f31] md:text-left md:text-4xl">
                HUELLA Base
              </h1>
              <p className="mb-6 text-center text-xl font-semibold text-[#2f2a23] md:text-left">
                Bases modulares: previsibilidad, orden y escalabilidad desde el inicio.
              </p>
              <div className="mb-6">
                <p className="text-center text-base leading-relaxed text-[#5a6662] md:text-left">
                  Base es la unidad constructiva de HUELLA. El proyecto se arma por etapas: elegís
                  cuántos módulos iniciar, cómo se conectan y cuándo sumar nuevos. Con esa base se
                  calculan obra, transporte y presupuesto con criterios claros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8f2e8]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="section-title section-title-section">Logística y obra</h2>
            <div className="mb-6">
              <p className="text-base leading-relaxed text-[#5a6662]">
                En Base, la decisión principal es la cantidad de módulos por etapa. Esa definición
                ordena transporte, montaje y secuencia de obra, con menos ajustes en sitio.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {logisticaCards.map((item) => (
              <div
                key={item.src}
                className="u-card flex flex-col"
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
                <h3 className="text-lg font-semibold text-[#7f4f31]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#5a6662]">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-semibold md:text-2xl">Confort y uso real</h3>
              <p className="text-base leading-relaxed text-[#5a6662]">
                Cada unidad incorpora aislación y tratamiento térmico para uso continuo.
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#5a6662]">
                La envolvente y los materiales se definen según clima, orientación y programa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#ece1d3]">
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
                <h3 className="mb-2 text-xl font-semibold md:text-2xl">Crecimiento planificado</h3>
                <p className="text-base leading-relaxed text-[#5a6662]">
                  Base no es un diseño cerrado: es una estructura modular que se amplía por
                  etapas.
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#5a6662]">
                  Podés iniciar con una unidad y sumar nuevas según uso, presupuesto y tiempos de
                  obra.
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#5a6662]">
                  La lógica por etapas mantiene coherencia técnica y facilita cotizaciones
                  comparables.
                </p>
                <p className="mt-3 text-base font-semibold text-[#4f5c58]">
                  Una base clara para decidir cada siguiente paso.
                </p>
              </div>
              <div className="mb-4 text-base leading-relaxed text-[#5a6662]">
                <p>Revisamos tu programa y la etapa inicial.</p>
                <p className="mt-2">
                  Escribinos y definimos cantidad de módulos, implantación y alcance de obra.
                </p>
              </div>
              <div>
                <Link
                  href={buildWhatsAppUrl(whatsappMessages.basePresupuesto)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-btn-primary u-ease u-focus mb-4 inline-flex w-full justify-center text-lg"
                >
                  Pedir presupuesto
                </Link>
                <Link
                  href={buildWhatsAppUrl(whatsappMessages.baseOpciones)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-btn-secondary u-ease u-focus inline-flex w-full justify-center text-lg"
                >
                  Ver configuraciones
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
