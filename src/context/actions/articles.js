import React, { useContext, useReducer, useEffect, createContext } from 'react';
import {
  SET_LOADING,
  GET_ARTICLES,
  GET_ARTICLES_SPORTS,
  GET_ARTICLE,
  SEARCH_ARTICLES,
  HANDLE_PAGINATION,
  HANDLE_SEARCH
} from '../types';
import reducer from '../reducers/articles';
import axios from '../../constants/axios';

// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = '&show-fields=all&show-elements=all&type=article&api-key=e85abcee-d943-45e2-815f-c806628ad5d7';

const ArticlesContext = createContext();

const initialState = {
  loading: true,
  articles: [],
  article: {},
  searchResults: [],
  articlesSports: [],
  query: '',
  page: 1,
  pages: 0
};

export const ArticlesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getArticles = async (section, page) => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(`${section}?page=${page}${apiKey}`);
      dispatch({
        type: GET_ARTICLES,
        payload: { articles: data.response.results, pages: data.response.pages }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getArticlesSports = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(`sport?page-size=3${apiKey}`);
      dispatch({
        type: GET_ARTICLES_SPORTS,
        payload: data.response.results
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getArticle = async (id) => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(`${id}?type=article${apiKey}`);
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
      const { data } = await axios.get(`search?q=${query}?page=${page}${apiKey}`);
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

  useEffect(() => {
    searchArticles(state.query, state.page);
  }, [state.query, state.page]);

  const paginationHandler = (value) => {
    dispatch({ type: HANDLE_PAGINATION, payload: value });
  };

  return (
    <ArticlesContext.Provider
      value={{ ...state, getArticles, getArticle, searchArticles, getArticlesSports, paginationHandler, searchHandler }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => useContext(ArticlesContext);
