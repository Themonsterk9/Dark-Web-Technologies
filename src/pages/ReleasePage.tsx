// src/pages/ReleasePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import { getReleasedProjects } from '../projects/projectsData';
import type { Project } from '../projects/types';
import './ReleasePage.css';

const ReleasePage: React.FC = () => {
  const releasedProjects: Project[] = getReleasedProjects();

  return (
    <>
      <Meta
        title="Releases – Dark Web Technologies"
        description="Explore products officially released by Dark Web Technologies including Aether AI and Gringotts Wizarding Bank."
      />
      <Breadcrumbs />
      <main className="release-page container" id="release-page">
        <header className="page-header">
          <h1>Releases</h1>
          <p className="page-intro">
            Explore products officially released by Dark Web Technologies.
          </p>
        </header>

        <div className="release-cards-grid">
          {releasedProjects.map((project) => {
            const previewType = project.slug === 'aether-ai' ? 'ai' : 'bank';
            const previewAlt = `${project.name} release preview`;
            const displayTags = project.displayTags || project.technologies.slice(0, 4);
            const ctaText = `Visit ${project.name} →`;

            return (
              <article key={project.slug} className="release-card">
                {/* Card Graphic Header */}
                <div className={`release-card-preview preview-${previewType}`} aria-label={previewAlt}>
                  <div className="preview-overlay">
                    <div className="release-badge-row">
                      <span className="badge-released">
                        <span className="badge-dot" /> RELEASED
                      </span>
                      <span className="badge-live">
                        <span className="live-dot" /> LIVE
                      </span>
                      <span className="badge-vercel" title="Deployed on Vercel">
                        <svg className="vercel-logo-svg" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/>
                        </svg>
                        VERCEL
                      </span>
                    </div>

                    <div className="preview-center-graphic">
                      <span className="graphic-title">{project.name}</span>
                      <span className="graphic-subtitle">OFFICIAL RELEASE</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="release-card-content">
                  <div className="release-card-header">
                    <h2 className="release-title">{project.name}</h2>
                    <span className="status-released-inline">● RELEASED</span>
                  </div>

                  <p className="release-desc">{project.summary}</p>

                  {/* Technology Tags */}
                  <div className="release-tags-list" aria-label="Project Tags">
                    {displayTags.map((tag) => (
                      <span key={tag} className="release-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Deployment Status Bar */}
                  <div className="deployment-status-bar">
                    <span className="env-badge">PRODUCTION</span>
                    <span className="bar-separator">•</span>
                    <span className="update-status">{project.deployment?.deploymentLabel || 'Recently Updated'}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="release-card-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-visit-button"
                        aria-label={`${ctaText} (opens in a new tab)`}
                      >
                        {ctaText}
                      </a>
                    )}

                    <Link
                      to={`/projects/${project.slug}`}
                      className="secondary-details-link"
                      title={`View technical details for ${project.name}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default ReleasePage;
