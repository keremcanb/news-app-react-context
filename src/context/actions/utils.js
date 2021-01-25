import { useEffect, useContext, useReducer, createContext } from 'react';
import { LOAD_ARTICLES, UPDATE_SORT, SORT_ARTICLES, OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../types';
import { useArticlesContext } from './articles';
import reducer from '../reducers/utils';

const UtilsContext = createContext();

const initialState = {
  articles: [],
  filtered: [],
  sort: 'newest',
  sidebar: false
};

export const UtilsProvider = ({ children }) => {
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

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  return (
    <UtilsContext.Provider value={{ ...state, updateSort, openSidebar, closeSidebar }}>
      {children}
    </UtilsContext.Provider>
  );
};

export const useUtilsContext = () => useContext(UtilsContext);
