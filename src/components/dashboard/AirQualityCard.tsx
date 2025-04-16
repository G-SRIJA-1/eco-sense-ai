
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type AirQualityData = {
  aqi: number;
  pm25: number;
  pm10: number;
  so2: number;
  no2: number;
  o3: number;
  co: number;
  location: string;
  updatedAt: string;
};

type AirQualityCardProps = {
  data: AirQualityData;
};

function getAirQualityStatus(aqi: number): {
  status: string;
  color: string;
  textColor: string;
} {
  if (aqi <= 50) {
    return { status: "Good", color: "bg-green-500", textColor: "text-green-500" };
  } else if (aqi <= 100) {
    return { status: "Moderate", color: "bg-yellow-500", textColor: "text-yellow-500" };
  } else if (aqi <= 150) {
    return {
      status: "Unhealthy for Sensitive Groups",
      color: "bg-orange-500",
      textColor: "text-orange-500",
    };
  } else if (aqi <= 200) {
    return { status: "Unhealthy", color: "bg-red-500", textColor: "text-red-500" };
  } else if (aqi <= 300) {
    return {
      status: "Very Unhealthy",
      color: "bg-purple-500",
      textColor: "text-purple-500",
    };
  } else {
    return {
      status: "Hazardous",
      color: "bg-[#7E0023]",
      textColor: "text-[#7E0023]",
    };
  }
}

export function AirQualityCard({ data }: AirQualityCardProps) {
  const { status, color, textColor } = getAirQualityStatus(data.aqi);

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Air Quality Index</CardTitle>
          <span className="text-xs text-muted-foreground">
            Updated {data.updatedAt}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold">{data.aqi}</div>
              <div className={`text-sm font-medium ${textColor}`}>{status}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {data.location}
              </div>
            </div>
            <div className="h-16 w-16 rounded-full border-8 flex items-center justify-center" style={{ borderColor: color.replace('bg-', '') }}>
              <span className={`text-sm font-bold ${textColor}`}>AQI</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>PM2.5</span>
              <span className="font-medium">{data.pm25} μg/m³</span>
            </div>
            <Progress value={(data.pm25 / 50) * 100} className="h-2" />
            
            <div className="flex items-center justify-between text-sm">
              <span>PM10</span>
              <span className="font-medium">{data.pm10} μg/m³</span>
            </div>
            <Progress value={(data.pm10 / 150) * 100} className="h-2" />
            
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">NO₂</span>
                <span className="text-sm font-medium">{data.no2} ppb</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">O₃</span>
                <span className="text-sm font-medium">{data.o3} ppb</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">SO₂</span>
                <span className="text-sm font-medium">{data.so2} ppb</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">CO</span>
                <span className="text-sm font-medium">{data.co} ppm</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
