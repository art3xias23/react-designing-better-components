import SpeakersToolbar from './SpeakersToolbar'
import SpeakersList from './SpeakersList'

export default function Speakers({ data, theme, setTheme, showSessions, setShowSessions}) {
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
