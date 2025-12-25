import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { proyectos } from '@/data/proyectos';

export default function Home() {
  const projectImages = proyectos.slice(0, 6);

  return (
    <main>
      <section className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-10" />
          <img
            src="/media/huella/home/home-protrerillos-embalse-1.png"
            alt="Montañas de Potrerillos"
            className="w-full h-full object-cover object-[70%_85%] md:object-center"
          />
        </div>

        <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto">
          <h1 className="mb-6 font-bold tracking-tight text-[clamp(2.2rem,6vw,4rem)]">
            HUELLA
          </h1>
          <p className="mb-8 font-light leading-snug md:leading-normal text-[clamp(1rem,2.2vw,1.25rem)] max-w-[32ch] sm:max-w-[44ch] md:max-w-[60ch] mx-auto text-balance">
            <span className="block sm:hidden">Espacios que dialogan con el territorio.</span>
            <span className="hidden sm:inline">
              Diseñamos espacios que leen el territorio para definir cada decisión.
              <br className="hidden sm:block" />
              Experiencias que combinan paisaje, uso cotidiano y calma.
            </span>
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link
              href="/huella"
              className="btn-primary w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 text-sm sm:text-lg flex items-center justify-center gap-2 rounded-xl"
            >
              Explorar HUELLA →
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
              <Link
                href="/huella#base"
                className="rounded-full border border-white/40 px-3 py-1.5 text-xs font-medium tracking-wide text-white/90 transition hover:border-white/70 hover:text-white"
              >
                Base · Unidades modulares
              </Link>
              <Link
                href="/huella#diseno"
                className="rounded-full border border-white/40 px-3 py-1.5 text-xs font-medium tracking-wide text-white/90 transition hover:border-white/70 hover:text-white"
              >
                Diseño · Proyecto a medida
              </Link>
              <Link
                href="/huella#refugios"
                className="rounded-full border border-white/40 px-3 py-1.5 text-xs font-medium tracking-wide text-white/90 transition hover:border-white/70 hover:text-white"
              >
                Refugios · Estadías / alquiler
              </Link>
            </div>
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
        id="huella-base"
        className="section-padding bg-tierra-50 scroll-mt-28 pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-widest text-tierra-600">
              HUELLA
            </div>
            <h2 className="mt-4">Una forma consciente y flexible de habitar el territorio.</h2>
            <p className="mt-4 text-base text-gray-600">
              Elegí la propuesta que mejor acompaña tu forma de habitar y el tiempo que tenés para hacerlo realidad.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl">HUELLA Base</h3>
              <p className="mt-3 text-sm text-gray-600">
                Módulos habitacionales estandarizados con alcance, plazos y niveles de terminación definidos.
              </p>
              <Link href="/base" className="mt-6 inline-flex items-center btn-primary">
                Explorar
              </Link>
            </div>
            <div className="rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl">HUELLA Diseño</h3>
              <p className="mt-3 text-sm text-gray-600">
                Proyectos arquitectónicos a medida con criterio y acompañamiento profesional.
              </p>
              <Link href="/diseno" className="mt-6 inline-flex items-center btn-secondary">
                Explorar
              </Link>
            </div>
            <div className="rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl">HUELLA Refugios</h3>
              <p className="mt-3 text-sm text-gray-600">
                Unidades de descanso para estadías breves, centradas en paisaje y silencio.
              </p>
              <Link href="/refugios" className="mt-6 inline-flex items-center btn-secondary">
                Explorar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="huella"
        className="section-padding bg-white scroll-mt-28 md:scroll-mt-32"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-widest text-tierra-600">
              Huella Mendoza
            </div>
            <h2 className="mt-4">Qué es HUELLA</h2>
            <p className="mt-4">
              HUELLA es una propuesta de arquitectura y experiencias que parte
              del territorio para definir cada obra. Integramos diseño,
              funcionalidad y paisaje para crear espacios claros de habitar.
              Desde módulos estandarizados hasta proyectos a medida y refugios,
              ofrecemos caminos concretos y previsibles.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg text-gray-700">
              Explorá a tu ritmo las tres propuestas y elegí la que mejor se ajusta a tu necesidad.
            </p>
            <Link
              href="/huella"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-tierra-700 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-tierra-800"
            >
              Explorar HUELLA
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>HUELLA Base</h2>
            <p className="mt-3">
              Unidades habitacionales modulares con alcances definidos para avanzar con orden y sin sorpresas.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-600">
              <li>Niveles de terminación especificados según presupuesto y uso.</li>
              <li>Pasos y plazos detallados antes de iniciar.</li>
              <li>Costos cerrados para tomar decisiones con anticipación.</li>
            </ul>
            <Link href="/base" className="btn-secondary mt-8 inline-flex">
              Explorar
            </Link>
          </div>
        </div>
      </section>

      <section
        id="huella-diseno"
        className="section-padding bg-white scroll-mt-28 pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>HUELLA Diseño</h2>
            <p className="mt-3">
              Proyectos arquitectónicos a medida con acompañamiento profesional en cada etapa.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-600">
              <li>Lectura del sitio y de tu modo de habitar para definir el diseño.</li>
              <li>Propuestas comparables que integran funcionalidad y paisaje.</li>
              <li>Dirección y seguimiento cercano para sostener las decisiones.</li>
            </ul>
            <Link href="/diseno" className="btn-secondary mt-8 inline-flex">
              Explorar
            </Link>
          </div>
        </div>
      </section>

      <section
        id="huella-refugios"
        className="section-padding bg-tierra-50 scroll-mt-28 pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>HUELLA Refugios</h2>
            <p className="mt-3">
              Unidades de descanso para estadías temporales, con foco en el paisaje y el silencio.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-600">
              <li>Iluminación y climatización resueltas para uso inmediato.</li>
              <li>Equipamiento sencillo para disfrutar sin complejidad.</li>
              <li>Reserva directa y acompañamiento en la llegada.</li>
            </ul>
            <Link href="/refugios" className="btn-secondary mt-8 inline-flex">
              Explorar
            </Link>
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className="section-padding bg-white scroll-mt-28 md:scroll-mt-32"
      >
        <div className="container-custom">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2>Proyectos</h2>
              <p className="mt-3 max-w-2xl">
                Proyectos construidos y en marcha que muestran cómo trabajamos
                módulos habitacionales, diseño a medida y refugios integrados al paisaje.
              </p>
            </div>
            <Link href="/proyectos" className="btn-secondary px-6 py-3">
              Ver todos
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectImages.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-2xl bg-gray-100"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="section-padding bg-tierra-700 text-white scroll-mt-28 md:scroll-mt-32"
      >
        <div className="container-custom">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2>Contanos tu idea</h2>
              <p className="mt-3 max-w-2xl text-white/80">
                Te ayudamos a elegir la unidad correcta y a definir un camino
                claro para tu proyecto.
              </p>
            </div>
            <Link href="/contacto" className="btn-secondary bg-white text-tierra-700">
              Empezar ahora
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
