import Speaker from './Speaker'
import {useStateManager } from '../modules/StateManager'
import {useEffect} from 'react'
import {data} from './../SpeakerData'

export default function SpeakersList({showSessions}){
  const {speakerData, setSpeakerData, isLoading, setIsLoading, hasErrored, setHasErrored} = useStateManager();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(async () => {
    setIsLoading(true);
    await delay(2000);
    setSpeakerData(data)
    setIsLoading(false)
  },[]);

  const onFavoriteToggle =(speakerId) =>{
    console.log("re-toggle")
    const speakerPrevData = speakerData.find(function(x) {return  x.id==speakerId});

    const updatedSpeakerNewData = {...speakerPrevData, favorite: !speakerPrevData.favorite}

    const newSpeakersData = speakerData.map((speaker) => 
    speaker.id == speakerId ? updatedSpeakerNewData : speaker);

    setSpeakerData(newSpeakersData);
  }

  if(isLoading) return <h3>Loading...</h3>
    return(
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map((speaker) => 
          <Speaker key={speaker.id} 
          speaker={speaker} 
          showSessions={showSessions} 
         onFavoriteToggle ={() => onFavoriteToggle(speaker.id)} 
          />
        )}
      </div>
    </div>
    )
}