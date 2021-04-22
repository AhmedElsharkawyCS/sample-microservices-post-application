import express, { Request, Response } from "express";
import cors from "cors";
import { IPost } from "./@types";
import { EEventsTypes } from "./@types";

let posts: Array<IPost> = [];
const port = 4002;
const app = express();
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// parse application/json
app.use(express.json());
app.post("/events", (req: Request, res: Response) => {
  const { type, data } = req.body;
  if (type === EEventsTypes.CREATE_POST) {
    posts.push({ ...data, comments: [] });
  }
  if (type === EEventsTypes.CREATE_COMMENT) {
    const elementIndex = posts.findIndex((item) => item.id === data.postId);
    posts[elementIndex].comments.push(data.comment);
  }
  res.status(200).send({ status: "ok" });
});
app.get("/posts", (req: Request, res: Response) => {
  const { order } = req.query;
  if (order == "descending") posts = posts.sort((a, b) => (new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1));
  res.status(200).send(posts);
});

app.listen(port, () => {
  console.log("Query service running on port: " + port);
});
