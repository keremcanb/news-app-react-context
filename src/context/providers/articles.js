import React, { useContext, useReducer, useEffect, createContext } from 'react';
import {
  SET_LOADING,
  GET_ARTICLES,
  GET_ARTICLES_MINOR,
  GET_ARTICLE,
  SEARCH_ARTICLES,
  HANDLE_PAGINATION,
  HANDLE_SEARCH,
  HANDLE_SORT,
  SORT_ARTICLES
} from '../types';
import reducer from '../reducers/articles';
import axios from '../../constants/axios';

const apiKey = process.env.REACT_APP_API_KEY;
const fields = 'type=article&liveBloggingNow=false&show-fields=all&show-elements=all';
const ArticlesContext = createContext();
const initialState = {
  articles: [],
  sports: [],
  searchResults: [],
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

  const fetchArticles = async (section, pageSize, page) => {
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

  const fetchSports = async (section, pageSize) => {
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

  const fetchArticle = async (id) => {
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

  const searchArticles = async (query, pageSize, page) => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(
        `search?q=${query}&page-size=${pageSize}&page=${page}&${fields}&api-key=${apiKey}`
      );
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

  const sortHandler = (e) => {
    const { value } = e.target;
    dispatch({ type: HANDLE_SORT, payload: value });
  };

  useEffect(() => {
    dispatch({ type: SORT_ARTICLES });
  }, [state.sort]);

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
