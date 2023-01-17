import SpeakerSessions from "./SpeakerSessions";
import SpeakerInfo from "./SpeakerInfo";
import SpeakerPicture from "./SpeakerPicture";
import { useContext, memo } from "react";
import { SpeakerFilterContext } from "../../contexts/SpeakerFilterContext";
import SpeakerDelete from './SpeakerDelete';
import ErrorBoundary from './ErrorBoundary';

const SpeakerNoErrorBoundary = memo(function Speaker({
  speaker,
  updateRecord,
  deleteRecord
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
}, areEqualSpeaker);

function Speaker(props){
  return(
    <ErrorBoundary>
      <SpeakerNoErrorBoundary {...props}></SpeakerNoErrorBoundary>
    </ErrorBoundary>
  )
}

function areEqualSpeaker(prevProps, nextProps){
  return (prevProps.speaker.favorite == nextProps.speaker.favorite);
}

export default Speaker;