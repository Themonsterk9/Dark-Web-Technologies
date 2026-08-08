import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getCanonicalUrl } from './canonical';

interface MetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
}

/**
 * Renders standard SEO meta tags using react-helmet-async.
 * All pages should include this component.
 */
const Meta: React.FC<MetaProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage,
  ogUrl,
}) => {
  const canonicalUrl = canonical ?? getCanonicalUrl();
  const ogUrlFinal = ogUrl ?? canonicalUrl;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {ogUrlFinal && <meta property="og:url" content={ogUrlFinal} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default Meta;
