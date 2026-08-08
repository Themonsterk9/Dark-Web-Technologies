// src/components/AdContainer.tsx
import React, { useEffect, useRef } from 'react';
import './AdContainer.css';

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

interface AdContainerProps {
  slotId?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * AdSense-Ready Ad Container Component.
 *
 * Placed in strategic content locations (articles, tutorials, build logs, technology).
 * Safely stays disabled/hidden when no official VITE_ADSENSE_CLIENT_ID or slotId is configured,
 * ensuring no fake ads, fake placeholders, or layout disruption occur.
 *
 * When VITE_ADSENSE_CLIENT_ID and slotId are present, it loads the official Google AdSense
 * script once and initialises the responsive ad unit.
 */
const AdContainer: React.FC<AdContainerProps> = ({
  slotId,
  format = 'auto',
  responsive = true,
  className = '',
  style,
}) => {
  const adRef = useRef<HTMLModElement>(null);
  const client = (import.meta.env.VITE_ADSENSE_CLIENT_ID as string | undefined)?.trim();

  // If no official client ID or slot ID is configured, keep the component disabled/hidden.
  if (!client || !slotId) {
    return null;
  }

  useEffect(() => {
    // Inject official AdSense script once if not already present
    const scriptId = 'adsense-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }

    // Initialise ad slot
    try {
      if (typeof window !== 'undefined' && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense initialization error:', err);
    }
  }, [client, slotId]);

  return (
    <aside
      className={`ad-container ${className}`.trim()}
      aria-label="Advertisement"
      role="complementary"
    >
      <span className="ad-label" aria-hidden="true">
        Advertisement
      </span>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style || { display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </aside>
  );
};

export default AdContainer;
