import Speaker from './Speaker'
import {useSpeakerStateManager } from '../hooks/SpeakerStateManager'
import ReactPlaceholder from 'react-placeholder/lib'
import {REQUEST_STATUS} from './../enums/requestStatus'
import {initialData} from '../data'
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext'
import { useContext } from 'react'

export default function SpeakersList(){
  const {data,error,
    requestStatus,
    updateRecord} = useSpeakerStateManager(2000, initialData);

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
      <div className="row">
        {data.map((speaker) => 
          <Speaker key={speaker.id} 
          speaker={speaker} 
         updateRecord ={(doneCallBack) => updateRecord({...speaker, favorite: !speaker.favorite}, doneCallBack)} 
          />
        )}
      </div>
      </ReactPlaceholder>
    </div>
    )
}