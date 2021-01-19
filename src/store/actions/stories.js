import { get } from 'axios';
import { SET_LOADING, GET_STORIES, SEARCH_STORIES, SORT_STORIES } from './types';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = 'https://content.guardianapis.com/';

export const setLoading = () => ({
  type: SET_LOADING
});

export const getStories = (section) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await get(`${apiUrl}${section}?show-fields=all&show-elements=all&api-key=${apiKey}`);
    dispatch({
      type: GET_STORIES,
      payload: data.response.results
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

export const sortStories = (e) => (dispatch) => {
  const { value } = e.target;
  dispatch({ type: SORT_STORIES, payload: value });
};
