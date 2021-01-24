import React, { useContext, useReducer, createContext } from 'react';
import reducer from '../reducers/bookmarks';
import { BOOKMARK_ITEM, UNBOOKMARK_ITEM, GET_BOOKMARK_ITEMS, SET_LOADING } from './types';

const initialState = {
  bookmarkItems: [],
  loading: true
};

const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => ({
    type: SET_LOADING
  });

  const bookmarkItem = (item) => {
    dispatch({
      type: BOOKMARK_ITEM,
      payload: item
    });
  };

  const unBookmarkItem = (item) => {
    dispatch({
      type: UNBOOKMARK_ITEM,
      payload: item
    });
  };

  const getBookmarkItems = () => {
    let bookmarkItems = localStorage.getItem('bookmarks');
    bookmarkItems = bookmarkItems === null ? [] : JSON.parse(bookmarkItems);
    dispatch({
      type: GET_BOOKMARK_ITEMS,
      payload: bookmarkItems
    });
  };

  return (
    <BookmarksContext.Provider value={{ ...state, setLoading, bookmarkItem, unBookmarkItem, getBookmarkItems }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export const useBookmarksContext = () => useContext(BookmarksContext);
