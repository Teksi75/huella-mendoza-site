'use client';

import { ArrowRight, Mountain, Home as HomeIcon, Compass } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
            alt="Montañas de Potrerillos"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center text-white px-6 max-w-5xl">
          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
            HUELLA
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Diseñamos espacios que dialogan con el territorio. <br />
            Experiencias que se integran al paisaje de la montaña.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/base" className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
              Soluciones habitacionales
              <ArrowRight size={20} />
            </Link>
            <Link href="/refugios" className="btn-secondary text-lg px-8 py-4 flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              Experiencia turística
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Más secciones vendrán después, pero con esto ya ves el hero */}
    </main>
  );
}