import SpeakerSessions from "./SpeakerSessions";
import SpeakerInfo from "./SpeakerInfo";
import SpeakerPicture from "./SpeakerPicture";
import { useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
export default function Speaker({
  speaker: { id, first, last, bio, company, twitterHandle, favorite, sessions },
  updateRecord,
}) {
  const { showSessions } = useContext(SpeakerFilterContext);
// console.log(`Speaker.js Sessions Count`);
// console.dir(sessions.length)

console.log(`Speaker.js sessions type ${typeof(sessions)}`)
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerPicture id={id} first={first} last={last} />
        <SpeakerInfo
          first={first}
          last={last}
          bio={bio}
          company={company}
          handle={twitterHandle}
          favorite={favorite}
          updateRecord={updateRecord}
        />
      </div>
      {showSessions && 
        <SpeakerSessions sessions={sessions}/>
      }
    </div>
  );
}
