import {useState, useEffect} from 'react'
import {data} from './../SpeakerData'
export function useStateManager(ms) {

const [showSessions, setShowSessions] = useState(true);
  const [theme, setTheme] = useState("light");
  const [speakerData, setSpeakerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(async () => {
    try{
    setIsLoading(true);
    await delay(ms);
    setSpeakerData(data)
    setIsLoading(false)
    }
    catch(error){
      setHasErrored(true);
      setError(error);
    }
  },[]);

  const onFavoriteToggle =(speakerId) =>{
    console.log("re-toggle")
    const speakerPrevData = speakerData.find(function(x) {return  x.id==speakerId});

    const updatedSpeakerNewData = {...speakerPrevData, favorite: !speakerPrevData.favorite}

    const newSpeakersData = speakerData.map((speaker) => 
    speaker.id == speakerId ? updatedSpeakerNewData : speaker);

    setSpeakerData(newSpeakersData);
  }

  return {speakerData, isLoading,
  hasErrored, error,
  onFavoriteToggle
};
}