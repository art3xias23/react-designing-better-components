import { useEffect } from "react";
import { REQUEST_STATUS } from "../enums/requestStatus";
import useSpeakerStateManager from "./useSpeakerState";
import axios from "axios";

const restUrl = "api/speakers";

export default function useRequestRest() {
  console.log("Called useRequestRest");
  console.log("useRequestRet calling useSpeakerStateManager()")
  const {data,error,requestStatus,setData,
         setRequestStatus,
       setError} = useSpeakerStateManager();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(async () => {
    try {
  console.log("Calling useRequestRest useEffect()");
      setRequestStatus(REQUEST_STATUS.LOADING);
      const result = await axios.get(restUrl);
      console.log("useRequestRest, data: ");
      console.dir(result.data);
      setData(result.data);
      setRequestStatus(REQUEST_STATUS.SUCCESS);
      return () => console.log("Exiting useRequestRest useEffect()")
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
        await axios.put(`${restUrl}/${record.id}`, record);
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
        await axios.post(`${restUrl}/99999`, record);
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

    const newRecords = originalRecords.filter((rc) => rc.id != record.id)
    async function delayFunction() {
      try {
        setData(newRecords);
        axios.delete(`${restUrl}/${record.id}`, record);
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

  return { data, error, requestStatus, updateRecord, insertRecord, deleteRecord };
}
