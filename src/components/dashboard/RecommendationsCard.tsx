
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, ThumbsUp } from "lucide-react";

type Recommendation = {
  id: string;
  category: "air-quality" | "temperature" | "humidity" | "energy" | "general";
  title: string;
  description: string;
  impact: "low" | "medium" | "high";
  effort: "easy" | "medium" | "hard";
  timeframe: "immediate" | "short-term" | "long-term";
};

type RecommendationsCardProps = {
  recommendations: Recommendation[];
};

export function RecommendationsCard({ recommendations }: RecommendationsCardProps) {
  const getCategoryColor = (category: Recommendation["category"]) => {
    switch (category) {
      case "air-quality":
        return "bg-blue-100 text-blue-800";
      case "temperature":
        return "bg-red-100 text-red-800";
      case "humidity":
        return "bg-purple-100 text-purple-800";
      case "energy":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getImpactColor = (impact: Recommendation["impact"]) => {
    switch (impact) {
      case "low":
        return "bg-gray-100 text-gray-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "high":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getEffortColor = (effort: Recommendation["effort"]) => {
    switch (effort) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTimeframeIcon = (timeframe: Recommendation["timeframe"]) => {
    switch (timeframe) {
      case "immediate":
        return <Clock className="h-4 w-4" />;
      case "short-term":
        return <CheckCircle2 className="h-4 w-4" />;
      case "long-term":
        return <ThumbsUp className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Environmental Recommendations</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto max-h-[400px]">
        <div className="space-y-4">
          {recommendations.map((recommendation) => (
            <div key={recommendation.id} className="border rounded-lg p-4">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="secondary" className={getCategoryColor(recommendation.category)}>
                  {recommendation.category.replace("-", " ")}
                </Badge>
                <div className="flex items-center ml-auto space-x-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    {getTimeframeIcon(recommendation.timeframe)}
                    <span>{recommendation.timeframe}</span>
                  </Badge>
                </div>
              </div>
              <h3 className="text-base font-medium mb-1">{recommendation.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{recommendation.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary" className={getImpactColor(recommendation.impact)}>
                  Impact: {recommendation.impact}
                </Badge>
                <Badge variant="secondary" className={getEffortColor(recommendation.effort)}>
                  Effort: {recommendation.effort}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
