// src/pages/Technology.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import AdContainer from '../components/AdContainer';
import { projects } from '../projects/projectsData';
import {
  getAllTechnologies,
  getProjectsByTechnology,
  getArticlesByTechnology,
  getTutorialsByTechnology,
  getBuildLogsByTechnology,
} from '../utils/contentRelationships';
import './Technology.css';

const Technology: React.FC = () => {
  const allTech = getAllTechnologies();
  const [selectedTech, setSelectedTech] = useState<string>('All');

  const filteredTech = selectedTech === 'All' ? allTech : [selectedTech];

  return (
    <>
      <Meta
        title="Technology Stack & Matrix – Dark Web Technologies"
        description="Discover the engineering frameworks, databases, and graphics engines powering Dark Web Technologies projects, along with related articles, tutorials, and build logs."
      />
      <Breadcrumbs />
      <main className="technology-page container">
        <header className="page-header">
          <h1>Technology Matrix</h1>
          <p className="intro">
            Explore the technologies powering our projects and discover related articles, code tutorials, and engineering build logs.
          </p>
        </header>

        {/* Technology Filter Pills */}
        <div className="tech-filter-pills">
          <button
            className={`pill ${selectedTech === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedTech('All')}
          >
            All Technologies ({allTech.length})
          </button>
          {allTech.map((tech) => (
            <button
              key={tech}
              className={`pill ${selectedTech === tech ? 'active' : ''}`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Technology Relationships Matrix */}
        <div className="tech-matrix">
          {filteredTech.map((tech) => {
            const usingProjects = getProjectsByTechnology(tech);
            const relatedArticles = getArticlesByTechnology(tech);
            const relatedTutorials = getTutorialsByTechnology(tech);
            const relatedBuildLogs = getBuildLogsByTechnology(tech);

            return (
              <section key={tech} className="tech-card">
                <div className="tech-card-header">
                  <h2>{tech}</h2>
                </div>

                {/* Projects Using Technology */}
                {usingProjects.length > 0 && (
                  <div className="tech-rel-group">
                    <h3>Projects Using {tech}</h3>
                    <div className="rel-tags">
                      {usingProjects.map((p) => (
                        <Link key={p.slug} to={`/projects/${p.slug}`} className="project-link-tag">
                          {p.name} ({p.status})
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="tech-rel-group">
                    <h3>Related Articles</h3>
                    <ul className="rel-list">
                      {relatedArticles.map((art) => (
                        <li key={art.slug}>
                          <Link to={`/articles/${art.slug}`}>{art.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Tutorials */}
                {relatedTutorials.length > 0 && (
                  <div className="tech-rel-group">
                    <h3>Related Tutorials</h3>
                    <ul className="rel-list">
                      {relatedTutorials.map((tut) => (
                        <li key={tut.slug}>
                          <Link to={`/tutorials/${tut.slug}`}>{tut.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Build Logs */}
                {relatedBuildLogs.length > 0 && (
                  <div className="tech-rel-group">
                    <h3>Related Build Logs</h3>
                    <ul className="rel-list">
                      {relatedBuildLogs.map((log) => (
                        <li key={log.slug}>
                          <Link to={`/build-log/${log.slug}`}>{log.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Monetization ad placement */}
        <AdContainer format="horizontal" />

        {/* Overview by Project */}
        <section className="tech-by-project-section">
          <h2>Summary by Project</h2>
          <div className="project-tech-summary-grid">
            {projects.map((proj) => (
              <div key={proj.slug} className="summary-card">
                <h3>
                  <Link to={`/projects/${proj.slug}`}>{proj.name}</Link>
                </h3>
                <p className="proj-cat">{proj.category}</p>
                <div className="proj-tech-list">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="tech-item-badge"
                      onClick={() => setSelectedTech(t)}
                      title={`Filter by ${t}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Technology;
