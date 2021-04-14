export interface ICommentSByPost {
  postId: string;
  comments: Array<IComment>;
}
export interface IComment {
  id: string;
  content: string;
}
