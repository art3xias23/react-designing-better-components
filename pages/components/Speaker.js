import SpeakerSessions from "./SpeakerSessions";
import SpeakerInfo from "./SpeakerInfo";
import SpeakerPicture from "./SpeakerPicture";
import { useContext, memo } from "react";
import { SpeakerFilterContext } from "../../contexts/SpeakerFilterContext";
import { SpeakerProvider } from "../../contexts/SpeakerContext";
import SpeakerDelete from './SpeakerDelete'

const Speaker = memo(function Speaker({
  speaker,
  updateRecord,
  deleteRecord
}) {
  const { showSessions } = useContext(SpeakerFilterContext);

  return (
    <SpeakerProvider speaker={speaker} updateRecord={updateRecord} deleteRecord={deleteRecord}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <SpeakerPicture />
          <SpeakerInfo />
        </div>
        {showSessions && <SpeakerSessions />}
        <SpeakerDelete />
      </div>
    </SpeakerProvider>
  );
}, areEqualSpeaker);

function areEqualSpeaker(prevProps, nextProps){
  return (prevProps.speaker.favorite == nextProps.speaker.favorite);
}

export default Speaker;