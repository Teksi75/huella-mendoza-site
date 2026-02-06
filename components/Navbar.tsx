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
      className={`fixed z-50 w-full u-ease ${
        isTransparent ? 'border-b border-white/15 bg-transparent' : 'u-glass'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-tierra-700">HUELLA</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`u-focus u-ease rounded-full px-1.5 py-1 text-sm font-medium ${
                  isTransparent
                    ? 'text-white hover:text-tierra-200'
                    : 'text-gray-700 hover:text-tierra-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/#contacto" className="u-btn-primary u-ease text-sm">
              Consultar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`u-focus u-ease rounded-full p-1.5 ${
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-gray-800 hover:bg-gray-100'
            }`}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="u-ease u-glass lg:hidden border-t border-gray-200/70">
          <div className="container-custom space-y-3 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="u-focus u-ease block rounded-lg px-2 py-2 text-gray-700 hover:bg-tierra-50 hover:text-tierra-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#contacto"
              className="u-btn-primary u-ease block text-center"
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
