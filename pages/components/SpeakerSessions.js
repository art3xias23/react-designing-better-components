import { useContext } from "react";
import { SpeakerContext } from "../contexts/SpeakerContext";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import Session from "./Session";

export default function SpeakerSessions() {

  const{speaker:{sessions}} = useContext(SpeakerContext);
  const {eventYear} = useContext(SpeakerFilterContext);

  return (
    sessions.filter((ss) => ss.eventYear == eventYear).map((session) => 
    <div className="sessionBox card h-250">
      <Session title={session.title} room={session.room.name} />
     </div>)
    // <div className="sesionBox card h-250">
    //   <Session title={sessions[0].title} room={sessions[0].room.name}/>
    // </div>
     );
  }
