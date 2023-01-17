import {useState} from 'react';

export default function useSpeakerState() {
    const [data, setData] = useState([null]);
    const [requestStatus, setRequestStatus] = useState("");
    const [error, setError] = useState("");
        if(!data){
                setData(null);
        }
    return {data, setData,
            requestStatus, setRequestStatus,
            error, setError}
    }

