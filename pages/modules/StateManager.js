import {useState} from 'react'
export function useStateManager() {

const [showSessions, setShowSessions] = useState(true);
  const [theme, setTheme] = useState("light");
  const [speakerData, setSpeakerData] = useState([]);
  return {showSessions, setShowSessions, theme, setTheme, speakerData, setSpeakerData};
}