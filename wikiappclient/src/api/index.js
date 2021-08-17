// jshint esversion:6
import axios from "axios";

const url = "http://localhost:4000/articles";

export const fetchArticles = () => axios.get(url);