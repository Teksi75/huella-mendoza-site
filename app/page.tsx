import Link from 'next/link';
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

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-10" />
          <img
            src="/media/huella/home/home-protrerillos-embalse-1.png"
            alt={altText['/media/huella/home/home-protrerillos-embalse-1.png']}
            className="w-full h-full object-cover object-[70%_85%] md:object-center"
          />
        </div>

        <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto">
          <h1 className="mb-6 font-bold tracking-tight text-[clamp(2.2rem,6vw,4rem)]">
            Arquitectura modular para habitar el paisaje
          </h1>
          <p className="mb-8 font-light leading-snug md:leading-normal text-[0.95rem] sm:text-[clamp(1rem,2.2vw,1.25rem)] max-w-[32ch] sm:max-w-[44ch] md:max-w-[60ch] mx-auto text-balance">
            Soluciones habitacionales flexibles, pensadas para el lugar y la forma de habitar.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#servicios"
              className="btn-primary flex h-12 w-full items-center justify-center rounded-full px-8 text-sm sm:h-14 sm:w-auto sm:px-12 sm:text-lg"
            >
              Explorar soluciones
            </Link>
            <Link
              href="/proyectos"
              className="flex h-12 w-full items-center justify-center rounded-full border border-white/40 px-8 text-sm font-medium text-white transition hover:border-white/70 hover:bg-white/10 sm:h-14 sm:w-auto sm:px-12 sm:text-lg"
            >
              Ver proyectos
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
        className="section-padding bg-tierra-50 scroll-mt-28 pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Tres formas de habitar con HUELLA</h2>
            <p className="mt-4 text-base text-gray-600">
              Una misma mirada, distintos caminos según tu necesidad, tu uso y tu proyecto.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <div className="min-h-[200px]">
                <h3 className="text-2xl">HUELLA Base</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Sistema habitacional modular, claro y previsible.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>Niveles de terminación definidos desde el inicio</li>
                  <li>Posibilidad de crecer o adaptarse en el tiempo</li>
                  <li>Una base real para vivir, no una solución transitoria</li>
                </ul>
              </div>
              <Link href="/base" className="btn-primary mt-6 inline-flex w-full items-center justify-center text-sm">
                Ver HUELLA Base
              </Link>
            </div>
            <div className="flex flex-col rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <div className="min-h-[200px]">
                <h3 className="text-2xl">HUELLA Diseño</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Arquitectura pensada para vos y para el lugar.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>Modelos listos y proyectos personalizados</li>
                  <li>Lectura del sitio y modo de habitar</li>
                  <li>Acompañamiento en cada decisión</li>
                </ul>
              </div>
              <Link href="/diseno" className="btn-secondary mt-6 inline-flex w-full items-center justify-center text-sm">
                Explorar Diseño
              </Link>
            </div>
            <div className="flex flex-col rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <div className="min-h-[200px]">
                <h3 className="text-2xl">HUELLA Refugios</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Espacios pensados para la experiencia.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>Uso recreativo o turístico</li>
                  <li>Integración con el entorno natural</li>
                  <li>Soluciones simples, robustas y habitables</li>
                </ul>
              </div>
              <Link href="/refugios" className="btn-secondary mt-6 inline-flex w-full items-center justify-center text-sm">
                Ver Refugios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="por-que-huella"
        className="section-padding bg-white scroll-mt-28 md:scroll-mt-32"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Por qué elegir HUELLA</h2>
            <p className="mt-4 text-gray-600">
              Diseñamos soluciones habitables con foco en el paisaje, el uso real y un proceso claro.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-tierra-200 bg-tierra-50 p-6 shadow-sm"
              >
                <h3 className="text-xl text-tierra-700">{reason.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className="section-padding bg-tierra-50 scroll-mt-28 md:scroll-mt-32"
      >
        <div className="container-custom">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2>Proyectos reales</h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                Arquitectura integrada al entorno, pensada para ser usada y habitada.
              </p>
            </div>
            <Link href="/proyectos" className="btn-secondary px-6 py-3">
              Ver todos los proyectos
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectModels.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg text-tierra-700">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{project.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>Cómo trabajamos</h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-tierra-200 p-6">
                <div className="text-sm font-semibold text-tierra-600">Paso {index + 1}</div>
                <h3 className="mt-3 text-xl">{step.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="section-padding bg-tierra-700 text-white scroll-mt-28 md:scroll-mt-32"
      >
        <div className="container-custom grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2>¿Hablamos de tu proyecto?</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Te ayudamos a encontrar la mejor solución según tu terreno y tu forma de habitar. Sin
              compromisos, sin apuro.
            </p>
            <Link
              href={buildWhatsAppUrl(whatsappMessages.home)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-6 inline-flex bg-white text-tierra-700"
            >
              Hablar por WhatsApp
            </Link>
          </div>

          <HomeContactForm />
        </div>
      </section>
    </main>
  );
}
