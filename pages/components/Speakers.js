import Speaker from './Speaker'
import {data} from './../SpeakerData'

export default function Speakers(){
    return(
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker) => 
          <Speaker key={speaker.id} speaker={speaker} />
        )}
      </div>
    </div>
    )
}