import React, { useState, useEffect } from 'react';

function EasterEggHint() {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    // Easter egg hints - expandable array for future easter eggs
    const easterEggHints = [
        {
            id: 'zelda-lullaby',
            title: 'Zelda\'s Lullaby',
            hint: 'Play Zelda\'s Lullaby using your arrow keys: ← ↑ → ← ↑ →',
            description: 'A soothing melody from Hyrule that brings forth dancing magic...'
        }
        // Future easter eggs can be added here
    ];

    useEffect(() => {
        // Show the icon after 10 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const handleEggClick = (event) => {
        // Get random hint (currently only one, but ready for expansion)
        const randomHint = easterEggHints[Math.floor(Math.random() * easterEggHints.length)];
        
        // Position tooltip above the egg and ensure it stays in viewport
        const rect = event.currentTarget.getBoundingClientRect();
        const tooltipWidth = 300; // Approximate tooltip width
        const tooltipHeight = 120; // Approximate tooltip height
        
        // Position above the egg, centered horizontally
        let x = rect.left + (rect.width / 2) - (tooltipWidth / 2);
        let y = rect.top - tooltipHeight - 10; // 10px gap above egg
        
        // Keep tooltip within viewport bounds
        x = Math.max(10, Math.min(x, window.innerWidth - tooltipWidth - 10));
        y = Math.max(10, y); // Don't go above screen top
        
        setTooltipPosition({ x, y });
        setShowTooltip(randomHint);
        
        // Hide tooltip after 5 seconds
        setTimeout(() => {
            setShowTooltip(false);
        }, 5000);
    };

    const closeTooltip = () => {
        setShowTooltip(false);
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Easter Egg Icon */}
            <div 
                className="fixed bottom-4 left-4 z-40 cursor-pointer group"
                onClick={handleEggClick}
                title="Easter Egg Hints"
            >
                <div className="relative">
                    <img
                        src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Easter-Pictures-PNG/Pink_Easter_Egg_PNG_Clipart.png?m=1629796123"
                        alt="Easter Egg Hints"
                        className="w-8 h-10 opacity-60 hover:opacity-100 transition-all duration-300 animate-bounce hover:animate-pulse drop-shadow-sm object-contain"
                        style={{
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                            animation: 'bounce 2s infinite, wiggle 3s ease-in-out infinite'
                        }}
                    />
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-full bg-pink-200 opacity-20 blur-sm animate-pulse"></div>
                </div>
            </div>

            {/* Tooltip */}
            {showTooltip && (
                <div
                    className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-xl max-w-xs pointer-events-auto"
                    style={{
                        left: tooltipPosition.x,
                        top: tooltipPosition.y,
                    }}
                >
                    <div className="p-4">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-bold text-gray-900 flex items-center">
                                🥚 Easter Egg
                            </h3>
                            <button
                                onClick={closeTooltip}
                                className="text-gray-400 hover:text-gray-600 text-lg leading-none"
                            >
                                ×
                            </button>
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-2">
                            <h4 className="text-xs font-semibold text-purple-700">{showTooltip.title}</h4>
                            <p className="text-xs text-gray-600 font-mono bg-gray-50 p-2 rounded border">
                                {showTooltip.hint}
                            </p>
                            <p className="text-xs text-gray-500 italic">
                                {showTooltip.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom CSS for wiggle animation */}
            <style jsx>{`
                @keyframes wiggle {
                    0%, 20%, 50%, 80%, 100% {
                        transform: rotate(0deg);
                    }
                    10% {
                        transform: rotate(-3deg);
                    }
                    30% {
                        transform: rotate(3deg);
                    }
                    60% {
                        transform: rotate(-2deg);
                    }
                    70% {
                        transform: rotate(2deg);
                    }
                }
            `}</style>
        </>
    );
}

export default EasterEggHint;
