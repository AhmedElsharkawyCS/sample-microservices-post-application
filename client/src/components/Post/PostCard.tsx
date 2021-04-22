import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import faker from "faker";
import CreateComment from "../Comment/CreateComment";
import Divider from "@material-ui/core/Divider";
import ShowComments from "../Comment/ShowComments";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);
interface IProps {
  post: { title: string; createdAt: Date; id: string; comments: Array<any> };
}

export default function PostCard({ post }: IProps) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {faker.name.firstName()[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={faker.name.findName()}
        subheader={new Date(post.createdAt).toDateString()}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {post.title}
        </Typography>
        <div style={{ marginTop: 20 }}>
          <Typography variant='body2' color='primary' component='h4' style={{ fontWeight: "bolder", fontSize: "1.4em", width: "-moz-fit-content" }}>
            <span>Comments</span>
            <Divider />
          </Typography>
          <ShowComments comments={post.comments} />
          <CreateComment postId={post.id} />
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
