import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';
import React, {useContext} from 'react';

export default function Layout({startingTheme, children}) {
  return (
    <ThemeProvider startingTheme={ startingTheme } >
      <LayoutNoThemeProvider>
        {children}
      </LayoutNoThemeProvider>
    </ThemeProvider>
  );
}

 function LayoutNoThemeProvider({ children}) {
  const {theme} = useContext(ThemeContext);
  return (
      <div
        className={
          theme === "light" ? "container-fluid light" : "container-fluid dark"
        }
      >
        {children}
      </div>
  );
}
