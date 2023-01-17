import React, {createContext} from 'react';
import useSpeakerFilter from '../hooks/useSpeakerFilter';


const SpeakerFilterContext = createContext({startingShowSessions: () => {}, startingEventYears: () => []});

function SpeakerFilterProvider({children, startingShowSessions, startingEventYears}){

    const {showSessions, setShowSessions,
           eventYear, setEventYear,
           searchQuery, setSearchQuery, EVENT_YEARS} = useSpeakerFilter(startingShowSessions, startingEventYears);

    return(
        <SpeakerFilterContext.Provider value={{showSessions, setShowSessions,
                                            eventYear,setEventYear,
                                            searchQuery, setSearchQuery,
                                            EVENT_YEARS}}>
            {children}
        </SpeakerFilterContext.Provider>
    )
}

export {SpeakerFilterContext, SpeakerFilterProvider};