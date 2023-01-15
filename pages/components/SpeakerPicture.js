import { SpeakerContext } from "../contexts/SpeakerContext";
import {useContext, useState} from 'react';


function SpeakerWithImage({src, ...props}){
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  function onError(){
    if (!error){
      setImgSrc("/images/speaker-99999.jpg");
      setError(true);
    }
  }  
   return <img src={imgSrc} {...props} onError={onError} />
}
export default function SpeakerPicture() {
  const {speaker: {id, first, last}} = useContext(SpeakerContext);
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <SpeakerWithImage
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
}
