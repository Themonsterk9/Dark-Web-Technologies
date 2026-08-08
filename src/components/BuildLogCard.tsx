import React from 'react';
import Card from './Card';
import type { BuildLog } from '../buildLogs/types';
import './BuildLogCard.css';

type BuildLogCardProps = {
  log: BuildLog;
};

const BuildLogCard: React.FC<BuildLogCardProps> = ({ log }) => {
  const { title, status, date, excerpt, tags, slug } = log;
  return (
    <Card title={title} status={status} link={`/build-log/${slug}`}>
      <div className="buildlog-meta">
        <span className="date">{new Date(date).toLocaleDateString()}</span>
        <span className="status">{status}</span>
      </div>
      <p className="excerpt">{excerpt}</p>
      <div className="tags">
        {tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </Card>
  );
};

export default BuildLogCard;
