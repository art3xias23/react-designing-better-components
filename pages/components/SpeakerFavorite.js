export default function SpeakerFavorite({ favorite, updateRecord }) {
  function doneCallBack(){
    console.log(`In SpeakerFavorite ${new Date().getMilliseconds()}`)
  }
    return (
      <div className="action padB1">
        <span onClick={() => {
          updateRecord(doneCallBack)
        }}>
          <i
            className={
              favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
            }
          />{" "}
          Favorite{" "}
        </span>
      </div>
    );
  }