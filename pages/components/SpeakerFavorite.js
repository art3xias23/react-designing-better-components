export default function SpeakerFavorite({ favorite, updateRecord }) {
    return (
      <div className="action padB1">
        <span onClick={updateRecord}>
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