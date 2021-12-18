import React, { useEffect , useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"; // Block of Componants
import { useDispatch } from "react-redux"; // use  'useDispatch' Hook

import Memories from "./images/memories.png"; // Memories image
import { getPosts } from "./actions/posts.js"; // Memories image
import Posts from "./components/Posts/Posts"; // Posts Component
import Form from "./components/Form/Form"; // Form Component
import useStyles from "./styles.js"; // App Style

const App = () => {
  const [currentId , setCurrentId] = useState(0)
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={Memories} alt="Memories" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
          className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts  setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form  currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
