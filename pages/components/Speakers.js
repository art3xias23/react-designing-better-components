import SpeakersList from './SpeakersList'
import {data} from './../SpeakerData'

export default function Speakers(){
    return(
    <div className="container-fluid">
      <SpeakersList data={data}/>
    </div>
    )
}