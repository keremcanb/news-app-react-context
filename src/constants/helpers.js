/* eslint-disable react-hooks/rules-of-hooks */
import { useBookmarksContext } from '../context/providers/bookmarks';

export const isBookmark = (item) => {
  const { bookmarkItems } = useBookmarksContext();

  if (bookmarkItems !== null) {
    return bookmarkItems.findIndex((bookmark) => bookmark.id === item.id) > -1;
  }
};
