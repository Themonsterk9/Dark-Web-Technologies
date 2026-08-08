import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../articles/articlesData';
import ArticleCard from '../components/ArticleCard';
import EmptyState from '../components/EmptyState';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import './Articles.css';

const categories = [
  'All',
  'Artificial Intelligence',
  'Web Development',
  'Backend Development',
  'Databases',
  'Mobile Development',
  'Game Development',
  'Cybersecurity',
  'Software Engineering',
  'Project Development',
];

const Articles: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const filtered = filter === 'All' ? articles : articles.filter((a) => a.category === filter);

  return (
    <>
      <Meta
        title="Articles – Dark Web Technologies"
        description="Technical write-ups, deep dives, and analysis from the Dark Web Technologies editorial team covering AI, security, web development, and more."
      />
      <Breadcrumbs />
      <main className="articles-page container">
        <h1>Articles</h1>
        <p className="intro">
          Technical write‑ups from the Dark Web Technologies editorial team.
        </p>

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

        {filtered.length === 0 ? (
          <EmptyState message="No articles have been published yet." />
        ) : (
          <div className="card-grid">
            {filtered.map((article) => (
              <Link key={article.slug} to={`/articles/${article.slug}`}>
                <ArticleCard article={article} />
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Articles;
