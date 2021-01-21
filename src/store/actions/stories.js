import { get } from 'axios';
import { SET_LOADING, GET_STORIES, SEARCH_STORIES, SORT_STORIES, GET_ARTICLE } from './types';

const apiUrl = 'https://content.guardianapis.com/';
const apiKey = 'e85abcee-d943-45e2-815f-c806628ad5d7';
// const apiKey = process.env.REACT_APP_API_KEY;

export const setLoading = () => ({
  type: SET_LOADING
});

export const getStories = (section) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await get(`${apiUrl}${section}?show-fields=all&show-elements=all&type=article&api-key=${apiKey}`);
    dispatch({
      type: GET_STORIES,
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

export const searchStories = (searchValue) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await get(`${apiUrl}search?q=${searchValue}&show-fields=all&show-elements=all&api-key=${apiKey}`);
    dispatch({
      type: SEARCH_STORIES,
      payload: data.response.results
    });
  } catch (err) {
    console.log(err);
  }
};

// export const sortStories = (e) => (dispatch) => {
//   const { value } = e.target;
//   dispatch({ type: SORT_STORIES, payload: value });
// };
