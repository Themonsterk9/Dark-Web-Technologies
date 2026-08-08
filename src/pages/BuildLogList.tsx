import React, { useState } from 'react';
import BuildLogCard from '../components/BuildLogCard';
import BuildLogFilter from '../components/BuildLogFilter';
import EmptyState from '../components/EmptyState';
import { buildLogs } from '../buildLogs/buildLogsData';
import type { BuildLog } from '../buildLogs/types';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import './BuildLogList.css';

const BuildLogList: React.FC = () => {
  const [projectFilter, setProjectFilter] = useState<
    'All' | 'Aether AI' | 'Gringotts Wizarding Bank' | 'Voyager Chat' | 'Project Blackout'
  >('All');

  const filteredLogs =
    projectFilter === 'All'
      ? buildLogs
      : buildLogs.filter((log) => log.project === projectFilter);

  // sort newest first
  const sortedLogs = [...filteredLogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Meta
        title="Development Journal – Dark Web Technologies"
        description="Chronological build logs and development journal entries documenting the progress of Dark Web Technologies projects."
      />
      <Breadcrumbs />
      <main className="buildlog-list container">
        <section className="hero">
          <h1>Development Journal</h1>
          <p>Chronological log documenting engineering progress across our projects.</p>
        </section>
        <BuildLogFilter onFilterChange={setProjectFilter} />
        {sortedLogs.length === 0 ? (
          <EmptyState message="No development build logs are currently available for this selection." />
        ) : (
          <div className="log-grid">
            {sortedLogs.map((log: BuildLog) => (
              <BuildLogCard key={log.slug} log={log} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default BuildLogList;
