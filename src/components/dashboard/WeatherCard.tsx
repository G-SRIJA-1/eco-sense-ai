
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Droplets, Thermometer, Wind } from "lucide-react";

type WeatherData = {
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  precipitation: number;
  condition: string;
  icon: string;
  location: string;
  updatedAt: string;
};

type WeatherCardProps = {
  data: WeatherData;
};

export function WeatherCard({ data }: WeatherCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Current Weather</CardTitle>
          <span className="text-xs text-muted-foreground">
            Updated {data.updatedAt}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-4xl font-bold">
              {data.temperature}°C
            </div>
            <div className="text-sm text-muted-foreground">
              Feels like {data.feelsLike}°C
            </div>
            <div className="text-base font-medium mt-1">{data.condition}</div>
            <div className="text-xs text-muted-foreground">
              {data.location}
            </div>
          </div>
          <div className="h-16 w-16">
            <img
              src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
              alt={data.condition}
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              {data.humidity}% Humidity
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Wind className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              {data.windSpeed} km/h ({data.windDirection})
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Droplets className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              {data.precipitation} mm Precip
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Cloud className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              {data.condition}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
