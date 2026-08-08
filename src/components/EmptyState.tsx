import React from 'react';

interface EmptyStateProps {
  message?: string;
}

/**
 * Generic empty-state component displayed when a list has no items.
 */
const EmptyState: React.FC<EmptyStateProps> = ({
  message = 'Nothing to display yet.',
}) => (
  <div
    style={{
      padding: '3rem 1rem',
      textAlign: 'center',
      color: '#64748b',
      border: '1px dashed rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
      marginTop: '1.5rem',
    }}
  >
    <p style={{ fontSize: '1rem' }}>{message}</p>
  </div>
);

export default EmptyState;
