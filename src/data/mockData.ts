
// Mock data for demonstration purposes

// Weather data for Chittoor
export const weatherData = {
  temperature: 32,
  feelsLike: 34,
  humidity: 65,
  windSpeed: 8,
  windDirection: "NE",
  precipitation: 0,
  condition: "Sunny",
  icon: "01d",
  location: "Chittoor, Andhra Pradesh",
  updatedAt: "10 mins ago"
};

// Air quality data for Chittoor
export const airQualityData = {
  aqi: 76,
  pm25: 18.5,
  pm10: 38.2,
  so2: 8.1,
  no2: 12.3,
  o3: 68.4,
  co: 0.8,
  location: "Chittoor, Andhra Pradesh",
  updatedAt: "15 mins ago"
};

// Prediction data
export const predictionData = {
  temperature: {
    history: [
      { date: "May 10", value: 30 },
      { date: "May 11", value: 31 },
      { date: "May 12", value: 32 },
      { date: "May 13", value: 31 },
      { date: "May 14", value: 32 },
    ],
    prediction: [
      { date: "May 15", value: 33 },
      { date: "May 16", value: 34 },
      { date: "May 17", value: 35 },
      { date: "May 18", value: 34 },
      { date: "May 19", value: 33 },
    ]
  },
  airQuality: {
    history: [
      { date: "May 10", value: 65 },
      { date: "May 11", value: 70 },
      { date: "May 12", value: 75 },
      { date: "May 13", value: 72 },
      { date: "May 14", value: 76 },
    ],
    prediction: [
      { date: "May 15", value: 82 },
      { date: "May 16", value: 90 },
      { date: "May 17", value: 95 },
      { date: "May 18", value: 88 },
      { date: "May 19", value: 80 },
    ]
  },
  humidity: {
    history: [
      { date: "May 10", value: 60 },
      { date: "May 11", value: 62 },
      { date: "May 12", value: 65 },
      { date: "May 13", value: 67 },
      { date: "May 14", value: 65 },
    ],
    prediction: [
      { date: "May 15", value: 68 },
      { date: "May 16", value: 72 },
      { date: "May 17", value: 75 },
      { date: "May 18", value: 70 },
      { date: "May 19", value: 65 },
    ]
  }
};

// Alerts data
export const alertsData = [
  {
    id: "1",
    type: "air-quality" as const,
    severity: "high" as const,
    title: "High PM2.5 Levels",
    description: "PM2.5 levels have increased by 35% in the last 24 hours, potentially affecting air quality.",
    date: "Today, 10:25 AM",
    isRead: false
  },
  {
    id: "2",
    type: "temperature" as const,
    severity: "medium" as const,
    title: "Rising Temperature Trend",
    description: "Temperatures are expected to rise 3°C above normal over the next 48 hours.",
    date: "Today, 9:15 AM",
    isRead: false
  },
  {
    id: "3",
    type: "humidity" as const,
    severity: "low" as const,
    title: "Increasing Humidity Levels",
    description: "Humidity levels are steadily increasing and may reach uncomfortable levels.",
    date: "Yesterday, 4:30 PM",
    isRead: true
  },
  {
    id: "4",
    type: "general" as const,
    severity: "critical" as const,
    title: "Weather Warning",
    description: "Local authorities have issued a heat wave warning for Chittoor region for the next 3 days.",
    date: "Yesterday, 2:10 PM",
    isRead: true
  }
];

// Recommendations data
export const recommendationsData = [
  {
    id: "1",
    category: "air-quality" as const,
    title: "Improve Indoor Air Circulation",
    description: "Open windows during early morning and evening to improve indoor air quality when outdoor pollution is lower.",
    impact: "medium" as const,
    effort: "easy" as const,
    timeframe: "immediate" as const
  },
  {
    id: "2",
    category: "temperature" as const,
    title: "Optimize Energy Use",
    description: "Set air conditioning to 24-26°C to reduce energy consumption while maintaining comfort during high temperature days.",
    impact: "high" as const,
    effort: "easy" as const,
    timeframe: "immediate" as const
  },
  {
    id: "3",
    category: "humidity" as const,
    title: "Use Dehumidifiers",
    description: "Consider using dehumidifiers in closed spaces to maintain optimal humidity levels and prevent mold growth.",
    impact: "medium" as const,
    effort: "medium" as const,
    timeframe: "short-term" as const
  },
  {
    id: "4",
    category: "energy" as const,
    title: "Install Solar Panels",
    description: "The high solar radiation in Chittoor makes it ideal for solar panel installation, reducing carbon footprint and energy costs.",
    impact: "high" as const,
    effort: "hard" as const,
    timeframe: "long-term" as const
  },
  {
    id: "5",
    category: "general" as const,
    title: "Plant Native Trees",
    description: "Increase green cover by planting native tree species that are adapted to the local climate and require less water.",
    impact: "high" as const,
    effort: "medium" as const,
    timeframe: "long-term" as const
  }
];

// Heat map data for visualization
export const heatMapData = {
  title: "Pollution Levels by Time & Location",
  data: Array.from({ length: 48 }, (_, i) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const baseValue = 20 + Math.random() * 80;
    const timeInfluence = Math.sin((x / 7) * Math.PI) * 20;
    const locationFactor = Math.cos((y / 5) * Math.PI) * 15;
    return {
      x,
      y,
      value: Math.max(10, Math.min(100, baseValue + timeInfluence + locationFactor))
    };
  }),
  xLabels: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM", "12 AM", "3 AM"],
  yLabels: ["City Center", "Industrial Zone", "Residential - North", "Residential - South", "Rural Area", "Forest Reserve"],
  metrics: [
    { value: "pm25", label: "PM2.5" },
    { value: "pm10", label: "PM10" },
    { value: "no2", label: "NO₂" },
    { value: "o3", label: "O₃" }
  ]
};
