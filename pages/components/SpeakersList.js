import Speaker from './Speaker'
export default function SpeakersList({data, showSessions}){
    return(
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker) => 
          <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions} />
        )}
      </div>
    </div>
    )
}