import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { PropagateLoader } from "../../shared/Spinner";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { ToastEmitter } from "../../shared/Toastify";
import { getPosts } from "../../redux/actions";

export default function ShowPosts() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const posts = useSelector((state: any) => state.posts);
  useEffect(() => {
    setLoading(true);
    fetch("http://posts.com/posts?order=descending")
      .then(async (res) => {
        const result = await res.json();
        dispatch(getPosts(result));
        setLoading(false);
      })
      .catch((err) => {
        ToastEmitter({ msg: "Something went wrong, Try again!", type: "error" });
        setLoading(false);
      });
  }, [dispatch]);

  return loading ? (
    <PropagateLoader />
  ) : (
    <Container maxWidth='lg' style={{ overflowY: "auto", height: 450 }}>
      <Grid container spacing={3} style={{ paddingTop: 10 }}>
        {(posts || []).map((item: any, index: number) => {
          return (
            <Grid item xs={4} key={index}>
              <PostCard post={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
