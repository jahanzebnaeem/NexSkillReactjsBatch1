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

	// const action = {type: 'FETCH_ALL', payload: []};
	// // return action;
	// dispatch(action);
};