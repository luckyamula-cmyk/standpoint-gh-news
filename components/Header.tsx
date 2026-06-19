'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/data/articles';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const today = new Date().toLocaleDateString('en-GH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top utility bar */}
      <div className="bg-[#0F172A] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-gray-400">{today}</span>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-[#FCD116] transition-colors">Twitter/X</a>
            <a href="#" className="hover:text-[#FCD116] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#FCD116] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#FCD116] transition-colors">YouTube</a>
          </div>
        </div>
      </div>

      {/* Logo bar */}
      <div className="bg-white border-b-4 border-[#CE1126] py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="block">
            <div className="flex flex-col leading-none">
              <span className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tighter uppercase">
                Standpoint GH
              </span>
              <span className="text-xs font-black text-[#CE1126] tracking-[0.3em] uppercase mt-0.5">
                News
              </span>
            </div>
          </Link>

          <div className="hidden md:flex flex-col items-end gap-1.5">
            <p className="text-xs text-gray-400 italic">Ghana&apos;s Voice. Your Standpoint.</p>
            <div className="flex gap-1">
              <span className="h-2.5 w-8 bg-[#CE1126] block rounded-sm" />
              <span className="h-2.5 w-8 bg-[#FCD116] block rounded-sm" />
              <span className="h-2.5 w-8 bg-[#006B3F] block rounded-sm" />
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#0F172A]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className={`w-5 h-0.5 bg-current transition-all mb-1 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 bg-current transition-all mb-1 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <ul className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center flex-wrap`}>
            <li>
              <Link
                href="/"
                className="block px-4 py-3 text-xs font-black text-white uppercase tracking-wider hover:bg-[#CE1126] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="block px-4 py-3 text-xs font-bold text-gray-300 uppercase tracking-wider hover:text-white hover:bg-[#CE1126] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
            <li className="md:ml-auto">
              <Link
                href="/search"
                className="flex items-center gap-1 px-4 py-3 text-xs font-bold text-gray-300 uppercase tracking-wider hover:text-[#FCD116] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
