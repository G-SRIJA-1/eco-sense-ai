
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useProfile } from "@/contexts/ProfileContext";

type AuthFormProps = {
  mode: "login" | "signup";
};

export function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { setProfile } = useProfile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a user profile
    const userProfile = {
      id: `user-${Date.now()}`,
      name: name || email.split('@')[0],
      email,
      location: "Chittoor, Andhra Pradesh",
      preferences: {
        theme: "light",
        notifications: true,
        voiceAssistant: true
      }
    };
    
    // Set the profile in context
    setProfile(userProfile);
    
    toast({
      title: mode === "login" ? "Login Successful" : "Account Created",
      description: mode === "login" 
        ? "Welcome back to EcoSense AI!" 
        : "Your account has been created successfully!",
    });
    
    navigate("/dashboard");
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          {mode === "login" ? "Login to your account" : "Create an account"}
        </CardTitle>
        <CardDescription className="text-center">
          {mode === "login"
            ? "Enter your credentials to access your dashboard"
            : "Fill out the form below to create your account"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {mode === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {mode === "login" && (
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              )}
            </div>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button type="submit" className="w-full bg-eco-green-600 hover:bg-eco-green-700">
            {mode === "login" ? "Login" : "Sign Up"}
          </Button>
          <div className="text-center text-sm">
            {mode === "login" ? (
              <div>
                Don't have an account?{" "}
                <a href="/signup" className="text-primary hover:underline">
                  Sign up
                </a>
              </div>
            ) : (
              <div>
                Already have an account?{" "}
                <a href="/login" className="text-primary hover:underline">
                  Login
                </a>
              </div>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
