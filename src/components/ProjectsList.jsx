import React from 'react';
import ProjectsGrid from './ProjectsGrid';

function ProjectsList({ projects, appStatuses, getProjectStatus }) {
  return (
    <ProjectsGrid 
      projects={projects}
      appStatuses={appStatuses}
      getProjectStatus={getProjectStatus}
    />
  );
}

export default ProjectsList;
