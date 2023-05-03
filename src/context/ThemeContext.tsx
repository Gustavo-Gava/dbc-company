import {
  type PropsWithChildren,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

interface ThemeContextProps {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
} as ThemeContextProps);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  console.log("theme", theme);

  useEffect(() => {
    localStorage.theme = theme;

    console.log("executing");

    if (theme === "dark") {
      console.log("entering dark mode");

      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
