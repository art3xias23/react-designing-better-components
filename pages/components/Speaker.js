import SpeakerSessions from "./SpeakerSessions";
import SpeakerInfo from "./SpeakerInfo";
import SpeakerPicture from "./SpeakerPicture";
import { useContext, memo } from "react";
import { SpeakerFilterContext } from "../../contexts/SpeakerFilterContext";
import SpeakerDelete from "./SpeakerDelete";
import ErrorBoundary from "./ErrorBoundary";

const SpeakerNoErrorBoundary = memo(function Speaker({
  speaker,
  updateRecord,
  deleteRecord,
}) {
  const { showSessions } = useContext(SpeakerFilterContext);

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerPicture />
        <SpeakerInfo />
      </div>
      {showSessions && <SpeakerSessions />}
      <SpeakerDelete />
    </div>
  );
},
areEqualSpeaker);

function areEqualSpeaker(prevProps, nextProps) {
  return prevProps.speaker.favorite == nextProps.speaker.favorite;
}

function Speaker(props) {
  return (
    <ErrorBoundary errorUI={<div>Somethin went wrong in the speaker card</div>}>
      <SpeakerNoErrorBoundary {...props}></SpeakerNoErrorBoundary>
    </ErrorBoundary>
  );
}

export default Speaker;
