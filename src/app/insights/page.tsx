import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function InsightsPage() {
  const articles = getAllArticles();

  return (
    <main className="bg-[#f5f5f2] text-[#111111]">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-8 py-20 sm:px-12 lg:px-20 lg:py-24">
          <p className="text-[14px] uppercase tracking-[0.24em] text-[#0a4ea3]">
            Insights
          </p>
          <h1 className="mt-4 text-4xl font-light leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[68px]">
            Research, perspectives, and applied thinking.
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-8 py-14 sm:px-12 lg:px-20 lg:py-16">
          {articles.length === 0 ? (
            <div className="border border-black/10 bg-white px-8 py-10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#0a4ea3]">
                No articles yet
              </p>
              <p className="mt-3 text-sm leading-7 text-black/65 sm:text-base">
                No insights have been published yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group border border-black/10 bg-white px-8 py-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#0a4ea3]">
                    <span>{article.date}</span>
                    <span className="text-black/30">•</span>
                    <span>{article.author}</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-light tracking-[-0.02em]">
                    {article.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
                    {article.excerpt}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[#0a4ea3] transition-transform duration-300 group-hover:translate-x-1">
                    Read more
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}