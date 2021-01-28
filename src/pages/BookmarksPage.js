import React from 'react';
import { useBookmarksContext } from '../context/actions/bookmarks';
import { PageHero, ArticleGrid, Loader, Error } from '../components';

const BookmarksPage = () => {
  const { loading, bookmarkItems } = useBookmarksContext();

  if (loading) {
    return <Loader />;
  }
  if (bookmarkItems.length < 0) {
    return <Error text="No Bookmarks Found" />;
  }
  return (
    <>
      <PageHero title="All Bookmarks" />
      <ArticleGrid articles={bookmarkItems} />
    </>
  );
};

export default BookmarksPage;
