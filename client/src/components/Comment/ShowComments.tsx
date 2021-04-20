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

export default function ShowComments() {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: faker.commerce.color() }}>{faker.name.findName()[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={faker.name.findName()} secondary={"comment"} />
      </ListItem>
      <Divider component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: faker.commerce.color() }}>{faker.name.findName()[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={faker.name.findName()} secondary={"comment"} />
      </ListItem>
      <Divider component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: faker.commerce.color() }}>{faker.name.findName()[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={faker.name.findName()} secondary={"comment"} />
      </ListItem>
    </List>
  );
}
