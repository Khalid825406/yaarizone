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

  useEffect(() => {
    const handleEsc = (e: { key: string }) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEsc);

    // Prevent body scroll; use fixed to avoid iOS bounce-scroll layout shift
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isMobileMenuOpen]);

  // Auto-close when resizing past md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* ── NAVBAR BAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'navbar-glass py-3' : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-[114px]">
          <div className="flex items-center justify-between h-11 sm:h-auto">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-blue flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-base sm:text-lg">Y</span>
                <div className="absolute inset-0 bg-gradient-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">
                Yaari <span className="gradient-text">Zone</span>
              </span>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="link-hover text-white/80 hover:text-white font-medium transition-colors duration-300 py-2 text-sm lg:text-base"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#download"
                className="btn-gradient-blue px-5 lg:px-6 py-2 lg:py-2.5 text-sm whitespace-nowrap"
              >
                Download App
              </a>
            </div>

            {/* HAMBURGER BUTTON */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/20 active:scale-95"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`absolute transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
                }`}
              >
                <X className="w-5 h-5 text-white" />
              </span>
              <span
                className={`absolute transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 -rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`}
              >
                <Menu className="w-5 h-5 text-white" />
              </span>
            </button>

          </div>
        </div>
      </nav>

      {/* ── BACKDROP OVERLAY ── */}
      <div
        onClick={closeMobileMenu}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* ── SIDE DRAWER (mobile menu) ── */}
      {/*
        Slides in from the right.
        Width: 80% on small phones, capped at 300px so it never covers full screen.
      */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 bottom-0 z-50
          w-4/5 max-w-[300px]
          bg-black/85 backdrop-blur-2xl
          border-l border-white/10
          flex flex-col
          transition-transform duration-300 ease-in-out
          md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-xl bg-gradient-blue flex items-center justify-center overflow-hidden">
              <span className="text-white font-bold text-sm">Y</span>
            </div>
            <span className="text-base font-bold text-white">
              Yaari <span className="gradient-text">Zone</span>
            </span>
          </Link>
          <button
            onClick={closeMobileMenu}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-3 py-5 flex-1 overflow-y-auto">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className={`text-base sm:text-lg font-semibold text-white/70 hover:text-white
                px-4 py-3 rounded-xl hover:bg-white/10
                transition-all duration-200 active:scale-[0.98]
                ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
              `}
              style={{
                transitionDelay: isMobileMenuOpen ? `${80 + index * 55}ms` : '0ms',
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Download CTA pinned at bottom */}
        <div className="px-5 pb-8 pt-3 border-t border-white/10">
          <a
            href="#download"
            onClick={closeMobileMenu}
            className="btn-gradient-blue w-full text-center py-3 text-sm sm:text-base font-semibold block rounded-xl"
          >
            Download App
          </a>
        </div>
      </div>
    </>
  );
} 