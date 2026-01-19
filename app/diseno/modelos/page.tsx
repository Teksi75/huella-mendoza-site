'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { modelosListos } from '@/data/modelosListos';

const dormitoriosOrder = [1, 2, 3] as const;

export default function DisenoModelosPage() {
  const [activeDormitorios, setActiveDormitorios] = useState<1 | 2 | 3>(2);

  const activeModel = useMemo(
    () => modelosListos.find((modelo) => modelo.dormitorios === activeDormitorios) ?? modelosListos[0],
    [activeDormitorios],
  );

  const floorplan = activeModel.images.find((image) => image.type === 'floorplan');
  const renders = activeModel.images.filter((image) => image.type === 'render');

  return (
    <main className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-tierra-600">Modelos listos</p>
          <h1 className="mt-3 text-3xl font-semibold text-tierra-900 md:text-4xl">
            Elegí el modelo ideal para tu ritmo de vida
          </h1>
          <p className="mt-4 text-base text-gray-700">
            Compará variantes y tomá la decisión con calma. Cada modelo combina un diseño probado con
            espacios listos para habitar.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {dormitoriosOrder.map((dormitorios) => {
            const modelo = modelosListos.find((item) => item.dormitorios === dormitorios);
            if (!modelo) {
              return null;
            }
            const isActive = dormitorios === activeDormitorios;
            return (
              <button
                key={modelo.id}
                type="button"
                onClick={() => setActiveDormitorios(dormitorios)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition md:text-base ${
                  isActive
                    ? 'border-tierra-700 bg-tierra-100 text-tierra-900'
                    : 'border-tierra-200 text-tierra-700 hover:border-tierra-400 hover:text-tierra-900'
                }`}
                aria-pressed={isActive}
              >
                {modelo.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-tierra-200 bg-tierra-50 p-4 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
                {floorplan && (
                  <Image
                    src={floorplan.src}
                    alt={floorplan.alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                )}
                <span className="absolute left-3 top-3 rounded-full border border-tierra-200 bg-white/90 px-3 py-1 text-xs font-semibold text-tierra-700 shadow-sm">
                  {activeModel.label}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-tierra-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-tierra-900">{activeModel.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {activeModel.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-tierra-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-tierra-900">Renders del modelo</h3>
            <p className="mt-2 text-sm text-gray-600">
              Interior y exterior para visualizar ambientes y relación con el paisaje.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {renders.map((render) => (
                <div
                  key={render.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-tierra-200 bg-white"
                >
                  <Image
                    src={render.src}
                    alt={render.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
