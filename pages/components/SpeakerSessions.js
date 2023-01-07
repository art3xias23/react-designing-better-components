import Session from "./Session";
export default function SpeakerSessions({ title, room }) {
  return (
    <div className="sessionBox card h-250">
      <Session title={title} room={room} />
    </div>
  );
}
