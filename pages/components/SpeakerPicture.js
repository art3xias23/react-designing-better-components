export default function SpeakerPicture(props) {
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/speaker-${props.id}.jpg`}
        width="300"
        alt={`${props.first} ${props.last}`}
      />
    </div>
  );
}
