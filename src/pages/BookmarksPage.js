import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookmarkItems } from '../store/actions/bookmarks';
import { PageHero, StoryGrid, Loader } from '../components';

const BookmarksPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.bookmarks);
  const { bookmarkItems, loading } = store;

  useEffect(() => {
    dispatch(getBookmarkItems());
  }, [dispatch]);

  return !loading ? (
    <>
      {bookmarkItems.length > 0 ? (
        <>
          <PageHero title="All Bookmarks" sort />
          <StoryGrid articles={bookmarkItems} />
        </>
      ) : (
        <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>No Bookmarks Found</h1>
      )}
    </>
  ) : (
    <Loader />
  );
};

export default BookmarksPage;
