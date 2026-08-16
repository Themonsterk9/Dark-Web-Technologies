// src/components/AdContainer.tsx
import React from 'react';
import './AdContainer.css';

interface AdContainerProps {
  zoneId?: string;
  format?: 'auto' | 'fluid' | 'banner' | 'horizontal';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Monetag Monetization Ad Placement Wrapper Component.
 *
 * Placed in strategic content locations (articles, tutorials, build logs, technology).
 * Serves as a non-intrusive ad placement container compatible with Monetag monetization tag integration.
 */
const AdContainer: React.FC<AdContainerProps> = ({
  zoneId,
  format = 'auto',
  className = '',
  style,
}) => {
  return (
    <aside
      className={`ad-container monetag-ad-unit ${className}`.trim()}
      aria-label="Advertisement"
      role="complementary"
      data-monetag-zone={zoneId}
      data-monetag-format={format}
      style={style}
    >
      <span className="ad-label" aria-hidden="true">
        Advertisement
      </span>
      <div className="monetag-placement" />
    </aside>
  );
};

export default AdContainer;
