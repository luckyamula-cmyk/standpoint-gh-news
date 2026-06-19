import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getArticleBySlug,
  getLatestArticles,
  formatDate,
  formatTime,
  getCategoryColor,
} from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found | Standpoint GH News' };
  return {
    title: `${article.title} | Standpoint GH News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      type: 'article',
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const categoryColor = getCategoryColor(article.categorySlug);
  const related = getLatestArticles(6)
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main article */}
        <article className="lg:col-span-2">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-5 flex items-center gap-2">
            <Link href="/" className="hover:text-[#CE1126] transition-colors">Home</Link>
            <span>/</span>
            <Link
              href={`/category/${article.categorySlug}`}
              className="hover:text-[#CE1126] transition-colors font-semibold"
              style={{ color: categoryColor }}
            >
              {article.category}
            </Link>
          </nav>

          {/* Badges */}
          <div className="flex gap-2 mb-4 flex-wrap">
            <Link href={`/category/${article.categorySlug}`}>
              <span
                className="text-white text-xs font-black px-3 py-1 uppercase tracking-widest"
                style={{ backgroundColor: categoryColor }}
              >
                {article.category}
              </span>
            </Link>
            {article.breaking && (
              <span className="bg-[#CE1126] text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
                Breaking
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight mb-4">
            {article.title}
          </h1>

          {/* Excerpt / standfirst */}
          <p
            className="text-lg text-gray-600 leading-relaxed mb-6 border-l-4 pl-4"
            style={{ borderColor: categoryColor }}
          >
            {article.excerpt}
          </p>

          {/* Byline */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 pb-5 mb-6 border-b border-gray-200">
            <div>
              <span className="font-black text-[#0F172A]">{article.author}</span>
              <span className="text-xs ml-2 text-gray-400 italic">{article.authorTitle}</span>
            </div>
            <span className="text-gray-300">·</span>
            <time dateTime={article.publishedAt} className="text-sm">
              {formatDate(article.publishedAt)} &middot; {formatTime(article.publishedAt)}
            </time>
            <span className="text-gray-300">·</span>
            <span className="text-sm">{article.readTime} min read</span>
          </div>

          {/* Hero image */}
          <figure className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-[420px] object-cover"
            />
            <figcaption className="text-xs text-gray-400 mt-2 italic px-1">
              Photo: Standpoint GH News
            </figcaption>
          </figure>

          {/* Article body */}
          <div
            className="text-gray-700 text-base leading-8
              [&>p]:mb-5
              [&>h2]:text-2xl [&>h2]:font-black [&>h2]:text-[#0F172A] [&>h2]:mt-10 [&>h2]:mb-3 [&>h2]:leading-tight
              [&>blockquote]:border-l-4 [&>blockquote]:border-[#CE1126] [&>blockquote]:pl-5 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-6
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:mb-1
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-5
              [&>em]:italic [&>strong]:font-bold [&>strong]:text-[#0F172A]"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-400 uppercase font-black tracking-widest mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 hover:bg-gray-200 transition-colors cursor-pointer">
                    #{tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-400 uppercase font-black tracking-widest mb-3">Share</p>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-xs font-bold px-4 py-2 hover:opacity-80 transition-opacity"
              >
                X / Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://standpointgh.com/article/${article.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white text-xs font-bold px-4 py-2 hover:opacity-80 transition-opacity"
              >
                Facebook
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${article.title} — https://standpointgh.com/article/${article.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white text-xs font-bold px-4 py-2 hover:opacity-80 transition-opacity"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside>
          <div className="sticky top-24">
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-4">
              More Stories
            </h3>
            <div className="flex flex-col gap-4">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} size="sm" />
              ))}
            </div>

            {/* Ad placeholder */}
            <div className="mt-8 bg-gray-100 border-2 border-dashed border-gray-300 h-64 flex items-center justify-center text-gray-400 text-sm text-center">
              <div>
                <p className="font-bold">Advertisement</p>
                <p className="text-xs mt-1">300×250</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
