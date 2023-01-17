import { useContext } from "react";
import { SpeakerContext } from "../../contexts/SpeakerContext";

function SpeakerDelete() {
  const { speaker, deleteRecord } = useContext(SpeakerContext);
  console.log("SpeakerDelete speaker")
  console.dir(speaker);
  console.dir(deleteRecord);
  return (
    <span className="session w-100">
      <a href="#" className="remSes">
        <i
          onClick={(e) => {
            e.preventDefault();
            if (
              window.confirm(`Are you sure you want to delete speaker ${speaker.first} ${speaker.last}?`)
            ) {
              deleteRecord(speaker);
            }
          }}
        >
          -
        </i>
      </a>
      <span className="padL2">Delete Speaker</span>
    </span>
  );
}

export default SpeakerDelete;