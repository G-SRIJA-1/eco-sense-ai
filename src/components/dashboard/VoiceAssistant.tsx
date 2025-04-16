
import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface VoiceAssistantProps {
  data: {
    temperature: number;
    condition: string;
    location: string;
  };
}

export function VoiceAssistant({ data }: VoiceAssistantProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  // Function to speak text using browser's Speech Synthesis API
  const speak = (text: string) => {
    if (isMuted) return;
    
    // Cancel any previous speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => {
      setIsPlaying(false);
      toast({
        title: "Speech Error",
        description: "Unable to play voice assistant",
        variant: "destructive",
      });
    };
    
    window.speechSynthesis.speak(utterance);
  };

  // Toggle mute state
  const toggleMute = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
    setIsMuted(!isMuted);
    
    toast({
      title: !isMuted ? "Voice Assistant Muted" : "Voice Assistant Activated",
      description: !isMuted ? "Voice announcements have been disabled" : "Voice announcements have been enabled",
    });
  };

  // Auto-speak temperature when component mounts
  useEffect(() => {
    if (!isMuted) {
      const welcomeMessage = `Welcome to EcoSense AI. The current temperature in ${data.location} is ${data.temperature} degrees Celsius with ${data.condition} conditions.`;
      
      // Short delay before speaking to ensure component is fully mounted
      const timer = setTimeout(() => {
        speak(welcomeMessage);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [data, isMuted]);

  return (
    <div className="absolute top-4 right-4 z-10">
      <Button 
        variant="outline" 
        size="sm" 
        className="rounded-full w-10 h-10 flex items-center justify-center"
        onClick={toggleMute}
        title={isMuted ? "Unmute voice assistant" : "Mute voice assistant"}
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className={`h-5 w-5 ${isPlaying ? "text-eco-green-600 animate-pulse" : ""}`} />
        )}
      </Button>
    </div>
  );
}
