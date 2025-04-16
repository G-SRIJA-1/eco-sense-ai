
import { Sidebar } from "@/components/layout/Sidebar";
import { PredictionCard } from "@/components/dashboard/PredictionCard";
import { predictionData } from "@/data/mockData";

export default function Predictions() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Predictions</h1>
              <p className="text-muted-foreground">
                AI-powered environmental forecasting
              </p>
            </div>
          </div>
          
          <div className="grid gap-6">
            <PredictionCard data={predictionData} />
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Prediction Models</h2>
              <p className="text-muted-foreground mb-4">
                Use AI models to forecast air quality changes based on weather patterns and pollution sources.
                Leverage machine learning to predict environmental risks and provide early warnings.
              </p>
              
              <div className="mt-6">
                <h3 className="font-medium mb-2">Recommendations:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Refine models with local historical data</li>
                  <li>Incorporate weather forecast data to improve accuracy</li>
                  <li>Use predictions to schedule outdoor activities</li>
                  <li>Deploy early warning systems for vulnerable populations</li>
                  <li>Compare prediction accuracy to improve future forecasts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
