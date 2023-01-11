import Session from "./Session";
export default function SpeakerSessions({sessions}) {
  return (
    sessions.map((session) => {
    <div className="sessionBox card h-250">
      <Session title={session.title} room={session.room} />
    </div>}
  ));
}
