import SpeakerSessions from "./SpeakerSessions";
import SpeakerInfo from "./SpeakerInfo";
import SpeakerPicture from "./SpeakerPicture";
import { useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { SpeakerProvider } from "../contexts/SpeakerContext";

export default function Speaker({
  speaker,
  updateRecord,
}) {
  const { showSessions } = useContext(SpeakerFilterContext);

  return (
    <SpeakerProvider speaker={speaker} updateRecord={updateRecord}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <SpeakerPicture />
          <SpeakerInfo />
        </div>
        {showSessions && <SpeakerSessions />}
      </div>
    </SpeakerProvider>
  );
}
