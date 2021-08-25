// jshint esversion:6

import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  title: String,
  content: String
});

const ArticleMsg = mongoose.model("Article", articleSchema);

export default ArticleMsg;
