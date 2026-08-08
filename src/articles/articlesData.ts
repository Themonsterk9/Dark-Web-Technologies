// src/articles/articlesData.ts
import type { Article } from "../types";

// Import all markdown files in this folder as raw text strings
const markdownModules = import.meta.glob<{ default: string }>("./*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export function parseFrontmatter(raw: string): { data: Record<string, any>; content: string } {
  if (!raw || typeof raw !== "string") {
    return { data: {}, content: "" };
  }

  const normalized = raw.replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: normalized };
  }

  const yamlText = match[1];
  const content = match[2];
  const data: Record<string, any> = {};

  const lines = yamlText.split("\n");
  let currentKey: string | null = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    // Handle YAML block list item: e.g. "  - https://..."
    if (trimmed.startsWith("- ") && currentKey) {
      const itemVal = trimmed.slice(2).trim().replace(/^["']|["']$/g, "");
      if (!Array.isArray(data[currentKey])) {
        data[currentKey] = [];
      }
      data[currentKey].push(itemVal);
      continue;
    }

    const colonIdx = line.indexOf(":");
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      let valStr = line.slice(colonIdx + 1).trim();
      currentKey = key;

      if (!valStr) {
        data[key] = [];
      } else if (valStr.startsWith("[") && valStr.endsWith("]")) {
        try {
          const jsonStr = valStr.replace(/'/g, '"');
          data[key] = JSON.parse(jsonStr);
        } catch {
          data[key] = valStr
            .slice(1, -1)
            .split(",")
            .map((s) => s.trim().replace(/^["']|["']$/g, ""))
            .filter(Boolean);
        }
      } else {
        valStr = valStr.replace(/^["']|["']$/g, "");
        data[key] = valStr;
      }
    }
  }

  return { data, content };
}

function calculateReadingTime(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200); // average 200 wpm
  return Math.max(1, minutes);
}

export const articles: Article[] = Object.entries(markdownModules).map(([path, rawContent]) => {
  const rawString = typeof rawContent === "string" ? rawContent : (rawContent as any)?.default || "";
  const { data, content } = parseFrontmatter(rawString);
  const slug = (data.slug as string) ?? path.replace(/^\.\/|\.md$/g, "");
  const readingTime = data.readingTime ? Number(data.readingTime) : calculateReadingTime(content);

  return {
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
  } as Article;
});

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);
