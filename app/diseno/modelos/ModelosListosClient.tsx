'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { modelosListos } from '@/data/modelosListos';

export default function ModelosListosClient() {
  const defaultModelId = useMemo(
    () => modelosListos.find((modelo) => modelo.dormitorios === 2)?.id ?? modelosListos[0]?.id,
    []
  );
  const [activeId, setActiveId] = useState(defaultModelId);
  const activeModel = modelosListos.find((modelo) => modelo.id === activeId) ?? modelosListos[0];
  const floorplan = activeModel.images.find((image) => image.type === 'floorplan');
  const renderImages = activeModel.images.filter((image) => image.type === 'render');

  return (
    <div className="mt-8 space-y-8">
      <div className="flex flex-wrap gap-3">
        {modelosListos.map((modelo) => {
          const isActive = modelo.id === activeId;
          return (
            <button
              key={modelo.id}
              type="button"
              onClick={() => setActiveId(modelo.id)}
              className={`u-focus u-ease rounded-full border px-4 py-2 text-sm font-semibold ${
                isActive
                  ? 'border-tierra-600 bg-tierra-600 text-white'
                  : 'border-tierra-200 bg-white text-tierra-700 hover:border-tierra-400'
              }`}
            >
              {modelo.label}
            </button>
          );
        })}
      </div>

      {floorplan ? (
        <div className="u-card p-4">
          <div className="relative overflow-hidden rounded-2xl bg-tierra-50">
            <div className="absolute left-3 top-3 z-10 rounded-full border border-tierra-200 bg-white/90 px-3 py-1 text-xs font-semibold text-tierra-700 shadow-sm">
              {activeModel.label}
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={floorplan.src}
                alt={floorplan.alt}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority
              />
            </div>
          </div>
          <div className="mt-5 space-y-3">
            <div>
              <p className="text-sm uppercase tracking-widest text-tierra-600">{activeModel.title}</p>
              <p className="text-xl font-semibold text-tierra-900">{activeModel.label}</p>
            </div>
            <ul className="grid gap-2 text-sm text-gray-600">
              {activeModel.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-tierra-500" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {renderImages.map((image) => (
          <div
            key={image.src}
            className="u-card relative overflow-hidden"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
