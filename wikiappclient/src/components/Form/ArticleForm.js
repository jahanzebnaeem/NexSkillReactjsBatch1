// jshint esversion:6
import React, {useState}from 'react';
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import { useDispatch } from 'react-redux'

import {createArticle} from '../../actions/articles';

import useStyles from './styles';

const ArticleForm = () => {
	const [articleData, setArticleData] = useState({title: '', content: ''});
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createArticle(articleData));
  }

	const clear = () => {

  }

	return (
		<Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
				<Typography variant="h6">Creating an Article</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={articleData.title} onChange={(e) => setArticleData({...articleData, title: e.target.value})} /> 
				<TextField name="content" variant="outlined" label="Content" fullWidth value={articleData.content} onChange={(e) => setArticleData({...articleData, content: e.target.value})} />
				<Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
			</form>
		</Paper>
	);
}

export default ArticleForm;
