//import {initalData as data} from '../../../data'
import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default async function handler(req, res) {
  const method = req?.method;
  console.log(`[id].js method: ${method}`)
  const id = parseInt(req?.query.id);
  console.log(`[id].js id: ${id}`)
  const recordFromBody = req?.body;
  console.log(`[id].js recordFromBody`);
  console.dir(recordFromBody);
  const jsonFile = path.resolve("./", "db.json");
  console.log(`[id].js jsonFile ${jsonFile} `);

  switch (method) {
    case "POST":
      await postMethod();
      break;
    case "PUT":
      await putMethod();
      break;
    case "DELETE":
      await deleteMethod();
      break;
    default:
      res.status(501).send(`Method ${method} not implemented`);
  }

  async function postMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;

      if(!speakers){
        res.status(404).send("Error: Request failed with status code 404");
      } else{
        const newId = speakers.reduce((accumulator, currentValue) => {
            const idCurrent = parseInt(currentValue.Id);
            return idCurrent > accumulator ? idCurrent : accumulator;
        }, 0) + 1;

        const newRecord = {...recordFromBody, id: newId};
        const newSpeakersArray = [newRecord, ...speakers];

            writeFile(jsonFile, JSON.stringify({speakers: newSpeakersArray}, null, 2));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(newRecord, null, 2));
        console.log(`POST /api/speakers/{$id} status: 200`);
      }

    } catch (e) {
      console.log("/api/speakers error", e);
      res.status(404).send("File Not Found on server");
    }
  }

  async function putMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;

      if(!speakers){
        res.status(404).send("Error: Request failed with status code 404");
      } else{
        const newSpeakersArray = speakers.map((rec) => rec.id == id ? recordFromBody : rec);

            writeFile(jsonFile, JSON.stringify({speakers: newSpeakersArray}, null, 2));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(recordFromBody, null, 2));
        console.log(`POST /api/speakers/{$id} status: 200`);
      }

    } catch (e) {
      console.log("/api/speakers error", e);
      res.status(404).send("File Not Found on server");
    }
  }

  async function deleteMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;
console.log("Speakers before delete: ")
console.dir(speakers);
      if(!speakers){
        res.status(404).send("Error: Request failed with status code 404");
      } else{
        const newSpeakersArray = speakers.filter((rec) => rec.id != id);
        console.log("newSpeakersBody after deletion")
        console.dir(newSpeakersArray);
            writeFile(jsonFile, JSON.stringify({speakers: newSpeakersArray}, null, 2));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(speakers.find((rec) => rec.id == id), null, 2));
        console.log(`DELETE /api/speakers/${id} status: 200`);
      }

    } catch (e) {
      console.log("/api/speakers error", e);
      res.status(404).send("File Not Found on server");
    }
  }
}
