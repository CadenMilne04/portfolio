import React, { useState, useEffect } from 'react';
import { getApplicationStatuses, getStatusColor, getStatusIcon } from '../services/appStatusService';
import projectsData from '../projects.json';

function Dashboard() {
    const [appStatuses, setAppStatuses] = useState({});
    const [loading, setLoading] = useState(true);
    const [lastRefresh, setLastRefresh] = useState(new Date());

    useEffect(() => {
        loadAppStatuses();
        // Auto-refresh every 30 seconds
        const interval = setInterval(loadAppStatuses, 30000);
        return () => clearInterval(interval);
    }, []);

    const loadAppStatuses = async () => {
        try {
            const statuses = await getApplicationStatuses();
            setAppStatuses(statuses);
            setLastRefresh(new Date());
        } catch (error) {
            console.error('Failed to load app statuses:', error);
        } finally {
            setLoading(false);
        }
    };

    const refreshStatuses = () => {
        setLoading(true);
        loadAppStatuses();
    };

    const getProjectStatus = (projectName) => {
        return appStatuses[projectName] || { status: 'unknown', uptime: 'N/A', responseTime: 'N/A' };
    };

    return (
        <div className="h-screen bg-gray-50 overflow-hidden">
            {/* Header Section */}
            <div className="h-full flex flex-col px-8 py-6">
                <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
                    {/* Profile Header */}
                    <div className="flex items-center justify-between mb-6 flex-shrink-0">
                        <div className="flex items-center space-x-6">
                            <img
                                src="/Headshot.png"
                                alt="Caden Milne"
                                className="w-14 h-14 rounded-full border-2 border-gray-300 shadow-sm"
                            />
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 mb-1">Caden Milne</h1>
                                <p className="text-base text-gray-600">Software Engineer & Full-Stack Developer</p>
                                <div className="flex space-x-3 mt-1">
                                    <a href="https://github.com/CadenMilne04" target="_blank" rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-700 transition-colors">
                                        <img src="/GitHubLogo.png" alt="GitHub" className="w-4 h-4" />
                                    </a>
                                    <a href="https://linkedin.com/in/caden-milne" target="_blank" rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-700 transition-colors">
                                        <img src="/LinkedInLogo.png" alt="LinkedIn" className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Status Overview */}
                        <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xs font-semibold text-gray-900">System Status</h3>
                                <button
                                    onClick={refreshStatuses}
                                    className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors"
                                    disabled={loading}
                                >
                                    {loading ? 'Refreshing...' : 'Refresh'}
                                </button>
                            </div>
                            <div className="text-xs text-gray-600">
                                <p>Last updated: {lastRefresh.toLocaleTimeString()}</p>
                                <p className="mt-1">
                                    <span className="text-green-500">●</span> {Object.values(appStatuses).filter(s => s.status === 'healthy').length} Live
                                    <span className="ml-2 text-blue-500">■</span> {Object.values(appStatuses).filter(s => s.status === 'static').length} Static
                                    <span className="ml-2 text-gray-500">▶</span> {Object.values(appStatuses).filter(s => s.status === 'demo').length} Demo
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
                        {/* Left Sidebar - About & Stats */}
                        <div className="col-span-4 flex flex-col space-y-4 overflow-hidden h-full">
                            {/* About Section */}
                            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm flex-shrink-0">
                                <h2 className="text-lg font-semibold text-gray-900 mb-2">About</h2>
                                <p className="text-gray-700 leading-relaxed text-sm mb-3">
                                    Full-stack software engineer with experience in web development, systems programming, and AI integration.
                                    I build everything from enterprise web applications to low-level system utilities.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Currently focused on creating scalable web applications and exploring the intersection of AI and traditional software development.
                                    This dashboard monitors the health and status of my deployed applications in real-time.
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-3 flex-shrink-0">
                                <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm text-center">
                                    <h4 className="text-xl font-bold text-gray-900">{projectsData.length}</h4>
                                    <p className="text-xs text-gray-600">Total Projects</p>
                                </div>
                                <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm text-center">
                                    <h4 className="text-xl font-bold text-green-600">
                                        {Object.values(appStatuses).filter(s => s.status === 'healthy').length}
                                    </h4>
                                    <p className="text-xs text-gray-600">Live Apps</p>
                                </div>
                                <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm text-center">
                                    <h4 className="text-xl font-bold text-blue-600">
                                        {Object.values(appStatuses).filter(s => s.status === 'static').length}
                                    </h4>
                                    <p className="text-xs text-gray-600">Static Projects</p>
                                </div>
                                <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm text-center">
                                    <h4 className="text-xl font-bold text-gray-600">
                                        {Object.values(appStatuses).filter(s => s.status === 'demo').length}
                                    </h4>
                                    <p className="text-xs text-gray-600">Demo Videos</p>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm flex-shrink-0">
                                <h3 className="text-base font-semibold text-gray-900 mb-2">Technologies</h3>
                                <div className="flex flex-wrap gap-1">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Node.js</span>
                                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">JavaScript</span>
                                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Python</span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">C</span>
                                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Express</span>
                                    <span className="px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded">MongoDB</span>
                                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Tailwind</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Main Content - Projects */}
                        <div className="col-span-8 pb-4">
                            <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-[calc(100vh-200px)] flex flex-col">
                                <div className="px-4 py-3 border-b border-gray-200 flex-shrink-0">
                                    <h2 className="text-lg font-semibold text-gray-900">Projects & Applications</h2>
                                </div>
                                <div className="flex-1 overflow-y-auto custom-scrollbar">
                                    <div className="divide-y divide-gray-200">
                                        {projectsData.map((project, index) => {
                                            const status = getProjectStatus(project.name);
                                            return (
                                                <div key={index} className="px-4 py-3 hover:bg-gray-50 transition-colors">
                                                    <div className="flex items-center space-x-3">
                                                        {/* Project Info - Left Side */}
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center space-x-2 mb-1">
                                                                <div className="flex items-center space-x-1">
                                                                    <span className={`text-sm ${getStatusColor(status.status)}`}>
                                                                        {getStatusIcon(status.status)}
                                                                    </span>
                                                                    <h3 className="text-base font-semibold text-gray-900">{project.name}</h3>
                                                                </div>
                                                                <span className={`px-2 py-0.5 text-xs rounded-full font-medium capitalize ${status.status === 'healthy' ? 'bg-green-100 text-green-800' :
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
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
