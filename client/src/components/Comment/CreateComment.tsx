import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AddCommentIcon from "@material-ui/icons/AddComment";
import CancelIcon from "@material-ui/icons/Cancel";
import DoneIcon from "@material-ui/icons/Save";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import { ToastEmitter } from "../../shared/Toastify";
import { onHttpRequest } from "../../hooks/useFetch";
import { CircularProgress, InputAdornment } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import { createComment } from "../../redux/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(2),
    },
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }),
);
interface IProps {
  postId: string;
}
export default function CreateComment({ postId }: IProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [add, setAdd] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [commentTitle, setCommentTitle] = useState<string>("");
  const handleOnAddComment = () => {
    if (!commentTitle) return ToastEmitter({ msg: "Invalid comment content", type: "error" });
    setLoading(true);
    const body = {
      content: commentTitle,
    };
    onHttpRequest({ url: `http://posts.com/posts/${postId}/comments`, body, method: "POST" })
      .then((res) => {
        ToastEmitter({ msg: "Successfully created", type: "success" });
        setLoading(false);
        setCommentTitle("");
        setAdd(false);
        dispatch(createComment(res));
      })
      .catch((err) => {
        ToastEmitter({ msg: "Something went wrong, Try again!", type: "error" });
        setLoading(false);
      });
  };

  return (
    <div className={classes.root}>
      {add && (
        <TextField
          variant='standard'
          margin='normal'
          required
          fullWidth
          id='commentTitle'
          label='New Comment'
          name='commentTitle'
          autoComplete='commentTitle'
          multiline
          autoFocus
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='Submit comment'
                  onClick={() => {
                    handleOnAddComment();
                  }}
                >
                  {loading ? <CircularProgress size={30} /> : <DoneIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={commentTitle}
          onChange={({ target: { value } }) => setCommentTitle(value)}
        />
      )}
      <Tooltip
        title={add ? "Cancel Comment" : "Add Comment"}
        aria-label='add'
        onClick={() => {
          setAdd(!add);
          setCommentTitle("");
        }}
      >
        <Fab color={add ? "secondary" : "primary"} className={classes.fab}>
          {add ? <CancelIcon /> : <AddCommentIcon />}
        </Fab>
      </Tooltip>
    </div>
  );
}
