import { useVisibilityStateManager } from "../hooks/VisibilityStateManager";
import { SpeakerContext } from "../contexts/SpeakerContext";
import { useContext } from "react";

export default function SpeakerFavorite() {

const {speaker, updateRecord} = useContext(SpeakerContext);
 const {inTransition, setInTransition} = useVisibilityStateManager(); 
console.log("SpeakerFavorite:");
console.dir(speaker);

  function doneCallBack(){
    setInTransition(false)
    console.log(`In SpeakerFavorite ${new Date().getMilliseconds()}`)
  }
    return (
      <div className="action padB1">
        <div onClick={() => {
          setInTransition(true);
          updateRecord({...speaker, favorite: !speaker.favorite}, 
          doneCallBack)
        }}>
          <i
            className={
              speaker.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
            }
          />{" "}
          Favorite{" "}
          {inTransition ? 
          <span className="fas fa-circle-notch fa-spin"/> : null}
        </div>
      </div>
    );
  }