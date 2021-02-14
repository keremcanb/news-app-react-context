import React, { useContext, useReducer, createContext } from 'react';
import {
  SET_LOADING,
  FETCH_ARTICLES,
  FETCH_SPORTS,
  FETCH_ARTICLE,
  SEARCH_ARTICLES,
  HANDLE_PAGINATION,
  HANDLE_SEARCH,
  HANDLE_SORT,
  HANDLE_INFINITE_SCROLL
} from '../types';
import reducer from '../reducers/articles';
import axios from '../../constants/axios';

const apiKey = process.env.REACT_APP_API_KEY;
const fields = 'type=article&liveBloggingNow=false&show-fields=all&show-elements=image';
const ArticlesContext = createContext();
const initialState = {
  articles: [],
  sports: [],
  results: [],
  filtered: [],
  article: {},
  loading: true,
  sort: 'newest',
  query: '',
  page: 1,
  pages: 1
};

export const ArticlesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchArticles = async (section, pageSize, page, orderBy) => {
    // dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(
        `${section}?page-size=${pageSize}&page=${page}&order-by=${orderBy}&${fields}&api-key=${apiKey}`
      );
      dispatch({
        type: FETCH_ARTICLES,
        payload: { articles: data.response.results, pages: data.response.pages }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSports = async (section) => {
    dispatch({ type: SET_LOADING });
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

  const fetchArticle = async (id) => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(`${id}?${fields}&api-key=${apiKey}`);
      dispatch({
        type: FETCH_ARTICLE,
        payload: data.response.content
      });
    } catch (err) {
      console.log(err);
    }
  };

  const searchArticles = async (query, pageSize, page, orderBy) => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(
        `search?q=${query}&page-size=${pageSize}&page=${page}&order-by=${orderBy}&${fields}&api-key=${apiKey}`
      );
      dispatch({
        type: SEARCH_ARTICLES,
        payload: { results: data.response.results, pages: data.response.pages }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const searchHandler = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const paginationHandler = (value) => {
    dispatch({ type: HANDLE_PAGINATION, payload: value });
  };

  const infiniteScrollHandler = () => {
    dispatch({ type: HANDLE_INFINITE_SCROLL });
  };

  const sortHandler = (e) => {
    const { value } = e.target;
    dispatch({ type: HANDLE_SORT, payload: value });
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
        sortHandler,
        infiniteScrollHandler
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => useContext(ArticlesContext);
