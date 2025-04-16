
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Alert = {
  id: string;
  type: "air-quality" | "temperature" | "humidity" | "general";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  description: string;
  date: string;
  isRead: boolean;
};

type AlertsCardProps = {
  alerts: Alert[];
};

export function AlertsCard({ alerts }: AlertsCardProps) {
  const getSeverityColor = (severity: Alert["severity"]) => {
    switch (severity) {
      case "low":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "high":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      case "critical":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  const getTypeIcon = (type: Alert["type"]) => {
    switch (type) {
      case "air-quality":
        return "💨";
      case "temperature":
        return "🌡️";
      case "humidity":
        return "💧";
      default:
        return "⚠️";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Alerts</CardTitle>
        <Badge variant="outline" className="ml-auto">
          {alerts.filter(alert => !alert.isRead).length} New
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
          {alerts.length > 0 ? (
            alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-3 rounded-lg border border-l-4 ${
                  !alert.isRead ? "bg-muted/50" : ""
                } ${
                  alert.severity === "critical"
                    ? "border-l-red-500"
                    : alert.severity === "high"
                    ? "border-l-orange-500"
                    : alert.severity === "medium"
                    ? "border-l-yellow-500"
                    : "border-l-blue-500"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-xl">{getTypeIcon(alert.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{alert.title}</h4>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${getSeverityColor(alert.severity)}`}
                      >
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {alert.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">
                        {alert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-muted-foreground">
              <p>No recent alerts</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
