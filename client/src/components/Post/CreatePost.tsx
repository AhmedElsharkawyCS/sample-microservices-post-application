import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { MuiButton } from "../../shared/Button";
import { ToastEmitter } from "../../shared/Toastify";
import { onHttpRequest } from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions";

const useStyles = makeStyles((theme: Theme) => ({
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
}));

export default function CreatePost() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postTitle, setPostTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!postTitle) return ToastEmitter({ msg: "Invalid post title", type: "error" });
    const body = { title: postTitle };
    setLoading(true);
    onHttpRequest({ url: "http://posts.com/posts/create", body, method: "POST" })
      .then((res) => {
        ToastEmitter({ msg: "Successfully created", type: "success" });
        setLoading(false);
        setPostTitle("");
        dispatch(createPost(res));
      })
      .catch((err) => {
        ToastEmitter({ msg: "Something went wrong, Try again!", type: "error" });
        setLoading(false);
      });
  };
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleOnSubmit}>
          <TextField
            variant='standard'
            margin='normal'
            required
            fullWidth
            id='postTitle'
            label='Post Title'
            name='postTitle'
            autoComplete='title'
            multiline
            autoFocus
            value={postTitle}
            onChange={({ target: { value } }) => setPostTitle(value)}
          />
          <MuiButton type='submit' fullWidth variant='contained' color='primary' className={classes.submit} loading={loading}>
            Publish
          </MuiButton>
        </form>
      </div>
    </Container>
  );
}
