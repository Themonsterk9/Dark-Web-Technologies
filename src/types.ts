// src/types.ts
export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  date: string; // ISO date string
  category: string;
  tags: string[];
  featuredImage?: string; // relative path to image
  author: string;
  readingTime: number; // minutes
  relatedProject?: string; // e.g., "Aether AI"
  sources?: string[]; // URLs or citations
  content: string; // markdown body
}
