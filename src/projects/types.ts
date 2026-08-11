// src/projects/types.ts

export type ReleaseState = 'DEVELOPMENT' | 'BETA' | 'RELEASED' | 'ARCHIVED';
export type ReleaseType = 'LIVE' | 'PREVIEW' | 'INTERNAL';

export type DeploymentProvider = 'VERCEL' | 'RENDER' | 'NETLIFY' | 'CUSTOM';
export type DeploymentEnvironment = 'PRODUCTION' | 'STAGING' | 'PREVIEW';
export type DeploymentState = 'READY' | 'DEPLOYING' | 'ERROR' | 'CANCELED';

export interface DeploymentInfo {
  provider: DeploymentProvider;
  environment: DeploymentEnvironment;
  state: DeploymentState;
  lastUpdated?: string;
  deploymentLabel?: string;
}

export type ProjectStatus = 'RELEASED' | 'Live' | 'In Development' | 'Upcoming' | 'Completed' | 'Planning';

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  releaseState?: ReleaseState;
  releaseType?: ReleaseType;
  deployment?: DeploymentInfo;
  category: string;
  summary: string;
  description: string;
  technologies: string[];
  features?: string[];
  disclaimer?: string;
  liveUrl?: string;
  displayTags?: string[];
}
