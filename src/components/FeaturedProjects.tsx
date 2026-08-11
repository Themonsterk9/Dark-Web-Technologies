// src/components/FeaturedProjects.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

interface FeaturedProjectData {
  slug: string;
  name: string;
  shortDescription: string;
  tags: string[];
  liveUrl: string;
  ctaText: string;
  previewType: 'ai' | 'bank';
  previewAlt: string;
}

const featuredProjectsList: FeaturedProjectData[] = [
  {
    slug: 'aether-ai',
    name: 'Aether AI',
    shortDescription:
      'An AI-powered conversational platform focused on intelligent interactions, local AI, RAG, document processing, memory, knowledge management, and AI-assisted conversations.',
    tags: ['AI', 'RAG', 'Local AI', 'Knowledge Management'],
    liveUrl: 'https://aether-ai-zeta.vercel.app/',
    ctaText: 'Visit Aether AI →',
    previewType: 'ai',
    previewAlt: 'Aether AI project preview',
  },
  {
    slug: 'gringotts-wizarding-bank',
    name: 'Gringotts Wizarding Bank',
    shortDescription:
      'A full-stack banking application inspired by the Wizarding World, featuring authentication, vault/account management, deposits, withdrawals, transfers, and transaction history.',
    tags: ['Full Stack', 'Banking', 'Web Application'],
    liveUrl: 'https://gringotts-wizarding-bank.vercel.app/',
    ctaText: 'Visit Gringotts Wizarding Bank →',
    previewType: 'bank',
    previewAlt: 'Gringotts Wizarding Bank project preview',
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="featured-projects-section" id="featured-projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Explore real-world products and experiments built by Dark Web Technologies.
        </p>
      </div>

      <div className="featured-grid">
        {featuredProjectsList.map((project) => (
          <article key={project.slug} className="featured-card">
            {/* Visual Project Preview Area */}
            <div className={`project-preview-area preview-${project.previewType}`} aria-label={project.previewAlt}>
              <div className="preview-overlay">
                <span className="live-status-badge">
                  <span className="live-dot" /> LIVE
                </span>
                <div className="preview-graphic">
                  {project.previewType === 'ai' ? (
                    <div className="ai-graphic-nodes">
                      <span className="node node-central">AETHER AI</span>
                      <span className="node-ring" />
                      <span className="tech-chip">RAG ENGINE</span>
                    </div>
                  ) : (
                    <div className="bank-graphic-vault">
                      <span className="node node-vault">GRINGOTTS</span>
                      <span className="vault-ring" />
                      <span className="tech-chip">SECURE VAULT</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="featured-card-body">
              <h3 className="featured-card-title">{project.name}</h3>

              <p className="featured-card-desc">{project.shortDescription}</p>

              {/* Tags */}
              <div className="featured-tags-list" aria-label="Project Technologies">
                {project.tags.map((tag) => (
                  <span key={tag} className="featured-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="featured-card-actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-live-cta"
                  aria-label={`${project.ctaText} (opens in a new tab)`}
                >
                  {project.ctaText}
                </a>

                <Link
                  to={`/projects/${project.slug}`}
                  className="secondary-detail-link"
                  title={`Read detailed technical documentation for ${project.name}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
