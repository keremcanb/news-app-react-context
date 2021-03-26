import { useContext, useReducer, useEffect, createContext } from 'react';
import { BOOKMARK_ITEM, UNBOOKMARK_ITEM, FETCH_BOOKMARK_ITEMS } from '../types';
import reducer from '../reducers/bookmarks';

const BookmarksContext = createContext();
const initialState = {
  bookmarkItems: [],
  loading: true
};

export const BookmarksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBookmarkItems = () => {
    let bookmarkItems = localStorage.getItem('bookmarks');
    bookmarkItems = bookmarkItems === null ? [] : JSON.parse(bookmarkItems);
    dispatch({
      type: FETCH_BOOKMARK_ITEMS,
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

  useEffect(() => {
    getBookmarkItems();
  }, []);

  return (
    <BookmarksContext.Provider value={{ ...state, bookmarkItem, unBookmarkItem, getBookmarkItems }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export const useBookmarksContext = () => useContext(BookmarksContext);
