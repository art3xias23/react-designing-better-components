import Speaker from "./Speaker";
import useRequestRest from "../../hooks/useRequestRest";
import ReactPlaceholder from "react-placeholder/lib";
import { REQUEST_STATUS } from "../../enums/requestStatus";
import { useContext } from "react";
import { SpeakerFilterContext } from "../../contexts/SpeakerFilterContext";
import SpeakerAdd from "./SpeakerAdd";
import { SpeakerProvider } from "../../contexts/SpeakerContext";

export default function SpeakersList() {
  const {
    data,
    error,
    requestStatus,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequestRest();

  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

  if (requestStatus == REQUEST_STATUS.FAILURE)
    return (
      <div className="text-danger">
        ERROR: <b>loading Speaker Data Failed : {error}</b>
      </div>
    );
  return (
    <div className="container speakers-list">
      <ReactPlaceholder
        type="media"
        rows={15}
        className="speakerslist-placeholder"
        ready={requestStatus == REQUEST_STATUS.SUCCESS}
      >
        <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
        <div className="row">
          {data && data
            .filter((speaker) =>
              searchQuery
                ? speaker.first.includes(searchQuery) ||
                  speaker.last.includes(searchQuery)
                : speaker
            )
            .map((speaker) => (
              <SpeakerProvider
                speaker={speaker}
                updateRecord={updateRecord}
                deleteRecord={deleteRecord}
              >
                <Speaker
                  key={speaker.id}
                  speaker={speaker}
                  updateRecord={updateRecord}
                  deleteRecord={deleteRecord}
                />
              </SpeakerProvider>
            ))}
        </div>
      </ReactPlaceholder>
    </div>
  );
}
