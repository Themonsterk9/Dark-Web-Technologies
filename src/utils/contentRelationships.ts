// src/utils/contentRelationships.ts
import { projects } from '../projects/projectsData';
import { articles } from '../articles/articlesData';
import { tutorials } from '../tutorials/tutorialsData';
import { buildLogs } from '../buildLogs/buildLogsData';
import type { Project } from '../projects/types';
import type { Article } from '../types';
import type { Tutorial } from '../tutorials/types';
import type { BuildLog } from '../buildLogs/types';

/**
 * Get all unique confirmed technologies across all projects.
 */
export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
  return Array.from(techSet).sort();
}

/**
 * Get projects that use a given technology.
 */
export function getProjectsByTechnology(techName: string): Project[] {
  return projects.filter((p) =>
    p.technologies.some((t) => t.toLowerCase() === techName.toLowerCase())
  );
}

/**
 * Get articles related to a given technology.
 */
export function getArticlesByTechnology(techName: string): Article[] {
  const lowerTech = techName.toLowerCase();
  return articles.filter(
    (a) =>
      a.tags.some((t) => t.toLowerCase() === lowerTech) ||
      a.category.toLowerCase().includes(lowerTech) ||
      a.content.toLowerCase().includes(lowerTech)
  );
}

/**
 * Get tutorials related to a given technology.
 */
export function getTutorialsByTechnology(techName: string): Tutorial[] {
  const lowerTech = techName.toLowerCase();
  return tutorials.filter(
    (t) =>
      t.technologies.some((tech) => tech.toLowerCase() === lowerTech) ||
      t.tags.some((tag) => tag.toLowerCase() === lowerTech)
  );
}

/**
 * Get build logs related to a given technology.
 */
export function getBuildLogsByTechnology(techName: string): BuildLog[] {
  const lowerTech = techName.toLowerCase();
  return buildLogs.filter(
    (b) =>
      b.technologies.some((tech) => tech.toLowerCase() === lowerTech) ||
      b.tags.some((tag) => tag.toLowerCase() === lowerTech)
  );
}

/**
 * Get related articles for a given project name.
 */
export function getArticlesByProject(projectName: string): Article[] {
  return articles.filter(
    (a) => a.relatedProject && a.relatedProject.toLowerCase() === projectName.toLowerCase()
  );
}

/**
 * Get related tutorials for a given project name.
 */
export function getTutorialsByProject(projectName: string): Tutorial[] {
  return tutorials.filter(
    (t) => t.relatedProject && t.relatedProject.toLowerCase() === projectName.toLowerCase()
  );
}

/**
 * Get related build logs for a given project name.
 */
export function getBuildLogsByProject(projectName: string): BuildLog[] {
  return buildLogs.filter(
    (b) => b.project && b.project.toLowerCase() === projectName.toLowerCase()
  );
}
