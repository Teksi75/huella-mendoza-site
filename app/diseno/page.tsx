import Image from 'next/image';
import Link from 'next/link';

const croquisImages = [
  { src: '/media/huella/diseno/diseno-croquis-1.PNG', title: 'Croquis', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/diseno/diseno-croquis-2.PNG', title: 'Croquis', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/diseno/diseno-croquis-3.png', title: 'Croquis', ratio: 'aspect-[3/4]' },
  { src: '/media/huella/diseno/diseno-croquis-4.png', title: 'Maqueta', ratio: 'aspect-[3/4]' },
  { src: '/media/huella/diseno/diseno-croquis-5.png', title: 'Croquis', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/diseno/diseno-croquis-6.png', title: 'Maqueta', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/diseno/diseno-croquis-7.png', title: 'Croquis', ratio: 'aspect-[3/4]' },
  { src: '/media/huella/diseno/diseno-croquis-8.png', title: 'Maqueta', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/diseno/diseno-croquis-9.png', title: 'Croquis', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/diseno/diseno-croquis-10.png', title: 'Croquis destacado', ratio: 'aspect-[4/3]', featured: true },
];

const interiorImages = [
  { src: '/media/huella/diseno/diseno-interior-1.png', title: 'Luz natural', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/diseno/diseno-interior-2.png', title: 'Materialidad calida', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/diseno/diseno-interior-3.png', title: 'Ritmo de madera', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/diseno/diseno-interior-4.png', title: 'Espacio integrado', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/diseno/diseno-interior-5.png', title: 'Detalles honestos', ratio: 'aspect-[4/3]' },
];

const entornoImages = [
  { src: '/media/huella/8.png', title: 'Estructura protagonista', ratio: 'aspect-[16/9]', featured: true },
  { src: '/media/huella/2.png', title: 'Vinculo con el valle', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/3.png', title: 'Terraza hacia el paisaje', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/16.png', title: 'Trama de madera', ratio: 'aspect-[4/3]' },
  { src: '/media/huella/13.png', title: 'Refugio liviano', ratio: 'aspect-[4/3]' },
];

export default function DisenoPage() {
  return (
    <main>
      <section
        id="diseno"
        className="section-padding bg-white scroll-mt-28 pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>HUELLA Diseno</h2>
            <p className="mt-3">
              Acompanamiento cercano para dar forma a un espacio con identidad.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-600">
              <li>Escucha activa para entender tu forma de habitar.</li>
              <li>Criterio de arquitectura integrada para resolver con coherencia.</li>
              <li>Seguimiento simple y presente en cada etapa.</li>
            </ul>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl">Modelos listos</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Alternativas probadas para avanzar sin vueltas.
                  <br />
                  Elegis el ritmo y el nivel de terminacion.
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">
                  Proceso
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Eleccion - Ajuste - Inicio de obra
                </p>
                <Link
                  href="#diseno"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-tierra-700 hover:text-tierra-900"
                >
                  Ver mas
                </Link>
              </div>
              <div className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl">Proyectos personalizados</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Ideas a medida que nacen del sitio y tu vida.
                  <br />
                  Criterio claro para decidir con confianza.
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">
                  Proceso
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Relevamiento - Propuesta - Ajustes finales
                </p>
                <Link
                  href="#diseno"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-tierra-700 hover:text-tierra-900"
                >
                  Ver mas
                </Link>
              </div>
              <div className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl">Ampliaciones</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Crecer sin romper la armonia del lugar.
                  <br />
                  Soluciones simples que suman valor.
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">
                  Proceso
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Diagnostico - Plan - Obra liviana
                </p>
                <Link
                  href="#diseno"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-tierra-700 hover:text-tierra-900"
                >
                  Ver mas
                </Link>
              </div>
            </div>
            <Link href="/contacto" className="btn-secondary mt-8 inline-flex">
              Consultar
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Galeria de croquis y maquetas</h2>
            <p className="mt-3 text-gray-700">
              Arquitectura integrada desde los primeros trazos. Croquis y maquetas que ordenan el proyecto y acercan el territorio a cada decision.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {croquisImages.map((image) => (
              <div
                key={image.src}
                className={`rounded-2xl border border-tierra-200 bg-white p-4 shadow-sm ${image.featured ? 'lg:col-span-2' : ''}`}
              >
                <div className={`${image.ratio} relative overflow-hidden rounded-xl bg-tierra-50`}>
                  <Image
                    src={image.src}
                    alt={`${image.title} de vivienda en la montana`}
                    fill
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={image.featured}
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-tierra-800">{image.title}</p>
                <p className="text-sm text-gray-600">Volumenes claros para situar la obra en el paisaje.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Diseno interior</h2>
            <p className="mt-3 text-gray-700">
              Materiales nobles, luz cuidada y rincones simples para habitar con calma. Cada ambiente conecta con el exterior sin perder abrigo.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {interiorImages.map((image) => (
              <div key={image.src} className="rounded-2xl border border-tierra-200 bg-tierra-50 p-4 shadow-sm">
                <div className={`${image.ratio} relative overflow-hidden rounded-xl bg-white`}>
                  <Image
                    src={image.src}
                    alt={`${image.title} en interior de HUELLA`}
                    fill
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-tierra-800">{image.title}</p>
                <p className="text-sm text-gray-600">Tramas que filtran la luz y mantienen la calidez.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Estructura integrada al entorno</h2>
            <p className="mt-3 text-gray-700">
              Cubiertas livianas, vistas largas y apoyos precisos que respetan la topografia. La estructura se vuelve parte del paisaje y protege el habitar.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3 auto-rows-fr">
            {entornoImages.map((image) => (
              <div
                key={image.src}
                className={`rounded-2xl border border-tierra-200 bg-white p-4 shadow-sm ${image.featured ? 'lg:col-span-3' : ''}`}
              >
                <div className={`${image.ratio} relative overflow-hidden rounded-xl bg-tierra-50`}>
                  <Image
                    src={image.src}
                    alt={`${image.title} integrada al paisaje`}
                    fill
                    className="h-full w-full object-cover"
                    sizes={`(min-width: 1024px) ${image.featured ? '100vw' : '33vw'}, (min-width: 768px) 50vw, 100vw`}
                    priority={image.featured}
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-tierra-800">{image.title}</p>
                <p className="text-sm text-gray-600">Estructuras que acompañan el relieve y abren el espacio hacia el paisaje.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
