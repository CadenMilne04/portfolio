import React from 'react';
import ProjectsGrid from './ProjectsGrid';

function ProjectsList({ projects }) {
  return (
    <ProjectsGrid 
      projects={projects}
    />
  );
}

export default ProjectsList;
