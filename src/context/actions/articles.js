import React, { useContext, useReducer, createContext } from 'react';
import {
  SET_LOADING,
  GET_ARTICLES,
  GET_ARTICLES_MINOR,
  GET_ARTICLE,
  SEARCH_ARTICLES,
  HANDLE_PAGINATION,
  HANDLE_SEARCH
} from '../types';
import reducer from '../reducers/articles';
import axios from '../../constants/axios';

const apiKey = process.env.REACT_APP_API_KEY;
const fields = 'type=article&liveBloggingNow=false&show-fields=all&show-elements=all';

const ArticlesContext = createContext();

const initialState = {
  articles: [],
  articlesMinor: [],
  searchResults: [],
  article: {},
  isLoading: true,
  query: '',
  page: 1,
  pages: 0
};

export const ArticlesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getArticles = async (section, pageSize, page) => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(`${section}?page-size=${pageSize}&page=${page}&${fields}&api-key=${apiKey}`);
      dispatch({
        type: GET_ARTICLES,
        payload: { articles: data.response.results, pages: data.response.pages }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getArticlesMinor = async (section, pageSize) => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(`${section}?page-size=${pageSize}&${fields}&api-key=${apiKey}`);
      dispatch({
        type: GET_ARTICLES_MINOR,
        payload: data.response.results
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getArticle = async (id) => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(`${id}?${fields}&api-key=${apiKey}`);
      dispatch({
        type: GET_ARTICLE,
        payload: data.response.content
      });
    } catch (err) {
      console.log(err);
    }
  };

  const searchArticles = async (query, page) => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(`search?q=${query}&page-size=12&page=${page}&${fields}&api-key=${apiKey}`);
      dispatch({
        type: SEARCH_ARTICLES,
        payload: { searchResults: data.response.results, pages: data.response.pages }
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

  return (
    <ArticlesContext.Provider
      value={{ ...state, getArticles, getArticle, searchArticles, getArticlesMinor, paginationHandler, searchHandler }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => useContext(ArticlesContext);
