import React, { createContext } from "react";
import useToggleState from "../hooks/useToggle";
export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [isDarkMode, toggleTheme] = useToggleState(false);
 
  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
