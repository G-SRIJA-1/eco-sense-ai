
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart } from "@/components/chart/LineChart";

type PredictionData = {
  temperature: {
    history: Array<{ date: string; value: number }>;
    prediction: Array<{ date: string; value: number }>;
  };
  airQuality: {
    history: Array<{ date: string; value: number }>;
    prediction: Array<{ date: string; value: number }>;
  };
  humidity: {
    history: Array<{ date: string; value: number }>;
    prediction: Array<{ date: string; value: number }>;
  };
};

type PredictionCardProps = {
  data: PredictionData;
};

export function PredictionCard({ data }: PredictionCardProps) {
  // Generate line chart data for each prediction type
  const temperatureData = {
    labels: [
      ...data.temperature.history.map((item) => item.date),
      ...data.temperature.prediction.map((item) => item.date),
    ],
    datasets: [
      {
        label: "Historical",
        data: [
          ...data.temperature.history.map((item) => item.value),
          ...Array(data.temperature.prediction.length).fill(null),
        ],
        borderColor: "rgba(30, 136, 229, 1)",
        backgroundColor: "rgba(30, 136, 229, 0.1)",
        pointBackgroundColor: "rgba(30, 136, 229, 1)",
        pointBorderColor: "#fff",
        tension: 0.3,
      },
      {
        label: "Prediction",
        data: [
          ...Array(data.temperature.history.length).fill(null),
          ...data.temperature.prediction.map((item) => item.value),
        ],
        borderColor: "rgba(46, 125, 50, 1)",
        backgroundColor: "rgba(46, 125, 50, 0.1)",
        pointBackgroundColor: "rgba(46, 125, 50, 1)",
        pointBorderColor: "#fff",
        borderDash: [5, 5],
        tension: 0.3,
      },
    ],
  };

  const airQualityData = {
    labels: [
      ...data.airQuality.history.map((item) => item.date),
      ...data.airQuality.prediction.map((item) => item.date),
    ],
    datasets: [
      {
        label: "Historical",
        data: [
          ...data.airQuality.history.map((item) => item.value),
          ...Array(data.airQuality.prediction.length).fill(null),
        ],
        borderColor: "rgba(30, 136, 229, 1)",
        backgroundColor: "rgba(30, 136, 229, 0.1)",
        pointBackgroundColor: "rgba(30, 136, 229, 1)",
        pointBorderColor: "#fff",
        tension: 0.3,
      },
      {
        label: "Prediction",
        data: [
          ...Array(data.airQuality.history.length).fill(null),
          ...data.airQuality.prediction.map((item) => item.value),
        ],
        borderColor: "rgba(46, 125, 50, 1)",
        backgroundColor: "rgba(46, 125, 50, 0.1)",
        pointBackgroundColor: "rgba(46, 125, 50, 1)",
        pointBorderColor: "#fff",
        borderDash: [5, 5],
        tension: 0.3,
      },
    ],
  };

  const humidityData = {
    labels: [
      ...data.humidity.history.map((item) => item.date),
      ...data.humidity.prediction.map((item) => item.date),
    ],
    datasets: [
      {
        label: "Historical",
        data: [
          ...data.humidity.history.map((item) => item.value),
          ...Array(data.humidity.prediction.length).fill(null),
        ],
        borderColor: "rgba(30, 136, 229, 1)",
        backgroundColor: "rgba(30, 136, 229, 0.1)",
        pointBackgroundColor: "rgba(30, 136, 229, 1)",
        pointBorderColor: "#fff",
        tension: 0.3,
      },
      {
        label: "Prediction",
        data: [
          ...Array(data.humidity.history.length).fill(null),
          ...data.humidity.prediction.map((item) => item.value),
        ],
        borderColor: "rgba(46, 125, 50, 1)",
        backgroundColor: "rgba(46, 125, 50, 0.1)",
        pointBackgroundColor: "rgba(46, 125, 50, 1)",
        pointBorderColor: "#fff",
        borderDash: [5, 5],
        tension: 0.3,
      },
    ],
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Environmental Predictions</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="temperature" className="space-y-4">
          <TabsList>
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="airquality">Air Quality</TabsTrigger>
            <TabsTrigger value="humidity">Humidity</TabsTrigger>
          </TabsList>
          <TabsContent value="temperature" className="space-y-4">
            <div className="h-[300px]">
              <LineChart data={temperatureData} />
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Analysis:</p>
              <p>
                The temperature is predicted to rise by 2°C over the next 3 days, 
                potentially reaching seasonal highs. Consider implementing cooling
                measures and staying hydrated.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="airquality" className="space-y-4">
            <div className="h-[300px]">
              <LineChart data={airQualityData} />
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Analysis:</p>
              <p>
                Air quality is predicted to decline over the next 48 hours due to
                changing weather patterns. People with respiratory conditions should 
                take precautions and limit outdoor activities.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="humidity" className="space-y-4">
            <div className="h-[300px]">
              <LineChart data={humidityData} />
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Analysis:</p>
              <p>
                Humidity levels are forecasted to remain high for the next week,
                which may impact comfort levels and increase the risk of mold growth
                in poorly ventilated areas.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
