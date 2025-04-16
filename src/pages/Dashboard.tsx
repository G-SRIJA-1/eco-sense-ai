
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { WeatherCard } from "@/components/dashboard/WeatherCard";
import { AirQualityCard } from "@/components/dashboard/AirQualityCard";
import { PredictionCard } from "@/components/dashboard/PredictionCard";
import { AlertsCard } from "@/components/dashboard/AlertsCard";
import { RecommendationsCard } from "@/components/dashboard/RecommendationsCard";
import { HeatMapChart } from "@/components/chart/HeatMapChart";
import { 
  airQualityData, 
  weatherData, 
  predictionData, 
  alertsData,
  recommendationsData,
  heatMapData
} from "@/data/mockData";

export default function Dashboard() {
  const [location, setLocation] = useState("Chittoor, Andhra Pradesh");

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Environmental monitoring for {location}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Last updated: 10 mins ago</span>
              <button className="text-xs bg-eco-green-600 hover:bg-eco-green-700 text-white px-3 py-1 rounded-md transition-colors">
                Refresh Data
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <WeatherCard data={weatherData} />
            <AirQualityCard data={airQualityData} />
            <AlertsCard alerts={alertsData} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <PredictionCard data={predictionData} />
            <RecommendationsCard recommendations={recommendationsData} />
          </div>

          <div className="mb-6">
            <HeatMapChart
              title="Environmental Heatmap by Location"
              data={heatMapData.data}
              xLabels={heatMapData.xLabels}
              yLabels={heatMapData.yLabels}
              metrics={heatMapData.metrics}
              height={300}
              width={900}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
