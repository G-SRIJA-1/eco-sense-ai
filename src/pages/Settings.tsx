
import { Sidebar } from "@/components/layout/Sidebar";

export default function Settings() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-muted-foreground">
                Configure application preferences
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Application Settings</h2>
            <p className="text-muted-foreground">
              Customize your EcoSense AI experience.
            </p>
            
            <div className="mt-6">
              <p className="text-center text-muted-foreground">
                Settings page coming soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
