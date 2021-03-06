import React from "react";
import Divider from "@material-ui/core/Divider";
import { CreatePost, ShowPosts } from "../components/Post";
export default function Home() {
  return React.useMemo(() => {
    return (
      <div>
        <CreatePost />
        <Divider variant='middle' />
        <ShowPosts />
      </div>
    );
  }, []);
}
