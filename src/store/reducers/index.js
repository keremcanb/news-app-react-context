import { combineReducers } from 'redux';
import bookmarks from './bookmarks';
import stories from './stories';

export default combineReducers({
  bookmarks,
  stories
});
