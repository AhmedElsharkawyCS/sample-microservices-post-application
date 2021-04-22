export const createPost = (payload: any) => ({
  type: "CREATE_POST",
  payload,
});

export const createComment = (payload: any) => ({
  type: "CREATE_COMMENT",
  payload,
});

export const getPosts = (payload: any) => ({
  type: "GET_POSTS",
  payload,
});
