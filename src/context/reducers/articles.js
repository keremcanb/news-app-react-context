import { SET_LOADING, GET_ARTICLES, GET_ARTICLE, SEARCH_ARTICLES, UPDATE_SORT, SORT_ARTICLES } from '../actions/types';

const articles_reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };

    case GET_ARTICLES:
      return { ...state, articles: payload, loading: false };

    case GET_ARTICLE:
      return { ...state, article: payload, loading: false };

    case SEARCH_ARTICLES:
      return { ...state, searchResults: payload, loading: false };

    case UPDATE_SORT:
      return { ...state, sort: payload };

    case SORT_ARTICLES: {
      const { sort, articles } = state;
      let tempArticles = [...articles];
      if (sort === 'newest') {
        tempArticles = tempArticles.sort((a, b) => {
          if (a.webPublicationDate < b.webPublicationDate) {
            return -1;
          }
          if (a.webPublicationDate > b.webPublicationDate) {
            return 1;
          }
          return 0;
        });
      }
      if (sort === 'lowest') {
        tempArticles = tempArticles.sort((a, b) => b.webPublicationDate - a.webPublicationDate);
      }
      return { ...state, articles: tempArticles };
    }

    default:
      return state;
  }
};

export default articles_reducer;
