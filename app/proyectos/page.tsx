import ProjectsGrid from './ProjectsGrid';

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
            Proyectos construidos y en proceso que muestran como cada decision
            de diseno, eficiencia y relacion con el paisaje se traduce en una
            experiencia concreta.
          </p>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <ProjectsGrid />
      </section>
    </main>
  );
}
