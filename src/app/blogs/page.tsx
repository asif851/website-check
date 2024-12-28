import { articles } from "./blog-data";
import { ArticlesSection } from "./ArticlesSection";
import { FeaturedArticle } from "./FeaturedArticle";

export default function BlogHome() {
  const featuredArticle = articles.find((article) => article.featured);
  const categories = Array.from(
    new Set(articles.map((article) => article.category)) // set ensures categories are unique
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {featuredArticle && (
          <section className="mb-12">
            <FeaturedArticle article={featuredArticle} />
          </section>
        )}

        {categories.map((category) => {
          const filteredArticles = articles.filter(
            (article) => article.category === category
          );
          return (
            <ArticlesSection
              key={category}
              title={category}
              articles={filteredArticles}
            />
          );
        })}
      </main>
    </div>
  );
}
