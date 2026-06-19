import { notFound } from 'next/navigation';
import { categories, getArticlesByCategory, getCategoryColor } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: 'Category Not Found | Standpoint GH News' };
  return {
    title: `${category.name} News | Standpoint GH News`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(slug);
  const color = getCategoryColor(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Category hero header */}
      <div className="mb-10 pb-6 border-b-4" style={{ borderColor: color }}>
        <span
          className="text-white text-xs font-black px-3 py-1 uppercase tracking-widest inline-block mb-4"
          style={{ backgroundColor: color }}
        >
          {category.name}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight">
          {category.name}
        </h1>
        <p className="text-gray-500 mt-3 text-lg">{category.description}</p>
        <p className="text-sm text-gray-400 mt-2">
          {articles.length} {articles.length === 1 ? 'story' : 'stories'}
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="py-24 text-center text-gray-400">
          <p className="text-5xl mb-4">📰</p>
          <p className="text-lg font-semibold">No stories yet in this category</p>
          <p className="text-sm mt-2">Check back soon — our journalists are on it.</p>
        </div>
      ) : (
        <>
          {/* Lead article — full width */}
          <div className="mb-8">
            <ArticleCard article={articles[0]} size="lg" />
          </div>

          {/* Rest in grid */}
          {articles.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.slice(1).map((article) => (
                <ArticleCard key={article.id} article={article} size="md" />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
