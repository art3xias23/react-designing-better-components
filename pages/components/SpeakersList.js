import Speaker from './Speaker'
import {useStateManager } from '../modules/StateManager'
import ReactPlaceholder from 'react-placeholder/lib'

export default function SpeakersList({showSessions}){
  const {speakerData, isLoading,
    hasErrored, error,
    onFavoriteToggle} = useStateManager(2000);

  

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