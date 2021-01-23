import { get } from 'axios';
import { SET_LOADING, GET_ARTICLES, GET_ARTICLE, SEARCH_ARTICLES, UPDATE_SORT, SORT_ARTICLES } from './types';

const apiUrl = 'https://content.guardianapis.com/';
const apiKey = 'e85abcee-d943-45e2-815f-c806628ad5d7';
// const apiKey = process.env.REACT_APP_API_KEY;

export const setLoading = () => ({
  type: SET_LOADING
});

export const getArticles = (section) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await get(
      `${apiUrl}${section}?show-fields=all&show-elements=all&page-size=9&type=article&api-key=${apiKey}`
    );
    dispatch({
      type: GET_ARTICLES,
      payload: data.response.results
    });
  } catch (err) {
    console.log(err);
  }
};

export const getArticle = (id) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await get(`${apiUrl}${id}?show-fields=all&show-elements=all&type=article&api-key=${apiKey}`);
    dispatch({
      type: GET_ARTICLE,
      payload: data.response.content
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchArticles = (keyword) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await get(`${apiUrl}search?q=${keyword}&show-fields=all&show-elements=all&api-key=${apiKey}`);
    dispatch({
      type: SEARCH_ARTICLES,
      payload: data.response.results
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateSort = (e) => async (dispatch) => {
  const { value } = e.target;
  dispatch({ type: UPDATE_SORT, payload: value });
};
