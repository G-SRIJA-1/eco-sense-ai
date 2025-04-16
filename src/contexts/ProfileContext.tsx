
import React, { createContext, useContext, useState, useEffect } from "react";

interface UserProfile {
  id: string;
  name: string;
  email: string;
  location: string;
  preferences: {
    theme: string;
    notifications: boolean;
    voiceAssistant: boolean;
  };
}

interface ProfileContextType {
  profile: UserProfile | null;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  updatePreference: (key: string, value: any) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    // Check for saved profile
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      return JSON.parse(savedProfile);
    }
    return null;
  });

  // Save profile changes to localStorage
  useEffect(() => {
    if (profile) {
      localStorage.setItem("userProfile", JSON.stringify(profile));
    }
  }, [profile]);

  // Helper function to update a single preference
  const updatePreference = (key: string, value: any) => {
    if (profile) {
      setProfile({
        ...profile,
        preferences: {
          ...profile.preferences,
          [key]: value
        }
      });
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile, updatePreference }}>
      {children}
    </ProfileContext.Provider>
  );
}

// Hook to use profile context
export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}

// Mock login function (to be replaced with actual authentication)
export function useMockLogin() {
  const { setProfile } = useProfile();
  
  const login = (email: string, password: string) => {
    // Mock user data
    const mockUser = {
      id: "user-1",
      name: "John Doe",
      email: email,
      location: "Chittoor, Andhra Pradesh",
      preferences: {
        theme: "light",
        notifications: true,
        voiceAssistant: true
      }
    };
    
    setProfile(mockUser);
    return mockUser;
  };
  
  return { login };
}
