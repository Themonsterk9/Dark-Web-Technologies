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
          Explore products officially released by Dark Web Technologies.
        </p>
      </div>

      <div className="released-grid">
        {releasedProjects.map((project) => {
          const previewType = project.slug === 'aether-ai' ? 'ai' : 'bank';
          const previewAlt = `${project.name} release preview`;
          const displayTags = project.displayTags || project.technologies.slice(0, 4);

          return (
            <article key={project.slug} className="released-card">
              {/* Visual Project Preview Area */}
              <div className={`project-preview-area preview-${previewType}`} aria-label={previewAlt}>
                <div className="preview-overlay">
                  <div className="status-badge-wrapper">
                    <span className="released-status-badge">
                      <span className="released-dot" /> LIVE • RELEASED
                    </span>
                  </div>
                  <div className="preview-graphic">
                    {previewType === 'ai' ? (
                      <div className="ai-graphic-nodes">
                        <span className="node node-central">AETHER AI</span>
                        <span className="node-ring" />
                        <span className="tech-chip">OFFICIALLY RELEASED</span>
                      </div>
                    ) : (
                      <div className="bank-graphic-vault">
                        <span className="node node-vault">GRINGOTTS</span>
                        <span className="vault-ring" />
                        <span className="tech-chip">OFFICIALLY RELEASED</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="released-card-body">
                <div className="card-top-header">
                  <h3 className="released-card-title">{project.name}</h3>
                  <span className="released-badge-inline">● RELEASED</span>
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

                {/* Actions */}
                <div className="released-card-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-release-button"
                      aria-label={`Visit Live Project ${project.name} (opens in a new tab)`}
                    >
                      Visit Live Project →
                    </a>
                  )}

                  <Link
                    to={`/projects/${project.slug}`}
                    className="secondary-detail-link"
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
    </section>
  );
};

export default ReleasedProjects;
