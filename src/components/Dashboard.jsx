import React, { useState, useEffect } from 'react';
import { getApplicationStatuses } from '../services/appStatusService';
import projectsData from '../projects.json';
import ProjectsList from './ProjectsList';
import GitHubHeatmap from './GitHubHeatmap';
import ZeldaEasterEgg from './ZeldaEasterEgg';
import EasterEggHint from './EasterEggHint';

function Dashboard() {
    const [appStatuses, setAppStatuses] = useState({});
    const [loading, setLoading] = useState(true);
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const [aboutTooltip, setAboutTooltip] = useState(null);
    const [mobileTooltip, setMobileTooltip] = useState(null);

    useEffect(() => {
        loadAppStatuses();
        // Auto-refresh every 30 seconds
        const interval = setInterval(loadAppStatuses, 30000);

        return () => {
            clearInterval(interval);
        };
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

    const handleAboutHover = (item, event) => {
        setAboutTooltip({
            x: event.clientX,
            y: event.clientY,
            content: item.tooltip,
            thumbnail: item.thumbnail
        });
    };

    const handleAboutMove = (event) => {
        if (aboutTooltip) {
            setAboutTooltip(prev => ({
                ...prev,
                x: event.clientX,
                y: event.clientY
            }));
        }
    };

    const handleAboutLeave = () => {
        setAboutTooltip(null);
    };

    const toggleMobileTooltip = (item) => {
        if (mobileTooltip && mobileTooltip.content === item.tooltip) {
            setMobileTooltip(null);
        } else {
            setMobileTooltip({
                content: item.tooltip,
                thumbnail: item.thumbnail,
                link: item.link
            });
        }
    };

    const aboutItems = [
        {
            text: "University of Pittsburgh",
            colors: "text-gray-800 font-bold drop-shadow-lg shadow-blue-400",
            hoverColors: "hover:drop-shadow-xl hover:shadow-blue-500 hover:-translate-y-0.5 transition-all duration-200",
            link: "https://www.pitt.edu/",
            tooltip: "Started my Computer Science journey at Pitt, diving deep into algorithms, data structures, and software engineering fundamentals. Built a strong foundation in programming while getting involved in the vibrant tech community.",
            thumbnail: "/pitt_tooltip.png"
        },
        {
            text: "Carnegie Mellon's Software Engineering Institute",
            colors: "text-gray-800 font-bold drop-shadow-lg shadow-red-400",
            hoverColors: "hover:drop-shadow-xl hover:shadow-red-500 hover:-translate-y-0.5 transition-all duration-200",
            link: "https://insights.sei.cmu.edu/blog/a-5-stage-process-for-automated-testing-and-delivery-of-complex-software-systems/",
            tooltip: "Spent 2024 as a Software Engineer Intern developing cutting-edge automated testing frameworks for complex software systems. Contributed to mission-critical research that helps organizations deliver reliable software at scale and published a blog post about it.",
            thumbnail: "/sei_tooltip.png"
        },
        {
            text: "published a blog post",
            colors: "text-gray-800 font-bold drop-shadow-lg shadow-red-400",
            hoverColors: "hover:drop-shadow-xl hover:shadow-red-500 hover:-translate-y-0.5 transition-all duration-200",
            link: "https://insights.sei.cmu.edu/blog/a-5-stage-process-for-automated-testing-and-delivery-of-complex-software-systems/",
            tooltip: "Published research on DevOps and automating software updates - a comprehensive 5-stage process for automated testing and delivery of complex software systems at enterprise scale.",
            thumbnail: "/cmublog_thumbnail.png"
        },
        {
            text: "Bank of New York",
            colors: "text-gray-800 font-bold drop-shadow-lg shadow-blue-600",
            hoverColors: "hover:drop-shadow-xl hover:shadow-blue-700 hover:-translate-y-0.5 transition-all duration-200",
            link: "https://www.bny.com/",
            tooltip: "Currently serving as Summer 2025 Software Engineering Intern, working on enterprise-scale financial systems that handle billions in transactions. Building robust, secure applications for one of the world's oldest financial institutions.",
            thumbnail: "/bny_tooltip.jpeg"
        },
        {
            text: "SteelHacks XI",
            colors: "text-gray-800 font-bold drop-shadow-lg shadow-yellow-400",
            hoverColors: "hover:drop-shadow-xl hover:shadow-yellow-500 hover:-translate-y-0.5 transition-all duration-200",
            link: "https://steelhacks-xi.devpost.com/project-gallery",
            tooltip: "Achieved first place at Pittsburgh's premier hackathon with an innovative solution built in just 36 hours. Demonstrated rapid prototyping skills and creative problem-solving under intense pressure alongside an amazing team.",
            thumbnail: ["/steelhacks_tooltip_1.JPEG", "/steelhacks_tooltop_2.JPEG"]
        },
        {
            text: "AI and modern web applications",
            colors: "text-gray-800 font-bold drop-shadow-lg shadow-indigo-400",
            hoverColors: "hover:drop-shadow-xl hover:shadow-indigo-500 hover:-translate-y-0.5 transition-all duration-200",
            link: "#",
            tooltip: "Passionate about exploring how artificial intelligence can enhance traditional software development. Currently building intelligent applications and researching ML-powered development workflows that make coding more efficient and intuitive.",
            thumbnail: "/ai_tooltip.avif"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 overflow-hidden">
            {/* Header Section */}
            <div className="h-full flex flex-col px-4 md:px-8 py-4 md:py-6">
                <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
                    {/* Profile Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 flex-shrink-0 gap-4">
                        <div className="flex items-center space-x-4 md:space-x-6">
                            <img
                                src="/Headshot.png"
                                alt="Caden Milne"
                                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-300 shadow-sm"
                            />
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Caden Milne</h1>
                                <p className="text-sm md:text-base text-gray-600">Software Engineer</p>
                                <div className="flex items-center space-x-3 mt-1">
                                    <div className="flex space-x-3">
                                        <a href="https://github.com/CadenMilne04" target="_blank" rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-gray-700 transition-colors">
                                            <img src="/GitHubLogo.png" alt="GitHub" className="w-4 h-4" />
                                        </a>
                                        <a href="https://linkedin.com/in/caden-milne" target="_blank" rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-gray-700 transition-colors">
                                            <img src="/LinkedInLogo.png" alt="LinkedIn" className="w-4 h-4" />
                                        </a>
                                        <a href="mailto:cadenmilne04@gmail.com" target="_blank" rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-gray-700 transition-colors">
                                            <img src="/GmailLogo.png" alt="Gmail" className="w-4 h-4" />
                                        </a>
                                    </div>
                                    <span className="text-gray-300">|</span>
                                    <a href="https://drive.google.com/file/d/1p2inT9qGLjOhfvW28fB7kBGTrsj6kKWC/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors flex items-center space-x-1">
                                        <span>Resume</span>
                                        <span>↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Status Overview */}
                        <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm w-full md:w-auto">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xs font-semibold text-gray-900">System Status</h3>
                                <button
                                    onClick={refreshStatuses}
                                    className="p-1 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
                                    disabled={loading}
                                    title="Refresh status"
                                >
                                    <svg
                                        className={`w-4 h-4 text-gray-600 hover:text-gray-800 transition-colors ${loading ? 'animate-spin' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Mobile Layout - Stacked */}
                            <div className="md:hidden text-xs text-gray-600 space-y-1">
                                <p>Updated: {lastRefresh.toLocaleTimeString()}</p>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center">
                                        <span className="text-green-500">●</span>
                                        <span className="ml-1">{Object.values(appStatuses).filter(s => s.status === 'healthy').length} Live</span>
                                    </span>
                                    <span>{Object.values(appStatuses).filter(s => s.status === 'static').length} Apps</span>
                                    <span>{Object.values(appStatuses).filter(s => s.status === 'demo').length} Demos</span>
                                </div>
                            </div>

                            {/* Desktop Layout - Original */}
                            <div className="hidden md:block text-xs text-gray-600">
                                <p>Last updated: {lastRefresh.toLocaleTimeString()}</p>
                                <p className="mt-1">
                                    <span className="text-green-500">●</span> {Object.values(appStatuses).filter(s => s.status === 'healthy').length} Live
                                    <span className="ml-2 text-gray-600">{Object.values(appStatuses).filter(s => s.status === 'static').length} Apps</span>
                                    <span className="ml-2 text-gray-600">{Object.values(appStatuses).filter(s => s.status === 'demo').length} Demos</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6 flex-1 min-h-0">
                        {/* Left Sidebar - About & Stats */}
                        <div className="lg:col-span-4 min-h-0">
                            <div className="flex flex-col lg:h-[calc(100vh-200px)] lg:max-h-[calc(100vh-200px)] lg:overflow-hidden gap-4 lg:gap-0">
                                {/* About Section - Enhanced */}
                                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm flex-shrink-0 relative">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-3">About</h2>
                                    <div className="text-gray-700 leading-relaxed text-sm space-y-2">
                                        <p>
                                            I'm a passionate software engineer studying Computer Science at{' '}
                                            <span
                                                className={`${aboutItems[0].colors} ${aboutItems[0].hoverColors} cursor-pointer transition-all duration-200 hover:scale-105 hover:drop-shadow-sm inline-block`}
                                                onClick={(e) => {
                                                    if (window.innerWidth >= 1024) {
                                                        window.open(aboutItems[0].link, '_blank');
                                                    } else {
                                                        toggleMobileTooltip(aboutItems[0]);
                                                    }
                                                }}
                                                onMouseEnter={(e) => window.innerWidth >= 1024 && handleAboutHover(aboutItems[0], e)}
                                                onMouseMove={(e) => window.innerWidth >= 1024 && handleAboutMove(e)}
                                                onMouseLeave={() => window.innerWidth >= 1024 && handleAboutLeave()}
                                            >
                                                {aboutItems[0].text} ↗
                                            </span>, with experience building real-world applications through internships at{' '}
                                            <span
                                                className={`${aboutItems[1].colors} ${aboutItems[1].hoverColors} cursor-pointer transition-all duration-200 hover:scale-105 hover:drop-shadow-sm inline-block`}
                                                onClick={(e) => {
                                                    if (window.innerWidth >= 1024) {
                                                        window.open(aboutItems[1].link, '_blank');
                                                    } else {
                                                        toggleMobileTooltip(aboutItems[1]);
                                                    }
                                                }}
                                                onMouseEnter={(e) => window.innerWidth >= 1024 && handleAboutHover(aboutItems[1], e)}
                                                onMouseMove={(e) => window.innerWidth >= 1024 && handleAboutMove(e)}
                                                onMouseLeave={() => window.innerWidth >= 1024 && handleAboutLeave()}
                                            >
                                                {aboutItems[1].text} ↗
                                            </span>{' '}(where I{' '}
                                            <span
                                                className={`${aboutItems[2].colors} ${aboutItems[2].hoverColors} cursor-pointer transition-all duration-200 hover:scale-105 inline-block`}
                                                onClick={(e) => {
                                                    if (window.innerWidth >= 1024) {
                                                        window.open(aboutItems[2].link, '_blank');
                                                    } else {
                                                        toggleMobileTooltip(aboutItems[2]);
                                                    }
                                                }}
                                                onMouseEnter={(e) => window.innerWidth >= 1024 && handleAboutHover(aboutItems[2], e)}
                                                onMouseMove={(e) => window.innerWidth >= 1024 && handleAboutMove(e)}
                                                onMouseLeave={() => window.innerWidth >= 1024 && handleAboutLeave()}
                                            >
                                                {aboutItems[2].text} ↗
                                            </span>) and{' '}
                                            <span
                                                className={`${aboutItems[3].colors} ${aboutItems[3].hoverColors} cursor-pointer transition-all duration-200 hover:scale-105 hover:drop-shadow-sm inline-block`}
                                                onClick={(e) => {
                                                    if (window.innerWidth >= 1024) {
                                                        window.open(aboutItems[3].link, '_blank');
                                                    } else {
                                                        toggleMobileTooltip(aboutItems[3]);
                                                    }
                                                }}
                                                onMouseEnter={(e) => window.innerWidth >= 1024 && handleAboutHover(aboutItems[3], e)}
                                                onMouseMove={(e) => window.innerWidth >= 1024 && handleAboutMove(e)}
                                                onMouseLeave={() => window.innerWidth >= 1024 && handleAboutLeave()}
                                            >
                                                {aboutItems[3].text} ↗
                                            </span>.
                                        </p>

                                        <p>
                                            I won first place at{' '}
                                            <span
                                                className={`${aboutItems[4].colors} ${aboutItems[4].hoverColors} cursor-pointer transition-all duration-200 hover:scale-105 hover:drop-shadow-sm inline-block`}
                                                onClick={(e) => {
                                                    if (window.innerWidth >= 1024) {
                                                        window.open(aboutItems[4].link, '_blank');
                                                    } else {
                                                        toggleMobileTooltip(aboutItems[4]);
                                                    }
                                                }}
                                                onMouseEnter={(e) => window.innerWidth >= 1024 && handleAboutHover(aboutItems[4], e)}
                                                onMouseMove={(e) => window.innerWidth >= 1024 && handleAboutMove(e)}
                                                onMouseLeave={() => window.innerWidth >= 1024 && handleAboutLeave()}
                                            >
                                                {aboutItems[4].text} ↗
                                            </span>{' '}
                                            and love exploring{' '}
                                            <span
                                                className={`${aboutItems[5].colors} ${aboutItems[5].hoverColors} cursor-pointer transition-all duration-200 hover:scale-105 hover:drop-shadow-sm inline-block`}
                                                onClick={(e) => {
                                                    if (window.innerWidth >= 1024) {
                                                        window.open(aboutItems[5].link, '_blank');
                                                    } else {
                                                        toggleMobileTooltip(aboutItems[5]);
                                                    }
                                                }}
                                                onMouseEnter={(e) => window.innerWidth >= 1024 && handleAboutHover(aboutItems[5], e)}
                                                onMouseMove={(e) => window.innerWidth >= 1024 && handleAboutMove(e)}
                                                onMouseLeave={() => window.innerWidth >= 1024 && handleAboutLeave()}
                                            >
                                                {aboutItems[5].text} ↗
                                            </span>. This dashboard monitors all my deployed applications in real-time.
                                        </p>
                                    </div>

                                    {/* Mobile Tooltip Display */}
                                    {mobileTooltip && (
                                        <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                            {mobileTooltip.thumbnail && (
                                                <div className="w-full mb-3">
                                                    {Array.isArray(mobileTooltip.thumbnail) ? (
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {mobileTooltip.thumbnail.map((img, index) => (
                                                                <img
                                                                    key={index}
                                                                    src={img}
                                                                    alt={`Thumbnail ${index + 1}`}
                                                                    className="w-full h-20 object-cover rounded border border-gray-200"
                                                                />
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <img
                                                            src={mobileTooltip.thumbnail}
                                                            alt="Thumbnail"
                                                            className="w-full h-24 object-cover rounded border border-gray-200"
                                                        />
                                                    )}
                                                </div>
                                            )}
                                            <p className="text-gray-700 text-xs leading-relaxed mb-3">
                                                {mobileTooltip.content}
                                            </p>
                                            <a
                                                href={mobileTooltip.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 text-xs underline transition-colors"
                                            >
                                                View more ↗
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* Uniform Flexible Gap 1 */}
                                <div className="lg:flex-1 lg:min-h-3"></div>

                                {/* Quick Stats - One Line with Individual Squares */}
                                <div className="flex gap-2 flex-shrink-0">
                                    <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm text-center flex-1">
                                        <h4 className="text-sm font-bold text-gray-900">{projectsData.length}</h4>
                                        <p className="text-xs text-gray-600">Projects</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm text-center flex-1">
                                        <h4 className="text-sm font-bold text-green-600">
                                            {Object.values(appStatuses).filter(s => s.status === 'healthy').length}
                                        </h4>
                                        <p className="text-xs text-gray-600">Live</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm text-center flex-1">
                                        <h4 className="text-sm font-bold text-blue-600">
                                            {Object.values(appStatuses).filter(s => s.status === 'static').length}
                                        </h4>
                                        <p className="text-xs text-gray-600">Apps</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm text-center flex-1">
                                        <h4 className="text-sm font-bold text-gray-600">
                                            {Object.values(appStatuses).filter(s => s.status === 'demo').length}
                                        </h4>
                                        <p className="text-xs text-gray-600">Demos</p>
                                    </div>
                                </div>

                                {/* Uniform Flexible Gap 2 */}
                                <div className="lg:flex-1 lg:min-h-3"></div>

                                {/* GitHub Activity Heatmap - Flexible */}
                                <div className="flex-shrink-0">
                                    <GitHubHeatmap username="CadenMilne04" />
                                </div>

                                {/* Uniform Flexible Gap 3 */}
                                <div className="lg:flex-1 lg:min-h-3"></div>

                                {/* Technologies - Fit Content */}
                                <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm flex-shrink-0">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Technologies</h3>
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
                        </div>

                        {/* Right Main Content - Projects */}
                        <div className="lg:col-span-8 min-h-0">
                            <div className="h-full lg:h-[calc(100vh-200px)]">
                                <ProjectsList
                                    projects={projectsData}
                                    appStatuses={appStatuses}
                                    getProjectStatus={getProjectStatus}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Tooltip */}
            {aboutTooltip && (
                <div
                    className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-xl pointer-events-none max-w-sm"
                    style={{
                        left: aboutTooltip.x + 15,
                        top: aboutTooltip.y - 10,
                    }}
                >
                    <div className="p-4">
                        {/* Thumbnail - Handle different image types and layouts */}
                        {aboutTooltip.thumbnail && (
                            <div className="w-full mb-3">
                                {Array.isArray(aboutTooltip.thumbnail) ? (
                                    // Multiple images for SteelHacks - taller to show more of faces
                                    <div className="grid grid-cols-2 gap-2">
                                        {aboutTooltip.thumbnail.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-28 object-cover rounded-md border border-gray-200"
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    // Single image - check if it's a square image that should be smaller
                                    (() => {
                                        const isSquareImage = aboutTooltip.thumbnail.includes('sei_tooltip') ||
                                            aboutTooltip.thumbnail.includes('ai_tooltip');
                                        const isBlogImage = aboutTooltip.thumbnail.includes('cmublog_thumbnail');
                                        const isBnyImage = aboutTooltip.thumbnail.includes('bny_tooltip');

                                        if (isSquareImage) {
                                            return (
                                                <img
                                                    src={aboutTooltip.thumbnail}
                                                    alt="Thumbnail"
                                                    className="w-32 h-32 object-cover rounded-md border border-gray-200 mx-auto"
                                                />
                                            );
                                        } else if (isBlogImage) {
                                            return (
                                                <img
                                                    src={aboutTooltip.thumbnail}
                                                    alt="Thumbnail"
                                                    className="w-full h-auto object-cover rounded-md border border-gray-200"
                                                />
                                            );
                                        } else if (isBnyImage) {
                                            return (
                                                <img
                                                    src={aboutTooltip.thumbnail}
                                                    alt="Thumbnail"
                                                    className="w-full h-40 object-cover rounded-md border border-gray-200"
                                                />
                                            );
                                        } else {
                                            return (
                                                <img
                                                    src={aboutTooltip.thumbnail}
                                                    alt="Thumbnail"
                                                    className="w-full h-24 object-cover rounded-md border border-gray-200"
                                                />
                                            );
                                        }
                                    })()
                                )}
                            </div>
                        )}

                        {/* Description */}
                        <p className="text-gray-700 text-sm leading-relaxed">
                            {aboutTooltip.content}
                        </p>
                    </div>
                </div>
            )}

            {/* Zelda Easter Egg Component */}
            <ZeldaEasterEgg />

            {/* Easter Egg Hint Component */}
            <EasterEggHint />
        </div>
    );
}

export default Dashboard;
