import type { Metadata } from 'next';
import ModelosListosClient from './ModelosListosClient';

export const metadata: Metadata = {
  title: 'HUELLA Diseño – Modelos listos',
};

export default function ModelosListosPage() {
  return (
    <main className="bg-[#f8f2e8]">
      <section className="section-padding pt-20 md:pt-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Diseño</p>
            <h1 className="mt-2 text-4xl md:text-5xl">Modelos listos</h1>
            <p className="mt-3 text-base text-[#5a6662]">
              Elegí la variante que mejor se ajusta a tu forma de habitar. Compará plantas y explorá
              distintas atmósferas para tomar una decisión con tranquilidad.
            </p>
          </div>
          <ModelosListosClient />
        </div>
      </section>
    </main>
  );
}
