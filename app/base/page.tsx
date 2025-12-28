import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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
                alt="Huella Base, módulo estructural"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
                priority
              />
            </div>
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold leading-tight text-center mb-4">
                HUELLA Base
              </h1>
              <p className="text-xl font-semibold text-center mb-6">
                Un punto de partida claro y eficiente.
              </p>
              <div className="mb-6">
                <p className="text-base leading-relaxed">
                  Base, el módulo estructural del sistema HUELLA.
                  <br />
                  Punto de partida claro para ordenar estructura, logística y escalabilidad
                  sin perder coherencia en cada etapa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-tierra-900">Logística y obra</h2>
              <p className="text-base leading-relaxed">
                La lógica modular simplifica la logística,
                <br />
                reduce tiempos de obra.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-tierra-900">Confort y uso real</h3>
              <p className="text-base leading-relaxed">
                Aunque parten de una estructura modular simple,
                <br />
                las unidades cuentan con tratamiento térmico
                <br />
                para un uso confortable y continuo.
                <br />
                <br />
                Materiales y aislaciones pensadas
                <br />
                para acompañar el clima y el entorno.
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
                    alt={`${item.title} - Huella Base`}
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
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-tierra-200 bg-white shadow-sm">
              <Image
                src="/media/huella/base/huella-base-campamento.webp"
                alt="Huella Base en conjunto"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="max-w-xl">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-tierra-900">Escalabilidad</h2>
                <p className="text-base leading-relaxed">
                  HUELLA Base no es un producto cerrado.
                  <br />
                  Es un sistema que permite crecer.
                  <br />
                  <br />
                  Podés empezar con una unidad
                  <br />
                  y ampliar, adaptar o sumar nuevas piezas
                  <br />
                  a medida que cambian tus necesidades.
                  <br />
                  <br />
                  Un mismo punto de partida,
                  <br />
                  múltiples configuraciones posibles.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-tierra-900">Qué podés definir</h3>
                <p className="text-base leading-relaxed">
                  Vos elegís:
                  <br />– nivel de terminación
                  <br />– equipamiento
                  <br />– usos y destino
                  <br />– cómo y cuándo escalar
                  <br />
                  <br />
                  HUELLA Base se adapta a tu proyecto,
                  <br />
                  no al revés.
                </p>
              </div>
              <div className="flex flex-col">
                <Link
                  href="/contacto"
                  className="w-full py-3 bg-primary text-white font-semibold text-center rounded-md text-lg mb-4"
                >
                  Pedir presupuesto
                </Link>
                <Link
                  href="/contacto"
                  className="w-full py-3 border border-primary text-primary font-semibold text-center rounded-md text-lg"
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
