export default function SpeakerSession({ title, room }) {
  return (
    <div className="sessionBox card h-250">
      <span className="session w-100">
        {title} <strong>Room: {room}</strong>
      </span>
    </div>
  );
}
