'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { proyectos, type Proyecto } from '@/data/proyectos';
import { altText } from '@/data/altText';

const gridImageSizes =
  '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

const modalImageSizes = '(max-width: 768px) 100vw, 600px';

const getAltText = (src: string, fallback: string) =>
  altText[src] ?? fallback;

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<number | null>(null);
  const titleId = useId();
  const subtitleId = useId();

  const closeModal = () => setSelectedProject(null);

  const showPrevious = () => {
    if (!selectedProject) return;
    const nextIndex =
      activeIndex === 0
        ? selectedProject.galleryImages.length - 1
        : activeIndex - 1;
    scrollToIndex(nextIndex);
  };

  const showNext = () => {
    if (!selectedProject) return;
    const nextIndex =
      activeIndex === selectedProject.galleryImages.length - 1
        ? 0
        : activeIndex + 1;
    scrollToIndex(nextIndex);
  };

  const scrollToIndex = useCallback((index: number) => {
    const container = galleryRef.current;
    if (!container) return;
    container.scrollTo({
      left: container.clientWidth * index,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  }, []);

  const handleGalleryScroll = useCallback(() => {
    const container = galleryRef.current;
    if (!container) return;

    if (scrollTimeout.current) {
      window.clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = window.setTimeout(() => {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(index);
    }, 80);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    setActiveIndex(0);
    galleryRef.current?.scrollTo({ left: 0, behavior: 'auto' });
  }, [selectedProject]);

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

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
            className="relative z-10 w-full max-w-4xl max-h-[90vh] rounded-2xl bg-white p-6 shadow-xl"
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
            <div className="grid max-h-[calc(90vh-3rem)] gap-6 overflow-y-auto pr-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="flex flex-col">
                <div className="overflow-hidden rounded-xl bg-tierra-50">
                  <div
                    ref={galleryRef}
                    onScroll={handleGalleryScroll}
                    className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
                  >
                    {selectedProject.galleryImages.map((imageSrc, index) => (
                      <div
                        key={imageSrc}
                        className="min-w-full flex-[0_0_100%] snap-center"
                      >
                        <div className="relative flex aspect-[4/3] w-full items-center justify-center">
                          <Image
                            src={imageSrc}
                            alt={getAltText(
                              imageSrc,
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
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="hidden rounded-full border border-gray-200 px-3 py-1 transition hover:bg-gray-100 sm:inline-flex"
                  >
                    Anterior
                  </button>
                  <span className="mx-auto sm:mx-0">
                    {activeIndex + 1} / {selectedProject.galleryImages.length}
                  </span>
                  <button
                    type="button"
                    onClick={showNext}
                    className="hidden rounded-full border border-gray-200 px-3 py-1 transition hover:bg-gray-100 sm:inline-flex"
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
                <p id={subtitleId} className="mt-2 text-sm text-gray-600">
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
      )}
    </>
  );
}
