'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageCarouselModal, {
  type ImageCarouselItem,
} from '@/components/ImageCarouselModal';

const thumbnailSizes = '(min-width: 768px) 50vw, 100vw';

const usosImages: ImageCarouselItem[] = [
  {
    src: '/media/huella/diseno/usos/Oficina_concept_1.png',
    alt: 'Render de espacio de trabajo modular con estructura contemporánea y áreas de espera.',
    title: 'Espacio de trabajo modular',
  },
  {
    src: '/media/huella/diseno/usos/Oficina_concept_2.png',
    alt: 'Render de recepción y área de espera en módulo contemporáneo, escena urbana y luminosa.',
    title: 'Recepción y área de espera',
  },
];

export default function UsosPosiblesGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const handleOpen = (index: number) => {
    setInitialIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="mt-6">
      <h4 className="text-base font-semibold text-tierra-900">Usos posibles</h4>
      <p className="mt-2 text-sm text-gray-600">
        Oficinas, estudios y espacios de trabajo que se adaptan al uso, al entorno y a la escala del proyecto.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {usosImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => handleOpen(index)}
            className="overflow-hidden rounded-xl border border-tierra-200 bg-white shadow-sm transition hover:shadow-md"
            aria-label={`Abrir ${image.title}`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={thumbnailSizes}
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
      <ImageCarouselModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={usosImages}
        initialIndex={initialIndex}
        eyebrow="USOS POSIBLES"
      />
    </div>
  );
}
