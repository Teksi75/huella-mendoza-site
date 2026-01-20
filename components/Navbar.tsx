'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Por qué HUELLA', href: '/#por-que-huella' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent border-b border-white/10'
          : 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-tierra-700">HUELLA</div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isTransparent
                    ? 'text-white hover:text-tierra-200'
                    : 'text-gray-700 hover:text-tierra-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#contacto"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                isTransparent
                  ? 'bg-white text-tierra-700 hover:bg-white/90'
                  : 'bg-tierra-600 text-white hover:bg-tierra-700'
              }`}
            >
              Consultar
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={isTransparent ? 'text-white' : 'text-gray-800'} />
            ) : (
              <Menu className={isTransparent ? 'text-white' : 'text-gray-800'} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container-custom py-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-tierra-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#contacto"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-tierra-600 px-4 py-2 text-sm font-semibold text-white hover:bg-tierra-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Consultar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
