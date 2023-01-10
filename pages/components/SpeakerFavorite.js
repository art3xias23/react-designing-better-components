import { useVisibilityStateManager } from "../hooks/VisibilityStateManager";
export default function SpeakerFavorite({ favorite, updateRecord }) {

 const {inTransition, setInTransition} = useVisibilityStateManager(); 

  function doneCallBack(){
    setInTransition(false)
    console.log(`In SpeakerFavorite ${new Date().getMilliseconds()}`)
  }
    return (
      <div className="action padB1">
        <div onClick={() => {
          setInTransition(true);
          updateRecord(doneCallBack)
        }}>
          <i
            className={
              favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
            }
          />{" "}
          Favorite{" "}
          {inTransition ? 
          <span className="fas fa-circle-notch fa-spin"/> : null}
        </div>
      </div>
    );
  }