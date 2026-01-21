'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CarouselImage = {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
};

type CarouselCta = {
  href: string;
  label: string;
};

type ImageCarouselModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: CarouselImage[];
  initialIndex?: number;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  cta?: CarouselCta;
};

const modalImageSizes = '(max-width: 768px) 100vw, 600px';

export default function ImageCarouselModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  eyebrow,
  title,
  subtitle,
  description,
  cta,
}: ImageCarouselModalProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const subtitleId = useId();

  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const slide = container.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  };

  const showPrevious = () => {
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const showNext = () => {
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    if (!isOpen) return;
    setActiveIndex(initialIndex);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.clientWidth * initialIndex,
        behavior: 'auto',
      });
    }
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      previousActiveElement?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeImage = images[activeIndex];
  const heading = activeImage?.title ?? title;
  const subheading = activeImage?.subtitle ?? subtitle;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Cerrar modal"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={heading ? titleId : undefined}
        aria-describedby={subheading ? subtitleId : undefined}
        className="relative z-10 w-full max-w-4xl rounded-2xl bg-white shadow-xl"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
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
                {images.map((image) => (
                  <div
                    key={image.src}
                    className="relative flex min-w-full snap-center items-center justify-center overflow-hidden"
                  >
                    <div className="relative flex aspect-[4/3] w-full items-center justify-center">
                      <Image
                        src={image.src}
                        alt={image.alt}
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
                  {activeIndex + 1} / {images.length}
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
              {eyebrow && (
                <p className="text-xs uppercase tracking-[0.2em] text-tierra-600">
                  {eyebrow}
                </p>
              )}
              {heading && (
                <h2 id={titleId} className="mt-2 text-2xl">
                  {heading}
                </h2>
              )}
              {subheading && (
                <p id={subtitleId} className="mt-2 text-sm text-gray-600">
                  {subheading}
                </p>
              )}
              {description && (
                <p className="mt-4 text-sm text-gray-600">{description}</p>
              )}
              {cta && (
                <Link
                  href={cta.href}
                  className="btn-primary mt-6 inline-flex w-full items-center justify-center sm:w-auto"
                >
                  {cta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
