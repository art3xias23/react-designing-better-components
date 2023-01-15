import { useVisibilityStateManager } from "../hooks/VisibilityStateManager";
import { SpeakerContext } from "../contexts/SpeakerContext";
import { useContext } from "react";

export default function SpeakerFavorite() {

const {speaker, updateRecord} = useContext(SpeakerContext);
 const {inTransition, setInTransition} = useVisibilityStateManager(); 

  function doneCallBack(){
    setInTransition(false)
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