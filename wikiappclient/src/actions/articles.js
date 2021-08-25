// jshint esversion:8

import * as api from '../api';

// Action Creators
export const getArticles = () => async (dispatch) => {
	try {
		const {data} = await api.fetchArticles(); // 10 min

		dispatch({type: 'FETCH_ALL', payload: data});
	} catch (error) {
		console.log(error);
	}
};

export const createArticle = (article) => async (dispatch) => {
	try {
		const {data} = await api.createArticle(article);

		dispatch({type: 'CREATE', payload: data});
	} catch (error) {
		console.log(error);
	}
};