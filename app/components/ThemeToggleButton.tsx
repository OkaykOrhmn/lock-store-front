"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggleButton() {
const { theme, setTheme } = useTheme();
const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  console.log("Toggling theme to:", newTheme);
  setTheme(newTheme);
};
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
}