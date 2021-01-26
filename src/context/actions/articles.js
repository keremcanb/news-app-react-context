import React, { useContext, useReducer, createContext } from 'react';
import { SET_LOADING, GET_ARTICLES, GET_ARTICLE, SEARCH_ARTICLES } from '../types';
import reducer from '../reducers/articles';
import axios from '../../constants/axios';

// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = '&show-fields=all&show-elements=all&type=article&api-key=e85abcee-d943-45e2-815f-c806628ad5d7';

const ArticlesContext = createContext();

const initialState = {
  loading: true,
  articles: [],
  article: {},
  searchResults: []
};

export const ArticlesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => ({
    type: SET_LOADING
  });

  const getArticles = async (section, size) => {
    try {
      setLoading();
      const { data } = await axios.get(`${section}?page-size=${size}${apiKey}`);
      dispatch({
        type: GET_ARTICLES,
        payload: data.response.results
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getArticle = async (id) => {
    try {
      setLoading();
      const { data } = await axios.get(`${id}?type=article${apiKey}`);
      dispatch({
        type: GET_ARTICLE,
        payload: data.response.content
      });
    } catch (err) {
      console.log(err);
    }
  };

  const searchArticles = async (keyword) => {
    try {
      setLoading();
      const { data } = await axios.get(`search?q=${keyword}${apiKey}`);
      dispatch({
        type: SEARCH_ARTICLES,
        payload: data.response.results
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ArticlesContext.Provider value={{ ...state, getArticles, getArticle, searchArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => useContext(ArticlesContext);
