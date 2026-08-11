// src/components/Card.tsx
import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import type { DeploymentInfo } from '../projects/types';

type CardProps = {
  title: string;
  status: string;
  releaseState?: string;
  deployment?: DeploymentInfo;
  liveUrl?: string;
  link?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  title,
  status,
  releaseState,
  deployment,
  liveUrl,
  link,
  children,
}) => {
  const isReleased = status === 'RELEASED' || releaseState === 'RELEASED';
  const ctaText = liveUrl ? 'Visit Live Project →' : undefined;

  return (
    <div className={`card ${isReleased ? 'card-released' : ''}`}>
      <div className="card-image" aria-hidden="true">
        <div className="card-badges-overlay">
          {isReleased ? (
            <>
              <span className="badge-released">
                <span className="badge-dot dot-released" /> RELEASED
              </span>
              {deployment?.provider === 'VERCEL' && (
                <span className="badge-vercel" title="Deployed on Vercel">
                  <svg className="vercel-triangle-icon" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/>
                  </svg>
                  VERCEL
                </span>
              )}
            </>
          ) : (
            <span className={`badge-status status-${status.toLowerCase().replace(/\s+/g, '-')}`}>
              {status}
            </span>
          )}
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">
          {link ? <Link to={link}>{title}</Link> : title}
        </h3>

        {isReleased && (
          <div className="card-deployment-info">
            <span className="env-label">Production</span>
            <span className="meta-dot">•</span>
            <span className="update-label">{deployment?.deploymentLabel || 'Recently Updated'}</span>
          </div>
        )}

        {!isReleased && <p className="card-status">Status: {status}</p>}

        {children}

        <div className="card-actions">
          {isReleased && liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-primary-live-cta"
              aria-label={`Visit Live Project ${title} (opens in a new tab)`}
            >
              {ctaText}
            </a>
          )}

          {link && (
            <Link to={link} className="card-secondary-detail-link">
              View Details →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
