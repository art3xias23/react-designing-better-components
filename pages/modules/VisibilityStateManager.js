
import {useState} from 'react'

export function useVisibilityStateManager() {

  const [theme, setTheme] = useState("light");
  const [showSessions, setShowSessions] = useState(true);

  return { showSessions, setShowSessions, theme, setTheme
};
}