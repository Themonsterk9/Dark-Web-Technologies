// src/tutorials/types.ts
import type { Article } from "../types";

export interface Tutorial extends Article {
  // Additional fields specific to tutorials
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  technologies: string[];
  prerequisites?: string[];
  relatedProject?: string;
  relatedTutorialSlugs?: string[];
  sources?: string[];
  // Optional description for the tutorial list
  description?: string;
}
