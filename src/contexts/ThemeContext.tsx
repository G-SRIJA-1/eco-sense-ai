
import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeType = "light" | "dark" | "eco-green" | "eco-blue" | "eco-earth";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme") as ThemeType;
    if (savedTheme) return savedTheme;
    
    // Check system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  // Apply theme to document when it changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes first
    root.classList.remove("light", "dark", "theme-eco-green", "theme-eco-blue", "theme-eco-earth");
    
    // Add appropriate theme class
    if (theme === "light" || theme === "dark") {
      root.classList.add(theme);
    } else {
      // For custom themes, add both the base theme (light) and the custom theme class
      root.classList.add("light");
      root.classList.add(`theme-${theme}`);
    }
    
    // Save preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
