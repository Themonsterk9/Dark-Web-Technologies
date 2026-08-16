// src/components/AdContainer.tsx
import React from 'react';
import './AdContainer.css';

interface AdContainerProps {
  format?: 'auto' | 'fluid' | 'banner' | 'horizontal';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Content Section Separator Component.
 *
 * Placed in content locations (articles, tutorials, build logs, technology).
 */
const AdContainer: React.FC<AdContainerProps> = ({
  className = '',
  style,
}) => {
  return (
    <aside
      className={`ad-container ${className}`.trim()}
      aria-label="Content Separator"
      role="complementary"
      style={style}
    >
      <div className="content-placement" />
    </aside>
  );
};

export default AdContainer;
