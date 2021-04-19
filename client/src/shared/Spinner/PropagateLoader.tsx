import React from "react";
import Loader from "react-spinners/PropagateLoader";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function PropagateLoader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Loader color={"#1A90FF"} loading={true} size={30} />
    </div>
  );
}
