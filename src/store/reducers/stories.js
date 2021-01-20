import { SET_LOADING, GET_STORIES, SEARCH_STORIES, SORT_STORIES } from '../actions/types';

const initialState = {
  loading: true,
  stories: [],
  searchResults: []
  // sort: 'newest'
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_STORIES:
      return { ...state, stories: payload, loading: false };
    case SEARCH_STORIES:
      return { ...state, searchResults: payload, loading: false };
    // case SORT_STORIES: {
    //   if (sort === 'newest') {
    //     return stories.sort((a, b) => a.webPublicationDate - b.webPublicationDate);
    //   }
    //   if (sort === 'oldest') {
    //     return stories.sort((a, b) => b.webPublicationDate - a.webPublicationDate);
    //   }
    //   return { ...state, filtered };
    // }
    default:
      return state;
  }
};
