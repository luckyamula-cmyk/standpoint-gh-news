import Link from 'next/link';
import { Article, formatDate, getCategoryColor } from '@/data/articles';

interface Props {
  article: Article;
  size?: 'sm' | 'md' | 'lg';
  horizontal?: boolean;
}

export default function ArticleCard({ article, size = 'md', horizontal = false }: Props) {
  const categoryColor = getCategoryColor(article.categorySlug);
  const imageHeight = size === 'lg' ? 'h-52' : size === 'sm' ? 'h-36' : 'h-44';

  if (horizontal) {
    return (
      <div className="flex gap-3 bg-white border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group">
        <Link href={`/article/${article.slug}`} className="shrink-0">
          <div className="w-28 h-24 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>
        <div className="py-2 pr-3 flex flex-col justify-center min-w-0">
          <Link href={`/category/${article.categorySlug}`}>
            <span
              className="text-white text-xs font-bold px-2 py-0.5 uppercase tracking-wide inline-block mb-1.5"
              style={{ backgroundColor: categoryColor }}
            >
              {article.category}
            </span>
          </Link>
          <Link href={`/article/${article.slug}`}>
            <h3 className="font-bold text-sm text-[#0F172A] leading-tight hover:text-[#CE1126] transition-colors line-clamp-2">
              {article.title}
            </h3>
          </Link>
          <p className="text-xs text-gray-400 mt-1">{formatDate(article.publishedAt)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col group">
      <Link href={`/article/${article.slug}`}>
        <div className={`overflow-hidden ${imageHeight}`}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <Link href={`/category/${article.categorySlug}`}>
            <span
              className="text-white text-xs font-bold px-2 py-0.5 uppercase tracking-wide"
              style={{ backgroundColor: categoryColor }}
            >
              {article.category}
            </span>
          </Link>
          {article.breaking && (
            <span className="bg-[#CE1126] text-white text-xs font-bold px-2 py-0.5 uppercase">
              Breaking
            </span>
          )}
        </div>
        <Link href={`/article/${article.slug}`}>
          <h3
            className={`font-bold text-[#0F172A] leading-tight hover:text-[#CE1126] transition-colors mb-2 ${
              size === 'lg' ? 'text-lg' : 'text-sm md:text-base'
            }`}
          >
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm line-clamp-2 flex-1">{article.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-gray-400 mt-3 pt-3 border-t border-gray-100">
          <span className="font-semibold text-gray-600 truncate">{article.author}</span>
          <span>·</span>
          <time dateTime={article.publishedAt} className="shrink-0">{formatDate(article.publishedAt)}</time>
        </div>
      </div>
    </div>
  );
}
