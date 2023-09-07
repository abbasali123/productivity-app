import { createContext, useContext, useState, useEffect } from "react";
import { useTime } from "./time-context";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const { phaseOfDay } = useTime();
  const [wallpaper, setWallpaper] = useState("");

  function changeWallpaper() {
    setWallpaper(
      `./assets/wallpapers/${phaseOfDay}/${phaseOfDay}-${String(
        Math.floor(Math.random() * 4) + 1
      )}.jpg`
    );
  }

  useEffect(() => {
    changeWallpaper();
  }, [phaseOfDay]);

  return (
    <ThemeContext.Provider value={{ wallpaper }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
