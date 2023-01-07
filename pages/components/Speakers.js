import SpeakersList from './SpeakersList'
import {data} from './../SpeakerData'
import Header from './Header'
import SpeakersToolbar from './SpeakersToolbar'
import { useStateManager } from '../modules/StateManager'

export default function Speakers(){
const {theme, setTheme, showSessions, setShowSessions} = useStateManager();
console.log(`Theme: `, theme);
    return(
    <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
      <Header theme={theme} />
      <SpeakersToolbar theme={theme} setTheme={setTheme} showSessions={showSessions} setShowSessions={setShowSessions} />
      <SpeakersList data={data}/>
    </div>
    )
}