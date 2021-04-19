import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ToastContainer } from "./shared/Toastify";
import { PropagateLoader } from "./shared/Spinner";
const Home = React.lazy(() => import("./pages/Home"));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: "#E6E6E6",
    },
    container: {},
    content: { backgroundColor: "#fff", height: "100vh", width: "100%", padding: theme.spacing(2) },
  }),
);
export default function App() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <CssBaseline />
      <Container maxWidth='xl' className={classes.container}>
        <div className={classes.content}>
          <React.Suspense fallback={<PropagateLoader />}>
            <Home />
          </React.Suspense>
        </div>
      </Container>
      <ToastContainer />
    </main>
  );
}
