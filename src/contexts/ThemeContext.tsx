'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  isInverted: boolean;
  setIsInverted: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isInverted, setIsInverted] = useState(false);

  return (
    <ThemeContext.Provider value={{ isInverted, setIsInverted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
