// src/components/ReleasedProjects.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { getReleasedProjects } from '../projects/projectsData';
import type { Project } from '../projects/types';
import './ReleasedProjects.css';

const ReleasedProjects: React.FC = () => {
  const releasedProjects: Project[] = getReleasedProjects();

  return (
    <section className="released-projects-section" id="released-projects">
      <div className="section-header">
        <h2 className="section-title">Released Projects</h2>
        <p className="section-subtitle">
          Explore products officially released and deployed by Dark Web Technologies.
        </p>
      </div>

      <div className="released-grid">
        {releasedProjects.map((project) => {
          const previewType = project.slug === 'aether-ai' ? 'ai' : 'bank';
          const previewAlt = `${project.name} release preview`;
          const displayTags = project.displayTags || project.technologies.slice(0, 4);
          const ctaText = `Visit ${project.name} →`;

          return (
            <article key={project.slug} className="released-card">
              {/* Visual Project Preview Area */}
              <div className={`project-preview-area preview-${previewType}`} aria-label={previewAlt}>
                <div className="preview-overlay">
                  <div className="status-badge-wrapper">
                    <span className="released-status-badge">
                      <span className="released-dot" /> RELEASED
                    </span>
                    <span className="live-status-badge">
                      <span className="live-dot" /> LIVE
                    </span>
                    <span className="vercel-deploy-badge" title="Deployed on Vercel Cloud Infrastructure">
                      <svg className="vercel-logo-icon" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/>
                      </svg>
                      VERCEL
                    </span>
                  </div>

                  <div className="preview-graphic">
                    {previewType === 'ai' ? (
                      <div className="ai-graphic-nodes">
                        <span className="node node-central">AETHER AI</span>
                        <span className="node-ring" />
                        <span className="tech-chip">VERCEL PRODUCTION</span>
                      </div>
                    ) : (
                      <div className="bank-graphic-vault">
                        <span className="node node-vault">GRINGOTTS</span>
                        <span className="vault-ring" />
                        <span className="tech-chip">VERCEL PRODUCTION</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="released-card-body">
                <div className="card-top-header">
                  <h3 className="released-card-title">{project.name}</h3>
                </div>

                <p className="released-card-desc">{project.summary}</p>

                {/* Technology Tags */}
                <div className="released-tags-list" aria-label="Project Technologies">
                  {displayTags.map((tag) => (
                    <span key={tag} className="released-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Deployment Metadata Bar */}
                <div className="deployment-meta-bar">
                  <span className="env-pill">Production</span>
                  <span className="dot-separator">•</span>
                  <span className="update-pill">
                    {project.deployment?.deploymentLabel || 'Recently Updated'}
                  </span>
                </div>

                {/* Actions */}
                <div className="released-card-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-release-button"
                      aria-label={`${ctaText} (opens in a new tab)`}
                    >
                      {ctaText}
                    </a>
                  )}

                  <Link
                    to={`/projects/${project.slug}`}
                    className="secondary-detail-link"
                    title={`View technical documentation for ${project.name}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ReleasedProjects;
