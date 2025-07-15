import React, { useState, useEffect } from 'react';

function GitHubHeatmap({ username = 'CadenMilne04' }) {
    const [contributions, setContributions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const [totalContributions, setTotalContributions] = useState(0);
    const [error, setError] = useState(null);
    const [tooltip, setTooltip] = useState(null);

    useEffect(() => {
        fetchGitHubContributions();
        // Auto-refresh every 30 minutes
        const interval = setInterval(fetchGitHubContributions, 1800000);
        return () => clearInterval(interval);
    }, [username]);

    const fetchGitHubContributions = async () => {
        setLoading(true);
        setError(null);
        
        try {
            // Using GitHub's GraphQL API through a public scraping service
            const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch GitHub data');
            }
            
            const data = await response.json();
            
            // Transform the data to our format
            const contributionData = [];
            let total = 0;
            
            // Get contributions from the last 365 days
            data.contributions.forEach(contribution => {
                contributionData.push({
                    date: contribution.date,
                    count: contribution.count
                });
                total += contribution.count;
            });
            
            setContributions(contributionData);
            setTotalContributions(total);
            setLastRefresh(new Date());
        } catch (err) {
            console.error('Error fetching GitHub contributions:', err);
            setError(err.message);
            // Fallback to mock data if API fails
            generateMockContributions();
        } finally {
            setLoading(false);
        }
    };

    const generateMockContributions = () => {
        // Fallback mock data
        const data = [];
        const today = new Date();
        let total = 0;

        for (let i = 364; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            const baseChance = isWeekend ? 0.3 : 0.7;
            const randomFactor = Math.random();
            
            let count = 0;
            if (randomFactor < baseChance) {
                count = Math.floor(Math.random() * 8) + 1;
            }
            
            total += count;
            data.push({
                date: date.toISOString().split('T')[0],
                count
            });
        }

        setContributions(data);
        setTotalContributions(total);
    };

    const getContributionColor = (count) => {
        if (count === 0) return 'bg-gray-100';
        if (count <= 2) return 'bg-green-200';
        if (count <= 4) return 'bg-green-300';
        if (count <= 6) return 'bg-green-400';
        return 'bg-green-500';
    };

    const getContributionText = (count) => {
        if (count === 0) return 'No contributions';
        if (count === 1) return '1 contribution';
        return `${count} contributions`;
    };

    const handleDayClick = (date) => {
        // Open GitHub commits for that specific date
        const formattedDate = new Date(date).toISOString().split('T')[0];
        const url = `https://github.com/${username}?tab=overview&from=${formattedDate}&to=${formattedDate}`;
        window.open(url, '_blank');
    };

    const handleDayHover = (day, event) => {
        const rect = event.target.getBoundingClientRect();
        const date = new Date(day.date);
        setTooltip({
            x: rect.left + rect.width / 2,
            y: rect.top - 10,
            content: `${getContributionText(day.count)} on ${date.toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
            })}`
        });
    };

    const handleDayLeave = () => {
        setTooltip(null);
    };

    // Calculate how many weeks we can fit (approximately 25-30 weeks based on container width)
    const maxWeeks = 26; // Adjust this based on your container width
    
    // Start from today and go backwards to get the most recent data
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - (maxWeeks * 7 - 1));
    
    // Filter contributions to show only the recent period ending with today
    const recentContributions = contributions.filter(contribution => {
        const contribDate = new Date(contribution.date);
        return contribDate >= startDate && contribDate <= today;
    });

    // Group contributions by weeks
    const weeks = [];
    for (let i = 0; i < recentContributions.length; i += 7) {
        weeks.push(recentContributions.slice(i, i + 7));
    }

    // Calculate month labels for the visible weeks
    const monthLabels = [];
    weeks.forEach((week, weekIndex) => {
        if (week.length > 0) {
            const firstDayOfWeek = new Date(week[0].date);
            const month = firstDayOfWeek.toLocaleDateString('en-US', { month: 'short' });
            
            // Only add month label if it's different from the previous week or it's the first week
            const prevMonth = weekIndex > 0 && weeks[weekIndex - 1].length > 0 
                ? new Date(weeks[weekIndex - 1][0].date).toLocaleDateString('en-US', { month: 'short' })
                : '';
            
            if (month !== prevMonth || weekIndex === 0) {
                monthLabels[weekIndex] = month;
            }
        }
    });

    if (loading) {
        return (
            <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-900">GitHub Activity</h3>
                    <div className="text-xs text-gray-500">Loading...</div>
                </div>
                <div className="animate-pulse">
                    <div className="h-16 bg-gray-200 rounded"></div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm relative">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-900">GitHub Activity</h3>
                    <div className="text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                            <span className={`w-2 h-2 rounded-full ${error ? 'bg-yellow-400' : 'bg-green-400'}`}></span>
                            <span>{error ? 'Mock' : 'Live'} • {lastRefresh.toLocaleTimeString()}</span>
                        </div>
                    </div>
                </div>
                
                <div className="mb-2">
                    <p className="text-xs text-gray-600">
                        <span className="font-semibold text-gray-900">{totalContributions}</span> contributions this year
                    </p>
                </div>

                {/* Heatmap Grid - Recent weeks only, no scroll */}
                <div className="mb-2">
                    {/* Month labels */}
                    <div className="flex space-x-0.5 justify-end mb-1">
                        {weeks.map((week, weekIndex) => (
                            <div key={weekIndex} className="w-2.5 text-center">
                                <span className="text-xs text-gray-500">
                                    {monthLabels[weekIndex] || ''}
                                </span>
                            </div>
                        ))}
                    </div>
                    
                    {/* Contribution squares */}
                    <div className="flex space-x-0.5 justify-end">
                        {weeks.map((week, weekIndex) => (
                            <div key={weekIndex} className="flex flex-col space-y-0.5">
                                {week.map((day, dayIndex) => {
                                    const date = new Date(day.date);
                                    return (
                                        <div
                                            key={dayIndex}
                                            className={`w-2.5 h-2.5 rounded-sm ${getContributionColor(day.count)} hover:ring-1 hover:ring-blue-300 transition-all cursor-pointer`}
                                            onClick={() => handleDayClick(day.date)}
                                            onMouseEnter={(e) => handleDayHover(day, e)}
                                            onMouseLeave={handleDayLeave}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legend - Compact */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Less</span>
                    <div className="flex space-x-0.5">
                        <div className="w-2.5 h-2.5 rounded-sm bg-gray-100"></div>
                        <div className="w-2.5 h-2.5 rounded-sm bg-green-200"></div>
                        <div className="w-2.5 h-2.5 rounded-sm bg-green-300"></div>
                        <div className="w-2.5 h-2.5 rounded-sm bg-green-400"></div>
                        <div className="w-2.5 h-2.5 rounded-sm bg-green-500"></div>
                    </div>
                    <span>More</span>
                </div>
                
                {error && (
                    <div className="mt-2 text-xs text-yellow-600">
                        Showing mock data (API unavailable)
                    </div>
                )}
            </div>

            {/* Tooltip */}
            {tooltip && (
                <div
                    className="fixed z-50 bg-gray-900 text-white text-xs rounded px-2 py-1 pointer-events-none transform -translate-x-1/2 -translate-y-full"
                    style={{
                        left: tooltip.x,
                        top: tooltip.y,
                    }}
                >
                    {tooltip.content}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
            )}
        </>
    );
}

export default GitHubHeatmap;
