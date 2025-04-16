
import { Sidebar } from "@/components/layout/Sidebar";
import { HeatMapChart } from "@/components/chart/HeatMapChart";
import { heatMapData } from "@/data/mockData";

export default function WeatherMap() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Weather Map</h1>
              <p className="text-muted-foreground">
                Geographical view of environmental data
              </p>
            </div>
          </div>
          
          <div className="grid gap-6">
            <HeatMapChart
              title="Environmental Heatmap by Location"
              data={heatMapData.data}
              xLabels={heatMapData.xLabels}
              yLabels={heatMapData.yLabels}
              metrics={heatMapData.metrics}
              height={500}
              width={900}
            />
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Geographical Analysis</h2>
              <p className="text-muted-foreground mb-4">
                Analyze geographical distribution of environmental factors to identify problem areas.
                Visualize patterns across different regions to understand broader environmental impact.
              </p>
              
              <div className="mt-6">
                <h3 className="font-medium mb-2">Recommendations:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Focus mitigation efforts on identified hotspots</li>
                  <li>Compare urban and rural environmental metrics</li>
                  <li>Track seasonal changes in environmental conditions by region</li>
                  <li>Identify areas requiring additional monitoring stations</li>
                  <li>Use spatial data to inform policy and intervention strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
