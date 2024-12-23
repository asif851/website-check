import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "../blog-data";

interface PageProps {
  readonly params: {
    id: string;
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles.find((article) => article.id === params.id);

  if (!article) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative mb-8 aspect-video w-full h-[250px] overflow-hidden rounded-lg">
        <Image
          src={article.image}
          alt={`Cover image for ${article.title}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <article className="container mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="rounded-full bg-gray-200 px-3 py-1">
              {article.category}
            </span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
