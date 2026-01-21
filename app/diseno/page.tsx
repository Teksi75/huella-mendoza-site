import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { altText } from '@/data/altText';
import { buildWhatsAppUrl, whatsappMessages } from '@/data/contact';
import UsosPosiblesGallery from '@/components/UsosPosiblesGallery';

export const metadata: Metadata = {
  title: 'HUELLA Diseño – Proyecto a medida',
};

export default function DisenoPage() {
  const croquisDestacado = {
    src: '/media/huella/diseno/diseno-croquis-10.png',
    title: 'Croquis panorámico',
    aspectClass: 'aspect-[16/9]',
  };

  const croquis = [
    {
      src: '/media/huella/diseno/diseno-croquis-4.png',
      title: 'Croquis de circulaciones',
      aspectClass: 'aspect-[4/3]',
    },
    {
      src: '/media/huella/diseno/diseno-croquis-9.png',
      title: 'Maqueta elevada',
      aspectClass: 'aspect-[4/3]',
    },
    {
      src: '/media/huella/diseno/diseno-croquis-8.png',
      title: 'Croquis de ritmo',
      aspectClass: 'aspect-[4/3]',
    },
  ];

  const interiores = [
    {
      src: '/media/huella/diseno/diseno-interior-4.png',
      title: 'Madera y luz natural',
      copy: 'Texturas claras, planos cálidos y luz filtrada que acompaña el habitar diario.',
    },
    {
      src: '/media/huella/diseno/diseno-interior-2.png',
      title: 'Materialidad honesta',
      copy: 'Hormigón visto, madera y metal dialogan en capas coherentes.',
    },
  ];

  const entorno = [
    {
      src: '/media/huella/8.png',
      title: 'Sendero principal',
      copy: 'Recorrido amplio que abre el paisaje y da bienvenida con calma.',
      highlight: true,
    },
  ];

  return (
    <main>
      <section
        id="diseno"
        className="section-padding bg-white scroll-mt-28 pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>HUELLA Diseño</h2>
            <p className="mt-3">
              Proyectos arquitectónicos a medida con acompañamiento profesional para integrar diseño, funcionalidad y territorio.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-600">
              <li>Relevamiento del sitio y de tus rutinas para definir el programa.</li>
              <li>Propuestas comparables que equilibran materialidad, paisaje y uso diario.</li>
              <li>Dirección y seguimiento cercano para sostener decisiones de inicio a fin.</li>
            </ul>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl">Modelos listos</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Alternativas probadas que combinan diseño y funcionalidad.
                  <br />
                  Elegís el ritmo, el nivel de terminación y acompañamiento.
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">
                  Proceso
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Eleccion - Ajuste al sitio - Inicio de obra
                </p>
                <Link
                  href="/diseno/modelos"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-tierra-700 hover:text-tierra-900"
                >
                  Explorar modelos disponibles
                </Link>
              </div>
              <div className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl">Proyectos personalizados</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Experiencias diseñadas a partir del lugar y de tu forma de habitar.
                  <br />
                  Decisiones claras para una solución adaptada a tu situación.
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">
                  Proceso
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Relevamiento - Propuesta - Desarrollo ejecutivo
                </p>
                <UsosPosiblesGallery />
              </div>
              <div className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl">Ampliaciones</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Crecer sin romper la coherencia arquitectónica y el paisaje.
                  <br />
                  Soluciones simples que suman uso y valor.
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">
                  Proceso
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Diagnóstico - Propuesta - Obra liviana
                </p>
                <div
                  aria-disabled="true"
                  className="mt-5 inline-flex flex-col items-start text-sm font-semibold text-tierra-700/80 cursor-default"
                >
                  <span>Ver más</span>
                  <span className="text-xs font-normal tracking-wide text-tierra-700/70">
                    Disponible próximamente
                  </span>
                </div>
              </div>
            </div>
            <Link
              href={buildWhatsAppUrl(whatsappMessages.diseno)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-8 inline-flex"
            >
              Consultar
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2>Galería de croquis y maquetas</h2>
            <p className="mt-3 text-base text-gray-700">
              Iteraciones que explican decisiones tempranas y permiten validar la coherencia entre diseño, uso y territorio.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-tierra-200 bg-white shadow-sm">
              <div className={`relative overflow-hidden ${croquisDestacado.aspectClass}`}>
                <Image
                  src={croquisDestacado.src}
                  alt={altText[croquisDestacado.src]}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-tierra-800">{croquisDestacado.title}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-tierra-600">Croquis y maquetas</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {croquis.map((item) => (
                <div key={item.src} className="rounded-2xl border border-tierra-200 bg-white shadow-sm">
                  <div className={`relative overflow-hidden ${item.aspectClass}`}>
                    <Image
                      src={item.src}
                      alt={altText[item.src]}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-tierra-800">{item.title}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-tierra-600">Croquis y maquetas</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Diseño interior</h2>
            <p className="mt-3 text-base text-gray-700">
              Materiales honestos, luz dirigida y conexiones claras con el exterior para un habitar cotidiano y sin exceso.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {interiores.map((item) => (
              <div
                key={item.src}
                className="flex flex-col rounded-2xl border border-tierra-200 bg-tierra-50 shadow-sm"
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
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Estructura integrada al entorno</h2>
            <p className="mt-3 text-base text-gray-700">
              Vistas largas, plataformas ligeras y recorridos que siguen la pendiente para integrar estructura, funcionalidad y paisaje.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {entorno
              .filter((item) => item.highlight)
              .map((item) => (
                <div
                  key={item.src}
                  className="rounded-2xl border border-tierra-200 bg-white shadow-sm overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={altText[item.src]}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-tierra-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-700">{item.copy}</p>
                  </div>
                </div>
              ))}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {entorno
                .filter((item) => !item.highlight)
                .map((item) => (
                  <div
                    key={item.src}
                    className="rounded-2xl border border-tierra-200 bg-white shadow-sm overflow-hidden"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={altText[item.src]}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-tierra-900">{item.title}</h3>
                      <p className="mt-2 text-sm text-gray-700">{item.copy}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
