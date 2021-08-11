// jshint esversion:6
import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import Articles from './components/Articles/Articles';
import ArticleForm from './components/Form/ArticleForm';

import logo from "./images/CompanyLogo.png";

const App = () => {
	return (
		<Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Wiki Application </Typography>
        <img src={logo} alt="company logo" height="60" />
      </AppBar>
			<Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
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