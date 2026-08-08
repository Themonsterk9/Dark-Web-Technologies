import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import EmptyState from '../components/EmptyState';
import { tutorials } from '../tutorials/tutorialsData';
import './Tutorials.css';

/**
 * Tutorials list page.
 * Code-based tutorials published via the code/GitHub/Vercel workflow.
 * Dynamically lists published tutorials or displays clean empty state.
 */
const Tutorials: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'AI', 'Security', 'Web Development', 'Mobile', 'Backend'];

  const filteredTutorials =
    filter === 'All'
      ? tutorials
      : tutorials.filter(
          (t) =>
            t.category === filter ||
            t.category.startsWith(filter) ||
            t.difficulty === filter
        );

  return (
    <>
      <Meta
        title="Tutorials – Dark Web Technologies"
        description="Step-by-step technical tutorials on AI, security, mobile development, backend development, and game engineering."
      />
      <Breadcrumbs />
      <main className="tutorials-page container">
        <header className="page-header">
          <h1>Tutorials</h1>
          <p className="intro">
            In-depth, code-based tutorials covering AI, security, mobile development, backend development, and software architecture.
          </p>
        </header>

        {tutorials.length > 0 && (
          <div className="category-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={cat === filter ? 'active' : ''}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {filteredTutorials.length === 0 ? (
          <EmptyState message="No tutorials have been published yet for this category. Check back soon." />
        ) : (
          <div className="card-grid">
            {filteredTutorials.map((tut) => (
              <Link key={tut.slug} to={`/tutorials/${tut.slug}`} className="tutorial-card-link">
                <div className="tutorial-card">
                  <div className="card-header">
                    <span className="category-badge">{tut.category}</span>
                    <span className={`difficulty-badge diff-${tut.difficulty.toLowerCase()}`}>
                      {tut.difficulty}
                    </span>
                  </div>
                  <h3>{tut.title}</h3>
                  <p>{tut.excerpt || tut.description}</p>
                  <div className="tech-tags">
                    {tut.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Tutorials;
