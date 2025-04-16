
import { Sidebar } from "@/components/layout/Sidebar";
import { WeatherCard } from "@/components/dashboard/WeatherCard";
import { weatherData } from "@/data/mockData";

export default function Temperature() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Temperature</h1>
              <p className="text-muted-foreground">
                Analyze temperature trends and patterns
              </p>
            </div>
          </div>
          
          <div className="grid gap-6">
            <WeatherCard data={weatherData} />
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Temperature Analysis</h2>
              <p className="text-muted-foreground mb-4">
                Compare temperature data with historical averages to identify climate change patterns.
                Track seasonal variations and extreme weather events to prepare appropriate responses.
              </p>
              
              <div className="mt-6">
                <h3 className="font-medium mb-2">Recommendations:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Install smart thermostats to optimize energy use</li>
                  <li>Implement proper insulation to reduce energy consumption</li>
                  <li>Monitor urban heat island effects in city centers</li>
                  <li>Track correlation between temperature and energy usage</li>
                  <li>Prepare contingency plans for extreme temperature events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
