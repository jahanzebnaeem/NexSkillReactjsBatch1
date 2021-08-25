// jshint esversion:8

import ArticleMsg from '../models/articleMsg.js';

// export const getArticles = (req, res) => {
// 	res.send("This Works!");
// };

// export const getArticles = (req, res) => {
// 	try {
// 		const articleMsgs = ArticleMsg.find();

// 		// console.log(articleMsgs);

// 		res.status(200).json(articleMsgs);
// 	} catch (error) {
// 		res.status(404).json({message: error});
// 	}
// };

export const getArticles = async (req, res) => {
	try {
		const articleMsgs = await ArticleMsg.find();

		// console.log(articleMsgs);

		res.status(200).json(articleMsgs);
	} catch (error) {
		res.status(404).json({message: error});
	}
};

// export const createArticle = (req, res) => {
// 	res.send("Article Created!");
// };

export const createArticle = async (req, res) => {
	const article = req.body;

	const newArticle = new ArticleMsg(article);

	try {
		await newArticle.save();

		res.status(201).json(newArticle);
	} catch (error) {
		res.status(409).json({message: error});
	}
};
