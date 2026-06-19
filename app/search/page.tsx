'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { searchArticles, Article, categories } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [results, setResults] = useState<Article[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const q = searchParams.get('q') ?? '';
    setQuery(q);
    if (q.trim()) {
      setResults(searchArticles(q));
      setHasSearched(true);
    } else {
      setResults([]);
      setHasSearched(false);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const currentQuery = searchParams.get('q') ?? '';

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-6">Search</h1>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex gap-3 mb-10 max-w-2xl">
        <div className="flex-1 relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, topics, categories..."
            className="w-full border-2 border-gray-200 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#CE1126] transition-colors"
          />
        </div>
        <button
          type="submit"
          className="bg-[#CE1126] text-white font-black px-6 py-3 text-xs uppercase tracking-widest hover:bg-red-700 transition-colors whitespace-nowrap"
        >
          Search
        </button>
      </form>

      {/* Results count */}
      {hasSearched && (
        <p className="text-sm text-gray-500 mb-6">
          {results.length === 0
            ? `No results found for "${currentQuery}"`
            : `${results.length} result${results.length !== 1 ? 's' : ''} for "${currentQuery}"`}
        </p>
      )}

      {/* Results grid */}
      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {results.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {hasSearched && results.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-lg font-semibold text-gray-500">No stories matched your search</p>
          <p className="text-sm mt-2">Try different keywords or browse our categories below</p>
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="text-white text-xs font-bold px-4 py-2 hover:opacity-80 transition-opacity"
                style={{ backgroundColor: cat.color }}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Initial state — no search yet */}
      {!hasSearched && (
        <div>
          <div className="text-center py-10 text-gray-400 mb-10">
            <p className="text-5xl mb-4">📰</p>
            <p className="text-lg font-semibold text-gray-500">Search Ghana&apos;s top news source</p>
            <p className="text-sm mt-2">Try: &ldquo;Parliament&rdquo;, &ldquo;Black Stars&rdquo;, &ldquo;IMF&rdquo;, &ldquo;Accra&rdquo;, &ldquo;Business&rdquo;</p>
          </div>

          <div>
            <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Browse by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="text-white text-sm font-black px-4 py-4 text-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: cat.color }}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-10 text-center text-gray-400">
          <p className="text-lg">Loading search...</p>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
