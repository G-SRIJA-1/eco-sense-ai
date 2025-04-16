
import { Sidebar } from "@/components/layout/Sidebar";
import { AirQualityCard } from "@/components/dashboard/AirQualityCard";
import { airQualityData } from "@/data/mockData";

export default function AirQuality() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Air Quality</h1>
              <p className="text-muted-foreground">
                Monitor and analyze air quality metrics
              </p>
            </div>
          </div>
          
          <div className="grid gap-6">
            <AirQualityCard data={airQualityData} />
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Air Quality Details</h2>
              <p className="text-muted-foreground mb-4">
                Monitor AQI levels and track particulate matter trends to identify pollution sources.
                Regular analysis can help establish patterns and correlations with weather, traffic,
                and industrial activity.
              </p>
              
              <div className="mt-6">
                <h3 className="font-medium mb-2">Recommendations:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Install indoor air purifiers in areas with poor air quality</li>
                  <li>Reduce outdoor activities during high pollution periods</li>
                  <li>Monitor PM2.5 and PM10 levels for respiratory health impacts</li>
                  <li>Track NO2 and SO2 levels to monitor industrial pollution</li>
                  <li>Compare your local data with regional and global standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
