import type { Metadata } from 'next';
import ModelosListosClient from './ModelosListosClient';

export const metadata: Metadata = {
  title: 'HUELLA Diseño – Modelos listos',
};

export default function ModelosListosPage() {
  return (
    <main className="bg-white">
      <section className="section-padding pt-20 md:pt-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold text-tierra-900 md:text-4xl">Modelos listos</h1>
            <p className="mt-3 text-base text-gray-700">
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
