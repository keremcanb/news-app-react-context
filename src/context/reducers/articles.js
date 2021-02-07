import {
  SET_LOADING,
  GET_ARTICLES,
  GET_ARTICLE,
  SEARCH_ARTICLES,
  GET_ARTICLES_MINOR,
  HANDLE_PAGINATION,
  HANDLE_SEARCH
} from '../types';

const ArticlesReducer = (state, action) => {
  const { type, payload } = action;
  const { page, pages } = state;

  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case GET_ARTICLES:
      return { ...state, articles: payload.articles, pages: payload.pages, isLoading: false };
    case GET_ARTICLES_MINOR:
      return { ...state, articlesMinor: payload, isLoading: false };
    case GET_ARTICLE:
      return { ...state, article: payload, isLoading: false };
    case SEARCH_ARTICLES:
      return { ...state, searchResults: payload.searchResults, pages: payload.pages, isLoading: false };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 1 };
    case HANDLE_PAGINATION:
      if (payload === 'inc') {
        let nextPage = page + 1;
        if (nextPage > pages - 1) {
          nextPage = 1;
        }
        return { ...state, page: nextPage };
      }
      if (payload === 'dec') {
        let prevPage = page - 1;
        if (prevPage < 1) {
          prevPage = pages - 1;
        }
        return { ...state, page: prevPage };
      }
      break;
    default:
      throw new Error(`no mathching "${type}" action type`);
  }
};

export default ArticlesReducer;
