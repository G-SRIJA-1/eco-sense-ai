import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-eco-blue-700 via-eco-blue-600 to-eco-green-600">
      {/* Background particles/elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <nav className="absolute top-0 left-0 right-0 py-6 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
              <div className="h-8 w-8 rounded-full bg-eco-green-600 flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
            </div>
            <span className="ml-3 text-xl font-bold text-white">EcoSense AI</span>
          </div>
          <div>
            <Button 
              variant="outline"
              className="text-white bg-white/10 hover:bg-white/20 border-white/30 mr-3"
              onClick={() => navigate('/login')}
            >
              Log in
            </Button>
            <Button 
              className="bg-white text-eco-green-600 hover:bg-white/90"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </Button>
          </div>
        </nav>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-24 md:pt-0">
          <div className="md:w-1/2 text-white space-y-6 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Smart Environmental Monitoring & Predictions
            </h1>
            <p className="text-xl text-white/80 max-w-md">
              Advanced AI-powered platform for real-time environmental data 
              analysis, monitoring, and predictive insights for a healthier planet.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-eco-green-600 hover:bg-white/90"
                onClick={() => navigate('/signup')}
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10"
                onClick={() => navigate('/dashboard')}
              >
                View Demo Dashboard
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-6">
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-white/70">Prediction Accuracy</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-white/70">Real-time Monitoring</p>
              </div>
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-white/70">Environmental Metrics</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -top-5 -left-5 right-5 bottom-5 rounded-xl bg-white/10 blur-sm"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 w-full max-w-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Dashboard Preview" 
                  className="w-full rounded shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-eco-green-500 flex items-center justify-center text-white font-bold text-lg">
                  AI Powered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature highlights at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white/90 text-center">
            <div className="p-4">
              <h3 className="font-bold mb-1">Real-time Monitoring</h3>
              <p className="text-xs text-white/70">Live environmental data tracking</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Predictive Analysis</h3>
              <p className="text-xs text-white/70">AI-powered future forecasts</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Smart Alerts</h3>
              <p className="text-xs text-white/70">Get notified of critical changes</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Actionable Insights</h3>
              <p className="text-xs text-white/70">Environment improvement tips</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
