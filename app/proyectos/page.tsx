import ProjectsGrid from './ProjectsGrid';
import ProjectsMicroCTA from './ProjectsMicroCTA';

export default function ProyectosPage() {
  return (
    <main>
      <section
        id="proyectos"
        className="section-padding scroll-mt-28 bg-[#f8f2e8] pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <p className="section-eyebrow">Proyectos</p>
          <h1>Proyectos</h1>
          <p className="mt-4 max-w-3xl text-[#5a6662]">
            Proyectos construidos y en proceso que muestran cómo cada decisión
            de diseño, eficiencia y relación con el paisaje se traduce en una
            experiencia concreta.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#ece1d3]">
        <ProjectsGrid />
        <ProjectsMicroCTA />
      </section>
    </main>
  );
}
