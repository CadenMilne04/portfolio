import React from 'react';

function ProjectItem({ project, status }) {
  return (
    <div className="px-4 py-3 hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-3">
        {/* Project Info - Left Side */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <div className="flex items-center space-x-1">
              <span className={`text-sm ${getStatusColor(status.status)}`}>
              </span>
              <h3 className="text-base font-semibold text-gray-900">{project.name}</h3>
            </div>
            <span className={`px-2 py-0.5 text-xs rounded-full font-medium capitalize ${
              status.status === 'healthy' ? 'bg-green-100 text-green-800' :
              status.status === 'static' ? 'bg-blue-100 text-blue-800' :
              status.status === 'demo' ? 'bg-gray-100 text-gray-800' :
              'bg-gray-100 text-gray-600'
            }`}>
              {status.status}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mb-2 line-clamp-1">{project.desc}</p>
          
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div>
              <span className="font-medium">Uptime:</span> {status.uptime}
            </div>
            <div>
              <span className="font-medium">Response:</span> {status.responseTime}
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-medium">Tech:</span>
              <div className="flex space-x-1">
                {project.logos && project.logos.slice(0, 3).map((logo, i) => (
                  <img 
                    key={i}
                    src={logo} 
                    alt="Technology"
                    className="w-3 h-3 rounded opacity-70"
                  />
                ))}
                {project.logos && project.logos.length > 3 && (
                  <span className="text-gray-400">+{project.logos.length - 3}</span>
                )}
              </div>
            </div>
            <div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>View</span>
                <img src={project.host} alt="Host" className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Thumbnail - Right Side */}
        <div className="flex-shrink-0">
          <img 
            src={project.img} 
            alt={project.name}
            className="w-24 h-16 object-cover rounded border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
