import { useEffect, useContext, useReducer, createContext } from 'react';
import { LOAD_ARTICLES, UPDATE_SORT, SORT_ARTICLES } from '../types';
import { useArticlesContext } from './articles';
import reducer from '../reducers/sort';

const SortContext = createContext();

const initialState = {
  articles: [],
  filtered: [],
  sort: 'newest'
};

export const SortProvider = ({ children }) => {
  const { articles } = useArticlesContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { sort } = state;

  useEffect(() => {
    dispatch({ type: LOAD_ARTICLES, payload: articles });
    dispatch({ type: SORT_ARTICLES });
  }, [articles, sort]);

  const updateSort = (e) => {
    const { value } = e.target;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return <SortContext.Provider value={{ ...state, updateSort }}>{children}</SortContext.Provider>;
};

export const useSortContext = () => useContext(SortContext);
