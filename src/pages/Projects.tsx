// src/pages/Projects.tsx
import React from 'react';
import Card from '../components/Card';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import { projects } from '../projects/projectsData';
import './Projects.css';

const Projects: React.FC = () => (
  <>
    <Meta
      title="Projects – Dark Web Technologies"
      description="Browse our portfolio of cutting-edge AI, web, communication, and game development projects including Aether AI, Gringotts Wizarding Bank, Voyager Chat, and Project Blackout."
    />
    <Breadcrumbs />
    <main className="projects-page container">
      <header className="page-header">
        <h1>Our Projects</h1>
        <p className="page-intro">
          Exploring artificial intelligence, real-time networking, financial simulations, and game engineering.
        </p>
      </header>

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
              {p.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="mini-tag">
                  {tech}
                </span>
              ))}
              {p.technologies.length > 4 && (
                <span className="mini-tag">+{p.technologies.length - 4} more</span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </main>
  </>
);

export default Projects;
