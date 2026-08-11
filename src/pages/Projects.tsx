// src/pages/Projects.tsx
import React from 'react';
import Card from '../components/Card';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import ReleasedProjects from '../components/ReleasedProjects';
import { projects } from '../projects/projectsData';
import './Projects.css';

const Projects: React.FC = () => (
  <>
    <Meta
      title="Projects – Dark Web Technologies"
      description="Browse our portfolio of cutting-edge AI, web, communication, and game development projects including officially released products Aether AI and Gringotts Wizarding Bank."
    />
    <Breadcrumbs />
    <main className="projects-page container">
      <header className="page-header">
        <h1>Our Projects</h1>
        <p className="page-intro">
          Exploring artificial intelligence, real-time networking, financial simulations, and game engineering.
        </p>
      </header>

      {/* Officially Released Projects Section */}
      <ReleasedProjects />

      <section className="all-projects-section">
        <h2 className="all-projects-title">All Projects & Portfolio</h2>
        <div className="card-grid">
          {projects.map((p) => (
            <Card
              key={p.slug}
              title={p.name}
              status={p.status}
              link={`/projects/${p.slug}`}
            >
              <p className="project-card-summary">{p.summary}</p>
              <div className="project-card-tech">
                {(p.displayTags || p.technologies.slice(0, 4)).map((tech) => (
                  <span key={tech} className="mini-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {p.liveUrl && (
                <div className="card-live-cta-wrapper">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-live-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Live Project →
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>
    </main>
  </>
);

export default Projects;
