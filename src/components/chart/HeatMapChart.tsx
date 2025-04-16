
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type HeatMapDataPoint = {
  x: number;
  y: number;
  value: number;
};

type HeatMapProps = {
  title: string;
  data: HeatMapDataPoint[];
  width?: number;
  height?: number;
  xLabels: string[];
  yLabels: string[];
  metrics: { value: string; label: string }[];
};

export function HeatMapChart({
  title,
  data,
  width = 900,
  height = 300,
  xLabels,
  yLabels,
  metrics,
}: HeatMapProps) {
  const [selectedMetric, setSelectedMetric] = useState(metrics[0]?.value || "");

  // Calculate the cell dimensions
  const cellWidth = width / xLabels.length;
  const cellHeight = height / yLabels.length;

  // Find min and max values for color scaling
  const values = data.map((d) => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  // Color function to map values to colors
  const getColor = (value: number) => {
    const normalizedValue = (value - minValue) / (maxValue - minValue);
    
    // Green to red gradient
    const r = Math.round(normalizedValue * 255);
    const g = Math.round(255 - normalizedValue * 255);
    const b = 0;
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <Select value={selectedMetric} onValueChange={setSelectedMetric}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              {metrics.map((metric) => (
                <SelectItem key={metric.value} value={metric.value}>
                  {metric.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div 
            className="relative" 
            style={{ width: `${width}px`, height: `${height + 40}px` }}
          >
            {/* X-axis labels */}
            <div className="flex absolute top-0 left-10" style={{ width: `${width}px` }}>
              {xLabels.map((label, i) => (
                <div
                  key={`x-label-${i}`}
                  className="text-xs text-center text-muted-foreground"
                  style={{ width: `${cellWidth}px` }}
                >
                  {label}
                </div>
              ))}
            </div>
            
            {/* Heatmap cells */}
            <div className="absolute top-10 left-10" style={{ width: `${width}px`, height: `${height}px` }}>
              {data.map((d, i) => (
                <div
                  key={`cell-${i}`}
                  className="absolute border border-background"
                  style={{
                    width: `${cellWidth}px`,
                    height: `${cellHeight}px`,
                    left: `${d.x * cellWidth}px`,
                    top: `${d.y * cellHeight}px`,
                    backgroundColor: getColor(d.value),
                    opacity: 0.8,
                  }}
                  title={`Value: ${d.value}`}
                />
              ))}
            </div>
            
            {/* Y-axis labels */}
            <div className="absolute top-10 left-0" style={{ height: `${height}px` }}>
              {yLabels.map((label, i) => (
                <div
                  key={`y-label-${i}`}
                  className="text-xs text-right text-muted-foreground"
                  style={{ 
                    height: `${cellHeight}px`, 
                    marginTop: i === 0 ? 0 : `${cellHeight - 16}px` 
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex items-center mt-6 space-x-2">
            <div className="text-xs text-muted-foreground">Low</div>
            <div className="h-2 w-32 bg-gradient-to-r from-green-500 to-red-500 rounded-sm"></div>
            <div className="text-xs text-muted-foreground">High</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
