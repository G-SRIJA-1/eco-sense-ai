
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { useProfile } from "@/contexts/ProfileContext";
import { UserRound, Mail, MapPin, Save } from "lucide-react";

export default function Profile() {
  const { profile, setProfile } = useProfile();
  const { toast } = useToast();
  
  const [name, setName] = useState(profile?.name || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [location, setLocation] = useState(profile?.location || "");

  const handleSave = () => {
    if (profile) {
      setProfile({
        ...profile,
        name,
        email,
        location
      });
      
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    }
  };

  if (!profile) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Not logged in</CardTitle>
            <CardDescription>Please login to view your profile</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" onClick={() => window.location.href = "/login"}>
              Go to Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Profile</h1>
              <p className="text-muted-foreground">
                Manage your account information
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${profile.name}`} />
                      <AvatarFallback className="text-2xl">{profile.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle>{profile.name}</CardTitle>
                  <CardDescription className="flex items-center justify-center gap-1">
                    <Mail size={14} />
                    {profile.email}
                  </CardDescription>
                  <CardDescription className="flex items-center justify-center gap-1 mt-1">
                    <MapPin size={14} />
                    {profile.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <p><strong>Member since:</strong> April 2025</p>
                    <p><strong>Last login:</strong> Today</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Edit Profile Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Edit Profile</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City, Region"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSave} className="w-full bg-eco-green-600 hover:bg-eco-green-700">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
