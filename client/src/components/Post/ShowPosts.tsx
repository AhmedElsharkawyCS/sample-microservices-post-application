import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useFetch } from "../../hooks/useFetch";
import { PropagateLoader } from "../../shared/Spinner";
import PostCard from "./PostCard";

export default function ShowPosts() {
  const { data, loading } = useFetch({ url: "http://localhost:4000/posts" });
  console.log(data);
  return loading ? (
    <PropagateLoader />
  ) : (
    <Container maxWidth='lg' style={{ overflowY: "auto", height: 450 }}>
      <Grid container spacing={3} style={{ paddingTop: 10 }}>
        {(data || []).map((item: any, index: number) => {
          return (
            <Grid item xs={4} key={index}>
              <PostCard content={item.title} createdAt={new Date(item.createdAt)} id={item.id} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
