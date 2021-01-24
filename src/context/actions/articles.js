import React, { useContext, useReducer, createContext } from 'react';
import { get } from 'axios';
import reducer from '../reducers/articles';
import { SET_LOADING, GET_ARTICLES, GET_ARTICLE, SEARCH_ARTICLES, UPDATE_SORT, SORT_ARTICLES } from './types';

const apiUrl = 'https://content.guardianapis.com/';
const apiKey = 'e85abcee-d943-45e2-815f-c806628ad5d7';
// const apiKey = process.env.REACT_APP_API_KEY;

const initialState = {
  loading: true,
  articles: [],
  article: {},
  searchResults: [],
  sort: 'newest'
};

const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => ({
    type: SET_LOADING
  });

  const getArticles = async (section) => {
    try {
      setLoading();
      const { data } = await get(
        `${apiUrl}${section}?show-fields=all&show-elements=all&page-size=9&type=article&api-key=test`
      );
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
      const { data } = await get(`${apiUrl}${id}?show-fields=all&show-elements=all&type=article&api-key=test`);
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
      const { data } = await get(`${apiUrl}search?q=${keyword}&show-fields=all&show-elements=all&api-key=test`);
      dispatch({
        type: SEARCH_ARTICLES,
        payload: data.response.results
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateSort = (e) => {
    const { value } = e.target;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <ArticlesContext.Provider value={{ ...state, getArticles, getArticle, searchArticles, updateSort }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => useContext(ArticlesContext);
