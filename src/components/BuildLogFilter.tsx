import React, { useState } from 'react';

type ProjectOption = 'All' | 'Aether AI' | 'Gringotts Wizarding Bank' | 'Voyager Chat' | 'Project Blackout';

const projects: ProjectOption[] = ['All', 'Aether AI', 'Gringotts Wizarding Bank', 'Voyager Chat', 'Project Blackout'];

interface BuildLogFilterProps {
  onFilterChange: (project: ProjectOption) => void;
}

const BuildLogFilter: React.FC<BuildLogFilterProps> = ({ onFilterChange }) => {
  const [selected, setSelected] = useState<ProjectOption>('All');

  const handleClick = (project: ProjectOption) => {
    setSelected(project);
    onFilterChange(project);
  };

  return (
    <div className="buildlog-filter">
      {projects.map((proj) => (
        <button
          key={proj}
          className={proj === selected ? 'active' : ''}
          onClick={() => handleClick(proj)}
        >
          {proj}
        </button>
      ))}
    </div>
  );
};

export default BuildLogFilter;
