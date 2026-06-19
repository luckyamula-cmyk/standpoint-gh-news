import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-28 text-center">
      <div className="flex justify-center gap-1 mb-8">
        <span className="h-1.5 w-12 bg-[#CE1126] block rounded-full" />
        <span className="h-1.5 w-12 bg-[#FCD116] block rounded-full" />
        <span className="h-1.5 w-12 bg-[#006B3F] block rounded-full" />
      </div>
      <h1 className="text-8xl font-black text-[#0F172A] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-500 mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-10 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back to the news.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          href="/"
          className="bg-[#CE1126] text-white font-black px-8 py-3 text-xs uppercase tracking-widest hover:bg-red-700 transition-colors"
        >
          ← Back to Home
        </Link>
        <Link
          href="/search"
          className="bg-[#0F172A] text-white font-black px-8 py-3 text-xs uppercase tracking-widest hover:opacity-80 transition-opacity"
        >
          Search Stories
        </Link>
      </div>
    </div>
  );
}
