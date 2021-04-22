export interface IPost {
  id: string;
  title: string;
  createdAt: Date;
  comments: Array<IComment>;
}
export interface IComment {
  id: string;
  content: string;
  createdAt: Date;
}

export enum EEventsTypes {
  CREATE_POST = "CREATE_POST",
  CREATE_COMMENT = "CREATE_COMMENT",
}
