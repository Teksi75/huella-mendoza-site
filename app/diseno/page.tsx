import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { altText } from '@/data/altText';
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
      copy: 'Aberturas, luz natural y terminaciones calibradas para uso cotidiano.',
    },
    {
      src: '/media/huella/diseno/diseno-interior-2.png',
      title: 'Materialidad honesta',
      copy: 'Hormigón, madera y metal resueltos con encuentros limpios y criterio constructivo.',
    },
  ];

  const entorno = [
    {
      src: '/media/huella/8.png',
      title: 'Sendero principal',
      copy: 'Recorrido de acceso que organiza llegada, vistas y circulación.',
      highlight: true,
    },
  ];

  return (
    <main>
      <section
        id="diseno"
        className="section-padding scroll-mt-28 bg-[#f8f2e8] pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Diseño</p>
            <h2 className="section-title section-title-section">HUELLA Diseño</h2>
            <p className="mt-3 text-[#5a6662]">
              Proyecto arquitectónico integral, desde el relevamiento hasta la documentación de obra.
              A diferencia de Base, no parte de un sistema modular y se define según sitio, programa y alcance.
            </p>
            <ul className="mt-6 grid gap-3 text-base text-[#5a6662]">
              <li>Relevamiento del sitio y programa de uso.</li>
              <li>Anteproyectos comparables con métricas de superficie, alcance y etapas.</li>
              <li>Documentación técnica y seguimiento durante obra.</li>
            </ul>
          </div>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3 xl:gap-8">
            <div className="u-card flex h-full flex-col p-6 xl:p-7">
              <h3 className="text-xl">Modelos listos</h3>
              <p className="mt-3 text-sm text-[#5a6662]">
                Alternativas probadas que combinan diseño y funcionalidad.
                <br />
                Elegís el ritmo, el nivel de terminación y acompañamiento.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">
                Proceso
              </p>
              <p className="mt-2 text-sm text-[#5a6662]">
                Selección - Ajuste al sitio - Proyecto ejecutivo
              </p>
              <Link
                href="/diseno/modelos"
                className="u-btn-secondary u-ease u-focus mt-5 inline-flex items-center gap-2 text-sm"
              >
                Ver modelos
              </Link>
            </div>
            <div className="u-card flex h-full flex-col p-6 xl:p-7">
              <h3 className="text-xl">Proyectos personalizados</h3>
              <p className="mt-3 text-sm text-[#5a6662]">
                Proyecto a medida con decisiones técnicas según sitio y programa.
                <br />
                Incluye esquema espacial, materialidad y definición constructiva.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">
                Proceso
              </p>
              <p className="mt-2 text-sm text-[#5a6662]">
                Relevamiento - Propuesta - Desarrollo ejecutivo
              </p>
              <UsosPosiblesGallery />
            </div>
            <div className="u-card flex h-full flex-col p-6 xl:p-7">
              <h3 className="text-xl">Ampliaciones</h3>
              <p className="mt-3 text-sm text-[#5a6662]">
                Extensiones sobre obra existente con continuidad funcional y técnica.
                <br />
                Priorizamos etapas ejecutables y compatibilidad constructiva.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">
                Proceso
              </p>
              <p className="mt-2 text-sm text-[#5a6662]">
                Diagnóstico - Propuesta - Ejecución
              </p>
              <div
                aria-disabled="true"
                className="mt-5 inline-flex flex-col items-start text-sm font-semibold text-tierra-700/80 cursor-default"
              >
                <span>Próximamente</span>
                <span className="text-xs font-normal tracking-wide text-tierra-700/70">
                  Sección en preparación
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="#croquis-gallery"
              aria-label="Ir a la sección Galería de croquis y maquetas"
              className="u-ease u-focus inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c9b79f] bg-[#fff7ec]/85 text-[#7f4f31] hover:-translate-y-0.5 hover:border-[#b79d7f] hover:bg-[#fff2df]"
            >
              <ArrowDown className="h-5 w-5 motion-safe:animate-bounce" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section id="croquis-gallery" className="section-padding scroll-mt-28 bg-[#ece1d3] md:scroll-mt-32">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="section-title section-title-section">Galería de croquis y maquetas</h2>
            <p className="mt-3 text-base text-[#5a6662]">
              Estudios de implantación, circulaciones y volumetría para validar decisiones antes de obra.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="u-card">
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
                <p className="mt-1 text-xs uppercase tracking-widest text-tierra-600"></p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {croquis.map((item) => (
                <div key={item.src} className="u-card">
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
                    <p className="mt-1 text-xs uppercase tracking-widest text-tierra-600"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8f2e8]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="section-title section-title-section">Diseño interior</h2>
            <p className="mt-3 text-base text-[#5a6662]">
              Resolución interior con criterios de uso, luz, mantenimiento y confort térmico.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {interiores.map((item) => (
              <div
                key={item.src}
                className="u-card flex flex-col bg-[#fff9ef]"
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
        </div>
      </section>

      <section className="section-padding bg-[#ece1d3]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="section-title section-title-section">Estructura integrada al entorno</h2>
            <p className="mt-3 text-base text-[#5a6662]">
              Implantación, pendientes y recorridos se resuelven como parte del proyecto arquitectónico y de su sistema constructivo.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {entorno
              .filter((item) => item.highlight)
              .map((item) => (
                <div
                  key={item.src}
                  className="u-card overflow-hidden"
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
                    <h3 className="text-lg font-semibold text-[#7f4f31]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#5a6662]">{item.copy}</p>
                  </div>
                </div>
              ))}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {entorno
                .filter((item) => !item.highlight)
                .map((item) => (
                  <div
                    key={item.src}
                    className="u-card overflow-hidden"
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
                      <h3 className="text-base font-semibold text-[#7f4f31]">{item.title}</h3>
                      <p className="mt-2 text-sm text-[#5a6662]">{item.copy}</p>
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
