// src/projects/types.ts

export type ReleaseState = 'DEVELOPMENT' | 'BETA' | 'RELEASED' | 'ARCHIVED';
export type ReleaseType = 'LIVE' | 'PREVIEW' | 'INTERNAL';

export type ProjectStatus = 'RELEASED' | 'Live' | 'In Development' | 'Upcoming' | 'Completed' | 'Planning';

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  releaseState?: ReleaseState;
  releaseType?: ReleaseType;
  category: string;
  summary: string;
  description: string;
  technologies: string[];
  features?: string[];
  disclaimer?: string;
  liveUrl?: string;
  displayTags?: string[];
}
