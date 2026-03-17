'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Terms', href: '/terms' },
  { name: 'Privacy', href: '/privacy' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'navbar-glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-blue flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-lg">Y</span>
                <div className="absolute inset-0 bg-gradient-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold text-white">
                Yaari <span className="gradient-text">Zone</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="link-hover text-white/80 hover:text-white font-medium transition-colors duration-300 py-2"
                >
                  {link.name}
                </Link>
              ))}
              <a href="#download" className="btn-gradient-blue px-6 py-2.5 text-sm">
                Download App
              </a>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/20"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-menu md:hidden ${
          isMobileMenuOpen ? 'mobile-menu-visible' : 'mobile-menu-hidden'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className="text-3xl font-semibold text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#download"
            onClick={closeMobileMenu}
            className="btn-gradient-blue mt-4 text-lg px-10 py-4"
          >
            Download App
          </a>
        </div>
      </div>
    </>
  );
}
