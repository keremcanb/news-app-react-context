import { BOOKMARK_ITEM, UNBOOKMARK_ITEM, GET_BOOKMARK_ITEMS, SET_LOADING } from '../types';

const bookmarks_reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case BOOKMARK_ITEM:
      localStorage.setItem('bookmarks', JSON.stringify([payload, ...state.bookmarkItems]));
      return {
        ...state,
        bookmarkItems: [payload, ...state.bookmarkItems]
      };
    case UNBOOKMARK_ITEM: {
      const unbookmarkItems = state.bookmarkItems.filter((item) => item !== payload);
      localStorage.setItem('bookmarks', JSON.stringify(unbookmarkItems));
      return {
        ...state,
        bookmarkItems: state.bookmarkItems.filter((item) => item.id !== payload.id)
      };
    }
    case GET_BOOKMARK_ITEMS:
      return {
        ...state,
        bookmarkItems: payload,
        loading: false
      };
    default:
      return state;
  }
};

export default bookmarks_reducer;
