'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { modelosListos } from '@/data/modelosListos';

const dormitoriosTabs = [
  { value: 1, label: '1 dormitorio' },
  { value: 2, label: '2 dormitorios' },
  { value: 3, label: '3 dormitorios' },
] as const;

export default function ModelosListosPage() {
  const defaultModel = useMemo(
    () => modelosListos.find((modelo) => modelo.dormitorios === 2) ?? modelosListos[0],
    [],
  );
  const [selectedId, setSelectedId] = useState(defaultModel.id);

  const selectedModel = modelosListos.find((modelo) => modelo.id === selectedId) ?? defaultModel;
  const floorplan = selectedModel.images.find((image) => image.type === 'floorplan');
  const renders = selectedModel.images.filter((image) => image.type === 'render');

  return (
    <main className="bg-white">
      <section className="section-padding pt-20 md:pt-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-tierra-600">Modelos listos</p>
            <h1 className="mt-3 text-3xl font-semibold text-tierra-900 md:text-4xl">
              Explorá el modelo ideal según tu forma de habitar
            </h1>
            <p className="mt-4 text-base text-gray-700">
              Compará variantes con la misma mirada de diseño y elegí la distribución que mejor se adapte a tu día a día.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {dormitoriosTabs.map((tab) => {
              const isActive = selectedModel.dormitorios === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => {
                    const modelo = modelosListos.find((item) => item.dormitorios === tab.value);
                    if (modelo) {
                      setSelectedId(modelo.id);
                    }
                  }}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'border-tierra-700 bg-tierra-700 text-white'
                      : 'border-tierra-200 bg-white text-tierra-700 hover:border-tierra-400'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)]">
            <div>
              <div className="relative overflow-hidden rounded-3xl border border-tierra-200 bg-tierra-50">
                {floorplan ? (
                  <Image
                    src={floorplan.src}
                    alt={floorplan.alt}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-contain"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    priority
                  />
                ) : null}
                <span className="absolute left-4 top-4 rounded-full border border-tierra-200 bg-white/90 px-3 py-1 text-xs font-semibold text-tierra-700 shadow-sm">
                  {selectedModel.label}
                </span>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {selectedModel.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-tierra-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-tierra-800">Renders destacados</h2>
              <div className="grid gap-4">
                {renders.map((image) => (
                  <div key={image.src} className="overflow-hidden rounded-2xl border border-tierra-200 bg-white shadow-sm">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="h-auto w-full object-cover"
                      sizes="(min-width: 1024px) 35vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
