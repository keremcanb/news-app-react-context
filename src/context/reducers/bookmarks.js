import { BOOKMARK_ITEM, UNBOOKMARK_ITEM, FETCH_BOOKMARK_ITEMS, SET_LOADING } from '../types';

const BookmarksReducer = (state, action) => {
  const { type, payload } = action;
  const { bookmarkItems } = state;

  switch (type) {
    case FETCH_BOOKMARK_ITEMS:
      return {
        ...state,
        bookmarkItems: payload,
        loading: false
      };
    case BOOKMARK_ITEM:
      localStorage.setItem('bookmarks', JSON.stringify([payload, ...bookmarkItems]));
      return {
        ...state,
        bookmarkItems: [payload, ...bookmarkItems]
      };
    case UNBOOKMARK_ITEM: {
      const unbookmarkItems = bookmarkItems.filter((item) => item !== payload);
      localStorage.setItem('bookmarks', JSON.stringify(unbookmarkItems));
      return {
        ...state,
        bookmarkItems: bookmarkItems.filter((item) => item.id !== payload.id)
      };
    }
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      throw new Error(`no mathching "${type}" action type`);
  }
};

export default BookmarksReducer;
