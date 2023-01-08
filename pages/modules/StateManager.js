import {useState} from 'react'
export function useStateManager() {

const [showSessions, setShowSessions] = useState(true);
  const [theme, setTheme] = useState("light");
  return {showSessions, setShowSessions, theme, setTheme};
}