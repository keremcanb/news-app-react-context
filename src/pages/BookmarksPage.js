import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookmarkItems } from '../store/actions/bookmarks';
import { PageHero, StoryGrid } from '../components';

const BookmarksPage = () => {
  const store = useSelector((state) => state.bookmarks);
  const { bookmarkItems } = store;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarkItems());
  }, [dispatch]);

  return (
    <>
      {bookmarkItems.length > 0 ? (
        <>
          <PageHero title="All Bookmarks" sort />
          <StoryGrid stories={bookmarkItems} />
        </>
      ) : (
        <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>No Bookmarks Found</h1>
      )}
    </>
  );
};

export default BookmarksPage;
