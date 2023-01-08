import Speaker from './Speaker'
import { useStateManager } from '../modules/StateManager'
export default function SpeakersList({showSessions}){
  const {speakerData, setSpeakerData} = useStateManager();
  const onFavoriteToggle =(speakerId) =>{
    console.log("re-toggle")
    const speakerPrevData = speakerData.find(function(x) {return  x.id==speakerId});

    const updatedSpeakerNewData = {...speakerPrevData, favorite: !speakerPrevData.favorite}

    const newSpeakersData = speakerData.map((speaker) => 
    speaker.id == speakerId ? updatedSpeakerNewData : speaker);

    setSpeakerData(newSpeakersData);
  }
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