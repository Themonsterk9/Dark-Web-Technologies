export interface BuildLog {
  title: string;
  slug: string;
  project: 'Aether AI' | 'Gringotts Wizarding Bank' | 'Voyager Chat' | 'Project Blackout';
  date: string; // ISO date
  updatedDate?: string; // ISO date if updated
  status: 'Planning' | 'In Development' | 'Testing' | 'Production' | 'Completed' | 'Upcoming';
  excerpt: string;
  featuredImage?: string; // relative path in public/assets/build-logs
  author: string;
  readingTime: string; // e.g., "5 min"
  tags: string[];
  content: string; // markdown content
  technologies: string[];
  relatedArticles?: string[]; // slugs of articles
  relatedTutorials?: string[]; // slugs of tutorials
  previousSlug?: string;
  nextSlug?: string;
}
