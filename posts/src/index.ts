import express, { Request, Response } from "express";
import cors from "cors";
import { randomBytes } from "crypto";
import { IPost } from "./@types";

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
app.post("/posts", (req: Request, res: Response) => {
  const { title } = req.body;
  const postId = randomBytes(5).toString("hex");
  const post: IPost = { id: postId, title };
  posts.push(post);
  res.status(201).send(post);
});

app.listen(port, () => {
  console.log("Posts service running on port: " + port);
});
