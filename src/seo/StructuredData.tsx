// src/seo/StructuredData.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OrganizationData {
  name: string;
  url: string;
  logo: string;
}

interface WebSiteData {
  name: string;
  url: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface Props {
  organization?: OrganizationData;
  website?: WebSiteData;
  article?: {
    title: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    url: string;
  };
  breadcrumbs?: BreadcrumbItem[];
}

/**
 * Injects JSON‑LD structured data for Organization, WebSite, Article and
 * BreadcrumbList. Only the sections that have data will be rendered.
 */
const StructuredData: React.FC<Props> = ({ organization, website, article, breadcrumbs }) => {
  const scripts: string[] = [];

  if (organization) {
    scripts.push(`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "${organization.name}",
        "url": "${organization.url}",
        "logo": "${organization.logo}"
      }
    `);
  }

  if (website) {
    scripts.push(`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "${website.name}",
        "url": "${website.url}"
      }
    `);
  }

  if (article) {
    scripts.push(`
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${article.title}",
        "description": "${article.description}",
        "author": { "@type": "Person", "name": "${article.author}" },
        "datePublished": "${article.datePublished}",
        ${article.dateModified ? `"dateModified": "${article.dateModified}",` : ''}
        ${article.image ? `"image": "${article.image}",` : ''}
        "url": "${article.url}"
      }
    `);
  }

  if (breadcrumbs && breadcrumbs.length) {
    const itemListElements = breadcrumbs
      .map((b, i) => `
        {
          "@type": "ListItem",
          "position": ${i + 1},
          "name": "${b.name}",
          "item": "${b.url}"
        }`
      )
      .join(',');
    scripts.push(`
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [${itemListElements}]
      }
    `);
  }

  return (
    <>
      {scripts.map((s, idx) => (
        <Helmet key={idx}>
          <script type="application/ld+json">{s}</script>
        </Helmet>
      ))}
    </>
  );
};

export default StructuredData;
