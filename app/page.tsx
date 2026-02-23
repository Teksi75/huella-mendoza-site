import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, Layers, Leaf } from 'lucide-react';
import { altText } from '@/data/altText';
import { buildWhatsAppUrl, whatsappMessages } from '@/data/contact';
import HomeContactForm from '@/components/HomeContactForm';

const projectModels = [
  { title: 'Modelo 300', detail: '30 m² · 1 dormitorio' },
  { title: 'Modelo 550', detail: '55 m² · 2 dormitorios' },
  { title: 'Modelo 725', detail: '72,5 m² · 3 dormitorios' },
];

const workSteps = [
  { title: 'Consulta', description: 'Entendemos tu necesidad, el uso y el lugar.' },
  { title: 'Diseño', description: 'Propuesta clara y comparable según tu proyecto.' },
  { title: 'Fabricación', description: 'Construcción bajo control, con procesos definidos.' },
  { title: 'Entrega', description: 'Instalación y acompañamiento final.' },
];

const reasons = [
  {
    title: 'Sostenibilidad',
    description:
      'Construimos con respeto por el entorno, reduciendo el impacto frente a la construcción tradicional y priorizando una relación equilibrada con el paisaje.',
  },
  {
    title: 'Previsibilidad',
    description:
      'Procesos claros, decisiones ordenadas y acompañamiento durante todo el proyecto. Menos incertidumbre, más tranquilidad en cada etapa.',
  },
  {
    title: 'Flexibilidad',
    description:
      'Los espacios pueden crecer, adaptarse o transformarse con el tiempo, acompañando cambios reales en la forma de habitar.',
  },
];

const HomeLandscapeBreak = () => (
  <section className="section-padding bg-[#efe5d7]">
    <div className="container-custom">
      <div className="u-card relative aspect-[16/9] overflow-hidden rounded-2xl md:aspect-[21/9]">
        <Image
          src="/media/huella/home/home-protrerillos-embalse-2.png"
          alt="Paisaje de Potrerillos junto al embalse con una vivienda HUELLA integrada al entorno"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/25 to-black/65" />
          <Image
            src="/media/huella/home/home-protrerillos-embalse-1.png"
            alt={altText['/media/huella/home/home-protrerillos-embalse-1.png']}
            fill
            sizes="100vw"
            priority
            className="object-cover object-[70%_85%] md:object-center"
          />
        </div>

        <div className="relative z-20 mx-auto max-w-5xl px-6 text-center text-white">
          <p className="mx-auto mb-3 inline-flex items-center rounded-full border border-white/20 bg-black/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70 backdrop-blur-[2px] sm:mb-4 sm:text-xs">
            BASE · DISEÑO · REFUGIOS
          </p>
          <h1 className="mx-auto mb-5 max-w-2xl font-sans text-2xl font-semibold leading-tight tracking-[-0.015em] text-[#fff8ef] sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl xl:text-5xl">
            <span className="block">Arquitectura modular</span>
            <span className="mt-1 block sm:mt-2">para habitar el paisaje</span>
          </h1>
          <p className="mx-auto mb-8 max-w-[34ch] text-balance text-[0.95rem] leading-relaxed text-[#f2e7db] sm:max-w-[42ch] sm:text-[1.02rem] md:mb-9 md:max-w-[48ch] md:text-[1.1rem]">
            Soluciones habitacionales flexibles, pensadas para el lugar y la forma de habitar.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#servicios"
              className="group u-btn-primary u-ease u-focus flex h-12 w-full items-center justify-center gap-2 px-8 text-sm sm:h-14 sm:w-auto sm:px-12 sm:text-lg"
            >
              Explorar soluciones
              <ArrowRight
                className="hero-cta-icon h-4 w-4 translate-x-0 opacity-0 u-ease group-hover:translate-x-0.5 group-hover:opacity-100"
                aria-hidden
              />
            </Link>
            <Link
              href="/proyectos"
              className="group u-btn-secondary u-ease u-focus flex h-12 w-full items-center justify-center gap-2 border-[#f1ddc8]/70 bg-[#f7e8d6]/10 px-8 text-sm text-white hover:border-[#f3e2cf] hover:bg-[#f7e8d6]/20 sm:h-14 sm:w-auto sm:px-12 sm:text-lg"
            >
              Ver proyectos
              <ArrowRight
                className="hero-cta-icon h-4 w-4 translate-x-0 opacity-0 u-ease group-hover:translate-x-0.5 group-hover:opacity-100"
                aria-hidden
              />
            </Link>
          </div>
        </div>

        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-20 bottom-[calc(16px+env(safe-area-inset-bottom))] md:bottom-8"
          aria-hidden
        >
          <div className="animate-bounce drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className="section-padding scroll-mt-28 bg-[#ece1d3] pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Servicios</p>
            <h2>Tres formas de habitar con HUELLA</h2>
            <p className="mt-4 text-base text-[#5a6662]">
              Una misma mirada, distintos caminos según tu necesidad, tu uso y tu proyecto.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
            <div className="u-card u-ease flex h-full flex-col p-8 hover:-translate-y-0.5 hover:border-[#bea788] hover:shadow-[var(--shadow-med)]">
              <div className="flex min-h-[200px] flex-1 flex-col">
                <div className="flex items-center gap-3">
                  <Layers className="h-5 w-5 text-[#7f4f31]/90" aria-hidden />
                  <h3 className="text-2xl font-normal">
                    <span className="font-semibold tracking-wide">HUELLA</span> Base
                  </h3>
                </div>
                <p className="mt-3 text-sm text-[#5c6662]">
                  Sistema habitacional modular, claro y previsible.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[#5c6662]">
                  <li>Niveles de terminación definidos desde el inicio</li>
                  <li>Posibilidad de crecer o adaptarse en el tiempo</li>
                  <li>Una base real para vivir, no una solución transitoria</li>
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <Link href="/base" className="u-btn-secondary u-ease u-focus inline-flex w-full items-center justify-center text-sm">
                  Ver HUELLA Base
                </Link>
              </div>
            </div>
            <div className="u-card-accent u-ease flex h-full flex-col p-9 hover:-translate-y-0.5">
              <div className="flex min-h-[200px] flex-1 flex-col">
                <div className="flex items-center gap-2">
                  <Compass className="h-[22px] w-[22px] text-[#7f4f31]" aria-hidden />
                  <h3 className="text-2xl font-normal">
                    <span className="font-semibold tracking-wide">HUELLA</span> Diseño
                  </h3>
                </div>
                <p className="mt-3 text-sm text-[#5c6662]">
                  Arquitectura pensada para vos y para el lugar.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[#5c6662]">
                  <li>Modelos listos y proyectos personalizados</li>
                  <li>Lectura del sitio y modo de habitar</li>
                  <li>Acompañamiento en cada decisión</li>
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <Link
                  href="/diseno"
                  className="u-btn-primary u-ease u-focus inline-flex w-full items-center justify-center text-sm"
                >
                  Explorar Diseño
                </Link>
              </div>
            </div>
            <div className="u-card u-ease flex h-full flex-col p-8 hover:-translate-y-0.5 hover:border-[#bea788] hover:shadow-[var(--shadow-med)]">
              <div className="flex min-h-[200px] flex-1 flex-col">
                <div className="flex items-center gap-3">
                  <Leaf className="h-5 w-5 text-[#7f4f31]/90" aria-hidden />
                  <h3 className="text-2xl font-normal">
                    <span className="font-semibold tracking-wide">HUELLA</span> Refugios
                  </h3>
                </div>
                <p className="mt-3 text-sm text-[#5c6662]">
                  Espacios pensados para la experiencia.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[#5c6662]">
                  <li>Uso recreativo o turístico</li>
                  <li>Integración con el entorno natural</li>
                  <li>Soluciones simples, robustas y habitables</li>
                </ul>
                <p className="mt-4 text-sm text-[#5c6662]">
                  Tomamos consultas (sin disponibilidad por el momento).
                </p>
              </div>
              <div className="mt-auto pt-6">
                <Link href="/refugios" className="u-btn-secondary u-ease u-focus inline-flex w-full items-center justify-center text-sm">
                  Ver Refugios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="por-que-huella"
        className="section-padding scroll-mt-28 bg-[#f8f2e8] md:scroll-mt-32"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Valor</p>
            <h2>Por qué elegir HUELLA</h2>
            <p className="mt-4 text-[#5a6662]">
              Diseñamos soluciones habitables con foco en el paisaje, el uso real y un proceso claro.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="u-card u-ease bg-[#fffaf2] p-6 hover:-translate-y-0.5 hover:border-[#bea788] hover:shadow-[var(--shadow-med)]"
              >
                <h3 className="text-xl text-[#7f4f31]">{reason.title}</h3>
                <p className="mt-3 text-sm text-[#5c6662]">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeLandscapeBreak />

      <section
        id="proyectos"
        className="section-padding scroll-mt-28 bg-[#ece1d3] md:scroll-mt-32"
      >
        <div className="container-custom">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-eyebrow">Obras</p>
              <h2>Proyectos reales</h2>
              <p className="mt-3 max-w-2xl text-[#5a6662]">
                Arquitectura integrada al entorno, pensada para ser usada y habitada.
              </p>
            </div>
            <Link href="/proyectos" className="u-btn-secondary u-ease u-focus px-6 py-3">
              Ver todos los proyectos
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectModels.map((project) => (
              <div
                key={project.title}
                className="u-card u-ease p-6 hover:-translate-y-0.5 hover:border-[#bea788] hover:shadow-[var(--shadow-med)]"
              >
                <h3 className="text-lg text-[#7f4f31]">{project.title}</h3>
                <p className="mt-2 text-sm text-[#5c6662]">{project.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8f2e8]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Proceso</p>
            <h2>Cómo trabajamos</h2>
          </div>

          <div className="relative mt-8">
            <div className="pointer-events-none absolute left-6 right-6 top-[42px] hidden h-px bg-tierra-200/70 md:block lg:left-10 lg:right-10" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {workSteps.map((step, index) => {
                const isHighlighted = index === 1;

                return (
                  <div
                    key={step.title}
                    className={`u-card u-ease group p-6 hover:-translate-y-0.5 hover:border-[#bea788] hover:shadow-[var(--shadow-med)] ${
                      isHighlighted
                        ? "border-[#bea788] bg-[#fff7ea]"
                        : "border-[#d8cab4] bg-[#fffdf8]"
                    }`}
                  >
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ccb799] bg-[#fff0df] text-sm font-semibold text-[#7f4f31] shadow-sm">
                      {index + 1}
                    </div>
                    <h3 className="mt-4 text-xl">{step.title}</h3>
                    <p className="mt-3 text-sm text-[#5c6662]">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="section-padding scroll-mt-28 bg-[#2a241d] text-white md:scroll-mt-32"
      >
        <div className="container-custom grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="section-eyebrow text-[#d8ba97]">Contacto</p>
            <h2 className="max-w-[16ch] text-3xl leading-tight text-[#fff6e8] sm:text-4xl md:text-5xl">
              ¿Hablamos de tu proyecto?
            </h2>
            <p className="mt-3 max-w-2xl text-[#ede1d4]">
              Te ayudamos a encontrar la mejor solución según tu terreno y tu forma de habitar. Sin
              compromisos, sin apuro.
            </p>
            <Link
              href={buildWhatsAppUrl(whatsappMessages.home)}
              target="_blank"
              rel="noopener noreferrer"
              className="u-btn-secondary u-ease u-focus mt-6 inline-flex bg-[#fff8ed] text-[#7f4f31]"
            >
              Hacer una consulta
            </Link>
          </div>

          <HomeContactForm />
        </div>
      </section>
    </main>
  );
}
