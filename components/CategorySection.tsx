import Link from 'next/link';
import { Article, getCategoryColor } from '@/data/articles';
import ArticleCard from './ArticleCard';

interface Props {
  name: string;
  slug: string;
  articles: Article[];
}

export default function CategorySection({ name, slug, articles }: Props) {
  if (articles.length === 0) return null;

  const color = getCategoryColor(slug);
  const [lead, ...rest] = articles;

  return (
    <section className="py-8 border-t border-gray-200">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-7 rounded-sm" style={{ backgroundColor: color }} />
          <h2 className="text-xl font-black text-[#0F172A] uppercase tracking-tight">{name}</h2>
        </div>
        <Link
          href={`/category/${slug}`}
          className="text-xs font-black uppercase tracking-widest hover:opacity-80 transition-opacity flex items-center gap-1"
          style={{ color }}
        >
          See All
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Articles grid: 1 large lead + up to 2 secondary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <ArticleCard article={lead} size="lg" />
        </div>
        {rest.length > 0 && (
          <div className="md:col-span-2 flex flex-col gap-4">
            {rest.slice(0, 2).map((article) => (
              <ArticleCard key={article.id} article={article} horizontal />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
