import {
  SET_LOADING,
  FETCH_ARTICLES,
  FETCH_ARTICLE,
  SEARCH_ARTICLES,
  FETCH_SPORTS,
  HANDLE_PAGINATION,
  HANDLE_SEARCH,
  HANDLE_SORT
} from '../types';

const ArticlesReducer = (state, action) => {
  const { type, payload } = action;
  const { page, pages } = state;

  switch (type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: payload.articles,
        filtered: payload.articles,
        pages: payload.pages,
        loading: false
      };
    case FETCH_SPORTS:
      return { ...state, sports: payload, loading: false };
    case FETCH_ARTICLE:
      return { ...state, article: payload, loading: false };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 1 };
    case SEARCH_ARTICLES:
      return {
        ...state,
        results: payload.results,
        filtered: payload.results,
        pages: payload.pages,
        loading: false
      };
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
    case HANDLE_SORT:
      return { ...state, sort: payload };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      throw new Error(`no mathching "${type}" action type`);
  }
};

export default ArticlesReducer;
