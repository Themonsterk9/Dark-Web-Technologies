// src/seo/Breadcrumbs.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import StructuredData from './StructuredData';
import { getProjectBySlug } from '../projects/projectsData';
import { getArticleBySlug } from '../articles/articlesData';
import { getTutorialBySlug } from '../tutorials/tutorialsData';
import { buildLogs } from '../buildLogs/buildLogsData';
import './Breadcrumbs.css';

const staticSegmentNames: Record<string, string> = {
  '': 'Home',
  'projects': 'Projects',
  'technology': 'Technology',
  'articles': 'Articles',
  'tutorials': 'Tutorials',
  'build-log': 'Build Log',
  'release': 'Release',
  'releases': 'Releases',
  'about': 'About',
  'contact': 'Contact',
  'privacy-policy': 'Privacy Policy',
  'terms': 'Terms of Service',
  'disclaimer': 'Disclaimer',
};

const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length === 0) {
    return null;
  }

  const crumbs = parts.map((part, idx) => {
    const url = '/' + parts.slice(0, idx + 1).join('/');
    const parentSegment = parts[idx - 1];

    let name = staticSegmentNames[part];

    if (!name && parentSegment) {
      if (parentSegment === 'projects') {
        const proj = getProjectBySlug(part);
        if (proj) name = proj.name;
      } else if (parentSegment === 'articles') {
        const art = getArticleBySlug(part);
        if (art) name = art.title;
      } else if (parentSegment === 'tutorials') {
        const tut = getTutorialBySlug(part);
        if (tut) name = tut.title;
      } else if (parentSegment === 'build-log') {
        const log = buildLogs.find((l) => l.slug === part);
        if (log) name = log.title;
      }
    }

    if (!name) {
      name = part.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    }

    return { name, url };
  });

  const allCrumbs = [{ name: 'Home', url: '/' }, ...crumbs];
  const prodUrl = import.meta.env.VITE_PROD_URL || '';

  const structuredBreadcrumbs = allCrumbs.map((c) => ({
    name: c.name,
    url: `${prodUrl}${c.url}`,
  }));

  return (
    <div className="container breadcrumbs-container">
      <nav aria-label="Breadcrumb">
        <ol className="breadcrumbs-list">
          {allCrumbs.map((c, i) => {
            const isLast = i === allCrumbs.length - 1;
            return (
              <li key={c.url} className="breadcrumb-item">
                {isLast ? (
                  <span className="current" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link to={c.url}>{c.name}</Link>
                    <span className="separator">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <StructuredData breadcrumbs={structuredBreadcrumbs} />
    </div>
  );
};

export default Breadcrumbs;
