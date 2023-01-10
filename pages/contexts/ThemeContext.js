import React, { createContext, useState } from "react";
import useTheme from "../hooks/useTheme";
export const ThemeContext = createContext();

export function ThemeProvider({ children, startingTheme }) {
  const {theme, setTheme} = useTheme(startingTheme);
  const [showSessions, setShowSessions] = useState(true);
  return (
    <ThemeContext.Provider value={{ setTheme, theme,setShowSessions, showSessions }}>
        {children}
    </ThemeContext.Provider>
  );
}
