import express, { Request, Response } from "express";
import cors from "cors";
import { randomBytes } from "crypto";
import { IPost } from "./@types";
import axios from "axios";

const port = 4000;
const app = express();
const posts: Array<IPost> = [];
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// parse application/json
app.use(express.json());
app.get("/posts", (req: Request, res: Response) => {
  res.status(200).send(posts);
});
app.post("/posts/create", (req: Request, res: Response) => {
  const { title } = req.body;
  const postId = randomBytes(5).toString("hex");
  const post: IPost = { id: postId, title, createdAt: new Date() };
  //publish event
  axios.post("http://event-bus-cluster-ip-service:4015/events", { type: "CREATE_POST", data: post });
  //end
  posts.push(post);
  res.status(201).send(post);
});

app.post("/events", (req: Request, res: Response) => {
  const data = req.body;
  console.log("Received event:", data.type);
  res.status(200).send({ status: "ok" });
});

app.listen(port, () => {
  console.log("V3");
  console.log("Posts service running on port: " + port);
});
