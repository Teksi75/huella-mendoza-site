'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { proyectos, type Proyecto } from '@/data/proyectos';
import { altText } from '@/data/altText';

const gridImageSizes =
  '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

const modalImageSizes = '(max-width: 768px) 100vw, 600px';

const getAltText = (src: string, fallback: string) =>
  altText[src] ?? fallback;

const normalizeGalleryImages = (images: Proyecto['galleryImages']) =>
  images.map((image) =>
    typeof image === 'string' ? { src: image } : image,
  );

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const subtitleId = useId();

  const closeModal = () => setSelectedProject(null);

  const galleryImages = selectedProject
    ? normalizeGalleryImages(selectedProject.galleryImages)
    : [];

  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const slide = container.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  };

  const showPrevious = () => {
    if (!selectedProject) return;
    const nextIndex =
      activeIndex === 0
        ? galleryImages.length - 1
        : activeIndex - 1;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const showNext = () => {
    if (!selectedProject) return;
    const nextIndex =
      activeIndex === galleryImages.length - 1
        ? 0
        : activeIndex + 1;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    if (!selectedProject) return;
    setActiveIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'auto' });
    }
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      previousActiveElement?.focus();
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements =
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ) ?? [];

      const focusables = Array.from(focusableElements);
      if (focusables.length === 0) return;

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

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

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Cerrar modal"
            onClick={closeModal}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={subtitleId}
            className="relative z-10 w-full max-w-4xl rounded-2xl bg-white shadow-xl"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              className="absolute right-3 top-3 z-50 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-sm text-gray-700 shadow-sm backdrop-blur transition hover:bg-white"
              aria-label="Cerrar"
            >
              Cerrar
            </button>
            <div className="max-h-[90vh] overflow-y-auto p-6 pt-12">
              <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div>
                  <div
                    ref={carouselRef}
                    onScroll={(event) => {
                      const container = event.currentTarget;
                      const width = container.clientWidth;
                      if (!width) return;
                      const nextIndex = Math.round(container.scrollLeft / width);
                      setActiveIndex((current) =>
                        current === nextIndex ? current : nextIndex,
                      );
                    }}
                    className="flex snap-x snap-mandatory overflow-x-auto rounded-xl bg-tierra-50 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-hidden"
                  >
                    {galleryImages.map((image, index) => (
                      <div
                        key={image.src}
                        className="relative flex min-w-full snap-center items-center justify-center overflow-hidden"
                      >
                        <div className="relative flex aspect-[4/3] w-full items-center justify-center">
                          {selectedProject.floorplanLabel &&
                            image.type === 'floorplan' &&
                            index === activeIndex && (
                              <span className="absolute left-4 top-4 z-20 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                                {selectedProject.floorplanLabel}
                              </span>
                            )}
                          <Image
                            src={image.src}
                            alt={getAltText(
                              image.altKey ?? image.src,
                              `${selectedProject.title} - imagen ${index + 1}`,
                            )}
                            fill
                            sizes={modalImageSizes}
                            quality={90}
                            className="object-contain object-center"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-center text-sm text-gray-600 md:justify-between">
                    <button
                      type="button"
                      onClick={showPrevious}
                      className="hidden rounded-full border border-gray-200 px-3 py-1 transition hover:bg-gray-100 md:inline-flex"
                    >
                      Anterior
                    </button>
                    <span>
                      {activeIndex + 1} / {galleryImages.length}
                    </span>
                    <button
                      type="button"
                      onClick={showNext}
                      className="hidden rounded-full border border-gray-200 px-3 py-1 transition hover:bg-gray-100 md:inline-flex"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs uppercase tracking-[0.2em] text-tierra-600">
                    {selectedProject.label}
                  </p>
                  <h2 id={titleId} className="mt-2 text-2xl">
                    {selectedProject.title}
                  </h2>
                  <p
                    id={subtitleId}
                    className="mt-2 text-sm text-gray-600"
                  >
                    {selectedProject.subtitle}
                  </p>
                  {selectedProject.description && (
                    <p className="mt-4 text-sm text-gray-600">
                      {selectedProject.description}
                    </p>
                  )}
                  <Link
                    href="/contacto"
                    className="btn-primary mt-6 inline-flex w-full items-center justify-center sm:w-auto"
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
