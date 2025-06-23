'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full bg-[#F4C155]/20 animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-8 h-8 flex items-center justify-center rounded-full bg-[#F4C155] text-[#E85D4C] hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div className="relative w-4 h-4">
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 rotate-0 scale-100 transition-all duration-300" />
        ) : (
          <Moon className="w-4 h-4 rotate-0 scale-100 transition-all duration-300" />
        )}
      </div>
      
      {/* Subtle indicator dot */}
      <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full transition-all duration-300 ${
        theme === 'dark' ? 'bg-yellow-400' : 'bg-blue-400'
      }`} />
    </button>
  );
} 