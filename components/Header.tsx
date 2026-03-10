'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/constants';

const navItems = [
  { label: 'トップ', href: '/' },
  { label: 'プロフィール', href: '/about' },
  { label: 'サービス・料金', href: '/service' },
  { label: 'ブログ', href: '/blog' },
  { label: '予約', href: '/booking' },
  { label: 'お問い合わせ', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span
              className={`font-display text-lg lg:text-xl tracking-widest transition-colors ${
                isScrolled ? 'text-stone-800' : 'text-white'
              }`}
            >
              Maya Calendar
            </span>
            <span
              className={`text-xs tracking-wider transition-colors ${
                isScrolled ? 'text-amber-600' : 'text-amber-300'
              }`}
            >
              {SITE.shortName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wider transition-colors hover:text-amber-500 ${
                  isScrolled ? 'text-stone-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white text-sm px-5 py-2 rounded-full tracking-wider transition-colors"
            >
              無料相談
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="メニューを開く"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 transition-all ${
                  isScrolled ? 'bg-stone-800' : 'bg-white'
                } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all ${
                  isScrolled ? 'bg-stone-800' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all ${
                  isScrolled ? 'bg-stone-800' : 'bg-white'
                } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-stone-100">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-stone-700 text-sm tracking-wider py-2 border-b border-stone-100 hover:text-amber-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-amber-600 hover:bg-amber-700 text-white text-sm px-5 py-3 rounded-full tracking-wider transition-colors text-center mt-2"
            >
              無料相談はこちら
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
