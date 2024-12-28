import Image from "next/image";
import Link from "next/link";
import { type Article } from "./blog-data";

interface FeaturedArticleProps {
  readonly article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-100">
      <Image
        src={article.image}
        alt={article.title}
        fill
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
        <h2 className="mb-2 text-3xl font-bold">{article.title}</h2>
        <p className="mb-4 text-gray-200">{article.summary}</p>
        <Link
          href={`/blogs/${article.id}`}
          className="text-blue-400 hover:text-blue-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
