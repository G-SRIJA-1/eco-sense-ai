
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  BarChart3,
  Bell,
  Home,
  LineChart,
  LogOut,
  MapPin,
  Settings,
  Thermometer,
  User,
  Wind,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Air Quality",
    icon: Wind,
    href: "/dashboard/air-quality",
  },
  {
    title: "Temperature",
    icon: Thermometer,
    href: "/dashboard/temperature",
  },
  {
    title: "Weather Map",
    icon: MapPin,
    href: "/dashboard/map",
  },
  {
    title: "Predictions",
    icon: LineChart,
    href: "/dashboard/predictions",
  },
  {
    title: "Statistics",
    icon: BarChart3,
    href: "/dashboard/statistics",
  },
  {
    title: "Alerts",
    icon: Bell,
    href: "/dashboard/alerts",
  },
];

const bottomNavItems = [
  {
    title: "Profile",
    icon: User,
    href: "/profile",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNavigation = (path: string) => {
    if (path === location.pathname) return;
    
    // Check if the page is implemented yet
    const implementedRoutes = ["/dashboard"];
    
    if (implementedRoutes.includes(path) || path === "/login") {
      navigate(path);
    } else {
      // For unimplemented routes, show a toast with a recommendation
      let recommendation = "";
      
      if (path === "/dashboard/alerts") {
        recommendation = "Consider setting up custom alert thresholds based on local environmental standards.";
      } else if (path === "/dashboard/air-quality") {
        recommendation = "Monitor AQI levels and track particulate matter trends to identify pollution sources.";
      } else if (path === "/dashboard/temperature") {
        recommendation = "Compare temperature data with historical averages to identify climate change patterns.";
      } else if (path === "/dashboard/map") {
        recommendation = "Analyze geographical distribution of environmental factors to identify problem areas.";
      } else if (path === "/dashboard/predictions") {
        recommendation = "Use AI models to forecast air quality changes based on weather patterns and pollution sources.";
      } else if (path === "/dashboard/statistics") {
        recommendation = "Compare your local data with regional and global standards for better context.";
      }
      
      toast({
        title: "Page coming soon!",
        description: recommendation || "This feature is under development. Check back soon!",
        duration: 5000,
      });
      
      // Create route component for the path to handle navigation
      navigate(path);
    }
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    navigate("/login");
  };

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen flex flex-col transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-eco-green-600 flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <span className="font-bold text-lg text-gray-900 dark:text-white">
              EcoSense AI
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              "h-4 w-4 transition-transform",
              isCollapsed ? "rotate-180" : "rotate-0"
            )}
          >
            <path d="m15 6-6 6 6 6" />
          </svg>
        </Button>
      </div>

      {/* Nav Items */}
      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavigation(item.href)}
              className={cn(
                "w-full flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all",
                location.pathname === item.href
                  ? "bg-eco-green-100 text-eco-green-600 dark:bg-gray-800 dark:text-eco-green-400"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  location.pathname === item.href
                    ? "text-eco-green-600 dark:text-eco-green-400"
                    : "text-gray-400 dark:text-gray-500"
                )}
              />
              {!isCollapsed && <span className="ml-3">{item.title}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Items */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="space-y-1">
          {bottomNavItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavigation(item.href)}
              className={cn(
                "w-full flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all",
                location.pathname === item.href
                  ? "bg-eco-green-100 text-eco-green-600 dark:bg-gray-800 dark:text-eco-green-400"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  location.pathname === item.href
                    ? "text-eco-green-600 dark:text-eco-green-400"
                    : "text-gray-400 dark:text-gray-500"
                )}
              />
              {!isCollapsed && <span className="ml-3">{item.title}</span>}
            </button>
          ))}
          
          {/* Logout button */}
          <Button
            variant="ghost"
            className={cn(
              "w-full flex items-center justify-start px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            )}
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </Button>
        </div>
      </div>
    </div>
  );
}
