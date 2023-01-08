import Header from './Header'
import Speakers from './Speakers'
import { useStateManager } from '../modules/StateManager'

export default function App(){
const {theme, setTheme, showSessions, setShowSessions} = useStateManager();
console.log(`Theme: `, theme);
    return(
    <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
      <Header theme={theme} />
      <Speakers theme={theme} setTheme={setTheme} showSessions={showSessions} setShowSessions={setShowSessions}/>
    </div>
    )
}