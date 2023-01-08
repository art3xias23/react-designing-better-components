import Speaker from './Speaker'
export default function SpeakersList({data}){
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