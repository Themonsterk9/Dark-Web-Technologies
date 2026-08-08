// src/projects/types.ts

export type ProjectStatus = 'Live' | 'In Development' | 'Upcoming' | 'Completed' | 'Planning';

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  category: string;
  summary: string;
  description: string;
  technologies: string[];
  features?: string[];
  disclaimer?: string;
}
