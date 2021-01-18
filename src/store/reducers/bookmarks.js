import { BOOKMARK_ITEM, UNBOOKMARK_ITEM, GET_BOOKMARK_ITEMS } from '../actions/types';

const initialState = {
  bookmarkItems: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BOOKMARK_ITEM:
      localStorage.setItem('bookmarks', JSON.stringify([payload, ...state.bookmarkItems]));
      return {
        ...state,
        bookmarkItems: [payload, ...state.bookmarkItems]
      };
    case UNBOOKMARK_ITEM:
      const ubookmarkItems = state.bookmarkItems.filter((item) => item !== payload);
      localStorage.setItem('bookmarks', JSON.stringify(ubookmarkItems));
      return {
        ...state,
        bookmarkItems: state.bookmarkItems.filter((item) => item.webTitle !== payload.webTitle)
      };
    case GET_BOOKMARK_ITEMS:
      return {
        ...state,
        bookmarkItems: payload
      };
    default:
      return state;
  }
};
