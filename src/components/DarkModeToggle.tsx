
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for system preference or saved preference on mount
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true" || 
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    setIsDarkMode(isDark);
    updateTheme(isDark);
  }, []);

  // Update theme function
  const updateTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    updateTheme(newMode);
  };

  return (
    <div className="flex items-center gap-2">
      <Sun size={16} className="text-yellow-500 dark:text-yellow-300" />
      <Switch 
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
      />
      <Moon size={16} className="text-gray-500 dark:text-blue-300" />
    </div>
  );
};

export default DarkModeToggle;
