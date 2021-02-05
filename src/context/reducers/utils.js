import { LOAD_ARTICLES, UPDATE_SORT, SORT_ARTICLES, OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../types';

const utils_reducer = (state, action) => {
  const { type, payload } = action;
  const { sort, filtered } = state;

  switch (type) {
    case LOAD_ARTICLES: {
      return { ...state, articles: [...payload], filtered: [...payload] };
    }
    case UPDATE_SORT:
      return { ...state, sort: payload };
    case SORT_ARTICLES: {
      if (sort === 'newest') {
        filtered.sort((a, b) => b.webPublicationDate.localeCompare(a.webPublicationDate));
      }
      if (sort === 'oldest') {
        filtered.sort((a, b) => a.webPublicationDate.localeCompare(b.webPublicationDate));
      }
      return { ...state, filtered };
    }
    case OPEN_SIDEBAR:
      return { ...state, sidebar: true };
    case CLOSE_SIDEBAR:
      return { ...state, sidebar: false };
    default:
      throw new Error(`no mathching "${type}" action type`);
  }
};

export default utils_reducer;
