// src/pages/ProjectDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import NotFound from './NotFound';
import { getProjectBySlug } from '../projects/projectsData';
import {
  getArticlesByProject,
  getTutorialsByProject,
  getBuildLogsByProject,
} from '../utils/contentRelationships';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <NotFound />;
  }

  const { name, status, category, description, technologies, features, disclaimer, liveUrl } = project;

  // Find related content across articles, tutorials, and build logs using helper module
  const relatedArticles = getArticlesByProject(name);
  const relatedTutorialsList = getTutorialsByProject(name);
  const relatedBuildLogs = getBuildLogsByProject(name);

  return (
    <>
      <Meta
        title={`${name} – Projects – Dark Web Technologies`}
        description={`${name}: ${project.summary}`}
      />
      <Breadcrumbs />
      <main className="project-detail container">
        <header className="project-header">
          <div className="header-top">
            <span className="category-badge">{category}</span>
            <span className={`status-badge status-${status.toLowerCase().replace(/\s+/g, '-')}`}>
              {status === 'RELEASED' ? '● RELEASED' : status}
            </span>
          </div>
          <h1>{name}</h1>
          <p className="summary">{project.summary}</p>
          {liveUrl && (
            <div className="project-header-actions">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-live-button"
                aria-label={`Visit Live Project ${name} (opens in a new tab)`}
              >
                Visit Live Project →
              </a>
            </div>
          )}
        </header>

        <section className="project-section">
          <h2>Overview</h2>
          <p>{description}</p>
          {disclaimer && <div className="project-disclaimer">{disclaimer}</div>}
        </section>

        {features && features.length > 0 && (
          <section className="project-section">
            <h2>Key Features</h2>
            <ul className="features-list">
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="project-section">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            {technologies.map((tech) => (
              <Link key={tech} to="/technology" className="tech-tag-link" title={`View ${tech} in Technology Matrix`}>
                {tech}
              </Link>
            ))}
          </div>
        </section>

        {/* Related Articles Section - only rendered if actual content exists */}
        {relatedArticles.length > 0 && (
          <section className="project-section">
            <h2>Related Articles</h2>
            <ul className="rel-content-list">
              {relatedArticles.map((art) => (
                <li key={art.slug}>
                  <Link to={`/articles/${art.slug}`}>{art.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related Tutorials Section - only rendered if actual content exists */}
        {relatedTutorialsList.length > 0 && (
          <section className="project-section">
            <h2>Related Tutorials</h2>
            <ul className="rel-content-list">
              {relatedTutorialsList.map((tut) => (
                <li key={tut.slug}>
                  <Link to={`/tutorials/${tut.slug}`}>{tut.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related Build Logs Section - only rendered if actual content exists */}
        {relatedBuildLogs.length > 0 && (
          <section className="project-section">
            <h2>Development Logs</h2>
            <ul className="rel-content-list">
              {relatedBuildLogs.map((log) => (
                <li key={log.slug}>
                  <Link to={`/build-log/${log.slug}`}>{log.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="project-back">
          <Link to="/projects" className="back-link">
            ← Back to All Projects
          </Link>
        </div>
      </main>
    </>
  );
};

export default ProjectDetail;
