import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import NotFound from './NotFound';
import AdContainer from '../components/AdContainer';
import { getArticleBySlug } from '../articles/articlesData';
import { projects } from '../projects/projectsData';
import {
  getTutorialsByProject,
  getBuildLogsByProject,
} from '../utils/contentRelationships';
import './ArticleDetail.css';

/**
 * Article detail page.
 * Loads the article by slug using the articles data layer.
 * Connects to related projects, tutorials, build logs, and sources.
 * Includes non-intrusive AdSense-ready ad container.
 */
const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!slug || !article) {
    return <NotFound />;
  }

  const { title, date, author, readingTime, category, tags, featuredImage, relatedProject, sources, content } = article;
  const displayAuthor = author || 'Dark Web Technologies Editorial Team';
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const matchingProject = relatedProject
    ? projects.find((p) => p.name.toLowerCase() === relatedProject.toLowerCase())
    : undefined;

  const relatedTutorials = relatedProject ? getTutorialsByProject(relatedProject) : [];
  const relatedBuildLogs = relatedProject ? getBuildLogsByProject(relatedProject) : [];

  return (
    <>
      <Meta
        title={`${title} – Dark Web Technologies`}
        description={article.excerpt || `${title} - Technical write-up on Dark Web Technologies.`}
      />
      <Breadcrumbs />
      <main className="article-detail container">
        <header className="article-header">
          <span className="category-badge">{category}</span>
          <h1>{title}</h1>
          <div className="article-meta">
            <span className="author">By {displayAuthor}</span>
            <span className="dot">•</span>
            <span className="date">{formattedDate}</span>
            <span className="dot">•</span>
            <span className="reading-time">{readingTime} min read</span>
          </div>
        </header>

        {featuredImage && (
          <div className="featured-image-wrapper">
            <img src={featuredImage} alt={title} className="featured-image" />
          </div>
        )}

        <section className="article-body">
          <div className="content-text">{content}</div>
        </section>

        {/* Safe AdSense-ready placement */}
        <AdContainer slotId={import.meta.env.VITE_ADSENSE_SLOT_ARTICLE as string} format="auto" />

        {tags && tags.length > 0 && (
          <div className="article-tags">
            <h3>Tags</h3>
            <div className="tags-list">
              {tags.map((tag) => (
                <Link key={tag} to="/technology" className="tag" title={`View ${tag} in Technology Matrix`}>
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Project Connection */}
        {relatedProject && (
          <div className="related-project-box">
            <h3>Related Project</h3>
            <p>
              This article relates to{' '}
              {matchingProject ? (
                <Link to={`/projects/${matchingProject.slug}`}>{matchingProject.name}</Link>
              ) : (
                <strong>{relatedProject}</strong>
              )}.
            </p>
          </div>
        )}

        {/* Related Tutorials - Only rendered if actual related tutorials exist */}
        {relatedTutorials.length > 0 && (
          <div className="related-content-box">
            <h3>Related Tutorials</h3>
            <ul>
              {relatedTutorials.map((tut) => (
                <li key={tut.slug}>
                  <Link to={`/tutorials/${tut.slug}`}>{tut.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Build Logs - Only rendered if actual related build logs exist */}
        {relatedBuildLogs.length > 0 && (
          <div className="related-content-box">
            <h3>Related Build Logs</h3>
            <ul>
              {relatedBuildLogs.map((log) => (
                <li key={log.slug}>
                  <Link to={`/build-log/${log.slug}`}>{log.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {sources && sources.length > 0 && (
          <div className="article-sources">
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

        <div className="article-back">
          <Link to="/articles" className="back-link">
            ← Back to Articles
          </Link>
        </div>
      </main>
    </>
  );
};

export default ArticleDetail;
