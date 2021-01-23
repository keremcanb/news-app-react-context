/* eslint-disable camelcase */
import { SET_LOADING, GET_ARTICLES, GET_ARTICLE, SEARCH_ARTICLES, UPDATE_SORT, SORT_ARTICLES } from '../actions/types';

const initialState = {
  loading: true,
  articles: [],
  article: {},
  searchResults: [],
  sort: 'newest'
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

    case UPDATE_SORT:
      return { ...state, sort: payload };

    case SORT_ARTICLES: {
      const { sort, filtered_articles } = state;
      let tempProducts = [...filtered_articles];
      if (sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
      }
      if (sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      return { ...state, filtered_products: tempProducts };
    }

    default:
      return state;
  }
};
