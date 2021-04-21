import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";

const port = 4015;
const app = express();
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// parse application/json
app.use(express.json());
app.post("/events", (req: Request, res: Response) => {
  const event = req.body;
  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);
  res.status(200).send({ status: "ok" });
});
app.listen(port, () => {
  console.log("Event-bus running on port: " + port);
});
