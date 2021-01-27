import React from 'react';
import { useBookmarksContext } from '../context/actions/bookmarks';
import { PageHero, ArticleGrid, Loader } from '../components';

const BookmarksPage = () => {
  const { loading, bookmarkItems } = useBookmarksContext();

  return !loading ? (
    <>
      {bookmarkItems.length > 0 ? (
        <>
          <PageHero title="All Bookmarks" isSort />
          <ArticleGrid articles={bookmarkItems} />
        </>
      ) : (
        <div className="section section-center text-center">
          <h1>No Bookmarks Found</h1>
        </div>
      )}
    </>
  ) : (
    <Loader />
  );
};

export default BookmarksPage;
