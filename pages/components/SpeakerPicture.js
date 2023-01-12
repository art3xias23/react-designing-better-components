import { SpeakerContext } from "../contexts/SpeakerContext";
import {useContext} from 'react';

export default function SpeakerPicture() {
  const {speaker: {id, first, last}} = useContext(SpeakerContext);
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
}
