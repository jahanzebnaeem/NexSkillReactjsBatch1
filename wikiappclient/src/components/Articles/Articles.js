// jshint esversion:6
import React from 'react';
import {useSelector} from 'react-redux';

import Article from './Article/Article';

import useStyles from './styles';

const Articles = () => {
	const classes = useStyles();
	const articles = useSelector((state) => state.articles);

	console.log(articles);

	return (
		<>
			<h1>Articles</h1>
			<Article />
			<Article />
		</>
	);
}

export default Articles;
