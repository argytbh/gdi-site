import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
};

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"));

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title ?? "Untitled article",
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      content,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getLatestArticles(limit = 3): Article[] {
  return getAllArticles().slice(0, limit);
}

export function getArticleBySlug(slug: string): Article | null {
  const articles = getAllArticles();
  return articles.find((article) => article.slug === slug) ?? null;
}