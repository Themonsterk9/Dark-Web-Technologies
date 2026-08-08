import React from 'react';

const Logo: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" aria-label="Dark Web Technologies logo" role="img" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Abstract "D" and "W" shape using lines */}
    <path
      d="M20,80 L20,20 L40,20 C60,20 60,80 40,80 L20,80 Z"
      fill="none"
      stroke="var(--color-accent-red)"
      strokeWidth="4"
      filter="url(#glow)"
    />
    <path
      d="M55,20 L75,20 L75,80 L55,80"
      fill="none"
      stroke="var(--color-accent-red)"
      strokeWidth="4"
      filter="url(#glow)"
    />
    {/* Web-like connections */}
    <circle cx="30" cy="30" r="3" fill="var(--color-accent-red)" />
    <circle cx="70" cy="30" r="3" fill="var(--color-accent-red)" />
    <circle cx="30" cy="70" r="3" fill="var(--color-accent-red)" />
    <circle cx="70" cy="70" r="3" fill="var(--color-accent-red)" />
    <line x1="30" y1="30" x2="70" y2="30" stroke="var(--color-accent-red)" strokeWidth="1" />
    <line x1="30" y1="30" x2="30" y2="70" stroke="var(--color-accent-red)" strokeWidth="1" />
    <line x1="70" y1="30" x2="70" y2="70" stroke="var(--color-accent-red)" strokeWidth="1" />
    <line x1="30" y1="70" x2="70" y2="70" stroke="var(--color-accent-red)" strokeWidth="1" />
  </svg>
);

export default Logo;
