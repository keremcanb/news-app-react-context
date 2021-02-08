import React from 'react';
import { useBookmarksContext } from '../context/providers/bookmarks';
import { PageHero, ArticleGrid, Loader, Error } from '../components';

const BookmarksPage = () => {
  const { loading, bookmarkItems } = useBookmarksContext();

  if (loading) {
    return <Loader />;
  }
  if (bookmarkItems.length < 1) {
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
