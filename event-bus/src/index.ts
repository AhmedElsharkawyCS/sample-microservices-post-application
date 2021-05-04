import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import { IEvent } from "./@types";

const events: Array<IEvent> = [];
const port = 4015;
const app = express();
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// parse application/json
app.use(express.json());
app.post("/events", (req: Request, res: Response) => {
  const event = req.body;
  //push event to events store
  events.push(event);

  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  res.status(200).send({ status: "ok" });
});

app.get("/events", (req: Request, res: Response) => {
  res.status(200).send(events);
});
app.listen(port, () => {
  console.log("Event-bus running on port: " + port);
});
