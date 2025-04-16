
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/contexts/ThemeContext";
import { useProfile } from "@/contexts/ProfileContext";
import { useToast } from "@/components/ui/use-toast";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Palette, Bell, Volume2, VolumeX, Moon, Sun, Leaf, Droplet, Mountain } from "lucide-react";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const { profile, updatePreference } = useProfile();
  const { toast } = useToast();

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme as any);
    if (profile) {
      updatePreference("theme", newTheme);
    }
    
    toast({
      title: "Theme updated",
      description: `Theme changed to ${newTheme}.`,
    });
  };

  const handleNotificationToggle = (enabled: boolean) => {
    if (profile) {
      updatePreference("notifications", enabled);
      
      toast({
        title: enabled ? "Notifications enabled" : "Notifications disabled",
        description: enabled
          ? "You will now receive notifications"
          : "You will no longer receive notifications",
      });
    }
  };

  const handleVoiceAssistantToggle = (enabled: boolean) => {
    if (profile) {
      updatePreference("voiceAssistant", enabled);
      
      toast({
        title: enabled ? "Voice assistant enabled" : "Voice assistant disabled",
        description: enabled
          ? "Voice assistant will now provide audio feedback"
          : "Voice assistant has been turned off",
      });
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-muted-foreground">
                Configure application preferences
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="appearance" className="space-y-4">
            <TabsList>
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Palette size={16} />
                Appearance
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell size={16} />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="accessibility" className="flex items-center gap-2">
                <Volume2 size={16} />
                Accessibility
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance Settings</CardTitle>
                  <CardDescription>
                    Customize how EcoSense AI looks and feels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Color Theme</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose your preferred color scheme
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant={theme === "light" ? "default" : "outline"}
                        size="lg"
                        className="flex-1 max-w-[150px]"
                        onClick={() => handleThemeChange("light")}
                      >
                        <Sun className="mr-2 h-4 w-4" />
                        Light
                      </Button>
                      
                      <Button
                        variant={theme === "dark" ? "default" : "outline"}
                        size="lg"
                        className="flex-1 max-w-[150px]"
                        onClick={() => handleThemeChange("dark")}
                      >
                        <Moon className="mr-2 h-4 w-4" />
                        Dark
                      </Button>
                      
                      <Button
                        variant={theme === "eco-green" ? "default" : "outline"}
                        size="lg"
                        className="flex-1 max-w-[150px]"
                        onClick={() => handleThemeChange("eco-green")}
                      >
                        <Leaf className="mr-2 h-4 w-4" />
                        Eco Green
                      </Button>
                      
                      <Button
                        variant={theme === "eco-blue" ? "default" : "outline"}
                        size="lg"
                        className="flex-1 max-w-[150px]"
                        onClick={() => handleThemeChange("eco-blue")}
                      >
                        <Droplet className="mr-2 h-4 w-4" />
                        Eco Blue
                      </Button>
                      
                      <Button
                        variant={theme === "eco-earth" ? "default" : "outline"}
                        size="lg"
                        className="flex-1 max-w-[150px]"
                        onClick={() => handleThemeChange("eco-earth")}
                      >
                        <Mountain className="mr-2 h-4 w-4" />
                        Eco Earth
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Font Size</h3>
                    <p className="text-sm text-muted-foreground">
                      Adjust the text size throughout the application
                    </p>
                    
                    <ToggleGroup type="single" defaultValue="medium">
                      <ToggleGroupItem value="small" aria-label="Small text">Small</ToggleGroupItem>
                      <ToggleGroupItem value="medium" aria-label="Medium text">Medium</ToggleGroupItem>
                      <ToggleGroupItem value="large" aria-label="Large text">Large</ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Decide what alerts and updates you receive
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notifications">Enable Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts about environmental changes
                      </p>
                    </div>
                    <Switch
                      id="notifications"
                      checked={profile?.preferences.notifications}
                      onCheckedChange={handleNotificationToggle}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="alerts">Critical Alert Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about urgent environmental warnings
                      </p>
                    </div>
                    <Switch id="alerts" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="updates">Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive weekly summaries of environmental data
                      </p>
                    </div>
                    <Switch id="updates" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="accessibility">
              <Card>
                <CardHeader>
                  <CardTitle>Accessibility Options</CardTitle>
                  <CardDescription>
                    Customize accessibility features to improve your experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="voice-assistant">Voice Assistant</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable voice feedback for temperature and air quality
                      </p>
                    </div>
                    <Switch
                      id="voice-assistant"
                      checked={profile?.preferences.voiceAssistant}
                      onCheckedChange={handleVoiceAssistantToggle}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="motion-effects">Reduced Motion</Label>
                      <p className="text-sm text-muted-foreground">
                        Minimize animations throughout the interface
                      </p>
                    </div>
                    <Switch id="motion-effects" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="high-contrast">High Contrast Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Increase visibility with higher contrast colors
                      </p>
                    </div>
                    <Switch id="high-contrast" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
