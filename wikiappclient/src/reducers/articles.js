// jshint esversion:6

export default (articles = [], action) => {
	// console.log(action.payload);
	switch (action.type) {
		case 'FETCH_ALL':
			// return state;
			// return articles;
      return action.payload;
    case 'CREATE':
			// return state;
			return articles;
      // console.log(action.payload);
      // return [...jobPosts, action.payload];
    default:
      return articles;
	}
};