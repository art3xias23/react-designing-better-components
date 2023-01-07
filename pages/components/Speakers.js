import SpeakersList from './SpeakersList'
import {data} from './../SpeakerData'
import Header from './Header'
import SpeakersToolbar from './SpeakersToolbar'

export default function Speakers(){
    return(
    <div className="container-fluid">
      <Header />
      <SpeakersToolbar/>
      <SpeakersList data={data}/>
    </div>
    )
}