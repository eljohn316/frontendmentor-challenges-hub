import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState
} from 'react';

export type Theme = 'light' | 'dark';

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
} | null>(null);

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  return savedTheme ?? 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
