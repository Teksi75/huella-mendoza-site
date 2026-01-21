'use client';

import Image from 'next/image';
import { useState } from 'react';

const usosPosibles = [
  {
    src: '/media/huella/diseno/usos/Oficina_concept_1.png',
    title: 'Espacio de trabajo modular',
    alt: 'Espacio de trabajo modular con estaciones flexibles y luz natural.',
  },
  {
    src: '/media/huella/diseno/usos/Oficina_concept_2.png',
    title: 'Recepción y área de espera',
    alt: 'Recepción con área de espera y mobiliario cálido para visitas.',
  },
];

export function PersonalizadosCard() {
  const [isUsosOpen, setIsUsosOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl">Proyectos personalizados</h3>
      <p className="mt-3 text-sm text-gray-600">
        Diseñamos a partir del lugar y de tu forma de usar el espacio. No es “premium” por defecto:
        es a medida. Sumamos criterio arquitectónico, decisiones claras y acompañamiento para
        resolver una situación específica.
      </p>
      <p className="mt-4 text-xs uppercase tracking-widest text-tierra-600">Proceso</p>
      <p className="mt-2 text-sm text-gray-600">Relevamiento - Propuesta - Desarrollo ejecutivo</p>
      <button
        type="button"
        onClick={() => setIsUsosOpen((prev) => !prev)}
        className="mt-5 inline-flex items-center text-sm font-semibold text-tierra-700 hover:text-tierra-900"
        aria-expanded={isUsosOpen}
      >
        {isUsosOpen ? 'Ver menos' : 'Ver más'}
      </button>
      <div
        className={`transition-all duration-300 ease-out overflow-hidden ${
          isUsosOpen ? 'mt-5 max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-black/5 pt-5">
          <h4 className="text-base font-semibold text-tierra-900">Usos posibles</h4>
          <p className="mt-2 text-sm text-gray-600">
            Oficinas, estudios y espacios de trabajo que se adaptan al uso, al entorno y a la escala
            del proyecto.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {usosPosibles.map((item) => (
              <div key={item.src} className="space-y-2">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-tierra-700">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
