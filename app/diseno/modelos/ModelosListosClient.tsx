'use client';

import { useState } from 'react';
import Image from 'next/image';
import { modelosListos } from '@/data/modelosListos';

const defaultModelId =
  modelosListos.find((modelo) => modelo.dormitorios === 2)?.id ?? modelosListos[0]?.id;

export default function ModelosListosClient() {
  const [activeId, setActiveId] = useState(() => defaultModelId);
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
              className={`u-ease u-focus rounded-full border px-4 py-2 text-sm font-semibold ${
                isActive
                  ? 'border-[#8b5738] bg-[#8b5738] text-[#fff8ef]'
                  : 'border-[#d0bea5] bg-[#fff9ef] text-[#7f4f31] hover:border-[#b29979]'
              }`}
            >
              {modelo.label}
            </button>
          );
        })}
      </div>

      {floorplan ? (
        <div className="u-card p-4">
          <div className="relative overflow-hidden rounded-2xl bg-[#f2e8da]">
            <div className="absolute left-3 top-3 z-10 rounded-full border border-[#d0bea5] bg-white/90 px-3 py-1 text-xs font-semibold text-[#7f4f31] shadow-sm">
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
              <p className="section-eyebrow">{activeModel.title}</p>
              <p className="text-xl font-semibold text-[#7f4f31]">{activeModel.label}</p>
            </div>
            <ul className="grid gap-2 text-sm text-[#5a6662]">
              {activeModel.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8b5738]" aria-hidden="true" />
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
            className="u-card u-ease relative overflow-hidden [contain-intrinsic-size:320px] [content-visibility:auto] hover:-translate-y-0.5 hover:border-[#bea788] hover:shadow-[var(--shadow-med)]"
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
