import Image from 'next/image';
import Link from 'next/link';

export default function DisenoPage() {
  const croquis = [
    {
      src: '/media/huella/diseno/diseno-croquis-1.PNG',
      title: 'Croquis volumetrico',
      aspectClass: 'aspect-[4/3]',
    },
    {
      src: '/media/huella/diseno/diseno-croquis-2.PNG',
      title: 'Croquis de fachada',
      aspectClass: 'aspect-[4/3]',
    },
    {
      src: '/media/huella/diseno/diseno-croquis-3.png',
      title: 'Maqueta inicial',
      aspectClass: 'aspect-[3/4]',
    },
    {
      src: '/media/huella/diseno/diseno-croquis-4.png',
      title: 'Croquis de circulaciones',
      aspectClass: 'aspect-[4/3]',
    },
    {
      src: '/media/huella/diseno/diseno-croquis-5.png',
      title: 'Maqueta de patio',
      aspectClass: 'aspect-[3/4]',
    },
    {
      src: '/media/huella/diseno/diseno-croquis-6.png',
      title: 'Croquis de ritmo',
      aspectClass: 'aspect-[4/3]',
    },
    {
      src: '/media/huella/diseno/diseno-croquis-7.png',
      title: 'Maqueta elevada',
      aspectClass: 'aspect-[3/4]',
    },
    {
      src: '/media/huella/diseno/diseno-croquis-8.png',
      title: 'Croquis de cubierta',
      aspectClass: 'aspect-[4/3]',
    },
    {
      src: '/media/huella/diseno/diseno-croquis-9.png',
      title: 'Croquis de detalles',
      aspectClass: 'aspect-[4/3]',
    },
    {
      src: '/media/huella/diseno/diseno-croquis-10.png',
      title: 'Croquis panoramico',
      aspectClass: 'aspect-[16/9]',
      highlight: true,
    },
  ];

  const interiores = [
    {
      src: '/media/huella/diseno/diseno-interior-1.png',
      title: 'Madera y luz natural',
      copy: 'Texturas claras, planos calidos y luz filtrada que acompana el habitar diario.',
    },
    {
      src: '/media/huella/diseno/diseno-interior-2.png',
      title: 'Escala humana',
      copy: 'Mobiliario simple que ordena el espacio y deja respirar las vistas.',
    },
    {
      src: '/media/huella/diseno/diseno-interior-3.png',
      title: 'Patios que conectan',
      copy: 'Interior y exterior se mezclan con transparencias y vegetacion cercana.',
    },
    {
      src: '/media/huella/diseno/diseno-interior-4.png',
      title: 'Materialidad honesta',
      copy: 'Hormigon visto, madera y metal dialogan en capas coherentes.',
    },
  ];

  const entorno = [
    {
      src: '/media/huella/8.png',
      title: 'Sendero principal',
      copy: 'Recorrido amplio que abre el paisaje y da bienvenida con calma.',
      highlight: true,
    },
    {
      src: '/media/huella/2.png',
      title: 'Frente integrado',
      copy: 'Volumenes bajos que se alinean con la topografia existente.',
    },
    {
      src: '/media/huella/3.png',
      title: 'Recortes de horizonte',
      copy: 'Ventanas largas que enmarcan la montana sin romper la privacidad.',
    },
    {
      src: '/media/huella/13.png',
      title: 'Terrazas habitables',
      copy: 'Plataformas livianas que extienden la vida exterior.',
    },
    {
      src: '/media/huella/16.png',
      title: 'Refugio en pendiente',
      copy: 'Estructura apoyada en el terreno con minimo impacto visual.',
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
          <div className="max-w-4xl">
            <h2>Galeria de croquis y maquetas</h2>
            <p className="mt-3 text-base text-gray-700">
              Iteraciones que muestran decisiones tempranas y prueban la coherencia del diseno.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {croquis.map((item) => (
              <div
                key={item.src}
                className={`rounded-2xl border border-tierra-200 bg-white shadow-sm ${
                  item.highlight ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${item.aspectClass}`}>
                  <Image
                    src={item.src}
                    alt={`${item.title} - HUELLA Diseno`}
                    fill
                    className="object-cover"
                    sizes={item.highlight ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
                    priority={item.highlight}
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
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Diseno interior</h2>
            <p className="mt-3 text-base text-gray-700">
              Materiales honestos, luz dirigida y conexiones claras con el exterior para habitar sin exceso.
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
                    alt={`${item.title} - interior HUELLA`}
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
              Vistas largas, plataformas ligeras y recorridos que siguen la pendiente para sostener el dialogo con el paisaje.
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
                      alt={`${item.title} integrado al paisaje`}
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
                        alt={`${item.title} - estructura y paisaje`}
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
