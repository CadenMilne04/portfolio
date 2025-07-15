import React, { useState, useMemo } from 'react';
import ProjectGridItem from './ProjectGridItem';

function ProjectsGrid({ projects, appStatuses, getProjectStatus }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    const projectsWithStatus = projects.map(project => ({
      ...project,
      statusData: getProjectStatus(project.name)
    }));

    if (activeFilter === 'all') {
      return projectsWithStatus;
    }

    // Separate filtered and non-filtered projects
    const filtered = projectsWithStatus.filter(project => {
      const status = project.statusData.status;
      switch (activeFilter) {
        case 'live':
          return status === 'healthy';
        case 'static':
          return status === 'static';
        case 'videos':
          return status === 'demo';
        default:
          return true;
      }
    });

    const others = projectsWithStatus.filter(project => {
      const status = project.statusData.status;
      switch (activeFilter) {
        case 'live':
          return status !== 'healthy';
        case 'static':
          return status !== 'static';
        case 'videos':
          return status !== 'demo';
        default:
          return false;
      }
    });

    // Return filtered items first, then others
    return [...filtered, ...others];
  }, [projects, appStatuses, activeFilter, getProjectStatus]);

  const getFilterCount = (filterType) => {
    switch (filterType) {
      case 'live':
        return Object.values(appStatuses).filter(s => s.status === 'healthy').length;
      case 'static':
        return Object.values(appStatuses).filter(s => s.status === 'static').length;
      case 'videos':
        return Object.values(appStatuses).filter(s => s.status === 'demo').length;
      default:
        return projects.length;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-[calc(100vh-200px)] flex flex-col">
      {/* Header with Filters */}
      <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Projects & Applications</h2>
          <div className="text-sm text-gray-500">
            {filteredProjects.length} projects
          </div>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {[
            { key: 'all', label: 'All Projects', count: projects.length },
            { key: 'live', label: 'Live Apps', count: getFilterCount('live') },
            { key: 'static', label: 'Static Sites', count: getFilterCount('static') },
            { key: 'videos', label: 'Demo Videos', count: getFilterCount('videos') }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeFilter === filter.key
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {filter.label}
              <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                activeFilter === filter.key
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid Header */}
      <div className="px-6 py-3 border-b border-gray-100 bg-gray-50 flex-shrink-0">
        <div className="grid grid-cols-12 gap-6 text-xs font-semibold text-gray-600 uppercase tracking-wide">
          <div className="col-span-1 text-center">Status</div>
          <div className="col-span-4">Project</div>
          <div className="col-span-2">Performance</div>
          <div className="col-span-2">Tech Stack</div>
          <div className="col-span-2">Preview</div>
          <div className="col-span-1 flex justify-center">Actions</div>
        </div>
      </div>

      {/* Scrollable Grid Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="divide-y divide-gray-100">
          {filteredProjects.map((project, index) => (
            <ProjectGridItem
              key={project.name}
              project={project}
              status={project.statusData}
              isHighlighted={activeFilter !== 'all' && index < getFilterCount(activeFilter)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsGrid;
