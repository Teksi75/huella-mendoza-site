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
            <span className="block">Arquitectura modular</span>
            <span className="block">para habitar el paisaje</span>
          </h1>
          <p className="mb-8 font-light leading-snug md:leading-normal text-[clamp(1rem,2.2vw,1.25rem)] max-w-[32ch] sm:max-w-[44ch] md:max-w-[60ch] mx-auto text-balance">
            <span className="block">Soluciones claras.</span>
            <span className="block">Plazos definidos.</span>
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link
              href="/huella"
              className="btn-primary flex h-12 w-full items-center justify-center rounded-full px-8 text-sm sm:h-14 sm:w-auto sm:px-12 sm:text-lg"
            >
              Explorar propuestas
            </Link>
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm sm:text-base text-white/90">
              <Link
                href="https://huella-mendoza-site.vercel.app/base"
                className="rounded-full border border-white/30 px-3 py-1 transition hover:border-white/60 hover:text-white"
              >
                Base · Unidades modulares
              </Link>
              <Link
                href="https://huella-mendoza-site.vercel.app/diseno"
                className="rounded-full border border-white/30 px-3 py-1 transition hover:border-white/60 hover:text-white"
              >
                Diseño · Proyecto a medida
              </Link>
              <Link
                href="https://huella-mendoza-site.vercel.app/refugios"
                className="rounded-full border border-white/30 px-3 py-1 transition hover:border-white/60 hover:text-white"
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
                Rápido. Claro. Accesible.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <span className="block">Soluciones modulares con costos y tiempos definidos.</span>
                <span className="block">Vos elegís el nivel de terminación.</span>
              </p>
              <Link href="/base" className="mt-6 inline-flex items-center btn-primary">
                Pedir presupuesto
              </Link>
            </div>
            <div className="rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl">HUELLA Diseño</h3>
              <p className="mt-3 text-sm text-gray-600">
                Arquitectura pensada para vos.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <span className="block">Modelos listos, proyectos personalizados</span>
                <span className="block">y ampliaciones que se integran a lo existente.</span>
              </p>
              <Link href="/diseno" className="mt-6 inline-flex items-center btn-secondary">
                Solicitar asesoramiento
              </Link>
            </div>
            <div className="rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl">HUELLA Refugios</h3>
              <p className="mt-3 text-sm text-gray-600">
                Espacios para vivir la experiencia.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <span className="block">Refugios integrados al entorno</span>
                <span className="block">pensados para el descanso y el paisaje.</span>
              </p>
              <Link href="/refugios" className="mt-6 inline-flex items-center btn-secondary">
                Consultar disponibilidad
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
            <h2 className="mt-4">Una forma consciente de habitar el territorio</h2>
            <p className="mt-4">
              <span className="block">HUELLA es una marca paraguas de arquitectura y espacios habitables.</span>
              <span className="block">Trabajamos desde soluciones modulares claras</span>
              <span className="block">hasta proyectos diseñados a medida.</span>
            </p>
            <p className="mt-3">
              <span className="block">Diseño, paisaje y uso real,</span>
              <span className="block">sin sobrepromesas.</span>
            </p>
            <Link href="/huella" className="btn-secondary mt-6 inline-flex">
              Ver cómo trabajamos
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
              <h2>Proyectos reales. Resultados concretos.</h2>
              <p className="mt-3 max-w-2xl">
                <span className="block">Arquitectura integrada al entorno,</span>
                <span className="block">pensada para ser usada y habitada.</span>
              </p>
            </div>
            <Link href="/proyectos" className="btn-secondary px-6 py-3">
              Ver proyectos
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
              <h2>¿Listo para avanzar?</h2>
              <p className="mt-3 max-w-2xl text-white/80">
                <span className="block">Te ayudamos a encontrar la mejor solución</span>
                <span className="block">según tu terreno, uso y presupuesto.</span>
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto" className="btn-secondary bg-white text-tierra-700">
                Hablar por WhatsApp
              </Link>
              <Link href="/contacto" className="btn-secondary bg-white text-tierra-700">
                Pedir presupuesto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
