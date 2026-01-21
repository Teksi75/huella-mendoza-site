'use client';

import { useState } from 'react';
import Image from 'next/image';
import { proyectos, type Proyecto } from '@/data/proyectos';
import { altText } from '@/data/altText';
import ImageCarouselModal from '@/components/ImageCarouselModal';

const gridImageSizes =
  '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

const getAltText = (src: string, fallback: string) =>
  altText[src] ?? fallback;

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);

  const closeModal = () => setSelectedProject(null);
  const projectImages = selectedProject
    ? selectedProject.galleryImages.map((image, index) => ({
        src: image,
        alt: getAltText(
          image,
          `${selectedProject.title} - imagen ${index + 1}`,
        ),
      }))
    : [];

  return (
    <>
      <div className="container-custom grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.title}
            className="overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            <button
              type="button"
              className="w-full text-left"
              onClick={() => setSelectedProject(proyecto)}
              aria-label={`Ver detalles de ${proyecto.title}`}
            >
              <Image
                src={proyecto.image}
                alt={getAltText(proyecto.image, proyecto.title)}
                width={600}
                height={208}
                sizes={gridImageSizes}
                quality={90}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg">{proyecto.title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {proyecto.subtitle}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>

      <ImageCarouselModal
        isOpen={Boolean(selectedProject)}
        onClose={closeModal}
        images={projectImages}
        eyebrow={selectedProject?.label}
        title={selectedProject?.title}
        subtitle={selectedProject?.subtitle}
        description={selectedProject?.description}
        cta={
          selectedProject ? { href: '/contacto', label: 'Contactar' } : undefined
        }
      />
    </>
  );
}
