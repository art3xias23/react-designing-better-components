import {useState, useEffect} from 'react'
import {data} from './../SpeakerData'
import {REQUEST_STATUS} from './../enums/requestStatus'
export function useStateManager(ms) {

const [showSessions, setShowSessions] = useState(true);
  const [theme, setTheme] = useState("light");
  const [speakerData, setSpeakerData] = useState([]);
  const [requestStatus, setRequestStatus] = useState("")
  const [error, setError] = useState();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(async () => {
    try{
    setRequestStatus(REQUEST_STATUS.LOADING);
    await delay(ms);
    setSpeakerData(data)
    setRequestStatus(REQUEST_STATUS.SUCCESS)
    }
    catch(error){
      setRequestStatus(REQUEST_STATUS.FAILURE);
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

  return {speakerData, requestStatus, error,
  onFavoriteToggle, setShowSessions, showSessions, setTheme, theme
};
}