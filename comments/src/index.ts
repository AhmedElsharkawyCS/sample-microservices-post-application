import express, { Request, Response } from "express";
import cors from "cors";
import { randomBytes } from "crypto";
import { ICommentSByPost, IComment } from "./@types";

const port = 4001;
const app = express();
const postComments: Array<ICommentSByPost> = [];
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// parse application/json
app.use(express.json());
app.get("/posts/:id/comments", (req: Request, res: Response) => {
  const postCs = postComments.find((i) => i.postId === req.params.id);
  if (!postCs) return res.status(404).send({});
  res.status(200).send(postCs);
});
app.post("/posts/:id/comments", (req: Request, res: Response) => {
  const { id } = req.params;
  const { content } = req.body;
  const commentId = randomBytes(5).toString("hex");
  const elementIndex = postComments.findIndex((i) => i.postId === id);
  const comment: IComment = { content, id: commentId };
  if (elementIndex >= 0) {
    const { comments } = postComments[elementIndex];
    comments.push(comment);
    postComments[elementIndex].comments = comments;
  } else {
    postComments.push({ postId: id, comments: [comment] });
  }
  const postCs = postComments.find((i) => i.postId === id);
  res.status(201).send(postCs);
});

app.listen(port, () => {
  console.log("Comments service running on port: " + port);
});
