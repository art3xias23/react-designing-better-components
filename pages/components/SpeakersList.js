import Speaker from './Speaker'
import {useSpeakerStateManager } from '../hooks/SpeakerStateManager'
import ReactPlaceholder from 'react-placeholder/lib'
import {REQUEST_STATUS} from './../enums/requestStatus'
import {initialData} from '../data'
import { useContext } from 'react'
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext'
import SpeakerAdd from './SpeakerAdd'

export default function SpeakersList(){
  const {data,error,
    requestStatus,
    updateRecord, insertRecord, deleteRecord} = useSpeakerStateManager(2000, initialData);

const {searchQuery, eventYear} = useContext(SpeakerFilterContext);

  if(requestStatus == REQUEST_STATUS.FAILURE) return(
    <div className="text-danger">
      ERROR: <b>loading Speaker Data Failed : {error}</b>
    </div>
  )
    return(
    <div className="container speakers-list">
      <ReactPlaceholder
      type="media"
      rows={15}
      className="speakerslist-placeholder"
      ready={requestStatus == REQUEST_STATUS.SUCCESS} >
        <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord}/>
      <div className="row">
        {data
        .filter((speaker) => searchQuery ? (speaker.first.includes(searchQuery) || speaker.last.includes(searchQuery)) : speaker)
        .map((speaker) => 
          <Speaker key={speaker.id} 
          speaker={speaker} 
         updateRecord ={updateRecord} 
         insertRecord ={insertRecord}
         deleteRecord={deleteRecord}
          />
        )}
      </div>
      </ReactPlaceholder>
    </div>
    )
}