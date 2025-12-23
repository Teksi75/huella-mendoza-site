import Image from 'next/image';
import Link from 'next/link';

const logisticaCards = [
  {
    src: '/media/huella/base/huella-base-plegado.webp',
    title: 'Transporte compacto',
    copy: 'Transporte optimizado con volumen reducido para mover unidades de forma simple.',
  },
  {
    src: '/media/huella/base/huella-base-logistica.webp',
    title: 'Montaje directo',
    copy: 'Montaje ordenado en sitio con eficiencia logistica para reducir tiempos y coordinar despliegues.',
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
                alt="Huella Base, modulo estructural"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
                priority
              />
            </div>
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-widest text-tierra-600">
                HUELLA Base
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl">
                Base, el modulo estructural del sistema Huella
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Punto de partida claro para ordenar estructura, logistica y escalabilidad
                sin perder coherencia en cada etapa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Logistica y montaje</h2>
            <p className="mt-3 text-base text-gray-700">
              Transporte optimizado, montaje directo y eficiencia logistica para mover y
              desplegar unidades con orden.
            </p>
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
              <h2>Escalabilidad</h2>
              <p className="mt-3 text-base text-gray-700">
                Replicabilidad pensada para conjuntos, campamentos e implantaciones multiples.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                La unidad base se repite con orden para crecer por etapas y sostener
                sistemas claros en serie.
              </p>
              <Link href="/contacto" className="btn-secondary mt-8 inline-flex">
                Consultar / Cotizar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
