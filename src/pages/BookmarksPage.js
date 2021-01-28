import React from 'react';
import { useBookmarksContext } from '../context/actions/bookmarks';
import { PageHero, ArticleGrid, Loader, Error } from '../components';

const BookmarksPage = () => {
  const { loading, bookmarkItems } = useBookmarksContext();

  return !loading ? (
    <>
      {bookmarkItems.length > 0 ? (
        <>
          <PageHero title="All Bookmarks" />
          <ArticleGrid articles={bookmarkItems} />
        </>
      ) : (
        <Error text="No Bookmarks Found" />
      )}
    </>
  ) : (
    <Loader />
  );
};

export default BookmarksPage;
