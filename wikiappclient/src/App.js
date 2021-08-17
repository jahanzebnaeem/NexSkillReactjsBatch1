// jshint esversion:6
import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import {getArticles} from './actions/articles';
import Articles from './components/Articles/Articles';
import ArticleForm from './components/Form/ArticleForm';

import logo from "./images/CompanyLogo.png";

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

	return (
		<Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Wiki Application </Typography>
        <img className={classes.image} src={logo} alt="company logo" height="60" />
      </AppBar>
			<Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Articles />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ArticleForm />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
	);
}

export default App;