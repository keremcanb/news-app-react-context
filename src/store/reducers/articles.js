import { SET_LOADING, GET_ARTICLES, GET_ARTICLE, SEARCH_ARTICLES } from '../actions/types';

const initialState = {
  loading: true,
  articles: [],
  article: {},
  searchResults: []
};

export default (state = initialState, action) => {
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

    default:
      return state;
  }
};
