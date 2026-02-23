'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  variant?: 'hero' | 'solid';
};

export default function Navbar({ variant }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoCompact, setIsLogoCompact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = pathname === '/';
  const navbarVariant = variant ?? (isHome ? 'hero' : 'solid');
  const isHero = navbarVariant === 'hero';
  const isTransparent = isHome && !isScrolled;
  const isHeroTop = isHero && !isLogoCompact;
  const logoClassTop = 'text-white';
  const logoClassScrolled = isHero && isTransparent ? 'text-white/92' : 'text-[#2f2a23]';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsLogoCompact(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Por qué Huella', href: '/#por-que-huella' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <nav
      className={`fixed z-50 w-full u-ease ${
        isHero && isTransparent ? 'border-b border-white/10 bg-transparent' : 'u-glass'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between md:h-[5.5rem]">
          <Link href="/" className="u-focus rounded-md px-1 py-0.5">
            <div
              className={`brand-wordmark rounded-full px-2.5 py-1 transition-all duration-300 ease-out ${
                isHeroTop
                  ? 'border border-white/35 text-base md:text-lg'
                  : 'text-sm md:text-base'
              } ${isHeroTop ? logoClassTop : logoClassScrolled} ${
                !isHeroTop && isHero && isTransparent ? 'border border-white/20' : ''
              }`}
            >
              HUELLA
            </div>
          </Link>

          <div className="hidden items-center space-x-8 lg:flex">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`u-focus rounded-md px-1 py-1 text-xs font-medium tracking-[0.04em] u-ease md:text-sm ${
                  isHero && isTransparent
                    ? 'text-white/92 hover:text-white'
                    : 'text-[#4b443a] hover:text-[#7f4f31]'
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
              <X className={isHero && isTransparent ? 'text-white' : 'text-[#332d25]'} />
            ) : (
              <Menu className={isHero && isTransparent ? 'text-white' : 'text-[#332d25]'} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="u-card u-ease mx-4 mb-3 border-t border-[#d9ccb8] bg-[#fff9f0]/95 p-0 shadow-[var(--shadow-med)] backdrop-blur-sm lg:hidden">
          <div className="container-custom space-y-3 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="u-focus u-ease block rounded-md py-2 text-sm font-semibold uppercase tracking-[0.1em] text-[#4b443a] hover:text-[#7f4f31] focus-visible:text-[#7f4f31]"
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
