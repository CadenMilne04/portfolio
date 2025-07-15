import React, { useState, useEffect } from 'react';

function ZeldaEasterEgg() {
    const [showLinkDancing, setShowLinkDancing] = useState(false);
    const [keySequence, setKeySequence] = useState([]);

    useEffect(() => {
        // Zelda's Lullaby: Left, Up, Right, Left, Up, Right
        const zeldaLullaby = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowRight'];
        
        const handleKeyDown = (event) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) {
                event.preventDefault();
                
                setKeySequence(prev => {
                    const newSequence = [...prev, event.code];
                    
                    // Keep only the last 6 keys
                    if (newSequence.length > 6) {
                        newSequence.shift();
                    }
                    
                    // Check if the sequence matches Zelda's Lullaby
                    if (newSequence.length === 6 && 
                        newSequence.every((key, index) => key === zeldaLullaby[index])) {
                        setShowLinkDancing(true);
                        // Hide after 5 seconds
                        setTimeout(() => setShowLinkDancing(false), 5000);
                        return []; // Reset sequence
                    }
                    
                    return newSequence;
                });
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!showLinkDancing) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pointer-events-none">
            <div className="animate-bounce">
                <img 
                    src="https://64.media.tumblr.com/tumblr_m71gtwOx7M1qepij6o1_500.gif"
                    alt="Link Dancing"
                    className="w-64 h-64 object-contain"
                />
                <div className="text-white text-center mt-4 text-xl font-bold">
                    🎵 Zelda's Lullaby! 🎵
                </div>
            </div>
        </div>
    );
}

export default ZeldaEasterEgg;
