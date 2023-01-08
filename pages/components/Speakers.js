import SpeakersToolbar from './SpeakersToolbar'
import SpeakersList from './SpeakersList'
import {data} from '../SpeakerData'

export default function Speakers({theme, setTheme, showSessions, setShowSessions}) {
  return (
    <>
      <SpeakersToolbar
        theme={theme}
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakersList data={data} showSessions={showSessions} />
    </>
  );
}
