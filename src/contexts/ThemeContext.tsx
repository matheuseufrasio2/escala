import {
  createContext, ReactNode, useMemo, useState,
} from 'react';

interface ContextData {
  theme: string;
  handleToggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ContextData>({} as ContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  const themeValue = useMemo(() => ({
    theme,
    handleToggleTheme,
  }), []);

  return (

    <ThemeContext.Provider
      value={themeValue}
    >
      {children}
    </ThemeContext.Provider>
  );
}
