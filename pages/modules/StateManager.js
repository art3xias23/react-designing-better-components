import {useState} from 'react'
import {data} from './../SpeakerData'
export function useStateManager() {

const [showSessions, setShowSessions] = useState(true);
  const [theme, setTheme] = useState("light");
  const [speakerData, setSpeakerData] = useState(data);
  return {showSessions, setShowSessions, theme, setTheme, speakerData, setSpeakerData};
}