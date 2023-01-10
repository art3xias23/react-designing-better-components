
import {useState} from 'react'

export function useVisibilityStateManager() {
const [theme, setTheme] = useState("light");
  const [showSessions, setShowSessions] = useState(true);
  const [inTransition, setInTransition] = useState(false);

  return { theme, setTheme,showSessions, setShowSessions, inTransition, setInTransition
};
}