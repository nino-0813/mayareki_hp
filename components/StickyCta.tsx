'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-4 sm:right-6 z-40 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <Link
        href="/contact"
        className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all tracking-wider"
      >
        <span>✨</span>
        <span>無料相談する</span>
      </Link>
    </div>
  );
}
