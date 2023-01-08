import Speaker from './Speaker'
import {useStateManager } from '../modules/StateManager'
import {useEffect} from 'react'
import {data} from './../SpeakerData'
import ReactPlaceholder from 'react-placeholder/lib'

export default function SpeakersList({showSessions}){
  const {speakerData, setSpeakerData, 
    isLoading, setIsLoading, 
    hasErrored, setHasErrored,
  error, setError} = useStateManager();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(async () => {
    try{
    setIsLoading(true);
    await delay(2000);
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

  if(hasErrored) return(
    <div className="text-danger">
      ERROR: <b>loading Speaker Data Failed : {error}</b>
    </div>
  )

  //if(isLoading) return <h3>Loading...</h3>

    return(
    <div className="container speakers-list">
      <ReactPlaceholder
      type="media"
      rows={15}
      className="speakerslist-placeholder"
      ready={isLoading == false} >
      <div className="row">
        {speakerData.map((speaker) => 
          <Speaker key={speaker.id} 
          speaker={speaker} 
          showSessions={showSessions} 
         onFavoriteToggle ={() => onFavoriteToggle(speaker.id)} 
          />
        )}
      </div>
      </ReactPlaceholder>
    </div>
    )
}