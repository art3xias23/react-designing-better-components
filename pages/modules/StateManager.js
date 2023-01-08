import {useState} from 'react'
export function useStateManager() {

const [showSessions, setShowSessions] = useState(true);
  const [theme, setTheme] = useState("light");
  const [speakerData, setSpeakerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState();

  return {showSessions, setShowSessions,
    theme, setTheme, 
    speakerData, setSpeakerData,
  isLoading, setIsLoading,
hasErrored, setHasErrored,
error, setError};
}