
import { Sidebar } from "@/components/layout/Sidebar";
import { AlertsCard } from "@/components/dashboard/AlertsCard";
import { alertsData } from "@/data/mockData";

export default function Alerts() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Alerts</h1>
              <p className="text-muted-foreground">
                Environmental warnings and notifications
              </p>
            </div>
          </div>
          
          <div className="grid gap-6">
            <AlertsCard alerts={alertsData} />
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Alert Configuration</h2>
              <p className="text-muted-foreground mb-4">
                Consider setting up custom alert thresholds based on local environmental standards.
                Configure notifications for different severity levels and distribution channels.
              </p>
              
              <div className="mt-6">
                <h3 className="font-medium mb-2">Recommendations:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Set up SMS alerts for critical environmental conditions</li>
                  <li>Configure different thresholds for different user groups</li>
                  <li>Include recommended actions in alert notifications</li>
                  <li>Provide real-time updates during environmental incidents</li>
                  <li>Create alerts for sudden changes in environmental metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
