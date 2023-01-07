export default function SpeakerInfo(props) {
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {props.first} {props.last}
        </h3>
      </div>
      <div>
        <p className="card-description">
          {props.bio}
        </p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{props.company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{props.handle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
