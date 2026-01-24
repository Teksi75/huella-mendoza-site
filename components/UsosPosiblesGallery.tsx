'use client';

import { useState } from 'react';
import { ArrowRight, Images } from 'lucide-react';
import ImageCarouselModal from '@/components/ImageCarouselModal';

const usosImages = [
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
      <p className="text-sm font-semibold text-tierra-900">Usos posibles</p>
      <p className="mt-2 text-sm text-gray-600">
        Oficinas, estudios y espacios de trabajo que se adaptan al uso, al entorno y a la escala del proyecto.
      </p>
      <div className="mt-3 border-t border-black/5 pt-3">
        <button
          type="button"
          onClick={() => handleOpen(0)}
          aria-label="Abrir galería de usos posibles"
          className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-tierra-700 underline decoration-tierra-300 underline-offset-4 transition-colors duration-200 hover:text-tierra-900 hover:decoration-tierra-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tierra-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <Images className="h-4 w-4 text-muted-foreground/80" aria-hidden="true" />
          Ver galería
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-[2px]" aria-hidden="true" />
        </button>
      </div>
      <ImageCarouselModal
        key={isOpen ? `open-${initialIndex}` : 'closed'}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={usosImages}
        initialIndex={initialIndex}
        eyebrow="USOS POSIBLES"
        subtitle="Oficinas, estudios y espacios de trabajo que se adaptan al uso, al entorno y a la escala del proyecto."
      />
    </div>
  );
}
