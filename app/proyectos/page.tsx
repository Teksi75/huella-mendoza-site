import { proyectos } from '@/data/proyectos';

export default function ProyectosPage() {
  return (
    <main>
      <section
        id="proyectos"
        className="section-padding bg-white scroll-mt-28 pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <h1>Proyectos</h1>
          <p className="mt-4 max-w-3xl">
            Evidencia real del trabajo de HUELLA. Cada proyecto muestra
            decisiones de diseno, eficiencia y relacion con el paisaje.
          </p>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <img
                src={proyecto.image}
                alt={proyecto.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg">{proyecto.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{proyecto.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
