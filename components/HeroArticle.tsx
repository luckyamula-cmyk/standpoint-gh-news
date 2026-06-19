import Link from 'next/link';
import { Article, formatDate, getCategoryColor } from '@/data/articles';

export default function HeroArticle({ article }: { article: Article }) {
  const categoryColor = getCategoryColor(article.categorySlug);

  return (
    <div className="relative h-[420px] md:h-[540px] overflow-hidden rounded-sm group">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-center gap-2 mb-3">
          <Link href={`/category/${article.categorySlug}`}>
            <span
              className="inline-block px-3 py-1 text-white text-xs font-black uppercase tracking-widest"
              style={{ backgroundColor: categoryColor }}
            >
              {article.category}
            </span>
          </Link>
          {article.breaking && (
            <span className="inline-block bg-white text-[#CE1126] text-xs font-black px-3 py-1 uppercase tracking-widest">
              Breaking
            </span>
          )}
        </div>

        <Link href={`/article/${article.slug}`}>
          <h1 className="text-white text-2xl md:text-3xl font-black leading-tight hover:text-[#FCD116] transition-colors mb-3 max-w-3xl">
            {article.title}
          </h1>
        </Link>

        <p className="text-gray-300 text-sm max-w-2xl mb-4 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <span className="font-bold text-gray-200">{article.author}</span>
          <span className="text-gray-600">·</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          <span className="text-gray-600">·</span>
          <span>{article.readTime} min read</span>
        </div>
      </div>
    </div>
  );
}
