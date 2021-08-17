// jshint esversion:6
import React from 'react';
import Article from './Article/Article';

import useStyles from './styles';

const Articles = () => {
	const classes = useStyles();

	return (
		<>
			<h1>Articles</h1>
			<Article />
			<Article />
		</>
	);
}

export default Articles;
