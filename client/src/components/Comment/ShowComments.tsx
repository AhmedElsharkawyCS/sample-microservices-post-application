import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import faker from "faker";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      overflow: "auto",
      maxHeight: 200,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  }),
);
interface IComment {
  id: string;
  content: string;
  createdAt: Date;
}
interface IProps {
  comments: Array<IComment>;
}
export default function ShowComments({ comments }: IProps) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {comments.map((comment, index) => {
        return (
          <React.Fragment key={comment.id}>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: faker.commerce.color() }}>{faker.name.findName()[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={faker.name.findName()} secondary={comment.content} />
            </ListItem>
            <Divider component='li' />
          </React.Fragment>
        );
      })}
    </List>
  );
}
