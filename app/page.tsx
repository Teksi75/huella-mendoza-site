import Link from 'next/link';
import { buildWhatsAppUrl, whatsappMessages } from '@/data/contact';

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />
          <img
            src="/media/huella/home/home-protrerillos-embalse-1.png"
            alt="Vista panorámica de Potrerillos"
            className="w-full h-full object-cover object-[70%_85%] md:object-center"
          />
        </div>

        <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto">
          <h1 className="mb-6 font-bold tracking-tight text-[clamp(2.2rem,6vw,4rem)]">
            Arquitectura modular para habitar el paisaje
          </h1>
          <p className="mb-8 font-light leading-snug md:leading-normal text-[clamp(1rem,2.2vw,1.25rem)] max-w-[32ch] sm:max-w-[44ch] md:max-w-[60ch] mx-auto text-balance">
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
              className="btn-secondary flex h-12 w-full items-center justify-center rounded-full px-8 text-sm sm:h-14 sm:w-auto sm:px-12 sm:text-lg"
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
            <div className="text-sm uppercase tracking-widest text-tierra-600">
              Servicios
            </div>
            <h2 className="mt-4">Tres formas de habitar con HUELLA</h2>
            <p className="mt-4 text-base text-gray-600">
              Una misma mirada, distintos caminos según tu necesidad, tu uso y tu proyecto.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <div className="min-h-[208px]">
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
              <Link
                href="/base"
                className="btn-primary mt-6 inline-flex h-10 w-full items-center justify-center text-sm"
              >
                Ver HUELLA Base
              </Link>
            </div>
            <div className="flex flex-col rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <div className="min-h-[208px]">
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
              <Link
                href="/diseno"
                className="btn-secondary mt-6 inline-flex h-10 w-full items-center justify-center text-sm"
              >
                Explorar Diseño
              </Link>
            </div>
            <div className="flex flex-col rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <div className="min-h-[208px]">
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
              <Link
                href="/refugios"
                className="btn-secondary mt-6 inline-flex h-10 w-full items-center justify-center text-sm"
              >
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
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl">Sostenibilidad</h3>
              <p className="mt-3 text-sm text-gray-600">
                Construimos con respeto por el entorno, reduciendo el impacto frente a la construcción tradicional y
                priorizando una relación equilibrada con el paisaje.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl">Previsibilidad</h3>
              <p className="mt-3 text-sm text-gray-600">
                Procesos claros, decisiones ordenadas y acompañamiento durante todo el proyecto. Menos incertidumbre,
                más tranquilidad en cada etapa.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl">Flexibilidad</h3>
              <p className="mt-3 text-sm text-gray-600">
                Los espacios pueden crecer, adaptarse o transformarse con el tiempo, acompañando cambios reales en la
                forma de habitar.
              </p>
            </div>
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
              <p className="mt-3 max-w-2xl">
                Arquitectura integrada al entorno, pensada para ser usada y habitada.
              </p>
            </div>
            <Link href="/proyectos" className="btn-secondary px-6 py-3">
              Ver todos los proyectos
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Modelo 300', detail: '30 m² · 1 dormitorio' },
              { title: 'Modelo 550', detail: '55 m² · 2 dormitorios' },
              { title: 'Modelo 725', detail: '72,5 m² · 3 dormitorios' },
            ].map((project) => (
              <div key={project.title} className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg">{project.title}</h3>
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

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 'Consulta', text: 'Entendemos tu necesidad, el uso y el lugar.' },
              { step: 'Diseño', text: 'Propuesta clara y comparable según tu proyecto.' },
              { step: 'Fabricación', text: 'Construcción bajo control, con procesos definidos.' },
              { step: 'Entrega', text: 'Instalación y acompañamiento final.' },
            ].map((item, index) => (
              <div key={item.step} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-wider text-tierra-600">
                  Paso {index + 1}
                </div>
                <h3 className="mt-3 text-xl">{item.step}</h3>
                <p className="mt-3 text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="section-padding bg-tierra-700 text-white scroll-mt-28 md:scroll-mt-32"
      >
        <div className="container-custom grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <h2>¿Hablamos de tu proyecto?</h2>
            <p className="mt-4 text-white/80">
              Te ayudamos a encontrar la mejor solución según tu terreno y tu forma de habitar. Sin compromisos, sin
              apuro.
            </p>
            <Link
              href={buildWhatsAppUrl(whatsappMessages.home)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-6 inline-flex w-fit bg-white text-tierra-700"
            >
              Hablar por WhatsApp
            </Link>
          </div>

          <form className="rounded-2xl bg-white p-6 shadow-lg text-gray-800">
            <div className="grid gap-4">
              <label className="text-sm font-medium">
                Nombre
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-tierra-500 focus:outline-none focus:ring-1 focus:ring-tierra-500"
                />
              </label>
              <label className="text-sm font-medium">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-tierra-500 focus:outline-none focus:ring-1 focus:ring-tierra-500"
                />
              </label>
              <label className="text-sm font-medium">
                Mensaje
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="Contanos sobre tu terreno y tu idea"
                  className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-tierra-500 focus:outline-none focus:ring-1 focus:ring-tierra-500"
                />
              </label>
            </div>
            <button type="submit" className="btn-primary mt-6 w-full">
              Enviar consulta
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
