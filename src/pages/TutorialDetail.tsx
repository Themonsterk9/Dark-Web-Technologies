import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import NotFound from './NotFound';
import AdContainer from '../components/AdContainer';
import { getTutorialBySlug } from '../tutorials/tutorialsData';
import { projects } from '../projects/projectsData';
import { getArticlesByProject } from '../utils/contentRelationships';
import './TutorialDetail.css';

/**
 * Tutorial detail page.
 * Connects to technology, related project, and related articles.
 * Includes non-intrusive AdSense-ready ad container.
 */
const TutorialDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tutorial = slug ? getTutorialBySlug(slug) : undefined;

  if (!slug || !tutorial) {
    return <NotFound />;
  }

  const {
    title,
    difficulty,
    technologies,
    prerequisites,
    author,
    date,
    readingTime,
    category,
    content,
    relatedProject,
    sources,
  } = tutorial;

  const displayAuthor = author || 'Dark Web Technologies Editorial Team';

  const matchingProject = relatedProject
    ? projects.find((p) => p.name.toLowerCase() === relatedProject.toLowerCase())
    : undefined;

  const relatedArticles = relatedProject ? getArticlesByProject(relatedProject) : [];

  return (
    <>
      <Meta
        title={`${title} – Tutorials – Dark Web Technologies`}
        description={tutorial.excerpt || `Tutorial: ${title}. Step-by-step guide from Dark Web Technologies.`}
      />
      <Breadcrumbs />
      <main className="tutorial-detail container">
        <header className="tutorial-header">
          <div className="header-meta">
            <span className="category-badge">{category}</span>
            <span className={`difficulty-badge diff-${difficulty.toLowerCase()}`}>
              {difficulty}
            </span>
          </div>
          <h1>{title}</h1>
          <div className="author-meta">
            <span>By {displayAuthor}</span> • <span>{date}</span> • <span>{readingTime} min read</span>
          </div>
        </header>

        {prerequisites && prerequisites.length > 0 && (
          <div className="prerequisites-box">
            <h3>Prerequisites</h3>
            <ul>
              {prerequisites.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="tech-box">
            <h3>Technologies Used</h3>
            <div className="tags-list">
              {technologies.map((tech) => (
                <Link key={tech} to="/technology" className="tech-tag" title={`View ${tech} in Technology Matrix`}>
                  {tech}
                </Link>
              ))}
            </div>
          </div>
        )}

        <section className="tutorial-body">
          <div className="content-text">{content}</div>
        </section>

        {/* Safe AdSense-ready placement */}
        <AdContainer slotId={import.meta.env.VITE_ADSENSE_SLOT_TUTORIAL as string} format="auto" />

        {relatedProject && (
          <div className="related-project-box">
            <h3>Related Project</h3>
            <p>
              This tutorial relates to{' '}
              {matchingProject ? (
                <Link to={`/projects/${matchingProject.slug}`}>{matchingProject.name}</Link>
              ) : (
                <strong>{relatedProject}</strong>
              )}.
            </p>
          </div>
        )}

        {relatedArticles.length > 0 && (
          <div className="related-content-box">
            <h3>Related Articles</h3>
            <ul>
              {relatedArticles.map((art) => (
                <li key={art.slug}>
                  <Link to={`/articles/${art.slug}`}>{art.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {sources && sources.length > 0 && (
          <div className="tutorial-sources">
            <h3>Sources & References</h3>
            <ul>
              {sources.map((src, idx) => (
                <li key={idx}>
                  {src.startsWith('/') ? (
                    <Link to={src}>Project Information ({src})</Link>
                  ) : (
                    <a href={src} target="_blank" rel="noopener noreferrer">
                      {src}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="tutorial-back">
          <Link to="/tutorials" className="back-link">
            ← Back to Tutorials
          </Link>
        </div>
      </main>
    </>
  );
};

export default TutorialDetail;
