import { ThemeContext} from '../../contexts/ThemeContext';
import React, {useContext} from 'react';

export default function Layout({children}) {
  return (
      <LayoutNoThemeProvider>
        {children}
      </LayoutNoThemeProvider>
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
