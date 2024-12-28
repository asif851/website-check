"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { type Article } from "./blog-data";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "./ArticleCard";

interface ArticlesSectionProps {
  readonly title: string;
  readonly articles: Article[];
}

export function ArticlesSection({ title, articles }: ArticlesSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Show More <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, isExpanded ? undefined : 3).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
