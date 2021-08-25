// jshint esversion:6

export default (articles = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
			// return state;
			// return articles;
      // console.log(action.payload);
      return [...articles, action.payload];
    default:
      return articles;
	}
};

// content: '', title: ''
// content: '', title: 'abc'