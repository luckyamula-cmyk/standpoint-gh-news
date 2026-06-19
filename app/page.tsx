import BreakingNewsTicker from "@/components/BreakingNewsTicker";
import HeroArticle from "@/components/HeroArticle";
import ArticleCard from "@/components/ArticleCard";
import CategorySection from "@/components/CategorySection";
import NewsletterSignup from "@/components/NewsletterSignup";
import {
  getFeaturedArticles,
  getLatestArticles,
  getArticlesByCategory,
} from "@/data/articles";

export default function HomePage() {
  const featured = getFeaturedArticles();
  const latest = getLatestArticles(8);

  const heroArticle = featured.find((a) => a.breaking) ?? featured[0];
  const sidebarArticles = featured
    .filter((a) => a.id !== heroArticle?.id)
    .slice(0, 3);

  const politicsArticles = getArticlesByCategory("politics");
  const businessArticles = getArticlesByCategory("business");
  const sportsArticles = getArticlesByCategory("sports");
  const entertainmentArticles = getArticlesByCategory("entertainment");
  const technologyArticles = getArticlesByCategory("technology");

  return (
    <>
      <BreakingNewsTicker />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Hero + Top Stories sidebar */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          <div className="lg:col-span-2">
            {heroArticle && <HeroArticle article={heroArticle} />}
          </div>
          <div className="flex flex-col">
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-3">
              Top Stories
            </h2>
            <div className="flex flex-col gap-3">
              {sidebarArticles.map((article) => (
                <ArticleCard key={article.id} article={article} size="sm" />
              ))}
            </div>
          </div>
        </section>

        {/* Ghana flag divider */}
        <div className="flex gap-0.5 mb-10">
          <div className="h-0.5 flex-1 bg-[#CE1126]" />
          <div className="h-0.5 flex-1 bg-[#FCD116]" />
          <div className="h-0.5 flex-1 bg-[#006B3F]" />
        </div>

        {/* Latest News */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-[#CE1126] rounded-sm" />
            <h2 className="text-xl font-black text-[#0F172A] uppercase tracking-tight">
              Latest News
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {latest.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <NewsletterSignup />

        <CategorySection name="Politics" slug="politics" articles={politicsArticles} />
        <CategorySection name="Business" slug="business" articles={businessArticles} />
        <CategorySection name="Sports" slug="sports" articles={sportsArticles} />
        <CategorySection name="Entertainment" slug="entertainment" articles={entertainmentArticles} />
        <CategorySection name="Technology" slug="technology" articles={technologyArticles} />
      </div>
    </>
  );
}
