import { useState } from "react";

function useSpeakerFilter(startingShowSessions = false){
    const [showSessions, setShowSessions] = useState(startingShowSessions);

    return {
        showSessions,
        setShowSessions
    }
}

export default useSpeakerFilter;