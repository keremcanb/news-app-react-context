import { combineReducers } from 'redux';
import bookmarks from './bookmarks';
import articles from './articles';

export default combineReducers({
  bookmarks,
  articles
});
