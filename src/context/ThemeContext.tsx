import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<unknown>(null);

interface ThemeProps {
  text: string;
  body: string;
  accent: string;
  heroText: string;
  other: string;
}

const LightTheme: ThemeProps = {
  text: "#474444",
  body: "#FCFBF8",
  accent: "#171B20",
  heroText: "#474444",
  other: "#11272f",
};

const DarkTheme: ThemeProps = {
  text: "#D9D9D9",
  body: "#0d1c22",
  heroText: "#474444",
  accent: "#F5F5F5",
  other: "#11272f",
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [defTheme, setDefTheme] = useState<boolean>(true);
  const initialTheme: ThemeProps = defTheme ? LightTheme : DarkTheme;

  return (
    <ThemeContext.Provider value={initialTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemePallete = useContext(ThemeContext);
export default ThemeProvider;
