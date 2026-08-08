// src/tutorials/tutorialsData.ts
import type { Tutorial } from "./types";
import type { Article } from "../types";
import { parseFrontmatter } from "../articles/articlesData";

// Load all markdown files under src/tutorials/markdown
const markdownModules = import.meta.glob<{ default: string }>("./markdown/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function calculateReadingTime(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
}

export const tutorials: Tutorial[] = Object.entries(markdownModules).map(([path, rawContent]) => {
  const rawString = typeof rawContent === "string" ? rawContent : (rawContent as any)?.default || "";
  const { data, content } = parseFrontmatter(rawString);
  const slug = (data.slug as string) ?? path.replace(/^\.\/markdown\//, "").replace(/\.md$/i, "");
  const readingTime = data.readingTime ? Number(data.readingTime) : calculateReadingTime(content);

  const articleBase: Article = {
    title: (data.title as string) || slug,
    slug,
    excerpt: (data.excerpt as string) || "",
    date: (data.date as string) || new Date().toISOString().split("T")[0],
    category: (data.category as string) || "General",
    tags: Array.isArray(data.tags) ? data.tags : [],
    featuredImage: data.featuredImage as string | undefined,
    author: (data.author as string) ?? "Dark Web Technologies Editorial Team",
    readingTime,
    relatedProject: data.relatedProject as string | undefined,
    sources: Array.isArray(data.sources) ? data.sources : [],
    content: content || "",
  };

  const tutorial: Tutorial = {
    ...articleBase,
    difficulty: (data.difficulty as "Beginner" | "Intermediate" | "Advanced") || "Intermediate",
    technologies: Array.isArray(data.technologies) ? data.technologies : [],
    prerequisites: Array.isArray(data.prerequisites) ? data.prerequisites : [],
    relatedTutorialSlugs: Array.isArray(data.relatedTutorialSlugs) ? data.relatedTutorialSlugs : [],
    description: (data.description as string) || articleBase.excerpt,
  };
  return tutorial;
});

export const getTutorialBySlug = (slug: string): Tutorial | undefined =>
  tutorials.find((t) => t.slug === slug);
