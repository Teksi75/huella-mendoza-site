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
      <p className="text-sm font-semibold tracking-[0.04em] text-[#2f2a23]">Usos posibles</p>
      <p className="mt-2 text-sm text-[#5c6662]">
        Oficinas, estudios y espacios de trabajo que se adaptan al uso, al entorno y a la escala del proyecto.
      </p>
      <div className="mt-3 border-t border-[#dccfb9] pt-3">
        <button
          type="button"
          onClick={() => handleOpen(0)}
          aria-label="Abrir galería de usos posibles"
          className="group u-btn-secondary u-ease u-focus inline-flex items-center gap-2 text-sm"
        >
          <Images className="h-4 w-4 text-[#75563f]" aria-hidden="true" />
          Ver galería
          <ArrowRight className="h-4 w-4 text-[#75563f] transition-transform duration-200 group-hover:translate-x-[2px]" aria-hidden="true" />
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
