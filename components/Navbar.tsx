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
  const isTop = isHome && !isScrolled;
  const logoClassTop = 'text-white';
  const logoClassScrolled = 'text-tierra-700';
  const menuClassTop = 'text-white hover:text-tierra-200';
  const menuClassScrolled = 'text-gray-700 hover:text-tierra-600';

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
        isTop ? 'border-b border-white/10 bg-transparent' : 'u-glass'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className={`text-2xl font-bold u-ease ${isTop ? logoClassTop : logoClassScrolled}`}>
              HUELLA
            </div>
          </Link>

          <div className="hidden items-center space-x-8 lg:flex">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium u-ease ${
                  isTop ? menuClassTop : menuClassScrolled
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
              <X className={isTop ? 'text-white' : 'text-gray-800'} />
            ) : (
              <Menu className={isTop ? 'text-white' : 'text-gray-800'} />
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
