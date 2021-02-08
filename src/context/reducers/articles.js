import {
  SET_LOADING,
  GET_ARTICLES,
  GET_ARTICLE,
  SEARCH_ARTICLES,
  GET_ARTICLES_MINOR,
  HANDLE_PAGINATION,
  HANDLE_SEARCH,
  HANDLE_SORT,
  SORT_ARTICLES
} from '../types';

const ArticlesReducer = (state, action) => {
  const { type, payload } = action;
  const { page, pages, sort, filtered } = state;

  switch (type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: payload.articles,
        filtered: payload.articles,
        pages: payload.pages,
        isLoading: false
      };
    case GET_ARTICLES_MINOR:
      return { ...state, articlesMinor: payload, isLoading: false };
    case GET_ARTICLE:
      return { ...state, article: payload, isLoading: false };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 1 };
    case SEARCH_ARTICLES:
      return {
        ...state,
        searchResults: payload.searchResults,
        filtered: payload.searchResults,
        pages: payload.pages,
        isLoading: false
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
    case SORT_ARTICLES: {
      if (sort === 'newest') {
        filtered.sort((a, b) => b.webPublicationDate.localeCompare(a.webPublicationDate));
      }
      if (sort === 'oldest') {
        filtered.sort((a, b) => a.webPublicationDate.localeCompare(b.webPublicationDate));
      }
      return { ...state, filtered };
    }
    case SET_LOADING:
      return { ...state, isLoading: true };
    default:
      throw new Error(`no mathching "${type}" action type`);
  }
};

export default ArticlesReducer;
