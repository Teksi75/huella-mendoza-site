import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { proyectos } from '@/data/proyectos';

export default function Home() {
  const uenCards = [
    {
      title: 'HUELLA Base',
      copy: 'Unidades claras para avanzar con orden y confianza.',
      href: '/base',
    },
    {
      title: 'HUELLA Diseno',
      copy: 'Arquitectura integrada para decisiones claras y humanas.',
      href: '/diseno',
    },
    {
      title: 'HUELLA Refugios',
      copy: 'Experiencias de descanso en dialogo con el paisaje.',
      href: '/refugios',
    },
  ];

  const projectImages = proyectos.slice(0, 6);

  return (
    <main>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-10" />
          <img
            src="/media/huella/home/home-protrerillos-embalse-1.png"
            alt="Montanas de Potrerillos"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center text-white px-6 max-w-5xl">
          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
            HUELLA
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Disenamos espacios que dialogan con el territorio. <br />
            Experiencias que se integran al paisaje y a tu forma de habitar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/base" className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
              Unidades para habitar
              <ArrowRight size={20} />
            </Link>
            <Link href="/refugios" className="btn-secondary text-lg px-8 py-4 flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              Experiencias de descanso
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
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
            <p className="mt-4 text-base text-gray-600">Elegi tu camino.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl">HUELLA Base</h3>
              <p className="mt-3 text-sm text-gray-600">
                Rapido - Previsible - Accesible
              </p>
              <Link href="/base" className="mt-6 inline-flex items-center btn-primary">
                Explorar
              </Link>
            </div>
            <div className="rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl">HUELLA Diseno</h3>
              <p className="mt-3 text-sm text-gray-600">
                Arquitectura - Criterio - Acompanamiento
              </p>
              <Link href="/diseno" className="mt-6 inline-flex items-center btn-secondary">
                Explorar
              </Link>
            </div>
            <div className="rounded-2xl border border-tierra-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl">HUELLA Refugios</h3>
              <p className="mt-3 text-sm text-gray-600">
                Experiencia - Paisaje - Descanso
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
            <h2 className="mt-4">Que es HUELLA</h2>
            <p className="mt-4">
              HUELLA es una propuesta de arquitectura integrada y experiencias
              en el territorio, no solo en la montana. Integramos diseno y
              paisaje para crear espacios que se viven con calma y permanencia.
              Desde unidades claras hasta proyectos a medida y refugios,
              conectamos cada decision con el territorio.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2>HUELLA Base</h2>
            <p className="mt-3">
              Opciones claras para avanzar con orden y una forma de habitar simple.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-600">
              <li>Niveles de terminacion a tu medida.</li>
              <li>Pasos definidos desde el inicio.</li>
              <li>Costos claros para decidir con calma.</li>
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
            <h2>HUELLA Diseno</h2>
            <p className="mt-3">
              Acompanamiento cercano para dar forma a un espacio con identidad.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-600">
              <li>Escucha del lugar y de tu forma de habitar.</li>
              <li>Propuestas claras para decidir con criterio.</li>
              <li>Seguimiento simple y presente en cada etapa.</li>
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
              Experiencias pensadas para descansar, con paisaje y calma.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-600">
              <li>Luz y abrigo bien resueltos.</li>
              <li>Comodidad simple y cuidada.</li>
              <li>Reserva facil y bienvenida cercana.</li>
            </ul>
            <Link href="/refugios" className="btn-secondary mt-8 inline-flex">
              Explorar
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <h2 className="text-center">Unidades de negocio</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {uenCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl">{card.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{card.copy}</p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tierra-700 hover:text-tierra-900"
                >
                  Ver detalles
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
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
                Evidencia real de lo que construimos: unidades para habitar,
                diseno a medida y experiencias en refugios.
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
                Te ayudamos a elegir la unidad correcta y a definir el camino
                para tu proyecto.
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
