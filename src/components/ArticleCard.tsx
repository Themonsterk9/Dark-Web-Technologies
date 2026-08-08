// src/components/ArticleCard.tsx
import React from "react";
import type { Article } from "../types";
import "./ArticleCard.css";

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const { title, excerpt, date, readingTime, category, tags, featuredImage } = article;
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="article-card">
      {featuredImage && (
        <img src={featuredImage} alt={title} className="article-card-image" />
      )}
      <div className="article-card-content">
        <div className="article-card-meta">
          <span className="category">{category}</span>
          <span className="date">{formattedDate}</span>
          <span className="reading-time">{readingTime} min read</span>
        </div>
        <h3 className="title">{title}</h3>
        <p className="excerpt">{excerpt}</p>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
