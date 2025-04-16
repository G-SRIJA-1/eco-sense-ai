
import { AuthForm } from "@/components/auth/AuthForm";

export default function Signup() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-eco-blue-700 via-eco-blue-600 to-eco-green-600">
      <div className="flex flex-col items-center mb-8">
        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-4">
          <div className="h-12 w-12 rounded-full bg-eco-green-600 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">E</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-1">EcoSense AI</h1>
        <p className="text-white/80">Environmental Monitoring & Analysis</p>
      </div>
      <AuthForm mode="signup" />
      <div className="mt-8 text-center text-white/70 max-w-md">
        <p className="text-sm">
          Join EcoSense AI to access real-time environmental data, personalized alerts,
          and AI-powered recommendations to help protect our planet.
        </p>
      </div>
    </div>
  );
}
