'use client';

import { useEffect, useState } from 'react';
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
      className={`fixed z-50 w-full u-ease ${
        isTransparent ? 'border-b border-white/10 bg-transparent' : 'u-glass'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className={`text-2xl font-bold ${isTransparent ? 'text-white' : 'text-tierra-700'}`}>
              HUELLA
            </div>
          </Link>

          <div className="hidden items-center space-x-8 lg:flex">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium u-ease ${
                  isTransparent ? 'text-white hover:text-tierra-200' : 'text-gray-700 hover:text-tierra-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/#contacto" className="u-btn-primary u-ease u-focus text-sm">
              Consultar
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="u-focus u-ease rounded-md p-1 lg:hidden"
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
        <div className="u-ease border-t border-tierra-200/80 bg-white/95 shadow-[var(--shadow-soft)] backdrop-blur-sm lg:hidden">
          <div className="container-custom space-y-3 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="u-ease block rounded-md py-2 text-gray-700 hover:text-tierra-600 focus-visible:outline-none focus-visible:text-tierra-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#contacto"
              className="u-btn-primary u-ease u-focus block text-center"
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
