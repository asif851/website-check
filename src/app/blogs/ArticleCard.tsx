import Image from "next/image";
import Link from "next/link";
import { type Article } from "./blog-data";

interface ArticleCardProps {
  readonly article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{article.title}</h3>
        <p className="mb-4 text-sm text-gray-600">{article.summary}</p>
        <Link
          href={`/blogs/${article.id}`}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
