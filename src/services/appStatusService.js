// Service for monitoring application health status
// Currently returns mock data, will be updated to make real health check calls

export const getApplicationStatuses = async () => {
  // Mock data for now - will be replaced with actual health check calls
  const mockStatuses = {
    "TriviaTok": {
      status: "healthy",
      uptime: "99.9%",
      responseTime: "124ms",
      lastChecked: new Date().toISOString(),
      url: "https://triviatok.us/"
    },
    "Workout App": {
      status: "healthy", 
      uptime: "98.7%",
      responseTime: "89ms",
      lastChecked: new Date().toISOString(),
      url: "https://workout-app-ugjg.onrender.com/"
    },
    "NES Emulator": {
      status: "static",
      uptime: "100%",
      responseTime: "N/A",
      lastChecked: new Date().toISOString(),
      url: "https://github.com/CadenMilne04/nes_emulator"
    },
    "Dopa-Mirror": {
      status: "demo",
      uptime: "N/A",
      responseTime: "N/A", 
      lastChecked: new Date().toISOString(),
      url: "https://www.youtube.com/watch?v=0eU8fmNTzb4&ab_channel=CadenMilne"
    },
    "'C'rappy Bird": {
      status: "static",
      uptime: "100%",
      responseTime: "N/A",
      lastChecked: new Date().toISOString(),
      url: "https://github.com/CadenMilne04/crappy-bird"
    },
    "\"Braille\" Phone": {
      status: "demo",
      uptime: "N/A",
      responseTime: "N/A",
      lastChecked: new Date().toISOString(),
      url: "https://www.youtube.com/watch?v=p1zOldm9Yd4&ab_channel=CadenMilne"
    },
    "My Shell": {
      status: "static",
      uptime: "100%",
      responseTime: "N/A",
      lastChecked: new Date().toISOString(),
      url: "https://github.com/CadenMilne04/my_shell"
    },
    "My Malloc": {
      status: "static",
      uptime: "100%",
      responseTime: "N/A",
      lastChecked: new Date().toISOString(),
      url: "https://github.com/CadenMilne04/my_malloc"
    }
  };

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return mockStatuses;
};

export const getStatusColor = (status) => {
  switch (status) {
    case 'healthy':
      return 'text-green-500';
    case 'warning':
      return 'text-yellow-500';
    case 'error':
      return 'text-red-500';
    case 'static':
      return 'text-blue-500';
    case 'demo':
      return 'text-gray-500';
    default:
      return 'text-gray-400';
  }
};

export const getStatusIcon = (status) => {
  switch (status) {
    case 'healthy':
      return '●';
    case 'warning':
      return '▲';
    case 'error':
      return '●';
    case 'static':
      return '■';
    case 'demo':
      return '▶';
    default:
      return '○';
  }
};
