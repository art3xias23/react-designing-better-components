import {useState} from 'react';

export default function useSpeakerState() {
    const [data, setData] = useState([]);
    const [requestStatus, setRequestStatus] = useState("");
    const [error, setError] = useState();

    return {data, setData,
            requestStatus, setRequestStatus,
            error, setError}
    }

