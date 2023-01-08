import Speaker from './Speaker'
import {useStateManager } from '../modules/StateManager'
import ReactPlaceholder from 'react-placeholder/lib'
import {REQUEST_STATUS} from './../enums/requestStatus'

export default function SpeakersList({showSessions}){
  const {speakerData, isLoading,
    requestStatus,
    onFavoriteToggle} = useStateManager(2000);

  

  if(requestStatus == REQUEST_STATUS.FAILURE) return(
    <div className="text-danger">
      ERROR: <b>loading Speaker Data Failed : {error}</b>
    </div>
  )

    return(
    <div className="container speakers-list">
      <ReactPlaceholder
      type="media"
      rows={15}
      className="speakerslist-placeholder"
      ready={requestStatus == REQUEST_STATUS.SUCCESS} >
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