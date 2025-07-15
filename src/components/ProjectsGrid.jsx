import React, { useState, useMemo } from 'react';
import ProjectGridItem from './ProjectGridItem';

function ProjectsGrid({ projects, appStatuses, getProjectStatus }) {
  const [activeFilters, setActiveFilters] = useState(['all']);

  // Toggle filter function
  const toggleFilter = (filterKey) => {
    if (filterKey === 'all') {
      setActiveFilters(['all']);
    } else {
      // If clicking a specific filter, remove 'all' and toggle this filter
      const newFilters = activeFilters.includes('all') 
        ? [filterKey] 
        : activeFilters.includes(filterKey)
          ? activeFilters.filter(f => f !== filterKey)
          : [...activeFilters.filter(f => f !== 'all'), filterKey];
      
      setActiveFilters(newFilters.length === 0 ? ['all'] : newFilters);
    }
  };

  // Filter projects to only show selected types
  const filteredProjects = useMemo(() => {
    const projectsWithStatus = projects.map(project => ({
      ...project,
      statusData: getProjectStatus(project.name)
    }));

    if (activeFilters.includes('all') || activeFilters.length === 0) {
      return projectsWithStatus;
    }

    // Only show projects that match the selected filters
    return projectsWithStatus.filter(project => {
      const status = project.statusData.status;
      return activeFilters.some(filter => {
        switch (filter) {
          case 'live':
            return status === 'healthy';
          case 'static':
            return status === 'static';
          case 'videos':
            return status === 'demo';
          default:
            return false;
        }
      });
    });
  }, [projects, appStatuses, activeFilters, getProjectStatus]);

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

  const getVisibleProjectsCount = () => {
    return filteredProjects.length;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full lg:h-[calc(100vh-200px)] flex flex-col">
      {/* Header with Filters */}
      <div className="px-4 lg:px-6 py-4 border-b border-gray-200 flex-shrink-0">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-2">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Projects & Applications</h2>
          <div className="text-sm text-gray-500">
            {getVisibleProjectsCount()} of {projects.length} projects
          </div>
        </div>
        
        {/* Filter Checkboxes */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700">Filters</h3>
          <div className="flex flex-wrap gap-3 lg:gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={activeFilters.includes('all')}
                onChange={() => toggleFilter('all')}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">All Projects</span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {projects.length}
              </span>
            </label>
            
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={activeFilters.includes('live')}
                onChange={() => toggleFilter('live')}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="text-sm text-gray-700">Live Apps</span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {getFilterCount('live')}
              </span>
            </label>
            
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={activeFilters.includes('static')}
                onChange={() => toggleFilter('static')}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Apps</span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {getFilterCount('static')}
              </span>
            </label>
            
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={activeFilters.includes('videos')}
                onChange={() => toggleFilter('videos')}
                className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
              />
              <span className="text-sm text-gray-700">Demo Videos</span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {getFilterCount('videos')}
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Grid Header - Desktop only */}
      <div className="hidden lg:block px-6 py-3 border-b border-gray-100 bg-gray-50 flex-shrink-0">
        <div className="grid grid-cols-10 gap-6 text-xs font-semibold text-gray-600 uppercase tracking-wide">
          <div className="col-span-1 text-center">Status</div>
          <div className="col-span-4">Project</div>
          <div className="col-span-2">Tech Stack</div>
          <div className="col-span-2">Preview</div>
          <div className="col-span-1 flex justify-center">Actions</div>
        </div>
      </div>

      {/* Scrollable Grid Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="divide-y divide-gray-100">
          {filteredProjects.map((project) => (
            <ProjectGridItem
              key={project.name}
              project={project}
              status={project.statusData}
              isHighlighted={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsGrid;
