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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    slide?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', inline: 'start' });
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4">
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
        className="u-card relative z-10 w-full max-w-4xl rounded-2xl bg-[#fff9f2] shadow-xl"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="u-focus u-ease absolute right-3 top-3 z-50 inline-flex items-center rounded-full border border-[#d9ccb8] bg-[#fffbf5] px-3 py-1 text-sm text-[#5a4a39] shadow-[var(--shadow-soft)] backdrop-blur hover:bg-white"
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
                className="flex snap-x snap-mandatory overflow-x-auto rounded-xl bg-[#f1e7d9] scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-hidden"
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
              <div className="mt-3 flex items-center justify-center text-sm text-[#5f5750] md:justify-between">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="u-focus u-ease hidden items-center rounded-full border border-[#d0bea5] bg-[#fff8ec] px-4 py-1.5 text-[#7f4f31] shadow-[var(--shadow-soft)] hover:-translate-y-px hover:border-[#ba9f7d] hover:bg-[#fff1de] hover:shadow-[var(--shadow-med)] md:inline-flex"
                  aria-label="Imagen anterior"
                >
                  Anterior
                </button>
                <span>
                  {activeIndex + 1} / {images.length}
                </span>
                <button
                  type="button"
                  onClick={showNext}
                  className="u-focus u-ease hidden items-center rounded-full border border-[#d0bea5] bg-[#fff8ec] px-4 py-1.5 text-[#7f4f31] shadow-[var(--shadow-soft)] hover:-translate-y-px hover:border-[#ba9f7d] hover:bg-[#fff1de] hover:shadow-[var(--shadow-med)] md:inline-flex"
                  aria-label="Imagen siguiente"
                >
                  Siguiente
                </button>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2">
                {images.map((image, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => {
                        setActiveIndex(index);
                        scrollToIndex(index);
                      }}
                      aria-label={`Ir a imagen ${index + 1}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`u-focus u-ease h-2.5 rounded-full border ${
                        isActive
                          ? 'w-6 border-tierra-500 bg-tierra-500'
                          : 'w-2.5 border-[#c9b89f] bg-white hover:border-[#af9674] hover:bg-[#f7eedf]'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col">
              {eyebrow && (
                <p className="section-eyebrow">
                  {eyebrow}
                </p>
              )}
              {heading && (
                <h2 id={titleId} className="section-title section-title-subsection text-2xl">
                  {heading}
                </h2>
              )}
              {subheading && (
                <p id={subtitleId} className="mt-2 text-sm text-[#5f5750]">
                  {subheading}
                </p>
              )}
              {description && (
                <p className="mt-4 text-sm text-[#5f5750]">{description}</p>
              )}
              {cta && (
                <Link
                  href={cta.href}
                  className="u-btn-primary u-ease u-focus mt-6 inline-flex w-full items-center justify-center sm:w-auto"
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
