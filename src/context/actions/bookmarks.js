import React, { useContext, useReducer, createContext } from 'react';
import { BOOKMARK_ITEM, UNBOOKMARK_ITEM, GET_BOOKMARK_ITEMS, SET_LOADING } from '../types';
import reducer from '../reducers/bookmarks';

const BookmarksContext = createContext();

const initialState = {
  bookmarkItems: [],
  isLoading: true
};

export const BookmarksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBookmarkItems = () => {
    dispatch({ type: SET_LOADING });
    let bookmarkItems = localStorage.getItem('bookmarks');
    bookmarkItems = bookmarkItems === null ? [] : JSON.parse(bookmarkItems);
    dispatch({
      type: GET_BOOKMARK_ITEMS,
      payload: bookmarkItems
    });
  };

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

  return (
    <BookmarksContext.Provider value={{ ...state, bookmarkItem, unBookmarkItem, getBookmarkItems }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export const useBookmarksContext = () => useContext(BookmarksContext);
