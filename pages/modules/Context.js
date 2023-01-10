import { useState, useEffect } from "react";
import { REQUEST_STATUS } from "../enums/requestStatus";

export function useStateManager(ms, initialData = []) {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState("");
  const [error, setError] = useState();
  const [theme, setTheme] = useState("light");
  const [showSessions, setShowSessions] = useState(true);
  const [inTransition, setInTransition] = useState(false);

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
    const originalRecords = [...data];

    const newRecords = data.map((record) =>
      record.id == updatedRecord.id ? updatedRecord : record
    );

    async function delayFunction() {
      try {
        setData(newRecords);
         await delay(ms);
        if (doneCallBack) {
          doneCallBack();
        }
      } catch (error) {
        console.log(error)
        if (doneCallBack) {
          doneCallBack();
        }
        setData(originalRecords);
      }
    }
    delayFunction();
  }
  return { data, requestStatus, error, updateRecord,theme, setTheme, showSessions,setShowSessions, inTransition, setInTransition };
}
