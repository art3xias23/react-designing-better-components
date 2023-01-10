import Header from './Header'
import Speakers from './Speakers'
import { useVisibilityStateManager } from '../modules/VisibilityStateManager'
import {createContext} from 'react'

export const ThemeContext = createContext();
export default function App(){
const {theme, setTheme, showSessions, setShowSessions} = useVisibilityStateManager();
console.log(`Theme: `, theme);
    return(
      <ThemeContext.Provider value={
        {setTheme, theme}
      }>
    <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
      <Header />
      <Speakers setShowSessions={setShowSessions}/>
    </div>
    </ThemeContext.Provider>
    )
}