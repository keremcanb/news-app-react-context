import { useContext, useReducer, createContext } from 'react';
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
  HANDLE_SEARCH,
  HANDLE_SORT,
  HANDLE_PAGINATION
} from '../types';
import reducer from '../reducers/articles';
import axios from '../../constants/axios';

const apiKey = process.env.REACT_APP_API_KEY;
const fields = 'type=article&liveBloggingNow=false&show-fields=all&show-elements=image';
const ArticlesContext = createContext();
const initialState = {
  articles: [],
  article: {},
  sports: [],
  results: [],
  filtered: [],
  loading: false,
  error: false,
  sort: 'newest',
  query: '',
  page: 1,
  pages: 1
};

export const ArticlesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchArticles = async (section, pageSize, page, orderBy) => {
    dispatch({ type: FETCH_ARTICLES_BEGIN });
    try {
      const { data } = await axios.get(
        `${section}?page-size=${pageSize}&page=${page}&order-by=${orderBy}&${fields}&api-key=${apiKey}`
      );
      dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: { articles: data.response.results, pages: data.response.pages }
      });
    } catch (err) {
      dispatch({ type: FETCH_ARTICLES_ERROR });
    }
  };

  const fetchArticle = async (id) => {
    dispatch({ type: FETCH_ARTICLE_BEGIN });
    try {
      const { data } = await axios.get(`${id}?${fields}&api-key=${apiKey}`);
      dispatch({
        type: FETCH_ARTICLE_SUCCESS,
        payload: data.response.content
      });
    } catch (err) {
      dispatch({ type: FETCH_ARTICLE_ERROR });
    }
  };

  const fetchSports = async (section) => {
    try {
      const { data } = await axios.get(`${section}?page-size=3&${fields}&api-key=${apiKey}`);
      dispatch({
        type: FETCH_SPORTS,
        payload: data.response.results
      });
    } catch (err) {
      console.log(err);
    }
  };

  const searchArticles = async (query, pageSize, page, orderBy) => {
    dispatch({ type: SEARCH_ARTICLES_BEGIN });
    try {
      const { data } = await axios.get(
        `search?q=${query}&page-size=${pageSize}&page=${page}&order-by=${orderBy}&${fields}&api-key=${apiKey}`
      );
      dispatch({
        type: SEARCH_ARTICLES_SUCCESS,
        payload: { results: data.response.results, pages: data.response.pages }
      });
    } catch (err) {
      dispatch({ type: SEARCH_ARTICLES_ERROR });
    }
  };

  const searchHandler = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const sortHandler = (e) => {
    const { value } = e.target;
    dispatch({ type: HANDLE_SORT, payload: value });
  };

  const paginationHandler = (value) => {
    dispatch({ type: HANDLE_PAGINATION, payload: value });
  };

  return (
    <ArticlesContext.Provider
      value={{
        ...state,
        fetchArticles,
        fetchArticle,
        searchArticles,
        fetchSports,
        paginationHandler,
        searchHandler,
        sortHandler
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => useContext(ArticlesContext);
