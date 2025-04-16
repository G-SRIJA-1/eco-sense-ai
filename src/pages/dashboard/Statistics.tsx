
import { Sidebar } from "@/components/layout/Sidebar";
import { LineChart } from "@/components/chart/LineChart";

export default function Statistics() {
  // Sample data for demonstration with all required properties
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [22, 24, 27, 30, 33, 35, 36, 35, 32, 29, 26, 23],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.1)",
        pointBackgroundColor: "rgb(75, 192, 192)",
        pointBorderColor: "#fff",
        tension: 0.4
      },
      {
        label: "PM2.5 (μg/m³)",
        data: [15, 18, 20, 25, 30, 28, 22, 19, 21, 23, 19, 16],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        tension: 0.4
      }
    ]
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Statistics</h1>
              <p className="text-muted-foreground">
                Environmental data analysis and trends
              </p>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Year-to-Date Trends</h2>
              <div style={{ height: "300px" }}>
                <LineChart data={chartData} />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Statistical Analysis</h2>
              <p className="text-muted-foreground mb-4">
                Compare your local data with regional and global standards for better context.
                Analyze trends over time to identify improvement areas and measure progress.
              </p>
              
              <div className="mt-6">
                <h3 className="font-medium mb-2">Recommendations:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use benchmark comparisons to set improvement goals</li>
                  <li>Track seasonal variations to identify patterns</li>
                  <li>Compare weekday vs weekend data to understand human impact</li>
                  <li>Analyze correlation between different environmental metrics</li>
                  <li>Generate periodic reports to track progress over time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
