import Speaker from './Speaker'
import {data} from '../SpeakerData'
import { useStateManager } from '../modules/StateManager'
export default function SpeakersList({showSessions}){
  const {speakerData, setSpeakerData} = useStateManager();
    return(
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map((speaker) => 
          <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions} />
        )}
      </div>
    </div>
    )
}