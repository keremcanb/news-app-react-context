import {
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLE_BEGIN,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_ERROR,
  FETCH_SPORTS,
  SEARCH_ARTICLES_BEGIN,
  SEARCH_ARTICLES_SUCCESS,
  SEARCH_ARTICLES_ERROR,
  HANDLE_PAGINATION,
  HANDLE_SEARCH,
  HANDLE_SORT
} from '../types';

const ArticlesReducer = (state, action) => {
  const { type, payload } = action;
  const { page, pages } = state;

  switch (type) {
    // FETCH ARTICLES
    case FETCH_ARTICLES_BEGIN:
      return { ...state, loading: true };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: payload.articles,
        filtered: payload.articles,
        pages: payload.pages,
        loading: false
      };
    case FETCH_ARTICLES_ERROR:
      return { ...state, loading: false, error: true };
    // FETCH ARTICLE
    case FETCH_ARTICLE_BEGIN:
      return { ...state, loading: true, error: false };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: payload,
        loading: false
      };
    case FETCH_ARTICLE_ERROR:
      return { ...state, loading: false, error: true };
    // SEARCH
    case SEARCH_ARTICLES_BEGIN:
      return { ...state, loading: true };
    case SEARCH_ARTICLES_SUCCESS:
      return {
        ...state,
        results: payload.results,
        filtered: payload.results,
        pages: payload.pages,
        loading: false
      };
    case SEARCH_ARTICLES_ERROR:
      return { ...state, loading: false, error: true };
    case FETCH_SPORTS:
      return { ...state, sports: payload, loading: false };
    // HANDLERS
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 1 };
    case HANDLE_SORT:
      return { ...state, sort: payload };
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
