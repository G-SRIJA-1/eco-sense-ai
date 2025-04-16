
import { Line } from "recharts";
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  LineChart as RechartsLineChart,
} from "recharts";

type DataPoint = number | null;

type LineChartProps = {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: DataPoint[];
      borderColor: string;
      backgroundColor: string;
      pointBackgroundColor: string;
      pointBorderColor: string;
      tension?: number;
      borderDash?: number[];
    }>;
  };
};

export function LineChart({ data }: LineChartProps) {
  // Transform the data for Recharts
  const transformedData = data.labels.map((label, index) => {
    const dataPoint: { name: string; [key: string]: string | number | null } = {
      name: label,
    };

    // Add values from each dataset
    data.datasets.forEach((dataset) => {
      dataPoint[dataset.label] = dataset.data[index];
    });

    return dataPoint;
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={transformedData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 10 }}
          tickMargin={10}
          stroke="#888888"
        />
        <YAxis tick={{ fontSize: 10 }} tickMargin={10} stroke="#888888" />
        <Tooltip />
        <Legend />
        {data.datasets.map((dataset, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={dataset.label}
            stroke={dataset.borderColor}
            strokeWidth={2}
            dot={{ stroke: dataset.pointBorderColor, fill: dataset.pointBackgroundColor }}
            activeDot={{ r: 5 }}
            strokeDasharray={dataset.borderDash ? dataset.borderDash.join(" ") : undefined}
            connectNulls
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
