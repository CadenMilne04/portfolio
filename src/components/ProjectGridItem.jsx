import React, { useState, useEffect, useRef } from 'react';

function ProjectGridItem({ project, status, isHighlighted }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const getActionLabel = () => {
        if (status.status === 'healthy') {
            return 'Launch App';
        } else if (status.status === 'demo') {
            return 'Watch Demo';
        } else {
            return 'View Code';
        }
    };

    const getStatusBadge = () => {
        if (status.status === 'healthy') {
            return (
                <div className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live</span>
                </div>
            );
        } else if (status.status === 'static') {
            return (
                <div className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                    <span>App</span>
                </div>
            );
        } else if (status.status === 'demo') {
            return (
                <div className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                    <span>Demo</span>
                </div>
            );
        } else if (status.status === 'warning') {
            return (
                <div className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span>Issues</span>
                </div>
            );
        } else {
            return (
                <div className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span>Down</span>
                </div>
            );
        }
    };

    const getPerformanceMetrics = () => {
        if (status.status === 'healthy') {
            return (
                <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">Uptime:</span>
                        <span className="text-sm font-semibold text-green-600">{status.uptime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">Response:</span>
                        <span className="text-sm font-semibold text-blue-600">{status.responseTime}</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="space-y-1">
                    <div className="text-xs text-gray-400">No metrics</div>
                    <div className="text-xs text-gray-400">available</div>
                </div>
            );
        }
    };

    return (
        <div
            className={`px-4 lg:px-6 py-4 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${isHovered ? 'shadow-lg scale-[1.01]' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => window.open(project.link, '_blank')}
        >
            {/* Mobile Layout */}
            <div className="lg:hidden">
                {/* Mobile Content Row */}
                <div className="flex items-stretch space-x-3 h-20">
                    {/* Full-height Project Thumbnail */}
                    <div className="w-32 flex-shrink-0">
                        <img
                            src={project.img}
                            alt={project.name}
                            className="w-full h-full object-cover rounded border border-gray-200"
                        />
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                        {/* Title and Status Row */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0 pr-2">
                                <h3 className={`text-base font-bold transition-all duration-200 leading-tight ${isHovered
                                        ? 'text-blue-600 transform scale-105'
                                        : 'text-blue-700 hover:text-blue-600'
                                    }`}>
                                    {project.name} ↗
                                </h3>
                                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mt-0.5">
                                    {project.desc}
                                </p>
                            </div>

                            {/* Status Badge */}
                            <div className="flex-shrink-0">
                                {getStatusBadge()}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1 mt-2">
                            {project.logos && project.logos.slice(0, 4).map((logo, i) => (
                                <img
                                    key={i}
                                    src={logo}
                                    alt="Technology"
                                    className="w-4 h-4 rounded"
                                />
                            ))}
                            {project.logos && project.logos.length > 4 && (
                                <div className="w-4 h-4 rounded bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                                    +{project.logos.length - 4}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-10 gap-6 items-center">
                {/* Status Column */}
                <div className="col-span-1 flex justify-center">
                    {getStatusBadge()}
                </div>

                {/* Project Info Column */}
                <div className="col-span-4">
                    <div className="space-y-2">
                        <h3 className={`text-lg font-bold transition-all duration-200 ${isHovered
                                ? 'text-blue-600 transform scale-105'
                                : 'text-blue-700 hover:text-blue-600'
                            }`}>
                            {project.name}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                            {project.desc}
                        </p>
                    </div>
                </div>

                {/* Tech Stack Column */}
                <div className="col-span-2">
                    <div className="flex flex-wrap gap-1">
                        {project.logos && project.logos.slice(0, 4).map((logo, i) => (
                            <div
                                key={i}
                                className="relative group"
                            >
                                <img
                                    src={logo}
                                    alt="Technology"
                                    className={`w-6 h-6 rounded transition-all duration-200 ${isHovered ? 'scale-110 drop-shadow-md' : 'hover:scale-105'
                                        }`}
                                />
                                {/* Add subtle glow to tech logos on hover */}
                                <div className={`absolute inset-0 rounded transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'
                                    } bg-blue-400/20 blur-sm -z-10`}></div>
                            </div>
                        ))}
                        {project.logos && project.logos.length > 4 && (
                            <div className={`w-6 h-6 rounded bg-gray-200 flex items-center justify-center text-xs font-medium transition-all duration-200 ${isHovered ? 'bg-blue-100 text-blue-700 scale-110' : 'text-gray-600'
                                }`}>
                                +{project.logos.length - 4}
                            </div>
                        )}
                    </div>
                </div>

                {/* Preview Column - Made Bigger */}
                <div className="col-span-2">
                    <div className="relative group">
                        <img
                            src={project.img}
                            alt={project.name}
                            className={`w-32 h-20 object-cover rounded-lg border-2 transition-all duration-300 ${isHovered
                                ? 'border-blue-500 shadow-xl scale-110 brightness-110'
                                : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                                }`}
                        />
                        {/* Add a subtle glow effect */}
                        <div className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                            } bg-blue-400/10 blur-xl -z-10`}></div>
                    </div>
                </div>

                {/* Actions Dropdown Column */}
                <div className="col-span-1 flex justify-end items-center">
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowDropdown(!showDropdown);
                            }}
                            className="w-8 h-8 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                            </svg>
                        </button>

                        {showDropdown && (
                            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                                <div className="py-1">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(project.link, '_blank');
                                            setShowDropdown(false);
                                        }}
                                        className="block w-full text-right px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap"
                                    >
                                        {getActionLabel()}
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            // TODO: Implement read more functionality
                                            setShowDropdown(false);
                                        }}
                                        className="block w-full text-right px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectGridItem;
