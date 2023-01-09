import { useState, useEffect } from "react";
import { REQUEST_STATUS } from "../enums/requestStatus";

export function useSpeakerStateManager(ms, initialData = []) {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState("");
  const [error, setError] = useState();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(async () => {
    try {
      setRequestStatus(REQUEST_STATUS.LOADING);
      await delay(ms);
      setData(initialData);
      setRequestStatus(REQUEST_STATUS.SUCCESS);
    } catch (error) {
      setRequestStatus(REQUEST_STATUS.FAILURE);
      setError(error);
    }
  }, []);

  function updateRecord(updatedRecord, doneCallBack) {
    console.log(`${updatedRecord.first} and ${updatedRecord.favorite}`)

    const newRecords = data.map((record) =>
      record.id == updatedRecord.id ? updatedRecord : record
    );

    async function delayFunction() {
      try {
        await delay(ms);
        if(doneCallBack) doneCallBack();
        setData(newRecords);
      } catch(error) {
        throw error;
      }
    }
    delayFunction();
  }
  return { data, requestStatus, error, updateRecord };
}
