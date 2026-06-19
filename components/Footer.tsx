import Link from 'next/link';
import { categories } from '@/data/articles';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-gray-400 mt-16">
      {/* Ghana flag stripe */}
      <div className="flex h-1">
        <div className="flex-1 bg-[#CE1126]" />
        <div className="flex-1 bg-[#FCD116]" />
        <div className="flex-1 bg-[#006B3F]" />
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-black text-white tracking-tight">Standpoint GH</h2>
              <span className="text-[#CE1126] text-xs font-black tracking-[0.3em] uppercase">News</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Ghana&apos;s premier digital news platform. Delivering accurate, timely, and impartial journalism since 2024.
            </p>
            <p className="text-xs text-[#FCD116] italic">Ghana&apos;s Voice. Your Standpoint.</p>
          </div>

          {/* Categories col 1 */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-4 border-b border-[#CE1126] pb-2">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.slice(0, 4).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm hover:text-[#FCD116] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories col 2 */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-4 border-b border-[#CE1126] pb-2">
              More
            </h3>
            <ul className="space-y-2">
              {categories.slice(4).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm hover:text-[#FCD116] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-4 border-b border-[#CE1126] pb-2">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[#FCD116] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#FCD116] transition-colors">Contact Us</Link></li>
              <li><Link href="/search" className="hover:text-[#FCD116] transition-colors">Search</Link></li>
              <li><a href="#newsletter" className="hover:text-[#FCD116] transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-[#FCD116] transition-colors">Advertise</a></li>
              <li><a href="#" className="hover:text-[#FCD116] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#FCD116] transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-gray-600 text-xs py-4 px-4 text-center">
        © {currentYear} Standpoint GH News. All rights reserved. | Accra, Ghana
        <span className="mx-3">·</span>
        Designed and built in Ghana
      </div>
    </footer>
  );
}
