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

  function updateRecord(record, doneCallBack) {

    console.log("speaker state manager record: ")
    console.dir(record);

    const originalRecords = [...data];

    const newRecords = data.map((rc) =>
      rc?.id == record.id ? record : rc 
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

  function insertRecord(record, doneCallBack) {
    const originalRecords = [...data];

    const newRecords = [record, ...data]
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

function deleteRecord(record, doneCallBack) {
    const originalRecords = [...data];

    const newRecords = [originalRecords.filter((rc) => rc.id != record.id)]
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

  return { data, requestStatus, error, updateRecord, insertRecord, deleteRecord };
}
