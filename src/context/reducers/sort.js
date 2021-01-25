/* eslint-disable default-case */
import { LOAD_ARTICLES, UPDATE_SORT, SORT_ARTICLES } from '../actions/types';

const articles_reducer = (state, action) => {
  const { type, payload } = action;
  const { sort, filtered } = state;

  switch (type) {
    case LOAD_ARTICLES: {
      return { ...state, articles: [...payload], filtered: [...payload] };
    }

    case UPDATE_SORT:
      return { ...state, sort: payload };

    case SORT_ARTICLES: {
      switch (sort) {
        case 'newest':
          filtered.sort((a, b) => a.webPublicationDate - b.webPublicationDate);
          break;
        case 'oldest':
          filtered.sort((a, b) => b.webPublicationDate - a.webPublicationDate);
      }
      return { ...state, filtered };
    }
    default:
      return state;
  }
};

export default articles_reducer;
