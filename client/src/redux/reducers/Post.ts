function post(state: any = [], { payload, type }: any) {
  switch (type) {
    case "CREATE_COMMENT":
      return state.map((item: any) => {
        if (item.id === payload.postId) item.comments = [...item.comments, ...payload.comments];
        return item;
      });
    case "CREATE_POST":
      const posts = [{ ...payload, comments: [] }, ...state];
      return posts;
    case "GET_POSTS":
      return payload;
    default:
      return state;
  }
}

export default post;
