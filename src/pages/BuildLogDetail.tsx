import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { buildLogs } from '../buildLogs/buildLogsData';
import type { BuildLog } from '../buildLogs/types';
import Meta from '../seo/Meta';
import StructuredData from '../seo/StructuredData';
import Breadcrumbs from '../seo/Breadcrumbs';
import { organization } from '../seo/siteInfo';
import { projects } from '../projects/projectsData';
import AdContainer from '../components/AdContainer';
import {
  getArticlesByProject,
  getTutorialsByProject,
} from '../utils/contentRelationships';
import NotFound from './NotFound';
import './BuildLogDetail.css';

const BuildLogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const log: BuildLog | undefined = buildLogs.find((l) => l.slug === slug);

  if (!slug || !log) {
    return <NotFound />;
  }

  const {
    title,
    project,
    date,
    updatedDate,
    status,
    author,
    readingTime,
    featuredImage,
    content,
    technologies,
    tags,
    previousSlug,
    nextSlug,
  } = log;

  const displayAuthor = author || 'Dark Web Technologies Editorial Team';
  const canonicalUrl = `${organization.url}/build-log/${slug}`;

  const matchingProject = project
    ? projects.find((p) => p.name.toLowerCase() === project.toLowerCase())
    : undefined;

  const relatedArticles = project ? getArticlesByProject(project) : [];
  const relatedTutorials = project ? getTutorialsByProject(project) : [];

  return (
    <>
      <Meta
        title={`${title} – Dark Web Technologies`}
        description={`Build log: ${title}. Development journal entry for ${project} by Dark Web Technologies.`}
        canonical={canonicalUrl}
        ogType="article"
        ogImage={featuredImage}
        ogUrl={canonicalUrl}
      />
      <StructuredData
        article={{
          title,
          description: `Build log: ${title}. Development journal entry for ${project}.`,
          author: displayAuthor,
          datePublished: date,
          dateModified: updatedDate,
          image: featuredImage,
          url: canonicalUrl,
        }}
      />
      <Breadcrumbs />
      <main className="buildlog-detail container">
        <h1>{title}</h1>
        <div className="meta">
          <span className="project">
            {matchingProject ? (
              <Link to={`/projects/${matchingProject.slug}`}>{matchingProject.name}</Link>
            ) : (
              project
            )}
          </span>
          <span className="status">{status}</span>
          <span className="date">Published: {new Date(date).toLocaleDateString()}</span>
          {updatedDate && (
            <span className="updated">Updated: {new Date(updatedDate).toLocaleDateString()}</span>
          )}
          <span className="author">By {displayAuthor}</span>
          <span className="reading-time">{readingTime}</span>
        </div>
        {featuredImage && (
          <img src={featuredImage} alt={`${title} featured`} className="featured-image" />
        )}
        <section className="content" dangerouslySetInnerHTML={{ __html: content }} />

        {/* Safe AdSense-ready placement */}
        <AdContainer slotId={import.meta.env.VITE_ADSENSE_SLOT_BUILDLOG as string} format="auto" />

        {technologies && technologies.length > 0 && (
          <section className="technologies">
            <h3>Technologies</h3>
            <ul>
              {technologies.map((t) => (
                <li key={t}>
                  <Link to="/technology">{t}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        {tags && tags.length > 0 && (
          <section className="tags">
            <h3>Tags</h3>
            <div>
              {tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}
        {relatedArticles.length > 0 && (
          <section className="related-articles">
            <h3>Related Articles</h3>
            <ul>
              {relatedArticles.map((art) => (
                <li key={art.slug}>
                  <Link to={`/articles/${art.slug}`}>{art.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        {relatedTutorials.length > 0 && (
          <section className="related-tutorials">
            <h3>Related Tutorials</h3>
            <ul>
              {relatedTutorials.map((tut) => (
                <li key={tut.slug}>
                  <Link to={`/tutorials/${tut.slug}`}>{tut.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        <nav className="prev-next">
          {previousSlug && (
            <Link to={`/build-log/${previousSlug}`} className="prev">
              ← Previous
            </Link>
          )}
          {nextSlug && (
            <Link to={`/build-log/${nextSlug}`} className="next">
              Next →
            </Link>
          )}
        </nav>
      </main>
    </>
  );
};

export default BuildLogDetail;
