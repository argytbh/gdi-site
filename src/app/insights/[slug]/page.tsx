import { notFound } from "next/navigation";
import { marked } from "marked";
import { getArticleBySlug } from "@/lib/articles";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const html = marked(article.content);

  return (
    <main className="bg-[#f5f5f2] text-[#111111]">
      <article className="mx-auto max-w-[900px] px-8 py-20 sm:px-12 lg:px-20 lg:py-24">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#0a4ea3]">
          <span>{article.date}</span>
          <span className="text-black/30">•</span>
          <span>{article.author}</span>
        </div>

        <h1 className="mt-4 text-4xl font-light leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[64px]">
          {article.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-black/70">
          {article.excerpt}
        </p>

        <div
          className="prose prose-neutral mt-12 max-w-none border-t border-black/10 pt-8"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}